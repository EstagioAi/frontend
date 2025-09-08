import React from "react";
import {
  Search,
  Filter,
  Bell,
  ShieldCheck,
  Activity,
  Users,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-5 h-5" />,
      problem: "Vagas espalhadas em dezenas de sites.",
      solution: "Agregamos fontes e empresas em um só lugar.",
    },
    {
      icon: <Filter className="w-5 h-5" />,
      problem: "Filtros confusos e pouco úteis, você perde tempo.",
      solution:
        "Busca simples com filtros por modalidade, área e disponibilidade.",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      problem: "Você se candidata e não recebe retorno do processo.",
      solution: "Acompanhamento de status e notificações em tempo real.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      problem: "Dúvida se a vaga é confiável ou atualizada.",
      solution: "Empresas e vagas verificadas para mais segurança.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      problem: "Concorrência alta sem critério claro.",
      solution: "Match por afinidade e requisitos da vaga.",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      problem: "Pouca visibilidade sobre o que priorizar.",
      solution: "Insights do que está em alta para você focar.",
    },
  ];

  return (
    <section className="section bg-ink-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge-dark inline-flex mx-auto mb-3 w-fit">
            Funcionalidades
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Funcionalidades que resolvem problemas reais
          </h2>
          <p className="mt-3 text-gray-600">
            Do problema à solução, de forma simples e objetiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group muted-card p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="mb-4 inline-flex w-10 h-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                {f.icon}
              </div>

              <div className="space-y-3">
                <div className="text-[11px] font-semibold text-red-600 tracking-wide uppercase">
                  Problema
                </div>
                <p className="text-slate-900 font-medium">{f.problem}</p>
                <div className="text-[11px] font-semibold text-emerald-700 tracking-wide uppercase mt-4">
                  Solução
                </div>
                <p className="text-slate-900 font-medium">{f.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
