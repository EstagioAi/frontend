import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, CheckCircle, Building2 } from 'lucide-react'

const CompaniesCTASection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#01E297]/5 to-white overflow-hidden">
      {/* Corporate background with EstágioAI colors */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#01E297]/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#01E297]/8 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#01E297]/10 border border-[#01E297]/20 mb-6">
            <CheckCircle className="w-4 h-4 text-[#01E297]" />
            <span className="text-sm font-medium text-[#0b2a1d]">Comece hoje mesmo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0b2a1d] leading-tight">
            Transforme seu processo de recrutamento
            <span className="block text-[#01E297]">em uma vantagem competitiva</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Junte-se a centenas de empresas líderes que já otimizaram seus processos seletivos 
            e encontram os melhores talentos com mais eficiência.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-[#0b2a1d] hover:brightness-110 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
            >
              Solicitar demonstração
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-[#01E297] hover:bg-[#01E297] text-[#01E297] hover:text-[#0b2a1d] px-10 py-4 rounded-xl transition-all duration-300 font-semibold text-lg"
            >
              <Building2 className="mr-2 w-5 h-5" />
              Falar com especialista
            </Button>
          </div>

          {/* Corporate benefits with EstágioAI colors */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-base text-gray-600">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#01E297]" />
              <span className="font-medium">Implementação personalizada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#01E297]" />
              <span className="font-medium">Suporte dedicado</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#01E297]" />
              <span className="font-medium">ROI garantido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesCTASection