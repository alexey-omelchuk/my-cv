"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const Text2GenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1.5,
        delay: stagger(0.35),
      }
    );
  }, [scope.current, animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            // mr-[0.3em] añade un espacio proporcional al tamaño de la letra
            className="opacity-0 inline-block text-inherit font-bold mr-[0.3em]" 
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("inline-block", className)}>
      {/* whitespace-pre-wrap obliga a respetar los espacios y saltos de línea */}
      <div className="leading-none tracking-tighter whitespace-pre-wrap">
        {renderWords()}
      </div>
    </div>
  );
};