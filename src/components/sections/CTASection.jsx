import React from 'react';

const CTASection = () => {
  return (
    <section className="py-24 bg-black-ds relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-ds opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-ds opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(130, 247, 179, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(130, 247, 179, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="badge-base badge-filled text-sm">
              🚀 Comece Hoje Mesmo
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white-ds mb-6">
            Pronto para encontrar seu{' '}
            <span className="text-green-ds relative inline-block">
              estágio ideal
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#82f7b3" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            ?
          </h2>

          {/* Description */}
          <p className="text-xl text-white-70 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já transformaram suas carreiras. 
            Cadastre-se gratuitamente e comece sua jornada hoje.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="btn-base btn-secondary btn-glow btn-pulse btn-lg">
              Criar Conta Grátis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="btn-base btn-outline btn-lg text-white border-white-40 hover:border-green-ds hover:text-green-ds">
              Falar com Vendas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white-70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-ds" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Grátis para sempre</span>
            </div>
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
              <span>Cadastro em 2 minutos</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white-10">
            <div>
              <div className="text-4xl font-bold text-green-ds mb-2">10k+</div>
              <div className="text-sm text-white-70">Estudantes Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-ds mb-2">500+</div>
              <div className="text-sm text-white-70">Empresas Parceiras</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-ds mb-2">95%</div>
              <div className="text-sm text-white-70">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

