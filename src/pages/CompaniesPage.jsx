import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import CompaniesHeroSection from '@/components/companies/sections/CompaniesHeroSection'
import CompaniesFeaturesSection from '@/components/companies/sections/CompaniesFeaturesSection'
import CompaniesTalentBankSection from '@/components/companies/sections/CompaniesTalentBankSection'
import CompaniesStatsSection from '@/components/companies/sections/CompaniesStatsSection'
import CompaniesFeedbackSection from '@/components/companies/sections/CompaniesFeedbackSection'
import CompaniesTestimonialsSection from '@/components/companies/sections/CompaniesTestimonialsSection'
import CompaniesCTASection from '@/components/companies/sections/CompaniesCTASection'

export default function CompaniesPage() {
  return (
    <div className="relative min-h-screen bg-primary-ds text-primary-ds">
      <Navigation />
      <CompaniesHeroSection />
      <CompaniesFeaturesSection />
      <CompaniesTalentBankSection />
      <CompaniesStatsSection />
      <CompaniesFeedbackSection />
      <CompaniesTestimonialsSection />
      <CompaniesCTASection />
      <Footer />
    </div>
  )
}