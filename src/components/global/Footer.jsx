import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-20" style={{ background: '#f0efe6', color: '#3d3d3a' }}>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em]" style={{ border: '1px solid rgba(217, 119, 87, 0.3)', background: 'rgba(217, 119, 87, 0.1)', color: '#d97757' }}>
              Ecossistema EstágioAI
            </span>
            <h3 className="mt-4 max-w-2xl text-2xl font-semibold sm:text-3xl" style={{ color: '#3d3d3a' }}>
              Conectamos estudantes, empresas e universidades em uma experiência contínua.
            </h3>
          </div>
          <div className="rounded-3xl bg-white/90 px-6 py-5 text-sm backdrop-blur-sm" style={{ border: '1px solid rgba(217, 119, 87, 0.2)', boxShadow: '0 20px 50px -30px rgba(217, 119, 87, 0.2)' }}>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: '#d97757' }}>Impacto</p>
            <p className="mt-2 text-2xl font-semibold" style={{ color: '#d97757' }}>+10k estudantes</p>
            <p className="text-xs" style={{ color: '#3d3d3a', opacity: 0.7 }}>receberam feedback acelerado com o EstágioAI.</p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr]">
          <div className="space-y-6">
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src="/images/logos/logo.svg"
                alt="EstagioAI"
                className="h-8 w-auto"
                width="128"
                height="32"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: '#6b6b68' }}>
              Transparência, curadoria real de vagas e uma comunidade ativa para apoiar cada candidatura.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="E-mail"
                className="group grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110"
                style={{ border: '1px solid rgba(217, 119, 87, 0.3)', background: 'rgba(217, 119, 87, 0.1)', color: '#d97757' }}
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="group grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110"
                style={{ border: '1px solid rgba(217, 119, 87, 0.3)', background: 'rgba(217, 119, 87, 0.1)' }}
              >
                <img src="/images/logos/Linkedin-logo.svg" alt="LinkedIn" className="h-4 w-4 transition-transform group-hover:scale-110" width="16" height="16" loading="lazy" decoding="async" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="group grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110"
                style={{ border: '1px solid rgba(217, 119, 87, 0.3)', background: 'rgba(217, 119, 87, 0.1)' }}
              >
                <img src="/images/icons/Github.svg" alt="GitHub" className="h-4 w-4 transition-transform group-hover:scale-110" width="16" height="16" loading="lazy" decoding="async" />
              </a>
            </div>

          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.28em]" style={{ color: '#d97757' }}>Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Sobre', href: '/#sobre' },
                { label: 'Vagas', href: '/#vagas' },
                { label: 'Blog', href: '/#blog' },
                { label: 'Contato', href: '/#contato' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-[#d97757]" style={{ color: '#6b6b68' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.28em]" style={{ color: '#d97757' }}>Para você</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Para universitários', href: '/#universitarios' },
                { label: 'Para empresas', href: '/#empresas' },
                { label: 'Entrar', href: '/login' },
                { label: 'Criar conta', href: '/register' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-[#d97757]" style={{ color: '#6b6b68' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.28em]" style={{ color: '#d97757' }}>Legal</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Termos de Uso', href: '/termos-de-uso' },
                { label: 'Termos de Serviço', href: '/termos-de-servico' },
                { label: 'Política de Privacidade', href: '/politica-de-privacidade' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-[#d97757]" style={{ color: '#6b6b68' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row" style={{ borderTop: '1px solid rgba(217, 119, 87, 0.2)', color: '#6b6b68' }}>
          <p>© {new Date().getFullYear()} EstágioAI. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full" style={{ background: 'linear-gradient(to right, #d97757, #e89b7d)' }} />
            MVP em constante evolução.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
