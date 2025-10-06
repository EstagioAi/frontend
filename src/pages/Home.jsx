import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import HeroSection from '@/components/home/sections/HeroSection'
import WhyChooseSection from '@/components/home/sections/WhyChooseSection'
import HowItWorksSection from '@/components/home/sections/HowItWorksSection'
import StatsSection from '@/components/home/sections/StatsSection'
import TestimonialsCarouselSection from '@/components/home/sections/TestimonialsCarouselSection'
import TopCompaniesSection from '@/components/home/sections/TopCompaniesSection'
import CTASection from '@/components/home/sections/CTASection'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary-ds text-primary-ds">
      {/* Elementos decorativos minimalistas */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <BackgroundShapes
          variant="mesh"
          opacity={0.12}
          color="rgba(130, 247, 179, 0.45)"
          accentColor="rgba(15, 15, 15, 0.18)"
          accentOpacity={0.14}
          blendMode="multiply"
        />
        <BackgroundShapes
          variant="orbits"
          opacity={0.16}
          color="rgba(130, 247, 179, 0.85)"
          accentColor="rgba(203, 213, 225, 0.45)"
          accentOpacity={0.14}
          blendMode="normal"
        />
      </div>

      <Navigation />
      <main id="main-content" className="relative flex flex-col gap-0" role="main" aria-label="Conteúdo principal da página inicial">
        <HeroSection />
        <section aria-label="Por que escolher EstágioAI">
          <WhyChooseSection />
        </section>
        <section aria-label="Como funciona">
          <HowItWorksSection />
        </section>
        <section aria-label="Depoimentos de clientes">
          <TestimonialsCarouselSection />
        </section>
        <section aria-label="Estatísticas e números">
          <StatsSection />
        </section>
        <section aria-label="Chamada para ação">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  )
}

