import React from 'react'
import {
  Users,
  Building2,
  TrendingUp,
  Award,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const stats = [
  {
    value: '10k+',
    label: 'Talentos universitários qualificados',
    helper: 'Dados enriquecidos e auditados.',
    icon: Users
  },
  {
    value: '500+',
    label: 'Empresas parceiras ativas',
    helper: 'Programas em operação no último trimestre.',
    icon: Building2
  },
  {
    value: '62%',
    label: 'Redução do time-to-hire',
    helper: 'Comparado à média Brasil para programas de estágio.',
    icon: TrendingUp
  },
  {
    value: '97%',
    label: 'Satisfação dos gestores',
    helper: 'NPS com feedbacks capturados pela plataforma.',
    icon: Award
  }
]

const trendData = [
  {
    label: 'Tempo médio de contratação',
    value: '18 dias',
    delta: '-6 dias',
    trend: 'down',
    context: 'vs. quarter anterior'
  },
  {
    label: 'SLA de feedback dos gestores',
    value: '11h',
    delta: '+32%',
    trend: 'up',
    context: 'respostas dentro do prazo'
  },
  {
    label: 'NPS dos candidatos',
    value: '92',
    delta: '+8 pts',
    trend: 'up',
    context: 'monitorado trimestre a trimestre'
  }
]

const trendStyles = {
  up: 'text-green-ds',
  down: 'text-rose-500'
}

const trendIcons = {
  up: ArrowUpRight,
  down: ArrowDownRight
}

const CompaniesStatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <BackgroundShapes
        variant="mesh"
        opacity={0.07}
        color="rgba(130, 247, 179, 0.45)"
        accentColor="rgba(15, 15, 15, 0.12)"
        accentOpacity={0.12}
        blendMode="multiply"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="rounded-[28px] border border-black-10 bg-white/85 p-8 shadow-[0_28px_60px_rgba(10,12,32,0.12)] backdrop-blur">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-ds/40 bg-green-ds/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-ds">
                Resultados comprovados
              </span>
              <h2 className="text-3xl font-semibold text-primary-ds sm:text-4xl">
                Métricas que mantêm a diretoria no circuito
              </h2>
              <p className="text-sm text-black-60 sm:text-base">
                Indicadores atualizados em tempo real ajudam a planejar headcount, justificar investimentos e comunicar
                o impacto do programa de talentos para toda a organização.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {trendData.map(metric => {
                const TrendIcon = trendIcons[metric.trend]
                return (
                  <div key={metric.label} className="rounded-2xl border border-black-10 bg-primary-ds p-5">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-black-40">
                      <span>{metric.label}</span>
                      <span className={`inline-flex items-center gap-1 ${trendStyles[metric.trend]}`}>
                        <TrendIcon className="h-4 w-4" />
                        {metric.delta}
                      </span>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between">
                      <p className="text-2xl font-semibold text-primary-ds sm:text-3xl">{metric.value}</p>
                      <span className="text-xs font-medium uppercase tracking-[0.24em] text-black-40">{metric.context}</span>
                    </div>
                    <div className="mt-4 h-1.5 w-full rounded-full bg-black-10">
                      <div
                        className={`h-full rounded-full ${metric.trend === 'down' ? 'bg-gradient-to-r from-rose-400 to-rose-500/70' : 'bg-gradient-to-r from-green-ds to-green-ds/70'}`}
                        style={{ width: metric.trend === 'down' ? '68%' : '82%' }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <div className="mb-10 text-left lg:text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black-40">
                Painel resumido
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-primary-ds">
                Panorama do trimestre atual
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {stats.map(({ value, label, helper, icon }) => (
                <article
                  key={label}
                  className="group relative overflow-hidden rounded-3xl border border-black-10 bg-white/90 p-8 shadow-[0_18px_46px_rgba(10,12,32,0.1)] transition-transform duration-200 hover:-translate-y-1 hover:border-green-ds/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-ds/30 bg-green-ds/10 text-green-ds transition-transform duration-200 group-hover:scale-105">
                    {React.createElement(icon, { className: 'h-5 w-5' })}
                  </div>
                  <p className="mt-6 text-4xl font-semibold text-primary-ds">{value}</p>
                  <p className="mt-3 text-sm font-semibold text-black-70">{label}</p>
                  <p className="mt-2 text-xs text-black-50">{helper}</p>
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-green-ds/8 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesStatsSection
