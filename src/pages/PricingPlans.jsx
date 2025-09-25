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

      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">PARA EMPRESAS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Planos e preços</h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Escolha o melhor para seu momento e tamanho de time.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border ${p.featured ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-gray-200'} bg-white p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                  <p className="text-xs text-gray-500">{p.highlight}</p>
                </div>
                <Shield className={`w-5 h-5 ${p.featured ? 'text-emerald-600' : 'text-gray-300'}`} />
              </div>
              <div className="text-2xl font-extrabold mt-4">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> {f}</li>
                ))}
              </ul>
              <SmartLink to="/contato-comercial" className={`mt-5 inline-flex items-center justify-center w-full h-11 rounded-xl font-semibold ${p.featured ? 'bg-[#01E297] text-black hover:brightness-95' : 'border border-gray-200 text-gray-800 hover:bg-gray-50'}`}>Falar com vendas</SmartLink>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PricingPlans

