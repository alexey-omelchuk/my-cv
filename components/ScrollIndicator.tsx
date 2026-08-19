"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { MagicButton } from './MagicButton'; // Adjust path if needed

const ScrollIndicator = () => {
  const scrollToNext = () => {
    // Find section by ID (make sure your next section has id="education")
    const nextSection = document.getElementById('about') || document.getElementById('services');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center z-20">
      
      
      {/* Self-closing component with handleClick instead of onClick */}
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