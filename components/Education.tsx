"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconSchool, IconChevronRight, IconCode, IconRocket } from "@tabler/icons-react";
import { EncryptedText } from "./ui/encrypted-text";

export const EducationSection = () => {
  const hardSkills = [
    "Desarrollo Full-stack (Next.js)", 
    "Hacking Ofensivo (eCPPTv3)", 
    "IA y Automatización (n8n)", 
    "Infraestructura (Docker/Linux)", 
    "Python & Scripting en Bash", 
    "Análisis de Negocio"
  ];

  const softSkills = [
    "Hambre de aprender", 
    "Aprendizaje bestial", 
    "Autodidacta por naturaleza", 
    "Mentalidad competitiva", 
    "Resolución de problemas", 
    "Proactividad real"
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
              FORMACIÓN <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">
                Y ACTITUD
              </span>
            </h2>
            <p className="text-white/90 mt-4 uppercase tracking-[0.3em] text-[10px] italic">
              <b><EncryptedText text="No solo es el título, es no quedarse nunca atrás" /></b>
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
          <div className="relative z-10 flex flex-col gap-10">
            
            {/* Header: Institución */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-white/5 pb-10">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                  <IconSchool className="text-cyan-400 h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight italic font-[family-name:var(--font-syne)]">
                    Universidad Politécnica de Valencia (UPV)
                  </h3>
                  <p className="text-cyan-400/90 text-lg md:text-xl font-medium mt-1">
                    Doble Grado: Ingeniería Informática + ADE
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-start lg:items-center gap-6">
                <div className="flex items-center px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-[10px] md:text-xs font-mono shadow-sm">
                  <span className="relative flex h-2 w-2 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  4º año / 5 años
                </div>
                <div className="relative h-28 w-40 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-4">
                    <img src="/img/upv.webp" alt="UPV Logo" className="h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Narrativa Personal Resaltada */}
            <div className="text-slate-300 leading-relaxed text-lg md:text-xl space-y-6 text-justify font-light">
              <p>
                Estoy en <span className="text-cyan-400 font-bold">4º de Informática y ADE</span>. Pero más allá de la uni, soy de los que no esperan a que les enseñen las cosas. Soy <span className="text-cyan-400 font-bold">autodidacta por naturaleza</span>; si algo me interesa, me <span className="text-emerald-400 font-bold text-glow-sm">obsesiono hasta que lo domino</span>.
              </p>
              <p>
                Tengo ese <span className="text-emerald-400 font-bold text-glow-sm">hambre de saber siempre más</span> y una <span className="text-cyan-400 font-bold">mentalidad competitiva</span>: aprendo rápido para dar soluciones que otros ni ven. No me conformo con que las cosas "funcionen", busco que sean <span className="text-emerald-400 font-bold">las más seguras</span> y las que <span className="text-cyan-400 font-bold">más ayuden al negocio</span>.
              </p>
            </div>

            {/* Grid de Skills divididas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
              
              {/* Columna Hard Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <IconCode className="text-cyan-400 h-5 w-5" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] italic opacity-70">Hard Skills</h4>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {hardSkills.map((skill, i) => (
                    <div key={i} className="flex items-center px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all duration-300 group">
                      <IconChevronRight className="h-4 w-4 mr-2 text-cyan-500/30 group-hover:text-cyan-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna Soft Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <IconRocket className="text-emerald-400 h-5 w-5" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] italic opacity-70">Soft Skills</h4>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {softSkills.map((skill, i) => (
                    <div key={i} className="flex items-center px-4 py-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-xs font-bold text-emerald-400/80 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-300 group">
                      <IconChevronRight className="h-4 w-4 mr-2 text-emerald-400/30 group-hover:text-emerald-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};