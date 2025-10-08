import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const heroMetrics = [
  {
    label: 'Tempo médio de contratação',
    value: '18 dias'
  },
  {
    label: 'Gestores satisfeitos',
    value: '97%'
  }
]

const trustedBrands = [
  { name: 'Amazon', logo: '/images/companies/amazon.webp' },
  { name: 'Google', logo: '/images/companies/google.webp' },
  { name: 'IBM', logo: '/images/companies/ibm.webp' },
  { name: 'Meta', logo: '/images/companies/meta.webp' }
]

const CompaniesHeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-primary-ds pt-28 pb-24"
      style={{ backgroundImage: 'url(/images/backgrounds/background-hero.png)' }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/85 to-white" />
      <BackgroundShapes
        variant="mesh"
        opacity={0.08}
        color="rgba(130, 247, 179, 0.35)"
        accentColor="rgba(15, 15, 15, 0.12)"
        accentOpacity={0.1}
        blendMode="screen"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:items-center lg:gap-20 lg:px-8">
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-black-10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-black-60 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-green-ds" />
            Plataforma para empresas
          </div>

          <header className="space-y-5">
            <h1 className="text-4xl font-semibold leading-[1.05] text-primary-ds sm:text-5xl">
              A forma mais fácil de transformar recrutamento em experiência premium.
            </h1>
            <p className="text-lg leading-relaxed text-black-70">
              Operação inteira centralizada, métricas atualizadas e talentos prontos em uma jornada fluida para gestores e
              candidatos.
            </p>
          </header>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              className="group inline-flex items-center gap-2 rounded-xl bg-black-ds px-6 py-3 text-sm font-semibold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg"
            >
              Solicitar demonstração
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="inline-flex items-center gap-2 rounded-xl border border-green-ds/40 bg-white px-6 py-3 text-sm font-semibold text-primary-ds transition-all duration-200 hover:border-green-ds"
            >
              Conhecer funcionalidades
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            {heroMetrics.map(metric => (
              <div key={metric.label} className="rounded-2xl border border-black-5 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black-40">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-primary-ds">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="relative hidden w-full lg:flex lg:justify-end">
          <div className="relative w-full max-w-sm rounded-[32px] border border-black-8 bg-black-ds p-8 shadow-[0_32px_64px_rgba(6,10,30,0.24)]">
            <div className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-green-ds/60 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-16 -right-8 h-48 w-48 rounded-full bg-green-ds/40 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 text-white/90">
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Painel executivo</p>
                <p className="mt-3 text-2xl font-semibold text-white">Contratações em tempo real</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Vagas ativas</p>
                  <div className="mt-2 flex items-baseline justify-between text-white">
                    <span className="text-3xl font-semibold">32</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-ds/15 px-3 py-1 text-[11px] font-semibold text-green-ds">
                      <Sparkles className="h-4 w-4" /> SLA 24h
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Talentos shortlistados</p>
                  <p className="mt-2 text-3xl font-semibold text-white">146</p>
                  <p className="mt-1 text-xs text-white/70">Score médio 82</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm text-white/80">
                Experiência para gestores com aprovações em um clique e histórico completo de feedbacks.
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="relative mx-auto mt-16 flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black-40">Times que confiam na EstágioAI</p>
        <div className="flex flex-wrap items-center gap-8 opacity-80">
          {trustedBrands.map(brand => (
            <img key={brand.name} src={brand.logo} alt={brand.name} className="h-9 w-auto object-contain" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesHeroSection