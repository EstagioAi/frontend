import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Estagiária de UX Design',
    company: 'TechCorp',
    avatar: '👩‍💼',
    rating: 5,
    text: 'O EstágioAI transformou minha busca por estágio! Em menos de uma semana encontrei a oportunidade perfeita. A plataforma é intuitiva e as recomendações são super precisas.',
    highlight: 'Encontrei em menos de 1 semana'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'Estagiário de Desenvolvimento',
    company: 'StartupXYZ',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Nunca imaginei que seria tão fácil encontrar um estágio remoto. A filtragem de vagas é excelente e recebi respostas muito rápidas das empresas.',
    highlight: 'Respostas rápidas das empresas'
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Estagiária de Marketing',
    company: 'Agência Digital',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'A melhor plataforma de estágios que já usei! O sistema de match é incrível e me ajudou a encontrar uma empresa alinhada com meus valores e objetivos profissionais.',
    highlight: 'Sistema de match incrível'
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    role: 'Estagiário de Data Science',
    company: 'Data Insights',
    avatar: '👨‍🔬',
    rating: 5,
    text: 'Consegui meu primeiro estágio através do EstágioAI e não poderia estar mais feliz! A plataforma me ajudou a destacar minhas habilidades e conquistar a vaga dos meus sonhos.',
    highlight: 'Primeiro estágio conquistado'
  },
  {
    id: 5,
    name: 'Juliana Mendes',
    role: 'Estagiária de RH',
    company: 'RH Solutions',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Plataforma completa e profissional. Os alertas de novas vagas são perfeitos e me mantêm sempre atualizada sobre as melhores oportunidades do mercado.',
    highlight: 'Alertas perfeitos'
  },
  {
    id: 6,
    name: 'Lucas Ferreira',
    role: 'Estagiário de Vendas',
    company: 'Sales Corp',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Recomendo muito! Interface simples, processo ágil e suporte excepcional. Consegui várias entrevistas em poucas semanas.',
    highlight: 'Várias entrevistas rapidamente'
  }
]

const ImprovedTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 })
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal({ threshold: 0.1 })

  const itemsPerView = 3
  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section 
      className="relative overflow-hidden section-spacing"
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(240, 255, 247, 0.3) 50%, rgba(255, 255, 255, 1) 100%)'
      }}
    >
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 127, 0.3) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 213, 99, 0.2) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-redesign">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-16 text-center max-w-3xl mx-auto scroll-reveal ${headerVisible ? 'revealed' : ''}`}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
            Depoimentos
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[42px] text-gray-900 mb-4" style={{ lineHeight: '1.2' }}>
            O que Dizem Nossos{' '}
            <span className="text-gradient-green">Estagiários</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de estudantes que transformaram suas carreiras através do EstágioAI
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className={`scroll-reveal ${carouselVisible ? 'revealed' : ''}`}
        >
          {/* Desktop: 3 cards side by side */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
                isVisible={carouselVisible}
              />
            ))}
          </div>

          {/* Tablet: 2 cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 mb-8">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
                isVisible={carouselVisible}
              />
            ))}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden mb-8">
            <TestimonialCard 
              testimonial={testimonials[currentIndex]} 
              index={0}
              isVisible={carouselVisible}
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 transition-all duration-300 hover:border-green-ds hover:text-green-ds hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-green-ds' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="p-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 transition-all duration-300 hover:border-green-ds hover:text-green-ds hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index, isVisible }) => {
  return (
    <article 
      className={`testimonial-card relative scroll-reveal-scale stagger-${(index % 3) + 1} ${isVisible ? 'revealed' : ''}`}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-green-ds/10">
        <Quote className="w-12 h-12" fill="currentColor" />
      </div>

      {/* Avatar and Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-ds/20 to-green-ds/5 flex items-center justify-center text-3xl border-2 border-green-ds/20">
          {testimonial.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 truncate">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-600 truncate">
            {testimonial.role}
          </p>
          <p className="text-xs text-green-ds font-medium truncate">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star 
            key={i} 
            className="w-5 h-5 text-yellow-400 fill-yellow-400" 
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-4 text-base">
        {testimonial.text}
      </p>

      {/* Highlight Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-ds/10 border border-green-ds/20">
        <div className="w-2 h-2 rounded-full bg-green-ds animate-pulse"></div>
        <span className="text-sm font-medium text-green-ds">
          {testimonial.highlight}
        </span>
      </div>
    </article>
  )
}

export default ImprovedTestimonialsSection
