import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { SmartLink } from "@/components/ui/smart-link.jsx";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#020F1A] py-28 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(1,226,151,0.16),rgba(2,15,26,0.95))]" />
        <div className="absolute -bottom-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#0B3B2A]/70 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/80">
          Liberamos convites a cada nova turma
        </div>
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Prepare-se para a próxima leva de{' '}
          <span className="text-[#6FFFC7]">oportunidades</span>
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Cadastre-se para receber prioridade na abertura de vagas e acesse materiais exclusivos para acelerar sua jornada.
        </p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_-60px_rgba(24,255,176,0.5)] backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Para estudantes</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Garanta seu acesso antecipado</h3>
            <p className="mt-4 text-sm text-white/70">
              Receba convites para mentorias, acesso ao radar semanal e vagas com alta afinidade assim que abrirem.
            </p>
            <SmartLink to="/register">
              <Button
                size="lg"
                className="mt-6 h-12 w-full rounded-full bg-[#6FFFC7] text-[#022017] hover:bg-[#58E5B4] hover:text-[#022017]"
              >
                Criar minha conta
              </Button>
            </SmartLink>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_-60px_rgba(24,255,176,0.5)] backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Para empresas</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Construa seu pipeline com IA</h3>
            <p className="mt-4 text-sm text-white/70">
              Acesse o portal de empresas, publique vagas padronizadas e tenha feedback obrigatório integrado.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <SmartLink to="/contato-comercial">
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full bg-white text-[#02161F] hover:bg-white/90 hover:text-[#02161F]"
                >
                  Falar com time
                </Button>
              </SmartLink>
              <SmartLink to="/" forceSubdomain="empresas">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-full border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10 hover:text-white/90"
                >
                  Acessar portal
                </Button>
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
