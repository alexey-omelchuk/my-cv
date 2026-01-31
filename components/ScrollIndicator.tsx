"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { MagicButton } from './MagicButton'; // Ajusta la ruta si es necesario

const ScrollIndicator = () => {
  const scrollToNext = () => {
    // Busca la sección por ID (asegúrate de que tu siguiente sección tenga id="education")
    const nextSection = document.getElementById('about') || document.getElementById('services');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center z-20">
      
      
      {/* 1. Eliminamos el cierre </MagicButton>
          2. El componente ahora es "self-closing" (termina en />)
          3. Usamos handleClick en lugar de onClick
      */}
      <MagicButton 
        text="" 
        icon={<ChevronDown className="h-6 w-6 text-cyan-400" />} 
        handleClick={scrollToNext} 
        gradientColor="bg-transparent"
        otherClasses="!w-10 !h-10 !bg-black-100/5 border border-cyan-400/0 animate-bounce"
      />
    </div>
  );
};

export default ScrollIndicator;