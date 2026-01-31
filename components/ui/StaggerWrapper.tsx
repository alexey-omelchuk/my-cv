"use client";
import React, { useEffect } from "react";
import { stagger, useAnimate } from "motion/react";

interface StaggerWrapperProps {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
}

export const StaggerWrapper = ({ 
  children, 
  delay = 0, 
  staggerDelay = 0.5 
}: StaggerWrapperProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // 1. Verificamos que el contenedor (scope) exista
    if (!scope.current) return;

    // 2. Buscamos elementos hijos con la clase .animate-item
    const elements = scope.current.querySelectorAll(".animate-item");
    
    // 3. Solo ejecutamos la animación si encontramos elementos
    if (elements.length > 0) {
      animate(
        ".animate-item",
        { 
          opacity: 1, 
          filter: "blur(0px)",
          y: 0 
        },
        {
          duration: 1,
          // 'startDelay' aplica el retraso inicial antes de empezar el 'stagger'
          delay: stagger(staggerDelay, { startDelay: delay }),
          ease: [0.21, 0.47, 0.32, 0.98], // Curva de salida elegante
        }
      );
    }
  }, [scope, animate, delay, staggerDelay]);

  return (
    <div ref={scope}>
      {children}
    </div>
  );
};