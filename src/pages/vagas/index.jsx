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
    <div className="min-h-screen bg-primary-ds text-primary-ds">
      <Navigation />

      <main id="main-content" role="main" aria-label="Página de vagas">
      {/* Header com background verde claro e título verde */}
      <section className="relative overflow-hidden bg-primary-ds no-overflow-x" role="banner" aria-label="Cabeçalho da página de vagas">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-14 -right-14 w-64 h-64 rounded-3xl border-[3px] border-green-ds opacity-30 rotate-6" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-3xl border-green-ds opacity-30 -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-5 sm:pt-8 sm:pb-6 md:pt-12 md:pb-8 text-center container-safe">
          <p className="text-xs tracking-wider text-black-50 font-semibold uppercase" role="text">Oportunidades</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 text-green-ds responsive-text">Encontre seu Estágio</h1>
          <p className="text-black-70 text-sm md:text-base mt-3 max-w-2xl mx-auto px-4 sm:px-0 responsive-text">
            Explore centenas de oportunidades de estágio e emprego em empresas que valorizam estudantes universitários
          </p>

          <form className="mt-6 mx-auto max-w-3xl flex flex-col sm:flex-row gap-2 items-stretch sm:items-center px-2 sm:px-0" role="search" aria-label="Formulário de busca de vagas">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black-40 pointer-events-none" aria-hidden="true" />
              <input 
                className="w-full h-12 min-h-[44px] pl-9 pr-3 rounded-lg border-2 border-black-10 bg-white-ds focus:outline-none focus:ring-4 focus:ring-green-20 focus:border-green-ds transition-all text-sm sm:text-base placeholder:text-black-40" 
                placeholder="Pesquisar por cargo, tecnologia, área..." 
                aria-label="Campo de busca por cargo, tecnologia ou área"
                type="search"
              />
            </div>
            <div className="relative w-full sm:w-56">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black-40 pointer-events-none" aria-hidden="true" />
              <input 
                className="w-full h-12 min-h-[44px] pl-9 pr-3 rounded-lg border-2 border-black-10 bg-white-ds focus:outline-none focus:ring-4 focus:ring-green-20 focus:border-green-ds transition-all text-sm sm:text-base placeholder:text-black-40" 
                placeholder="Localidade" 
                aria-label="Campo de localidade"
                type="text"
              />
            </div>
            <Button 
              variant="primary" 
              size="md" 
              type="submit"
              className="w-full sm:w-auto min-w-[120px] inline-flex items-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg"
              aria-label="Executar busca de vagas"
            >
              Buscar
            </Button>
          </form>
        </div>
      </section>

      {/* Main content com sidebar de filtros e grid de vagas */}
      <section className="py-6 sm:py-8 md:py-10 no-overflow-x" aria-label="Conteúdo principal com filtros e vagas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 container-safe">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            
            {/* Sidebar de filtros com badges verdes */}
            <aside className="lg:w-64 flex-shrink-0" role="complementary" aria-label="Filtros de busca">
              <div className="bg-white-ds rounded-2xl border-2 border-black-10 p-4 sm:p-5 lg:sticky lg:top-24 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-green-ds flex-shrink-0" aria-hidden="true" />
                  <h2 className="text-base sm:text-lg font-bold text-primary-ds">Filtros</h2>
                </div>

                {filterCategories.map((category, idx) => (
                  <fieldset key={idx} className="mb-4 sm:mb-5 last:mb-0">
                    <legend className="text-sm font-semibold text-primary-ds mb-2">{category.label}</legend>
                    <div className="flex flex-wrap gap-2" role="group" aria-label={`Opções de ${category.label.toLowerCase()}`}>
                      {category.options.map((option, optIdx) => (
                        <button
                          key={optIdx} 
                          className="inline-flex items-center gap-2 rounded-full border-2 border-black-10 bg-white-ds px-3 py-1 text-xs font-medium text-black-70 cursor-pointer hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds transition-all duration-200 touch-target"
                          aria-label={`Filtrar por ${option}`}
                          role="checkbox"
                          aria-checked="false"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                ))}

                <Button 
                  variant="ghost" 
                  size="sm" 
                  fullWidth 
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-black-10 bg-white-ds px-5 py-2.5 text-sm font-bold text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds transition-all duration-200"
                  aria-label="Limpar todos os filtros aplicados"
                >
                  Limpar Filtros
                </Button>
              </div>
            </aside>

            {/* Grid de vagas usando JobCard component */}
            <div className="flex-1 min-w-0" role="main" aria-label="Lista de vagas disponíveis">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-black-70 responsive-text" role="status" aria-live="polite">
                  Mostrando <span className="font-semibold text-primary-ds">{mockJobs.length}</span> vagas
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" role="list" aria-label="Vagas disponíveis">
                {mockJobs.map((job) => (
                  <div key={job.id} role="listitem">
                    <JobCard
                      logo={job.logo}
                      company={job.company}
                      title={job.title}
                      location={job.location}
                      type={job.type}
                      level={job.level}
                      badge={job.badge}
                      badgeColor={job.badgeColor}
                      onClick={() => console.log('Job clicked:', job.id)}
                      aria-label={`Vaga de ${job.title} na empresa ${job.company}, localizada em ${job.location}`}
                    />
                  </div>
                ))}
              </div>

              {/* Paginação com botões outline verdes */}
              <nav className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2" role="navigation" aria-label="Navegação de páginas">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="w-full sm:w-auto inline-flex items-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Ir para página anterior"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden xs:inline">Anterior</span>
                </Button>

                <div className="flex gap-1 flex-wrap justify-center" role="group" aria-label="Páginas disponíveis">
                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        aria-label={`Ir para página ${pageNum}`}
                        aria-current={currentPage === pageNum ? 'page' : undefined}
                        className={`min-w-[44px] min-h-[44px] w-10 h-10 rounded-lg font-semibold text-sm transition-all duration-200 touch-target ${
                          currentPage === pageNum
                            ? 'bg-green-ds text-primary-ds shadow-lg'
                            : 'bg-transparent text-black-70 hover:bg-green-ds/10 hover:text-primary-ds'
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
                  className="w-full sm:w-auto inline-flex items-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Ir para próxima página"
                >
                  <span className="hidden xs:inline">Próxima</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}
