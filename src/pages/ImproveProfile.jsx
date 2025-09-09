import React from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { BookOpen } from 'lucide-react'

const tips = [
  'Use um título claro: "Estudante de Engenharia de Software (5º período)"',
  'Adicione experiências acadêmicas relevantes (iniciação científica, monitoria).',
  'Liste projetos com links para GitHub/Portfólio.',
  'Mostre resultados: números, impacto ou tecnologias usadas.',
  'Peça recomendações de professores ou colegas.'
]

const ImproveProfile = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">PARA UNIVERSITÁRIOS</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mt-2">Como melhorar seu perfil</h1>
            <div className="h-2 w-44 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Dicas práticas para aumentar suas chances de conseguir um estágio.</p>
          </div>
        </div>
      </section>

      {/* Dicas */}
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6 grid gap-4">
          {tips.map((t, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-5 bg-white flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-md bg-emerald-100 text-emerald-600 grid place-items-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <p className="text-gray-700 text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ImproveProfile

