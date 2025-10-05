import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { PhoneCall, Mail, MessageSquare } from 'lucide-react'

const CommercialContact = () => {
  return (
    <div className="min-h-screen bg-white-ds">
      <Navigation />

      <section className="bg-gradient-to-b from-white to-[#fae8e0]/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-[#6b6b68] font-semibold">PARA EMPRESAS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#3d3d3a] mt-2">Contato comercial</h1>
            <div className="h-2 w-44 rounded-full bg-[#d97757] my-6" />
            <p className="text-[#6b6b68] text-base md:text-lg">Fale com nosso time e encontre o melhor plano para sua empresa.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[rgba(217,119,87,0.15)] p-6 bg-white-ds hover:border-[rgba(217,119,87,0.3)] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#fef5e7] text-[#d97757] grid place-items-center"><PhoneCall className="w-5 h-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-[#3d3d3a]">Telefone</h3>
            <p className="text-[#6b6b68] text-sm">(11) 0000-0000</p>
          </div>
          <div className="rounded-2xl border border-[rgba(217,119,87,0.15)] p-6 bg-white-ds hover:border-[rgba(217,119,87,0.3)] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#fef5e7] text-[#d97757] grid place-items-center"><Mail className="w-5 h-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-[#3d3d3a]">E-mail</h3>
            <p className="text-[#6b6b68] text-sm">empresas@estagio.ai</p>
          </div>
          <div className="rounded-2xl border border-[rgba(217,119,87,0.15)] p-6 bg-white-ds hover:border-[rgba(217,119,87,0.3)] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#fef5e7] text-[#d97757] grid place-items-center"><MessageSquare className="w-5 h-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-[#3d3d3a]">Reunião</h3>
            <p className="text-[#6b6b68] text-sm">Agende uma conversa com especialista</p>
            <a href="#" className="mt-3 inline-flex items-center justify-center w-full h-11 rounded-xl bg-[#d97757] text-white-ds font-semibold hover:bg-[#e89b7d] transition-colors">Agendar demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CommercialContact

