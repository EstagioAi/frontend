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
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24">
      <div className="absolute inset-0 opacity-60">
        <div className="mx-auto h-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-full rounded-[44px] border border-white/70 bg-white/60 backdrop-blur" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-600">
            <MessageSquare className="h-4 w-4" />
            Feedback inteligente
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Cada feedback alimenta o motor de recomendação
          </h2>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            O que sua equipe sinaliza hoje vira inteligência aplicada amanhã. A plataforma aprende, prioriza e ajusta a
            visibilidade das vagas automaticamente.
          </p>

          <div className="space-y-4">
            {steps.map(step => (
              <div key={step.title} className="rounded-2xl border border-slate-200/70 bg-white p-5">
                <p className="text-sm font-semibold text-slate-800">{step.title}</p>
                <p className="mt-2 text-sm text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm text-slate-600">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <span>Empresas que dão feedback em todas as etapas aumentam em 3x o índice de match qualificado.</span>
          </div>

          <button className="inline-flex h-12 w-fit items-center gap-3 rounded-full border border-[#0B1F2A]/15 bg-[#0B1F2A] px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0px_20px_45px_rgba(15,23,42,0.18)]">
            Iniciar fluxo de feedback
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-to-tr from-emerald-100 via-white to-white blur-3xl" />
          <div className="space-y-4 rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-[0px_26px_60px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Loop de melhoria</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Visão consolidada da vaga</p>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                Atualizado em tempo real
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">Feedback sobre entrevistas</p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                    +85%
                    <TrendingUp className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-500">"Perfil técnico sólido, ótima colaboração em pair programming"</p>
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
                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-2xl font-semibold text-slate-900">94%</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-400">Match atual</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-2xl font-semibold text-slate-900">12</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-400">Feedbacks novos</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-2xl font-semibold text-slate-900">3min</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-400">Tempo médio</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-200/60 bg-emerald-50/60 p-6 text-sm text-emerald-700">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesFeedbackSection