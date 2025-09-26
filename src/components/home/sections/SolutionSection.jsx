import React from "react";
import { CheckCircle2, ArrowDownRight } from "lucide-react";

const steps = [
  {
    title: "Monte seu perfil acadêmico",
    description: "Importe seu currículo, informe disponibilidade e deixe nossa IA entender sua jornada.",
    items: [
      "Integração com LinkedIn e modelos prontos",
      "Preferências por área, modalidade e idioma",
      "Alertas personalizados via e-mail e WhatsApp"
    ]
  },
  {
    title: "Receba vagas com match instantâneo",
    description: "Veja afinidade, etapas, tempo de resposta médio e quem já passou naquele processo.",
    items: [
      "Ranking de compatibilidade alimentado pela comunidade",
      "Sugestões do que melhorar para subir na lista",
      "Histórico de aprovações da sua universidade"
    ]
  },
  {
    title: "Acompanhe tudo em tempo real",
    description: "Kanban pessoal com feedback obrigatório das empresas e recomendações de preparação.",
    items: [
      "Linha do tempo visual com status atualizado",
      "Guides e mentorias sugeridos conforme etapa",
      "Relatórios para você compartilhar com a coordenação"
    ]
  }
];

const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-[-160px] h-[420px] w-[420px] rounded-full bg-[#e0fdf3] blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#e0ecff] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Sua jornada em 3 etapas
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#02161F] sm:text-5xl">
              Do cadastro à contratação com{' '}
              <span className="text-[#0E8F66]">cliques guiados</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Cada insight da plataforma de empresas vira benefício direto para os estudantes. A experiência é limpa, objetiva e com recomendações em tempo real.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map(({ title, description, items }, idx) => (
                <div key={title} className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#059669]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-semibold text-[#02161F]">{title}</h3>
                  </div>
                  <p className="text-base text-slate-600">{description}</p>
                  <ul className="mt-5 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0E8F66]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -top-10 right-6 hidden rounded-3xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-lg backdrop-blur-sm md:flex md:items-center md:gap-3">
              <ArrowDownRight className="h-4 w-4 text-[#0E8F66]" />
              Vaga recomendada no topo da sua lista
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_35px_80px_-50px_rgba(15,23,42,0.55)]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#02161F] text-white text-lg font-semibold">Ad</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#02161F]">Adobe · Trainee UI/UX Designer</h3>
                    <span className="text-xs uppercase tracking-[0.25em] text-slate-400">Postado há 2 horas</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Match</span>
                  <div className="text-2xl font-semibold text-[#0E8F66]">85%</div>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-slate-200" />

              <div className="mt-5 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Modalidade</span>
                  <p className="mt-1 font-medium text-[#02161F]">Híbrido · São Paulo</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Bolsa</span>
                  <p className="mt-1 font-medium text-[#02161F]">R$ 2.400 + benefícios</p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600">
                "Buscamos talentos com olhar apurado para design system, pesquisa com usuários e colaboração com squads de produto."
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-[#0E8F66]">Insight da comunidade</p>
                <p className="mt-2">3 estudantes da UNIFEI foram aprovados aqui nos últimos 6 meses. Prepare uma apresentação curta sobre seu projeto favorito.</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Design System', 'Figma', 'Motion UI', 'Pesquisa qualitativa'].map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
