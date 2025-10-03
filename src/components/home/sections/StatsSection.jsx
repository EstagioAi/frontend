import React from 'react'
import { Users, Briefcase, TrendingUp } from 'lucide-react'

const stats = [
  {
    value: '92%',
    label: 'Muitos usuários encontram vagas relevantes de acordo com suas habilidades',
    color: '#d97757',
    icon: Users,
    bgColor: '#fef9e7' // pastel yellow
  },
  {
    value: '90%',
    label: 'Filtragem de dados de empresas não leva muito tempo',
    color: '#d97757',
    icon: Briefcase,
    bgColor: '#e8f8f5' // pastel mint
  },
  {
    value: '89%',
    label: 'Muitos empregadores de topo podem se conectar com usuários do EstágioAI',
    color: '#d97757',
    icon: TrendingUp,
    bgColor: '#fef5e7' // pastel peach
  }
]

const StatsSection = () => {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(to bottom right, var(--color-bg-primary) 0%, var(--color-bg-white) 50%, var(--color-bg-secondary) 100%)',
        paddingTop: 'var(--space-12)',
        paddingBottom: 'var(--space-12)'
      }}
    >
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-[-100px] h-[300px] w-[300px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(217, 119, 87, 0.15), transparent)' }} />
        <div className="absolute bottom-[-100px] right-1/4 h-[300px] w-[300px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(245, 244, 237, 0.6), transparent)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-left">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              color: 'var(--color-gray-medium)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 'var(--font-semibold)'
            }}
          >
            Junte-se ao EstágioAI Hoje
          </p>
          <h2
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{
              color: 'var(--color-gray-dark)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 'var(--font-bold)',
              lineHeight: 'var(--leading-tight)'
            }}
          >
            Experiência com{' '}
            <span style={{ color: 'var(--color-coral-primary)' }}>Números</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3" style={{ gap: 'var(--space-4)' }}>
          {stats.map(({ value, label, color, icon: Icon, bgColor }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/90 p-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                border: '1px solid rgba(217, 119, 87, 0.15)',
                boxShadow: '0 20px 50px -30px rgba(61, 61, 58, 0.15)'
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(to bottom right, rgba(217, 119, 87, 0.05), rgba(245, 244, 237, 0.3))' }} />

              {/* Content */}
              <div className="relative">
                {/* Icon in circular pastel background - smaller size */}
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: bgColor }}
                >
                  <Icon
                    size={24}
                    style={{ color }}
                    strokeWidth={2}
                  />
                </div>

                <div 
                  className="mb-4 text-6xl font-extrabold transition-transform duration-300 group-hover:scale-110" 
                  style={{ 
                    color,
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 'var(--font-extrabold)',
                    lineHeight: 'var(--leading-tight)'
                  }}
                >
                  {value}
                </div>
                <p 
                  className="text-base" 
                  style={{ 
                    color: 'var(--color-gray-medium)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 'var(--font-normal)',
                    lineHeight: 'var(--leading-relaxed)'
                  }}
                >
                  {label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" style={{ background: 'rgba(217, 119, 87, 0.2)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

