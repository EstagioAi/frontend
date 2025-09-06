import React from 'react'
import { Button } from '@/components/ui/button.jsx'

const Hero = () => {
  return (
    <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 hero-bg">
      <div className="blob blob--purple" aria-hidden="true"></div>
      <div className="blob blob--green" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto text-center hero-container">
        <div className="mb-4">
          <span className="accent-badge text-sm">
            De universitários para universitários
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          A busca por estágios{' '}
          <span className="text-gradient">nunca mais será</span>{' '}
          <span className="text-red-500">demorada</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          A primeira plataforma feita para resolver as frustrações dos estudantes brasileiros.
          <br />
          <strong className="text-gradient">Transparência</strong>, <strong className="text-blue-500">feedback</strong> e <strong className="text-green-500">IA</strong> trabalhando juntas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="solid-cta" className="text-lg">
            Quero Encontrar Estágios
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Quero Contratar Talentos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

