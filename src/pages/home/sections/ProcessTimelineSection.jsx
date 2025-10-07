import React from 'react'
import { UserPlus, FileCheck, Target, Rocket } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'
import StudentProfileCard from '@/components/ui/StudentProfileCard'

export default function ProcessTimelineSection() {
  const { ref: refTitle, isVisible: isTitleVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: refTimeline, isVisible: isTimelineVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: refCard, isVisible: isCardVisible } = useScrollReveal({ threshold: 0.1 })

  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'Crie seu perfil completo',
      description: 'Complete seu perfil em poucos minutos.'
    },
    {
      icon: FileCheck,
      number: '02',
      title: 'Receba vagas personalizadas',
      description: 'Receba vagas compatíveis automaticamente.'
    },
    {
      icon: Target,
      number: '03',
      title: 'Candidate-se com um clique',
      description: 'Candidate-se e acompanhe cada etapa no mesmo lugar.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Participe dos processos seletivos',
      description: 'Receba convites e siga cada etapa com suporte guiado.'
    }
  ]

  const stepColumns = [steps.slice(0, 2), steps.slice(2)]

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <BackgroundShapes
        variant="mesh"
        opacity={0.07}
        color="rgba(130, 247, 179, 0.3)"
        accentColor="rgba(200, 200, 200, 0.2)"
        accentOpacity={0.09}
        blendMode="multiply"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.11}
        color="rgba(130, 247, 179, 0.45)"
        accentColor="rgba(200, 200, 200, 0.28)"
        accentOpacity={0.09}
        blendMode="normal"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr),420px] gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          <div className="flex flex-col justify-between">
            <div
              ref={refTitle}
              className={`
                mb-14 max-w-2xl transition-all duration-700
                ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              `}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
                Do cadastro à{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-ds to-green-hover-ds">
                  contratação
                </span>{' '}
                com{' '}
                <span className="relative text-green-ds">
                  cliques
                  <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-green-ds/70"></span>
                </span>{' '}
                guiados
              </h2>
              <p className="text-base text-gray-600">
                Um processo simples e transparente do início ao fim
              </p>
            </div>

            <div ref={refTimeline} className="relative flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 h-full">
                {stepColumns.map((column, columnIndex) => {
                  const columnOffset = stepColumns
                    .slice(0, columnIndex)
                    .reduce((total, current) => total + current.length, 0)

                  return (
                    <div key={columnIndex} className="space-y-6 h-full">
                      {column.map((step, itemIndex) => {
                        const globalIndex = columnOffset + itemIndex

                        return (
                          <div
                            key={step.number}
                            className={`
                              transition-all duration-700
                              ${isTimelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                            `}
                            style={{ transitionDelay: `${globalIndex * 120}ms` }}
                          >
                            <div className="group h-full min-h-[150px] bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 lg:p-6 shadow-sm hover:border-green-ds/60 hover:shadow-[0px_24px_48px_-28px_rgba(64,207,131,0.55)] transition-all duration-300">
                              <div className="flex h-full gap-3">
                                <div className="relative flex-shrink-0">
                                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-green-ds to-green-hover-ds shadow-lg group-hover:shadow-green-glow group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <step.icon className="w-5 h-5 text-navy-dark" strokeWidth={2.4} />
                                  </div>
                                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-navy-dark text-green-ds rounded-full flex items-center justify-center text-xs font-bold z-20">
                                    {step.number}
                                  </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                  <h3 className="text-sm lg:text-base font-semibold text-navy-dark mb-1 group-hover:text-green-ds transition-colors duration-300">
                                    {step.title}
                                  </h3>
                                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                                    {step.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div
            ref={refCard}
            className={`
              transition-all duration-1000 w-full flex justify-center lg:justify-end lg:pl-4
              ${isCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
            `}
          >
            <StudentProfileCard
              name="Maria Santos"
              course="Ciência da Computação"
              location="São Paulo, SP"
              avatarInitials="MS"
              skills={[
                { name: 'React' },
                { name: 'TypeScript' },
                { name: 'Node.js' },
                { name: 'Python' }
              ]}
              stats={{
                applications: 15,
                matchRate: 92,
                profileComplete: 100
              }}
              verified={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
