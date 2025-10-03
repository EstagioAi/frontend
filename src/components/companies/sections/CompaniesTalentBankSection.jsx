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
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#faf9f5]/50 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:items-start lg:px-8">
        <div className="flex flex-col gap-8 lg:pr-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]" style={{ border: '1px solid rgba(217, 119, 87, 0.2)', background: 'rgba(217, 119, 87, 0.05)', color: '#d97757' }}>
            <Database className="h-4 w-4" />
            Banco de talentos
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: '#3d3d3a' }}>
              Um pipeline vivo, que cresce de forma automática
            </h2>
            <p className="max-w-xl text-base sm:text-lg" style={{ color: '#6b6b68' }}>
              Toda nova candidatura alimenta seu banco privado com dados enriquecidos e score pronto para decisão. Você
              busca, filtra e prioriza talentos em segundos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {benefits.map(benefit => (
              <div key={benefit.title} className="flex items-start gap-3 rounded-2xl p-5 transition-all hover:shadow-md" style={{ border: '1px solid rgba(217, 119, 87, 0.15)', background: '#faf9f5' }}>
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: '#d97757' }} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#3d3d3a' }}>{benefit.title}</p>
                  <p className="mt-1 text-sm" style={{ color: '#6b6b68' }}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              variant="primary"
              size="lg"
            >
              Explorar banco de talentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6b6b68' }}>
              <Sparkles className="h-4 w-4" style={{ color: '#d97757' }} />
              <span>Novos perfis verificados diariamente</span>
            </div>
          </div>
        </div>

        <div className="relative flex h-full flex-col">
          <div className="absolute -inset-6 -z-10 rounded-[32px] opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(217, 119, 87, 0.15), transparent)' }} />
          <div className="flex h-full flex-col gap-5 rounded-[32px] bg-white p-8 shadow-lg" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: '#6b6b68' }}>Visão do banco</p>
                <p className="mt-2 text-2xl font-semibold" style={{ color: '#3d3d3a' }}>Talentos em destaque</p>
              </div>
              <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ border: '1px solid rgba(217, 119, 87, 0.2)', background: 'rgba(217, 119, 87, 0.05)', color: '#d97757' }}>
                Atualizado agora
              </span>
            </div>

            <div className="space-y-4">
              {talentCards.map(talent => (
                <div key={talent.initials} className="flex items-center gap-4 rounded-3xl p-5 transition-all hover:shadow-md" style={{ border: '1px solid rgba(217, 119, 87, 0.15)', background: '#faf9f5' }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-base font-semibold text-white" style={{ background: '#3d3d3a' }}>
                    {talent.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold" style={{ color: '#3d3d3a' }}>{talent.name}</p>
                    <p className="text-xs" style={{ color: '#6b6b68' }}>{talent.course}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {talent.tags.map(tag => (
                        <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium" style={{ border: '1px solid rgba(217, 119, 87, 0.2)', color: '#d97757' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold" style={{ color: '#d97757' }}>{talent.match}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-2xl px-5 py-4" style={{ border: '1px solid rgba(217, 119, 87, 0.2)', background: 'rgba(217, 119, 87, 0.05)' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white" style={{ color: '#d97757' }}>
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#d97757' }}>Novos talentos hoje</p>
                  <p className="text-xs" style={{ color: '#6b6b68' }}>Processos acadêmicos sincronizados</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#d97757' }}>
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