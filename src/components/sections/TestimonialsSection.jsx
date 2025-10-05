import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Estudante de Engenharia',
      company: 'Contratada pela Tech Corp',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Consegui meu estágio dos sonhos em menos de 2 semanas! A plataforma é intuitiva e o suporte é excepcional.',
      highlight: 'Processo super rápido'
    },
    {
      name: 'Carlos Santos',
      role: 'Estudante de Design',
      company: 'Contratado pela Creative Studio',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'As recomendações de vagas são perfeitas para meu perfil. Recebi 5 propostas em 1 semana!',
      highlight: '5 propostas em 1 semana'
    },
    {
      name: 'Maria Oliveira',
      role: 'Estudante de Marketing',
      company: 'Contratada pela Brand Agency',
      avatar: '👩‍💼',
      rating: 5,
      text: 'A melhor plataforma de estágios que já usei. Interface moderna e processo transparente do início ao fim.',
      highlight: 'Interface incrível'
    },
    {
      name: 'João Pedro',
      role: 'Estudante de TI',
      company: 'Contratado pela StartupXYZ',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Encontrei uma startup incrível que valoriza meu potencial. Gratidão eterna a essa plataforma!',
      highlight: 'Match perfeito'
    },
    {
      name: 'Beatriz Costa',
      role: 'Estudante de Administração',
      company: 'Contratada pela Finance Co',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'O dashboard é completo e me ajudou a organizar todas as minhas candidaturas. Recomendo muito!',
      highlight: 'Super organizado'
    },
    {
      name: 'Lucas Ferreira',
      role: 'Estudante de Dados',
      company: 'Contratado pela Data Labs',
      avatar: '👨‍🔬',
      rating: 5,
      text: 'Algoritmo de match é impressionante! Só recebi vagas que fazem sentido para meu perfil.',
      highlight: 'Match inteligente'
    }
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(130, 247, 179, 0.2) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-base badge-outline text-sm mb-4">
            Depoimentos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black-ds mb-6">
            Veja o que nossos{' '}
            <span className="text-green-ds">estudantes</span> dizem
          </h2>
          <p className="text-xl text-black-70">
            Histórias reais de quem transformou sua carreira conosco
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-base card-shimmer hover-card-green group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-ds" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-black-ds leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="mb-6">
                <span className="badge-base badge-filled text-xs">
                  ✨ {testimonial.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-black-10">
                <div className="w-12 h-12 bg-green-10 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-black-ds">{testimonial.name}</div>
                  <div className="text-sm text-black-70">{testimonial.role}</div>
                  <div className="text-xs text-green-ds font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-black-70 mb-6">
            Junte-se a milhares de estudantes que já encontraram seu estágio ideal
          </p>
          <button className="btn-base btn-secondary btn-glow btn-pulse btn-lg">
            Começar Minha Jornada
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

