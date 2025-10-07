import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const FooterBase = () => {
  return (
    <footer
      className="relative isolate overflow-hidden bg-black text-white"
      role="contentinfo"
      aria-label="Rodapé principal da EstágioAI"
    >
      <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(/images/backgrounds/background-hero.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-black/10 to-black" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 sm:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
              Conquiste o estágio ideal
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Avance rumo à carreira dos seus sonhos
            </h2>
            <p className="max-w-xl text-base text-white/70 lg:text-lg">
              Cada passo conta. Junte-se à EstágioAI para descobrir vagas selecionadas, se preparar melhor e acelerar a sua trajetória profissional.
            </p>
          </div>

        </div>

        <div className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[auto_1fr_auto]">
          <div className="space-y-6">
            <a href="/" className="inline-flex items-center gap-3" aria-label="Voltar para a página inicial">
                <img
                  src="/images/logos/logo-white.svg"
                  alt="Logotipo EstágioAI"
                  className="h-10 w-auto"
                />
        
            </a>
            <p className="max-w-sm text-sm text-white/60">
              Inteligência artificial para aproximar talentos e empresas que acreditam no potencial de jovens profissionais.
            </p>
          </div>

          <nav aria-label="Links institucionais" className="justify-self-center">
            <ul className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-white/70 sm:flex sm:flex-row sm:items-center sm:gap-8 lg:text-base">
              <li>
                <a href="/" className="transition-colors duration-200 hover:text-white">Início</a>
              </li>
              <li>
                <a href="/sobre" className="transition-colors duration-200 hover:text-white">Sobre</a>
              </li>
              <li>
                <a href="/comunidade" className="transition-colors duration-200 hover:text-white">Comunidade</a>
              </li>
              <li>
                <a href="/vagas" className="transition-colors duration-200 hover:text-white">Vagas</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-start gap-3 lg:justify-end">
            <a
              href="https://www.instagram.com/estagioai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:-translate-y-[2px] hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
              aria-label="Instagram da EstágioAI (abre em nova aba)"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/estagioai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:-translate-y-[2px] hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
              aria-label="Facebook da EstágioAI (abre em nova aba)"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/estagioai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:-translate-y-[2px] hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
              aria-label="Twitter da EstágioAI (abre em nova aba)"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-10 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} EstágioAI. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/politica-de-privacidade" className="transition-colors duration-200 hover:text-white/80">
              Política de Privacidade
            </a>
            <span aria-hidden="true">•</span>
            <a href="/termos-de-uso" className="transition-colors duration-200 hover:text-white/80">
              Termos de Uso
            </a>
            <span aria-hidden="true">•</span>
            <a href="/contato" className="transition-colors duration-200 hover:text-white/80">
              Fale conosco
            </a>
          </div>
          <p className="inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Evoluindo em constante beta
          </p>
        </div>
      </div>
    </footer>
  )
}

const Footer = React.memo(FooterBase)
Footer.displayName = 'Footer'

export default Footer
