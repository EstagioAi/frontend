import React from 'react'

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "IA para Currículos",
      description: "Leitor inteligente analisa seu currículo e sugere melhorias baseadas em candidatos aprovados."
    },
    {
      icon: "📊",
      title: "Insights de Mercado",
      description: "Veja quais habilidades estão em demanda na sua área e região em tempo real."
    },
    {
      icon: "⭐",
      title: "Avaliações de Empresas",
      description: "Sistema tipo \"Reclame Aqui\" para avaliar empresas e processos seletivos."
    },
    {
      icon: "⚡",
      title: "Candidatura Rápida",
      description: "Perfil completado uma vez, candidature-se com apenas um clique."
    },
    {
      icon: "🔍",
      title: "Filtros Inteligentes",
      description: "Busca por disponibilidade, modalidade, salário, tamanho da empresa e afinidade."
    },
    {
      icon: "✅",
      title: "Vagas Verificadas",
      description: "Todas as empresas são verificadas internamente para garantir legitimidade."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Recursos que fazem a{' '}
            <span className="text-gradient">diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Funcionalidades inteligentes desenvolvidas especificamente para universitários brasileiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

