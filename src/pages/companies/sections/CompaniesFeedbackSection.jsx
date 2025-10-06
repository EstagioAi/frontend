import React from 'react'
import { MessageSquare, Sparkles, Target, TrendingUp, ThumbsUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: 'Feedback em 2 cliques',
    description: 'Notas rápidas e comentários estruturados direto do card do candidato.'
  },
  {
    title: 'IA aprende o que importa',
    description: 'Identifica padrões de sucesso e prioriza candidatos com fit comprovado.'
  },
  {
    title: 'Time sincronizado',
    description: 'Gestores recebem resumos automáticos com próximos passos claros.'
  }
]

const CompaniesFeedbackSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-ds py-24">
      <div className="absolute inset-0 opacity-60">
        <div className="mx-auto h-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-full rounded-[44px] border border-white/70 bg-white-ds/60 backdrop-blur" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-ds">
            <MessageSquare className="h-4 w-4" />
            Feedback inteligente
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
            Cada feedback alimenta o motor de recomendação
          </h2>
          <p className="max-w-xl text-base text-black-70 sm:text-lg">
            O que sua equipe sinaliza hoje vira inteligência aplicada amanhã. A plataforma aprende, prioriza e ajusta a
            visibilidade das vagas automaticamente.
          </p>

          <div className="space-y-4">
            {steps.map(step => (
              <div key={step.title} className="rounded-2xl border-2 border-black-10 bg-white-ds p-5">
                <p className="text-sm font-semibold text-primary-ds">{step.title}</p>
                <p className="mt-2 text-sm text-black-70">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-2xl border-2 border-black-10 bg-white-ds/70 p-5 text-sm text-black-70">
            <Sparkles className="h-5 w-5 text-green-ds" />
            <span>Empresas que dão feedback em todas as etapas aumentam em 3x o índice de match qualificado.</span>
          </div>

          <button className="inline-flex h-12 w-fit items-center gap-3 rounded-lg bg-black-ds px-6 text-sm font-semibold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg">
            Iniciar fluxo de feedback
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[36px] bg-green-ds/10 blur-3xl" />
          <div className="space-y-4 rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black-50">Loop de melhoria</p>
                <p className="mt-2 text-2xl font-semibold text-primary-ds">Visão consolidada da vaga</p>
              </div>
              <span className="rounded-full border-2 border-green-ds bg-green-ds/10 px-3 py-1 text-xs font-medium text-green-ds">
                Atualizado em tempo real
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-black-10 bg-primary-ds p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary-ds">Feedback sobre entrevistas</p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-green-ds">
                    +85%
                    <TrendingUp className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-black-70">"Perfil técnico sólido, ótima colaboração em pair programming"</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6">
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
                  <div className="rounded-xl border border-slate-200 bg-white-ds p-3">
                    <p className="text-2xl font-semibold text-slate-900">94%</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-400">Match atual</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white-ds p-3">
                    <p className="text-2xl font-semibold text-slate-900">12</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-400">Feedbacks novos</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white-ds p-3">
                    <p className="text-2xl font-semibold text-slate-900">3min</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-400">Tempo médio</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-200/60 bg-emerald-50/60 p-6 text-sm text-emerald-700">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white-ds text-emerald-400">
                    <ThumbsUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Satisfação dos gestores</p>
                    <p className="mt-1 text-emerald-600/80">NPS 82 com base nos feedbacks coletados automaticamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesFeedbackSection