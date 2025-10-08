import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, ShieldCheck, Headset, Rocket } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const highlights = [
  {
    icon: ShieldCheck,
    label: 'Compliance',
    text: 'LGPD e trilhas de auditoria prontas desde o primeiro dia.'
  },
  {
    icon: Headset,
    label: 'Squad dedicado',
    text: 'Onboarding guiado, integrações e rotinas acompanhadas por especialistas.'
  },
  {
    icon: Rocket,
    label: 'Go-live rápido',
    text: 'Resultados nas primeiras semanas com playbook testado.'
  }
]

const CompaniesCTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundImage: 'url(/images/backgrounds/background-hero.png)' }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/95 to-white" />
      <BackgroundShapes
        variant="section4"
        opacity={0.05}
        color="rgba(130, 247, 179, 0.24)"
        accentColor="rgba(15, 15, 15, 0.08)"
        accentOpacity={0.06}
        blendMode="screen"
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-ds/25 bg-green-ds/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-ds/90">
          Pronto para avançar
        </span>
        <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
          Acelere seu recrutamento com o ecossistema EstágioAI
        </h2>
        <p className="mt-4 text-base text-black-70 sm:text-lg">
          Plataforma, especialistas e métricas alinhados para que sua empresa atraia e contrate talentos com a mesma
          qualidade da página principal.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 rounded-xl bg-green-ds px-8 text-base font-semibold text-black transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg"
          >
            Solicitar demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="h-12 rounded-xl border border-black-10 bg-white px-8 text-base font-semibold text-primary-ds transition-all duration-200 hover:border-green-ds"
          >
            Falar com especialista
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {highlights.map(item => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-3xl border border-black-5 bg-white/95 p-6 text-sm text-black-70 shadow-[0_12px_28px_rgba(12,17,35,0.08)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-green-ds/30 bg-green-ds/10 text-green-ds">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold text-primary-ds">{item.label}</p>
                <p className="text-center leading-relaxed">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompaniesCTASection