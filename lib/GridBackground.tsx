import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-transparent dark:bg-grid-white bg-grid-black flex items-center justify-center absolute top-0 left-0">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[80px_80px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay: círculo blanco que se difumina hacia azul */}
      <div className="bg-radial-white-blue" />
      {/* Radial gradient overlay for a smooth fade effect, usando máscara radial como el original */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black mask-radial-fade" />
      {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p> */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Dynamic Web Magic
            </h2>
        </div>
      </div>
    </div>
  );
}
