import React from 'react'
import { Sparkles, Compass, Bell, ShieldCheck, Users, Activity } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Feed inteligente',
    description: 'Curadoria diária com vagas de programas oficiais, startups e grandes empresas em um só lugar.'
  },
  {
    icon: Compass,
    title: 'Filtro por afinidade',
    description: 'Entenda porque cada vaga foi recomendada para você e o que fazer para subir na lista.'
  },
  {
    icon: ShieldCheck,
    title: 'Confiança garantida',
    description: 'Todas as vagas passam por verificação e têm SLA de feedback para manter o processo vivo.'
  },
  {
    icon: Bell,
    title: 'Alertas em tempo real',
    description: 'Receba notificações quando o status mudar e mantenha sua agenda alinhada.'
  },
  {
    icon: Users,
    title: 'Radar da comunidade',
    description: 'Saiba o que os estudantes da sua universidade fizeram para serem aprovados em cada etapa.'
  },
  {
    icon: Activity,
    title: 'Insights acionáveis',
    description: 'Acompanhe métricas pessoais e recomendações semanais para focar no que gera resultado.'
  }
]

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white-ds py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-140px] top-[-220px] h-[420px] w-[420px] rounded-full bg-[#e0fdf3] blur-3xl" />
        <div className="absolute bottom-[-240px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#e0ecff] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#02161F] sm:text-5xl">
            Funcionalidades que{' '}
            <span className="text-[#0E8F66]">elevam sua busca</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Mais clareza, velocidade e direção. Tudo pensado para estudantes que querem aproveitar cada oportunidade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white-ds p-6 shadow-[0_25px_65px_-50px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute -right-6 -top-10 h-24 w-24 rounded-full bg-[#6FFFC7]/20 blur-xl transition-all duration-300 group-hover:opacity-80" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#059669]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#02161F]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

