import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Building2, Users, TrendingUp, Award, Shield, ArrowRight, CheckCircle } from 'lucide-react'

// Estilos de animação profissionais
const animationStyles = `
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-right {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes gentle-float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes scale-in {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out forwards;
    opacity: 0;
  }

  .animate-fade-in-right {
    animation: fade-in-right 1s ease-out forwards;
    opacity: 0;
  }

  .animate-gentle-float {
    animation: gentle-float 6s ease-in-out infinite;
  }

  .animate-scale-in {
    animation: scale-in 0.8s ease-out forwards;
    opacity: 0;
  }
`

const CompaniesHeroSection = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <section className="relative pt-20 pb-16 bg-white overflow-hidden">
      {/* Clean Background - Similar to main site */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-3xl border border-gray-200/70 rotate-6"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-3xl border border-gray-200/70 -rotate-6"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#01E297]/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-gray-300/50 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#01E297]/10 border border-[#01E297]/20">
                <Building2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-sm font-medium text-[#0b2a1d]">Para Empresas</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2a1d] leading-tight max-w-4xl animate-fade-in-up">
                Plataforma completa de
                <span className="block text-[#01E297] animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  recrutamento e seleção
                </span>
                para sua empresa
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Gerencie todo o ciclo de contratação em um só lugar. Publique vagas, 
                encontre candidatos qualificados e contrate os melhores talentos do mercado.
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#01E297] rounded-full"></div>
                  <span>Mais de 1000+ empresas confiam</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0b2a1d] rounded-full"></div>
                  <span>Suporte especializado</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Corporate style with EstágioAI colors */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              <Button 
                size="lg"
                className="bg-[#0b2a1d] hover:brightness-110 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-sm transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Solicitar demonstração
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#01E297] hover:bg-[#01E297] text-[#01E297] hover:text-[#0b2a1d] px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300"
              >
                Falar com consultor
              </Button>
            </div>
          </div>

          {/* Right Content - Professional illustration with animations */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Professional floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#01E297]/15 rounded-full animate-gentle-float"></div>
              <div className="absolute -top-8 right-16 w-4 h-4 bg-[#0b2a1d]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-[#01E297]/10 rounded-full animate-gentle-float" style={{animationDelay: '3s'}}></div>
              
              {/* Professional corporate container */}
              <div className="bg-gradient-to-br from-[#01E297]/5 to-[#01E297]/10 rounded-2xl p-8 shadow-lg border border-[#01E297]/20 transform hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl animate-fade-in-right" style={{animationDelay: '0.3s'}}>
                <img 
                  src="/images/misc/company-celebrating-success.png" 
                  alt="Profissionais em ambiente corporativo" 
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]" 
                  width="500" 
                  height="400" 
                  loading="eager" 
                  fetchpriority="high" 
                  decoding="async" 
                />
                
                {/* Professional animated metrics */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 border border-gray-100 transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.8s'}}>
                  <div className="text-sm font-semibold text-[#0b2a1d]">Tempo de contratação</div>
                  <div className="text-lg font-bold text-[#01E297]">-67%</div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 border border-gray-100 transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{animationDelay: '1.2s'}}>
                  <div className="text-sm font-semibold text-[#0b2a1d]">Qualidade dos hires</div>
                  <div className="text-lg font-bold text-[#01E297]">+85%</div>
                </div>

                {/* Professional floating metric */}
                <div className="absolute top-1/2 -left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 border border-[#01E297]/20 animate-gentle-float animate-scale-in" style={{animationDelay: '1.6s'}}>
                  <div className="text-xs font-semibold text-[#0b2a1d]">Satisfação RH</div>
                  <div className="text-base font-bold text-[#01E297]">98%</div>
                </div>
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#01E297]/5 to-transparent rounded-full blur-3xl animate-pulse opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CompaniesHeroSection