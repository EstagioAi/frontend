import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="text-sm text-gray-600 hover:text-gray-800">&larr; Voltar</a>
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-4">Termos de Uso</h1>
        <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
        <p className="text-sm text-gray-500">Última atualização: 07 set 2025</p>

        <div className="prose prose-gray max-w-none mt-6">
          <h2>1. Aceitação</h2>
          <p>Ao usar o EstagioAI você concorda com estes Termos de Uso. Se não concordar com qualquer parte, não utilize a plataforma.</p>

          <h2>2. Conta e Segurança</h2>
          <p>Você é responsável por manter a confidencialidade de suas credenciais e por todas as atividades realizadas na sua conta.</p>

          <h2>3. Uso Permitido</h2>
          <p>É proibido utilizar a plataforma para fins ilegais, para coleta não autorizada de dados ou para tentar burlar mecanismos de segurança.</p>

          <h2>4. Conteúdos</h2>
          <p>Algumas informações são fornecidas por empresas parceiras. Apesar dos esforços, não garantimos disponibilidade contínua de todas as vagas.</p>

          <h2>5. Encerramento</h2>
          <p>Podemos suspender ou encerrar o acesso em caso de violação destes termos.</p>

          <h2>6. Contato</h2>
          <p>Fale conosco em contato@estagio.ai.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsOfUse

