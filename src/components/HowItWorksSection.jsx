import React from 'react'
import { UserPlus2, Search, Upload, Briefcase } from 'lucide-react'

const steps = [
  { title: 'Crie sua conta', desc: 'Cadastre-se e complete seu perfil em minutos.', icon: UserPlus2 },
  { title: 'Busque a vaga', desc: 'Encontre estágios alinhados ao seu perfil.', icon: Search },
  { title: 'Envie seu currículo', desc: 'Mostre suas experiências e portfólio.', icon: Upload },
  { title: 'Candidate-se ao sonho', desc: 'Acompanhe o processo e receba feedback.', icon: Briefcase },
]

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] font-semibold text-black mb-10">Como Funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#01E297]/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#01E297]" />
                </div>
                <span className="text-sm font-medium text-gray-600">Passo {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

