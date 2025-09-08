import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana",
      course: "Engenharia",
      university: "UNIFEI",
      avatar: "A",
      quote:
        "A falta de feedback é o que mais me frustra. Você envia currículo e fica no vazio, sem saber se foi ao menos visualizado.",
    },
    {
      name: "Carlos",
      course: "Computação",
      university: "USP",
      avatar: "C",
      quote:
        "Seria incrível ter transparência no processo. Saber quantos candidatos tem, em que etapa estou, qual minha posição.",
    },
    {
      name: "Maria",
      course: "Administração",
      university: "UFMG",
      avatar: "M",
      quote:
        "As plataformas atuais são muito confusas. Preciso usar 5 sites diferentes e ainda assim não encontro vagas boas.",
    },
    {
      name: "Lucas",
      course: "Sistemas de Informação",
      university: "UFSC",
      avatar: "L",
      quote:
        "Quero saber onde estou no processo e quando devo me preparar para entrevista.",
    },
    {
      name: "Beatriz",
      course: "Computação",
      university: "Unicamp",
      avatar: "B",
      quote:
        "Ter todas as vagas num só lugar e com filtros úteis economiza muito tempo.",
    },
    {
      name: "Júlia",
      course: "Direito",
      university: "UnB",
      avatar: "J",
      quote:
        "Saber se a vaga é confiável faz toda a diferença para eu me candidatar.",
    },
    {
      name: "Rafael",
      course: "Economia",
      university: "UFRGS",
      avatar: "R",
      quote:
        "Receber notificação quando o status muda evita ficar checando toda hora.",
    },
    {
      name: "Larissa",
      course: "Design",
      university: "PUC-Rio",
      avatar: "L",
      quote:
        "Processos foram mais claros com feedback obrigatório. Parei de ficar no escuro.",
    },
    {
      name: "Pedro",
      course: "Engenharia de Produção",
      university: "UFRJ",
      avatar: "P",
      quote:
        "O match por afinidade deixou as recomendações realmente relevantes.",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  return (
    <section className="section bg-ink-tint">
      <div className="max-w-7xl mx-auto">
        <div className="badge-dark inline-flex mx-auto mb-3 w-fit">
          Depoimentos
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
            O que os universitários{" "}
            <span className="text-[#01E297]">estão dizendo</span>
          </h2>
          <p className="text-lg text-gray-600">
            Depoimentos reais da nossa pesquisa de campo
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="min-w-[85%] sm:min-w-[55%] lg:min-w-[33.3333%]"
                >
                  <div className="muted-card p-6 md:p-8 hover:bg-slate-50 transition-colors h-full">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-11 h-11 md:w-12 md:h-12 bg-[#092116] rounded-full flex items-center justify-center text-white font-bold">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-black">
                          {t.name}, {t.course}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t.university}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic leading-relaxed">
                      “{t.quote}”
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="h-10 w-10 rounded-full border subtle-border text-slate-700 hover:bg-slate-50"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="h-10 w-10 rounded-full border subtle-border text-slate-700 hover:bg-slate-50"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
