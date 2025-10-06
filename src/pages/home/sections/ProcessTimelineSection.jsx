import React from 'react'
import { UserPlus, FileCheck, Target, Rocket, CheckCircle2 } from 'lucide-react'
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
      description: 'Cadastre-se gratuitamente e preencha suas informações acadêmicas e profissionais em poucos minutos.'
    },
    {
      icon: FileCheck,
      number: '02',
      title: 'Receba vagas personalizadas',
      description: 'Nosso algoritmo inteligente encontra as melhores oportunidades baseadas no seu perfil e preferências.'
    },
    {
      icon: Target,
      number: '03',
      title: 'Candidate-se com um clique',
      description: 'Aplique para múltiplas vagas rapidamente e acompanhe o status de cada candidatura em tempo real.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Participe dos processos seletivos',
      description: 'Receba notificações sobre cada etapa e prepare-se com nossos materiais exclusivos de apoio.'
    },
    {
      icon: CheckCircle2,
      number: '05',
      title: 'Conquiste seu estágio ideal',
      description: 'Finalize o processo, assine o contrato e comece sua jornada profissional com segurança total.'
    }
  ]

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo - Timeline */}
          <div>
            {/* Título */}
            <div
              ref={refTitle}
              className={`
                mb-12 transition-all duration-700
                ${isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              `}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
                Do cadastro à{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-ds to-green-hover-ds">
                  contratação
                </span>{' '}
                com <span className="text-green-ds">cliques</span> guiados
              </h2>
              <p className="text-lg text-gray-600">
                Um processo simples e transparente do início ao fim
              </p>
            </div>

            {/* Steps Timeline */}
            <div
              ref={refTimeline}
              className="relative space-y-8"
            >
              {/* Linha vertical conectora */}
              <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-green-ds via-green-hover-ds to-green-ds/20"></div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`
                    relative flex gap-6 group
                    transition-all duration-700 delay-${index * 100}
                    ${isTimelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Número e Ícone */}
                  <div className="relative flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-ds to-green-hover-ds shadow-lg group-hover:shadow-green-glow group-hover:scale-110 transition-all duration-300 relative z-10">
                      <step.icon className="w-6 h-6 text-navy-dark" strokeWidth={2.5} />
                    </div>
                    {/* Badge com número */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-navy-dark text-green-ds rounded-full flex items-center justify-center text-xs font-bold z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-navy-dark mb-2 group-hover:text-green-ds transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Card de Perfil Ilustrativo */}
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
    </section>
  )
}
