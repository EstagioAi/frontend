import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const FeedbackSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#092116]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard de Candidaturas */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-gray-200/70">
            <h3 className="text-lg md:text-xl font-bold text-black tracking-tight mb-6">Progresso de sua candidatura</h3>

            <div className="space-y-4 mb-6">
              {/* Linha de etapas com rotulos alinhados aos pontos */}
              <div className="grid grid-cols-7 gap-2">
                {/* Labels (linha 1) */}
                <div className="col-start-1 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200 px-2.5 py-1 text-xs font-medium">Enviada</span>
                </div>
                <div className="col-start-3 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 px-2.5 py-1 text-xs font-medium">Visualizada</span>
                </div>
                <div className="col-start-5 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200 px-2.5 py-1 text-xs font-medium">Entrevista</span>
                </div>
                <div className="col-start-7 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-200 px-2.5 py-1 text-xs font-medium">Finalizada</span>
                </div>

                {/* Timeline (linha 2) */}
                {/* Dot 1 */}
                <div className="col-start-1 flex items-center justify-center">
                  <span className="relative block w-3.5 h-3.5 rounded-full bg-[#01E297]"></span>
                </div>
                {/* Bar 1-2 preenchida */}
                <div className="col-start-2 flex items-center">
                  <span className="w-full h-2 rounded-full -mx-1 bg-gradient-to-r from-[#01E297] to-emerald-400"></span>
                </div>
                {/* Dot 2 (atual - com ping) */}
                <div className="col-start-3 flex items-center justify-center">
                  <span className="relative inline-flex">
                    <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-[#01E297] opacity-40 animate-ping"></span>
                    <span className="relative inline-flex w-3.5 h-3.5 rounded-full bg-[#01E297] ring-4 ring-[#01E297]/20 transition-all"></span>
                  </span>
                </div>
                {/* Bar 2-3 pendente */}
                <div className="col-start-4 flex items-center">
                  <span className="w-full h-2 rounded-full -mx-1 bg-gray-200"></span>
                </div>
                {/* Dot 3 pendente */}
                <div className="col-start-5 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-gray-200"></span>
                </div>
                {/* Bar 3-4 pendente */}
                <div className="col-start-6 flex items-center">
                  <span className="w-full h-2 rounded-full -mx-1 bg-gray-200"></span>
                </div>
                {/* Dot 4 pendente */}
                <div className="col-start-7 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-gray-200"></span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-300 bg-[#EEFFF6] p-4">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
              <p className="text-sm text-gray-700">Seu currículo foi visualizado. A entrevista está agendada para amanhã às 14h.</p>
            </div>
          </div>

          {/* Feedback Obrigatório */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-[#01E297]">Feedback</span>{' '}
                <span className="text-white">Obrigatório</span>
              </h2>
            </div>

            <p className="text-lg text-white/80 mb-8">
              O Kanban pessoal mostra o progresso de cada candidatura em tempo real.{' '}
              <span className="text-[#01E297] font-semibold">Empresas são obrigadas</span>{' '}
              a dar feedback em cada etapa.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-white/80">Linha de progresso visual por candidatura</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-white/80">Notificações por email em tempo real</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-white/80">Feedback simplificado de 1 clique para empresas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-white/80">Histórico completo de interações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
