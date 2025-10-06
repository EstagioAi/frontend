import React from 'react'
import { CheckCircle, Shield, BarChart3, Headphones } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'
import { TextHighlight } from '@/components/ui/text-highlight.jsx'

export default function BenefitsHubSection() {
  const { ref: ref1, isVisible: isVisible1 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref3, isVisible: isVisible3 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref4, isVisible: isVisible4 } = useScrollReveal({ threshold: 0.1 })

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Cadastro fácil e rápido',
      description: 'Crie seu perfil em minutos e comece a receber oportunidades personalizadas imediatamente.',
      ref: ref1,
      isVisible: isVisible1,
      delay: 0
    },
    {
      icon: Shield,
      title: 'Processos transparentes',
      description: 'Acompanhe cada etapa do processo seletivo com notificações em tempo real e feedback contínuo.',
      ref: ref2,
      isVisible: isVisible2,
      delay: 100
    },
    {
      icon: BarChart3,
      title: 'Análise e conteúdo',
      description: 'Acesse relatórios detalhados do seu perfil e conteúdos exclusivos para melhorar suas chances.',
      ref: ref3,
      isVisible: isVisible3,
      delay: 200
    },
    {
      icon: Headphones,
      title: 'Suporte dedicado',
      description: 'Nossa equipe está sempre disponível para ajudar você em cada etapa da sua jornada profissional.',
      ref: ref4,
      isVisible: isVisible4,
      delay: 300
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-green-50/30 via-white to-green-50/20 overflow-hidden">

      <BackgroundShapes
        variant="orbits"
        opacity={0.4}
        color="rgba(130, 247, 179, 0.5)"
        accentColor="rgba(200, 200, 200, 0.25)"
        accentOpacity={1}
        blendMode="normal"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            Um hub projetado para{' '}
                       <TextHighlight variant="wave" className="font-semibold text-primary-ds mr-10">
                         eliminar
                       </TextHighlight> 
                       as frustrações da busca por estágio
          </h2>
          <p className="text-lg text-gray-600">
            Criamos uma plataforma completa pensando em cada detalhe da sua experiência
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={benefit.ref}
              className={`
                modern-card group
                transition-all duration-700
                ${benefit.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              {/* Ícone */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-ds to-green-hover-ds mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-navy-dark" strokeWidth={2.5} />
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-green-ds transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decoração */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-ds/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
