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
    <section className="relative overflow-hidden pt-20 pb-20 min-h-[85vh] flex items-start">
      {/* Background com paleta coral/terracota */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid pattern de fundo */}
        <div
          className="absolute inset-0 opacity-40 z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(61, 61, 58, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(61, 61, 58, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Gradiente base - usando var(--gradient-hero) */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />

        {/* Blob coral/terracota - canto superior esquerdo */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(217, 119, 87, 0.25) 0%, rgba(217, 119, 87, 0.12) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Blob suave bege - canto superior direito */}
        <div
          className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(245, 244, 237, 0.8) 0%, rgba(250, 249, 245, 0.4) 50%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Elementos decorativos minimalistas */}
        <div className="absolute top-32 left-16 z-10">
          <div className="w-16 h-0.5" style={{ background: 'linear-gradient(to right, rgba(217, 119, 87, 0.4), transparent)' }} />
          <div className="w-8 h-0.5 mt-2 ml-4" style={{ background: 'linear-gradient(to right, rgba(217, 119, 87, 0.25), transparent)' }} />
        </div>

        {/* Elemento decorativo - círculo sutil */}
        <div className="absolute top-1/3 right-32 z-10">
          <div className="w-20 h-20 rounded-full" style={{ border: '1px solid rgba(217, 119, 87, 0.2)' }} />
        </div>

        {/* Overlay para suavizar */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-10 lg:pt-8">
            {/* Badge minimalista - border coral, background branco */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-sm transition-all hover:shadow-md" style={{ border: '1px solid var(--color-coral-primary)', background: 'var(--color-bg-white)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-coral-primary)' }} />
              <span className="font-medium text-sm" style={{ color: 'var(--color-gray-dark)' }}>Plataforma para empresas</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]">
                <span className="block" style={{ color: '#3d3d3a' }}>Contrate os</span>
                <span className="block mt-2 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #d97757, #d97757)' }}>
                  Melhores Talentos
                </span>
                <span className="block mt-2" style={{ color: '#3d3d3a' }}>Universitários</span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: '#3d3d3a', opacity: 0.75 }}>
                Centralize a operação completa de recrutamento em um hub inteligente, reduza o tempo de contratação e entregue experiência premium para candidatos e gestores.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm" style={{ color: '#6b6b68' }}>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" style={{ color: '#d97757' }} />
                Compliance e LGPD by design
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock4 className="h-4 w-4" style={{ color: '#d97757' }} />
                Onboarding em menos de 10 dias
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" style={{ color: '#d97757' }} />
                Suporte dedicado enterprise
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row pt-2">
              <Button variant="cta" size="lg" className="group">
                Solicitar demonstração
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
              >
                Conversar com especialista
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              {highlightMetrics.map(({ label, value, accent }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
                  style={{ border: accent ? '1px solid rgba(217, 119, 87, 0.25)' : '1px solid rgba(217, 119, 87, 0.15)' }}
                >
                  <div className="text-xs uppercase tracking-[0.2em]" style={{ color: '#6b6b68' }}>{label}</div>
                  <div className="mt-2 text-2xl font-bold" style={{ color: accent ? '#d97757' : '#3d3d3a' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md lg:self-stretch lg:pt-8">
            <div className="rounded-3xl bg-white p-6 shadow-lg" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(217, 119, 87, 0.1)' }}>
                  <Building2 className="h-5 w-5" style={{ color: '#d97757' }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: '#6b6b68' }}>Hub Corporativo</p>
                  <p className="text-lg font-semibold" style={{ color: '#3d3d3a' }}>Operação integrada EstágioAI</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 rounded-2xl p-4" style={{ background: '#faf9f5', border: '1px solid rgba(217, 119, 87, 0.1)' }}>
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full" style={{ background: '#d97757' }}></div>
                  <div>
                    <p className="font-semibold" style={{ color: '#3d3d3a' }}>Pipeline centralizado</p>
                    <p style={{ color: '#6b6b68' }}>Gestão de vagas, etapas e stakeholders em uma visão única</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-2xl p-4" style={{ background: '#faf9f5', border: '1px solid rgba(217, 119, 87, 0.1)' }}>
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full" style={{ background: '#d97757' }}></div>
                  <div>
                    <p className="font-semibold" style={{ color: '#3d3d3a' }}>Match inteligente</p>
                    <p style={{ color: '#6b6b68' }}>Recomendações automáticas alimentadas por feedback real</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-2xl p-4" style={{ background: '#faf9f5', border: '1px solid rgba(217, 119, 87, 0.1)' }}>
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full" style={{ background: '#d97757' }}></div>
                  <div>
                    <p className="font-semibold" style={{ color: '#3d3d3a' }}>Experiência premium</p>
                    <p style={{ color: '#6b6b68' }}>Comunicação contínua com candidatos via um único canal</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl p-4 text-sm" style={{ background: 'rgba(217, 119, 87, 0.1)', border: '1px solid rgba(217, 119, 87, 0.2)' }}>
                <p className="font-semibold" style={{ color: '#d97757' }}>Deploy rápido</p>
                <p className="mt-1" style={{ color: '#6b6b68' }}>Integração com ATS, SSO e governança de acessos em dias, não meses.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#6b6b68' }}>Empresas que aceleram com EstágioAI</span>
              <div className="flex w-full flex-wrap gap-3 sm:w-auto">
                {trustLogos.map((logo) => (
                  <div key={logo} className="flex items-center justify-center rounded-xl bg-white px-4 py-2 text-xs font-semibold shadow-sm" style={{ border: '1px solid rgba(217, 119, 87, 0.15)', color: '#6b6b68' }}>
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