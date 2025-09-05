import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-neon rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gradient">EstagioAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-brand-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Problemas
            </button>
            <button className="text-gray-600 hover:text-brand-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Soluções
            </button>
            <button className="text-gray-600 hover:text-brand-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Recursos
            </button>
            <button className="text-gray-600 hover:text-brand-neon transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Sobre
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-brand-neon border border-gray-300 hover:border-brand-neon"
            >
              Entrar
            </Button>
            <Button className="bg-brand-neon text-black hover:bg-brand-neon/90 font-medium">
              Cadastrar
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

