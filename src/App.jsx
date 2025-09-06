import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import CategoriesSection from './components/CategoriesSection'
import HowItWorksSection from './components/HowItWorksSection'
import ProblemsSection from './components/ProblemsSection'
import SolutionSection from './components/SolutionSection'
import FeedbackSection from './components/FeedbackSection'
import FormatoUnificadoSection from './components/FormatoUnificadoSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import EmailCaptureSection from './components/EmailCaptureSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
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
      <CategoriesSection />
      <HowItWorksSection />
      <ProblemsSection />
      <SolutionSection />
      <FeedbackSection />
      <FormatoUnificadoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <EmailCaptureSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App

