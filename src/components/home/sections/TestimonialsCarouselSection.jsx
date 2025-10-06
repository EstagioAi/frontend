import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Rodrigo G.',
    role: 'Ciências Contábeis',
    university: 'UFU',
    avatar: 'RG',
    avatarColor: '#FF6B9D',
    frustrationLevel: 4,
    quote: 'A falta de padronização entre os sites de vagas para estágio é o maior problema. Cada plataforma tem uma interface e exigências diferentes, deixando tudo confuso e cansativo.',
    painPoints: ['Múltiplas plataformas', 'Processos diferentes em cada site']
  },
  {
    name: 'Júlia M.',
    role: 'Engenharia Civil',
    university: 'UFPR',
    avatar: 'JM',
    avatarColor: '#00D2FF',
    frustrationLevel: 3,
    quote: 'A maior dificuldade é encontrar vagas em áreas específicas através de uma plataforma boa que não recomende sempre as mesmas vagas repetidas.',
    painPoints: ['Vagas genéricas', 'Falta de personalização']
  },
  {
    name: 'Giovanna P.',
    role: 'Engenharia Mecânica',
    university: 'Poli USP',
    avatar: 'GP',
    avatarColor: '#FFB800',
    frustrationLevel: 3,
    quote: 'Ausência de feedback das empresas e a quantidade muito grande de plataformas sem unificação. Às vezes fico perdido sem saber por onde apliquei na empresa X ou em quais processos ainda estou participando.',
    painPoints: ['Sem retorno das empresas', 'Difícil acompanhar candidaturas']
  },
  {
    name: 'Penuel P.',
    role: 'Análise e Desenvolvimento',
    university: 'Uninta',
    avatar: 'PP',
    avatarColor: '#A855F7',
    frustrationLevel: 3,
    quote: 'Não sei em qual plataforma procurar, quais empresas estão disponíveis para estágios e para qual cargo. Onde se inscrever? Tudo é muito confuso e disperso.',
    painPoints: ['Muitas opções', 'Falta de direcionamento']
  },
  {
    name: 'Tales K.',
    role: 'Engenharia de Computação',
    university: 'UNIFEI',
    avatar: 'TK',
    avatarColor: '#10B981',
    frustrationLevel: 3,
    quote: 'A maior dificuldade é encontrar plataformas de fácil acesso com diversas vagas em diferentes empresas, tudo centralizado em um só lugar.',
    painPoints: ['Vagas espalhadas', 'Difícil comparar oportunidades']
  },
  {
    name: 'Arthur S.',
    role: 'Engenharia Mecânica',
    university: 'Poli USP',
    avatar: 'AS',
    avatarColor: '#F59E0B',
    frustrationLevel: 4,
    quote: 'Falta de divulgação das vagas. É muito difícil de encontrar as oportunidades porque estão espalhadas em vários lugares diferentes.',
    painPoints: ['Vagas mal divulgadas', 'Difícil descobrir oportunidades']
  },
  {
    name: 'Fernando S.',
    role: 'Farmácia',
    university: 'PUC-Campinas',
    avatar: 'FS',
    avatarColor: '#EF4444',
    frustrationLevel: 4,
    quote: 'Muitas vezes as vagas não estão em sites de recrutamento, e sim escondidas no site da própria empresa/indústria. É impossível acompanhar tudo.',
    painPoints: ['Informação fragmentada', 'Impossível monitorar tudo']
  },
  {
    name: 'Gabriel M.',
    role: 'Engenharia de Computação',
    university: 'UNIFEI',
    avatar: 'GM',
    avatarColor: '#8B5CF6',
    frustrationLevel: 3,
    quote: 'A maior dificuldade é atender as expectativas da vaga e se destacar perante a concorrência. Não sei se minhas skills são suficientes.',
    painPoints: ['Requisitos confusos', 'Falta de confiança no match']
  },
  {
    name: 'Ana Clara C.',
    role: 'Enfermagem',
    university: 'Unopar',
    avatar: 'AC',
    avatarColor: '#14B8A6',
    frustrationLevel: 3,
    quote: 'Falta de experiência sendo exigida mesmo para estágios, muita concorrência e poucas vagas disponíveis na minha área.',
    painPoints: ['Exigem experiência em estágio', 'Poucas vagas na área']
  },
  {
    name: 'Laura L.',
    role: 'Administração',
    university: 'FGV-SP',
    avatar: 'LL',
    avatarColor: '#06B6D4',
    frustrationLevel: 3,
    quote: 'A maior dificuldade é definir quais são os estágios mais pertinentes ao meu perfil. Perco muito tempo analisando vagas que não fazem sentido.',
    painPoints: ['Vagas não alinhadas', 'Tempo perdido filtrando']
  },
  {
    name: 'Enzo A.',
    role: 'Engenharia Mecânica',
    university: 'Poli USP',
    avatar: 'EA',
    avatarColor: '#EC4899',
    frustrationLevel: 4,
    quote: 'As empresas fazem análises muito rasas das candidaturas. Sinto que meu currículo nem é lido de verdade antes de ser descartado.',
    painPoints: ['Análise superficial', 'Falta de consideração real']
  }
]

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} de 5 estrelas`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5"
          fill={i < rating ? '#82f7b3' : '#e5e7eb'}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const TestimonialsCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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

  // Auto-rotate testimonials every 5 seconds
  React.useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Change card every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isPaused])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative overflow-hidden section-spacing" style={{ background: '#FFFFFF' }}>
      {/* Subtle background decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(130, 247, 179, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(130, 247, 179, 0.05) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-redesign">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
              O que universitários dizem
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[42px]" style={{ color: 'var(--color-text-primary)', lineHeight: '1.2' }}>
              As{' '}
              <span className="relative inline-block">
                <span className="relative z-10">maiores frustrações</span>
                <span className="absolute bottom-1 left-0 h-3 w-full bg-red-500/20 -rotate-1"></span>
              </span>
              {' '}ao buscar estágios hoje
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Conversamos com centenas de universitários. Veja o que eles relataram sobre suas experiências em sites de vagas.
            </p>
          </div>
          
          {/* Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={goToPrevious}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-black/10 text-black transition-all duration-300 hover:border-green-ds hover:bg-green-ds/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-ds focus-visible:ring-offset-2"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-black/10 text-black transition-all duration-300 hover:border-green-ds hover:bg-green-ds/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-ds focus-visible:ring-offset-2"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative" role="region" aria-label="Depoimentos de usuários" aria-live="polite">
          {/* Testimonial Card - REDESIGN 2025 */}
          <div 
            className="mx-auto max-w-4xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <article className="relative overflow-hidden rounded-2xl bg-white px-10 py-12 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 animate-fadeIn">
              {/* Decorative Quote Mark with Opacity */}
              <div 
                className="absolute -top-4 -left-4 text-[180px] font-serif leading-none select-none pointer-events-none"
                style={{ color: 'rgba(130, 247, 179, 0.1)' }}
                aria-hidden="true"
              >
                "
              </div>
              
              <div className="relative z-10 flex flex-col gap-8">
                {/* Avatar and Info */}
                <header className="flex items-start gap-4">
                  <div 
                    className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg"
                    style={{ background: currentTestimonial.avatarColor }}
                  >
                    {currentTestimonial.avatar}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-base" style={{ color: 'var(--color-text-secondary)' }}>
                        {currentTestimonial.role}
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {currentTestimonial.university}
                    </span>
                  </div>
                </header>

                {/* Frustration Level */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600">Nível de frustração:</span>
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 w-2 rounded-full transition-all ${
                          i < currentTestimonial.frustrationLevel 
                            ? 'bg-red-500' 
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-red-500">{currentTestimonial.frustrationLevel}/5</span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg leading-relaxed" style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
                  {currentTestimonial.quote}
                </blockquote>

                {/* Pain Points */}
                <div className="rounded-xl bg-red-50 border border-red-100 p-4">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-red-600">Principais Dificuldades</p>
                  <ul className="grid gap-3 text-sm sm:grid-cols-2">
                    {currentTestimonial.painPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <svg className="h-5 w-5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* Auto-rotate progress bar */}
            {!isPaused && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-2xl overflow-hidden">
                <div 
                  className="h-full bg-green-ds transition-all"
                  style={{
                    animation: 'progressBar 5s linear infinite',
                    animationPlayState: isPaused ? 'paused' : 'running'
                  }}
                />
              </div>
            )}

            {/* Navigation - Mobile + Indicators */}
            <div className="mt-12 flex flex-col items-center gap-6">
              {/* Mobile Navigation */}
              <div className="flex lg:hidden items-center gap-3">
                <button
                  onClick={() => {
                    goToPrevious()
                    setIsPaused(true)
                    setTimeout(() => setIsPaused(false), 10000) // Resume after 10s
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white border-2 border-black/10 text-black transition-all duration-300 hover:border-green-ds hover:bg-green-ds/5"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    goToNext()
                    setIsPaused(true)
                    setTimeout(() => setIsPaused(false), 10000) // Resume after 10s
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white border-2 border-black/10 text-black transition-all duration-300 hover:border-green-ds hover:bg-green-ds/5"
                  aria-label="Próximo"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index)
                        setIsPaused(true)
                        setTimeout(() => setIsPaused(false), 10000) // Resume after 10s
                      }}
                      className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-ds ${
                        index === currentIndex
                          ? 'h-2.5 w-2.5 bg-green-ds shadow-sm'
                          : 'h-2 w-2 bg-black/15 hover:bg-black/25'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                      aria-current={index === currentIndex ? 'true' : 'false'}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {isPaused ? 'Pausado' : `${currentIndex + 1} de ${testimonials.length} • Troca automática`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - We're solving these problems */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-green-ds/10 to-green-ds/5 border border-green-ds/20 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-black mb-3">
              Cansado dessas frustrações?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Estamos construindo uma plataforma que resolve <span className="font-bold text-green-ds">todos esses problemas</span>. 
              Vagas personalizadas, processo simplificado e feedback em tempo real.
            </p>
            <button className="inline-flex items-center gap-2 rounded-xl bg-green-ds px-8 py-4 text-base font-semibold text-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Quero ser um dos primeiros a testar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarouselSection
