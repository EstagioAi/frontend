import React from 'react'

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#092116] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <img src="/logo.svg" alt="EstagioAI" className="h-7 w-auto" />
            </a>
            <p className="mt-4 text-white/70 text-sm max-w-xs">De universitários, para universitários. Transparência, feedback e IA.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Email" className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 2.5C1 1.67157 1.67157 1 2.5 1H15.5C16.3284 1 17 1.67157 17 2.5V11.5C17 12.3284 16.3284 13 15.5 13H2.5C1.67157 13 1 12.3284 1 11.5V2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 3.5L9 8.5L16 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7 10.5V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M7 8.5C7.55228 8.5 8 8.05228 8 7.5C8 6.94772 7.55228 6.5 7 6.5C6.44772 6.5 6 6.94772 6 7.5C6 8.05228 6.44772 8.5 7 8.5Z" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M11 17V12.5C11 11.6716 11.6716 11 12.5 11H12.52C13.3484 11 14.02 11.6716 14.02 12.5V17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2C7.03 2 3 6.03 3 11C3 14.87 5.64 17.99 9.14 19.19C9.64 19.28 9.86 18.98 9.86 18.72C9.86 18.49 9.85 17.78 9.85 16.95C7 17.43 6.25 15.86 6.25 15.86C5.86 14.86 5.22 14.52 5.22 14.52C4.3 13.86 5.31 13.88 5.31 13.88C6.36 13.95 6.91 15 6.91 15C7.86 16.67 9.4 16.2 10.06 15.95C10.15 15.3 10.42 14.86 10.72 14.6C8.02 14.35 5.18 13.36 5.18 9.5C5.18 8.44 5.49 7.53 6.02 6.78C5.92 6.53 5.6 5.47 6.12 3.99C6.12 3.99 7 3.73 9.85 5.34C10.71 5.08 11.63 4.95 12.54 4.95C13.45 4.95 14.37 5.08 15.23 5.34C18.08 3.73 18.96 3.99 18.96 3.99C19.48 5.47 19.16 6.53 19.06 6.78C19.59 7.53 19.9 8.44 19.9 9.5C19.9 13.37 17.05 14.35 14.35 14.6C14.7 14.89 15 15.46 15 16.39C15 17.77 15 18.98 15 18.72C15 18.98 15.21 19.29 15.72 19.19C19.22 17.99 21.86 14.87 21.86 11C21.86 6.03 17.83 2 12.86 2H12Z" stroke="currentColor" strokeWidth="1.0"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/">Home</a></li>
              <li><a href="/#sobre">Sobre</a></li>
              <li><a href="/#categorias">Categorias</a></li>
              <li><a href="/#vagas">Vagas</a></li>
              <li><a href="/#blog">Blog</a></li>
              <li><a href="/#contato">Contato</a></li>
            </ul>
          </div>

          {/* Para você */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-3">Para você</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/#universitarios">Para Universitários</a></li>
              <li><a href="/#empresas">Para Empresas</a></li>
              <li><a href="/login">Entrar</a></li>
              <li><a href="/register">Criar conta</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/termos-de-uso">Termos de Uso</a></li>
              <li><a href="/termos-de-servico">Termos de Serviço</a></li>
              <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs">© 2024 EstagioAI. Todos os direitos reservados.</p>
          <p className="text-white/50 text-xs">MVP em desenvolvimento.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

