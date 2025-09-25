import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { SmartLink } from "@/components/ui/smart-link.jsx";

const CTASection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb orb--emerald orb-animate w-[340px] h-[340px] -top-16 -left-10"></div>
        <div className="orb orb--teal orb-animate w-[280px] h-[280px] -bottom-12 -right-12"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black">
            Pronto para mudar sua{" "}
            <span className="text-[#01E297]">experiência</span> de busca?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Junte-se aos 65% dos universitários que já demonstraram interesse na
            nossa plataforma. Seja um dos primeiros a testar o EstagioAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 animate-scale-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Sou Estudante
              </h3>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Seu curso"
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Sua universidade"
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <Button className="w-full py-3 rounded-[12px] bg-[#01E297] text-black font-medium hover:brightness-95">
                Quero ser notificado
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 animate-scale-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Sou Empresa
              </h3>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email corporativo"
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <input
                type="text"
                placeholder="Seu cargo"
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#01E297]"
              />
              <Button className="w-full py-3 rounded-[12px] bg-[#092116] text-white font-medium hover:brightness-110">
                Quero contratar talentos
              </Button>
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Já tem uma conta empresarial?</p>
                <SmartLink to="/" forceSubdomain="empresas">
                  <Button variant="outline" className="w-full py-3 rounded-[12px] border-[#01E297] text-[#01E297] hover:bg-[#01E297] hover:text-white font-medium">
                    Acessar Portal de Empresas
                  </Button>
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
