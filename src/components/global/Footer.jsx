import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#092116] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src="/images/logos/logo-v-branca.svg"
                alt="EstagioAI"
                className="h-7 w-auto"
                width="120"
                height="28"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="mt-4 text-white/70 text-sm max-w-xs">
              De universitários, para universitários. Transparência, feedback e
              IA.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="e-mail"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
              >
                <img
                  src="/images/icons/envelope-solid-full.svg"
                  alt="E-mail"
                  className="w-4 h-4"
                  width="16"
                  height="16"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a
                href="#"
                aria-label="Linkedin"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
              >
                <img
                  src="/images/logos/Linkedin-logo.svg"
                  alt="Linkedin"
                  className="w-4 h-4"
                  width="16"
                  height="16"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
              >
                <img src="/images/icons/Github.svg" alt="GitHub" className="w-4 h-4" width="16" height="16" loading="lazy" decoding="async" />
              </a>
            </div>

            {/* Newsletter compacta */}
            <div className="mt-6">
              <p className="text-xs text-white/60 mb-2">
                Inscreva-se na nossa newsletter
              </p>
              <form
                className="flex items-center gap-2"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Inscrever newsletter"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Seu e-mail
                </label>
                <div className="relative w-full sm:w-52">
                  <svg
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/60"
                    viewBox="0 0 18 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 2.5C1 1.67 1.67 1 2.5 1H15.5C16.33 1 17 1.67 17 2.5V11.5C17 12.33 16.33 13 15.5 13H2.5C1.67 13 1 12.33 1 11.5V2.5Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 3.5L9 8.5L16 3.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="seu@email.com"
                    aria-label="Seu e-mail"
                    className="h-8 w-full pl-8 pr-2 rounded-md border border-white/15 bg-white/5 text-white text-[13px] placeholder:text-white/60 outline-none focus-visible:ring-[3px] focus-visible:ring-emerald-500/25 focus-visible:border-emerald-400"
                  />
                </div>
                <button
                  className="h-8 px-2 rounded-md border border-white/15 bg-white/5 text-white/90 text-[13px] hover:bg-white/10 transition-colors"
                  type="submit"
                >
                  Inscrever
                </button>
              </form>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#sobre">Sobre</a>
              </li>
              <li>
                <a href="/#vagas">Vagas</a>
              </li>
              <li>
                <a href="/#blog">Blog</a>
              </li>
              <li>
                <a href="/#contato">Contato</a>
              </li>
            </ul>
          </div>

          {/* Para você */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-3">
              Para você
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/#universitarios">Para Universitários</a>
              </li>
              <li>
                <a href="/#empresas">Para Empresas</a>
              </li>
              <li>
                <a href="/login">Entrar</a>
              </li>
              <li>
                <a href="/register">Criar conta</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/termos-de-uso">Termos de Uso</a>
              </li>
              <li>
                <a href="/termos-de-servico">Termos de Serviço</a>
              </li>
              <li>
                <a href="/politica-de-privacidade">Política de Privacidade</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} EstagioAI. Todos os direitos
            reservados.
          </p>
          <p className="text-white/50 text-xs">MVP em desenvolvimento.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
