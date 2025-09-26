import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#020F1A] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(140%_140%_at_0%_-20%,rgba(111,255,199,0.14),rgba(2,15,26,0.95))]" />
        <div className="absolute bottom-[-240px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#0B3B2A]/70 blur-[180px]" />
        <div className="absolute right-[-160px] top-[-160px] h-[320px] w-[320px] rounded-full border border-white/10 opacity-60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              Ecossistema EstágioAI
            </span>
            <h3 className="mt-4 max-w-2xl text-2xl font-semibold text-white/90 sm:text-3xl">
              Conectamos estudantes, empresas e universidades em uma experiência contínua.
            </h3>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/70 shadow-[0_30px_80px_-50px_rgba(24,255,176,0.4)]">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Impacto</p>
            <p className="mt-2 text-2xl font-semibold text-[#6FFFC7]">+10k estudantes</p>
            <p className="text-xs text-white/55">receberam feedback acelerado com o EstágioAI.</p>
          </div>
        </div>

  <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr]">
          <div className="space-y-6">
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src="/images/logos/logo-v-branca.svg"
                alt="EstagioAI"
                className="h-8 w-auto"
                width="128"
                height="32"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="max-w-sm text-sm text-white/70">
              Transparência, curadoria real de vagas e uma comunidade ativa para apoiar cada candidatura.
            </p>

            <div className="flex items-center gap-3">
              {[
                { href: '#', icon: '/images/icons/envelope-solid-full.svg', label: 'E-mail' },
                { href: '#', icon: '/images/logos/Linkedin-logo.svg', label: 'LinkedIn' },
                { href: '#', icon: '/images/icons/Github.svg', label: 'GitHub' }
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#6FFFC7]/40 hover:bg-[#6FFFC7]/10 hover:text-white"
                >
                  <img src={icon} alt={label} className="h-4 w-4" width="16" height="16" loading="lazy" decoding="async" />
                </a>
              ))}
            </div>

          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.28em] text-white/50">Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                { label: 'Home', href: '/' },
                { label: 'Sobre', href: '/#sobre' },
                { label: 'Vagas', href: '/#vagas' },
                { label: 'Blog', href: '/#blog' },
                { label: 'Contato', href: '/#contato' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-[#6FFFC7]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.28em] text-white/50">Para você</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                { label: 'Para universitários', href: '/#universitarios' },
                { label: 'Para empresas', href: '/#empresas' },
                { label: 'Entrar', href: '/login' },
                { label: 'Criar conta', href: '/register' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-[#6FFFC7]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.28em] text-white/50">Legal</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                { label: 'Termos de Uso', href: '/termos-de-uso' },
                { label: 'Termos de Serviço', href: '/termos-de-servico' },
                { label: 'Política de Privacidade', href: '/politica-de-privacidade' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-[#6FFFC7]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} EstágioAI. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2 text-white/45">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#6FFFC7]" />
            MVP em constante evolução.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
