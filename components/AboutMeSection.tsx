"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  IconUser, 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconTerminal2,
  IconBriefcase,
  IconSparkles
} from "@tabler/icons-react";

export const AboutMeSection = () => {
  const contactInfo = [
    { icon: <IconMail className="h-5 w-5" />, label: "Email", value: "alexeyeuk@gmail.com", href: "mailto:alexeyeuk@gmail.com" },
    { icon: <IconPhone className="h-5 w-5" />, label: "Phone", value: "+34 677 64 56 85", href: "tel:+34677645685" },
    { icon: <IconMapPin className="h-5 w-5" />, label: "Location", value: "Valencia", href: "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd60487c5d604077:0x150fdf31fdc5a6f6?sa=X&ved=1t:8290&ictx=111" },
  ];

  return (
    <section id="about" className="w-full bg-transparent relative z-10 py-24">
      <div className="max-w-[98vw] mx-auto px-4">
        
        {/* Título de la Sección estilo Foundation */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-none">
              The&ensp;Hybrid <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">
                VISION
              </span>
            </h2>
            <p className="text-white/50 mt-6 uppercase tracking-[0.3em] text-[10px] italic">
              <b>Constant learning in technology and business strategy</b>
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Narrativa Personal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                  <IconUser className="text-cyan-400 h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase font-[family-name:var(--font-syne)]">
                  About&ensp;Me
                </h3>
              </div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-justify font-light">
                <p>
                  I am currently a student pursuing a double degree in <span className="text-white font-bold">Computer Engineering and Business Administration</span>, with a strong inclination towards technology and the business world. I am currently in my <span className="text-cyan-400 font-bold">fourth year</span>, and my education allows me to develop a hybrid profile that combines programming skills with a solid foundation in management.
                </p>
                
                <p>
                  I have advanced knowledge in <span className="text-white font-medium">Java, JavaScript, Bash, Linux, PHP, mySQL, and Git</span>, as well as an intermediate level in <span className="text-violet-400 font-medium italic">ethical hacking</span>, enabling me to detect and mitigate common vulnerabilities such as those in the <span className="text-white font-bold underline decoration-cyan-500/50">OWASP Top 10</span>. Additionally, I have experience in Python, Docker, and frameworks like React, Vue, and Laravel.
                </p>

                <p>
                  Although I am still in the process of learning and do not consider myself an expert in management, my education in ADE complements my technological skills in a balanced way, providing me with the necessary perspective to tackle projects that have an impact in competitive environments. 
                </p>

                <blockquote className="border-l-2 border-emerald-500/50 pl-6 py-2 italic text-emerald-400/80 text-base bg-emerald-500/5">
                  &quot;I constantly strive to learn, both in the university setting and independently, and I adapt quickly to new challenges.&quot;
                </blockquote>
              </div>
            </div>
            
            <IconTerminal2 className="absolute -bottom-10 -right-10 text-white/[0.03] h-64 w-64 rotate-12 pointer-events-none" />
          </motion.div>

          {/* Columna Derecha: Contacto y Enfoque */}
          <div className="flex flex-col gap-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 shadow-xl"
            >
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 italic opacity-50">Personal&ensp;Data</h4>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} className="flex items-center gap-4 group transition-all">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                      {React.cloneElement(info.icon as React.ReactElement, { className: "text-slate-400 group-hover:text-cyan-400 transition-colors" })}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{info.label}</p>
                      <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-md border border-emerald-500/20 rounded-[2.5rem] p-8 relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <IconSparkles className="text-emerald-400 h-5 w-5 animate-pulse" />
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] italic">Growth&ensp;Mindset</h4>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed italic relative z-10">
                &quot;My constant desire to learn equips me to face challenges in both technological and business fields, contributing a strategic perspective.&quot;
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <IconBriefcase size={80} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};