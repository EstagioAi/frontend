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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb orb--emerald orb-animate w-[320px] h-[320px] -top-10 left-[-40px]"></div>
        <div className="orb orb--teal orb-animate w-[260px] h-[260px] -bottom-12 right-[-30px]"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-lg">
          <div className="absolute -inset-1 bg-[radial-gradient(40%_40%_at_50%_0%,#01E2971a,transparent)]" aria-hidden="true" />
          <div className="relative p-8 sm:p-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-200 mb-4">Acesso antecipado</div>
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-gray-900 tracking-tight">Comece agora <span className="text-[#01E297]">de graça</span></h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Seja um dos primeiros a testar a plataforma que vai transformar sua busca por estágios.</p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu melhor email"
                  required
                  className="flex-1 px-5 py-3.5 md:px-6 md:py-4 text-base md:text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01E297] focus:border-transparent bg-white shadow-sm"
                />
                <Button type="submit" size="lg" className="h-[52px] md:h-[56px] px-6 rounded-xl bg-[#01E297] text-black font-semibold hover:brightness-95 sm:w-auto w-full">Quero Acesso!</Button>
              </div>
            </form>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2 justify-center"><span className="w-2.5 h-2.5 bg-[#01E297] rounded-full" /><span>100% gratuito</span></div>
              <div className="flex items-center gap-2 justify-center"><span className="w-2.5 h-2.5 bg-[#01E297] rounded-full" /><span>Acesso antecipado</span></div>
              <div className="flex items-center gap-2 justify-center"><span className="w-2.5 h-2.5 bg-[#01E297] rounded-full" /><span>Sem spam</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailCaptureSection

