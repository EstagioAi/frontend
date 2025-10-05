import React from 'react'
import { Clock, Target, Gem, Crosshair, Zap, Search } from 'lucide-react'
import FeatureCard from '../../ui/feature-card'
import { TextHighlight } from '@/components/ui/text-highlight.jsx'
import BackgroundShapes from '@/components/ui/background-shapes.jsx'

const benefits = [
  {
    number: '01',
    icon: Clock,
    iconBg: 'yellow',
    title: 'Eficiência que Economiza Tempo',
    description: 'Pare de perder tempo vasculhando múltiplos sites de vagas e empresas. Nosso mecanismo de busca abrangente agrega listagens de uma vasta rede de fontes.'
  },
  {
    number: '02',
    icon: Target,
    iconBg: 'mint',
    title: 'Resultados Personalizados',
    description: 'Adapte sua busca de estágio aos seus objetivos únicos. Salve seus filtros de pesquisa e receba alertas instantâneos sempre que novas oportunidades correspondentes forem publicadas.'
  },
  {
    number: '03',
    icon: Gem,
    iconBg: 'lavender',
    title: 'Descubra Vagas Exclusivas',
    description: 'Vá além dos quadros de vagas básicos e acesse um pool mais amplo de oportunidades de estágio de diversas fontes.'
  },
  {
    number: '04',
    icon: Crosshair,
    iconBg: 'peach',
    title: 'Precisão Incomparável',
    description: 'Nosso sistema avançado de busca e filtro permite que você encontre exatamente o tipo de estágio que procura.'
  },
  {
    number: '05',
    icon: Zap,
    iconBg: 'yellow',
    title: 'Economize Tempo Valioso',
    description: 'Chega de vasculhar postagens irrelevantes! Encontre o estágio perfeito mais rápido com opções de filtragem precisas.'
  },
  {
    number: '06',
    icon: Search,
    iconBg: 'mint',
    title: 'Foco a Laser na Sua Busca',
    description: 'Explore indústrias e funções que você talvez não tenha considerado antes, ampliando seus horizontes de busca de estágio.'
  }
]

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: 'var(--color-bg-white-ds)' }}>
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="section2"
        opacity={0.46}
        color="rgba(130, 247, 179, 0.85)"
        accentColor="rgba(17, 94, 89, 0.3)"
        accentOpacity={0.22}
        blendMode="multiply"
        className="opacity-100"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.26}
        color="rgba(130, 247, 179, 0.95)"
        accentColor="rgba(46, 196, 182, 0.28)"
        accentOpacity={0.18}
        blendMode="normal"
        className="opacity-95"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[28%] mx-auto h-[380px] w-[76%] rounded-full blur-[140px]"
        style={{
          background: 'radial-gradient(circle at center, rgba(17, 94, 89, 0.16) 0%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-black-50">
            Por que escolher
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-ds sm:text-3xl lg:text-4xl">
            Por que o EstágioAI é a{' '}
            <TextHighlight variant="marker" className="text-primary-ds">
              escolha certa
            </TextHighlight>
            {' '}para você?
          </h2>
        </div>

        {/* Animated word tags - removido para manter minimalismo */}

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ number, icon: Icon, iconBg, title, description }) => (
            <FeatureCard
              key={number}
              icon={<Icon className="h-6 w-6" />}
              iconBg={iconBg}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection

