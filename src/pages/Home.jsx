import React, { lazy, Suspense } from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import HeroSection from '@/components/home/HeroSection'
// Carregamento diferido de seções abaixo da dobra para reduzir trabalho inicial
const CategoriesSection = lazy(() => import('@/components/home/CategoriesSection'))
const ProblemsSection = lazy(() => import('@/components/home/ProblemsSection'))
const SolutionSection = lazy(() => import('@/components/home/SolutionSection'))
const FeedbackSection = lazy(() => import('@/components/home/FeedbackSection'))
const FormatoUnificadoSection = lazy(() => import('@/components/home/FormatoUnificadoSection'))
const FeaturesSection = lazy(() => import('@/components/home/FeaturesSection'))
const TestimonialsSection = lazy(() => import('@/components/home/TestimonialsSection'))
const EmailCaptureSection = lazy(() => import('@/components/home/EmailCaptureSection'))
const CTASection = lazy(() => import('@/components/home/CTASection'))

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
  <Suspense fallback={null}>
        <CategoriesSection />
  </Suspense>
  <Suspense fallback={null}>
        <ProblemsSection />
  </Suspense>
  <Suspense fallback={null}>
        <SolutionSection />
  </Suspense>
  <Suspense fallback={null}>
        <FeedbackSection />
  </Suspense>
  <Suspense fallback={null}>
        <FormatoUnificadoSection />
  </Suspense>
  <Suspense fallback={null}>
        <FeaturesSection />
  </Suspense>
  <Suspense fallback={null}>
        <TestimonialsSection />
  </Suspense>
  <Suspense fallback={null}>
        <EmailCaptureSection />
  </Suspense>
  <Suspense fallback={null}>
        <CTASection />
  </Suspense>
      <Footer />
    </div>
  )
}

