import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const menu = ['Home', 'Sobre', 'Categorias', 'Vagas', 'Blog', 'Contato']
  return (
    <>
      {/* Top support bar */}
      <div className="w-full bg-[#2f333b] text-white/90 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-7 flex items-center gap-6 text-xs">
          <Link to="/#universitarios" className="hover:text-white/100">Suporte para Universitários</Link>
          <span className="text-white/30">•</span>
          <Link to="/#empresas" className="hover:text-white/100">Suporte para Empresas</Link>
        </div>
      </div>

      {/* Main navbar pushed below the top bar */}
      <nav className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src="/logo.svg" alt="estagioAI" className="h-7 sm:h-8 w-auto" />
            </Link>

          {/* Center menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-6">
              {menu.map((item) => (
                <li key={item}>
                  <a className="text-sm font-medium text-gray-600 hover:text-[#092116] px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors" href="#">
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
    </>
  )
}

export default Navigation

