import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const testimonials = [
  {
    name: 'Layla Abbas',
    role: 'Gerente de Marketing',
    company: 'Growthify',
    quote: 'Eu estava usando vários quadros de vagas e ficando sobrecarregada. No EstágioAI, economizei muito tempo e consegui meu emprego dos sonhos em uma ótima empresa!',
    metrics: ['Contratada em 3 semanas', '+120% de match com vagas relevantes']
  },
  {
    name: 'Carlos Silva',
    role: 'Desenvolvedor Frontend',
    company: 'TechNova',
    quote: 'A plataforma me ajudou a encontrar vagas que realmente combinavam com meu perfil. O processo foi rápido e eficiente, sem perder tempo com candidaturas irrelevantes.',
    metrics: ['5 convites para entrevista', 'Currículo visto 4x mais']
  },
  {
    name: 'Ana Costa',
    role: 'Designer UX/UI',
    company: 'PixelLab',
    quote: 'Adorei a experiência! O sistema de match me mostrou exatamente as vagas que faziam sentido para minha carreira. Consegui meu estágio em menos de 2 semanas!',
    metrics: ['Portfólio avaliado por 7 empresas', 'Match instantâneo com vagas']
  }
]

const TestimonialsCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative overflow-hidden bg-white-ds-ds py-24 lg:py-28">
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="section1"
        opacity={0.18}
        color="rgba(130, 247, 179, 0.75)"
        accentColor="rgba(17, 94, 89, 0.2)"
        accentOpacity={0.16}
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.18}
        color="rgba(130, 247, 179, 0.95)"
        accentColor="rgba(203, 213, 225, 0.5)"
        accentOpacity={0.14}
        blendMode="normal"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
  <div className="mb-10 flex flex-col gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-ds">
              Usuários do EstágioAI
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary-ds sm:text-4xl">
              Histórias reais de quem contratou certo
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black-15 bg-white-ds-ds text-black-80 shadow-sm transition-all duration-200 hover:border-green-ds hover:text-primary-ds"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black-15 bg-white-ds-ds text-black-80 shadow-sm transition-all duration-200 hover:border-green-ds hover:text-primary-ds"
              aria-label="Próximo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative" role="region" aria-label="Depoimentos de usuários" aria-live="polite">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12">
            {/* Card com dados do depoimento */}
            <article className="relative overflow-hidden rounded-[24px] border border-black-08 bg-white-ds-ds px-8 py-10 shadow-lg transition-all duration-300">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green-18 blur-[80px]" aria-hidden="true" />
              <div className="flex flex-col gap-6">
                <header className="flex flex-col gap-2">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-30 bg-green-10 px-3 py-1 text-xs font-semibold text-black-60">
                    {currentTestimonial.company}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-ds">{currentTestimonial.name}</h3>
                    <p className="text-sm font-medium text-black-60">{currentTestimonial.role}</p>
                  </div>
                </header>

                <blockquote className="relative text-base leading-relaxed text-black-75 sm:text-lg">
                  <span className="mb-3 block text-4xl text-green-70">“</span>
                  <p className="pl-4 border-l-2 border-green-35">
                    {currentTestimonial.quote}
                  </p>
                </blockquote>

                <ul className="grid gap-3 text-sm text-black-70 sm:grid-cols-2">
                  {currentTestimonial.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="flex items-center gap-2 rounded-xl border border-green-15 bg-green-ds/10 px-3 py-2"
                    >
                      <span className="inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-ds" aria-hidden="true" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Stack de depoimentos */}
            <div className="relative flex h-full flex-col gap-8">
              <div className="flex justify-center lg:hidden">
                <div className="flex items-center gap-3">
                  <button
                    onClick={goToPrevious}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black-15 bg-white-ds text-black-80 shadow-sm transition-all duration-200 hover:border-green-ds hover:text-primary-ds"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black-15 bg-white-ds text-black-80 shadow-sm transition-all duration-200 hover:border-green-ds hover:text-primary-ds"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col justify-between rounded-[24px] bg-primary-ds p-8 shadow-inner">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black-40">
                    Depoimentos selecionados
                  </p>
                  <p className="text-base text-black-70">
                    A EstágioAI conecta talentos universitários às empresas certas com feedback real e processos transparentes.
                  </p>
                </div>

                {/* Indicators */}
                <div className="mt-8 flex flex-col gap-5">
                  <div className="flex items-center gap-2.5">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f0f0f]/30 ${
                          index === currentIndex
                            ? 'h-2 w-2 bg-green-ds shadow-sm'
                            : 'h-1.5 w-1.5 bg-black-ds/15 hover:bg-black-ds/25'
                        }`}
                        aria-label={`Ir para depoimento ${index + 1}`}
                        aria-current={index === currentIndex ? 'true' : 'false'}
                      />
                    ))}
                  </div>

                  <div className="text-[11px] uppercase tracking-[0.28em] text-black-35">
                    {currentIndex + 1} de {testimonials.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarouselSection

