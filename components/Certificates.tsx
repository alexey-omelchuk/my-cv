"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconZoomIn, IconShieldCheck, IconCertificate } from "@tabler/icons-react";
import { EncryptedText } from "./ui/encrypted-text";

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  id: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    title: "Certified Professional Penetration Tester (eCPPTv3)",
    issuer: "INE Security",
    image: "/certs/ecpptv3.webp", 
    id: "168242587",
    skills: ["Active Directory", "Pivoting", "Pentesting", "Web Hacking", "Security", "Privilege Escalation", "OWASP"],
  },
  {
    title: "Full-Stack Development (Laravel & VueJS)",
    issuer: "Mastermind",
    image: "/certs/laravel-vue.webp",
    id: "b8d1d3c034634ca3966812b5b2917126",
    skills: ["Laravel", "VueJS", "Full-Stack", "Architecture", "Databases", "APIs"],
  },
  {
    title: "AI Agent Development",
    issuer: "Platzi",
    image: "/certs/ai-agents.webp",
    id: "0a6a75c4-6e18-4c98-8b83-bb3eb42a1c0d",
    skills: ["OpenAI API", "Chatbots", "NLP", "AI Integration", "Python", "Prompt Engineering", "RAG", "Automation"],
  },
  {
    title: "Chatbot Development with OpenAI",
    issuer: "Platzi",
    image: "/certs/develop-agents.webp",
    id: "31d2c4a7-2fec-4879-9491-f66d04812358",
    skills: ["AI Agents", "OpenAI API", "Python", "Prompt Engineering", "LLMs", "NLP"],
  },
  {
    title: "Linux: OS-Level Programming in C",
    issuer: "Mastermind",
    image: "/certs/linux-c.webp", 
    id: "01b1170fdcfb451e9e940c55373813dd",
    skills: ["Linux", "C Programming", "Systems", "Kernel", "Low-level", "System Calls", "Memory Management"],
  },
  {
    title: "Wireless Network Hacking (WiFi)",
    issuer: "Mastermind",
    image: "/certs/wifi-hacking.webp", 
    id: "2a07c198cb5a4b49a646cb8268362ed2",
    skills: ["Networking", "Cybersecurity", "WiFi Hacking", "Wireless Security", "Aircrack-ng", "WPA/WPA2"],
  },
  {
    title: "Professional Linux Customization from Scratch",
    issuer: "Hack4u",
    image: "/certs/linux.webp",
    id: "1443-2304-4220-4857",
    skills: ["Linux", "Bash Scripting", "Customization", "Sysadmin", "Open Source", "Dotfiles"],
  },
  {
    title: "SEO & Web Positioning",
    issuer: "Platzi",
    image: "/certs/seo.webp",
    id: "f0ea40bb-c377-430f-becc-a6368548db5c",
    skills: ["Technical SEO", "Google Analytics", "Search Console", "On-page SEO", "Keywords" ],
  },
];

export const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-[98vw] mx-auto px-2">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-none">
            DEGREES & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow">
              CERTIFICATIONS
            </span>
          </h2>
          <p className="text-white/90 mt-4 uppercase tracking-[0.3em] text-[10px] italic">
            <b><EncryptedText text="Official certs and technical training I've earned along the way" /></b>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <CardContainer className="inter-var w-full py-2" containerClassName="py-0 w-full">
                <CardBody className="bg-black/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] border-white/[0.1] w-full h-auto rounded-3xl p-4 border flex flex-col justify-between backdrop-blur-md">
                  
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <CardItem translateZ="50" className="flex items-center gap-2">
                        <IconShieldCheck className="h-4 w-4 text-cyan-400" />
                        <span className="text-[10.5px] font-mono text-white/50 tracking-widest uppercase">
                          ID: {cert.id.slice(0, 100)}
                        </span>
                      </CardItem>
                      <CardItem translateZ="50" className="text-white/10">
                        <IconCertificate className="h-5 w-5" />
                      </CardItem>
                    </div>

                    <CardItem translateZ="60" className="text-base font-bold text-white mb-1 leading-tight min-h-[2.5rem] line-clamp-2">
                      {cert.title}
                    </CardItem>

                    <CardItem translateZ="50" as="p" className="text-cyan-400/80 text-[10px] font-medium mb-3 uppercase tracking-wider">
                      {cert.issuer}
                    </CardItem>

                    <CardItem 
                      translateZ="100" 
                      className="w-full mt-2 cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-2xl"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className="relative aspect-video w-full bg-[#111]">
                        <Image
                          src={cert.image}
                          fill
                          className="object-cover group-hover/card:scale-110 transition-all duration-700 brightness-110" 
                          alt={cert.title}
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    </CardItem>
                  </div>

                  <div className="mt-4">
                    <CardItem translateZ="40" className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-1.5 py-0.5 bg-white/5 border border-white/10 rounded-md text-white/40">
                          {skill}
                        </span>
                      ))}
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => setSelectedCert(cert)}
                      className="w-full py-2 rounded-xl text-[12px] font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <IconZoomIn className="h-4 w-4 text-cyan-400" />
                      EXPAND
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedCert && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)} 
                className="absolute top-6 right-6 z-30 p-3 bg-black/60 hover:bg-white/10 rounded-full text-white/70 border border-white/10 transition-colors"
              >
                <IconX className="h-6 w-6" />
              </button>

              <div className="w-full h-full p-2 flex items-center justify-center">
                <div className="relative w-full h-[70vh]">
                  <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" priority />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                 <h3 className="text-white font-bold text-xl">{selectedCert.title}</h3>
                 <p className="text-cyan-400 text-sm">{selectedCert.issuer} — ID: {selectedCert.id}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};