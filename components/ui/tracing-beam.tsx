"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // 1. CORRECCIÓN INFINITO: "end end" hace que el 100% sea el final del contenido
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 2. RECALCULAR ALTURA: ResizeObserver para que si cargan imágenes no se corte
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  // 3. PROGRESO SÓLIDO: useSpring para que la línea se llene suavemente
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 90,
  });

  // Sincronizamos los gradientes originales con el progreso real
  const y1 = useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-full", className)}
    >
      {/* POSICIONAMIENTO MÓVIL: left-0 para no robar espacio */}
      <div className="absolute top-3 left-[-26px] md:left-2 z-20">
        <motion.div
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm bg-black"
        >
          <motion.div
            animate={{
            //   backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
            //   borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
                backgroundColor: "white",
                borderColor: "white",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>

        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* LÍNEA GRIS (Fondo) */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="2"
          ></motion.path>

          {/* LÍNEA CIAN (Progreso que se queda pintado) */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            style={{
              pathLength: pathLength, // Esto hace que se llene y no desaparezca
            }}
          ></motion.path>

          {/* LÍNEA DESTELLO (Efecto beam original) */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.5"
            style={{
              pathLength: pathLength,
            }}
          ></motion.path>

          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0" x2="0"
              y1={y1} y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* MARGEN DE CONTENIDO: ml-8 en móvil para ganar ancho */}
      <div ref={contentRef} className="ml-4 md:ml-24">
        {children}
      </div>
    </motion.div>
  );
};