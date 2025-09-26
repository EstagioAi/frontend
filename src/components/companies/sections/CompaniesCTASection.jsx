import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, ShieldCheck, Headset, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Segurança e compliance',
    description: 'LGPD e políticas internas atendidas desde o primeiro dia.'
  },
  {
    icon: Headset,
    title: 'Onboarding acompanhado',
    description: 'Time dedicado para configurar fluxos, integrações e indicadores.'
  },
  {
    icon: Rocket,
    title: 'Resultado em semanas',
    description: 'Primeiras posições preenchidas já no primeiro mês de uso.'
  }
]

const CompaniesCTASection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1F2A] py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(1,226,151,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.8),_transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            Vamos começar
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Transforme a operação de recrutamento com apoio dedicado do EstágioAI
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
            Uma plataforma moderna, com equipe de especialistas ao lado do seu time para reduzir o tempo de contratação
            e entregar experiências consistentes.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-full bg-emerald-300 px-8 text-base font-semibold text-[#0B1F2A] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(1,226,151,0.25)]"
          >
            Solicitar demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            Falar com especialista
          </Button>
        </div>

        <div className="mt-14 grid gap-6 text-left text-white/80 sm:grid-cols-3">
          {highlights.map(highlight => {
            const Icon = highlight.icon
            return (
              <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon className="h-6 w-6 text-emerald-300" />
                <p className="mt-4 text-sm font-semibold text-white">{highlight.title}</p>
                <p className="mt-2 text-sm text-white/70">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompaniesCTASection