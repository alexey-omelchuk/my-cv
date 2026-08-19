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
    // 1. Check that the container (scope) exists
    if (!scope.current) return;

    // 2. Find child elements with the .animate-item class
    const elements = scope.current.querySelectorAll(".animate-item");
    
    // 3. Only run the animation if elements are found
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
          // 'startDelay' applies initial delay before starting the stagger
          delay: stagger(staggerDelay, { startDelay: delay }),
          ease: [0.21, 0.47, 0.32, 0.98], // Elegant easing curve
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