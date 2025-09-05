import React from 'react'

const FormatoUnificadoSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Formato Unificado */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">💻</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-brand-neon">Formato</span>{' '}
                <span className="text-black">Unificado</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Todas as vagas seguem o mesmo formato estruturado e padronizado, com seções obrigatórias que{' '}
              <span className="text-brand-neon font-semibold">eliminam confusão</span> e expectativas irreais.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-neon rounded-full"></div>
                <span className="text-gray-700">Cultura da empresa e ambiente de trabalho</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-neon rounded-full"></div>
                <span className="text-gray-700">Responsabilidades claras do dia a dia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-neon rounded-full"></div>
                <span className="text-gray-700">Tecnologias e habilidades que você vai aprender</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-neon rounded-full"></div>
                <span className="text-gray-700">Linha do tempo visual do processo seletivo</span>
              </div>
            </div>
          </div>

          {/* Estrutura Padronizada */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-brand-neon mb-6">Estrutura Padronizada</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-600 mb-1">Sobre a Empresa</h4>
                <p className="text-sm text-gray-600">
                  Startup EdTech de 50 pessoas, ambiente descontraído, foco em inovação...
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-600 mb-1">O Que Você Vai Aprender</h4>
                <p className="text-sm text-gray-600">
                  React, TypeScript, APIs REST, metodologias ágeis...
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-600 mb-1">Processo Seletivo</h4>
                <p className="text-sm text-gray-600">
                  1. Inscrição → 2. Teste técnico → 3. Entrevista → 4. Feedback final
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormatoUnificadoSection

