import React from "react"
import { CheckCircle2, Brain, HeartHandshake } from "lucide-react"
import { TextHighlight } from "@/components/ui/text-highlight.jsx"

const highlights = [
  {
    title: "Curadoria guiada por dados",
    description: "Modelos proprietários combinam interesses, soft skills e disponibilidade para recomendar oportunidades com fit real.",
    icon: Brain,
  },
  {
    title: "Experiências que engajam",
    description: "Feedbacks contínuos, rituais de mentoria e trilhas de desenvolvimento conectando RH, lideranças e talentos.",
    icon: HeartHandshake,
  },
  {
    title: "Confiança para todas as partes",
    description: "Transparência sobre etapas, SLAs claros e indicadores compartilhados com universidades e empresas.",
    icon: CheckCircle2,
  },
]

const EssenceSection = () => {
  return (
    <section className="relative overflow-hidden bg-white-ds py-24" aria-labelledby="sobre-essence-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-20 lg:px-8">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black-40">Nossa essência</p>
          <h2 id="sobre-essence-heading" className="text-3xl font-semibold leading-tight text-primary-ds sm:text-[40px]">
            Conectamos estudantes e empresas com uma plataforma de <TextHighlight variant="marker">experiências relevantes</TextHighlight>
          </h2>
          <p className="text-lg leading-relaxed text-black-70">
            Estágio não é etapa burocrática dentro da EstágioAI. É laboratório de futuro. Por isso construímos uma jornada que equilibra tecnologia acessível, curadoria humana e rituais de acompanhamento para acelerar o crescimento de quem contrata e de quem aprende.
          </p>
          <div className="rounded-3xl border border-black-10 bg-green-08 p-6 text-sm text-black-60 shadow-[0_16px_32px_rgba(0,0,0,0.06)]">
            <p>
              <strong className="font-semibold text-primary-ds">Manifesto em ação:</strong> acompanhamos cada match até os primeiros 90 dias de estágio para garantir adaptação, aprendizados e continuidade saudável.
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {highlights.map(({ icon, title, description }) => {
            const IconComponent = icon
            return (
              <div
                key={title}
                className="group flex gap-4 rounded-3xl border border-black-10 bg-white py-6 pl-6 pr-5 shadow-[0_14px_32px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-green-ds/60 hover:shadow-[0_20px_45px_rgba(130,247,179,0.18)]"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-10 text-green-ds transition-transform duration-200 group-hover:scale-110">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-primary-ds">{title}</h3>
                  <p className="text-sm leading-relaxed text-black-60">{description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EssenceSection
