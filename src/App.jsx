import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
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
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
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

