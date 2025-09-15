import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { GraduationCap, Search, Globe2, Building2 } from 'lucide-react'

const universidades = [
  { nome: 'USP', cidade: 'São Paulo, SP', vagasAtivas: 12, programas: 3, site: 'https://www.usp.br' },
  { nome: 'Unicamp', cidade: 'Campinas, SP', vagasAtivas: 7, programas: 2, site: 'https://www.unicamp.br' },
  { nome: 'UFRJ', cidade: 'Rio de Janeiro, RJ', vagasAtivas: 9, programas: 2, site: 'https://www.ufrj.br' },
  { nome: 'UFSC', cidade: 'Florianópolis, SC', vagasAtivas: 4, programas: 1, site: 'https://www.ufsc.br' },
]

export default function Universidades() {
  return (
    <div className="min-h-screen bg-white text-[#092116]">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-14 -right-14 w-64 h-64 rounded-3xl border border-gray-200/70 rotate-6" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-3xl border border-gray-200/70 -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 md:pt-12 md:pb-8">
          <p className="text-xs tracking-wider text-gray-500 font-semibold">PARCERIAS</p>
          <h1 className="text-2xl md:text-4xl font-extrabold mt-2 flex items-center gap-3">
            <span>Universidades</span>
            <span className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-[3px] rounded-full border border-emerald-200"><GraduationCap className="w-3.5 h-3.5"/> Conexão com o mercado</span>
          </h1>
          <div className="h-1.5 w-28 rounded-full bg-[#01E297] my-4" />
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">Descubra programas, feiras e parcerias entre universidades e empresas. Um hub informativo para aproximar estudantes de oportunidades.</p>

          <div className="mt-6 flex gap-2 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input className="w-full h-10 pl-9 pr-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Buscar universidade ou cidade" />
            </div>
            <button className="h-10 px-4 rounded-xl bg-[#01E297] text-black font-semibold hover:brightness-95">Buscar</button>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {universidades.map((u) => (
            <article key={u.nome} className="rounded-2xl border border-gray-200 bg-white shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition p-5">
              <header className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 grid place-items-center font-bold">{u.nome[0]}</div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{u.nome}</h3>
                  <p className="text-xs text-gray-500">{u.cidade}</p>
                </div>
              </header>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-2 py-1 rounded-lg text-gray-700"><Building2 className="w-3.5 h-3.5"/> {u.vagasAtivas} vagas</div>
                <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-2 py-1 rounded-lg text-gray-700"><GraduationCap className="w-3.5 h-3.5"/> {u.programas} programas</div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a href={u.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-xs font-medium text-white bg-[#092116] hover:brightness-110"><Globe2 className="w-3.5 h-3.5"/> Site oficial</a>
                <a href="#" className="text-xs text-[#092116] font-semibold underline">Ver oportunidades</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
