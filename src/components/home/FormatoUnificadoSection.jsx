import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const FormatoUnificadoSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Formato Unificado */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Formato Unificado
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Todas as vagas seguem o mesmo formato estruturado e padronizado, com seções obrigatórias que{' '}
              <span className="text-[#01E297] font-semibold">eliminam confusão</span> e expectativas irreais.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-gray-700">Cultura da empresa e ambiente de trabalho</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-gray-700">Responsabilidades claras do dia a dia</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-gray-700">Tecnologias e habilidades que você vai aprender</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#01E297]" />
                <span className="text-gray-700">Linha do tempo visual do processo seletivo</span>
              </div>
            </div>
          </div>

          {/* Estrutura Padronizada */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-gray-200/70">
            <h3 className="text-xl font-bold text-black mb-6">Estrutura Padronizada</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-[#01E297] pl-4">
                <h4 className="font-semibold text-[#01E297] mb-1">Sobre a Empresa</h4>
                <p className="text-sm text-gray-600">Startup EdTech de 50 pessoas, ambiente descontraído, foco em inovação...</p>
              </div>

              <div className="border-l-4 border-[#01E297] pl-4">
                <h4 className="font-semibold text-[#01E297] mb-1">O Que Você Vai Aprender</h4>
                <p className="text-sm text-gray-600">React, TypeScript, APIs REST, metodologias ágeis...</p>
              </div>

              <div className="border-l-4 border-[#092116] pl-4">
                <h4 className="font-semibold text-[#092116] mb-1">Processo Seletivo</h4>
                <p className="text-sm text-gray-600">1. Inscrição → 2. Teste técnico → 3. Entrevista → 4. Feedback final</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormatoUnificadoSection
