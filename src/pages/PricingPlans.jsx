import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { CheckCircle2, Shield } from 'lucide-react'
import { SmartLink } from '@/components/ui/smart-link.jsx'

const plans = [
  {
    name: 'Gratuito', price: 'R$ 0', highlight: 'Para começar', features: [
      '1 vaga ativa', 'Recebimento de candidaturas', 'Página da empresa básica'
    ]
  },
  {
    name: 'Profissional', price: 'R$ 199/mês', highlight: 'Mais agilidade', features: [
      'Até 10 vagas ativas', 'Filtro avançado e triagem', 'Suporte prioritário'
    ], featured: true
  },
  {
    name: 'Enterprise', price: 'Fale com o time', highlight: 'Escala e governança', features: [
      'Vagas ilimitadas', 'SLA dedicado', 'Integrações e SSO'
    ]
  }
]

const PricingPlans = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-b from-white to-[#fae8e0]/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-[#6b6b68] font-semibold">PARA EMPRESAS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#3d3d3a] mt-2">Planos e preços</h1>
            <div className="h-2 w-44 rounded-full bg-[#d97757] my-6" />
            <p className="text-[#6b6b68] text-base md:text-lg">Escolha o melhor para seu momento e tamanho de time.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border ${p.featured ? 'border-[#d97757] ring-2 ring-[rgba(217,119,87,0.15)]' : 'border-[rgba(217,119,87,0.15)]'} bg-white p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#3d3d3a]">{p.name}</h3>
                  <p className="text-xs text-[#6b6b68]">{p.highlight}</p>
                </div>
                <Shield className={`w-5 h-5 ${p.featured ? 'text-[#d97757]' : 'text-[#c8c8c6]'}`} />
              </div>
              <div className="text-2xl font-extrabold text-[#3d3d3a] mt-4">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[#6b6b68]"><CheckCircle2 className="w-4 h-4 text-[#d97757]" /> {f}</li>
                ))}
              </ul>
              <SmartLink to="/contato-comercial" className={`mt-5 inline-flex items-center justify-center w-full h-11 rounded-xl font-semibold transition-all ${p.featured ? 'bg-[#d97757] text-white hover:bg-[#e89b7d]' : 'border-2 border-[#d97757] text-[#d97757] hover:bg-[rgba(217,119,87,0.05)]'}`}>Falar com vendas</SmartLink>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPlans

