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
import CTASection from '@/components/home/sections/CTASection'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6FAFF] to-white" />
        <div className="absolute left-[12%] top-[-200px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6FFFC7]/18 blur-3xl" />
        <div className="absolute right-[-180px] top-[320px] h-[360px] w-[360px] rounded-full bg-[#2563EB]/8 blur-[160px]" />
        <div className="absolute bottom-[-280px] left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#E0FDF3]/35 blur-[180px]" />
      </div>

      <Navigation />
      <main className="relative flex flex-col gap-0">
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <FeedbackSection />
        <FormatoUnificadoSection />
        <TalentBankSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

