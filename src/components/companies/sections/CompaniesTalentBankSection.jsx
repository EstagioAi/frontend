import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Users, ArrowRight, CheckCircle2, Sparkles, Database, TrendingUp } from 'lucide-react'

const benefits = [
  {
    title: 'Atualizações diárias',
    description: 'Novos talentos adicionados automaticamente a partir das campanhas e landing pages da sua marca franchise.'
  },
  {
    title: 'Perfis verificados',
    description: 'Validação acadêmica e testes técnicos integrados garantem informações confiáveis para o time de seleção.'
  },
  {
    title: 'Busca inteligente',
    description: 'Filtros por habilidades, disponibilidade e senioridade com match score transparente.'
  }
]

const talentCards = [
  {
    initials: 'AJ',
    name: 'Ana Júlia Souza',
    course: 'Engenharia de Software • USP',
    tags: ['React', 'Node.js'],
    match: '96% Match'
  },
  {
    initials: 'CB',
    name: 'Carlos Barbosa',
    course: 'Design Digital • PUC-Rio',
    tags: ['Product Design', 'Figma'],
    match: '92% Match'
  },
  {
    initials: 'MR',
    name: 'Marina Rocha',
    course: 'Marketing • ESPM',
    tags: ['Growth', 'Analytics'],
    match: '88% Match'
  }
]

const CompaniesTalentBankSection = () => {
  return (
    <section className="relative overflow-hidden bg-white-ds py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f8f8f8]/50 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:items-start lg:px-8">
        <div className="flex flex-col gap-8 lg:pr-10">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-green-ds">
            <Database className="h-4 w-4" />
            Banco de talentos
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl text-primary-ds">
              Um pipeline vivo, que cresce de forma automática
            </h2>
            <p className="max-w-xl text-base sm:text-lg text-black-70">
              Toda nova candidatura alimenta seu banco privado com dados enriquecidos e score pronto para decisão. Você
              busca, filtra e prioriza talentos em segundos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {benefits.map(benefit => (
              <div key={benefit.title} className="flex items-start gap-3 rounded-2xl border-2 border-black-10 bg-primary-ds p-5 transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-ds" />
                <div>
                  <p className="text-sm font-semibold text-primary-ds">{benefit.title}</p>
                  <p className="mt-1 text-sm text-black-70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg"
            >
              Explorar banco de talentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-black-70">
              <Sparkles className="h-4 w-4 text-green-ds" />
              <span>Novos perfis verificados diariamente</span>
            </div>
          </div>
        </div>

        <div className="relative flex h-full flex-col">
          <div className="absolute -inset-6 -z-10 rounded-[32px] bg-green-ds/10 opacity-30 blur-3xl" />
          <div className="flex h-full flex-col gap-5 rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black-50">Visão do banco</p>
                <p className="mt-2 text-2xl font-semibold text-primary-ds">Talentos em destaque</p>
              </div>
              <span className="rounded-full border-2 border-green-ds bg-green-ds/10 px-3 py-1 text-xs font-medium text-green-ds">
                Atualizado agora
              </span>
            </div>

            <div className="space-y-4">
              {talentCards.map(talent => (
                <div key={talent.initials} className="flex items-center gap-4 rounded-2xl border-2 border-black-10 bg-primary-ds p-5 transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black-ds text-base font-semibold text-white-ds">
                    {talent.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary-ds">{talent.name}</p>
                    <p className="text-xs text-black-70">{talent.course}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {talent.tags.map(tag => (
                        <span key={tag} className="rounded-full border-2 border-green-ds bg-white-ds px-3 py-1 text-xs font-medium text-green-ds">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-green-ds">{talent.match}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-2xl border-2 border-green-ds bg-green-ds/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white-ds text-green-ds">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-ds">Novos talentos hoje</p>
                  <p className="text-xs text-black-70">Processos acadêmicos sincronizados</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-green-ds">
                +134
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesTalentBankSection