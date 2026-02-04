import Link from 'next/link'
import { MagicButton } from '@/components/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { StaggerWrapper } from '@/components/ui/StaggerWrapper'
import { SpotlightNew } from '@/lib/spotlight-new'
/* CORRECCIÓN: Importamos el componente de efecto, no el icono de Lucide */
import { Spotlight } from '@/lib/Spotlight' 
import { SparklesPreview } from '@/components/SparklesPreview'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center pb-20 pt-36 relative bg-black-100 overflow-hidden">
        {/* Efectos de fondo para desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#7f00ff"/>
            <SparklesPreview />
            <BackgroundBeams /> 
        </div>

        {/* Efectos ligeros para móvil */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
            <SpotlightNew />
            <Spotlight className="top-28 left-4 h-[60vh] w-[80vw]" fill="cyan"/>
        </div>


      <StaggerWrapper delay={0.2}>
        <div className="flex flex-col items-center z-10 px-5">
          {/* 404 GIGANTE - Eliminado el filtro blur */}
          <h1 className="animate-item opacity-0 translate-y-1 md:translate-y-4 font-[family-name:var(--font-syne)] text-[clamp(5rem,20vw,12rem)] font-extrabold leading-none text-white tracking-tighter">
            404
          </h1>
          
          {/* Texto descriptivo - Eliminado el filtro blur */}
          <p className="animate-item opacity-0 translate-y-1 md:translate-y-4 text-white-200 text-lg md:text-2xl mt-4 mb-10 text-center max-w-md">
            It seems you&apos;ve lost your way in space. This page does not exist.
          </p>

          <div className="animate-item opacity-0 translate-y-1 md:translate-y-4">
            <Link href="/alexey-omelchuk">
              <MagicButton
                icon={null} 
                text="Return Home&nbsp;&nbsp;&nbsp;"
                icon2={<FaLocationArrow className="rotate-180" />} 
              />
            </Link>
          </div>
        </div>
      </StaggerWrapper>
    </div>
  )
}