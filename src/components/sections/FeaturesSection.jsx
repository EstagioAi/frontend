import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Match Inteligente',
      description: 'Algoritmo avançado que conecta você com vagas perfeitas para seu perfil',
      color: 'green'
    },
    {
      icon: '⚡',
      title: 'Processo Rápido',
      description: 'Candidate-se em segundos e receba respostas em tempo real',
      color: 'green'
    },
    {
      icon: '🔒',
      title: 'Seguro e Confiável',
      description: 'Suas informações protegidas com criptografia de ponta',
      color: 'green'
    },
    {
      icon: '📊',
      title: 'Dashboard Completo',
      description: 'Acompanhe todas as suas candidaturas em um só lugar',
      color: 'green'
    },
    {
      icon: '🤝',
      title: 'Empresas Verificadas',
      description: 'Todas as empresas são verificadas e aprovadas',
      color: 'green'
    },
    {
      icon: '💬',
      title: 'Suporte 24/7',
      description: 'Equipe sempre disponível para ajudar você',
      color: 'green'
    }
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-05 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-05 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-base badge-outline text-sm mb-4">
            Por que escolher a gente?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black-ds mb-6">
            Tudo que você precisa para{' '}
            <span className="text-green-ds">decolar</span> sua carreira
          </h2>
          <p className="text-xl text-black-70">
            Ferramentas poderosas e recursos exclusivos para estudantes e empresas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-base card-interactive hover-card-green group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon text-5xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black-ds mb-3 group-hover:text-green-ds transition-colors">
                {feature.title}
              </h3>
              <p className="text-black-70 leading-relaxed">
                {feature.description}
              </p>
              <div className="card-arrow mt-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-base btn-primary btn-shimmer btn-lg">
            Explorar Todas as Funcionalidades
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

