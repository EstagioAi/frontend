import React from 'react'
import { MessageSquare, Target, TrendingUp, Star, ArrowUp, Heart, ArrowRight } from 'lucide-react'

const CompaniesFeedbackSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {/* Feedback flow visualization */}
              <div className="space-y-6">
                {/* Company gives feedback */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0b2a1d] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-[#01E297]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0b2a1d] mb-2">Empresa dá feedback</h4>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#01E297] text-[#01E297]" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-[#0b2a1d]">Excelente candidato</span>
                      </div>
                      <p className="text-sm text-gray-600">"Perfil técnico excepcional, ótima comunicação"</p>
                    </div>
                  </div>
                </div>

                {/* Arrow indicating improvement */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#01E297]/10 rounded-full">
                    <ArrowUp className="w-4 h-4 text-[#01E297]" />
                    <span className="text-sm font-medium text-[#01E297]">Algoritmo aprende</span>
                  </div>
                </div>

                {/* Improved matching */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#01E297] rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0b2a1d] mb-2">Matches mais precisos</h4>
                    <div className="bg-[#01E297]/5 rounded-lg p-3 border border-[#01E297]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#0b2a1d]">Suas vagas aparecem mais</span>
                        <div className="flex items-center gap-1 text-[#01E297]">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-semibold">+85%</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Para candidatos com perfil similar aos bem avaliados</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                <div className="text-xs font-semibold text-[#0b2a1d]">Taxa de Match</div>
                <div className="text-lg font-bold text-[#01E297]">94%</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#01E297] text-white rounded-lg shadow-lg px-4 py-3">
                <div className="text-xs font-semibold">Visibilidade das vagas</div>
                <div className="text-lg font-bold flex items-center gap-1">
                  +127% <ArrowUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#01E297]/10 border border-[#01E297]/20">
                <Heart className="w-4 h-4 text-[#01E297]" />
                <span className="text-sm font-medium text-[#0b2a1d]">Sistema de Feedback</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b2a1d] leading-tight">
                Feedback que melhora
                <span className="block text-[#01E297]">seus resultados</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Quanto mais feedback você der sobre os candidatos, melhor nossa IA entende seu perfil ideal. 
                Suas vagas aparecem mais para candidatos similares aos bem avaliados.
              </p>

              {/* How it works */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0b2a1d] mb-4">Como funciona:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#01E297] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0b2a1d]">Avalie candidatos</h4>
                        <p className="text-gray-600">Dê notas e comentários sobre perfis e entrevistas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#01E297] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0b2a1d]">IA aprende seu padrão</h4>
                        <p className="text-gray-600">Algoritmo identifica características dos candidatos ideais</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#01E297] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0b2a1d]">Matches mais precisos</h4>
                        <p className="text-gray-600">Suas vagas aparecem primeiro para candidatos com alta compatibilidade</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results highlight */}
                <div className="bg-gradient-to-br from-[#01E297]/5 to-[#01E297]/10 rounded-xl p-6 border border-[#01E297]/20">
                  <h4 className="font-semibold text-[#0b2a1d] mb-3">Resultados comprovados:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#01E297]">3x</div>
                      <div className="text-sm text-gray-600">Mais candidatos qualificados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#01E297]">85%</div>
                      <div className="text-sm text-gray-600">Menos tempo de triagem</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0b2a1d] text-white rounded-xl shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <MessageSquare className="w-5 h-5 text-[#01E297]" />
                <span className="font-semibold">Começar a dar feedback</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesFeedbackSection