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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold ring-1 ring-emerald-200 mb-6">
            A realidade dos universitários
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">
            Sabemos que buscar estágios é{' '}
            <span className="text-[#FACC15]">desafiador</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa pesquisa com <span className="text-[#01E297] font-bold">26 universitários</span> revelou os principais problemas que{' '}
            <span className="text-[#092116] font-bold">todo estudante enfrenta</span> ao procurar estágios no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-400"
            >
              <div className="absolute inset-x-6 -top-3 h-3 rounded-t-2xl bg-gradient-to-r from-transparent via-emerald-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              <h3 className="text-xl font-bold mb-4 text-black">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>



        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Está cansado dessa realidade?
          </h3>
          <p className="text-lg text-[#01E297] font-semibold">
            Vamos mudar isso juntos
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection

