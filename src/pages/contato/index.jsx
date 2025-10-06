import React from "react"
import Navigation from "@/components/global/Navigation"
import Footer from "@/components/global/Footer"

export default function Contato() {
  return (
    <div className="min-h-screen bg-primary-ds">
      <Navigation />

      <main id="main-content">
        {/* Hero */}
      <section className="bg-gradient-to-b from-[#f8f8f8] to-white/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-black-50 font-semibold">CONTATO</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-ds mt-2">Fale com a gente</h1>
            <div className="h-2 w-36 rounded-full bg-green-ds my-6" />
            <p className="text-black-70 text-base md:text-lg">Dúvidas, sugestões ou parcerias? Envie uma mensagem e retornaremos em breve.</p>
          </div>
        </div>
      </section>

      {/* Form simples (placeholder) */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-6 border-2 border-black-10 rounded-2xl p-6 bg-white-ds shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-primary-ds">Nome</label>
              <input className="mt-1 w-full border-2 border-black-10 rounded-lg px-4 py-3 text-primary-ds placeholder:text-black-40 focus:outline-none focus:ring-4 focus:ring-green-20 focus:border-green-ds transition-all duration-200" placeholder="Seu nome" />
            </div>
            <div>
              <label className="text-sm font-medium text-primary-ds">Email</label>
              <input type="email" className="mt-1 w-full border-2 border-black-10 rounded-lg px-4 py-3 text-primary-ds placeholder:text-black-40 focus:outline-none focus:ring-4 focus:ring-green-20 focus:border-green-ds transition-all duration-200" placeholder="voce@email.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-primary-ds">Mensagem</label>
              <textarea rows={5} className="mt-1 w-full border-2 border-black-10 rounded-lg px-4 py-3 text-primary-ds placeholder:text-black-40 focus:outline-none focus:ring-4 focus:ring-green-20 focus:border-green-ds transition-all duration-200 resize-none" placeholder="Como podemos ajudar?" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg">
              Enviar
            </button>
          </div>
          <p className="text-xs text-black-70 mt-4">Este formulário é demonstrativo. Para contato comercial, acesse a página dedicada.</p>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  )
}

