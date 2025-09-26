import React from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import {
  Search,
  ShieldCheck,
  Sparkles,
  LayoutTemplate,
  Star,
  Award,
  Clock,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "Tecnologia",
  "Dados",
  "Administração",
  "Marketing",
  "Engenharia",
  "Direito",
  "Finanças",
  "Design",
  "RH",
  "Vendas",
];

const heroHighlights = [
  {
    title: "Compatível com ATS",
    description: "Estruturas em uma coluna, sem tabelas que travam scanners.",
    icon: ShieldCheck,
  },
  {
    title: "Personalize em minutos",
    description: "Headers inteligentes e blocos editáveis com exemplos reais.",
    icon: Sparkles,
  },
  {
    title: "Validado por recrutadores",
    description: "Mais de 300 feedbacks corporativos incorporados no design.",
    icon: Award,
  },
];

const templates = [
  {
    id: "ats-prisma",
    title: "ATS Prisma",
    subtitle: "Clareza estratégica para vagas tech e dados.",
    badge: "Favorito das empresas",
    gradient: "from-[#0E8F66] via-[#13B387] to-[#2563EB]",
    rating: "4.9",
    downloads: "12k+",
    time: "5 min",
    features: [
      "Seção de conquistas com métricas",
      "Blocos prontos para competências técnicas",
    ],
  },
  {
    id: "executivo-uno",
    title: "Executivo Uno",
    subtitle: "Sofisticação minimalista para áreas corporativas.",
    badge: "Gerência e trainee",
    gradient: "from-[#02161F] via-[#0E2F44] to-[#0E8F66]",
    rating: "4.8",
    downloads: "9k+",
    time: "6 min",
    features: [
      "Resumo profissional com storytelling",
      "Sessão de resultados chave destacada",
    ],
  },
  {
    id: "universitario-start",
    title: "Universitário Start",
    subtitle: "Pensado para o primeiro currículo e programas de estágio.",
    badge: "Primeira experiência",
    gradient: "from-[#6FFFC7] via-[#34D399] to-[#0E8F66]",
    rating: "5.0",
    downloads: "15k+",
    time: "4 min",
    features: [
      "Sugestões de projetos acadêmicos",
      "Área de soft skills guiada",
    ],
  },
  {
    id: "criativo-passo",
    title: "Criativo Passo",
    subtitle: "Layout mais visual para design, marketing e produto.",
    badge: "Para portfolios",
    gradient: "from-[#A855F7] via-[#6366F1] to-[#0E8F66]",
    rating: "4.7",
    downloads: "7k+",
    time: "7 min",
    features: [
      "Blocos de cases com KPI",
      "Entregas e ferramentas favoritas em destaque",
    ],
  },
  {
    id: "internacional-hub",
    title: "Internacional Hub",
    subtitle: "Formato bilíngue para candidaturas globais.",
    badge: "Inglês e português",
    gradient: "from-[#0E8F66] via-[#2DD4BF] to-[#0EA5E9]",
    rating: "4.8",
    downloads: "6k+",
    time: "5 min",
    features: [
      "Dupla coluna nativa para idiomas",
      "Macro resultados com verbos fortes",
    ],
  },
  {
    id: "dados-sprint",
    title: "Dados Sprint",
    subtitle: "Foco em impacto numérico e tech stack.",
    badge: "Data e analytics",
    gradient: "from-[#111827] via-[#047857] to-[#6FFFC7]",
    rating: "4.9",
    downloads: "8k+",
    time: "6 min",
    features: [
      "Tabela de tecnologias com proficiência",
      "Espaço para projetos open source",
    ],
  },
];

const workflow = [
  {
    title: "Escolha o template ideal",
    description: "Filtre por área, nível de carreira ou objetivo. Cada modelo traz contexto sugerido para preenchimento.",
    icon: LayoutTemplate,
  },
  {
    title: "Personalize com orientações",
    description: "Siga os marcadores de texto e exemplos para destacar conquistas, tecnologias e resultados.",
    icon: Sparkles,
  },
  {
    title: "Exporte em PDF pronto",
    description: "Gere versões diferentes em minutos e envie com confiança para processos nacionais e internacionais.",
    icon: Download,
  },
];

const faqs = [
  {
    question: "Os modelos são compatíveis com ATS?",
    answer:
      "Sim. Utilizamos hierarquias simples, sem colunas ou gráficos que comprometam a leitura automática. Testamos com os principais scanners do mercado.",
  },
  {
    question: "Consigo adaptar o currículo para diferentes vagas?",
    answer:
      "Todos os blocos são editáveis e trazem orientações rápidas sobre que tipo de dado incluir em cada seção para diferentes áreas.",
  },
  {
    question: "Vocês disponibilizam modelos gratuitos?",
    answer:
      "Sim. A biblioteca atual conta com dezenas de versões gratuitas e lançaremos opções premium com recursos avançados em breve.",
  },
];

function TemplateCard({ template }) {
  return (
    <div className="group flex h-full flex-col gap-6 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_110px_-60px_rgba(15,23,42,0.4)]">
      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${template.gradient} opacity-90`} />

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium tracking-[0.24em] text-slate-500">
            {template.badge}
          </span>
          <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
            <span className="inline-flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5" />
              {template.rating}
            </span>
            <span className="inline-flex items-center gap-1 text-[#0E8F66]">
              <Download className="h-3.5 w-3.5" />
              {template.downloads}
            </span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              {template.time}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#02161F]">{template.title}</h3>
          <p className="text-sm text-slate-600">{template.subtitle}</p>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {template.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0E8F66]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto grid gap-2 sm:grid-cols-2">
        <Link to="/em-construcao">
          <Button className="h-11 w-full rounded-2xl bg-[#0E8F66] text-sm font-semibold text-white transition hover:bg-[#0b7453]">
            Usar modelo
          </Button>
        </Link>
        <Link
          to="/em-construcao"
          className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-[#0E8F66]/30 text-sm font-semibold text-[#0E8F66] transition hover:bg-[#0E8F66]/10"
        >
          Ver prévia
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ResumeTemplates() {
  const topTemplates = templates.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F6FAFF] to-white text-[#02161F]">
      <Navigation />
      <main>
        <section className="relative overflow-hidden bg-[#020F1A] pt-28 pb-24 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_-20%,rgba(105,255,199,0.18),rgba(2,15,26,0.92))]" />
            <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-[#6FFFC7]/25 blur-3xl" />
            <div className="absolute bottom-0 -right-36 h-96 w-96 rounded-full bg-[#05291C]/80 blur-[170px]" />
            <div className="absolute top-1/3 left-16 h-48 w-48 rounded-full border border-white/10 opacity-60" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="space-y-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  Biblioteca EstágioAI
                </span>
                <div className="space-y-6">
                  <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.04]">
                    Modelos de currículo profissionais para conquistar o recrutador
                  </h1>
                  <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                    Uma curadoria enxuta, validada com times de recrutamento e pronta para personalização em minutos. Gere um PDF leve que atravessa qualquer ATS.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <Search className="h-4 w-4 text-white/60" />
                    <Input
                      placeholder="Buscar por área, empresa ou palavra-chave"
                      className="h-10 border-0 bg-transparent text-sm text-white placeholder:text-white/40"
                    />
                  </div>
                  <Button className="h-12 rounded-2xl bg-[#6FFFC7] px-6 text-sm font-semibold text-[#033124] shadow-[0_24px_52px_-26px_rgba(111,255,199,0.7)] transition hover:-translate-y-0.5 hover:bg-[#58E5B4]">
                    Explorar biblioteca
                  </Button>
                </div>

                <ul className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                  {heroHighlights.map(({ title, description, icon: Icon }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-[#6FFFC7]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="text-sm text-white/60">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 pt-2 text-sm text-white/80 sm:flex-row sm:items-center">
                  <Link to="/register">
                    <Button className="h-11 rounded-xl bg-white px-6 text-sm font-semibold text-[#042016] transition hover:-translate-y-0.5 hover:bg-white/90">
                      Criar conta gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/vagas" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
                    Ver vagas compatíveis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -top-10 left-10 h-36 w-36 rounded-full bg-[#6FFFC7]/25 blur-3xl" />
                <div className="absolute -bottom-14 right-4 h-44 w-44 rounded-full bg-[#0E8F66]/30 blur-[140px]" />
                <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/10 p-8 shadow-[0_42px_120px_-70px_rgba(6,180,135,0.65)] backdrop-blur-2xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">Sugestão em destaque</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{topTemplates[0].title}</p>
                      <p className="mt-2 text-sm text-white/70">{topTemplates[0].subtitle}</p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      Melhor avaliado
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-white/70">
                    {topTemplates[0].features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#6FFFC7]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-3 rounded-2xl border border-white/12 bg-white/5 p-5">
                    {topTemplates.map((template, index) => (
                      <div key={template.id} className="flex items-center justify-between text-sm text-white/70">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">{template.badge}</p>
                          <p className="mt-2 text-sm font-semibold text-white">{template.title}</p>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-medium">
                          <span className="inline-flex items-center gap-1 text-amber-400">
                            <Star className="h-3.5 w-3.5" />
                            {template.rating}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[#6FFFC7]">
                            <Download className="h-3.5 w-3.5" />
                            {template.downloads}
                          </span>
                          <span className="inline-flex items-center gap-1 text-white/50">
                            <Clock className="h-3.5 w-3.5" />
                            {template.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/85">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <LayoutTemplate className="h-4 w-4 text-[#0E8F66]" />
              Filtrar por área
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold transition hover:border-[#0E8F66]/50 hover:bg-[#0E8F66]/10 hover:text-[#0E8F66] ${
                    index === 0 ? "border-[#0E8F66]/40 bg-[#0E8F66]/10 text-[#0E8F66]" : "text-slate-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Biblioteca curada para cada etapa</h2>
                <p className="max-w-2xl text-sm text-slate-500 sm:text-base">
                  Modelos pensados para diferentes jornadas: estágio, trainee, transição de carreira e candidaturas internacionais. Atualizados constantemente com feedback real dos recrutadores parceiros.
                </p>
              </div>
              <Link
                to="/verificador-de-curriculo-ats"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#0E8F66]/30 px-4 py-2 text-sm font-semibold text-[#0E8F66] transition hover:bg-[#0E8F66]/10"
              >
                Verificar currículo no ATS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F3F6F9] py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0E8F66]">
                Como funciona
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Da escolha ao PDF perfeito em três passos</h2>
              <p className="text-sm text-slate-500 sm:text-base">
                Um processo pensado para ser leve. Escolha o template certo, preencha com orientações guiadas e faça o download em PDF pronto para enviar.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-3">
              {workflow.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-3 rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_60px_-50px_rgba(15,23,42,0.25)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0E8F66]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Perguntas frequentes</h2>
            <div className="mt-8 space-y-4">
              {faqs.map(({ question, answer }) => (
                <div
                  key={question}
                  className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-55px_rgba(15,23,42,0.28)]"
                >
                  <div className="text-base font-semibold text-slate-900">{question}</div>
                  <p className="mt-2 text-sm text-slate-500">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(120%_160%_at_50%_0%,rgba(14,143,102,0.09),transparent)]" />
          </div>
          <div className="relative mx-auto max-w-5xl rounded-[32px] border border-slate-200/80 bg-white px-8 py-12 text-center shadow-[0_28px_80px_-60px_rgba(15,23,42,0.28)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8F66]/30 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0E8F66]">
              Próximo passo
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Pronto para enviar um currículo que conta a sua história?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500 sm:text-base">
              Crie sua conta gratuita, escolha um template e acompanhe feedbacks em tempo real dentro da EstágioAI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/register">
                <Button className="rounded-2xl bg-[#0E8F66] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#0b7453]">
                  Criar conta gratuita
                </Button>
              </Link>
              <Link
                to="/verificador-de-curriculo-ats"
                className="rounded-2xl border border-[#0E8F66]/30 px-8 py-3 text-sm font-semibold text-[#0E8F66] transition hover:bg-[#0E8F66]/10"
              >
                Conferir compatibilidade ATS
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
