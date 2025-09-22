import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Ana", course: "Engenharia", university: "UNIFEI", avatar: "A", quote: "A falta de feedback é o que mais me frustra. Você envia currículo e fica no vazio, sem saber se foi ao menos visualizado." },
    { name: "Carlos", course: "Computação", university: "USP", avatar: "C", quote: "Seria incrível ter transparência no processo. Saber quantos candidatos tem, em que etapa estou, qual minha posição." },
    { name: "Maria", course: "Administração", university: "UFMG", avatar: "M", quote: "As plataformas atuais são muito confusas. Preciso usar 5 sites diferentes e ainda assim não encontro vagas boas." },
    { name: "Lucas", course: "Sistemas de Informação", university: "UFSC", avatar: "L", quote: "Quero saber onde estou no processo e quando devo me preparar para entrevista." },
    { name: "Beatriz", course: "Computação", university: "Unicamp", avatar: "B", quote: "Ter todas as vagas num só lugar e com filtros úteis economiza muito tempo." },
    { name: "Júlia", course: "Direito", university: "UnB", avatar: "J", quote: "Saber se a vaga é confiável faz toda a diferença para eu me candidatar." },
    { name: "Rafael", course: "Economia", university: "UFRGS", avatar: "R", quote: "Receber notificação quando o status muda evita ficar checando toda hora." },
    { name: "Larissa", course: "Design", university: "PUC-Rio", avatar: "L", quote: "Processos foram mais claros com feedback obrigatório. Parei de ficar no escuro." },
    { name: "Pedro", course: "Engenharia de Produção", university: "UFRJ", avatar: "P", quote: "O match por afinidade deixou as recomendações realmente relevantes." }
  ]

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black">
            O que os universitários{' '}
            <span className="text-[#01E297]">estão dizendo</span>
          </h2>
          <p className="text-lg text-gray-600">
            Depoimentos reais da nossa pesquisa de campo
          </p>
        </div>

        <div className="relative marquee-container overflow-hidden min-h-[240px] md:min-h-[260px]">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex gap-6 animate-marquee-left py-4">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition border border-gray-200 w-[280px] sm:w-[340px] md:w-[360px] lg:w-[380px] min-h-[200px] md:min-h-[220px] flex-shrink-0"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 md:w-12 md:h-12 bg-[#092116] rounded-full flex items-center justify-center text-white font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-black">{t.name}, {t.course}</div>
                    <div className="text-sm text-gray-600">{t.university}</div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic leading-relaxed">“{t.quote}”</blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

