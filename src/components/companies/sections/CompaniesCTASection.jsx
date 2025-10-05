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
    <section className="relative isolate overflow-hidden bg-black-ds py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(130,247,179,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,15,15,0.8),_transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white-ds/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white-ds/80">
            Vamos começar
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-white-ds sm:text-4xl">
            Transforme a operação de recrutamento com apoio dedicado do EstágioAI
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white-ds/70 sm:text-lg">
            Uma plataforma moderna, com equipe de especialistas ao lado do seu time para reduzir o tempo de contratação
            e entregar experiências consistentes.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-lg bg-green-ds px-8 text-base font-semibold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg"
          >
            Solicitar demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-lg border-2 border-white-25 bg-white-ds/5 px-8 text-base font-semibold text-white-ds transition-all duration-200 hover:bg-white-ds/10 hover:border-green-ds"
          >
            Falar com especialista
          </Button>
        </div>

        <div className="mt-14 grid gap-6 text-left text-white-ds/80 sm:grid-cols-3">
          {highlights.map(highlight => {
            const Icon = highlight.icon
            return (
              <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white-ds/5 p-6">
                <Icon className="h-6 w-6 text-green-ds" />
                <p className="mt-4 text-sm font-semibold text-white-ds">{highlight.title}</p>
                <p className="mt-2 text-sm text-white-ds/70">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompaniesCTASection