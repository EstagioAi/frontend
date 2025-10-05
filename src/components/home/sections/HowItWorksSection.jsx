import React from 'react'
import { UserPlus2, Search, Upload, Briefcase } from 'lucide-react'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const steps = [
  { title: 'Crie sua conta', desc: 'Cadastre-se e complete seu perfil em minutos.', icon: UserPlus2 },
  { title: 'Busque a vaga', desc: 'Encontre estágios alinhados ao seu perfil.', icon: Search },
  { title: 'Envie seu currículo', desc: 'Mostre suas experiências e portfólio.', icon: Upload },
  { title: 'Candidate-se ao sonho', desc: 'Acompanhe o processo e receba feedback.', icon: Briefcase },
]

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: '#faf9f5' }}>
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="section3"
        opacity={0.15}
        color="rgba(217, 119, 87, 0.55)"
        accentColor="rgba(15, 15, 15, 0.2)"
        accentOpacity={0.16}
        blendMode="normal"
        className="opacity-90"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.18}
        color="rgba(130, 247, 179, 0.9)"
        accentColor="rgba(203, 213, 225, 0.55)"
        accentOpacity={0.16}
        blendMode="normal"
        className="opacity-90"
      />
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] font-semibold mb-10" style={{ color: '#3d3d3a' }}>Como Funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(({ title, desc, icon }, idx) => (
            <div key={title} className="rounded-2xl p-6" style={{ border: '1px solid rgba(217, 119, 87, 0.15)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(217, 119, 87, 0.1)' }}>
                  {React.createElement(icon, { className: 'w-5 h-5', style: { color: '#d97757' } })}
                </div>
                <span className="text-sm font-medium" style={{ color: '#3d3d3a', opacity: 0.7 }}>Passo {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#3d3d3a' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#3d3d3a', opacity: 0.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

