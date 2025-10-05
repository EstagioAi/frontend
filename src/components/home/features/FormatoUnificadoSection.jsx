import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const items = [
  {
    title: 'Contexto e cultura',
    description: 'História da empresa, stack utilizada e valores da equipe para você entender se faz sentido.',
    accent: '#0E8F66'
  },
  {
    title: 'Dia a dia real',
    description: 'Responsabilidades, entregas esperadas nos primeiros 90 dias e quem será seu mentor direto.',
    accent: '#2563EB'
  },
  {
    title: 'Aprendizado e trilhas',
    description: 'Tecnologias, habilidades comportamentais e certificações sugeridas pela própria empresa.',
    accent: '#9333EA'
  }
]

const FormatoUnificadoSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-320px] mx-auto h-[520px] w-[520px] rounded-full bg-[#6FFFC7]/25 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white-ds px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm">
            Formato unificado das vagas
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#02161F] sm:text-5xl">
            Cada oportunidade com{' '}
            <span className="text-[#0E8F66]">clareza absoluta</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Vagas no EstágioAI seguem uma estrutura obrigatória construída junto às empresas. Você compara ofertas de forma justa, sem surpresas na hora H.
          </p>

          <div className="mt-10 space-y-6">
            {items.map(({ title, description, accent }) => (
              <div key={title} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white-ds p-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.45)]">
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/60 text-white-ds shadow-[0_18px_28px_-18px_rgba(14,143,102,0.45)]"
                  style={{ backgroundColor: accent }}
                >
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#02161F]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white-ds p-8 shadow-[0_45px_95px_-60px_rgba(15,23,42,0.55)]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Estrutura padrão</p>
                <h3 className="mt-2 text-lg font-semibold text-[#02161F]">Como você vai ver cada vaga</h3>
              </div>
              <span className="rounded-full bg-[#0E8F66]/10 px-3 py-1 text-xs font-semibold text-[#0E8F66]">Preview</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/60 bg-white-ds p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Sobre a empresa</p>
                <p className="mt-2 text-sm text-slate-600">Scale-up de EdTech com squads multidisciplinares, cultura de feedback e trilhas de crescimento estruturadas.</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white-ds p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">O que você vai aprender</p>
                <p className="mt-2 text-sm text-slate-600">React, TypeScript, Product Discovery, métricas de produto e OKRs aplicados.</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white-ds p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Processo seletivo</p>
                <p className="mt-2 text-sm text-slate-600">Inscrição • Case assíncrono • Entrevista com squad • Feedback final em até 48h.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#0E8F66]/30 bg-[#0E8F66]/5 p-6 text-sm text-slate-600">
            <p className="font-semibold text-[#0E8F66]">Você também visualiza</p>
            <ul className="mt-3 space-y-2">
              <li>• Benefícios detalhados e política de trabalho híbrido</li>
              <li>• Pessoas avaliadoras e links para conteúdos de apoio</li>
              <li>• Critérios de avaliação + dicas sugeridas pela comunidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormatoUnificadoSection
