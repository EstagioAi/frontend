import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="text-sm text-[#6b6b68] hover:text-[#d97757] transition-colors">&larr; Voltar</a>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#3d3d3a] mt-4">Termos de Serviço</h1>
        <div className="h-2 w-44 rounded-full bg-[#d97757] my-6" />
        <p className="text-sm text-[#6b6b68]">Última atualização: 07 set 2025</p>

        <div className="prose prose-gray max-w-none mt-6">
          <h2>1. Descrição do Serviço</h2>
          <p>O EstagioAI agrega oportunidades de estágio e fornece recursos para descoberta e candidatura.</p>

          <h2>2. Elegibilidade</h2>
          <p>O uso é destinado a maiores de 16 anos ou conforme a legislação aplicável em sua região.</p>

          <h2>3. Limitações</h2>
          <p>Não nos responsabilizamos por decisões de contratação das empresas anunciantes.</p>

          <h2>4. Disponibilidade</h2>
          <p>O serviço pode sofrer interrupções para manutenção ou por fatores fora do nosso controle.</p>

          <h2>5. Suporte</h2>
          <p>Oferecemos suporte por email em contato@estagio.ai.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsOfService

