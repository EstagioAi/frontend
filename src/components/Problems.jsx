import React from 'react'

const Problems = () => {
  const problems = [
    {
      icon: "🔍",
      title: "Não saber onde buscar",
      description: "Plataformas espalhadas, vagas escondidas em sites de empresas, total falta de centralização das oportunidades."
    },
    {
      icon: "🌀",
      title: "Plataformas confusas",
      description: "Interfaces desorganizadas, filtros inadequados, UX frustrante que desperdiça tempo valioso dos estudantes."
    },
    {
      icon: "👥",
      title: "Concorrência extrema",
      description: "Milhares de candidatos para poucas vagas, sem transparência sobre chances reais de aprovação."
    },
    {
      icon: "📭",
      title: "Falta de feedback",
      description: "Candidaturas enviadas no vazio absoluto, sem retorno sobre status do processo seletivo."
    },
    {
      icon: "🔒",
      title: "Falta de transparência",
      description: "Processos seletivos completamente opacos, etapas desconhecidas, critérios de avaliação obscuros."
    },
    {
      icon: "🛡️",
      title: "Falta de confiança",
      description: "Dúvidas sobre legitimidade das vagas, experiências frustrantes anteriores criando desconfiança."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ⚠️ A REALIDADE DOS UNIVERSITÁRIOS
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Sabemos que buscar estágios é{' '}
            <span className="text-red-500">torturante</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa pesquisa com <span className="text-green-500 font-bold">26 universitários</span> revelou os principais problemas que{' '}
            <span className="text-red-500 font-bold">todo estudante enfrenta</span> ao procurar estágios no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border-l-4 border-blue-500 shadow-sm">
          <blockquote className="text-lg md:text-xl italic text-center text-muted-foreground">
            "O LinkedIn domina como principal plataforma,<br />
            mas apenas <span className="font-bold text-blue-500">24 de 26 estudantes</span> o usam por falta de alternativas melhores."
          </blockquote>
          <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
            Pesquisa EstagioAI com 26 universitários
          </p>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Está cansado dessa realidade?
          </h3>
          <p className="text-lg text-gradient font-semibold">
            Vamos mudar isso juntos
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problems

