import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Como funciona a plataforma?',
      answer: 'Nossa plataforma conecta estudantes com empresas de forma inteligente. Você cria seu perfil, nosso algoritmo encontra as melhores vagas para você, e você pode se candidatar com apenas um clique. Simples assim!'
    },
    {
      question: 'É realmente grátis para estudantes?',
      answer: 'Sim! O plano básico é 100% gratuito para sempre. Você tem acesso a todas as vagas, pode se candidatar ilimitadamente e usar nosso dashboard. O plano Pro oferece recursos extras como perfil em destaque e análise de currículo por IA.'
    },
    {
      question: 'Como são selecionadas as vagas recomendadas?',
      answer: 'Usamos inteligência artificial para analisar seu perfil, habilidades, experiências e preferências. Nosso algoritmo compara essas informações com os requisitos das vagas e apresenta apenas as oportunidades mais relevantes para você.'
    },
    {
      question: 'Quanto tempo leva para conseguir um estágio?',
      answer: 'Em média, nossos estudantes recebem a primeira resposta em 3-5 dias e conseguem um estágio em 2-4 semanas. Mas isso varia de acordo com seu perfil, área de atuação e disponibilidade.'
    },
    {
      question: 'Posso me candidatar a quantas vagas?',
      answer: 'Sim! Não há limite de candidaturas. Você pode se candidatar a quantas vagas quiser, tanto no plano gratuito quanto no Pro. Recomendamos focar em vagas que realmente fazem sentido para seu perfil.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte por email para todos os usuários. Usuários Pro têm acesso a suporte prioritário 24/7 via chat. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou problema.'
    },
    {
      question: 'As empresas são verificadas?',
      answer: 'Sim! Todas as empresas passam por um processo rigoroso de verificação antes de publicar vagas. Checamos CNPJ, reputação no mercado e histórico de contratações para garantir oportunidades legítimas.'
    },
    {
      question: 'Posso cancelar minha assinatura Pro a qualquer momento?',
      answer: 'Sim! Você pode cancelar sua assinatura Pro a qualquer momento, sem multas ou taxas. Você continuará tendo acesso aos recursos Pro até o final do período pago.'
    }
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(130, 247, 179, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(130, 247, 179, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Header */}
          <div className="lg:sticky lg:top-24">
            <span className="badge-base badge-outline text-sm mb-4">
              Perguntas Frequentes
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black-ds mb-6">
              Dúvidas?{' '}
              <span className="text-green-ds">Respondemos</span> aqui
            </h2>
            <p className="text-xl text-black-70 mb-8">
              Tudo que você precisa saber sobre a plataforma
            </p>

            <div className="card-base bg-green-05 border-green-ds">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h3 className="text-lg font-bold text-black-ds mb-2">
                    Ainda tem dúvidas?
                  </h3>
                  <p className="text-black-70 mb-4">
                    Nossa equipe está pronta para ajudar você
                  </p>
                  <button className="btn-base btn-secondary btn-sm">
                    Falar com Suporte
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-base hover:border-green-ds transition-all"
              >
                <button
                  className="accordion-trigger w-full text-left"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-black-ds">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-green-ds flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all ${
                    openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-black-70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

