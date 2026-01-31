"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconSchool, IconChevronRight } from "@tabler/icons-react";

export const EducationSection = () => {
  const skills = [
    "Software Development", "Business Analysis", "Process Automation", 
    "Databases", "Problem Solving", "Software Engineering", 
    "Business Leadership", "Computer Programming", "Bash", 
    "Artificial Intelligence", "Automation", "Project Management"
  ];

  return (
    <section id="education" className="w-full bg-transparent relative z-10 py-24">
      <div className="max-w-[98vw] mx-auto px-4">
        
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-none">
              Academic <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">
                FOUNDATION
              </span>
            </h2>
            <p className="text-white/40 mt-4 uppercase tracking-[0.3em] text-[10px] italic">
              Formal education and core competencies
            </p>
          </motion.div>
        </div>

        {/* Tarjeta de Educación */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-10">
            
            {/* Header: Institución y Bloque de Estado/Logo */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-white/5 pb-10">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                  <IconSchool className="text-cyan-400 h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight italic font-[family-name:var(--font-syne)]">
                    Polytechnic University of Valencia (UPV)
                  </h3>
                  <p className="text-cyan-400/90 text-lg md:text-xl font-medium mt-1">
                    Double Degree: Computer Science + Business Management (ADE)
                  </p>
                </div>
              </div>
              
              {/* BLOQUE DERECHA: Badge arriba e Imagen Grande debajo */}
              <div className="flex flex-col items-start lg:items-center gap-6 self-start lg:self-center">
                {/* 1. Badge de progreso (ARRIBA) */}
                <div className="flex items-center px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-[10px] md:text-xs font-mono whitespace-nowrap shadow-sm">
                  <span className="relative flex h-2 w-2 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  Currently in 4th year / 5-year program
                </div>

                {/* 2. Imagen UPV corregida y más grande (DEBAJO) */}
                <div className="relative h-20 w-48 md:h-24 md:w-60 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 overflow-hidden group">
                    <img 
                        src="/img/upv.webp" 
                        alt="UPV Logo" 
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.currentTarget.style.opacity = '0.5')}
                    />
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="text-slate-300 leading-relaxed text-lg md:text-xl space-y-6 text-justify font-light">
              <p>
                I am currently pursuing a rigorous <span className="font-bold text-white">Double Degree</span> at UPV, 
                integrating the technical depth of <span className="font-bold text-white">Computer Science</span> with 
                the strategic foundation of <span className="font-bold text-white">Business Administration and Management</span>.
              </p>
              <p>
                This dual perspective allows me to not only build complex software but also 
                understand its <span className="font-bold text-white text-glow-sm">impact on the business ecosystem</span>, 
                bridging the gap between high-level engineering and strategic corporate leadership.
              </p>
            </div>

            {/* Grid de Aptitudes */}
            <div className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center px-4 py-2.5 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] font-bold text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all duration-300 group"
                  >
                    <IconChevronRight className="h-4 w-4 mr-2 text-cyan-500/30 group-hover:text-cyan-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};