import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'
import CompaniesHeroSection from './sections/CompaniesHeroSection'
import CompaniesFeaturesSection from './sections/CompaniesFeaturesSection'
import CompaniesTalentBankSection from './sections/CompaniesTalentBankSection'
import CompaniesCTASection from './sections/CompaniesCTASection'

export default function CompaniesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary-ds text-primary-ds">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <BackgroundShapes
          variant="mesh"
          opacity={0.1}
          color="rgba(130, 247, 179, 0.55)"
          accentColor="rgba(15, 15, 15, 0.16)"
          accentOpacity={0.12}
          blendMode="normal"
        />
        <BackgroundShapes
          variant="orbits"
          opacity={0.08}
          color="rgba(130, 247, 179, 0.4)"
          accentColor="rgba(15, 15, 15, 0.12)"
          accentOpacity={0.1}
          blendMode="soft-light"
        />
      </div>

      <Navigation />
      <main
        id="main-content"
        className="relative flex flex-col gap-0"
        role="main"
        aria-label="Portal corporativo para empresas"
      >
        <section aria-label="Visão geral do portal corporativo">
          <CompaniesHeroSection />
        </section>

        <section aria-label="Soluções principais da plataforma">
          <CompaniesFeaturesSection />
        </section>

        <section aria-label="Operação orientada por especialistas">
          <CompaniesTalentBankSection />
        </section>

        <section aria-label="Chamada para demonstração">
          <CompaniesCTASection />
        </section>
      </main>
      <Footer />
    </div>
  )
}