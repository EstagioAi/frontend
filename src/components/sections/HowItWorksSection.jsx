import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Crie seu perfil',
      description: 'Cadastre-se gratuitamente e complete seu perfil com suas habilidades e experiências',
      icon: '👤',
      details: [
        'Cadastro em menos de 2 minutos',
        'Adicione suas habilidades',
        'Faça upload do seu currículo'
      ]
    },
    {
      number: '02',
      title: 'Encontre vagas',
      description: 'Navegue por milhares de oportunidades ou deixe nosso algoritmo encontrar as melhores para você',
      icon: '🔍',
      details: [
        'Filtros avançados de busca',
        'Recomendações personalizadas',
        'Alertas de novas vagas'
      ]
    },
    {
      number: '03',
      title: 'Candidate-se',
      description: 'Envie sua candidatura com um clique e acompanhe o status em tempo real',
      icon: '📝',
      details: [
        'Candidatura com 1 clique',
        'Acompanhamento em tempo real',
        'Feedback das empresas'
      ]
    },
    {
      number: '04',
      title: 'Comece seu estágio',
      description: 'Receba propostas, negocie e inicie sua jornada profissional',
      icon: '🚀',
      details: [
        'Receba múltiplas propostas',
        'Negocie diretamente',
        'Suporte durante todo processo'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white-ds relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(130, 247, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(130, 247, 179, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-base badge-filled text-sm mb-4">
            Como funciona
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black-ds mb-6">
            Do cadastro ao{' '}
            <span className="text-green-ds">primeiro dia</span> de estágio
          </h2>
          <p className="text-xl text-black-70">
            Um processo simples e transparente em 4 passos
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-block">
                  <span className="text-6xl font-bold text-green-10">
                    {step.number}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-5xl">{step.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-black-ds mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-black-70 mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-ds flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-black-ds">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="card-base card-glow bg-gradient-to-br from-green-05 to-white-ds p-12">
                  <div className="aspect-square rounded-2xl bg-white-ds shadow-lg flex items-center justify-center">
                    <div className="text-9xl">{step.icon}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-green-10 via-green-ds to-green-10 transform -translate-x-1/2"></div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

