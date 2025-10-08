import React from "react"
import { Compass, GraduationCap, LineChart } from "lucide-react"
import BackgroundShapes from "@/components/ui/background-shapes.jsx"

const pillars = [
  {
    title: "Match inteligente",
    description: "Reunimos dados acadêmicos, preferências de carreira e cultura organizacional para gerar combinações precisas em minutos.",
    caption: "IA proprietária com inputs humanos",
    icon: Compass,
  },
  {
    title: "Trilhas guiadas de desenvolvimento",
    description: "Planos de evolução personalizados e check-ins mensais mantêm talentos e gestores na mesma página.",
    caption: "Playbooks prontos para líderes",
    icon: GraduationCap,
  },
  {
    title: "Insights acionáveis",
    description: "Dashboards em tempo real mostram desempenho, retenção e satisfação para decisões rápidas.",
    caption: "Indicadores acompanhados continuamente",
    icon: LineChart,
  },
]

const ApproachSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-ds py-24" aria-labelledby="sobre-approach-heading">
      <BackgroundShapes
        variant="section2"
        opacity={0.2}
        color="rgba(130, 247, 179, 0.9)"
        accentColor="rgba(15, 15, 15, 0.25)"
        accentOpacity={0.18}
        className="opacity-80"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-black-40">Como fazemos</p>
          <h2 id="sobre-approach-heading" className="text-3xl font-semibold leading-tight text-primary-ds sm:text-[40px]">
            Uma jornada de estágio <span className="text-green-ds">end-to-end</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black-60">
            Entregamos estrutura desde a primeira conversa até a efetivação, com dados e rituais que mantêm estudantes engajados e empresas seguras.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon, title, description, caption }) => {
            const IconComponent = icon
            return (
              <article
                key={title}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-black-10 bg-white-ds p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-green-ds/70 hover:shadow-[0_32px_60px_rgba(130,247,179,0.18)]"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-black-40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-10 text-green-ds">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {caption}
                </div>
                <h3 className="text-xl font-semibold text-primary-ds">{title}</h3>
                <p className="text-sm leading-relaxed text-black-60">{description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ApproachSection
