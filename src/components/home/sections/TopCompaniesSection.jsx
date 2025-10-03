import React from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const companies = [
  {
    name: 'Upwork',
    logo: '🆙',
    title: 'Upwork é uma Plataforma Online Popular',
    description: 'Upwork é uma ferramenta valiosa para empresas que buscam talentos freelancers e para profissionais independentes que procuram expandir seu alcance e clientela.',
    bgColor: 'bg-[#fef9f6]',
    iconBg: 'bg-white'
  },
  {
    name: 'Google',
    logo: '🔍',
    title: 'Google é um Gigante da Tecnologia',
    description: 'Google é um grande player na indústria de tecnologia, moldando como as pessoas acessam informações, se comunicam e consomem entretenimento.',
    bgColor: 'bg-white',
    iconBg: 'bg-[#3d3d3a]'
  },
  {
    name: 'LinkedIn',
    logo: '💼',
    title: 'LinkedIn é uma Plataforma de Networking Profissional',
    description: 'No geral, LinkedIn é uma ferramenta poderosa para profissionais de todos os níveis.',
    bgColor: 'bg-[#fef9f6]',
    iconBg: 'bg-[#0A66C2]'
  }
]

const TopCompaniesSection = () => {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: '#f5f4ed' }}>
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-[-100px] h-[350px] w-[350px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(217, 119, 87, 0.15), transparent)' }} />
        <div className="absolute bottom-[-100px] left-1/4 h-[350px] w-[350px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(217, 119, 87, 0.08), transparent)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: '#d97757' }}>
              Principais Empresas
            </p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: '#3d3d3a' }}>
              Melhores Lugares{' '}
              <span style={{ color: '#d97757' }}>para Trabalhar</span>
              {' '}2024
            </h2>

            {/* Decorative arrow */}
            <div className="mb-8 hidden lg:block">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                style={{ color: '#d97757' }}
              >
                <path
                  d="M10 10 Q 60 60, 110 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M105 25 L110 30 L105 35"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mb-8 text-base" style={{ color: '#6b6b68' }}>
              Aproveite a seção de avaliação de empresas do job finder para obter insights sobre experiências de funcionários em diferentes empresas.
            </p>

            {/* Search Bar */}
            <div className="mb-6 flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm" style={{ border: '1px solid rgba(217, 119, 87, 0.2)' }}>
              <Search className="h-5 w-5" style={{ color: '#d97757' }} />
              <input
                type="text"
                placeholder="Buscar por uma Empresa"
                className="flex-1 border-none bg-transparent text-sm placeholder:text-slate-400 focus:outline-none"
                style={{ color: '#3d3d3a' }}
              />
            </div>

            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-white transition-all hover:opacity-90"
              style={{ background: '#d97757', boxShadow: '0 8px 24px rgba(61, 61, 58, 0.3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(61, 61, 58, 0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 61, 58, 0.3)' }}
            >
              Começar
            </Button>
          </div>

          {/* Right Column - Companies Grid */}
          <div className="grid gap-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`group relative overflow-hidden rounded-3xl ${company.bgColor} p-8 shadow-[0_8px_30px_rgba(217,119,87,0.12)] transition-all duration-300 ${index === 0 ? 'animate-slow-float' : index === 1 ? 'animate-slow-float-delayed' : 'animate-float'}`}
                style={{ 
                  border: '1px solid rgba(217, 119, 87, 0.15)',
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(217, 119, 87, 0.25)';
                  e.currentTarget.style.border = '1px solid rgba(217, 119, 87, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(217, 119, 87, 0.12)';
                  e.currentTarget.style.border = '1px solid rgba(217, 119, 87, 0.15)';
                }}
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Logo */}
                  <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${company.iconBg} text-3xl shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                    {company.logo}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium transition-colors duration-300 group-hover:opacity-90" style={{ color: '#d97757' }}>
                          {company.name}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold transition-colors duration-300 group-hover:text-[#d97757]" style={{ color: '#3d3d3a' }}>
                          {company.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: '#6b6b68' }}>
                      {company.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <button
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-white transition-all duration-300 hover:scale-110"
                    style={{ background: '#3d3d3a', boxShadow: '0 6px 20px rgba(217, 119, 87, 0.3)' }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.background = '#d97757';
                      e.currentTarget.style.boxShadow = '0 10px 28px rgba(217, 119, 87, 0.5)';
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.background = '#3d3d3a';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(217, 119, 87, 0.3)';
                    }}
                    aria-label={`Ver mais sobre ${company.name}`}
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopCompaniesSection

