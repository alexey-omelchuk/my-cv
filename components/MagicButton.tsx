"use client";
import React from "react";

interface MagicButtonProps {
  text: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  otherClasses?: string;
  gradientColor?: string; 
  handleClick?: () => void;
}

export const MagicButton = ({
  text,
  icon,
  icon2,
  otherClasses,
  gradientColor,
  handleClick,
}: MagicButtonProps) => {
  // Gradiente por defecto
  const activeGradient = gradientColor || "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]";

  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none transition-all duration-300 active:scale-95 group ${text ? 'w-full md:w-60' : 'w-12'}`}
    >
      <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${activeGradient}`} />
      
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black-100 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black-100/80 ${otherClasses}`}
      >
        {icon}
        {text && <span className="text-center ml-2">{text}</span>}
        {icon2}
      </span>
    </button>
  );
};