import React from 'react'

const ProblemsSection = () => {
  const problems = [
    {
      title: "Não saber onde buscar",
      description: "Plataformas espalhadas, vagas escondidas em sites de empresas, total falta de centralização das oportunidades."
    },
    {
      title: "Plataformas confusas",
      description: "Interfaces desorganizadas, filtros inadequados, UX frustrante que desperdiça tempo valioso dos estudantes."
    },
    {
      title: "Concorrência extrema",
      description: "Milhares de candidatos para poucas vagas, sem transparência sobre chances reais de aprovação."
    },
    {
      title: "Falta de feedback",
      description: "Candidaturas enviadas no vazio absoluto, sem retorno sobre status do processo seletivo."
    },
    {
      title: "Falta de transparência",
      description: "Processos seletivos completamente opacos, etapas desconhecidas, critérios de avaliação obscuros."
    },
    {
      title: "Falta de confiança",
      description: "Dúvidas sobre legitimidade das vagas, experiências frustrantes anteriores criando desconfiança."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            A realidade dos universitários
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black">
            Sabemos que buscar estágios é{' '}
            <span className="text-red-500">torturante</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa pesquisa com <span className="text-green-500 font-bold">26 universitários</span> revelou os principais problemas que{' '}
            <span className="text-red-500 font-bold">todo estudante enfrenta</span> ao procurar estágios no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-black">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border-l-4 border-blue-500 shadow-sm">
          <blockquote className="text-lg md:text-xl italic text-center text-gray-600">
            "O LinkedIn domina como principal plataforma,<br />
            mas apenas <span className="font-bold text-blue-500">24 de 26 estudantes</span> o usam por falta de alternativas melhores."
          </blockquote>
          <p className="text-center text-sm text-gray-500 mt-4 font-medium">
            Pesquisa EstagioAI com 26 universitários
          </p>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
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

export default ProblemsSection

