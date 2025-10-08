import React from "react"
import { CalendarCheck2, Rocket, UsersRound } from "lucide-react"

const milestones = [
  {
    year: "2023",
    title: "Fundação e primeiros testes",
    description: "Validamos a jornada com universidades parceiras e prototipamos nosso motor de matching.",
    icon: CalendarCheck2,
  },
  {
    year: "2024",
    title: "Plataforma de IA e expansão nacional",
    description: "Lançamos o painel integrado para empresas e levamos o EstágioAI para todas as regiões do Brasil.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Comunidade ativa e resultados",
    description: "Mais de 10 mil estudantes acompanhados e 62 empresas com programas estruturados usando nossos playbooks.",
    icon: UsersRound,
  },
]

const MilestonesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white-ds py-24" aria-labelledby="sobre-milestones-heading">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-black-40">Marcos que importam</p>
          <h2 id="sobre-milestones-heading" className="text-3xl font-semibold leading-tight text-primary-ds sm:text-[40px]">
            Crescendo com quem acredita na nova geração
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-green-ds via-green-ds/60 to-green-ds/30 lg:block" aria-hidden="true" />
          <div className="space-y-8">
            {milestones.map(({ year, title, description, icon }) => {
              const IconComponent = icon
              return (
                <article
                  key={year}
                  className="relative flex flex-col gap-4 rounded-3xl border border-black-10 bg-white-ds p-8 shadow-[0_16px_36px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-green-ds/60 hover:shadow-[0_24px_60px_rgba(130,247,179,0.2)] lg:pl-20"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-green-ds">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-10 text-green-ds">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {year}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-ds">{title}</h3>
                  <p className="text-sm leading-relaxed text-black-60">{description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MilestonesSection
