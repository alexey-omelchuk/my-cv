"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  let wordsArray = words.split(" ");

  useEffect(() => {
    const runAnimation = () => {
      animate(
        "span",
        { opacity: 0, filter: filter ? "blur(10px)" : "none" },
        { duration: 0 }
      ).then(() => {
        animate(
          "span",
          { opacity: 1, filter: filter ? "blur(0px)" : "none" },
          { duration: duration ? duration : 1, delay: stagger(0.2) }
        );
      });
    };
    runAnimation();
    intervalRef.current = setInterval(runAnimation, (duration ? duration : 1) * 1000 * wordsArray.length * 0.2 + 500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scope.current, words, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
