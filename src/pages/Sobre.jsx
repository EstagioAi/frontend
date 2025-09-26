import React from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { Sparkles, ArrowRight, Lightbulb, Shield, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "Curadoria inteligente",
    description:
      "Mapeamos objetivos, soft skills e preferências para entregar o match ideal entre estudante e empresa.",
    icon: Lightbulb,
    badge: "IA na prática",
    highlights: [
      "Ranking dinâmico de aderência cultural e técnica",
      "Sugestões de desenvolvimento personalizadas",
    ],
  },
  {
    title: "Experiência sem atrito",
    description:
      "Agenda unificada, feedbacks estruturados e acompanhamento contínuo do processo em um único painel.",
    icon: Shield,
    badge: "Transparência total",
    highlights: [
      "Feedbacks padronizados compartilhados com talentos",
      "Painéis em tempo real para gestores e RH",
    ],
  },
];

const heroHighlights = [
  {
    title: "Programa estruturado",
    subtitle: "+120 vagas abertas por mês",
  },
  {
    title: "Mentorias e eventos",
    subtitle: "+35 encontros por ano",
  },
];


export default function Sobre() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#02161F]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6FAFF] to-white" />
        <div className="absolute -top-60 left-[-220px] h-[520px] w-[520px] rounded-full bg-[#6FFFC7]/18 blur-3xl" />
        <div className="absolute bottom-[-320px] right-[-240px] h-[560px] w-[560px] rounded-full bg-[#2563EB]/12 blur-[220px]" />
      </div>

      <Navigation />

      <main className="relative flex flex-col">
        <section className="relative overflow-hidden bg-[#020F1A] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(118%_160%_at_92%_8%,rgba(1,226,151,0.24),rgba(2,15,26,0.94))]" />
            <div className="absolute -bottom-48 left-[-140px] h-[360px] w-[360px] rounded-full bg-[#0B3B2A]/60 blur-[200px]" />
            <div className="absolute -top-32 right-[12%] h-[320px] w-[320px] rounded-full bg-[#2563EB]/20 blur-[220px]" />
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:px-8 lg:py-24">
            <div className="space-y-9">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  <Sparkles className="h-4 w-4" />
                  Sobre a EstágioAI
                </span>
                <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/50">
                  Atualizado em 2025
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                  Criamos pontes reais entre talentos universitários e empresas que investem no futuro
                </h1>
                <p className="max-w-2xl text-lg text-white/70 sm:text-[1.15rem]">
                  Unimos tecnologia, dados e empatia para que cada estudante encontre o lugar certo para crescer. Empresas parceiras recebem insights acionáveis para construir programas de estágio memoráveis.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="inline-flex items-center gap-3 rounded-2xl bg-[#0E8F66] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b7453]">
                  Conheça nossa jornada
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                  Manifesto cultural
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-br from-[#0E8F66]/35 via-[#2563EB]/20 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[38px] border border-white/12 bg-white/8 p-8 backdrop-blur-xl shadow-[0_45px_95px_-60px_rgba(24,255,176,0.5)]">
                <div className="flex flex-col gap-8">
                  <div className="rounded-3xl border border-white/15 bg-white/12 p-6 text-sm text-white/80">
                    <p className="font-semibold uppercase tracking-[0.3em] text-white/60">Manifesto</p>
                    <p className="mt-3 text-lg leading-relaxed">
                      "Acreditamos que estágio não é etapa burocrática, é laboratório de futuro. Nossa missão é tornar essa virada de chave acessível, justa e inspiradora."
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/40">
                      <MapPin className="h-4 w-4" />
                      Brasil • Operação remota, impacto nacional
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroHighlights.map((highlight) => (
                      <ImpactHighlight key={highlight.title} {...highlight} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F6FAFF] via-transparent to-transparent" />
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-0">
            <div className="relative rounded-[36px] border border-slate-200/70 bg-white/95 p-10 shadow-[0_35px_95px_-60px_rgba(15,23,42,0.35)]">
              <div className="absolute -top-12 -left-16 hidden h-32 w-32 rounded-full bg-[#6FFFC7]/25 blur-[110px] sm:block" />
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0E8F66]/20 bg-[#0E8F66]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0E8F66]">
                Nossa visão
              </div>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#02161F] sm:text-4xl">
                Uma plataforma única para desenhar trilhas de estágio que combinam propósito, desempenho e desenvolvimento humano
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A EstágioAI nasceu de um incômodo em comum: processos cansativos, pouco transparentes e sem retorno para quem participa. Unimos tecnologia a uma visão humanizada para reescrever essa jornada. Hoje entregamos dados, curadoria e comunidade para que universidades, estudantes e empresas possam crescer juntos.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map(({ title, description, icon: Icon, badge, highlights }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-5 rounded-[34px] border border-slate-200 bg-white/95 p-10 shadow-[0_34px_110px_-60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_42px_120px_-60px_rgba(15,23,42,0.42)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0E8F66]/20 bg-[#0E8F66]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0E8F66]">
                      {badge}
                    </div>
                    <div className="rounded-2xl bg-[#0E8F66]/12 p-3">
                      <Icon className="h-5 w-5 text-[#0E8F66]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#02161F]">{title}</h3>
                  <p className="text-base leading-relaxed text-slate-600">{description}</p>
                  {highlights?.length ? (
                    <div className="space-y-2 text-sm text-slate-600">
                      {highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#0E8F66]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
}

function ImpactHighlight({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/12 px-4 py-5 text-white backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{title}</div>
      <div className="mt-2 text-base font-semibold text-white">{subtitle}</div>
    </div>
  );
}

