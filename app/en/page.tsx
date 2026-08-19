import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TracingBeamContainer } from "@/components/TracingBeam";
import { CertificatesSection } from "@/components/Certificates";
import { Spotlight } from '@/lib/Spotlight'
import { SpotlightNew } from '@/lib/spotlight-new'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { SparklesPreview } from '@/components/SparklesPreview'
import { EducationSection } from "@/components/Education";
import { LanguagesSection } from "@/components/LanguagesSection";
import { AboutMeSection } from "@/components/AboutMeSection";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      
      {/* Desktop background layer (z-0) */}
      <div className="hidden md:block fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <SpotlightNew />
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#7f00ff"/>
        <Spotlight className="top-28 left-80 md:-left-32 h-[80vh] w-[50vw]" fill="cyan"/>
        <SparklesPreview />
        <BackgroundBeams />
      </div>

      {/* Mobile background layer (z-0) */}
      <div className="block md:hidden fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <SpotlightNew />
        <Spotlight className="top-28 left-4 h-[60vh] w-[80vw]" fill="cyan"/>
      </div>

      {/* Content layer (z-10) */}
      <div className="max-w-[98vw] w-full relative z-10">
        <Hero /> 
        
        <TracingBeamContainer>
        <div className="flex flex-col gap-32 md:gap-60">
            <AboutMeSection />
            <EducationSection />
            <CertificatesSection />
            <LanguagesSection />
        </div>
        </TracingBeamContainer>
        <Footer />
      </div>
    </main>
  );
}