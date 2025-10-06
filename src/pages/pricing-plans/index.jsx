import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { CheckCircle2, Shield, Star } from 'lucide-react'
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
    <div className="min-h-screen bg-primary-ds">
      <Navigation />

      <main id="main-content">
        <section className="bg-primary-ds pt-20 pb-16 sm:pt-24 lg:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-black-50">PARA EMPRESAS</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary-ds mt-2">Planos e preços</h1>
            <div className="h-1 w-1 rounded-full bg-green-ds my-6" />
            <p className="text-lg leading-relaxed text-black-70">Escolha o melhor para seu momento e tamanho de time.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`group rounded-2xl border-2 ${p.featured ? 'border-green-ds shadow-xl' : 'border-black-10'} bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-primary-ds">{p.name}</h3>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full border-2 border-green-ds bg-green-ds/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-ds">
                        <Star className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-black-50 mt-1">{p.highlight}</p>
                </div>
                <Shield className={`w-5 h-5 ${p.featured ? 'text-green-ds' : 'text-black-30'}`} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-ds mt-6">{p.price}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-black-70">
                    <CheckCircle2 className="w-4 h-4 text-green-ds flex-shrink-0" /> 
                    {f}
                  </li>
                ))}
              </ul>
              <SmartLink 
                to="/contato-comercial" 
                className={`mt-8 inline-flex items-center justify-center w-full rounded-lg px-6 py-3 text-sm font-bold transition-all duration-200 hover:shadow-lg ${
                  p.featured 
                    ? 'bg-black-ds text-white-ds hover:bg-black-hover-ds' 
                    : 'border-2 border-black-10 bg-white-ds text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds'
                }`}
              >
                Falar com vendas
              </SmartLink>
            </div>
          ))}
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}

export default PricingPlans

