import React, { useState } from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { HelpCircle, Search, Home, ChevronRight } from 'lucide-react'

const faqs = [
  { q: 'Como encontro vagas compatíveis com meu curso?', a: 'Use os filtros por área, localização e modalidade. Em breve, você poderá conectar seu perfil para recomendações por IA.' },
  { q: 'O EstagioAI é pago?', a: 'Para estudantes, o acesso ao buscador e recursos básicos é gratuito.' },
  { q: 'Como acompanhar minhas candidaturas?', a: 'Crie sua conta e salve as vagas favoritas. Uma área de acompanhamento estará disponível no MVP.' },
  { q: 'Como falo com o suporte?', a: 'Envie um email para suporte@estagio.ai. Chat e base de conhecimento expandida chegarão em breve.' }
]

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-primary-ds">
      <Navigation />
      
      <main id="main-content">

      {/* Breadcrumb */}
      <section className="bg-primary-ds pt-20 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-black-50">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary-ds">Central de ajuda</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-primary-ds pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-black-50">PARA UNIVERSITÁRIOS</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary-ds mt-2">Central de ajuda</h1>
            <div className="h-1 w-1 rounded-full bg-green-ds my-6" />
            <p className="text-lg leading-relaxed text-black-70">Perguntas frequentes para você começar com confiança.</p>
            
            {/* Search Input */}
            <div className="mt-8 relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-black-40" />
              </div>
              <input
                type="search"
                placeholder="Buscar por dúvidas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border-2 border-black-10 bg-white-ds py-3.5 pl-12 pr-4 text-base text-primary-ds placeholder:text-black-40 outline-none transition-all duration-200 focus:border-green-ds focus:ring-4 focus:ring-green-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-ds mb-12">Perguntas frequentes</h2>
          <div className="grid gap-6">
            {faqs
              .filter(item => 
                searchQuery === '' || 
                item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.a.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, i) => (
                <div key={i} className="group rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-xl bg-green-ds/10 text-green-ds grid place-items-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold leading-tight text-primary-ds">{item.q}</h3>
                      <p className="text-black-70 text-base leading-relaxed mt-3">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            {searchQuery && faqs.filter(item => 
              item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.a.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <div className="text-center py-12">
                <p className="text-black-50">Nenhuma pergunta encontrada para "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}

export default HelpCenter

