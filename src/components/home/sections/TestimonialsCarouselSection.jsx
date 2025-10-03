import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Layla Abbas',
    role: 'Gerente de Marketing',
    avatar: '👩‍💼',
    quote: 'Eu estava usando vários quadros de vagas e ficando sobrecarregada. No EstágioAI, economizei muito tempo e consegui meu emprego dos sonhos em uma ótima empresa!'
  },
  {
    name: 'Carlos Silva',
    role: 'Desenvolvedor Frontend',
    avatar: '👨‍💻',
    quote: 'A plataforma me ajudou a encontrar vagas que realmente combinavam com meu perfil. O processo foi rápido e eficiente, sem perder tempo com candidaturas irrelevantes.'
  },
  {
    name: 'Ana Costa',
    role: 'Designer UX/UI',
    avatar: '👩‍🎨',
    quote: 'Adorei a experiência! O sistema de match me mostrou exatamente as vagas que faziam sentido para minha carreira. Consegui meu estágio em menos de 2 semanas!'
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
    <section 
      className="relative overflow-hidden" 
      style={{ 
        paddingTop: 'var(--space-12)', 
        paddingBottom: 'var(--space-12)', 
        background: 'var(--color-bg-primary)' 
      }}
    >
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-100px] h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'rgba(217, 119, 87, 0.1)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="mb-4 uppercase tracking-[0.2em]"
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-semibold)',
              color: 'var(--text-primary)',
              opacity: 0.6
            }}
          >
            Usuários do EstágioAI
          </p>
          <h2
            className="tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3rem)',
              fontWeight: 'var(--font-bold)',
              lineHeight: 'var(--leading-tight)',
              color: 'var(--text-primary)'
            }}
          >
            O Que Nossos Usuários Dizem{' '}
            <span style={{ color: 'var(--color-coral-primary)' }}>Sobre o EstágioAI</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative" role="region" aria-label="Depoimentos de usuários" aria-live="polite">
          <div className="grid items-center lg:grid-cols-[400px_1fr]" style={{ gap: 'var(--space-8)' }}>
            {/* Avatar Card */}
            <div className="mx-auto w-full max-w-[400px]">
              <div 
                className="relative overflow-hidden rounded-[3rem] p-12" 
                style={{ 
                  background: 'var(--color-bg-white)', 
                  border: '1px solid var(--border-coral)',
                  boxShadow: '0 30px 60px -30px var(--shadow-coral)' 
                }}
              >
                <div className="flex items-center justify-center">
                  <div className="text-[180px] leading-none">
                    {currentTestimonial.avatar}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              {/* Navigation Arrows */}
              <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-5)' }}>
                <div className="flex" style={{ gap: 'var(--space-2)' }}>
                  <button
                    onClick={goToPrevious}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:scale-110"
                    style={{ border: '1px solid var(--border-coral-strong)', color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-coral-primary)'; e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg-white)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:scale-110"
                    style={{ border: '1px solid var(--border-coral-strong)', color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-coral-primary)'; e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg-white)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                    aria-label="Próximo"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Dots Indicator - 2 circles and 1 line */}
                <div className="flex items-center" style={{ gap: '8px' }}>
                  {testimonials.map((_, index) => {
                    const isActive = index === currentIndex
                    const isLastDot = index === testimonials.length - 1

                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className="transition-all"
                        style={{
                          width: isLastDot ? '48px' : '24px',
                          height: isLastDot ? '2px' : '24px',
                          borderRadius: isLastDot ? '9999px' : '50%',
                          background: isActive ? '#d97757' : '#e0e0e0'
                        }}
                        aria-label={`Ir para depoimento ${index + 1}`}
                      />
                    )
                  })}
                </div>
              </div>

              {/* Testimonial Card */}
              <div 
                className="rounded-3xl bg-white" 
                style={{ 
                  padding: 'var(--space-6)',
                  border: '1px solid var(--border-coral)', 
                  boxShadow: '0 20px 50px -30px var(--shadow-coral)' 
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 
                    style={{ 
                      fontSize: 'var(--text-2xl)', 
                      fontWeight: 'var(--font-semibold)', 
                      lineHeight: 'var(--leading-tight)',
                      color: 'var(--text-primary)' 
                    }}
                  >
                    {currentTestimonial.name}
                  </h3>
                  <p 
                    style={{ 
                      marginTop: 'var(--space-1)',
                      fontSize: 'var(--text-sm)', 
                      fontWeight: 'var(--font-medium)', 
                      color: 'var(--color-coral-primary)' 
                    }}
                  >
                    {currentTestimonial.role}
                  </p>
                </div>

                <blockquote 
                  style={{ 
                    fontSize: 'var(--text-lg)', 
                    lineHeight: 'var(--leading-relaxed)', 
                    color: 'var(--text-primary)', 
                    opacity: 0.75 
                  }}
                >
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarouselSection

