"use client";
import React from 'react'
import { MagicButton } from './MagicButton'
import { SocialMagicIcon } from './ui/SocialMagicIcon'
import { FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import { Github, Mail } from 'lucide-react'
import { motion } from "motion/react" // Asegúrate de usar "motion/react" si es tu config

function Footer() {
  const socials = [
    { id: 1, icon: <FaLinkedin className="h-5 w-5" />, link: "https://www.linkedin.com/in/alexey-omelchuk/" },
    { id: 2, icon: <Github className="h-5 w-5" />, link: "https://github.com/alexey-omelchuk" },
    { id: 3, icon: <Mail className="h-5 w-5" />, link: "mailto:alexeyeuk@gmail.com" },
  ];

  return (
    <footer className="w-full pt-24 pb-10 relative overflow-hidden bg-transparent" id="contact">
      <div className="flex flex-col items-center z-10 px-4">
        
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-none">
            Ready&ensp;to <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">
              COLLABORATE?
            </span>
          </h2>
          
          <p className="text-white/40 mt-8 uppercase tracking-[0.3em] text-[10px] md:text-xs italic max-w-md mx-auto">
            <b>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
          </b></p>
        </motion.div>
        
        {/* BOTÓN */}
        <div className="mb-20">
          <a href="mailto:alexeyeuk@gmail.com">
            <MagicButton 
              icon={null} 
              text="Contact Me" 
              icon2={<FaLocationArrow className='ml-2'/>} 
            />
          </a>
        </div>

        {/* BARRA INFERIOR */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-10 gap-10 border-t border-white/5 pt-10">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className='text-white/50 md:text-sm text-xs font-medium uppercase tracking-widest'>
              © 2026 Alexey Omelchuk. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((profile) => (
              <SocialMagicIcon 
                key={profile.id} 
                icon={profile.icon} 
                link={profile.link} 
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;