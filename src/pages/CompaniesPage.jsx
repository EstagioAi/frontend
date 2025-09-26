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
    <div className="relative min-h-screen bg-[#F7F9FC] text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_60%)]" />

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