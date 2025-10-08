import React from 'react'
import {
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  ThumbsUp,
  ArrowRight,
  ClipboardCheck
} from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const steps = [
  {
    title: 'Feedback em 2 cliques',
    description: 'Notas estruturadas direto do card do candidato, com tags customizadas por squad.'
  },
  {
    title: 'IA aprende o que importa',
    description: 'Engine ajusta a priorização considerando histórico de aprovação e motivos de reprovação.'
  },
  {
    title: 'Time sincronizado',
    description: 'Resumo diário automático com próximos passos, responsáveis e riscos sinalizados.'
  }
]

const feedbackMetrics = [
  {
    label: 'Feedbacks por vaga',
    value: '38',
    helper: '+56% vs. trimestre anterior',
    trendColor: 'text-green-ds'
  },
  {
    label: 'Tempo médio de resposta',
    value: '11h',
    helper: '-43% em relação à meta',
    trendColor: 'text-green-ds'
  },
  {
    label: 'Interações que treinam a IA',
    value: '124',
    helper: 'Últimos 30 dias',
    trendColor: 'text-black-60'
  }
]

const CompaniesFeedbackSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-ds to-primary-ds/80 py-24">
      <BackgroundShapes
        variant="section1"
        opacity={0.08}
        color="rgba(130, 247, 179, 0.45)"
        accentColor="rgba(15, 15, 15, 0.18)"
        accentOpacity={0.14}
        blendMode="lighten"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:px-8">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-ds/40 bg-green-ds/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-ds">
            <MessageSquare className="h-4 w-4" />
            Feedback inteligente
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
            O ciclo de feedback vira motor de priorização e previsibilidade
          </h2>
          <p className="max-w-xl text-base text-black-70 sm:text-lg">
            Cada interação registrada alimenta modelos que reposicionam candidatos, reordenam etapas e notificam gestores
            para manter SLAs sob controle. Transparência para o time, inteligência para a liderança.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {feedbackMetrics.map(metric => (
              <div key={metric.label} className="rounded-2xl border border-black-10 bg-white/85 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black-40">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-primary-ds">{metric.value}</p>
                <p className={`mt-1 text-xs font-semibold ${metric.trendColor}`}>{metric.helper}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {steps.map(step => (
              <div key={step.title} className="rounded-2xl border border-black-10 bg-primary-ds p-5 shadow-sm">
                <p className="text-sm font-semibold text-primary-ds">{step.title}</p>
                <p className="mt-2 text-sm text-black-70">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-black-10 bg-white/80 p-5 text-sm text-black-70">
            <Sparkles className="h-5 w-5 text-green-ds" />
            <span>Empresas que registram feedback em todas as etapas aumentam em 3x o índice de match qualificado.</span>
          </div>

          <button className="inline-flex h-12 w-fit items-center gap-3 rounded-xl bg-black-ds px-6 text-sm font-semibold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg">
            Iniciar fluxo de feedback
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <aside className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] bg-green-ds/14 blur-3xl" aria-hidden="true" />
          <div className="space-y-4 rounded-[28px] border border-black-10 bg-white/90 p-8 shadow-[0_28px_60px_rgba(10,12,30,0.14)] backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black-40">Loop de melhoria</p>
                <p className="mt-2 text-2xl font-semibold text-primary-ds">Visão consolidada da vaga</p>
              </div>
              <span className="rounded-full border border-green-ds/40 bg-green-ds/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-green-ds">
                Atualizado em tempo real
              </span>
            </div>

            <div className="rounded-2xl border border-black-10 bg-primary-ds p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-primary-ds">Feedback sobre entrevistas</p>
                <span className="flex items-center gap-1 text-xs font-semibold text-green-ds">
                  +85%
                  <TrendingUp className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 text-sm text-black-70">"Perfil técnico sólido, ótima colaboração em pair programming"</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-emerald-300">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Match score ajustado</p>
                  <p className="text-xs text-slate-500">Baseado em 124 feedbacks da sua equipe</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-2xl font-semibold text-slate-900">94%</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-slate-400">Match atual</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-2xl font-semibold text-slate-900">12</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-slate-400">Feedbacks novos</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-2xl font-semibold text-slate-900">3min</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-slate-400">Tempo médio</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-200/60 bg-emerald-50/70 p-6 text-sm text-emerald-700">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-400">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Satisfação dos gestores</p>
                  <p className="mt-1 text-emerald-600/80">NPS 82 com base nos feedbacks coletados automaticamente</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black-10 bg-white/85 p-6 text-sm text-black-70">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-ds/10 text-green-ds">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-primary-ds">Checklist automático de follow-up</p>
                  <p className="mt-1 text-xs text-black-60">Responsáveis e deadlines alinhados por etapa.</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default CompaniesFeedbackSection