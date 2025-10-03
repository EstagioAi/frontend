import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { SmartLink } from "@/components/ui/smart-link.jsx";
import { Sparkles, Rocket, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-28" style={{ background: 'var(--bg-secondary)' }}>
      {/* Background decorativo criativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(61, 61, 58, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(61, 61, 58, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Gradientes e blobs sutis */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(250, 249, 245, 0.5), rgba(255, 255, 255, 0.3), rgba(245, 244, 237, 0.6))' }} />
        <div className="absolute -bottom-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[160px]" style={{ background: 'radial-gradient(circle, rgba(217, 119, 87, 0.15), transparent)' }} />
        <div className="absolute -top-20 right-[-100px] h-[300px] w-[300px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(250, 249, 245, 0.8), transparent)' }} />

        {/* Elementos decorativos */}
        <div className="absolute left-20 top-20 h-32 w-32 rounded-full" style={{ border: '1px solid rgba(217, 119, 87, 0.2)' }} />
        <div className="absolute bottom-32 right-32 h-24 w-24 rounded-full" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }} />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Badge com ícone */}
        <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold" style={{ border: '1px solid rgba(217, 119, 87, 0.3)', background: 'rgba(217, 119, 87, 0.1)', color: '#d97757' }}>
          <Sparkles className="h-4 w-4" />
          Liberamos convites a cada nova turma
        </div>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: '#3d3d3a' }}>
          Prepare-se para a próxima leva de{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #d97757, #d97757)' }}>
            oportunidades
          </span>
        </h2>

        <p className="mt-5 text-lg" style={{ color: '#3d3d3a', opacity: 0.75 }}>
          Cadastre-se para receber prioridade na abertura de vagas e acesse materiais exclusivos para acelerar sua jornada.
        </p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {/* Card Estudantes */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ border: '1px solid rgba(217, 119, 87, 0.15)', boxShadow: '0 20px 50px -30px rgba(61, 61, 58, 0.15)' }}>
            {/* Glow effect on hover */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'rgba(217, 119, 87, 0.15)' }} />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: '#d97757' }}>Para estudantes</p>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'rgba(217, 119, 87, 0.1)' }}>
                  <Rocket className="h-6 w-6" style={{ color: '#d97757' }} />
                </div>
              </div>

              <h3 className="text-2xl font-semibold" style={{ color: '#3d3d3a' }}>Garanta seu acesso antecipado</h3>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#3d3d3a', opacity: 0.7 }}>
                Receba convites para mentorias, acesso ao radar semanal e vagas com alta afinidade assim que abrirem.
              </p>

              <SmartLink to="/register">
                <Button
                  variant="cta"
                  size="lg"
                  className="mt-6 h-12 w-full rounded-full text-white transition-all"
                >
                  Criar minha conta
                </Button>
              </SmartLink>
            </div>
          </div>

          {/* Card Empresas */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ border: '1px solid rgba(217, 119, 87, 0.15)', boxShadow: '0 20px 50px -30px rgba(61, 61, 58, 0.15)' }}>
            {/* Glow effect on hover */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'rgba(217, 119, 87, 0.12)' }} />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: '#d97757' }}>Para empresas</p>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'rgba(217, 119, 87, 0.1)' }}>
                  <Users className="h-6 w-6" style={{ color: '#d97757' }} />
                </div>
              </div>

              <h3 className="text-2xl font-semibold" style={{ color: '#3d3d3a' }}>Construa seu pipeline com IA</h3>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#3d3d3a', opacity: 0.7 }}>
                Acesse o portal de empresas, publique vagas padronizadas e tenha feedback obrigatório integrado.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <SmartLink to="/contato-comercial">
                  <Button
                    size="lg"
                    className="h-12 w-full rounded-full text-white transition-all"
                    style={{ background: '#3d3d3a', boxShadow: '0 8px 24px rgba(217, 119, 87, 0.3)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(217, 119, 87, 0.4)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(217, 119, 87, 0.3)' }}
                  >
                    Falar com time
                  </Button>
                </SmartLink>
                <SmartLink to="/" forceSubdomain="empresas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-full rounded-full bg-transparent transition-all hover:bg-opacity-5"
                    style={{ border: '2px solid #3d3d3a', color: '#3d3d3a' }}
                  >
                    Acessar portal
                  </Button>
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
