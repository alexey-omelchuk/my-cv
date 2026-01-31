"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="absolute inset-0 w-full h-full bg-transparent flex flex-col items-center justify-center overflow-hidden z-0">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.2}
          maxSize={1}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Alexey
      </h1> */}
    </div>
  );
}
