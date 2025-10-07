import React, { useState } from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { Button } from "@/components/ui/button.jsx";
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

const TemplateCard = React.memo(function TemplateCard({ template }) {
  return (
    <div className="group flex h-full flex-col gap-6 rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${template.gradient} opacity-90`} />

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-ds">
            {template.badge}
          </span>
          <div className="flex items-center gap-3 text-xs font-medium text-black-50">
            <span className="inline-flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5" />
              {template.rating}
            </span>
            <span className="inline-flex items-center gap-1 text-green-ds">
              <Download className="h-3.5 w-3.5" />
              {template.downloads}
            </span>
            <span className="inline-flex items-center gap-1 text-black-40">
              <Clock className="h-3.5 w-3.5" />
              {template.time}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-primary-ds">{template.title}</h3>
          <p className="text-base text-black-70">{template.subtitle}</p>
        </div>

        <ul className="mt-4 space-y-3 text-sm text-black-70">
          {template.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-ds flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto grid gap-3 sm:grid-cols-2">
        <Link to="/em-construcao">
          <button className="h-11 w-full rounded-lg bg-black-ds text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg">
            Usar modelo
          </button>
        </Link>
        <Link
          to="/em-construcao"
          className="flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-black-10 bg-white-ds text-sm font-bold text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds transition-all duration-200"
        >
          Ver prévia
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
});

TemplateCard.displayName = "TemplateCard";

export default function ResumeTemplates() {
  const topTemplates = templates.slice(0, 3);
  const [selectedCategory, setSelectedCategory] = useState('Tecnologia');

  return (
    <div className="min-h-screen bg-primary-ds text-primary-ds">
      <Navigation />
      <main id="main-content">
        <section className="relative overflow-hidden bg-black-ds pt-28 pb-24 text-white-ds">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_-20%,rgba(130,247,179,0.18),rgba(15,15,15,0.92))]" />
            <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-green-ds/25 blur-3xl" />
            <div className="absolute bottom-0 -right-36 h-96 w-96 rounded-full bg-black-ds/80 blur-[170px]" />
            <div className="absolute top-1/3 left-16 h-48 w-48 rounded-full border-[3px] border-green-ds opacity-30" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="space-y-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white-ds/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white-ds/80">
                  Biblioteca EstágioAI
                </span>
                <div className="space-y-6">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                    Modelos de currículo profissionais para conquistar o recrutador
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-white-ds/70">
                    Uma curadoria enxuta, validada com times de recrutamento e pronta para personalização em minutos. Gere um PDF leve que atravessa qualquer ATS.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center gap-2 rounded-2xl border border-white/15 bg-white-ds/10 px-4 py-3 backdrop-blur-sm">
                    <Search className="h-4 w-4 text-white-ds/60" />
                    <input
                      placeholder="Buscar por área, empresa ou palavra-chave"
                      className="h-10 border-0 bg-transparent text-sm text-white-ds placeholder:text-white-ds/40 outline-none flex-1"
                    />
                  </div>
                  <button className="h-12 rounded-2xl bg-green-ds px-6 text-sm font-bold text-primary-ds shadow-[0_24px_52px_-26px_rgba(130,247,179,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-hover-ds">
                    Explorar biblioteca
                  </button>
                </div>

                <ul className="grid gap-3 text-sm text-white-ds/75 sm:grid-cols-2">
                  {heroHighlights.map(({ title, description, icon }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white-ds/10 text-green-ds">
                        {React.createElement(icon, { className: 'h-4 w-4' })}
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-white-ds">{title}</p>
                        <p className="text-sm text-white-ds/60">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 pt-2 text-sm text-white-ds/80 sm:flex-row sm:items-center">
                  <Link to="/register">
                    <button className="inline-flex items-center gap-2 h-11 rounded-xl bg-white-ds px-6 text-sm font-bold text-primary-ds transition-all duration-200 hover:-translate-y-0.5 hover:bg-white-ds/90">
                      Criar conta gratuita
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                  <Link to="/vagas" className="inline-flex items-center gap-2 text-sm font-semibold text-white-ds/80 transition hover:text-white-ds">
                    Ver vagas compatíveis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -top-10 left-10 h-36 w-36 rounded-full bg-green-ds/25 blur-3xl" />
                <div className="absolute -bottom-14 right-4 h-44 w-44 rounded-full bg-black-ds/30 blur-[140px]" />
                <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white-ds/10 p-8 shadow-[0_42px_120px_-70px_rgba(130,247,179,0.65)] backdrop-blur-2xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white-ds/50">Sugestão em destaque</p>
                      <p className="mt-3 text-2xl font-semibold text-white-ds">{topTemplates[0].title}</p>
                      <p className="mt-2 text-sm text-white-ds/70">{topTemplates[0].subtitle}</p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white-ds/10 px-3 py-1 text-xs font-semibold text-white-ds/80">
                      Melhor avaliado
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 rounded-2xl border border-white/15 bg-white-ds/10 p-5 text-sm text-white-ds/70">
                    {topTemplates[0].features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-ds" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-3 rounded-2xl border border-white/12 bg-white-ds/5 p-5">
                    {topTemplates.map((template) => (
                      <div key={template.id} className="flex items-center justify-between text-sm text-white-ds/70">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white-ds/45">{template.badge}</p>
                          <p className="mt-2 text-sm font-semibold text-white-ds">{template.title}</p>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-medium">
                          <span className="inline-flex items-center gap-1 text-amber-400">
                            <Star className="h-3.5 w-3.5" />
                            {template.rating}
                          </span>
                          <span className="inline-flex items-center gap-1 text-green-ds">
                            <Download className="h-3.5 w-3.5" />
                            {template.downloads}
                          </span>
                          <span className="inline-flex items-center gap-1 text-white-ds/50">
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

        <section className="border-y border-black-10 bg-white-ds">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-black-50">
              <LayoutTemplate className="h-4 w-4 text-green-ds" />
              Filtrar por área
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    selectedCategory === category 
                      ? "border-green-ds bg-green-ds/10 text-primary-ds" 
                      : "border-black-10 bg-white-ds text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-ds">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-ds">Biblioteca curada para cada etapa</h2>
                <p className="max-w-2xl text-base leading-relaxed text-black-70">
                  Modelos pensados para diferentes jornadas: estágio, trainee, transição de carreira e candidaturas internacionais. Atualizados constantemente com feedback real dos recrutadores parceiros.
                </p>
              </div>
              <Link
                to="/verificador-de-curriculo-ats"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border-2 border-black-10 bg-white-ds px-5 py-2.5 text-sm font-bold text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds transition-all duration-200"
              >
                Verificar currículo no ATS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white-ds py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-ds">
                Como funciona
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-ds">Da escolha ao PDF perfeito em três passos</h2>
              <p className="text-base leading-relaxed text-black-70">
                Um processo pensado para ser leve. Escolha o template certo, preencha com orientações guiadas e faça o download em PDF pronto para enviar.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-3">
              {workflow.map(({ title, description, icon }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-4 rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-ds/10 text-green-ds">
                    {React.createElement(icon, { className: 'h-6 w-6' })}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold leading-tight text-primary-ds">{title}</h3>
                    <p className="text-sm text-black-70">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary-ds">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-ds">Perguntas frequentes</h2>
            <div className="mt-12 space-y-6">
              {faqs.map(({ question, answer }) => (
                <div
                  key={question}
                  className="rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
                >
                  <div className="text-lg sm:text-xl font-bold leading-tight text-primary-ds">{question}</div>
                  <p className="mt-3 text-base leading-relaxed text-black-70">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden pb-24 bg-white-ds">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(120%_160%_at_50%_0%,rgba(130,247,179,0.09),transparent)]" />
          </div>
          <div className="relative mx-auto max-w-5xl rounded-2xl border-2 border-black-10 bg-white-ds px-8 py-12 text-center shadow-lg">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-ds">
              Próximo passo
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-primary-ds">
              Pronto para enviar um currículo que conta a sua história?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-black-70">
              Crie sua conta gratuita, escolha um template e acompanhe feedbacks em tempo real dentro da EstágioAI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/register">
                <button className="rounded-lg bg-green-ds px-8 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg">
                  Criar conta gratuita
                </button>
              </Link>
              <Link
                to="/verificador-de-curriculo-ats"
                className="rounded-lg border-2 border-black-10 bg-white-ds px-8 py-3 text-sm font-bold text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds transition-all duration-200"
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
