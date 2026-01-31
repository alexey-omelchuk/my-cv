import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground() {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-transparent relative flex items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
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
