import { Star, Accessibility, HeartPulse } from 'lucide-react'
import React from 'react'

const SolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#092116] text-white text-sm font-medium mb-6">
            Nossa solução inteligente
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black">
            Criamos a resposta para cada{' '}
            <span className="text-[#01E297]">problema identificado</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Desenvolvemos funcionalidades revolucionárias baseadas nos feedbacks
            diretos dos universitários para eliminar cada frustração do processo de
            busca por estágios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#092116]">
              Recomendações Personalizadas
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Algoritmo de IA que analisa seu perfil universitário, histórico de aprovações 
              da sua instituição e calcula suas chances reais em cada vaga.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#01E297] rounded-full"></div>
                <span className="text-gray-700">Filtros inteligentes por disponibilidade e modalidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#01E297] rounded-full"></div>
                <span className="text-gray-700">Score de afinidade visual com cores intuitivas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#01E297] rounded-full"></div>
                <span className="text-gray-700">Histórico de contratações da sua universidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#01E297] rounded-full"></div>
                <span className="text-gray-700">Análise de competitividade em tempo real</span>
              </div>
            </div>
          </div>
          
          {/* Cartão real de vaga (estilo do mock) */}
          <div className="job-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 relative animate-scale-in">
            {/* Barra de afinidade no canto superior direito */}
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '85%', background: 'linear-gradient(90deg,#34d399,#01E297)' }}></div>
            </div>

            {/* Cabeçalho: logo + título + metadados */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="company-logo" style={{ background: '#01E297', color: '#0b0b0b' }}>A</div>
                <div>
                  <h4 className="text-[16px] md:text-lg font-semibold text-gray-900">Senior UI/UX Designer</h4>
                  <div className="text-xs text-gray-500">Adobe • Postado há 2 horas</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[12px] text-gray-500">Afinidade</div>
                <div className="text-sm font-semibold text-emerald-600">85%</div>
              </div>
            </div>

            <div className="my-4 h-px bg-gray-200" />

            {/* Descrição curta */}
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              Na Adobe, criatividade encontra inovação! Procuramos UI/UX Designers experientes e apaixonados por sistemas de design e por melhorar jornadas de usuário.
            </p>

            {/* Rodapé: chips + salário */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700">3y+</span>
                <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700">Full time</span>
                <span className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700">Onsite / LA</span>
                <span className="px-2.5 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 inline-flex items-center gap-1"><Accessibility className="w-3.5 h-3.5"/> Inclusiva (PCD)</span>
                <span className="px-2.5 py-1 rounded-full text-xs bg-rose-50 text-rose-700 inline-flex items-center gap-1"><HeartPulse className="w-3.5 h-3.5"/> Saúde</span>
              </div>
              <div className="text-right whitespace-nowrap">
                <div className="text-sm font-semibold text-gray-900">$10k–13k</div>
                <div className="text-xs text-gray-500">/month</div>
              </div>
            </div>

            {/* Nota de aprovação por universitários (mantida) */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5">
              <Star className="w-4 h-4 text-[#01E297]" />
              <span className="text-xs font-medium text-gray-400 tracking-wide">3 estudantes da UNIFEI foram aprovados aqui nos últimos 6 meses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection

