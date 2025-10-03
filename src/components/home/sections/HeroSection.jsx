import React, { useState, useEffect } from 'react'
import { MapPin, Play, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Lista de trabalhos
const jobs = [
  'Arquiteta de Interiores',
  'Desenvolvedor Front-end',
  'Designer de Produto',
  'Marketing Digital',
  'Marketing Manager',
  'Product Manager',
  'Devops Engineer',
  'Data Scientist',
  'Product Designer',
  'UI/UX Designer',
  'Full-stack Developer',
  'Arquiteto de Software',
  'Engenheiro de Dados',
  'Designer Gráfico',
  'Arquiteto de Edificações',
  'Economista',
  'Engenheiro de Produção',
  'Engenheiro de Controle e Automação',
  'Engenheiro de Segurança do Trabalho',
  'Engenheiro de Qualidade',
  'Engenheiro de Sistemas',
  'Engenheiro de Telecomunicações',
  'Engenheiro de Energia Solar',
  'Engenheiro de Mecânica',
  'Engenheiro de Controle de Qualidade',
  'Engenheiro de Manufatura',
  'Engenheiro de Sistemas de Informação',
  'Engenheiro de Software',
  'Engenheiro de Telecomunicações',
  'Engenheiro de Sistemas de Controle',
  'Engenheiro Civil',
  'Arquiteto de Paisagismo',
  'Arquiteto de Estruturas',
  'Arquiteto de Projetos',
  'Arquiteto de Projetos de Construção',

]

// Lista de locais no Brasil
const locations = [
  'São Paulo, SP',
  'Rio de Janeiro, RJ',
  'Belo Horizonte, MG',
  'Brasília, DF',
  'Curitiba, PR',
  'Porto Alegre, RS',
  'Salvador, BA',
  'Recife, PE',
  'Fortaleza, CE',
  'Goiânia, GO',
  'Manaus, AM',
  'Belém, PA',
  'Porto Velho, RO',
  'Boa Vista, RR',
  'Macapá, AP',
  'São Luís, MA',
  'Teresina, PI',
  'João Pessoa, PB',
  'Natal, RN',
  'Maceió, AL',
  'Aracaju, SE',
  'Campo Grande, MS',

]

// Componente de texto animado tipo roleta (slot machine)
const SpinText = ({ items, delay = 0, isActive = false, showIcon = false, align = 'left' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [targetIndex, setTargetIndex] = useState(0)

  useEffect(() => {
    const startSpin = () => {
      setIsSpinning(true)

      // Escolhe um índice aleatório
      const randomIndex = Math.floor(Math.random() * items.length)
      setTargetIndex(randomIndex)

      // Após a animação de spin, define o novo índice
      setTimeout(() => {
        setCurrentIndex(randomIndex)
        setIsSpinning(false)
      }, 1500) // Duração do spin
    }

    // Inicia o primeiro spin após o delay
    const initialTimeout = setTimeout(startSpin, delay)

    // Continua girando em intervalos
    const interval = setInterval(startSpin, 5000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [items.length, delay])

  // Cria uma lista extendida para o efeito de rolagem suave
  const extendedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden h-7 ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <div
        className={`transition-all ${isSpinning ? 'slot-spinning' : ''}`}
        style={{
          transform: isSpinning
            ? `translateY(-${(items.length * 2 + targetIndex) * 28}px)`
            : `translateY(-${(items.length + currentIndex) * 28}px)`,
          transitionDuration: isSpinning ? '1500ms' : '0ms',
          transitionTimingFunction: isSpinning ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'linear'
        }}
      >
        {extendedItems.map((item, idx) => {
          const normalizedIdx = idx % items.length
          const isCurrentItem = !isSpinning && normalizedIdx === currentIndex && idx >= items.length && idx < items.length * 2

          return (
            <div
              key={idx}
              className={`h-7 flex items-center transition-all duration-300 ${
                isActive && isCurrentItem
                  ? 'text-slate-900 font-semibold'
                  : 'text-slate-300 font-normal'
              }`}
              style={{
                fontSize: isActive && isCurrentItem ? '0.9rem' : '0.85rem',
                whiteSpace: 'nowrap'
              }}
            >
              <div className={`flex items-center gap-2 w-full ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
                {showIcon && isActive && isCurrentItem && align === 'left' && (
                  <Play className="h-3 w-3 fill-emerald-600 text-emerald-600 flex-shrink-0" />
                )}
                {showIcon && isActive && isCurrentItem && (
                  <MapPin className="h-3.5 w-3.5 text-teal-500 flex-shrink-0" />
                )}
                <span className="truncate">{item}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 min-h-[85vh] flex items-start no-overflow-x">
      {/* Background com paleta personalizada */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid pattern de fundo */}
        <div
          className="absolute inset-0 opacity-40 z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(61, 61, 58, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(61, 61, 58, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Gradiente base - usando var(--gradient-hero) */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />

        {/* Blob coral/terracota - canto superior esquerdo */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(217, 119, 87, 0.25) 0%, rgba(217, 119, 87, 0.12) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Blob suave bege - canto superior direito */}
        <div
          className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(245, 244, 237, 0.8) 0%, rgba(250, 249, 245, 0.4) 50%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Elementos decorativos minimalistas */}
        <div className="absolute top-32 left-16 z-10">
          <div className="w-16 h-0.5" style={{ background: 'linear-gradient(to right, rgba(217, 119, 87, 0.4), transparent)' }} />
          <div className="w-8 h-0.5 mt-2 ml-4" style={{ background: 'linear-gradient(to right, rgba(217, 119, 87, 0.25), transparent)' }} />
        </div>

        {/* Elemento decorativo - círculo sutil */}
        <div className="absolute top-1/3 right-32 z-10">
          <div className="w-20 h-20 rounded-full" style={{ border: '1px solid rgba(217, 119, 87, 0.2)' }} />
        </div>

        {/* Overlay para suavizar */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 container-safe">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,300px)_1fr_minmax(240px,300px)] gap-6 sm:gap-8 md:gap-12 items-start">

          {/* Coluna Esquerda - Jobs com animação de roleta */}
          <div className="hidden lg:flex flex-col space-y-5 pt-4">
            {[0, 1, 2, 3, 4, 5,6,7,8].map((index) => (
              <SpinText
                key={index}
                items={jobs}
                delay={index * 400}
                isActive={index === 4}
                showIcon={index === 4}
                align="left"
              />
            ))}
          </div>

          {/* Coluna Central - Conteúdo Principal */}
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 max-w-2xl mx-auto pt-4 sm:pt-6 md:pt-8 px-2 sm:px-0">
            {/* Badge minimalista - border coral, background branco */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm transition-all hover:shadow-md touch-target" style={{ border: '1px solid var(--color-coral-primary)', background: 'var(--color-bg-white)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: 'var(--color-coral-primary)' }} />
                <span className="font-medium text-xs sm:text-sm responsive-text" style={{ color: 'var(--color-gray-dark)' }}>Plataforma completa para universitários</span>
              </div>
            </div>

            {/* Título Principal - mais clean e profissional */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight responsive-text">
                <span className="block" style={{ color: '#3d3d3a' }}>Sua Carreira dos</span>
                <span className="block mt-1 sm:mt-2 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #d97757, #d97757)' }}>
                  Sonhos
                </span>
                <span className="block mt-1 sm:mt-2" style={{ color: '#3d3d3a' }}>Começa Aqui</span>
              </h1>

              {/* Subtítulo */}
              <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed pt-1 sm:pt-2 px-4 sm:px-0 responsive-text" style={{ color: '#3d3d3a', opacity: 0.75 }}>
                Conectamos universitários às melhores oportunidades de carreira
              </p>
            </div>

            {/* Botão CTA - usando componente Button com variante cta */}
            <div className="flex justify-center pt-1 sm:pt-2">
              <Button variant="cta" size="lg" className="group w-full sm:w-auto max-w-xs sm:max-w-none">
                Começar Agora
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Coluna Direita - Locais com animação de roleta */}
          <div className="hidden lg:flex flex-col space-y-5 pt-4">
            {[0, 1, 2, 3, 4, 5,6,7,8].map((index) => (
              <SpinText
                key={index}
                items={locations}
                delay={index * 400 + 200}
                isActive={index === 4}
                showIcon={index === 4}
                align="right"
              />
            ))}
          </div>

        </div>

        {/* Jobs em grid para mobile - mais clean */}
        <div className="lg:hidden mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-0">
          {jobs.slice(0, 6).map((job, index) => (
            <div key={index} className="space-y-2 p-4 bg-white/80 backdrop-blur-sm rounded-xl transition-all hover:shadow-md min-h-[44px] touch-target" style={{ border: '1px solid rgba(217, 119, 87, 0.2)' }}>
              <div className="font-semibold text-sm responsive-text text-clamp-2" style={{ color: '#3d3d3a' }}>{job}</div>
              <div className="flex items-center gap-1.5 text-xs responsive-text" style={{ color: '#3d3d3a', opacity: 0.7 }}>
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#d97757' }} />
                <span className="text-ellipsis overflow-hidden">{locations[index]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

