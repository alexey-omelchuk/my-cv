"use client";
import React from 'react'
import { Spotlight } from '@/lib/Spotlight'
import { Text2GenerateEffect } from './ui/text2-generate-effect'
import { FaBriefcase, FaFilePdf, FaLinkedin } from 'react-icons/fa'
import { Github, Mail } from 'lucide-react'
import { MagicButton } from './MagicButton'
import { SocialMagicIcon } from './ui/SocialMagicIcon'
import { StaggerWrapper } from './ui/StaggerWrapper'
import ScrollIndicator from './ScrollIndicator';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';




export const Hero = () => {
    const t = useTranslations("hero");
    const pathname = usePathname();
    const isEnglish = pathname.startsWith("/en");
    const cvFile = "/CV-Alexey.pdf";

    const socials = [
        { id: 1, icon: <FaLinkedin className="h-5 w-5" />, link: "https://www.linkedin.com/in/alexey-omelchuk/" },
        { id: 2, icon: <Github className="h-5 w-5" />, link: "https://github.com/alexey-omelchuk" },
        { id: 3, icon: <Mail className="h-5 w-5" />, link: "mailto:alexeyeuk@gmail.com" },
    ];

    const purpleGradient = "bg-[conic-gradient(from_90deg_at_50%_50%,#CBACF9_0%,#A855F7_50%,#CBACF9_100%)]";
    const redGradient = "bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#7F0000_50%,#FF0000_100%)]";

    const scrollToNext = () => {
        // Busca la sección por ID (asegúrate de que tu siguiente sección tenga id="education")
        const nextSection = document.getElementById('about') || document.getElementById('services');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent py-10">
            <Spotlight className="-top-40 left-0 md:left-60 h-screen w-[80vw]" fill="cyan"/>

            {/* Redes Sociales */}
            <div className="absolute top-6 right-6 md:top-10 md:right-12 z-[100]">
                <StaggerWrapper delay={0.5}>
                    <div className="animate-item opacity-0 md:filter md:blur-[8px] translate-y-2 md:translate-y-4 flex gap-4">
                        {socials.map((social) => (
                            <SocialMagicIcon key={social.id} icon={social.icon} link={social.link} />
                        ))}
                    </div>
                </StaggerWrapper>
            </div>

            <div className="-mt-24 md:mt-0 w-full relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6">
                <div className="flex flex-col gap-y-1 md:gap-y-3">
                    <Text2GenerateEffect 
                        words={t("greeting")} 
                        className="text-5xl md:text-7xl lg:text-[8rem] font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter"
                    />
                    <Text2GenerateEffect 
                        words={t("name")} 
                        className="text-5xl md:text-7xl lg:text-[8rem] font-bold font-[family-name:var(--font-syne)] uppercase tracking-tighter bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow pb-2"
                    />
                    
                    <StaggerWrapper delay={1.5}>
                        <div className="animate-item opacity-0 md:filter md:blur-[10px] translate-y-2 md:translate-y-4 mt-1">
                            <b><p className="text-white/40 uppercase tracking-[0.4em] text-[9px] md:text-sm italic">
                                {t("subtitle")}
                            </p></b>
                        </div>
                    </StaggerWrapper>
                </div>

                <StaggerWrapper delay={2.0}>
                    <div className="animate-item opacity-0 md:filter md:blur-[10px] translate-y-1 md:translate-y-4 mt-10 md:mt-14 flex flex-row items-center justify-center gap-2 md:gap-4 w-full max-w-[95vw] md:max-w-none mx-auto">

                      <MagicButton
                        text={t("explore")}
                        icon={<FaBriefcase className="mr-1 text-white text-xs" />}
                        gradientColor={purpleGradient}
                        handleClick={scrollToNext}
                        otherClasses="!w-full px-7 text-sm"
                    />



                        <a href={cvFile} download={cvFile} className="flex-1 md:flex-none">
                            <MagicButton
                                text={t("download")}
                                icon2={<FaFilePdf className="ml-4 text-white opacity-80 text-xs" />}
                                gradientColor={redGradient}
                                otherClasses="!w-full px-5 text-sm"
                            />

                        </a>
                        
                    </div>
                </StaggerWrapper>
            </div>
            {/* <div className='absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 md:animate-bounce'><ScrollIndicator /></div> */}
            <StaggerWrapper delay={2.3}>
  <div
    className="
      animate-item
      opacity-0
      md:filter md:blur-[8px]
      translate-y-1 md:translate-y-4
      absolute
      bottom-20 md:bottom-12
      left-1/2
      -translate-x-1/2
    "
  >
    <ScrollIndicator />
  </div>
</StaggerWrapper>

            
        </div>
    );
};