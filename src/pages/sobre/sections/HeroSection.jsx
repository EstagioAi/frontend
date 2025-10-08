import React from "react"
import { ArrowUpRight, Sparkles, PhoneCall } from "lucide-react"
import BackgroundShapes from "@/components/ui/background-shapes.jsx"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const metrics = [
  {
    value: "10k+",
    label: "estudantes orientados",
  },
  {
    value: "120+",
    label: "programas de estágio ativos",
  },
  {
    value: "62",
    label: "empresas parceiras em 2025",
  },
]

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black-ds text-white-ds" aria-labelledby="sobre-hero-heading">
      <BackgroundShapes
        variant="mesh"
        opacity={0.2}
        color="rgba(130, 247, 179, 0.9)"
        accentColor="rgba(15, 15, 15, 0.45)"
        accentOpacity={0.3}
        className="opacity-80"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.18}
        color="rgba(130, 247, 179, 0.65)"
        accentColor="rgba(130, 247, 179, 0.12)"
        accentOpacity={0.22}
        blendMode="screen"
        className="opacity-70"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:py-28">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            EstágioAI
          </div>

          <div className="space-y-6">
            <h1 id="sobre-hero-heading" className="text-4xl font-semibold leading-[1.05] tracking-tight text-white-ds sm:text-5xl lg:text-[56px]">
              Tecnologia com propósito para transformar jornadas de estágio em crescimento real
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              Somos uma plataforma brasileira que une IA e curadoria humana para aproximar talentos universitários de empresas que investem em futuros brilhantes. Transparência, dados e acompanhamento contínuo em um só lugar.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="inline-flex items-center gap-3 rounded-full bg-green-ds px-6 py-3 text-sm font-semibold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg">
              Falar com nosso time
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button className="rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white-ds transition-all duration-200 hover:border-green-ds hover:bg-white/10">
              Conhecer oportunidades
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-green-ds/30 blur-[120px]" aria-hidden="true" />
            <div className="absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-green-ds/25 blur-[140px]" aria-hidden="true" />

            <div className="relative space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                Manifesto vivo
              </div>
              <blockquote className="text-lg leading-relaxed text-white/80">
                “Estágio não precisa ser acerto às cegas. Criamos pontes reais para que cada talento descubra onde pode crescer e cada empresa acompanhe essa evolução de perto.”
              </blockquote>

              <div className="grid gap-6 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/14 bg-white/6 px-4 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <p className="text-3xl font-semibold text-white-ds">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/50">{metric.label}</p>
                  </div>
                ))}
              </div>

              <Badge variant="outline" className="w-fit rounded-full border-white/12 bg-white/5 text-white/80 backdrop-blur dark:border-white/15">
                Operação 100% remota • Impacto nacional
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
