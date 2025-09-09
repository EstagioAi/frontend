import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { GraduationCap, HelpCircle, BookOpen, Mail, MessageCircle } from 'lucide-react'

const SupportStudents = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">PARA UNIVERSITÁRIOS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Suporte para universitários</h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Ajuda para sua jornada com dicas, canais de atendimento e recursos recomendados.</p>
          </div>
        </div>
      </section>

      {/* Cards de suporte */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/central-de-ajuda" className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 grid place-items-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Central de ajuda</h3>
            <p className="text-gray-600 text-sm">Perguntas frequentes e tutoriais rápidos.</p>
          </a>

          <a href="/como-melhorar-seu-perfil" className="group border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 grid place-items-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Como melhorar seu perfil</h3>
            <p className="text-gray-600 text-sm">Boas práticas para se destacar nas vagas.</p>
          </a>

          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 grid place-items-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Canais de suporte</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-500" /> suporte@estagio.ai</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-gray-500" /> Chat (em breve)</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SupportStudents

