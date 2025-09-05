import React from 'react'

const Solution = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✅ NOSSA SOLUÇÃO INTELIGENTE
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Criamos a resposta para cada{' '}
            <span className="text-gradient">problema identificado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos funcionalidades revolucionárias baseadas nos feedbacks 
            diretos dos universitários para eliminar cada frustração do processo de 
            busca por estágios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              🎯 Recomendações Personalizadas
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Algoritmo de IA que analisa seu perfil universitário, histórico de aprovações 
              da sua instituição e calcula suas chances reais em cada vaga.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Filtros inteligentes por disponibilidade e modalidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Score de afinidade visual com cores intuitivas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Histórico de contratações da sua universidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Análise de competitividade em tempo real</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <h4 className="text-lg font-bold mb-4 text-green-600">Preview da Recomendação</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div>
                  <div className="font-semibold">TechCorp Innovations</div>
                  <div className="text-sm text-muted-foreground">Desenvolvedor Frontend React</div>
                </div>
                <div className="ml-auto">
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    Alta Afinidade
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Suas chances:</div>
                <div className="text-2xl font-bold text-green-600">85%</div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                3 estudantes da UNIFEI foram aprovados aqui nos últimos 6 meses
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution

