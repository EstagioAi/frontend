import React from "react";
import { Mail } from "lucide-react";
import BackgroundShapes from "@/components/ui/background-shapes.jsx";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-20 bg-primary-ds border-t border-black-10 text-primary-ds" role="contentinfo" aria-label="Rodapé do site">
      {/* Formas decorativas de fundo */}
      <BackgroundShapes
        variant="section3"
        opacity={0.2}
        color="rgba(130, 247, 179, 0.55)"
        accentColor="rgba(15, 15, 15, 0.26)"
        accentOpacity={0.18}
        blendMode="multiply"
        className="opacity-90"
      />
      <BackgroundShapes
        variant="orbits"
        opacity={0.2}
        color="rgba(130, 247, 179, 0.95)"
        accentColor="rgba(203, 213, 225, 0.55)"
        accentOpacity={0.16}
        blendMode="normal"
        className="opacity-90"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-primary-ds" role="text" aria-label="Marca do ecossistema">
              Ecossistema EstágioAI
            </span>
            <h2 className="mt-4 max-w-2xl text-2xl font-bold sm:text-3xl text-primary-ds">
              Conectamos estudantes, empresas e universidades em uma experiência contínua.
            </h2>
          </div>
          <aside className="rounded-3xl border-2 border-green-ds bg-green-ds/10 px-6 py-5 text-sm shadow-lg" role="complementary" aria-label="Estatísticas de impacto">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-ds">Impacto</p>
            <p className="mt-2 text-2xl font-bold text-primary-ds" aria-label="Mais de dez mil estudantes">+10k estudantes</p>
            <p className="text-xs font-medium text-primary-ds">receberam feedback acelerado com o EstágioAI.</p>
          </aside>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr]">
          <div className="space-y-6">
            <a href="/" className="inline-flex items-center gap-3" aria-label="EstágioAI - Voltar ao início">
              <img
                src="/images/logos/logo.svg"
                alt="EstágioAI - Logotipo"
                className="h-8 w-auto"
                width="128"
                height="32"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-primary-ds">
              Transparência, curadoria real de vagas e uma comunidade ativa para apoiar cada candidatura.
            </p>

            <nav className="flex items-center gap-3" role="navigation" aria-label="Redes sociais">
              <a
                href="mailto:contato@estagioai.com"
                aria-label="Enviar e-mail para EstágioAI"
                className="group grid h-11 w-11 place-items-center rounded-full border-2 border-primary-ds bg-white-ds text-primary-ds transition-all duration-200 hover:border-green-ds hover:bg-green-ds hover:scale-110"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/company/estagioai"
                aria-label="Seguir EstágioAI no LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="group grid h-11 w-11 place-items-center rounded-full border-2 border-primary-ds bg-white-ds transition-all duration-200 hover:border-green-ds hover:bg-green-ds hover:scale-110"
              >
                <img src="/images/logos/Linkedin-logo.svg" alt="" className="h-4 w-4 transition-transform group-hover:scale-110" width="16" height="16" loading="lazy" decoding="async" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/estagioai"
                aria-label="Ver repositórios da EstágioAI no GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="group grid h-11 w-11 place-items-center rounded-full border-2 border-primary-ds bg-white-ds transition-all duration-200 hover:border-green-ds hover:bg-green-ds hover:scale-110"
              >
                <img src="/images/icons/Github.svg" alt="" className="h-4 w-4 transition-transform group-hover:scale-110" width="16" height="16" loading="lazy" decoding="async" aria-hidden="true" />
              </a>
            </nav>

          </div>

          <nav role="navigation" aria-label="Links de navegação">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary-ds">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm" role="list">
              {[
                { label: 'Início', href: '/', ariaLabel: 'Ir para página inicial' },
                { label: 'Sobre', href: '/#sobre', ariaLabel: 'Ir para seção sobre nós' },
                { label: 'Vagas', href: '/#vagas', ariaLabel: 'Ver vagas disponíveis' },
                { label: 'Blog', href: '/#blog', ariaLabel: 'Ler artigos do blog' },
                { label: 'Contato', href: '/#contato', ariaLabel: 'Entrar em contato' }
              ].map(({ label, href, ariaLabel }) => (
                <li key={label} role="listitem">
                  <a href={href} className="font-medium text-primary-ds transition-colors duration-200 hover:text-green-ds" aria-label={ariaLabel}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav role="navigation" aria-label="Links para usuários">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary-ds">Para você</h3>
            <ul className="mt-5 space-y-3 text-sm" role="list">
              {[
                { label: 'Para universitários', href: '/#universitarios', ariaLabel: 'Informações para universitários' },
                { label: 'Para empresas', href: '/#empresas', ariaLabel: 'Informações para empresas' },
                { label: 'Entrar', href: '/login', ariaLabel: 'Fazer login na sua conta' },
                { label: 'Criar conta', href: '/register', ariaLabel: 'Criar uma nova conta' }
              ].map(({ label, href, ariaLabel }) => (
                <li key={label} role="listitem">
                  <a href={href} className="font-medium text-primary-ds transition-colors duration-200 hover:text-green-ds" aria-label={ariaLabel}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav role="navigation" aria-label="Documentos legais">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary-ds">Legal</h3>
            <ul className="mt-5 space-y-3 text-sm" role="list">
              {[
                { label: 'Termos de Uso', href: '/termos-de-uso', ariaLabel: 'Ler termos de uso' },
                { label: 'Termos de Serviço', href: '/termos-de-servico', ariaLabel: 'Ler termos de serviço' },
                { label: 'Política de Privacidade', href: '/politica-de-privacidade', ariaLabel: 'Ler política de privacidade' }
              ].map(({ label, href, ariaLabel }) => (
                <li key={label} role="listitem">
                  <a href={href} className="font-medium text-primary-ds transition-colors duration-200 hover:text-green-ds" aria-label={ariaLabel}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t-2 border-black-10 pt-8 text-xs font-medium text-primary-ds sm:flex-row">
          <p>© {new Date().getFullYear()} EstágioAI. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green-ds shadow-lg shadow-[#82f7b3]/50" />
            MVP em constante evolução.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
