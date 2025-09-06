import React from "react";

const Feedback = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard de Candidaturas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-brand-purple mb-6">
              Dashboard de Candidaturas
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-sm font-medium">
                  Enviada
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                  Visualizada
                </div>
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium">
                  Entrevista
                </div>
                <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm font-medium">
                  Finalizada
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-brand-neon rounded-full"></div>
                <div className="flex-1 h-2 bg-brand-neon rounded-full"></div>
                <div className="w-4 h-4 bg-brand-neon rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                ✅ Seu currículo foi visualizado! A entrevista está agendada
                para amanhã às 14h.
              </p>
            </div>
          </div>

          {/* Feedback Obrigatório */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">📊</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-brand-purple">Feedback</span>{" "}
                <span className="text-brand-neon">Obrigatório</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Dashboard Kanban pessoal mostra o progresso de cada candidatura em
              tempo real.{" "}
              <span className="text-brand-purple font-semibold">
                Empresas são obrigadas
              </span>{" "}
              a dar feedback em cada etapa.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                <span className="text-gray-700">
                  Linha de progresso visual por candidatura
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                <span className="text-gray-700">
                  Notificações push e email em tempo real
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                <span className="text-gray-700">
                  Feedback detalhado obrigatório das empresas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                <span className="text-gray-700">
                  Histórico completo de todas as interações
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
