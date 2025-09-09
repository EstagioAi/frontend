import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { HelpCircle } from 'lucide-react'

const faqs = [
  { q: 'Como encontro vagas compatíveis com meu curso?', a: 'Use os filtros por área, localização e modalidade. Em breve, você poderá conectar seu perfil para recomendações por IA.' },
  { q: 'O EstagioAI é pago?', a: 'Para estudantes, o acesso ao buscador e recursos básicos é gratuito.' },
  { q: 'Como acompanhar minhas candidaturas?', a: 'Crie sua conta e salve as vagas favoritas. Uma área de acompanhamento estará disponível no MVP.' },
  { q: 'Como falo com o suporte?', a: 'Envie um email para suporte@estagio.ai. Chat e base de conhecimento expandida chegarão em breve.' }
]

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">PARA UNIVERSITÁRIOS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Central de ajuda</h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Perguntas frequentes para você começar com confiança.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6 grid gap-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-md bg-emerald-100 text-emerald-600 grid place-items-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.q}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HelpCenter

