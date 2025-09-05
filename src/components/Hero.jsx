import React from 'react'
import { Button } from '@/components/ui/button.jsx'

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            De universitários para universitários
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
          A busca por estágios{' '}
          <span className="text-gradient">nunca mais será</span>{' '}
          <span className="text-red-500">demora</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          A primeira plataforma construída especificamente para resolver as 
          frustrações dos universitários brasileiros.{' '}
          <span className="text-gradient font-semibold">Transparência total</span>, {' '}
          <span className="text-blue-500 font-semibold">feedback garantido</span> e {' '}
          <span className="text-green-500 font-semibold">inteligência artificial</span>{' '}
          revolucionando sua busca por estágios.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-brand hover:opacity-90 text-lg px-8 py-6 rounded-xl"
          >
            🎯 Quero Encontrar Estágios
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-xl"
          >
            🏢 Quero Contratar Talentos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero

