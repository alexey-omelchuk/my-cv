"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  IconRobot, IconBrandWhatsapp, IconReceipt2, IconSpy, 
  IconHeadset, IconBrandLinkedin, IconDatabase, 
  IconMessageCode
} from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EncryptedText } from "./ui/encrypted-text";

export function LinkedInPostsSection() {
  return (
    <section className="py-24 bg-transparent relative z-10" id="experiments">
      <div className="max-w-[98vw] mx-auto px-4">
        
        {/* TÍTULO CORREGIDO: SEPARADO Y CON EL DEGRADADO DE LA FOTO BUENA */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-tight">
              POSTS DE <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">
                &nbsp;&nbsp; LINKEDIN SOBRE IA
              </span>
            </h2>
            
            {/* SUBTÍTULO CON EL FALLO ARREGLADO: revealDelayMs=20 para que no se congele */}
            <b><div className="text-white/90 mt-8 uppercase tracking-[0.3em] text-[10px] italic">
               <EncryptedText 
                 text="Demos y experimentos reales publicados en mi LinkedIn" 
                 revealDelayMs={20} 
                 className="inline-block"
               />
            </div></b>
          </motion.div>
        </div>

        {/* BENTO GRID OPTIMIZADO PARA 8 ÍTEMS SIN HUECOS */}
        <BentoGrid className="max-w-7xl mx-auto gap-6 md:auto-rows-[25rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={<span className="text-slate-400 text-xs leading-relaxed">{item.description}</span>}
              header={<PostHeader src={item.image} link={item.link} />}
              icon={item.icon}
              className={
                i === 0 || i === 3 
                ? "md:col-span-2" 
                : i === 7 
                ? "md:col-span-3" // El último cierra el grid para que no haya huecos
                : "md:col-span-1"
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const PostHeader = ({ src, link }: { src: string, link: string }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden relative group cursor-pointer border border-white/5 bg-[#0a0a0a]"
  >
    <Image
      src={src}
      alt="LinkedIn Post Preview"
      fill
      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-[0.7] group-hover:brightness-100"
    />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
      <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest">
        VER POST <IconBrandLinkedin size={14} className="text-blue-600" />
      </div>
    </div>
  </a>
);

const items = [
  {
    title: "IA con memoria: chatea con tus datos",
    description: "Un sistema RAG que entiende tus documentos. Responde dudas internas en segundos sin inventarse nada, solo con info real.",
    image: "/img/posts/rag.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_te-imaginas-tener-un-asistente-247-que-activity-7380870684236914689-DegT",
    icon: <IconRobot className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "Vender mientras duermes",
    description: "Cualificación de leads y agenda por WhatsApp. Un asistente inteligente para inmobiliarias que trabaja 24/7.",
    image: "/img/posts/inmo.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_inmobiliaria-activity-7381957860190044161-C7VR",
    icon: <IconBrandWhatsapp className="h-4 w-4 text-emerald-400" />,
  },
  {
    title: "Adiós al Excel de tickets",
    description: "De una foto a tu contabilidad en segundos. La IA extrae los datos automáticamente y te ahorra horas de gestión.",
    image: "/img/posts/facturas.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_facturas-y-tickets-activity-7376230846871195648-aqUt",
    icon: <IconReceipt2 className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "Chatbots con estilo propio",
    description: "Me cansé de los bots genéricos. He creado lógica a medida con React y n8n para que el chat sea parte de tu marca.",
    image: "/img/posts/chatbot-custom3.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_transforma-tu-web-con-un-chatbot-100-%C3%BAnico-activity-7354967017767997440-bg7q",
    icon: <IconDatabase className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "Atención de verdad",
    description: "IA que entiende audios e imágenes para quitarle a tu equipo el peso de responder las mismas dudas siempre.",
    image: "/img/posts/whatsapp-pro.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_y-si-pudieras-atender-a-todos-tus-clientes-activity-7359299959705206784-n0MU",
    icon: <IconMessageCode className="h-4 w-4 text-emerald-400" />,
  },
  {
    title: "Llamadas que se resuelven solas",
    description: "Agentes de voz para dudas repetitivas. Tus clientes obtienen respuestas al instante sin que nadie tenga que descolgar.",
    image: "/img/posts/llamadas.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_el-70-de-las-llamadas-que-atiendes-cada-activity-7373615409054375936-DN5r",
    icon: <IconHeadset className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "Investigar antes de escribir",
    description: "Mi scrapper analiza empresas a fondo para que tus mensajes fríos no parezcan el típico spam genérico.",
    image: "/img/posts/leads.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_scraper-para-conseguir-informaci%C3%B3n-importante-activity-7371974677008728069-K-gZ",
    icon: <IconSpy className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "Tu empresa, conectada al RAG",
    description: "IA conectada a tus manuales y contratos. El conocimiento de tu organización disponible para el equipo en un clic.",
    image: "/img/posts/rag2.webp",
    link: "https://www.linkedin.com/posts/alexey-omelchuk_agente-rag-activity-7374676142429122560-Ohdl",
    icon: <IconRobot className="h-4 w-4 text-cyan-400" />,
  },
];