import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { Search, MapPin, Briefcase } from 'lucide-react'

export default function Vagas() {
  return (
    <div className="min-h-screen bg-white text-[#092116]">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-14 -right-14 w-64 h-64 rounded-3xl border border-gray-200/70 rotate-6" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-3xl border border-gray-200/70 -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-8 text-center">
          <p className="text-xs tracking-wider text-gray-500 font-semibold">OPORTUNIDADES</p>
          <h1 className="text-2xl md:text-4xl font-extrabold mt-2">Vagas</h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">Em breve: busca de vagas com filtros, recomendações por IA e candidaturas rápidas.</p>

          <div className="mt-6 mx-auto max-w-3xl flex flex-col sm:flex-row gap-2 items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input className="w-full h-10 pl-9 pr-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Pesquisar por cargo, tecnologia, área..." />
            </div>
            <div className="relative w-full sm:w-56">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input className="w-full h-10 pl-9 pr-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Localidade" />
            </div>
            <button className="h-10 px-4 rounded-xl bg-[#01E297] text-black font-semibold hover:brightness-95 w-full sm:w-auto">Buscar</button>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
            Em breve, conectaremos a listagem de vagas em tempo real. Enquanto isso, explore o <a className="font-semibold underline" href="/radar-de-vagas">Radar de Vagas</a> e o catálogo por <a className="font-semibold underline" href="/empresas">Empresas</a>.
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-2xl border border-gray-200 bg-white shadow-card p-5">
                <header className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 grid place-items-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">Em breve</h3>
                    <p className="text-xs text-gray-500">Vagas em destaque aparecerão aqui</p>
                  </div>
                </header>
                <p className="text-sm text-gray-600 mt-3">Estamos preparando uma experiência de busca rápida com filtros e recomendações personalizadas.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
