import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      title: "IA para Currículos",
      description: "Leitor inteligente analisa seu currículo e sugere melhorias baseadas em candidatos aprovados."
    },
    {
      title: "Insights de Mercado",
      description: "Veja quais habilidades estão em demanda na sua área e região em tempo real."
    },
    {
      title: "Avaliações de Empresas",
      description: "Sistema tipo \"Reclame Aqui\" para avaliar empresas e processos seletivos."
    },
    {
      title: "Candidatura Rápida",
      description: "Perfil completado uma vez, candidature-se com apenas um clique."
    },
    {
      title: "Filtros Inteligentes",
      description: "Busca por disponibilidade, modalidade, salário, tamanho da empresa e afinidade."
    },
    {
      title: "Vagas Verificadas",
      description: "Todas as empresas são verificadas internamente para garantir legitimidade."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black">
            Recursos que fazem a{' '}
            <span className="text-gradient">diferença</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Funcionalidades inteligentes desenvolvidas especificamente para universitários brasileiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

