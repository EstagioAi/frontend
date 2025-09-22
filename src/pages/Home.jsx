import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import HeroSection from '@/components/home/sections/HeroSection'
import ProblemsSection from '@/components/home/sections/ProblemsSection'
import SolutionSection from '@/components/home/sections/SolutionSection'
import FeedbackSection from '@/components/home/sections/FeedbackSection'
import FormatoUnificadoSection from '@/components/home/features/FormatoUnificadoSection'
import FeaturesSection from '@/components/home/features/FeaturesSection'
import TalentBankSection from '@/components/home/sections/TalentBankSection'
import TestimonialsSection from '@/components/home/sections/TestimonialsSection'
import EmailCaptureSection from '@/components/home/forms/EmailCaptureSection'
import CTASection from '@/components/home/sections/CTASection'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Background sutil com formas leves (sem gradientes fortes) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-dots opacity-[0.2] w-full h-full"></div>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-3xl border border-gray-200 rotate-6 animate-slow-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-3xl border border-gray-200 -rotate-6 animate-slow-float-delayed"></div>
      </div>

      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <FeedbackSection />
      <FormatoUnificadoSection />
      <TalentBankSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

