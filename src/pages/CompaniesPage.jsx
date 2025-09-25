import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import CompaniesHeroSection from '@/components/companies/sections/CompaniesHeroSection'
import CompaniesFeaturesSection from '@/components/companies/sections/CompaniesFeaturesSection'
import CompaniesTalentBankSection from '@/components/companies/sections/CompaniesTalentBankSection'
import CompaniesFeedbackSection from '@/components/companies/sections/CompaniesFeedbackSection'
import CompaniesTestimonialsSection from '@/components/companies/sections/CompaniesTestimonialsSection'
import CompaniesCTASection from '@/components/companies/sections/CompaniesCTASection'

export default function CompaniesPage() {
  return (
    <div className="relative min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Background sutil com formas leves (sem gradientes fortes) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-dots opacity-[0.2] w-full h-full"></div>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-3xl border border-gray-200 rotate-6 animate-slow-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-3xl border border-gray-200 -rotate-6 animate-slow-float-delayed"></div>
      </div>

      <Navigation />
      <CompaniesHeroSection />
      <CompaniesFeaturesSection />
      <CompaniesTalentBankSection />
      <CompaniesFeedbackSection />
      <CompaniesTestimonialsSection />
      <CompaniesCTASection />
      <Footer />
    </div>
  )
}