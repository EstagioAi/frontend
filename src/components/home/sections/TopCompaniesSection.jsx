import React from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const companies = [
  {
    name: 'Upwork',
    logo: '🆙',
    title: 'Upwork é uma Plataforma Online Popular',
    description: 'Upwork é uma ferramenta valiosa para empresas que buscam talentos freelancers e para profissionais independentes que procuram expandir seu alcance e clientela.',
    bgColor: 'bg-[#fef9f6]',
    iconBg: 'bg-white-ds'
  },
  {
    name: 'Google',
    logo: '🔍',
    title: 'Google é um Gigante da Tecnologia',
    description: 'Google é um grande player na indústria de tecnologia, moldando como as pessoas acessam informações, se comunicam e consomem entretenimento.',
    bgColor: 'bg-white-ds',
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
    <section className="relative overflow-hidden bg-primary-ds py-24">
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="section1"
        opacity={0.2}
        color="rgba(130, 247, 179, 0.8)"
        accentColor="rgba(17, 94, 89, 0.22)"
        accentOpacity={0.18}
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.18}
        color="rgba(130, 247, 179, 0.95)"
        accentColor="rgba(203, 213, 225, 0.55)"
        accentOpacity={0.16}
        blendMode="normal"
      />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-black-50">
              Principais Empresas
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-ds sm:text-4xl lg:text-5xl">
              Melhores Lugares{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-ds">para Trabalhar</span>
                <span className="absolute -bottom-0.5 left-0 h-2 w-full bg-green-ds -z-0 rounded-sm" />
              </span>
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

            <p className="mb-8 text-base leading-relaxed text-black-70">
              Aproveite a seção de avaliação de empresas do job finder para obter insights sobre experiências de funcionários em diferentes empresas.
            </p>

            {/* Search Bar */}
            <div className="mb-6 flex items-center gap-3 rounded-lg border-2 border-black-10 bg-white-ds px-5 py-3 shadow-sm transition-all duration-200 hover:border-green-ds focus-within:border-green-ds focus-within:ring-4 focus-within:ring-[#82f7b3]/20">
              <Search className="h-4 w-4 text-black-50" />
              <input
                type="text"
                placeholder="Buscar por uma Empresa"
                className="flex-1 border-none bg-transparent text-sm text-primary-ds placeholder:text-black-40 focus:outline-none"
              />
            </div>

            <button
              className="inline-flex items-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg focus:ring-4 focus:ring-green-20"
            >
              Começar
            </button>
          </div>

          {/* Right Column - Companies Grid */}
          <div className="grid gap-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="group relative overflow-hidden rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Logo */}
                  <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${company.iconBg} text-2xl shadow-md transition-all duration-300 group-hover:scale-105`}>
                    {company.logo}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium text-black-50 uppercase tracking-wider">
                          {company.name}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-primary-ds">
                          {company.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-black-70">
                      {company.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <button
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-black-ds text-white-ds transition-all duration-200 hover:bg-green-ds hover:text-primary-ds hover:scale-110"
                    aria-label={`Ver mais sobre ${company.name}`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
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

