import React from 'react'

const testimonials = [
  { name: 'Ana', course: 'Engenharia', university: 'UNIFEI', avatar: 'A', quote: 'O painel de feedback me mostra exatamente onde estou. Nunca mais fiquei esperando resposta no escuro.' },
  { name: 'Carlos', course: 'Computação', university: 'USP', avatar: 'C', quote: 'Ver quantos candidatos restam e quais próximos passos me deixa tranquilo para me preparar bem.' },
  { name: 'Maria', course: 'Administração', university: 'UFMG', avatar: 'M', quote: 'O formato padrão de vagas é perfeito. Consigo comparar propostas rapidamente e decidir onde focar.' },
  { name: 'Lucas', course: 'Sistemas de Informação', university: 'UFSC', avatar: 'L', quote: 'Os alertas chegam no momento certo. Quando abre vaga com meu perfil, sou um dos primeiros a aplicar.' },
  { name: 'Beatriz', course: 'Computação', university: 'Unicamp', avatar: 'B', quote: 'Match por afinidade com dicas práticas fez toda diferença. Ajustei meu currículo e fui chamado.' },
  { name: 'Júlia', course: 'Direito', university: 'UnB', avatar: 'J', quote: 'Ter empresas verificadas e prazos claros me passou muita confiança. Hoje indico pra todo mundo.' },
  { name: 'Rafael', course: 'Economia', university: 'UFRGS', avatar: 'R', quote: 'Os relatórios ajudam a conversar com a coordenação. Tenho dados reais do meu progresso.' },
  { name: 'Larissa', course: 'Design', university: 'PUC-Rio', avatar: 'L', quote: 'Os mentors e trilhas sugeridas pelo EstágioAI me deram ritmo. Consegui duas entrevistas na mesma semana.' }
]

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-280px] mx-auto h-[520px] w-[520px] rounded-full bg-[#6FFFC7]/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#02161F] sm:text-5xl">
            Histórias reais da{' '}
            <span className="text-[#0E8F66]">nossa comunidade</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Mais de 10 mil estudantes já avançaram processos com o EstágioAI. Veja como a experiência mudou o jogo.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/70 to-transparent" />

          <div className="flex gap-6 py-6 animate-marquee-left">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className="flex w-[280px] flex-shrink-0 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_60px_-50px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 sm:w-[320px] md:w-[360px]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#02161F] text-lg font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#02161F]">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{testimonial.course} · {testimonial.university}</p>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-slate-600">“{testimonial.quote}”</blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

