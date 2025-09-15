import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { Search, Building2, ArrowRight } from 'lucide-react'

const companies = [
  { name: 'Amazon', logo: '/images/companies/amazon.webp', slug: 'amazon' },
  { name: 'Google', logo: '/images/companies/google.webp', slug: 'google' },
  { name: 'IBM', logo: '/images/companies/ibm.webp', slug: 'ibm' },
  { name: 'Meta', logo: '/images/companies/meta.webp', slug: 'meta' },
  { name: 'Microsoft', logo: '/images/companies/microsft.webp', slug: 'microsoft' },
  { name: 'Netflix', logo: '/images/companies/netflix.webp', slug: 'netflix' },
]

export default function Empresas() {
  return (
    <div className="min-h-screen bg-white text-[#092116]">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-14 -right-14 w-64 h-64 rounded-3xl border border-gray-200/70 rotate-6" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-3xl border border-gray-200/70 -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-8 text-center">
          <p className="text-xs tracking-wider text-gray-500 font-semibold">CATÁLOGO</p>
          <h1 className="text-2xl md:text-4xl font-extrabold mt-2">Empresas</h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">Descubra empresas e seus programas de estágio. Veja oportunidades e novidades por marca.</p>

          <div className="mt-6 mx-auto max-w-2xl flex gap-2 items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input className="w-full h-10 pl-9 pr-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Buscar empresa" />
            </div>
            <button className="h-10 px-4 rounded-xl bg-[#01E297] text-black font-semibold hover:brightness-95">Buscar</button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {companies.map((c) => (
            <a key={c.slug} href={`/empresas/${c.slug}`} className="group rounded-2xl border border-gray-200 bg-white shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition p-4 flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden grid place-items-center">
                <img src={c.logo} alt={c.name} className="max-w-[90%] max-h-[90%] object-contain" />
              </div>
              <div className="text-sm font-semibold text-gray-900">{c.name}</div>
              <div className="inline-flex items-center gap-1 text-[11px] text-[#092116] font-semibold">
                Ver vagas <ArrowRight className="w-3.5 h-3.5"/>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
