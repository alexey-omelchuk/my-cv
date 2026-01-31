"use client";
import React from 'react';

interface SocialMagicIconProps {
  icon: React.ReactNode;
  link: string;
}

export const SocialMagicIcon = ({ icon, link }: SocialMagicIconProps) => {
  const isMail = link.includes('mailto:');

  return (
    <a
      href={link}
      target={isMail ? '_self' : '_blank'}
      rel="noreferrer"
      className="relative inline-flex h-10 w-10 overflow-hidden rounded-full p-[1px] focus:outline-none group transition-all hover:scale-110"
    >
      {/* El borde animado con tu paleta Azul/Púrpura */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CBACF9_0%,#393BB2_50%,#CBACF9_100%)]" />
      
      {/* El fondo y el efecto glow al pasar el ratón */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black-100 text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black-100/80 group-hover:text-purple group-hover:shadow-[inset_0_0_15px_rgba(57,59,178,0.5)]">
        {icon}
      </span>
    </a>
  );
};