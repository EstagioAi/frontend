import React from 'react'
import { Search, Target, MessageSquare, BarChart3, Clock, Shield, Building2, ArrowRight, Zap } from 'lucide-react'

const CompaniesFeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Gestão de Vagas",
      description: "Publique e gerencie suas oportunidades em múltiplos canais com uma única ferramenta integrada e intuitiva."
    },
    {
      icon: Target,
      title: "Seleção Inteligente",
      description: "Algoritmos avançados que pré-selecionam os candidatos mais adequados ao perfil da vaga automaticamente."
    },
    {
      icon: MessageSquare,
      title: "Comunicação Centralizada",
      description: "Mantenha todo histórico de conversas e interações com candidatos organizados em um só lugar."
    },
    {
      icon: BarChart3,
      title: "Relatórios e Métricas",
      description: "Acompanhe KPIs do processo seletivo com dashboards detalhados e relatórios personalizáveis."
    },
    {
      icon: Clock,
      title: "Fluxos Automatizados",
      description: "Configure processos automáticos de triagem, entrevistas e aprovações para ganhar eficiência."
    },
    {
      icon: Shield,
      title: "Conformidade e Segurança",
      description: "Atenda às regulamentações trabalhistas com ferramentas de compliance e proteção de dados."
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Corporate style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#01E297]/10 border border-[#01E297]/20 mb-6">
            <Zap className="w-4 h-4 text-[#01E297]" />
            <span className="text-sm font-medium text-[#0b2a1d]">Funcionalidades</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b2a1d] mb-6 leading-tight">
            Tudo que sua empresa precisa para
            <span className="block text-[#01E297]">contratar os melhores talentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Uma plataforma completa e integrada para gerenciar todo o ciclo de recrutamento e seleção, 
            desde a publicação da vaga até a contratação.
          </p>
        </div>

        {/* Features Grid - Corporate style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#01E297]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#01E297]/10 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[#01E297]" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-[#0b2a1d] mb-4 group-hover:text-[#01E297] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01E297] to-[#01E297]/80 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA - Corporate style */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0b2a1d] mb-4">
              Pronto para transformar seu recrutamento?
            </h3>
            <p className="text-gray-600 mb-8">
              Junte-se a centenas de empresas que já otimizaram seus processos seletivos
            </p>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#0b2a1d] text-white rounded-xl shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Building2 className="w-5 h-5 text-[#01E297]" />
              <span className="font-semibold">Solicitar demonstração</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesFeaturesSection