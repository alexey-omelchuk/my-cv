"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconMail,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";

export function FloatingDockCV() {
  const links = [
    {
      title: "Inicio",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Sobre Mí",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Proyectos",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/alexey-omelchuk",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/alexey-omelchuk/",
    },
    {
      title: "Contacto",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:alexeyeuk@gmail.com",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "https://ui.aceternity.com",
    },
  ];

  return (
    /* Posicionamiento fijo en la parte inferior de la pantalla */
    <div className="fixed bottom-10 left-0 right-0 z-[100] flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          items={links}
          desktopClassName="bg-black/20 backdrop-blur-md border border-white/10"
        />
      </div>
    </div>
  );
}