import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import HeroSection from './sections/HeroSection'
import WhyChooseSection from './sections/WhyChooseSection'
import BenefitsHubSection from './sections/BenefitsHubSection'
import ProcessTimelineSection from './sections/ProcessTimelineSection'
import TransparencySection from './sections/TransparencySection'
import OpportunityStepsSection from './sections/OpportunityStepsSection'
import CompanyBenefitsSection from './sections/CompanyBenefitsSection'
import PartnerCompaniesSection from './sections/PartnerCompaniesSection'
import ImprovedTestimonialsSection from './sections/ImprovedTestimonialsSection'
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
        {/* Hero Section */}
        <HeroSection />
        
        {/* Por que escolher EstágioAI */}
        <section aria-label="Por que escolher EstágioAI">
          <WhyChooseSection />
        </section>
        
        {/* Hub de Benefícios - NOVA */}
        <section aria-label="Benefícios da plataforma">
          <BenefitsHubSection />
        </section>
        
        {/* Timeline do Processo - NOVA */}
        <section aria-label="Processo de cadastro à contratação">
          <ProcessTimelineSection />
        </section>
        
        {/* Transparência - NOVA */}
        <section aria-label="Transparência no processo">
          <TransparencySection />
        </section>
        
        {/* Passos de Oportunidade - NOVA */}
        <section aria-label="Como aproveitar oportunidades">
          <OpportunityStepsSection />
        </section>
        
        {/* Benefícios para Empresas - NOVA */}
        <section aria-label="Benefícios para empresas">
          <CompanyBenefitsSection />
        </section>
        
        {/* Empresas Parceiras */}
        <section aria-label="Empresas parceiras">
          <PartnerCompaniesSection />
        </section>
        
        {/* Depoimentos */}
        <section aria-label="Depoimentos de estagiários">
          <ImprovedTestimonialsSection />
        </section>
      </main>
      
      {/* Footer - Redesenhado */}
      <Footer />
    </div>
  )
}

