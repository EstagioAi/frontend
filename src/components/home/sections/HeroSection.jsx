import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlightItems = [
  'Indicamos vagas conforme seu perfil e curso',
  'Linha do tempo com feedback obrigatório das empresas'
]

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020F1A] pt-28 pb-20 text-white sm:pb-24 lg:pb-28 lg:-mb-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(1,226,151,0.16),rgba(2,15,26,0.95))]" />
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-[#01E297]/25 blur-3xl" />
        <div className="absolute bottom-0 -right-28 h-80 w-80 rounded-full bg-[#0B3B2A]/80 blur-[160px]" />
        <div className="absolute top-1/3 left-16 h-48 w-48 rounded-full border border-white/10 opacity-60 animate-rotate-slow" />
      </div>

  <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:px-8">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
            <Sparkles className="h-4 w-4 text-[#6FFFC7]" />
            Plataforma completa para universitários
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[58px] lg:leading-[1.05]">
              Encontre seu estágio ideal com{' '}
              <span className="text-[#6FFFC7]">transparência e velocidade</span>
            </h1>
            <p className="text-lg text-white/70 sm:text-xl">
              O EstágioAI centraliza vagas reais, feedback obrigatório e recomendações inteligentes para você focar no que importa: conquistar sua próxima oportunidade.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-white/75 sm:grid-cols-2">
            {highlightItems.map(item => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-4 backdrop-blur-sm"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-[#6FFFC7]/20 text-[#6FFFC7]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm text-white/75">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/register">
              <Button size="lg" className="h-12 rounded-xl bg-[#6FFFC7] px-8 text-base font-semibold text-[#033124] shadow-[0_22px_45px_-24px_rgba(111,255,199,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-[#58E5B4]">
                Criar minha conta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/vagas" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
              Ver vagas abertas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

  <div className="relative w-full max-w-md lg:mt-4 lg:self-start xl:mt-6">
          <div className="absolute inset-x-0 top-16 h-64 rounded-full bg-[#6FFFC7]/15 blur-3xl" />
          <div className="relative">
            <div className="absolute inset-0 hidden rounded-full border border-white/20 sm:block" />
            <div className="aspect-square overflow-hidden rounded-full border border-white/15 bg-[#0B2A1D] shadow-[0_40px_80px_-50px_rgba(111,255,199,0.7)]">
              <img
                src="/images/misc/diverse-students-celebrating-internship-success.webp"
                alt="Universitários celebrando estágio"
                className="h-full w-full object-cover"
                width="880"
                height="880"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[132%] w-[132%]">
                <div className="absolute top-10 left-1/2 -translate-x-1/2">
                  <Link to="/empresas/google" aria-label="Google" className="block">
                    <div className="float-y float-y-1 grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/95 ring-2 ring-white/50 shadow-lg transition hover:ring-white/70">
                      <img src="/images/companies/google.webp" alt="Google" className="h-6 w-6 object-contain" width="24" height="24" loading="lazy" decoding="async" />
                    </div>
                  </Link>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Link to="/empresas/microsoft" aria-label="Microsoft" className="block">
                    <div className="float-y float-y-2 grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/95 ring-2 ring-white/50 shadow-lg transition hover:ring-white/70">
                      <img src="/images/companies/microsft.webp" alt="Microsoft" className="h-6 w-6 object-contain" width="24" height="24" loading="lazy" decoding="async" />
                    </div>
                  </Link>
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                  <Link to="/empresas/amazon" aria-label="Amazon" className="block">
                    <div className="float-y float-y-3 grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/95 ring-2 ring-white/50 shadow-lg transition hover:ring-white/70">
                      <img src="/images/companies/amazon.webp" alt="Amazon" className="h-6 w-6 object-contain" width="24" height="24" loading="lazy" decoding="async" />
                    </div>
                  </Link>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <Link to="/empresas/ibm" aria-label="IBM" className="block">
                    <div className="float-y float-y-4 grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/95 ring-2 ring-white/50 shadow-lg transition hover:ring-white/70">
                      <img src="/images/companies/ibm.webp" alt="IBM" className="h-6 w-6 object-contain" width="24" height="24" loading="lazy" decoding="async" />
                    </div>
                  </Link>
                </div>
                <div className="absolute top-[11%] left-[11%]">
                  <Link to="/empresas/meta" aria-label="Meta" className="block">
                    <div className="float-y float-y-5 grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/95 ring-2 ring-white/50 shadow-lg transition hover:ring-white/70">
                      <img src="/images/companies/meta.webp" alt="Meta" className="h-6 w-6 object-contain" width="24" height="24" loading="lazy" decoding="async" />
                    </div>
                  </Link>
                </div>
                <div className="absolute bottom-[11%] right-[11%]">
                  <Link to="/empresas/netflix" aria-label="Netflix" className="block">
                    <div className="float-y float-y-6 grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/95 ring-2 ring-white/50 shadow-lg transition hover:ring-white/70">
                      <img src="/images/companies/netflix.webp" alt="Netflix" className="h-6 w-6 object-contain" width="24" height="24" loading="lazy" decoding="async" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-16 right-4 w-[86%] max-w-sm rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-[0_32px_60px_-40px_rgba(24,255,176,0.55)] backdrop-blur-md sm:right-8 sm:w-[22rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Histórias reais</p>
              <div className="mt-3 flex items-center -space-x-3">
                {[1, 23, 32, 41, 10, 30].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/48?img=${i}`}
                    alt="Universitário"
                    className="h-9 w-9 rounded-full border border-white/70"
                    width="36"
                    height="36"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-white/10 text-sm font-semibold text-white/80">
                  +
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">Mais de 10k estudantes conquistaram estágio com o EstágioAI em 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

