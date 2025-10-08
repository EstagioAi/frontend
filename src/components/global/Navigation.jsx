import React, { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Phone,
  Tag,
  CreditCard,
  Shield,
  GraduationCap,
  HelpCircle,
  BookOpen,
  FileText
} from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { SmartLink } from '@/components/ui/smart-link.jsx'

const resourceSections = [
  {
    id: 'companies',
    title: 'Para empresas',
    description: 'Soluções corporativas e relacionamento',
    links: [
      {
        label: 'Portal de Empresas',
        description: 'Acesse sua área exclusiva',
        to: '/',
        forceSubdomain: 'empresas',
        icon: Building2
      },
      {
        label: 'Suporte para empresas',
        description: 'Atendimento especializado',
        to: '/suporte-empresas',
        icon: Phone
      },
      {
        label: 'Contato comercial',
        description: 'Soluções empresariais',
        to: '/contato-comercial',
        icon: Tag
      },
      {
        label: 'Planos & Preços',
        description: 'Escolha o ideal para você',
        to: '/precos',
        icon: CreditCard
      }
    ]
  },
  {
    id: 'students',
    title: 'Para universitários',
    description: 'Ferramentas para acelerar sua carreira',
    links: [
      {
        label: 'Suporte para universitários',
        description: 'Ajuda para sua jornada',
        to: '/suporte-estudantes',
        icon: GraduationCap
      },
      {
        label: 'Central de ajuda',
        description: 'Perguntas frequentes',
        to: '/central-de-ajuda',
        icon: HelpCircle
      },
      {
        label: 'Como melhorar seu perfil',
        description: 'Dicas práticas',
        to: '/melhorar-perfil',
        icon: BookOpen
      },
      {
        label: 'Termos de uso',
        description: 'Regras da plataforma',
        to: '/termos-de-uso',
        icon: FileText
      },
      {
        label: 'Política de Privacidade',
        description: 'Seus dados e direitos',
        to: '/politica-de-privacidade',
        icon: Shield
      }
    ]
  }
]

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const resourcesDropdownRef = useRef(null)

  const desktopNavLinkClass =
    'nav-link-underline relative inline-flex items-center text-sm font-semibold tracking-tight text-gray-200 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-ds'
  const desktopActionButtonClass =
    'inline-flex items-center justify-center h-9 px-4 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-ds'
  const desktopPillClass = [
    'w-full max-w-5xl rounded-full border px-8 py-3 text-base font-semibold text-gray-200 transition-all duration-500',
    scrolled
      ? 'bg-black/90 border-white/10 shadow-[0_18px_40px_rgba(10,12,27,0.55)] scale-[0.98]'
      : 'bg-black border-black/80 shadow-[0_24px_65px_rgba(10,12,27,0.45)]'
  ].join(' ')
  const desktopLoginButtonClass = [
    desktopActionButtonClass,
    'border border-white/20 bg-transparent text-gray-200 hover:border-white/60 hover:text-white'
  ].join(' ')
  const desktopSignupButtonClass = [
    desktopActionButtonClass,
    'bg-green-ds text-black hover:bg-[#4AC77D]'
  ].join(' ')

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
    setResourcesDropdownOpen(false)
    setMobileResourcesOpen(false)
  }, [location])

  useEffect(() => {
    if (!resourcesDropdownOpen) return

    const handleClickOutside = event => {
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
        setResourcesDropdownOpen(false)
      }
    }

    const handleEscape = event => {
      if (event.key === 'Escape') {
        setResourcesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [resourcesDropdownOpen])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300`}
      role="navigation"
      aria-label="Barra de navegação principal"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden flex justify-center py-2">
          <div
            className={`relative flex w-full max-w-[360px] items-center justify-between rounded-full border border-white/10 px-3 py-1.5 shadow-[0_16px_38px_rgba(12,14,33,0.26)] transition-all duration-300 ${
              mobileOpen ? 'bg-black/85 backdrop-blur-lg' : 'bg-black/75 backdrop-blur'
            }`}
          >
            <SmartLink to="/" className="flex items-center shrink-0 rounded-full px-2" aria-label="EstágioAI - Página inicial">
              <img
                src="/images/logos/logo-white.svg"
                alt="EstágioAI - Logotipo"
                className="h-8 w-auto"
                width="120"
                height="32"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </SmartLink>

            <button
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMobileOpen(v => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-[0_12px_24px_rgba(12,14,33,0.22)] transition-all duration-300 hover:scale-[1.05]"
              type="button"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <div className="pointer-events-none absolute inset-0 rounded-full border border-white/10" aria-hidden="true" />
          </div>
        </div>

        <div className="hidden items-center justify-center py-4 lg:flex">
          <div className={`${desktopPillClass} grid grid-cols-[auto_1fr_auto] items-center gap-5`}>
            <SmartLink
              to="/"
              aria-label="EstágioAI - Página inicial"
              className="flex items-center justify-center rounded-full border border-green-ds/50 bg-green-ds/15 transition-all duration-300 hover:bg-green-ds/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-ds"
            >
              <img
                src="/images/logos/logo-white.svg"
                alt="EstágioAI - Logotipo"
                className="h-8 w-auto"
                width="128"
                height="128"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </SmartLink>

            <div className="flex flex-wrap items-center justify-center gap-6" role="menubar">
              <SmartLink className={desktopNavLinkClass} to="/" aria-label="Ir para página inicial" role="menuitem">
                Home
              </SmartLink>
              <SmartLink className={desktopNavLinkClass} to="/sobre" aria-label="Saiba mais sobre nós" role="menuitem">
                Sobre
              </SmartLink>
              <SmartLink className={desktopNavLinkClass} to="/vagas" aria-label="Ver vagas disponíveis" role="menuitem">
                Vagas
              </SmartLink>
              <SmartLink className={desktopNavLinkClass} to="/blog" aria-label="Ler nosso blog" role="menuitem">
                Blog
              </SmartLink>
              <SmartLink className={desktopNavLinkClass} to="/precos" aria-label="Ver preços" role="menuitem">
                Preços
              </SmartLink>
              <div className="relative" ref={resourcesDropdownRef} role="none">
                <button
                  type="button"
                  onClick={() => setResourcesDropdownOpen(open => !open)}
                  className={`${desktopNavLinkClass} gap-1`}
                  aria-haspopup="menu"
                  aria-expanded={resourcesDropdownOpen}
                >
                  Recursos
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesDropdownOpen && (
                  <div className="absolute left-1/2 top-[calc(100%+18px)] z-50 w-[640px] -translate-x-1/2 text-black">
                    <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/95 p-8 shadow-[0_32px_90px_rgba(6,11,31,0.4)] backdrop-blur">
                      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/60" aria-hidden="true" />
                      <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/28" aria-hidden="true" />
                        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12">
                          {resourceSections.map((section, index) => (
                            <div
                              key={section.id}
                              className={`flex flex-col gap-4 ${
                                index === 0 ? 'md:pr-6' : 'md:pl-6'
                              }`}
                            >
                              <div className="space-y-1.5">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black-50">
                                  {section.title}
                                </p>
                                <p className="text-sm text-black-60">{section.description}</p>
                              </div>
                              <div className="flex flex-col gap-3">
                                {section.links.map(link => {
                                  const Icon = link.icon
                                  const linkProps = link.forceSubdomain
                                    ? { forceSubdomain: link.forceSubdomain }
                                    : {}

                                  return (
                                    <SmartLink
                                      key={link.label}
                                      to={link.to}
                                      {...linkProps}
                                      className="group flex items-center gap-3 rounded-2xl px-3 py-3.5 transition-all duration-200 hover:-translate-y-[1px] hover:bg-green-ds/8 hover:shadow-[0_14px_30px_rgba(75,199,125,0.18)]"
                                      aria-label={link.label}
                                      role="menuitem"
                                    >
                                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-ds/18 via-green-ds/10 to-transparent text-green-ds transition-all group-hover:from-green-ds/32 group-hover:via-green-ds/16">
                                        <Icon className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <div className="text-sm font-semibold text-black transition-colors group-hover:text-green-ds">
                                          {link.label}
                                        </div>
                                        <div className="text-xs text-black-50">{link.description}</div>
                                      </div>
                                    </SmartLink>
                                  )
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <SmartLink to="/login" className="inline-flex" aria-label="Fazer login na sua conta">
                <span className={desktopLoginButtonClass}>Entrar</span>
              </SmartLink>
              <SmartLink to="/register" className="inline-flex" aria-label="Criar uma nova conta">
                <span className={desktopSignupButtonClass}>Criar conta</span>
              </SmartLink>
            </div>
          </div>
        </div>

        {/* Mobile collapsible menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            mobileOpen ? 'max-h-[100vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
          }`}
          role="region"
          aria-label="Menu de navegação móvel"
          aria-hidden={!mobileOpen}
        >
          <div className="px-4 pb-6 pt-2">
            <div className="mx-auto w-full max-w-[480px]">
              <div className="relative overflow-hidden rounded-[48px] border border-white/40 bg-white/92 shadow-[0_36px_80px_rgba(10,12,27,0.35)] backdrop-blur-xl">
                <div className="absolute inset-x-10 top-0 h-1.5 rounded-b-full bg-gradient-to-r from-transparent via-green-ds/40 to-transparent" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 rounded-[48px] ring-1 ring-white/35" aria-hidden="true" />
                <div className="relative z-[1] max-h-[calc(100vh-150px)] overflow-y-auto px-6 pb-7 pt-8">
                  <nav role="navigation" aria-label="Menu principal móvel">
                    <ul className="flex flex-col gap-2" role="list">
                      <li role="listitem">
                        <SmartLink
                          className="block rounded-2xl bg-white/70 px-5 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-green-ds/15"
                          to="/"
                          aria-label="Ir para página inicial"
                        >
                          Home
                        </SmartLink>
                      </li>
                      <li role="listitem">
                        <SmartLink
                          className="block rounded-2xl bg-white/70 px-5 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-green-ds/15"
                          to="/sobre"
                          aria-label="Saiba mais sobre nós"
                        >
                          Sobre
                        </SmartLink>
                      </li>
                      <li role="listitem">
                        <SmartLink
                          className="block rounded-2xl bg-white/70 px-5 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-green-ds/15"
                          to="/vagas"
                          aria-label="Ver vagas disponíveis"
                        >
                          Vagas
                        </SmartLink>
                      </li>
                      <li role="listitem">
                        <SmartLink
                          className="block rounded-2xl bg-white/70 px-5 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-green-ds/15"
                          to="/blog"
                          aria-label="Ler nosso blog"
                        >
                          Blog
                        </SmartLink>
                      </li>
                      <li role="listitem">
                        <SmartLink
                          className="block rounded-2xl bg-white/70 px-5 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-green-ds/15"
                          to="/precos"
                          aria-label="Ver preços"
                        >
                          Preços
                        </SmartLink>
                      </li>
                      <li role="listitem" className="pt-1">
                        <button
                          type="button"
                          onClick={() => setMobileResourcesOpen(open => !open)}
                          className="flex w-full items-center justify-between rounded-2xl bg-white px-5 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-green-ds/12"
                          aria-expanded={mobileResourcesOpen}
                          aria-controls="mobile-resources-panel"
                        >
                          <span>Recursos</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <div
                          id="mobile-resources-panel"
                          className={`overflow-hidden transition-all duration-400 ${
                            mobileResourcesOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="mt-3 space-y-4 rounded-2xl border border-black/10 bg-[#f2f7f4] px-3 py-4">
                            {resourceSections.map((section, index) => (
                              <div key={section.id} className="space-y-3">
                                <div className="rounded-xl bg-white/80 px-3 py-2">
                                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black-50">
                                    {section.title}
                                  </p>
                                  <p className="mt-1 text-xs text-black-60">{section.description}</p>
                                </div>
                                <div className="space-y-2">
                                  {section.links.map(link => {
                                    const Icon = link.icon
                                    const linkProps = link.forceSubdomain
                                      ? { forceSubdomain: link.forceSubdomain }
                                      : {}

                                    return (
                                      <SmartLink
                                        key={link.label}
                                        to={link.to}
                                        {...linkProps}
                                        className="group flex items-start gap-3 rounded-xl bg-white px-3 py-3 transition-all duration-200 hover:-translate-y-[1px] hover:bg-green-ds/10"
                                        aria-label={link.label}
                                      >
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-green-ds/35 bg-green-ds/12 text-green-ds transition-transform group-hover:scale-[1.05]">
                                          <Icon className="h-4.5 w-4.5" />
                                        </div>
                                        <div className="min-w-0">
                                          <div className="text-xs font-semibold text-primary-ds group-hover:text-green-ds transition-colors">
                                            {link.label}
                                          </div>
                                          <div className="text-[11px] text-black-60">{link.description}</div>
                                        </div>
                                      </SmartLink>
                                    )
                                  })}
                                </div>
                                {index === 0 && <div className="h-px w-full bg-gradient-to-r from-transparent via-black/12 to-transparent" aria-hidden="true" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>

                  <div className="mt-6 space-y-3 border-t border-black/10 pt-6" role="group" aria-label="Ações de autenticação móvel">
                    <SmartLink to="/login" className="inline-flex w-full">
                      <button
                        className="relative inline-flex h-11 w-full items-center justify-center rounded-xl border border-black/15 bg-white px-5 text-sm font-semibold tracking-wide text-primary-ds transition-all hover:border-green-ds hover:bg-green-ds/8"
                        aria-label="Fazer login na sua conta"
                        type="button"
                      >
                        Entrar
                      </button>
                    </SmartLink>
                    <SmartLink to="/register" className="inline-flex w-full">
                      <button
                        className="relative inline-flex h-11 w-full items-center justify-center rounded-xl border border-green-ds bg-green-ds px-5 text-sm font-semibold tracking-wide text-primary-ds shadow-sm transition-all hover:border-[#6ee09d] hover:bg-[#6ee09d]"
                        aria-label="Criar uma nova conta"
                        type="button"
                      >
                        Criar conta
                      </button>
                    </SmartLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation