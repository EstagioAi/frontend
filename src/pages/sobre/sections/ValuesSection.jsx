import React from "react"
import { Heart, Target, ShieldCheck, Sparkle } from "lucide-react"

const values = [
  {
    title: "Empatia radical",
    description: "Decisões orientadas por escuta ativa com estudantes, gestores e universidades.",
    icon: Heart,
  },
  {
    title: "Propósito compartilhado",
    description: "Unimos times de tecnologia, RH e liderança para construir experiências significativas.",
    icon: Target,
  },
  {
    title: "Transparência prática",
    description: "Relatórios claros, feedbacks estruturados e SLA visível em cada etapa.",
    icon: ShieldCheck,
  },
  {
    title: "Inovação constante",
    description: "Experimentamos, medimos e iteramos rápido para entregar valor contínuo.",
    icon: Sparkle,
  },
]

const ValuesSection = () => {
  return (
    <section className="relative overflow-hidden bg-black-ds text-white-ds py-24" aria-labelledby="sobre-values-heading">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-[15%] top-[10%] h-64 w-64 rounded-full bg-green-ds/30 blur-[140px]" />
        <div className="absolute right-[18%] bottom-[12%] h-72 w-72 rounded-full bg-green-ds/20 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Cultura viva</p>
          <h2 id="sobre-values-heading" className="text-3xl font-semibold leading-tight text-white-ds sm:text-[40px]">
            Valores que guiam cada entrega
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Nosso time combina diferentes histórias, mas compartilha o compromisso de desbloquear a próxima geração de talentos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon, title, description }) => {
            const IconComponent = icon
            return (
              <article
                key={title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-1 hover:border-green-ds/60 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-green-ds">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-white-ds">{title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
