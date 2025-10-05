import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black-ds">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(130, 247, 179, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-green-ds opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-ds opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block">
              <span className="badge-base badge-filled text-xs">
                🚀 Novo na plataforma
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Encontre seu estágio{' '}
              <span className="text-green-ds">ideal</span> com{' '}
              <span className="relative inline-block">
                velocidade
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#82f7b3" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-white-70 max-w-xl">
              Conectamos estudantes talentosos com as melhores oportunidades de estágio. 
              Sua carreira começa aqui.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-base btn-secondary btn-glow btn-lg">
                Começar Agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="btn-base btn-outline btn-lg text-white border-white-40 hover:border-green-ds">
                Ver Como Funciona
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white-10">
              <div>
                <div className="text-3xl font-bold text-green-ds">10k+</div>
                <div className="text-sm text-white-70">Estudantes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-ds">500+</div>
                <div className="text-sm text-white-70">Empresas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-ds">95%</div>
                <div className="text-sm text-white-70">Taxa de Sucesso</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="card-base card-glow bg-white-ds p-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-10 to-green-05 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-green-ds rounded-full flex items-center justify-center text-6xl">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold text-black-ds">Seu Futuro Aguarda</h3>
                  <p className="text-black-70">Milhares de oportunidades disponíveis</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 card-base bg-white-ds p-4 shadow-xl animate-float-y">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-10 rounded-full flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div>
                  <div className="font-semibold text-black-ds">Aprovado!</div>
                  <div className="text-sm text-black-70">Nova vaga disponível</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 card-base bg-white-ds p-4 shadow-xl animate-float-y" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-10 rounded-full flex items-center justify-center text-2xl">
                  💼
                </div>
                <div>
                  <div className="font-semibold text-black-ds">Tech Corp</div>
                  <div className="text-sm text-black-70">Vaga de Desenvolvedor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-green-ds" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

