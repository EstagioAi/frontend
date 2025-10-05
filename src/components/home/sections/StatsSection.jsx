import React from 'react'
import { Users, Briefcase, TrendingUp } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const stats = [
  {
    value: '92%',
    label: 'Muitos usuários encontram vagas relevantes de acordo com suas habilidades',
    color: '#82f7b3',
    icon: Users,
    bgColor: '#82f7b3'
  },
  {
    value: '90%',
    label: 'Filtragem de dados de empresas não leva muito tempo',
    color: '#82f7b3',
    icon: Briefcase,
    bgColor: '#82f7b3'
  },
  {
    value: '89%',
    label: 'Muitos empregadores de topo podem se conectar com usuários do EstágioAI',
    color: '#82f7b3',
    icon: TrendingUp,
    bgColor: '#82f7b3'
  }
]

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white-ds py-24">
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="section3"
        opacity={0.18}
        color="rgba(130, 247, 179, 0.75)"
        accentColor="rgba(17, 94, 89, 0.24)"
        accentOpacity={0.2}
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.18}
        color="rgba(130, 247, 179, 0.9)"
        accentColor="rgba(203, 213, 225, 0.6)"
        accentOpacity={0.16}
        blendMode="normal"
      />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-black-50">
            Junte-se ao EstágioAI Hoje
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary-ds sm:text-4xl lg:text-5xl">
            Experiência com{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary-ds">Números</span>
              <span className="absolute -bottom-0.5 left-0 h-2 w-full bg-green-ds -z-0 rounded-sm" />
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map(({ value, label, color, icon: Icon, bgColor }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg transition-all duration-200 hover:-translate-y-2 hover:border-green-ds hover:shadow-xl"
            >
              {/* Content */}
              <div className="relative">
                {/* Icon in circular background */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-ds/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={22}
                    className="text-green-ds"
                    strokeWidth={2}
                  />
                </div>

                <div className="mb-3 text-5xl font-extrabold leading-tight text-green-ds transition-transform duration-300 group-hover:scale-105">
                  {value}
                </div>
                <p className="text-sm leading-relaxed text-black-70">
                  {label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-green-ds/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

