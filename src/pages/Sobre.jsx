import React from "react"
import Navigation from "@/components/global/Navigation"
import Footer from "@/components/global/Footer"

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">SOBRE NÓS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Transparência e velocidade para sua jornada de estágio</h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">
              Nascemos com a missão de conectar universitários e empresas com mais clareza,
              feedback e compatibilidade. De estudantes para estudantes.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Transparência", desc: "Informações claras sobre vagas, processos e etapas." },
            { title: "Rapidez", desc: "Busca simples, notificações e acompanhamento em tempo real." },
            { title: "Compatibilidade", desc: "Tecnologia e IA para aproximar perfis e oportunidades." },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

