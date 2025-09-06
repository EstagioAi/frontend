import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const menu = ['Home', 'Sobre', 'Categorias', 'Vagas', 'Blog', 'Contato']
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#01E297] shadow-sm">
              <span className="text-black font-extrabold">E</span>
            </div>
            <span className="text-xl font-bold">EstagioAI</span>
          </div>

          {/* Center menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-6">
              {menu.map((item) => (
                <li key={item}>
                  <a className="text-sm font-medium text-gray-700 hover:text-black transition-colors" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right actions */}
          <div className="ml-auto hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button className="px-5 py-2 rounded-[12px] bg-[#01E297] text-black font-semibold shadow-sm hover:brightness-95">
                Entrar
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
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

