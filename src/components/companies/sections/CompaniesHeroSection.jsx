import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Building2, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Clock4 } from 'lucide-react'

const highlightMetrics = [
  { label: 'Tempo médio de contratação', value: '-62%', accent: true },
  { label: 'Candidatos qualificados', value: '+3.4x' },
  { label: 'Satisfação dos recrutadores', value: '97%' }
]

const trustLogos = ['Amazon', 'Google', 'Microsoft', 'Meta', 'Nubank', 'Stone']

const CompaniesHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#02161F] pt-24 pb-24 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_90%_10%,rgba(1,226,151,0.16),rgba(2,22,31,0.95))]"></div>
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#01E297]/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#03A979]/10 blur-3xl"></div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-2xl space-y-10 lg:pt-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-[#6FFFC7]" />
            Plataforma para operações de recrutamento
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Contrate com confiança e ritmo de escala
            </h1>
            <p className="text-lg text-white/70 md:text-xl">
              Centralize a operação completa de recrutamento em um hub inteligente, reduza o tempo de contratação e entregue experiência premium para candidatos e gestores.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#6FFFC7]" />
              Compliance e LGPD by design
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock4 className="h-4 w-4 text-[#6FFFC7]" />
              Onboarding em menos de 10 dias
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#6FFFC7]" />
              Suporte dedicado enterprise
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-12 rounded-xl bg-[#6FFFC7] px-8 text-base font-semibold text-[#052B1E] shadow-[0_18px_36px_-18px_rgba(111,255,199,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-[#5EEDB5]">
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-white/20 bg-transparent px-8 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Conversar com especialista
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlightMetrics.map(({ label, value, accent }) => (
              <div
                key={label}
                className={`rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md ${accent ? 'shadow-[0_22px_45px_-24px_rgba(111,255,199,0.7)]' : 'shadow-[0_16px_32px_-28px_rgba(5,17,27,0.6)]'}`}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>

  <div className="w-full max-w-md lg:self-stretch">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-[0_40px_80px_-45px_rgba(20,255,179,0.45)] backdrop-blur-md">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6FFFC7]/20">
                <Building2 className="h-5 w-5 text-[#6FFFC7]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Hub Corporativo</p>
                <p className="text-lg font-semibold">Operação integrada EstágioAI</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#6FFFC7]"></div>
                <div>
                  <p className="font-semibold text-white">Pipeline centralizado</p>
                  <p className="text-white/60">Gestão de vagas, etapas e stakeholders em uma visão única</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#6FFFC7]"></div>
                <div>
                  <p className="font-semibold text-white">Match inteligente</p>
                  <p className="text-white/60">Recomendações automáticas alimentadas por feedback real</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#6FFFC7]"></div>
                <div>
                  <p className="font-semibold text-white">Experiência premium</p>
                  <p className="text-white/60">Comunicação contínua com candidatos via um único canal</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-[#6FFFC7]/40 bg-[#6FFFC7]/10 p-4 text-sm text-white/70">
              <p className="font-semibold text-[#6FFFC7]">Deploy rápido</p>
              <p className="mt-1">Integração com ATS, SSO e governança de acessos em dias, não meses.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">Empresas que aceleram com EstágioAI</span>
            <div className="flex w-full flex-wrap gap-3 sm:w-auto">
              {trustLogos.map((logo) => (
                <div key={logo} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesHeroSection