import React from "react"
import Navigation from "@/components/global/Navigation"
import Footer from "@/components/global/Footer"

export default function Contato() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">CONTATO</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Fale com a gente</h1>
            <div className="h-2 w-36 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Dúvidas, sugestões ou parcerias? Envie uma mensagem e retornaremos em breve.</p>
          </div>
        </div>
      </section>

      {/* Form simples (placeholder) */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-6 border border-gray-200 rounded-2xl p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Nome</label>
              <input className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Seu nome" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="voce@email.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700">Mensagem</label>
              <textarea rows={5} className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Como podemos ajudar?" />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="btn-primary px-5 py-2 rounded-xl">Enviar</button>
          </div>
          <p className="text-xs text-gray-500 mt-4">Este formulário é demonstrativo. Para contato comercial, acesse a página dedicada.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

