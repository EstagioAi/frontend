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
    <section className="relative overflow-hidden pt-20 pb-20 min-h-[85vh] flex items-start bg-primary-ds">
      {/* Background com paleta verde/preto */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blob verde - canto superior esquerdo */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(130, 247, 179, 0.3) 0%, rgba(130, 247, 179, 0.15) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Elementos decorativos minimalistas */}
        <div className="absolute top-32 left-16 z-10">
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#82f7b3]/40 to-transparent" />
          <div className="w-8 h-0.5 mt-2 ml-4 bg-gradient-to-r from-[#82f7b3]/25 to-transparent" />
        </div>

        {/* Elemento decorativo - círculo sutil */}
        <div className="absolute top-1/3 right-32 z-10">
          <div className="w-20 h-20 rounded-full border-[3px] border-green-ds opacity-30" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-10 lg:pt-8">
            {/* Badge minimalista - border verde, background branco */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-green-ds bg-green-ds/10 shadow-sm transition-all hover:shadow-md">
              <div className="w-2 h-2 rounded-full bg-green-ds animate-pulse" />
              <span className="font-medium text-sm text-primary-ds">Plataforma para empresas</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                <span className="block text-primary-ds">Contrate os</span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#82f7b3] to-[#6ee5a1]">
                  Melhores Talentos
                </span>
                <span className="block mt-2 text-primary-ds">Universitários</span>
              </h1>
              <p className="text-lg leading-relaxed text-black-70">
                Centralize a operação completa de recrutamento em um hub inteligente, reduza o tempo de contratação e entregue experiência premium para candidatos e gestores.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-black-50">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-ds" />
                Compliance e LGPD by design
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock4 className="h-4 w-4 text-green-ds" />
                Onboarding em menos de 10 dias
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-ds" />
                Suporte dedicado enterprise
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row pt-2">
              <Button variant="primary" size="lg" className="group inline-flex items-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg">
                Solicitar demonstração
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="inline-flex items-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg"
              >
                Conversar com especialista
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              {highlightMetrics.map(({ label, value, accent }) => (
                <div
                  key={label}
                  className="rounded-2xl border-2 border-black-10 bg-white-ds p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-black-50">{label}</div>
                  <div className="mt-2 text-2xl font-bold" style={{ color: accent ? '#82f7b3' : '#0f0f0f' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md lg:self-stretch lg:pt-8">
            <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-ds/10">
                  <Building2 className="h-5 w-5 text-green-ds" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black-50">Hub Corporativo</p>
                  <p className="text-lg font-semibold text-primary-ds">Operação integrada EstágioAI</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 rounded-2xl border-2 border-black-10 bg-primary-ds p-4">
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-green-ds"></div>
                  <div>
                    <p className="font-semibold text-primary-ds">Pipeline centralizado</p>
                    <p className="text-black-70">Gestão de vagas, etapas e stakeholders em uma visão única</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-2xl border-2 border-black-10 bg-primary-ds p-4">
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-green-ds"></div>
                  <div>
                    <p className="font-semibold text-primary-ds">Match inteligente</p>
                    <p className="text-black-70">Recomendações automáticas alimentadas por feedback real</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-2xl border-2 border-black-10 bg-primary-ds p-4">
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-green-ds"></div>
                  <div>
                    <p className="font-semibold text-primary-ds">Experiência premium</p>
                    <p className="text-black-70">Comunicação contínua com candidatos via um único canal</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border-2 border-green-ds bg-green-ds/10 p-4 text-sm">
                <p className="font-semibold text-green-ds">Deploy rápido</p>
                <p className="mt-1 text-black-70">Integração com ATS, SSO e governança de acessos em dias, não meses.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-xs uppercase tracking-[0.2em] text-black-50">Empresas que aceleram com EstágioAI</span>
              <div className="flex w-full flex-wrap gap-3 sm:w-auto">
                {trustLogos.map((logo) => (
                  <div key={logo} className="flex items-center justify-center rounded-xl border-2 border-black-10 bg-white-ds px-4 py-2 text-xs font-semibold shadow-sm text-black-50">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesHeroSection