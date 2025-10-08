import React from 'react'
import { Eye, Bell, TrendingUp, Shield } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'
import TextHighlight from '@/components/ui/text-highlight'

export default function TransparencySection() {
  const { ref: refTitle, isVisible: isTitleVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref1, isVisible: isVisible1 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref3, isVisible: isVisible3 } = useScrollReveal({ threshold: 0.1 })
  const { ref: ref4, isVisible: isVisible4 } = useScrollReveal({ threshold: 0.1 })

  const features = [
    {
      icon: Eye,
      title: 'Visualização em tempo real',
      description: 'Acompanhe o status de cada candidatura e veja exatamente em qual etapa você está no processo seletivo.',
      ref: ref1,
      isVisible: isVisible1
    },
    {
      icon: Bell,
      title: 'Notificações instantâneas',
      description: 'Receba alertas imediatos sobre atualizações, novas etapas e feedback das empresas parceiras.',
      ref: ref2,
      isVisible: isVisible2
    },
    {
      icon: TrendingUp,
      title: 'Métricas de desempenho',
      description: 'Analise suas estatísticas, taxa de conversão e identifique pontos de melhoria no seu perfil.',
      ref: ref3,
      isVisible: isVisible3
    },
    {
      icon: Shield,
      title: 'Segurança total',
      description: 'Seus dados estão protegidos com criptografia de ponta e você controla o que compartilhar.',
      ref: ref4,
      isVisible: isVisible4
    }
  ]

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Shapes */}
      <BackgroundShapes
        variant="mesh"
        opacity={0.7}
        color="rgba(130, 247, 179, 0.53)"
        accentColor="rgba(15, 15, 15, 0.05)"
        accentOpacity={0.7}
        blendMode="multiply"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.9}
        color="rgba(130, 247, 179, 0.2)"
        accentColor="rgba(15, 15, 15, 0.09)"
        accentOpacity={0.8}
        blendMode="multiply"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={refTitle}
          className={`
            max-w-3xl mx-auto text-center mb-16
            transition-all duration-700
            ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            Transparência em{' '}
            <TextHighlight variant='box'>
              cada etapa
            </TextHighlight>{' '}
            {' '}
            do processo
          </h2>
          <p className="text-lg text-gray-700">
            Mantenha o controle total da sua busca por estágio com informações claras e acessíveis
          </p>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={feature.ref}
              className={`
                relative group
                bg-white
                border-2 border-gray-200
                rounded-2xl p-8
                hover:border-green-ds/50 hover:shadow-xl
                transition-all duration-500
                ${feature.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-ds/0 via-green-ds/0 to-green-ds/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Ícone */}
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-green-ds/40 bg-green-10 mb-6 shadow-[0_10px_25px_rgba(130,247,179,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                          <feature.icon className="w-7 h-7 text-green-ds" strokeWidth={2.5} />
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-green-ds transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 30px rgba(0, 255, 127, 0.2)',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`
            mt-16 text-center
            transition-all duration-700 delay-500
            ${isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-green-ds/30 rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-green-ds animate-pulse"></div>
            <span className="text-sm font-semibold text-navy-dark">
              Sistema de acompanhamento disponível 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
