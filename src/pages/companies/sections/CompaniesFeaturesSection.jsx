import React from 'react'
import { Workflow, Users, ShieldCheck, BarChart3 } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const systemHighlights = [
  {
    icon: Workflow,
    title: 'Gestão de vagas e aprovações',
    description: 'Alinhe gestores, publique vagas e acompanhe SLAs sem sair do hub corporativo.'
  },
  {
    icon: Users,
    title: 'Banco de talentos vivo',
    description: 'Shortlists inteligentes, histórico completo e perfis prontos para ativação.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance automático',
    description: 'LGPD, auditoria e trilhas jurídicas atualizadas em tempo real.'
  },
  {
    icon: BarChart3,
    title: 'Insights executivos',
    description: 'Painéis compartilháveis com métricas de contratação, funil e experiência.'
  }
]

const CompaniesFeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <BackgroundShapes
        variant="section2"
        opacity={0.04}
        color="rgba(130, 247, 179, 0.24)"
        accentColor="rgba(15, 15, 15, 0.08)"
        accentOpacity={0.06}
        blendMode="screen"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-ds/25 bg-green-ds/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-ds/90">
            Sistemas principais
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
            O hub corporativo para recrutar com eficiência e consistência
          </h2>
          <p className="mt-4 text-base text-black-70 sm:text-lg">
            Seus times operam em um único lugar: vagas, banco de talentos, comunicação e indicadores prontos para a
            diretoria acompanhar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {systemHighlights.map(highlight => {
            const Icon = highlight.icon
            return (
              <article
                key={highlight.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-black-5 bg-white/95 p-7 text-left shadow-[0_16px_32px_rgba(12,17,35,0.08)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-ds/30 bg-green-ds/12 text-green-ds">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary-ds">{highlight.title}</h3>
                  <p className="text-sm leading-relaxed text-black-70">{highlight.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompaniesFeaturesSection