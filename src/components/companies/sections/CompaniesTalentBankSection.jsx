import React from 'react'
import { Database, Users, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const CompaniesTalentBankSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#01E297]/10 border border-[#01E297]/20">
                <Database className="w-4 h-4 text-[#01E297]" />
                <span className="text-sm font-medium text-[#0b2a1d]">Banco de Talentos</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b2a1d] leading-tight">
                Banco de talentos que cresce 
                <span className="block text-[#01E297]">automaticamente</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Cada estudante que se cadastra na plataforma entra automaticamente no seu banco de talentos. 
                Acesse perfis qualificados, histórico acadêmico e habilidades verificadas.
              </p>

              {/* Benefits list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#01E297] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0b2a1d]">Crescimento Automático</h4>
                    <p className="text-gray-600">Novos talentos adicionados diariamente sem esforço manual</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#01E297] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0b2a1d]">Perfis Verificados</h4>
                    <p className="text-gray-600">Informações acadêmicas e habilidades validadas pela plataforma</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#01E297] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0b2a1d]">Busca Inteligente</h4>
                    <p className="text-gray-600">Encontre candidatos ideais usando filtros avançados de IA</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0b2a1d] text-white rounded-xl shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <Users className="w-5 h-5 text-[#01E297]" />
                <span className="font-semibold">Explorar banco de talentos</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#01E297]/5 to-[#01E297]/10 rounded-2xl p-8 border border-[#01E297]/20">
              {/* Talent cards simulation */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    AJ
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0b2a1d]">Ana Julia Silva</h4>
                    <p className="text-sm text-gray-600">Engenharia de Software • USP</p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-1 bg-[#01E297]/10 text-[#01E297] text-xs rounded-md font-medium">React</span>
                      <span className="px-2 py-1 bg-[#01E297]/10 text-[#01E297] text-xs rounded-md font-medium">Python</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#01E297]">95% Match</div>
                    <div className="text-xs text-gray-500">Disponível</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    CB
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0b2a1d]">Carlos Barbosa</h4>
                    <p className="text-sm text-gray-600">Design Digital • PUC-Rio</p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-1 bg-[#01E297]/10 text-[#01E297] text-xs rounded-md font-medium">Figma</span>
                      <span className="px-2 py-1 bg-[#01E297]/10 text-[#01E297] text-xs rounded-md font-medium">UI/UX</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#01E297]">92% Match</div>
                    <div className="text-xs text-gray-500">Disponível</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    MR
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0b2a1d]">Marina Rodrigues</h4>
                    <p className="text-sm text-gray-600">Marketing Digital • ESPM</p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-1 bg-[#01E297]/10 text-[#01E297] text-xs rounded-md font-medium">SEO</span>
                      <span className="px-2 py-1 bg-[#01E297]/10 text-[#01E297] text-xs rounded-md font-medium">Analytics</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#01E297]">89% Match</div>
                    <div className="text-xs text-gray-500">Disponível</div>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 border border-gray-100">
                <div className="text-xs font-semibold text-[#0b2a1d]">Novos talentos hoje</div>
                <div className="text-lg font-bold text-[#01E297] flex items-center gap-1">
                  +127 <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              {/* Auto-update indicator */}
              <div className="absolute bottom-4 left-4 bg-[#01E297] text-white rounded-lg shadow-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-semibold">Auto-atualização ativa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesTalentBankSection