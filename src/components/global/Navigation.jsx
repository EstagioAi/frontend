import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Building2, Phone, Tag, CreditCard, Shield, GraduationCap, HelpCircle, BookOpen, FileText } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { SmartLink } from '@/components/ui/smart-link.jsx'

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [empresasDropdownOpen, setEmpresasDropdownOpen] = useState(false)
  const [universitariosDropdownOpen, setUniversitariosDropdownOpen] = useState(false)
  const location = useLocation()
  const empresasDropdownRef = useRef(null)
  const universitariosDropdownRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setEmpresasDropdownOpen(false)
    setUniversitariosDropdownOpen(false)
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
      <nav className="sticky top-0 z-50 w-full transition-all duration-200" role="navigation" aria-label="Navegação principal">
        {/* Top utility bar (dark) */}
        <div className="hidden md:block bg-[#171717] text-white-ds text-sm border-b border-black/40" role="banner" aria-label="Barra de utilitários">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-8 h-8">
            <nav className="flex items-center gap-6 font-medium" role="navigation" aria-label="Links de acesso rápido">
              {/* Dropdown Para Empresas */}
              <div className="relative" ref={empresasDropdownRef}>
                <button
                  onClick={() => {
                    setEmpresasDropdownOpen(!empresasDropdownOpen)
                    setUniversitariosDropdownOpen(false)
                  }}
                  className="inline-flex items-center gap-1 hover:text-green-ds transition-colors"
                  aria-label="Acesso para empresas"
                  aria-expanded={empresasDropdownOpen}
                >
                  Para empresas <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${empresasDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {/* Dropdown Menu - Empresas */}
                {empresasDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-black-05 bg-white-ds/95 backdrop-blur-sm p-6 shadow-xl z-[100]">
                    <h3 className="mb-5 text-sm font-semibold text-black-70">Para empresas</h3>
                    <div className="space-y-0.5">
                      <SmartLink to="/" forceSubdomain="empresas" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <Building2 className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Portal de Empresas</div>
                          <div className="text-xs text-black-60">Acesse sua área exclusiva</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/suporte-empresas" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <HelpCircle className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Suporte para empresas</div>
                          <div className="text-xs text-black-60">Atendimento e documentação</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/publicar-vagas" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <Tag className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Como publicar vagas</div>
                          <div className="text-xs text-black-60">Passo a passo para anunciar</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/planos-e-precos" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <CreditCard className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Planos e preços</div>
                          <div className="text-xs text-black-60">Escolha o melhor para você</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/termos-de-servico" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <Shield className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Termos de serviço</div>
                          <div className="text-xs text-black-60">Condições de utilização</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/contato-comercial" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <Phone className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Contato comercial</div>
                          <div className="text-xs text-black-60">Fale com nosso time</div>
                        </div>
                      </SmartLink>
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown Para Universitários */}
              <div className="relative" ref={universitariosDropdownRef}>
                <button
                  onClick={() => {
                    setUniversitariosDropdownOpen(!universitariosDropdownOpen)
                    setEmpresasDropdownOpen(false)
                  }}
                  className="inline-flex items-center gap-1 hover:text-green-ds transition-colors"
                  aria-label="Acesso para universitários"
                  aria-expanded={universitariosDropdownOpen}
                >
                  Para universitários <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${universitariosDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {/* Dropdown Menu - Universitários */}
                {universitariosDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-black-05 bg-white-ds/95 backdrop-blur-sm p-6 shadow-xl z-[100]">
                    <h3 className="mb-5 text-sm font-semibold text-black-70">Para universitários</h3>
                    <div className="space-y-0.5">
                      <SmartLink to="/suporte-estudantes" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <GraduationCap className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Suporte para universitários</div>
                          <div className="text-xs text-black-60">Ajuda para sua jornada</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/central-de-ajuda" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <HelpCircle className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Central de ajuda</div>
                          <div className="text-xs text-black-60">Perguntas frequentes</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/melhorar-perfil" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <BookOpen className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Como melhorar seu perfil</div>
                          <div className="text-xs text-black-60">Dicas práticas</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/termos-de-uso" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <FileText className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Termos de uso</div>
                          <div className="text-xs text-black-60">Regras da plataforma</div>
                        </div>
                      </SmartLink>

                      <SmartLink to="/politica-de-privacidade" className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-[#fff5f2]">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#ffe8e0]">
                          <Shield className="h-4 w-4 text-[#d97757]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary-ds">Política de Privacidade</div>
                          <div className="text-xs text-black-60">Seus dados e direitos</div>
                        </div>
                      </SmartLink>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Main navbar - translucent over white */}
        <div className="bg-white-ds/80 backdrop-blur-md border-b border-black-10">
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
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" role="navigation" aria-label="Menu principal">
              <SmartLink
                className="px-4 py-2 text-sm font-medium text-primary-ds transition-colors duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                to="/"
                aria-label="Ir para página inicial"
              >
                Home
              </SmartLink>
              <SmartLink
                className="px-4 py-2 text-sm font-medium text-primary-ds transition-colors duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                to="/sobre"
                aria-label="Saiba mais sobre nós"
              >
                Sobre
              </SmartLink>
              <SmartLink
                className="px-4 py-2 text-sm font-medium text-primary-ds transition-colors duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                to="/vagas"
                aria-label="Ver vagas disponíveis"
              >
                Vagas
              </SmartLink>
              <SmartLink
                className="px-4 py-2 text-sm font-medium text-primary-ds transition-colors duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                to="/blog"
                aria-label="Ler nosso blog"
              >
                Blog
              </SmartLink>
              <SmartLink
                className="px-4 py-2 text-sm font-medium text-primary-ds transition-colors duration-200 hover:text-primary-ds rounded-lg hover:bg-green-ds/10"
                to="/precos"
                aria-label="Ver preços"
              >
                Preços
              </SmartLink>
            </nav>

            {/* Right actions - Desktop */}
            <div className="hidden items-center gap-3 lg:flex" role="group" aria-label="Ações de autenticação">
              <SmartLink to="/login" className="inline-flex">
                <button
                  className="relative inline-flex items-center justify-center rounded-lg px-5 h-9 text-sm font-medium tracking-wide text-primary-ds border-2 border-black-20 bg-white-ds hover:border-green-ds hover:bg-green-ds/5 transition-all"
                  aria-label="Fazer login na sua conta"
                >
                  Entrar
                </button>
              </SmartLink>
              <SmartLink to="/register" className="inline-flex">
                <button
                  className="relative inline-flex items-center justify-center rounded-lg px-5 h-9 text-sm font-medium tracking-wide text-primary-ds bg-green-ds border-2 border-green-ds hover:bg-[#6ee09d] hover:border-[#6ee09d] transition-all shadow-sm"
                  aria-label="Criar uma nova conta"
                >
                  Criar conta
                </button>
              </SmartLink>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden ml-auto">
              <button
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setMobileOpen(v => !v)}
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-lg text-primary-ds hover:bg-green-ds/10 transition-all duration-200"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile collapsible menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden border-t-2 border-black-10 bg-white-ds transition-[max-height] duration-300 ease-in-out ${mobileOpen ? 'max-h-[700px]' : 'max-h-0'}`}
          role="region"
          aria-label="Menu de navegação móvel"
          aria-hidden={!mobileOpen}
        >
          {/* Top utility links inside mobile menu */}
          <div className="px-4 pt-4 pb-2 border-b border-black-10 flex flex-col gap-2 text-sm font-medium">
            <SmartLink
              to="/empresas"
              className="inline-flex items-center gap-1 text-primary-ds hover:text-green-ds transition-colors"
              aria-label="Acesso para empresas"
            >
              Para empresas <ChevronDown className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
            </SmartLink>
            <SmartLink
              to="/universidades"
              className="inline-flex items-center gap-1 text-primary-ds hover:text-green-ds transition-colors"
              aria-label="Acesso para universitários"
            >
              Para universitários <ChevronDown className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
            </SmartLink>
          </div>
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