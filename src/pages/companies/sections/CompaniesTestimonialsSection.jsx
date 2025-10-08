import React from 'react'
import { Star, ArrowUpRight } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const testimonials = [
  {
    company: 'Grupo Vortex',
    name: 'Camila Castro',
    position: 'Head de Pessoas',
    quote:
      'Reduzimos o tempo de contratação de 45 para 18 dias e ganhamos previsibilidade para reportar resultados à diretoria.'
  },
  {
    company: 'Atlas Labs',
    name: 'Eduardo Lima',
    position: 'Diretor de Operações',
    quote:
      'Em semanas, construímos um banco robusto com shortlist sempre atualizada. Hoje acompanhamos tudo em dashboards ao vivo.'
  },
  {
    company: 'Nova Energia',
    name: 'Roberta Martins',
    position: 'Gerente de Talent Acquisition',
    quote:
      'Gestores participam com fluidez porque recebem alertas e próximos passos claros. A governança virou parte do processo.'
  }
]

const stats = [
  { label: 'Tempo médio de contratação', value: '21 dias', delta: '-24 dias' },
  { label: 'Gestores engajados', value: '87%', delta: '+32%' },
  { label: 'Candidatos qualificados', value: '+62%', delta: '+3.4x' },
  { label: 'NPS dos candidatos', value: '92', delta: '+8 pt' }
]

const supportingBrands = ['Amazon', 'Google', 'Meta', 'Microsoft', 'Netflix']

const getInitials = text =>
  text
    .split(' ')
    .filter(Boolean)
    .map(part => part[0]?.toUpperCase())
    .slice(0, 2)
    .join('')

const CompaniesTestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <BackgroundShapes
        variant="section2"
        opacity={0.07}
        color="rgba(130, 247, 179, 0.45)"
        accentColor="rgba(15, 15, 15, 0.12)"
        accentOpacity={0.1}
        blendMode="multiply"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-ds/40 bg-green-ds/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-green-ds">
              <Star className="h-4 w-4" />
              Prova social
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
              Times corporativos confiam na EstágioAI para mensurar impacto
            </h2>
            <p className="max-w-xl text-base text-black-70 sm:text-lg">
              Programas de estágio, trainee e jovens talentos geram resultados tangíveis quando a operação combina dados
              acionáveis, experiência fluida e governança.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-black-40">
              {supportingBrands.map(brand => (
                <span
                  key={brand}
                  className="rounded-full border border-black-10 bg-primary-ds px-4 py-2 text-[11px] font-semibold tracking-[0.28em] text-black-70"
                >
                  {brand}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map(stat => (
                <div key={stat.label} className="rounded-2xl border border-black-10 bg-white/85 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black-40">{stat.label}</p>
                  <div className="mt-3 flex items-baseline justify-between">
                    <p className="text-2xl font-semibold text-primary-ds">{stat.value}</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-ds/10 px-2.5 py-1 text-[11px] font-semibold text-green-ds">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      {stat.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map(testimonial => (
              <article
                key={testimonial.name}
                className="group rounded-[28px] border border-black-10 bg-white/90 p-8 shadow-[0_22px_48px_rgba(10,12,30,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-green-ds/60"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black-10 bg-primary-ds text-sm font-semibold text-black-70">
                    {getInitials(testimonial.company)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.company}</p>
                    <p className="text-xs text-slate-500">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="mt-6 text-base text-slate-600 sm:text-lg">“{testimonial.quote}”</blockquote>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-600">
                    {testimonial.name
                      .split(' ')
                      .map(part => part[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.position}</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-green-ds/8 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesTestimonialsSection