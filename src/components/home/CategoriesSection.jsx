import React from "react";
import { PenTool, Code2, Megaphone, FileText } from "lucide-react";

const categories = [
  { title: "Design & Criatividade", icon: PenTool },
  { title: "Desenvolvimento Web", icon: Code2 },
  { title: "Vendas & Marketing", icon: Megaphone },
  { title: "Redação de Conteúdo", icon: FileText },
];

const CategoriesSection = () => {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="badge-dark mb-3 w-fit">Categorias</div>

          <h2 className="text-slate-900 text-3xl md:text-[32px] font-semibold tracking-tight">
            Busque por Categoria
          </h2>
          <p className="text-muted mt-2">
            Mais de 10k empresas estão procurando talentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ title, icon }) => (
            <div
              key={title}
              className="group muted-card p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                {React.createElement(icon, {
                  className: "w-6 h-6 text-slate-700",
                })}
              </div>
              <h3 className="text-slate-900 text-lg font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
