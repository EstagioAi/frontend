import React from 'react'
import { Clock, Target, Gem, Crosshair, Zap, Search } from 'lucide-react'
import FeatureCard from '../../ui/feature-card'

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
    <section className="relative overflow-hidden py-24" style={{ background: 'var(--color-bg-secondary, #f5f4ed)' }}>
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-[-160px] h-[420px] w-[420px] rounded-full blur-3xl" style={{ background: 'rgba(217, 119, 87, 0.08)' }} />
        <div className="absolute bottom-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full blur-3xl" style={{ background: 'rgba(245, 244, 237, 0.5)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: '#d97757' }}>
            Escolha-me
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: '#3d3d3a' }}>
            Por que o EstágioAI é a{' '}
            <span style={{ color: '#d97757' }}>escolha certa</span>
            {' '}para você?
          </h2>
        </div>

        {/* Animated word tags */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full px-6 py-2.5 text-sm font-medium" style={{ background: '#fef9e7', color: '#3d3d3a' }}>
            Torne
          </span>
          <span className="rounded-full px-6 py-2.5 text-sm font-medium" style={{ background: '#e8f8f5', color: '#3d3d3a' }}>
            mais
          </span>
          <span className="rounded-full px-6 py-2.5 text-sm font-medium" style={{ background: '#f4ecf7', color: '#3d3d3a' }}>
            fácil
          </span>
          <span className="rounded-full px-6 py-2.5 text-sm font-medium" style={{ background: '#fef5e7', color: '#3d3d3a' }}>
            com
          </span>
          <span className="rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' }}>
            EstágioAI
          </span>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ number, icon: Icon, iconBg, title, description }) => (
            <FeatureCard
              key={number}
              icon={<Icon className="h-8 w-8" />}
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

