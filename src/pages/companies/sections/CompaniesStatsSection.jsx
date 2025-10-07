import React from 'react'
import { Users, Building2, TrendingUp, Award } from 'lucide-react'

const stats = [
  {
    value: '10k+',
    label: 'Talentos universitários qualificados no banco de dados',
    icon: Users
  },
  {
    value: '500+',
    label: 'Empresas parceiras contratando através da plataforma',
    icon: Building2
  },
  {
    value: '62%',
    label: 'Redução no tempo médio de contratação para empresas',
    icon: TrendingUp
  },
  {
    value: '97%',
    label: 'Taxa de satisfação dos recrutadores com a plataforma',
    icon: Award
  }
]

const CompaniesStatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-ds py-20">
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-[-100px] h-[300px] w-[300px] rounded-full bg-green-ds/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-1/4 h-[300px] w-[300px] rounded-full bg-green-ds/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-black-50">
            Resultados Comprovados
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary-ds">
            Números que{' '}
            <span className="text-green-ds">Falam por Si</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, icon }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
            >
              {/* Content */}
              <div className="relative">
                {/* Icon in circular background */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-ds/10 transition-transform duration-200 group-hover:scale-110">
                  {React.createElement(icon, {
                    size: 28,
                    className: 'text-green-ds',
                    strokeWidth: 2
                  })}
                </div>

                <div className="mb-4 text-5xl font-extrabold text-green-ds transition-transform duration-200 group-hover:scale-110">
                  {value}
                </div>
                <p className="text-sm text-black-70">
                  {label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-green-ds/20 blur-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesStatsSection
