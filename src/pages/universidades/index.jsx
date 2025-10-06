import React, { useState } from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { GraduationCap, Search, Globe2, Building2, MapPin, Filter } from 'lucide-react'
import { Select } from '@/components/ui/select'

const universidades = [
  { nome: 'USP', cidade: 'São Paulo, SP', regiao: 'Sudeste', vagasAtivas: 12, programas: 3, site: 'https://www.usp.br', cursos: ['Engenharia', 'Medicina', 'Direito'] },
  { nome: 'Unicamp', cidade: 'Campinas, SP', regiao: 'Sudeste', vagasAtivas: 7, programas: 2, site: 'https://www.unicamp.br', cursos: ['Tecnologia', 'Ciências'] },
  { nome: 'UFRJ', cidade: 'Rio de Janeiro, RJ', regiao: 'Sudeste', vagasAtivas: 9, programas: 2, site: 'https://www.ufrj.br', cursos: ['Engenharia', 'Artes'] },
  { nome: 'UFSC', cidade: 'Florianópolis, SC', regiao: 'Sul', vagasAtivas: 4, programas: 1, site: 'https://www.ufsc.br', cursos: ['Tecnologia'] },
  { nome: 'UnB', cidade: 'Brasília, DF', regiao: 'Centro-Oeste', vagasAtivas: 8, programas: 3, site: 'https://www.unb.br', cursos: ['Administração', 'Direito'] },
  { nome: 'UFPE', cidade: 'Recife, PE', regiao: 'Nordeste', vagasAtivas: 6, programas: 2, site: 'https://www.ufpe.br', cursos: ['Medicina', 'Engenharia'] },
]

const regioes = ['Todas', 'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul']
const cursos = ['Todos', 'Engenharia', 'Medicina', 'Direito', 'Tecnologia', 'Ciências', 'Artes', 'Administração']

export default function Universidades() {
  const [filtroRegiao, setFiltroRegiao] = useState('Todas')
  const [filtroCurso, setFiltroCurso] = useState('Todos')
  const [busca, setBusca] = useState('')

  const universidadesFiltradas = universidades.filter(uni => {
    const matchRegiao = filtroRegiao === 'Todas' || uni.regiao === filtroRegiao
    const matchCurso = filtroCurso === 'Todos' || uni.cursos.includes(filtroCurso)
    const matchBusca = busca === '' || 
      uni.nome.toLowerCase().includes(busca.toLowerCase()) ||
      uni.cidade.toLowerCase().includes(busca.toLowerCase())
    
    return matchRegiao && matchCurso && matchBusca
  })

  return (
    <div className="min-h-screen bg-primary-ds text-primary-ds">
      <Navigation />
      
      <main id="main-content">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-ds py-20">
        {/* Elementos decorativos minimalistas */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full border-[3px] border-green-ds opacity-30" />
          <div className="absolute -bottom-24 -left-16 h-96 w-96 rounded-full border-[3px] border-green-ds opacity-20" />
          <div className="absolute top-1/2 right-1/4 h-4 w-4 rounded-full bg-green-ds opacity-40" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-black-50">PARCERIAS ACADÊMICAS</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-ds sm:text-4xl lg:text-5xl">
              Universidades Parceiras
            </h1>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-green-ds" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black-70">
              Descubra programas, feiras e parcerias entre universidades e empresas. 
              Um hub informativo para aproximar estudantes de oportunidades no mercado de trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="bg-white-ds py-8 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Busca */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black-40" />
              <input 
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full rounded-lg border-2 border-black-10 bg-white-ds py-3 pl-10 pr-4 text-base text-primary-ds placeholder:text-black-40 outline-none transition-all duration-200 focus:border-green-ds focus:ring-4 focus:ring-green-20" 
                placeholder="Buscar universidade ou cidade"
              />
            </div>

            {/* Filtros */}
            <div className="filter-container">
              <div className="filter-label">
                <Filter className="h-4 w-4" />
                <span>Filtros:</span>
              </div>

              <Select
                size="sm"
                value={filtroRegiao}
                onChange={(e) => setFiltroRegiao(e.target.value)}
                className="min-w-[150px]"
              >
                {regioes.map(regiao => (
                  <option key={regiao} value={regiao}>{regiao}</option>
                ))}
              </Select>

              <Select
                size="sm"
                value={filtroCurso}
                onChange={(e) => setFiltroCurso(e.target.value)}
                className="min-w-[180px]"
              >
                {cursos.map(curso => (
                  <option key={curso} value={curso}>{curso}</option>
                ))}
              </Select>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mt-4-ds text-sm-ds text-secondary-ds">
            {universidadesFiltradas.length} universidade{universidadesFiltradas.length !== 1 ? 's' : ''} encontrada{universidadesFiltradas.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Grid de Universidades */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universidadesFiltradas.map((uni) => (
              <article 
                key={uni.nome} 
                className="group rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
              >
                {/* Header do Card */}
                <header className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-ds/10 text-lg font-bold text-primary-ds">
                    {uni.nome[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary-ds">{uni.nome}</h3>
                    <div className="flex items-center gap-1 text-sm text-black-70">
                      <MapPin className="h-3 w-3" />
                      <span>{uni.cidade}</span>
                    </div>
                  </div>
                </header>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black-10 bg-white-ds px-3 py-2 text-xs font-semibold text-black-70">
                    <Building2 className="h-3.5 w-3.5" />
                    {uni.vagasAtivas} vagas
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black-10 bg-white-ds px-3 py-2 text-xs font-semibold text-black-70">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {uni.programas} programas
                  </div>
                </div>

                {/* Cursos */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-black-50">Áreas de destaque</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {uni.cursos.slice(0, 2).map(curso => (
                      <span 
                        key={curso}
                        className="rounded-full border-2 border-green-ds bg-green-ds/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-ds"
                      >
                        {curso}
                      </span>
                    ))}
                    {uni.cursos.length > 2 && (
                      <span className="rounded-full border-2 border-black-10 bg-white-ds px-3 py-1 text-xs font-bold uppercase tracking-wider text-black-70">
                        +{uni.cursos.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <a 
                    href={uni.site} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 rounded-lg bg-black-ds px-4 py-2 text-xs font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg"
                  >
                    <Globe2 className="h-3.5 w-3.5" />
                    Site oficial
                  </a>
                  <a 
                    href="#" 
                    className="text-xs font-bold text-green-ds transition-colors duration-200 hover:text-green-hover-ds"
                  >
                    Ver oportunidades →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Estado vazio */}
          {universidadesFiltradas.length === 0 && (
            <div className="py-20 text-center">
              <GraduationCap className="mx-auto h-16 w-16 text-[#0f0f0f]/20" />
              <h3 className="mt-4 text-lg font-bold text-primary-ds">Nenhuma universidade encontrada</h3>
              <p className="mt-2 text-sm text-black-70">
                Tente ajustar os filtros ou termo de busca para encontrar universidades.
              </p>
            </div>
          )}
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}
