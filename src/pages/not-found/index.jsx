import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Briefcase } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(130, 247, 179, 0.3) 0%, transparent 70%)'
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* 404 Number - Simples e Clean */}
        <div className="mb-8">
          <h1 
            className="text-[140px] sm:text-[180px] lg:text-[200px] font-black leading-none tracking-tight"
            style={{ 
              color: '#E8E8E8',
              WebkitTextStroke: '2px #82f7b3'
            }}
          >
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Ops! Página não encontrada
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Parece que você se perdeu no caminho. A página que você procura não existe ou foi movida para outro lugar.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-green-ds text-black font-semibold rounded-lg transition-all duration-200 hover:bg-green-ds/90 hover:shadow-lg hover:-translate-y-0.5 min-w-[180px] justify-center"
          >
            <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
            Voltar ao Início
          </Link>
          
          <Link
            to="/vagas"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg border-2 border-gray-200 transition-all duration-200 hover:border-green-ds hover:bg-gray-50 hover:-translate-y-0.5 min-w-[180px] justify-center"
          >
            <Briefcase className="h-5 w-5 transition-transform group-hover:scale-110" />
            Ver Vagas
          </Link>
        </div>

        {/* Quick links - Mais limpo */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Links Úteis
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/sobre"
              className="text-sm text-gray-600 hover:text-green-ds transition-colors duration-200"
            >
              Sobre Nós
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/empresas"
              className="text-sm text-gray-600 hover:text-green-ds transition-colors duration-200"
            >
              Para Empresas
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/blog"
              className="text-sm text-gray-600 hover:text-green-ds transition-colors duration-200"
            >
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/contato"
              className="text-sm text-gray-600 hover:text-green-ds transition-colors duration-200"
            >
              Contato
            </Link>
          </div>
        </div>

        {/* Back link */}
        <button
          onClick={() => window.history.back()}
          className="group inline-flex items-center gap-2 mt-6 text-sm text-gray-500 hover:text-green-ds transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Voltar à página anterior</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
