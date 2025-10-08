import React from 'react'
import { CheckCircle, Shield, BarChart3, Headphones } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

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
    <section
      className="relative overflow-hidden bg-black-ds bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('/images/backgrounds/background-hero.png')" }}
    >
      <div className="absolute inset-0 -z-20 bg-black/85" aria-hidden="true" />

      <div className="absolute inset-0 -z-10 opacity-90" aria-hidden="true">
        <BackgroundShapes
          variant="minimal"
          opacity={0.4}
          color="rgba(130, 247, 179, 0.28)"
          accentColor="rgba(130, 247, 179, 0.2)"
          accentOpacity={0.28}
          blendMode="screen"
        />
        <BackgroundShapes
          variant="orbits"
          opacity={0.26}
          color="rgba(130, 247, 179, 0.5)"
          accentColor="rgba(130, 247, 179, 0.25)"
          accentOpacity={0.26}
          blendMode="screen"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white-ds lg:text-5xl">
            Um hub projetado para{' '}
            <span className="relative inline-block font-semibold text-white-ds">
              <span className="relative z-10">eliminar</span>
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-white/40" aria-hidden="true" />
            </span>{' '}
            as frustrações da busca por estágio
          </h2>
          <p className="text-lg text-white/70">
            Criamos uma plataforma completa pensando em cada detalhe da sua experiência
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={benefit.ref}
              className={`
                group relative overflow-hidden rounded-3xl border border-white/15 bg-black-ds p-8 shadow-[0_24px_48px_rgba(0,0,0,0.45)] transition-all duration-700
                ${benefit.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              {/* Ícone */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-ds to-green-hover-ds transition-transform duration-300 group-hover:scale-110">
             <benefit.icon className="h-7 w-7 text-green-ds drop-shadow-[0_0_10px_rgba(0,0,0,0.45)]" strokeWidth={2.5} />
              </div>

              {/* Conteúdo */}
              <h3 className="mb-3 text-xl font-bold text-white-ds transition-colors duration-300 group-hover:text-green-ds">
                {benefit.title}
              </h3>
              <p className="leading-relaxed text-white/80">
                {benefit.description}
              </p>

              {/* Decoração */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-ds/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
