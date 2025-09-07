import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana",
      course: "Engenharia",
      university: "UNIFEI",
      avatar: "A",
      quote: "A falta de feedback é o que mais me frustra. Você envia currículo e fica no vazio, sem saber se foi ao menos visualizado."
    },
    {
      name: "Carlos",
      course: "Computação",
      university: "USP",
      avatar: "C",
      quote: "Seria incrível ter transparência no processo. Saber quantos candidatos tem, em que etapa estou, qual minha posição."
    },
    {
      name: "Maria",
      course: "Administração",
      university: "UFMG",
      avatar: "M",
      quote: "As plataformas atuais são muito confusas. Preciso usar 5 sites diferentes e ainda assim não encontro vagas boas."
    }
  ]

  return (
    <section className="py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            O que os universitários{' '}
            <span className="text-gradient">estão dizendo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais da nossa pesquisa de campo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}, {testimonial.course}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.university}</div>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

