import React from "react";
import { Button } from "@/components/ui/button.jsx";

const Formularios = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Pronto para mudar sua{" "}
            <span className="text-gradient">experiência</span>{" "}
            <span className="text-blue-500">de busca?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Junte-se aos 65% dos universitários que já demonstraram interesse na
            nossa plataforma. Seja um dos primeiros a testar o EstagioAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card para Estudantes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gradient mb-2">
                Sou Estudante
              </h3>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <input
                type="text"
                placeholder="Seu curso"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <input
                type="text"
                placeholder="Sua universidade"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <Button className="w-full bg-brand-neon text-black hover:bg-brand-neon/90 py-3 font-medium">
                Quero ser notificado
              </Button>
            </div>
          </div>

          {/* Card para Empresas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gradient mb-2">
                Sou Empresa
              </h3>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email corporativo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <input
                type="text"
                placeholder="Seu cargo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <Button className="w-full bg-brand-purple text-white hover:bg-brand-purple/90 py-3 font-medium">
                Quero contratar talentos
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Estamos desenvolvendo em sprint de 16 semanas. Seja um dos primeiros
            a testar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Formularios;
