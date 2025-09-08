import React from "react";
import { Button } from "@/components/ui/button.jsx";

const CTASection = () => {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
            Pronto para mudar sua{" "}
            <span className="text-[#01E297]">experiência</span> de busca?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Junte-se aos 65% dos universitários que já demonstraram interesse na
            nossa plataforma. Seja um dos primeiros a testar o EstagioAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="muted-card p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Sou Estudante
              </h3>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Seu curso"
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Sua universidade"
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <Button className="btn-clean w-full py-3 rounded-[12px] font-semibold">
                Quero ser notificado
              </Button>
            </div>
          </div>

          <div className="muted-card p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Sou Empresa
              </h3>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email corporativo"
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Seu cargo"
                className="w-full px-4 py-3 border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <Button className="btn-clean w-full py-3 rounded-[12px] font-semibold">
                Quero contratar talentos
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Estamos desenvolvendo em sprint de 16 semanas. Seja um dos primeiros
            a testar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
