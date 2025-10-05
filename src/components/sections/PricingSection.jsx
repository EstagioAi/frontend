import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Estudante',
      price: 'Grátis',
      period: 'para sempre',
      description: 'Perfeito para começar sua jornada',
      icon: '🎓',
      popular: false,
      features: [
        'Acesso a todas as vagas',
        'Candidaturas ilimitadas',
        'Dashboard básico',
        'Suporte por email',
        'Notificações de vagas',
        'Perfil público'
      ],
      cta: 'Começar Grátis',
      highlight: false
    },
    {
      name: 'Estudante Pro',
      price: 'R$ 29',
      period: '/mês',
      description: 'Para quem quer se destacar',
      icon: '⭐',
      popular: true,
      features: [
        'Tudo do plano Grátis',
        'Perfil em destaque',
        'Match prioritário',
        'Análise de currículo por IA',
        'Suporte prioritário 24/7',
        'Estatísticas avançadas',
        'Preparação para entrevistas',
        'Certificado de conclusão'
      ],
      cta: 'Começar Teste Grátis',
      highlight: true
    },
    {
      name: 'Empresa',
      price: 'Sob consulta',
      period: '',
      description: 'Soluções para empresas',
      icon: '🏢',
      popular: false,
      features: [
        'Publicação ilimitada de vagas',
        'Acesso ao banco de talentos',
        'Ferramentas de triagem',
        'Dashboard de recrutamento',
        'Gerente de conta dedicado',
        'Integração com ATS',
        'Relatórios personalizados',
        'Branding da empresa'
      ],
      cta: 'Falar com Vendas',
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-white-ds relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-05 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-05 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-base badge-filled text-sm mb-4">
            Planos e Preços
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black-ds mb-6">
            Escolha o plano{' '}
            <span className="text-green-ds">perfeito</span> para você
          </h2>
          <p className="text-xl text-black-70">
            Comece grátis e faça upgrade quando quiser
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-base relative ${
                plan.highlight
                  ? 'card-glow card-border-animated scale-105 lg:scale-110'
                  : 'hover-card-green'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="badge-base badge-filled px-4 py-2 shadow-lg">
                    🔥 Mais Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-4">{plan.icon}</div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-black-ds mb-2">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-black-70 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-green-ds">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-black-70">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full mb-8 ${
                  plan.highlight
                    ? 'btn-base btn-secondary btn-glow btn-md'
                    : 'btn-base btn-outline btn-md'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-4 pt-6 border-t border-black-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-ds flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black-ds text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-black-70 mb-4">
            Todos os planos incluem 14 dias de garantia de reembolso
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-black-70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-ds" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-ds" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-ds" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Suporte dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

