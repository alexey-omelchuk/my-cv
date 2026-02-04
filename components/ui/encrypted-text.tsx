"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const EncryptedText = ({
  text,
  className,
  revealDelayMs = 30, // Más rápido
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  flipDelayMs = 40,
  revealedClassName,
  encryptedClassName,
}: {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  revealedClassName?: string;
  encryptedClassName?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [revealCount, setRevealCount] = useState(0);
  const [scramble, setScramble] = useState("");
  const containerRef = useRef<HTMLSpanElement>(null);

  // Solución Hydration: No renderizar nada rándom en el servidor
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detector de visibilidad nativo (más ligero)
  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsIntersecting(true);
    }, { threshold: 0.1 });
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  // Animación optimizada con un solo bucle
  useEffect(() => {
    if (!isIntersecting || !text || !mounted) return;

    let startTime = performance.now();
    let lastFlip = 0;
    let frameId: number;

    const loop = (now: number) => {
      const elapsed = now - startTime;
      // Calculamos cuántas letras revelar
      const count = Math.min(text.length, Math.floor(elapsed / revealDelayMs));
      
      setRevealCount(count);

      // Solo cambiamos los símbolos rándom cada X milisegundos para no laguear
      if (now - lastFlip > flipDelayMs) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (i < count) {
            result += text[i];
          } else if (text[i] === " ") {
            result += " ";
          } else {
            result += charset[Math.floor(Math.random() * charset.length)];
          }
        }
        setScramble(result);
        lastFlip = now;
      }

      if (count < text.length) {
        frameId = requestAnimationFrame(loop);
      } else {
        setScramble(text);
      }
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [isIntersecting, text, revealDelayMs, flipDelayMs, charset, mounted]);

  // En el servidor o antes de montar, devolvemos el texto plano (Hydration fix)
  if (!mounted) return <span className={className}>{text}</span>;

  const currentDisplay = scramble || text;

  return (
    <span ref={containerRef} className={cn("inline-block whitespace-pre-wrap", className)}>
      {currentDisplay.split("").map((char, i) => {
        const isRevealed = i < revealCount;
        return (
          <span
            key={i}
            className={cn(isRevealed ? revealedClassName : encryptedClassName)}
          >
            {/* Usamos espacio de no ruptura para que el layout no salte */}
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};