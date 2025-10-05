import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: '10.000+',
      label: 'Estudantes Cadastrados',
      icon: '👨‍🎓',
      description: 'Talentos prontos para começar'
    },
    {
      value: '500+',
      label: 'Empresas Parceiras',
      icon: '🏢',
      description: 'Das melhores do mercado'
    },
    {
      value: '5.000+',
      label: 'Vagas Publicadas',
      icon: '💼',
      description: 'Novas oportunidades todo dia'
    },
    {
      value: '95%',
      label: 'Taxa de Satisfação',
      icon: '⭐',
      description: 'Estudantes e empresas felizes'
    }
  ];

  return (
    <section className="py-24 bg-black-ds relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-ds opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-ds opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-base badge-filled text-sm mb-4">
            Números que impressionam
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white-ds mb-6">
            Crescendo{' '}
            <span className="text-green-ds">exponencialmente</span>
          </h2>
          <p className="text-xl text-white-70">
            Milhares de estudantes e empresas já confiam na nossa plataforma
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-base bg-white-05 border-white-10 hover:border-green-ds group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-green-ds mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white-ds mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-white-70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-10 text-black-ds px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-green-ds" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Atualizado em tempo real</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

