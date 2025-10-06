import React from 'react'
import { CheckCircle2, Users, Target, Clock, BarChart, Shield } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

export default function CompanyBenefitsSection() {
  const { ref: refTitle, isVisible: isTitleVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: refLeft, isVisible: isLeftVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: refRight, isVisible: isRightVisible } = useScrollReveal({ threshold: 0.1 })

  const benefits = [
    {
      icon: Users,
      title: 'Acesso ao melhor talento',
      description: 'Milhares de candidatos qualificados e verificados'
    },
    {
      icon: Target,
      title: 'Match inteligente',
      description: 'IA que encontra os perfis perfeitos para suas vagas'
    },
    {
      icon: Clock,
      title: 'Economia de tempo',
      description: 'Reduza em até 70% o tempo de recrutamento'
    },
    {
      icon: BarChart,
      title: 'Analytics completo',
      description: 'Métricas e insights sobre seu processo seletivo'
    },
    {
      icon: Shield,
      title: 'Segurança e compliance',
      description: 'Gestão legal e documental automatizada'
    },
    {
      icon: CheckCircle2,
      title: 'Suporte dedicado',
      description: 'Equipe especializada para ajudar sua empresa'
    }
  ]

  const features = [
    'Painel de controle intuitivo',
    'Publicação ilimitada de vagas',
    'Filtros avançados de candidatos',
    'Comunicação integrada',
    'Integração com ATS existente',
    'Relatórios personalizados'
  ]

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <BackgroundShapes
        variant="mesh"
        opacity={0.07}
        color="rgba(130, 247, 179, 0.4)"
        accentColor="rgba(200, 200, 200, 0.15)"
        accentOpacity={0.1}
        blendMode="multiply"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.11}
        color="rgba(130, 247, 179, 0.6)"
        accentColor="rgba(200, 200, 200, 0.3)"
        accentOpacity={0.1}
        blendMode="normal"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={refTitle}
          className={`
            max-w-3xl mx-auto text-center mb-16
            transition-all duration-700
            ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            Você no radar das empresas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-ds to-green-hover-ds">
              sem esforço extra
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Empresas parceiras encontram você automaticamente quando seu perfil corresponde às necessidades delas
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Lado Esquerdo - Grid de Benefícios */}
          <div
            ref={refLeft}
            className={`
              transition-all duration-1000
              ${isLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
            `}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-green-ds/50 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-green-ds to-green-hover-ds mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-navy-dark" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base font-bold text-navy-dark mb-2 group-hover:text-green-ds transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Lista e CTA */}
          <div
            ref={refRight}
            className={`
              transition-all duration-1000
              ${isRightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
            `}
          >
            <div className="modern-card p-8 lg:p-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-ds/10 rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-ds animate-pulse"></div>
                  <span className="text-sm font-bold text-green-ds">Para Empresas</span>
                </div>
                
                <h3 className="text-3xl font-bold text-navy-dark mb-4">
                  Tudo que você precisa em uma plataforma
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Simplifique seu processo de recrutamento de estagiários com ferramentas profissionais e suporte especializado.
                </p>
              </div>

              {/* Lista de Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-ds/10 flex items-center justify-center group-hover:bg-green-ds/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-green-ds" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 group-hover:text-navy-dark transition-colors font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-ds to-green-hover-ds text-navy-dark font-bold py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  Cadastrar Empresa
                </button>
                <button className="w-full bg-white border-2 border-gray-200 text-navy-dark font-bold py-4 rounded-xl hover:border-green-ds hover:bg-green-ds/5 transition-all duration-200">
                  Saber Mais
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-ds mb-1">500+</div>
                  <div className="text-xs text-gray-600">Empresas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-ds mb-1">10k+</div>
                  <div className="text-xs text-gray-600">Vagas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-ds mb-1">95%</div>
                  <div className="text-xs text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
