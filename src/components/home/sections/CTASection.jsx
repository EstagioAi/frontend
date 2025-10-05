import React from "react";
import { SmartLink } from "@/components/ui/smart-link.jsx";
import { Sparkles, Rocket, Users } from "lucide-react";
import { TextHighlight } from "@/components/ui/text-highlight.jsx";
import BackgroundShapes from "@/components/ui/background-shapes.jsx";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-ds py-28">
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="section2"
        opacity={0.22}
        color="#82f7b3"
        accentColor="rgba(17, 94, 89, 0.24)"
        accentOpacity={0.16}
        className="opacity-90"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.2}
        color="rgba(130, 247, 179, 0.95)"
        accentColor="rgba(203, 213, 225, 0.5)"
        accentOpacity={0.14}
        blendMode="normal"
        className="opacity-85"
      />

  <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Badge com ícone */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-30 bg-green-ds/10 px-4 py-2 text-xs font-semibold text-primary-ds uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5 text-green-ds" />
          Liberamos convites a cada nova turma
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-ds sm:text-4xl lg:text-5xl">
          Prepare-se para a próxima leva de{' '}
          <TextHighlight variant="circle" className="text-primary-ds">
            oportunidades
          </TextHighlight>
        </h2>

        <p className="mt-5 text-base leading-relaxed text-black-70 sm:text-lg">
          Cadastre-se para receber prioridade na abertura de vagas e acesse materiais exclusivos para acelerar sua jornada.
        </p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {/* Card Estudantes */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
            {/* Glow effect on hover */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-ds/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-black-50">Para estudantes</p>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-ds/10">
                  <Rocket className="h-5 w-5 text-green-ds" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-primary-ds">Garanta seu acesso antecipado</h3>
              <p className="mt-3 text-sm leading-relaxed text-black-70">
                Receba convites para mentorias, acesso ao radar semanal e vagas com alta afinidade assim que abrirem.
              </p>

              <SmartLink to="/register">
                <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg focus:ring-4 focus:ring-green-20">
                  Criar minha conta
                </button>
              </SmartLink>
            </div>
          </div>

          {/* Card Empresas */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
            {/* Glow effect on hover */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-ds/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-black-50">Para empresas</p>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-ds/10">
                  <Users className="h-5 w-5 text-green-ds" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-primary-ds">Construa seu pipeline com IA</h3>
              <p className="mt-3 text-sm leading-relaxed text-black-70">
                Acesse o portal de empresas, publique vagas padronizadas e tenha feedback obrigatório integrado.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <SmartLink to="/contato-comercial">
                  <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg focus:ring-4 focus:ring-green-20">
                    Falar com time
                  </button>
                </SmartLink>
                <SmartLink to="/" forceSubdomain="empresas">
                  <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-black-10 bg-transparent px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:border-green-ds hover:bg-green-ds/10 focus:ring-4 focus:ring-green-20">
                    Acessar portal
                  </button>
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
