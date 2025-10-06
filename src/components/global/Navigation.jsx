import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Building2, Phone, Tag, CreditCard, Shield, GraduationCap, HelpCircle, BookOpen, FileText } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { SmartLink } from '@/components/ui/smart-link.jsx'

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [empresasDropdownOpen, setEmpresasDropdownOpen] = useState(false)
  const [universitariosDropdownOpen, setUniversitariosDropdownOpen] = useState(false)
  const [mobileEmpresasOpen, setMobileEmpresasOpen] = useState(false)
  const [mobileUniversitariosOpen, setMobileUniversitariosOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const empresasDropdownRef = useRef(null)
  const universitariosDropdownRef = useRef(null)

  // Track scroll position for navbar backdrop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setEmpresasDropdownOpen(false)
    setUniversitariosDropdownOpen(false)
    setMobileEmpresasOpen(false)
    setMobileUniversitariosOpen(false)
  }, [location])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (empresasDropdownRef.current && !empresasDropdownRef.current.contains(event.target)) {
        setEmpresasDropdownOpen(false)
      }
      if (universitariosDropdownRef.current && !universitariosDropdownRef.current.contains(event.target)) {
        setUniversitariosDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-to-main sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-ds focus:text-primary-ds focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-20"
      >
        Pular para o conteúdo principal
      </a>

      {/* Wrapper to include slim top bar + main navbar */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 overflow-visible" 
        role="navigation" 
        aria-label="Navegação principal"
      >
        {/* Top utility bar (dark) - sempre visível */}
        <div 
          className={`hidden md:block text-sm border-b transition-all duration-300 overflow-visible ${
            scrolled 
              ? 'bg-black/90 backdrop-blur-sm text-gray-300 border-white/10' 
              : 'bg-black text-white border-white/10'
          }`} 
          role="banner" 
          aria-label="Barra de utilitários"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-8 h-8 overflow-visible">
            <nav className="flex items-center gap-6 font-medium overflow-visible" role="navigation" aria-label="Links de acesso rápido">
              {/* Dropdown Para Empresas */}
              <div className="relative z-[100]" ref={empresasDropdownRef}>
                <button
                  onClick={() => {
                    setEmpresasDropdownOpen(!empresasDropdownOpen)
                    setUniversitariosDropdownOpen(false)
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-gray-300 hover:text-green-ds hover:bg-white/5 transition-all duration-200 text-xs font-medium relative z-[101]"
                  aria-label="Acesso para empresas"
                  aria-expanded={empresasDropdownOpen}
                >
                  Para empresas <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${empresasDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {/* Dropdown Menu - Empresas */}
                {empresasDropdownOpen && (
                  <div className="fixed right-8 top-[5.5rem] w-80 rounded-2xl border border-black/10 bg-white shadow-2xl p-6 z-[10000]">
                    <h3 className="mb-5 text-sm font-bold text-black uppercase tracking-wider">Para empresas</h3>
                    <div className="space-y-0.5">
                      <SmartLink to="/" forceSubdomain="empresas" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <Building2 className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Portal de Empresas</div>
                          <div className="text-xs text-gray-600">Acesse sua área exclusiva</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/suporte-empresas" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <HelpCircle className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Suporte para empresas</div>
                          <div className="text-xs text-gray-600">Atendimento e documentação</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/publicar-vagas" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <Tag className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Como publicar vagas</div>
                          <div className="text-xs text-gray-600">Passo a passo para anunciar</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/planos-e-precos" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <CreditCard className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Planos e preços</div>
                          <div className="text-xs text-gray-600">Escolha o melhor para você</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/termos-de-servico" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <Shield className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Termos de serviço</div>
                          <div className="text-xs text-gray-600">Condições de utilização</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/contato-comercial" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <Phone className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Contato comercial</div>
                          <div className="text-xs text-gray-600">Fale com nosso time</div>
                        </div>
                      </SmartLink>
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown Para Universitários */}
              <div className="relative z-[100]" ref={universitariosDropdownRef}>
                <button
                  onClick={() => {
                    setUniversitariosDropdownOpen(!universitariosDropdownOpen)
                    setEmpresasDropdownOpen(false)
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-gray-300 hover:text-green-ds hover:bg-white/5 transition-all duration-200 text-xs font-medium relative z-[101]"
                  aria-label="Acesso para universitários"
                  aria-expanded={universitariosDropdownOpen}
                >
                  Para universitários <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${universitariosDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {/* Dropdown Menu - Universitários */}
                {universitariosDropdownOpen && (
                  <div className="fixed right-8 top-[5.5rem] w-80 rounded-2xl border border-black/10 bg-white shadow-2xl p-6 z-[10000]">
                    <h3 className="mb-5 text-sm font-bold text-black uppercase tracking-wider">Para universitários</h3>
                    <div className="space-y-0.5">
                      <SmartLink to="/suporte-estudantes" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <GraduationCap className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Suporte para universitários</div>
                          <div className="text-xs text-gray-600">Ajuda para sua jornada</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/central-de-ajuda" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <HelpCircle className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Central de ajuda</div>
                          <div className="text-xs text-gray-600">Perguntas frequentes</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/melhorar-perfil" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <BookOpen className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Como melhorar seu perfil</div>
                          <div className="text-xs text-gray-600">Dicas práticas</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/termos-de-uso" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <FileText className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Termos de uso</div>
                          <div className="text-xs text-gray-600">Regras da plataforma</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/politica-de-privacidade" className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-green-ds/5 hover:shadow-sm">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-ds/10 group-hover:bg-green-ds/20 transition-colors">
                          <Shield className="h-4 w-4 text-green-ds group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-black group-hover:text-green-ds transition-colors">Política de Privacidade</div>
                          <div className="text-xs text-gray-600">Seus dados e direitos</div>
                        </div>
                      </SmartLink>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Main navbar - transparente ao dar scroll */}
        <div 
          className={`transition-all duration-500 ${
            scrolled 
              ? 'bg-white/10 backdrop-blur-xl border-b border-green-ds/30' 
              : 'bg-white border-b border-black/5'
          }`}
        >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo - Left */}
            <SmartLink to="/" className="flex items-center shrink-0" aria-label="EstágioAI - Página inicial">
              <img
                src="/images/logos/logo.svg"
                alt="EstágioAI - Logotipo"
                className="h-12 w-auto"
                width="128"
                height="32"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </SmartLink>

            {/* Center menu - Desktop */}
            <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2" role="navigation" aria-label="Menu principal">
              <SmartLink
                className="group relative px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:text-green-ds rounded-lg hover:bg-green-ds/5"
                to="/"
                aria-label="Ir para página inicial"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-green-ds transition-all duration-300 group-hover:w-3/4"></span>
              </SmartLink>
              <SmartLink
                className="group relative px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:text-green-ds rounded-lg hover:bg-green-ds/5"
                to="/sobre"
                aria-label="Saiba mais sobre nós"
              >
                <span className="relative z-10">Sobre</span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-green-ds transition-all duration-300 group-hover:w-3/4"></span>
              </SmartLink>
              <SmartLink
                className="group relative px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:text-green-ds rounded-lg hover:bg-green-ds/5"
                to="/vagas"
                aria-label="Ver vagas disponíveis"
              >
                <span className="relative z-10">Vagas</span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-green-ds transition-all duration-300 group-hover:w-3/4"></span>
              </SmartLink>
              <SmartLink
                className="group relative px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:text-green-ds rounded-lg hover:bg-green-ds/5"
                to="/blog"
                aria-label="Ler nosso blog"
              >
                <span className="relative z-10">Blog</span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-green-ds transition-all duration-300 group-hover:w-3/4"></span>
              </SmartLink>
              <SmartLink
                className="group relative px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:text-green-ds rounded-lg hover:bg-green-ds/5"
                to="/precos"
                aria-label="Ver preços"
              >
                <span className="relative z-10">Preços</span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-green-ds transition-all duration-300 group-hover:w-3/4"></span>
              </SmartLink>
            </nav>

            {/* Right actions - Desktop */}
            <div className="hidden items-center gap-3 lg:flex" role="group" aria-label="Ações de autenticação">
              <SmartLink to="/login" className="inline-flex">
                <button
                  className="group relative inline-flex items-center justify-center rounded-lg px-6 h-10 text-sm font-semibold tracking-wide text-black border-2 border-black/10 bg-white hover:border-green-ds hover:bg-green-ds/5 hover:text-green-ds transition-all duration-300 hover:scale-105"
                  aria-label="Fazer login na sua conta"
                >
                  <span className="relative z-10">Entrar</span>
                </button>
              </SmartLink>
              <SmartLink to="/register" className="inline-flex">
                <button
                  className="group relative inline-flex items-center justify-center rounded-lg px-6 h-10 text-sm font-semibold tracking-wide text-black bg-green-ds border-2 border-green-ds hover:bg-[#4AC77D] hover:border-[#4AC77D] hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(130,247,179,0.3)]"
                  aria-label="Criar uma nova conta"
                >
                  <span className="relative z-10">Criar conta</span>
                </button>
              </SmartLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden ml-auto">
              <button
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileOpen(v => !v)}
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-lg text-primary-ds bg-white hover:bg-green-ds/10 transition-all duration-200 border border-black-10"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile collapsible menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden border-t-2 border-black-10 bg-white-ds transition-[max-height] duration-300 ease-in-out ${mobileOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
          role="region"
          aria-label="Menu de navegação móvel"
          aria-hidden={!mobileOpen}
        >
          <div className="px-4 py-4 space-y-1">
            <nav role="navigation" aria-label="Menu principal móvel">
              <ul className="flex flex-col gap-0.5" role="list">
                <li role="listitem">
                  <SmartLink
                    className="block px-4 py-2.5 text-sm font-medium text-primary-ds transition-all duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                    to="/"
                    aria-label="Ir para página inicial"
                  >
                    Home
                  </SmartLink>
                </li>
                <li role="listitem">
                  <SmartLink
                    className="block px-4 py-2.5 text-sm font-medium text-primary-ds transition-all duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                    to="/sobre"
                    aria-label="Saiba mais sobre nós"
                  >
                    Sobre
                  </SmartLink>
                </li>
                <li role="listitem">
                  <SmartLink
                    className="block px-4 py-2.5 text-sm font-medium text-primary-ds transition-all duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                    to="/vagas"
                    aria-label="Ver vagas disponíveis"
                  >
                    Vagas
                  </SmartLink>
                </li>
                <li role="listitem">
                  <SmartLink
                    className="block px-4 py-2.5 text-sm font-medium text-primary-ds transition-all duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                    to="/blog"
                    aria-label="Ler nosso blog"
                  >
                    Blog
                  </SmartLink>
                </li>
                <li role="listitem">
                  <SmartLink
                    className="block px-4 py-2.5 text-sm font-medium text-primary-ds transition-all duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                    to="/precos"
                    aria-label="Ver preços"
                  >
                    Preços
                  </SmartLink>
                </li>
              </ul>
            </nav>
            
            {/* Mobile Dropdowns Section */}
            <div className="pt-3 mt-3 border-t-2 border-black-10 space-y-2">
              {/* Para Empresas - Mobile */}
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Empresas clicked, current state:', mobileEmpresasOpen)
                    setMobileEmpresasOpen(!mobileEmpresasOpen)
                    setMobileUniversitariosOpen(false)
                  }}
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-primary-ds rounded-lg hover:bg-green-ds/10 active:bg-green-ds/20 transition-all bg-[#f8f8f8]"
                  aria-expanded={mobileEmpresasOpen}
                >
                  <span>Para empresas</span>
                  <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-200 ${mobileEmpresasOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileEmpresasOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="mt-1 ml-4 space-y-1 py-2">
                    <SmartLink to="/" forceSubdomain="empresas" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <Building2 className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Portal de Empresas</div>
                        <div className="text-[10px] text-black-60">Acesse sua área exclusiva</div>
                      </div>
                    </SmartLink>
                    <SmartLink to="/suporte-empresas" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <Phone className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Suporte para empresas</div>
                        <div className="text-[10px] text-black-60">Atendimento especializado</div>
                      </div>
                    </SmartLink>
                    <SmartLink to="/contato-comercial" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <Tag className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Contato comercial</div>
                        <div className="text-[10px] text-black-60">Soluções empresariais</div>
                      </div>
                    </SmartLink>
                    <SmartLink to="/precos" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <CreditCard className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Planos & Preços</div>
                        <div className="text-[10px] text-black-60">Escolha o ideal para você</div>
                      </div>
                    </SmartLink>
                  </div>
                </div>
              </div>

              {/* Para Universitários - Mobile */}
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Universitários clicked, current state:', mobileUniversitariosOpen)
                    setMobileUniversitariosOpen(!mobileUniversitariosOpen)
                    setMobileEmpresasOpen(false)
                  }}
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-primary-ds rounded-lg hover:bg-green-ds/10 active:bg-green-ds/20 transition-all bg-[#f8f8f8]"
                  aria-expanded={mobileUniversitariosOpen}
                >
                  <span>Para universitários</span>
                  <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-200 ${mobileUniversitariosOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileUniversitariosOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="mt-1 ml-4 space-y-1 py-2">
                    <SmartLink to="/suporte-estudantes" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <GraduationCap className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Suporte para universitários</div>
                        <div className="text-[10px] text-black-60">Ajuda para sua jornada</div>
                      </div>
                    </SmartLink>
                    <SmartLink to="/central-de-ajuda" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <HelpCircle className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Central de ajuda</div>
                        <div className="text-[10px] text-black-60">Perguntas frequentes</div>
                      </div>
                    </SmartLink>
                    <SmartLink to="/melhorar-perfil" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <BookOpen className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Como melhorar seu perfil</div>
                        <div className="text-[10px] text-black-60">Dicas práticas</div>
                      </div>
                    </SmartLink>
                    <SmartLink to="/termos-de-uso" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <FileText className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Termos de uso</div>
                        <div className="text-[10px] text-black-60">Regras da plataforma</div>
                      </div>
                    </SmartLink>
                    <SmartLink to="/politica-de-privacidade" className="group flex items-center gap-3 rounded-lg p-3 hover:bg-green-ds/10 active:bg-green-ds/20 transition-all duration-200">
                      <Shield className="h-4 w-4 text-[#d97757] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-xs font-semibold text-primary-ds group-hover:text-[#d97757] transition-colors">Política de Privacidade</div>
                        <div className="text-[10px] text-black-60">Seus dados e direitos</div>
                      </div>
                    </SmartLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 flex flex-col gap-3 mt-4 border-t-2 border-black-10" role="group" aria-label="Ações de autenticação móvel">
              <SmartLink to="/login" className="w-full inline-flex">
                <button
                  className="w-full relative inline-flex items-center justify-center rounded-lg px-5 h-11 text-sm font-medium tracking-wide text-primary-ds border-2 border-black-20 bg-white-ds hover:border-green-ds hover:bg-green-ds/5 transition-all"
                  aria-label="Fazer login na sua conta"
                >
                  Entrar
                </button>
              </SmartLink>
              <SmartLink to="/register" className="w-full inline-flex">
                <button
                  className="w-full relative inline-flex items-center justify-center rounded-lg px-5 h-11 text-sm font-medium tracking-wide text-primary-ds bg-green-ds border-2 border-green-ds hover:bg-[#6ee09d] hover:border-[#6ee09d] transition-all shadow-sm"
                  aria-label="Criar uma nova conta"
                >
                  Criar conta
                </button>
              </SmartLink>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation