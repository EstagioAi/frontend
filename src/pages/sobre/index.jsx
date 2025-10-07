import React from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { Sparkles, ArrowRight, Lightbulb, Shield, MapPin, CheckCircle, Heart, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

const timelineEvents = [
  {
    year: "2023",
    title: "Fundação da EstágioAI",
    description: "Nascemos com a missão de transformar a forma como estudantes encontram oportunidades de estágio, unindo tecnologia e empatia.",
    badge: "Início"
  },
  {
    year: "2023",
    title: "Primeiras parcerias com universidades",
    description: "Estabelecemos colaborações estratégicas com instituições de ensino para entender as necessidades reais dos estudantes.",
  },
  {
    year: "2024",
    title: "Lançamento da plataforma de IA",
    description: "Implementamos algoritmos de matching inteligente que conectam estudantes às vagas mais adequadas ao seu perfil.",
    badge: "Tecnologia"
  },
  {
    year: "2024",
    title: "Expansão nacional",
    description: "Alcançamos presença em todo o Brasil, conectando talentos de diferentes regiões com empresas inovadoras.",
  },
  {
    year: "2025",
    title: "Comunidade de 10.000+ estudantes",
    description: "Celebramos a marca de milhares de estudantes conectados e centenas de empresas parceiras investindo no futuro.",
    badge: "Milestone"
  },
];

const teamMembers = [
  {
    name: "Ana Silva",
    role: "CEO & Co-fundadora",
    initials: "AS",
    bio: "Apaixonada por educação e tecnologia, lidera a visão estratégica da EstágioAI.",
    bgColor: "bg-[#fef9e7]" // Yellow pastel
  },
  {
    name: "Carlos Mendes",
    role: "CTO",
    initials: "CM",
    bio: "Especialista em IA e machine learning, arquiteta as soluções tecnológicas da plataforma.",
    bgColor: "bg-[#e8f8f5]" // Mint pastel
  },
  {
    name: "Beatriz Costa",
    role: "Head de Produto",
    initials: "BC",
    bio: "Garante que cada funcionalidade entregue valor real para estudantes e empresas.",
    bgColor: "bg-[#f4ecf7]" // Lavender pastel
  },
  {
    name: "Rafael Santos",
    role: "Head de Parcerias",
    initials: "RS",
    bio: "Constrói relacionamentos estratégicos com universidades e empresas parceiras.",
    bgColor: "bg-[#fef5e7]" // Peach pastel
  },
  {
    name: "Juliana Oliveira",
    role: "Head de Comunidade",
    initials: "JO",
    bio: "Cuida da experiência dos estudantes e promove engajamento na plataforma.",
    bgColor: "bg-[#fef9e7]" // Yellow pastel
  },
  {
    name: "Pedro Almeida",
    role: "Head de Dados",
    initials: "PA",
    bio: "Transforma dados em insights acionáveis para melhorar o matching e a experiência.",
    bgColor: "bg-[#e8f8f5]" // Mint pastel
  },
];

const companyValues = [
  {
    icon: Heart,
    title: "Empatia",
    description: "Colocamos as pessoas no centro de tudo, entendendo suas necessidades e desafios."
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Acreditamos no poder da conexão entre estudantes, empresas e universidades."
  },
  {
    icon: Target,
    title: "Propósito",
    description: "Cada ação é guiada pela missão de transformar carreiras e construir futuros."
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Usamos tecnologia para criar soluções que realmente fazem a diferença."
  },
];


export default function Sobre() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary-ds text-primary-ds">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8f8] via-white to-[#f8f8f8]" />
        <div className="absolute -top-60 left-[-220px] h-[520px] w-[520px] rounded-full bg-green-ds/10 blur-3xl" />
        <div className="absolute bottom-[-320px] right-[-240px] h-[560px] w-[560px] rounded-full bg-green-ds/5 blur-[220px]" />
      </div>

      <Navigation />

      <main id="main-content" className="relative flex flex-col">
        <section className="relative overflow-hidden bg-black-ds text-white-ds">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(118%_160%_at_92%_8%,rgba(130,247,179,0.24),rgba(15,15,15,0.94))]" />
            <div className="absolute -bottom-48 left-[-140px] h-[360px] w-[360px] rounded-full bg-green-ds/20 blur-[200px]" />
            <div className="absolute -top-32 right-[12%] h-[320px] w-[320px] rounded-full bg-green-ds/10 blur-[220px]" />
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:px-8 lg:py-24">
            <div className="space-y-9">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white-ds/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white-ds/10 px-3 py-1">
                  <Sparkles className="h-4 w-4" />
                  Sobre a EstágioAI
                </span>
                <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white-ds/5 px-3 py-1 text-white-ds/50">
                  Atualizado em 2025
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white-ds sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                  Criamos pontes reais entre talentos universitários e empresas que investem no futuro
                </h1>
                <p className="max-w-2xl text-lg text-white-ds/70 sm:text-[1.15rem]">
                  Unimos tecnologia, dados e empatia para que cada estudante encontre o lugar certo para crescer. Empresas parceiras recebem insights acionáveis para construir programas de estágio memoráveis.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="inline-flex items-center gap-3 rounded-lg bg-green-ds px-6 py-3 text-sm font-semibold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg">
                  Conheça nossa jornada
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button className="rounded-lg border-2 border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white-ds transition-all duration-200 hover:border-green-ds hover:bg-white-ds/5">
                  Manifesto cultural
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-green-ds/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white-ds/8 p-8 backdrop-blur-xl shadow-lg">
                <div className="flex flex-col gap-8">
                  <div className="rounded-3xl border border-white/15 bg-white-ds/12 p-6 text-sm text-white-ds/80">
                    <p className="font-semibold uppercase tracking-[0.3em] text-white-ds/60">Manifesto</p>
                    <p className="mt-3 text-lg leading-relaxed">
                      "Acreditamos que estágio não é etapa burocrática, é laboratório de futuro. Nossa missão é tornar essa virada de chave acessível, justa e inspiradora."
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white-ds/40">
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
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8f8f8] via-transparent to-transparent" />
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-0">
            <div className="relative rounded-2xl border-2 border-black-10 bg-white-ds p-10 shadow-lg">
              <div className="absolute -top-12 -left-16 hidden h-32 w-32 rounded-full bg-green-ds/25 blur-[110px] sm:block" />
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-green-ds">
                Nossa visão
              </div>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
                Uma plataforma única para desenhar trilhas de estágio que combinam propósito, desempenho e desenvolvimento humano
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black-70">
                A EstágioAI nasceu de um incômodo em comum: processos cansativos, pouco transparentes e sem retorno para quem participa. Unimos tecnologia a uma visão humanizada para reescrever essa jornada. Hoje entregamos dados, curadoria e comunidade para que universidades, estudantes e empresas possam crescer juntos.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map(({ title, description, icon, badge, highlights }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-5 rounded-2xl border-2 border-black-10 bg-white-ds p-10 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-green-ds">
                      {badge}
                    </div>
                    <div className="rounded-2xl bg-green-ds/10 p-3">
                      {React.createElement(icon, { className: 'h-5 w-5 text-green-ds' })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-ds">{title}</h3>
                  <p className="text-base leading-relaxed text-black-70">{description}</p>
                  {highlights?.length ? (
                    <div className="space-y-2 text-sm text-black-70">
                      {highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-green-ds" />
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

        {/* Timeline Section */}
        <section className="relative py-20 bg-primary-ds">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-0">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-green-ds mb-4">
                Nossa jornada
              </div>
              <h2 className="text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
                Como chegamos até aqui
              </h2>
            </div>

            <div className="relative">
              {/* Verde Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#82f7b3] via-[#6ee5a1] to-[#82f7b3]/50" />

              <div className="space-y-12">
                {timelineEvents.map((event) => (
                  <div key={`${event.year}-${event.title}`} className="relative pl-20">
                    {/* Verde Circle Marker */}
                    <div className="absolute left-[1.375rem] top-2 h-5 w-5 rounded-full bg-green-ds border-4 border-[#f8f8f8] shadow-lg" />
                    
                    <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-green-ds">{event.year}</span>
                        {event.badge && (
                          <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-ds">
                            {event.badge}
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-ds mb-2">
                        {event.title}
                      </h3>
                      <p className="text-black-70 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-20 bg-white-ds">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-green-ds mb-4">
                Nosso time
              </div>
              <h2 className="text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
                Pessoas que fazem acontecer
              </h2>
              <p className="mt-4 text-lg text-black-70 max-w-2xl mx-auto">
                Uma equipe diversa e apaixonada por conectar talentos com oportunidades
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-black-10 bg-primary-ds p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#82f7b3] to-[#6ee5a1] mb-4 flex items-center justify-center text-primary-ds text-2xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-ds mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-green-ds mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-black-70 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-20 bg-primary-ds">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-green-ds mb-4">
                Nossos valores
              </div>
              <h2 className="text-3xl font-semibold leading-tight text-primary-ds sm:text-4xl">
                O que nos move todos os dias
              </h2>
              <p className="mt-4 text-lg text-black-70 max-w-2xl mx-auto">
                Princípios que guiam cada decisão e ação na EstágioAI
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {companyValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-white-ds border-2 border-green-20 flex items-center justify-center mb-4 transition-transform duration-200 hover:scale-110">
                      <Icon className="h-9 w-9 text-green-ds" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-ds mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-black-70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
}

const ImpactHighlight = React.memo(function ImpactHighlight({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white-ds/12 px-4 py-5 text-white-ds backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white-ds/60">{title}</div>
      <div className="mt-2 text-base font-semibold text-white-ds">{subtitle}</div>
    </div>
  );
});

ImpactHighlight.displayName = 'ImpactHighlight';

