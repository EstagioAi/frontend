import React from 'react'

const SolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nossa solução inteligente
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black">
            Criamos a resposta para cada{' '}
            <span className="text-gradient">problema identificado</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos funcionalidades revolucionárias baseadas nos feedbacks 
            diretos dos universitários para eliminar cada frustração do processo de 
            busca por estágios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Recomendações Personalizadas
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Algoritmo de IA que analisa seu perfil universitário, histórico de aprovações 
              da sua instituição e calcula suas chances reais em cada vaga.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Filtros inteligentes por disponibilidade e modalidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Score de afinidade visual com cores intuitivas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Histórico de contratações da sua universidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Análise de competitividade em tempo real</span>
              </div>
            </div>
          </div>
          
          {/* Cartão real de vaga */}
          <div className="job-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 relative">
            {/* Barra de progresso no canto superior direito */}
            <div className="progress-bar-container">
              <div className="progress-bar" style={{width: '85%'}}></div>
            </div>
            
            <div className="job-card-header">
              <div className="company-logo">
                T
              </div>
              <div className="chances-section">
                <div className="chances-label">Suas chances:</div>
                <div className="chances-value">85%</div>
              </div>
            </div>
            
            <div className="job-title">Desenvolvedor Frontend React</div>
            <div className="company-name">TechCorp Innovations</div>
            <div className="company-description">
              Startup EdTech de 50 pessoas, ambiente descontraído, foco em inovação e crescimento acelerado.
            </div>
            
            <div className="job-salary">R$ 2.500 - R$ 3.500</div>
            
            <div className="skills-container">
              <div className="skills-label">Skills necessárias:</div>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">APIs REST</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mt-4">
              3 estudantes da UNIFEI foram aprovados aqui nos últimos 6 meses
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection

