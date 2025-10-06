import React from 'react'
import { UserPlus, Search, FileCheck, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Crie seu Perfil',
    description: 'Cadastre-se gratuitamente e complete seu perfil com suas habilidades, experiências e objetivos de carreira.'
  },
  {
    number: '02',
    icon: Search,
    title: 'Busque Vagas Perfeitas',
    description: 'Utilize nossos filtros inteligentes para encontrar estágios que combinam exatamente com seu perfil e aspirações.'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Candidate-se com Facilidade',
    description: 'Envie sua candidatura com um clique. Acompanhe o status em tempo real e receba feedback das empresas.'
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Conquiste seu Estágio',
    description: 'Prepare-se para entrevistas com nossas dicas exclusivas e alcance a oportunidade dos seus sonhos.'
  }
]

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden section-spacing" style={{ background: '#F0FFF7' }}>
      {/* Decorative circles */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{ background: 'rgba(130, 247, 179, 0.3)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/4 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{ background: 'rgba(130, 247, 179, 0.3)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-redesign">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
            Como funciona
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[42px]" style={{ color: 'var(--color-text-primary)', lineHeight: '1.2' }}>
            Seu caminho para o{' '}
            <span className="relative inline-block">
              <span className="relative z-10">estágio ideal</span>
              <span className="absolute bottom-1 left-0 h-3 w-full bg-green-ds/30 -rotate-1"></span>
            </span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
            Em apenas 4 passos simples, você está pronto para começar sua jornada profissional
          </p>
        </div>

        {/* Steps Timeline - REDESIGN 2025 */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile, visible on desktop */}
          <div 
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 hidden lg:block"
            style={{ background: 'linear-gradient(180deg, rgba(130, 247, 179, 0.3) 0%, rgba(130, 247, 179, 0.8) 50%, rgba(130, 247, 179, 0.3) 100%)' }}
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {steps.map(({ number, icon: Icon, title, description }, index) => {
              const isEven = index % 2 === 1

              return (
                <div
                  key={number}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <div
                      className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-md mx-auto lg:mx-0"
                      style={isEven ? { marginLeft: 'auto' } : {}}
                    >
                      {/* Number Badge */}
                      <div
                        className={`absolute -top-4 ${
                          isEven ? 'lg:left-8 right-8' : 'lg:right-8 right-8'
                        } inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-ds text-black font-bold text-lg shadow-lg`}
                      >
                        {number}
                      </div>

                      <div className={`flex flex-col items-center ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                        {/* Icon */}
                        <div 
                          className="mb-4 mt-6 inline-flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                          style={{ background: 'rgba(130, 247, 179, 0.15)' }}
                        >
                          <Icon className="h-7 w-7 text-green-ds" strokeWidth={2.5} />
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                          {title}
                        </h3>

                        {/* Description */}
                        <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle - Only visible on desktop */}
                  <div className="hidden lg:flex flex-shrink-0">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-green-ds shadow-lg z-10"
                      style={{ boxShadow: '0 4px 20px rgba(130, 247, 179, 0.4)' }}
                    >
                      <Icon className="h-7 w-7 text-black" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-black bg-green-ds rounded-lg transition-all duration-300 hover:bg-[#4AC77D] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(130,247,179,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-ds focus-visible:ring-offset-2"
          >
            Começar Agora
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

