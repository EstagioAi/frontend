import React from 'react'
import { MousePointerClick, Zap, PartyPopper } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'
import TextHighlight from '@/components/ui/text-highlight'

export default function OpportunityStepsSection() {
  const { ref: refTitle, isVisible: isTitleVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref1, isVisible: isVisible1 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref3, isVisible: isVisible3 } = useScrollReveal({ threshold: 0.1 })

  const steps = [
    {
      icon: MousePointerClick,
      title: 'Candidate-se online',
      description: 'Encontre a vaga ideal e candidate-se com apenas um clique. Seu perfil será automaticamente enviado para análise.',
      accentColor: 'from-green-ds to-green-hover-ds',
      borderColor: 'border-green-ds/30',
      iconBg: 'from-green-ds to-green-hover-ds',
      ref: ref1,
      isVisible: isVisible1
    },
    {
      icon: Zap,
      title: 'Receba seu match',
      description: 'Nossa IA analisa compatibilidade e conecta você com empresas que valorizam seu perfil e potencial.',
      accentColor: 'from-green-ds/80 to-green-hover-ds/80',
      borderColor: 'border-green-ds/50',
      iconBg: 'from-green-ds/90 to-green-hover-ds',
      ref: ref2,
      isVisible: isVisible2
    },
    {
      icon: PartyPopper,
      title: 'Aproveite a vaga',
      description: 'Receba a confirmação, assine digitalmente e comece sua trajetória profissional de forma simples e segura.',
      accentColor: 'from-green-ds/60 to-green-hover-ds/60',
      borderColor: 'border-green-ds/40',
      iconBg: 'from-green-ds/80 to-green-hover-ds/90',
      ref: ref3,
      isVisible: isVisible3
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-green-50/30 via-white to-green-50/20 overflow-hidden">
      {/* Background Shapes */}
      <BackgroundShapes
        variant="mesh"
        opacity={0.06}
        color="rgba(130, 247, 179, 0.4)"
        accentColor="rgba(200, 200, 200, 0.15)"
        accentOpacity={0.1}
        blendMode="multiply"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.1}
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
            Cada oportunidade com{' '}
            <span className="text-green-ds">
              clareza 
            </span>
            {' '}absoluta
          </h2>
          <p className="text-lg text-gray-600">
            Três passos simples para transformar sua busca em conquista
          </p>
        </div>

        {/* Grid de Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={step.ref}
              className={`
                relative group
                transition-all duration-700
                ${step.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className={`
                relative
                bg-white
                border-2 ${step.borderColor}
                rounded-2xl p-8
                hover:shadow-2xl hover:scale-[1.02]
                transition-all duration-300
                overflow-hidden
              `}>
                {/* Gradient Background on Hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${step.accentColor}
                  opacity-0 group-hover:opacity-5
                  transition-opacity duration-300
                `}></div>

                <div className="relative z-10">
                  {/* Número do Step */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Ícone */}
                  <div className={`
                    inline-flex items-center justify-center
                    w-16 h-16 rounded-2xl
                    bg-gradient-to-br ${step.iconBg}
                    mb-6
                    group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-300
                    shadow-lg
                  `}>
                    <step.icon className="w-8 h-8 text-navy-dark" strokeWidth={2.5} />
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-2xl font-bold text-navy-dark mb-4 group-hover:text-green-ds transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decoração inferior */}
                <div className={`
                  absolute -bottom-2 -right-2 w-24 h-24
                  bg-gradient-to-br ${step.accentColor}
                  rounded-full blur-2xl
                  opacity-0 group-hover:opacity-20
                  transition-opacity duration-300
                `}></div>
              </div>

              {/* Seta conectora (exceto no último) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-green-ds to-transparent"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-ds rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div
          className={`
            mt-16 text-center
            transition-all duration-700 delay-500
            ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-4 bg-gray-50 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-ds mb-1">24h</div>
              <div className="text-sm text-gray-600">Tempo médio de resposta</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-ds mb-1">92%</div>
              <div className="text-sm text-gray-600">Taxa de satisfação</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-ds mb-1">15k+</div>
              <div className="text-sm text-gray-600">Estagiários contratados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
