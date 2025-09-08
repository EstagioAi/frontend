import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Search, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Esquerda: título & busca */}
          <div>
            <h1 className="text-[44px] leading-[1.1] md:text-[56px] font-bold text-black mb-5 max-w-2xl">
              Desbloqueie seu potencial com novas oportunidades
            </h1>
            <p className="text-[18px] text-gray-700 mb-8 max-w-xl">
              Conectamos você a milhares de oportunidades de estágio, avaliações
              e às ferramentas que aceleram sua carreira.
            </p>

            {/* Barra de busca */}
            <div className="w-full rounded-2xl border border-gray-200 p-2 shadow-sm">
              <div className="grid md:grid-cols-[1fr_1fr_auto] gap-2">
                <div className="flex items-center gap-2 px-3">
                  <Search className="w-4 h-4 text-gray-500" />
                  <Input
                    placeholder="Cargo ou função"
                    className="h-12 border-0"
                  />
                </div>
                <div className="flex items-center gap-2 px-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <Input placeholder="Localização" className="h-12 border-0" />
                </div>
                <Button className="h-12 px-6 rounded-[12px] bg-[#01E297] text-black font-semibold hover:brightness-95">
                  Buscar Vagas
                </Button>
              </div>
            </div>
          </div>

          {/* Direita: imagem simples */}
          <div className="relative">
            <img
              src="/diverse-students-celebrating-internship-success.png"
              alt="Estudantes"
              className="rounded-2xl border subtle-border soft-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
