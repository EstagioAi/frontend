import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'

const EmailCaptureSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de captura do email
    console.log('Email capturado:', email)
    alert('Email cadastrado com sucesso! Você será notificado quando a plataforma estiver disponível.')
    setEmail('')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-neon/10 to-brand-purple/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black">
            Comece agora{' '}
            <span className="text-gradient">de graça</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seja um dos primeiros a testar a plataforma que vai revolucionar 
            sua busca por estágios. Cadastre seu email e receba acesso antecipado.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor email"
              required
              className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-white shadow-sm"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-brand-neon text-black hover:bg-brand-neon/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Quero Acesso!
            </Button>
          </div>
        </form>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>100% gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Acesso antecipado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Sem spam</span>
          </div>
        </div>

        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
          <blockquote className="text-lg italic text-center text-gray-700 mb-4">
            <span className="text-brand-neon font-bold">O LinkedIn domina como principal plataforma,</span><br />
            mas apenas <span className="text-red-500 font-bold">24 de 26 estudantes</span> o usam por{' '}
            <span className="text-yellow-600 font-bold">falta de alternativas melhores.</span>
          </blockquote>
          <p className="text-center text-sm text-gray-500 font-medium">
            Pesquisa EstagioAI com 26 universitários
          </p>
        </div>
      </div>
    </section>
  )
}

export default EmailCaptureSection

