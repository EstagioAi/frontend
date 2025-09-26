import React from 'react'
import { Search, CheckCircle2, Timer, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Search,
    title: 'Curadoria real de vagas',
    description: 'Centralizamos cargos oficiais, programas de estágio e trainee em um feed inteligente que entende sua área e disponibilidade.'
  },
  {
    icon: CheckCircle2,
    title: 'Processos transparentes',
    description: 'Timeline com etapas claras, feedback obrigatório e lembretes automáticos para você nunca mais ficar no escuro.'
  },
  {
    icon: Timer,
    title: 'Resposta em horas',
    description: 'IA monitora visualizações e respostas das empresas para acelerar retornos e priorizar oportunidades mais quentes.'
  },
  {
    icon: Sparkles,
    title: 'Guides e comunidade',
    description: 'Templates, mentorias coletivas e radar semanal com o que mais aprova na sua universidade.'
  }
]

const ProblemsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6FAFF] pb-28 pt-28 sm:pt-32 lg:-mt-4 lg:pb-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/40 via-[#F6FAFF]/70 to-transparent" />
        <div className="absolute -top-24 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#6FFFC7]/20 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm">
            Por que estudantes escolhem o EstágioAI
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#02161F] sm:text-5xl">
            Um hub projetado para{' '}
            <span className="text-[#0E8F66]">eliminar as frustrações</span>
            {' '}da busca por estágio
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Tudo o que ouvimos na pesquisa com mais de 100 universitários virou funcionalidade prática, com menos ruído e mais clareza para sua jornada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_55px_-40px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_70px_-40px_rgba(15,23,42,0.45)]">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#6FFFC7]/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#059669]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#02161F]">{title}</h3>
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 sm:grid-cols-3">
          <div className="text-center sm:border-r sm:border-slate-200 sm:pr-6">
            <div className="text-3xl font-semibold text-[#02161F]">92%</div>
            <p className="mt-2 text-sm text-slate-500">dos estudantes disseram que o EstágioAI é a plataforma mais clara de uso diário</p>
          </div>
          <div className="text-center sm:border-r sm:border-slate-200 sm:px-6">
            <div className="text-3xl font-semibold text-[#02161F]">4,8/5</div>
            <p className="mt-2 text-sm text-slate-500">nota média de experiência com feedback em processos seletivos</p>
          </div>
          <div className="text-center sm:pl-6">
            <div className="text-3xl font-semibold text-[#02161F]">36h</div>
            <p className="mt-2 text-sm text-slate-500">tempo médio para a primeira resposta após candidatura dentro da plataforma</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
