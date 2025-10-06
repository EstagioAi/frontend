import React from "react";
import { SmartLink } from "@/components/ui/smart-link.jsx";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section 
      className="relative overflow-hidden section-spacing"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0A0A0A 100%)'
      }}
    >
      {/* Decorative elements */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1/3 opacity-20"
        style={{
          background: 'radial-gradient(circle at 0% 50%, rgba(130, 247, 179, 0.15) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-full w-1/3 opacity-20"
        style={{
          background: 'radial-gradient(circle at 100% 50%, rgba(130, 247, 179, 0.15) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      {/* Subtle pattern overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2382f7b3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-redesign">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-ds/10 border border-green-ds/20 px-4 py-2 text-sm font-semibold text-green-ds">
            <div className="h-2 w-2 rounded-full bg-green-ds animate-pulse"></div>
            Junte-se a milhares de estudantes
          </div>

          {/* Heading */}
          <h2 
            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-[48px] mb-6"
            style={{ color: '#FFFFFF', lineHeight: '1.1' }}
          >
            Pronto para encontrar seu{' '}
            <span className="relative inline-block">
              <span 
                className="relative z-10"
                style={{ color: '#82f7b3' }}
              >
                estágio ideal?
              </span>
              <div
                className="absolute bottom-2 left-0 h-3 w-full"
                style={{ background: 'rgba(130, 247, 179, 0.2)' }}
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Description */}
          <p 
            className="mx-auto max-w-2xl text-lg leading-relaxed mb-12"
            style={{ color: '#B0B0B0', lineHeight: '1.7' }}
          >
            Conecte-se às melhores oportunidades do mercado. Comece agora mesmo sua jornada profissional com o EstágioAI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SmartLink to="/register">
              <button
                className="group inline-flex items-center justify-center gap-3 px-12 py-4 text-lg font-semibold text-black bg-green-ds rounded-lg transition-all duration-300 hover:bg-[#4AC77D] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(130,247,179,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-ds focus-visible:ring-offset-2 focus-visible:ring-offset-black min-w-[240px]"
              >
                Começar Gratuitamente
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </SmartLink>

            <SmartLink to="/sobre">
              <button
                className="group inline-flex items-center justify-center gap-3 px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 border-2 border-white/10 hover:border-green-ds/50 hover:bg-green-ds/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black min-w-[240px]"
                style={{ color: '#FFFFFF' }}
              >
                Saiba Mais
              </button>
            </SmartLink>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-ds mb-2">5k+</div>
                <div className="text-sm text-gray-400">Estudantes ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-ds mb-2">200+</div>
                <div className="text-sm text-gray-400">Empresas parceiras</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-ds mb-2">2.5k+</div>
                <div className="text-sm text-gray-400">Vagas publicadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-ds mb-2">92%</div>
                <div className="text-sm text-gray-400">Taxa de satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
