import React from 'react'
import { UserPlus, FileCheck, Target, Rocket } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'
import StudentProfileCard from '@/components/ui/StudentProfileCard'
import { TextHighlight } from '@/components/ui/text-highlight.jsx'

export default function ProcessTimelineSection() {
  const { ref: refTitle, isVisible: isTitleVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: refSteps, isVisible: areStepsVisible } = useScrollReveal({ threshold: 0.1 })
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
        <div className="max-w-6xl mx-auto">
          <div
            ref={refTitle}
            className={`
              max-w-3xl mx-auto text-center mb-16
              transition-all duration-700
              ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
              Do cadastro à{' '}
            <TextHighlight variant="arrow" className="font-semibold text-primary-ds">
              contratação{' '}
            </TextHighlight>
              {' '}com{' '}
              <span className="relative text-green-ds">
                cliques
                <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-green-ds/70"></span>
              </span>{' '}
              guiados
            </h2>
            <p className="text-lg text-gray-600">
              Um processo simples e transparente do início ao fim
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              ref={refSteps}
              className={`
                transition-all duration-1000
                ${areStepsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              `}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-green-ds/50 hover:shadow-lg transition-all duration-300"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-ds to-green-hover-ds shadow-md group-hover:shadow-green-glow group-hover:scale-110 transition-all duration-300">
                          <step.icon className="w-6 h-6 text-navy-dark" strokeWidth={2.4} />
                        </div>
                        <div className="absolute -top-1 -right-2 w-7 h-7 rounded-full bg-navy-dark text-green-ds text-xs font-bold flex items-center justify-center shadow-sm">
                          {step.number}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-navy-dark mb-2 group-hover:text-green-ds transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={refCard}
              className={`
                transition-all duration-1000
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
      </div>
    </section>
  )
}
