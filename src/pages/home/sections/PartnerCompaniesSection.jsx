import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Mock company logos - substituir com logos reais
const companies = [
  { id: 1, name: 'Google', logo: '/images/companies/google.webp' },
  { id: 2, name: 'Microsoft', logo: '/images/companies/microsft.webp' },
  { id: 3, name: 'Amazon', logo: '/images/companies/amazon.webp' },
  { id: 4, name: 'Meta', logo: '/images/companies/meta.webp' },
  { id: 5, name: 'Netflix', logo: '/images/companies/netflix.webp' },
  { id: 6, name: 'IBM', logo: '/images/companies/ibm.webp' },
  { id: 7, name: 'Google', logo: '/images/companies/google.webp' },
  { id: 8, name: 'Microsoft', logo: '/images/companies/microsft.webp' },
]

const PartnerCompaniesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 })
  const { ref: logoRef, isVisible: logoVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="relative overflow-hidden section-spacing bg-white">
      {/* Subtle geometric pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            Parceiros de Confiança
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[42px] text-gray-900 mb-4" style={{ lineHeight: '1.2' }}>
            Empresas que{' '}
            <span className="text-gradient-green">Confiam</span>{' '}
            no EstágioAI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conectamos você com as melhores empresas do mercado, desde startups inovadoras até grandes corporações
          </p>
        </div>

        {/* Infinite Marquee - First Row */}
        <div 
          ref={logoRef}
          className={`mb-8 scroll-reveal ${logoVisible ? 'revealed' : ''}`}
        >
          <div className="marquee-container overflow-hidden">
            <div className="flex gap-12 animate-marquee-left">
              {/* Duplicate logos for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.id}-${index}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  style={{ willChange: 'transform, filter' }}
                >
                  <img
                    src={company.logo}
                    alt={`Logo da empresa ${company.name}`}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats below companies */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '200+', label: 'Empresas Parceiras' },
            { number: '50+', label: 'Setores de Atuação' },
            { number: '2.5k+', label: 'Vagas Publicadas' },
            { number: '95%', label: 'Taxa de Satisfação' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`text-center scroll-reveal stagger-${index + 1} ${logoVisible ? 'revealed' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-green mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Sua empresa também pode fazer parte!
          </p>
          <button 
            className="btn-primary-redesign inline-flex items-center gap-2 group"
            aria-label="Cadastrar minha empresa"
          >
            Cadastrar Minha Empresa
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PartnerCompaniesSection
