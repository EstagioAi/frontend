import React from 'react'
import {
  Search,
  Target,
  MessageSquare,
  BarChart3,
  Clock,
  ShieldCheck,
  Workflow,
  Gauge
} from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Pipeline unificado',
    description:
      'Publique vagas em múltiplos canais e acompanhe todas as etapas em um quadro único, sem planilhas paralelas.'
  },
  {
    icon: Target,
    title: 'Recomendações precisas',
    description:
      'Nossa IA aprende com os feedbacks da sua equipe para priorizar os candidatos com maior aderência cultural e técnica.'
  },
  {
    icon: MessageSquare,
    title: 'Comunicação centralizada',
    description:
      'Histórico completo de interações, templates inteligentes e alerts para ninguém perder o timing das próximas ações.'
  },
  {
    icon: BarChart3,
    title: 'Insights em tempo real',
    description:
      'Dashboards prontos e métricas configuráveis para medir tempo de contratação, funil e desempenho das vagas.'
  },
  {
    icon: Clock,
    title: 'Automação que poupa horas',
    description:
      'Fluxos de aprovação, entrevistas e testes com etapas automatizadas e notificações inteligentes.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance sem atrito',
    description:
      'LGPD, consentimento e armazenamento seguro tratados desde o cadastro até a assinatura da proposta.'
  }
]

const howItWorks = [
  {
    step: '1. Briefing simplificado',
    description: 'Padronize requisitos com templates prontos por senioridade e área.'
  },
  {
    step: '2. IA pré-qualifica',
    description: 'Classificação automática e perguntas eliminatórias customizadas.'
  },
  {
    step: '3. Time em sincronia',
    description: 'Painel compartilhado para feedbacks rápidos e decisões embasadas.'
  }
]

const CompaniesFeaturesSection = () => {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: '#f5f4ed' }}>
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="absolute inset-y-12 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-transparent lg:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(217, 119, 87, 0.2), transparent)' }} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6 lg:pr-8 lg:pt-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em]" style={{ border: '1px solid rgba(217, 119, 87, 0.2)', background: 'rgba(217, 119, 87, 0.05)', color: '#d97757' }}>
              <Workflow className="h-4 w-4" />
              Operação de talentos
            </div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: '#3d3d3a' }}>
              Um hub para transformar o recrutamento em vantagem competitiva
            </h2>
            <p className="max-w-xl text-base sm:text-lg" style={{ color: '#6b6b68' }}>
              Diga adeus a processos fragmentados. Conecte tecnologia, pessoas e dados em uma plataforma desenhada
              para entregar previsibilidade, velocidade e experiências impecáveis para candidatos e gestores.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(217, 119, 87, 0.1)', color: '#d97757' }}>
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#3d3d3a' }}>Três vezes mais agilidade</p>
                  <p className="text-xs" style={{ color: '#6b6b68' }}>Vagas preenchidas em semanas, não meses.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(217, 119, 87, 0.1)', color: '#d97757' }}>
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#3d3d3a' }}>Conformidade by design</p>
                  <p className="text-xs" style={{ color: '#6b6b68' }}>Fluxos aprovados pelas equipes jurídicas e de compliance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-5 rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em]" style={{ color: '#6b6b68' }}>Como funciona</p>
            <div className="space-y-5">
              {howItWorks.map(item => (
                <div key={item.step} className="rounded-2xl p-5" style={{ border: '1px solid rgba(217, 119, 87, 0.1)', background: '#faf9f5' }}>
                  <p className="text-sm font-semibold" style={{ color: '#3d3d3a' }}>{item.step}</p>
                  <p className="mt-2 text-sm" style={{ color: '#6b6b68' }}>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl px-6 py-5 text-white" style={{ background: '#3d3d3a' }}>
              <p className="text-sm font-medium text-white/70">Integrações prontas</p>
              <p className="mt-1 text-lg font-semibold">ATS, HRIS e Slack conectados sem código</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(feature => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(217, 119, 87, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(217, 119, 87, 0.15)';
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105" style={{ border: '1px solid rgba(217, 119, 87, 0.2)', background: 'rgba(217, 119, 87, 0.05)', color: '#d97757' }}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold" style={{ color: '#3d3d3a' }}>{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#6b6b68' }}>{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompaniesFeaturesSection