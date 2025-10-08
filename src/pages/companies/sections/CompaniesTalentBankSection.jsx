import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Database, Sparkles, Users, ArrowRight } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const quickStats = [
  {
    label: 'Talentos ativos',
    value: '7.820',
    helper: 'Dados verificados nos últimos 30 dias'
  },
  {
    label: 'Match acima de 80',
    value: '91%',
    helper: 'Shortlists prontas para decisão'
  }
]

const supportPoints = [
  'Curadoria recorrente com squad EstágioAI dedicado ao seu time.',
  'Fluxos de comunicação e follow-up personalizados com a sua marca.'
]

const CompaniesTalentBankSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-24"
      style={{ backgroundImage: 'url(/images/backgrounds/background-hero.png)' }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/92 via-white to-white" />
      <BackgroundShapes
        variant="section3"
        opacity={0.05}
        color="rgba(130, 247, 179, 0.28)"
        accentColor="rgba(15, 15, 15, 0.08)"
        accentOpacity={0.06}
        blendMode="screen"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:items-center lg:px-8">
        <div className="flex flex-col gap-8 lg:pr-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-ds/25 bg-green-ds/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-green-ds/90">
            <Database className="h-4 w-4" />
            Banco de talentos vivo
          </span>

          <header className="space-y-5">
            <h2 className="text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
              Ative profissionais qualificados em poucos cliques
            </h2>
            <p className="text-base leading-relaxed text-black-70 sm:text-lg">
              Uma base curada, atualizada e pronta para responder rápido às demandas da sua empresa. Cada talento traz
              contexto, histórico e prontidão para avançar.
            </p>
          </header>

          <ul className="space-y-3 text-sm text-black-70">
            {supportPoints.map(point => (
              <li key={point} className="flex items-start gap-3">
                <Sparkles className="mt-1 h-4 w-4 text-green-ds" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 rounded-xl bg-green-ds px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg"
            >
              Explorar banco de talentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-black-70">
              <Users className="h-4 w-4 text-green-ds" />
              Squad EstágioAI acompanha a operação.
            </div>
          </div>
        </div>

        <aside className="relative w-full max-w-lg">
          <div className="pointer-events-none absolute -inset-9 -z-10 rounded-[36px] bg-green-ds/14 blur-3xl" aria-hidden="true" />
          <div className="flex flex-col gap-6 rounded-[32px] border border-black-5 bg-white p-10 shadow-[0_18px_36px_rgba(10,12,30,0.1)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black-40">Visão instantânea</p>
                <p className="mt-2 text-lg font-semibold text-primary-ds">Atualizado em tempo real</p>
              </div>
              <span className="rounded-full border border-green-ds/30 bg-green-ds/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-ds">
                Live
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {quickStats.map(stat => (
                <div key={stat.label} className="rounded-2xl border border-black-5 bg-white p-5 shadow-[0_10px_20px_rgba(12,17,35,0.08)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black-40">{stat.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-primary-ds">{stat.value}</p>
                  <p className="mt-2 text-xs text-black-60">{stat.helper}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-green-ds/25 bg-green-ds/8 p-6 text-sm text-black-70">
              <p className="font-semibold text-primary-ds">Experiência para candidatos</p>
              <p className="mt-2 leading-relaxed">
                Portal personalizado, feedback registrado e convites automáticos mantêm a jornada humana e eficiente.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default CompaniesTalentBankSection