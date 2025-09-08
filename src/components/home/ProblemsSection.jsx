import React from "react";
import {
  Search,
  LayoutGrid,
  Users,
  MessageSquare,
  Eye,
  ShieldAlert,
} from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      title: "Não saber onde buscar",
      description:
        "Plataformas espalhadas, vagas escondidas em sites de empresas, total falta de centralização das oportunidades.",
      icon: Search,
      color: "emerald",
    },
    {
      title: "Plataformas confusas",
      description:
        "Interfaces desorganizadas, filtros inadequados, UX frustrante que desperdiça tempo valioso dos estudantes.",
      icon: LayoutGrid,
      color: "amber",
    },
    {
      title: "Concorrência extrema",
      description:
        "Milhares de candidatos para poucas vagas, sem transparência sobre chances reais de aprovação.",
      icon: Users,
      color: "rose",
    },
    {
      title: "Falta de feedback",
      description:
        "Candidaturas enviadas no vazio absoluto, sem retorno sobre status do processo seletivo.",
      icon: MessageSquare,
      color: "sky",
    },
    {
      title: "Falta de transparência",
      description:
        "Processos seletivos completamente opacos, etapas desconhecidas, critérios de avaliação obscuros.",
      icon: Eye,
      color: "violet",
    },
    {
      title: "Falta de confiança",
      description:
        "Dúvidas sobre legitimidade das vagas, experiências frustrantes anteriores criando desconfiança.",
      icon: ShieldAlert,
      color: "indigo",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold ring-1 ring-emerald-200 mb-6">
            A realidade dos universitários
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 tracking-tight">
            Sabemos que buscar estágios é{" "}
            <span className="text-[#01E297]">desafiador</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa pesquisa com{" "}
            <span className="text-[#01E297] font-bold">
              + de 100 universitários
            </span>{" "}
            revelou os principais problemas que{" "}
            <span className="text-[#092116] font-bold">
              todo estudante enfrenta
            </span>{" "}
            ao procurar estágios no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group muted-card p-6 md:p-8 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 rounded-xl ring-1 bg-emerald-50 ring-emerald-200 text-emerald-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900">
            Está cansado dessa realidade?
          </h3>
          <p className="text-lg text-[#01E297] font-semibold">
            Vamos mudar isso juntos
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
