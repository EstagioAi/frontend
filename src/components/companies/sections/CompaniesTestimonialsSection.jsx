import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    company: 'Grupo Vortex',
    name: 'Camila Castro',
    position: 'Head de Pessoas',
    quote:
      'Conseguimos reduzir o tempo de contratação de 45 para 18 dias. O time tem visibilidade total das prioridades e feedbacks em tempo real.'
  },
  {
    company: 'Atlas Labs',
    name: 'Eduardo Lima',
    position: 'Diretor de Operações',
    quote:
      'A curadoria de talentos ficou muito mais clara. Em poucas semanas reunimos um banco robusto e previsível, com match score confiável.'
  },
  {
    company: 'Nova Energia',
    name: 'Roberta Martins',
    position: 'Gerente de Talent Acquisition',
    quote:
      'Os gestores finalmente participam do processo com agilidade. A mesma plataforma que dá visibilidade também cuida da governança.'
  }
]

const stats = [
  { label: 'Tempo médio de contratação', value: '21 dias' },
  { label: 'Gestores engajados', value: '87%' },
  { label: 'Candidatos qualificados', value: '+62%' },
  { label: 'NPS dos candidatos', value: '92' }
]

const supportingBrands = ['Amazon', 'Google', 'Meta', 'Microsoft', 'Netflix']

const getInitials = (text) =>
  text
    .split(' ')
    .filter(Boolean)
    .map(part => part[0]?.toUpperCase())
    .slice(0, 2)
    .join('')

const CompaniesTestimonialsSection = () => {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-600">
              <Star className="h-4 w-4" />
              Prova social
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Operações de recrutamento modernas confiam no EstágioAI
            </h2>
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              Dos primeiros estágios a programas robustos de talentos, somos o parceiro para times que precisam escalar
              contratações sem perder qualidade.
            </p>

            <div className="hidden flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-400 sm:flex">
              {supportingBrands.map(brand => (
                <span
                  key={brand}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold tracking-[0.28em] text-slate-500"
                >
                  {brand}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map(stat => (
                <div key={stat.label} className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map(testimonial => (
              <article key={testimonial.name} className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-[0px_26px_60px_rgba(15,23,42,0.12)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-600">
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
                    {testimonial.name.split(' ').map(part => part[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.position}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesTestimonialsSection