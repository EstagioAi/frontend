import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import CompaniesHeroSection from './sections/CompaniesHeroSection'
import CompaniesFeaturesSection from './sections/CompaniesFeaturesSection'
import CompaniesTalentBankSection from './sections/CompaniesTalentBankSection'
import CompaniesStatsSection from './sections/CompaniesStatsSection'
import CompaniesFeedbackSection from './sections/CompaniesFeedbackSection'
import CompaniesTestimonialsSection from './sections/CompaniesTestimonialsSection'
import CompaniesCTASection from './sections/CompaniesCTASection'

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