"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamContainer({ children }: { children: React.ReactNode }) {
  return (
    // Quitamos paddings excesivos que limiten el ancho
    <TracingBeam className="w-full">
      <div className="w-full antialiased relative">
        {children}
      </div>
    </TracingBeam>
  );
}