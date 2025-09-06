import React from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Sparkles,
  GraduationCap,
  Building,
  TrendingUp,
  Users,
} from "lucide-react";

const SecaoInicial = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background elements - mais sutis para fundo branco */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Morphing shapes - mais sutis */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-neon/10 to-brand-purple/5 animate-morphing opacity-30"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-brand-purple/10 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-tr from-brand-neon/5 to-transparent rounded-full animate-float-reverse opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-purple/15 rounded-full animate-pulse-glow"></div>

        {/* Geometric shapes - mais sutis */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-brand-neon/20 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-brand-purple/15 animate-bounce-subtle"></div>

        {/* Cyber grid - mais sutil */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-4 flex items-center justify-center space-x-2 animate-bounce-subtle">
            <Sparkles className="w-6 h-6 text-brand-neon" />
            <span className="text-brand-neon font-medium tracking-wide uppercase text-sm">
              De universitários para universitários
            </span>
            <Sparkles className="w-6 h-6 text-brand-purple" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight text-center">
            <span className="block text-black">A busca por estágios</span>
            <span className="text-gradient block animate-gradient-shift bg-gradient-to-r from-brand-neon via-brand-purple to-brand-neon bg-[length:200%_100%]">
              nunca mais será
            </span>
            <span className="inline-block border-r-4 border-brand-neon overflow-hidden text-brand-error animate-pulse">
              demora
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            A primeira plataforma construída especificamente para resolver as
            frustrações dos universitários brasileiros.
            <br />
            <span className="text-brand-neon font-semibold">
              Transparência total
            </span>
            ,
            <span className="text-brand-purple font-semibold">
              {" "}
              feedback garantido
            </span>{" "}
            e
            <span className="text-green-500 font-semibold">
              {" "}
              inteligência artificial
            </span>
            <br />
            revolucionando sua busca por estágios.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group btn-primary text-black hover:scale-105 px-8 py-4 text-lg font-semibold w-full sm:w-auto transition-all duration-300"
            >
              <GraduationCap className="w-6 h-6 mr-3 group-hover:animate-wiggle transition-transform" />
              Quero Encontrar Estágios
            </Button>
            <Button
              size="lg"
              className="group btn-secondary text-white hover:scale-105 px-8 py-4 text-lg font-semibold w-full sm:w-auto transition-all duration-300"
            >
              <Building className="w-6 h-6 mr-3 group-hover:animate-wiggle transition-transform" />
              Quero Contratar Talentos
            </Button>
          </div>

          {/* Hero Stats */}
          <div
            id="hero-stats"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="glassmorphism-strong rounded-3xl p-8 card-hover relative group">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <TrendingUp className="w-8 h-8 text-brand-neon" />
              </div>
              <div className="text-5xl font-bold text-brand-neon mb-3 animate-scale-in">
                80%
              </div>
              <p className="text-gray-600 text-lg font-medium">
                dos estudantes relatam alta frustração na busca por estágios
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-neon to-transparent rounded-full"></div>
            </div>

            <div className="glassmorphism-strong rounded-3xl p-8 card-hover relative group delay-200">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <div className="text-5xl font-bold text-brand-purple mb-3 animate-scale-in">
                65%
              </div>
              <p className="text-gray-600 text-lg font-medium">
                demonstraram interesse em testar nossa solução
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-transparent rounded-full"></div>
            </div>

            <div className="glassmorphism-strong rounded-3xl p-8 card-hover relative group delay-400">
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <GraduationCap className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-5xl font-bold text-green-500 mb-3 animate-scale-in">
                26
              </div>
              <p className="text-gray-600 text-lg font-medium">
                universitários participaram da nossa pesquisa
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoInicial;
