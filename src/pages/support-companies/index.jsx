import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { Building2, FileText, PhoneCall, Mail } from 'lucide-react'
import { SmartLink } from '@/components/ui/smart-link.jsx'

const SupportCompanies = () => {
  return (
    <div className="min-h-screen bg-white-ds">
      <Navigation />

      <section className="bg-gradient-to-b from-white to-[#fae8e0]/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-[#6b6b68] font-semibold">PARA EMPRESAS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#3d3d3a] mt-2">Suporte para empresas</h1>
            <div className="h-2 w-44 rounded-full bg-[#d97757] my-6" />
            <p className="text-[#6b6b68] text-base md:text-lg">Atendimento e documentação para publicar vagas e contratar com mais agilidade.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/como-publicar-vagas" className="group border border-[rgba(217,119,87,0.15)] rounded-2xl p-6 hover:shadow-lg hover:border-[rgba(217,119,87,0.3)] transition-all bg-white-ds">
            <div className="w-10 h-10 rounded-lg bg-[#fef5e7] text-[#d97757] grid place-items-center"><FileText className="w-5 h-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-[#3d3d3a]">Documentação</h3>
            <p className="text-[#6b6b68] text-sm">Guia passo a passo para anunciar vagas.</p>
          </a>

          <SmartLink to="/planos-e-precos" className="group border border-[rgba(217,119,87,0.15)] rounded-2xl p-6 hover:shadow-lg hover:border-[rgba(217,119,87,0.3)] transition-all bg-white-ds">
            <div className="w-10 h-10 rounded-lg bg-[#fef5e7] text-[#d97757] grid place-items-center"><Building2 className="w-5 h-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-[#3d3d3a]">Planos e preços</h3>
            <p className="text-[#6b6b68] text-sm">Escolha a melhor opção para seu time.</p>
          </SmartLink>

          <div className="border border-[rgba(217,119,87,0.15)] rounded-2xl p-6 bg-white-ds">
            <div className="w-10 h-10 rounded-lg bg-[#fef5e7] text-[#d97757] grid place-items-center"><PhoneCall className="w-5 h-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-[#3d3d3a]">Canais de suporte</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6b6b68]">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#9a9a97]" /> empresas@estagio.ai</li>
              <li className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-[#9a9a97]" /> (11) 0000-0000 (comercial)</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SupportCompanies

