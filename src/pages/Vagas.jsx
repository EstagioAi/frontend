import React, { useState } from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import JobCard from '@/components/ui/job-card'
import { Search, MapPin, Briefcase, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Vagas() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  // Mock data para demonstração
  const mockJobs = [
    {
      id: 1,
      logo: null,
      company: 'TechCorp',
      title: 'Desenvolvedor Frontend React',
      location: 'São Paulo, SP',
      type: 'Estágio',
      level: 'Júnior',
      badge: 'Novo',
      badgeColor: 'mint'
    },
    {
      id: 2,
      logo: null,
      company: 'StartupXYZ',
      title: 'Designer UX/UI',
      location: 'Remoto',
      type: 'CLT',
      level: 'Júnior',
      badge: 'Destaque',
      badgeColor: 'yellow'
    },
    {
      id: 3,
      logo: null,
      company: 'DataCo',
      title: 'Analista de Dados',
      location: 'Rio de Janeiro, RJ',
      type: 'Estágio',
      level: 'Júnior',
      badge: null,
      badgeColor: 'peach'
    },
    {
      id: 4,
      logo: null,
      company: 'DevHub',
      title: 'Desenvolvedor Backend Node.js',
      location: 'Belo Horizonte, MG',
      type: 'PJ',
      level: 'Pleno',
      badge: 'Urgente',
      badgeColor: 'peach'
    },
    {
      id: 5,
      logo: null,
      company: 'CloudTech',
      title: 'Engenheiro DevOps',
      location: 'Remoto',
      type: 'CLT',
      level: 'Pleno',
      badge: null,
      badgeColor: 'mint'
    },
    {
      id: 6,
      logo: null,
      company: 'MobileCo',
      title: 'Desenvolvedor Mobile Flutter',
      location: 'Curitiba, PR',
      type: 'Estágio',
      level: 'Júnior',
      badge: 'Novo',
      badgeColor: 'mint'
    }
  ]

  const filterCategories = [
    { label: 'Tipo de Vaga', options: ['Estágio', 'CLT', 'PJ', 'Freelance'], color: 'yellow' },
    { label: 'Nível', options: ['Júnior', 'Pleno', 'Sênior'], color: 'mint' },
    { label: 'Modalidade', options: ['Remoto', 'Presencial', 'Híbrido'], color: 'lavender' },
    { label: 'Área', options: ['Tecnologia', 'Design', 'Marketing', 'Vendas'], color: 'peach' }
  ]

  return (
    <div className="min-h-screen bg-white text-[#3d3d3a]">
      <Navigation />

      <main id="main-content">
      {/* Header com background bege claro e título coral */}
      <section className="relative overflow-hidden bg-[#faf9f5] no-overflow-x">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-14 -right-14 w-64 h-64 rounded-3xl border border-[rgba(217,119,87,0.1)] rotate-6" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-3xl border border-[rgba(217,119,87,0.1)] -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-5 sm:pt-8 sm:pb-6 md:pt-12 md:pb-8 text-center container-safe">
          <p className="text-xs tracking-wider text-[#6b6b68] font-semibold uppercase">Oportunidades</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 text-[#d97757] responsive-text">Encontre seu Estágio</h1>
          <p className="text-[#6b6b68] text-sm md:text-base mt-3 max-w-2xl mx-auto px-4 sm:px-0 responsive-text">
            Explore centenas de oportunidades de estágio e emprego em empresas que valorizam estudantes universitários
          </p>

          <div className="mt-6 mx-auto max-w-3xl flex flex-col sm:flex-row gap-2 items-stretch sm:items-center px-2 sm:px-0">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b68] pointer-events-none" />
              <input 
                className="w-full h-12 min-h-[44px] pl-9 pr-3 rounded-2xl border border-[rgba(217,119,87,0.2)] bg-white focus:outline-none focus:ring-2 focus:ring-[#d97757]/60 focus:border-[#d97757] transition-all text-sm sm:text-base" 
                placeholder="Pesquisar por cargo, tecnologia, área..." 
                aria-label="Pesquisar vagas"
              />
            </div>
            <div className="relative w-full sm:w-56">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b68] pointer-events-none" />
              <input 
                className="w-full h-12 min-h-[44px] pl-9 pr-3 rounded-2xl border border-[rgba(217,119,87,0.2)] bg-white focus:outline-none focus:ring-2 focus:ring-[#d97757]/60 focus:border-[#d97757] transition-all text-sm sm:text-base" 
                placeholder="Localidade" 
                aria-label="Localidade"
              />
            </div>
            <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[120px]">
              Buscar
            </Button>
          </div>
        </div>
      </section>

      {/* Main content com sidebar de filtros e grid de vagas */}
      <section className="py-6 sm:py-8 md:py-10 no-overflow-x">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 container-safe">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            
            {/* Sidebar de filtros com badges pastel */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-[rgba(217,119,87,0.15)] p-4 sm:p-5 lg:sticky lg:top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-[#d97757] flex-shrink-0" />
                  <h2 className="text-base sm:text-lg font-bold text-[#3d3d3a]">Filtros</h2>
                </div>

                {filterCategories.map((category, idx) => (
                  <div key={idx} className="mb-4 sm:mb-5 last:mb-0">
                    <h3 className="text-sm font-semibold text-[#3d3d3a] mb-2">{category.label}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.options.map((option, optIdx) => (
                        <Badge 
                          key={optIdx} 
                          variant={category.color} 
                          size="sm"
                          className="cursor-pointer hover:opacity-80 transition-opacity touch-target"
                        >
                          {option}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}

                <Button variant="ghost" size="sm" fullWidth className="mt-4">
                  Limpar Filtros
                </Button>
              </div>
            </aside>

            {/* Grid de vagas usando JobCard component */}
            <div className="flex-1 min-w-0">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-[#6b6b68] responsive-text">
                  Mostrando <span className="font-semibold text-[#3d3d3a]">{mockJobs.length}</span> vagas
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {mockJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    logo={job.logo}
                    company={job.company}
                    title={job.title}
                    location={job.location}
                    type={job.type}
                    level={job.level}
                    badge={job.badge}
                    badgeColor={job.badgeColor}
                    onClick={() => console.log('Job clicked:', job.id)}
                  />
                ))}
              </div>

              {/* Paginação com botões outline coral */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="w-full sm:w-auto"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden xs:inline">Anterior</span>
                </Button>

                <div className="flex gap-1 flex-wrap justify-center">
                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        aria-label={`Página ${pageNum}`}
                        aria-current={currentPage === pageNum ? 'page' : undefined}
                        className={`min-w-[44px] min-h-[44px] w-10 h-10 rounded-xl font-semibold text-sm transition-all touch-target ${
                          currentPage === pageNum
                            ? 'bg-[#d97757] text-white shadow-[0_4px_6px_rgba(217,119,87,0.25)]'
                            : 'bg-transparent text-[#6b6b68] hover:bg-[rgba(217,119,87,0.05)] hover:text-[#d97757]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="w-full sm:w-auto"
                >
                  <span className="hidden xs:inline">Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}
