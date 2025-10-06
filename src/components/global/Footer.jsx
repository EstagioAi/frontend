import React, { useState } from "react";
import { Mail, Send, Linkedin, Github, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('Obrigado por se inscrever! 🎉')
      setEmail('')
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 3000)
    }, 1000)
  }

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200" role="contentinfo" aria-label="Rodapé do site">
      {/* Light gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(0, 255, 127, 0.1) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />
      
      {/* Geometric pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FF7F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Section - Newsletter - Redesigned */}
        <div className="mb-16 rounded-3xl bg-gray-50 border-2 border-gray-200 p-8 lg:p-12 hover:border-green-ds/30 transition-all duration-300">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-ds mb-3">
                Fique por dentro das novidades
              </h2>
              <p className="text-lg text-gray-700">
                Receba dicas exclusivas, vagas em primeira mão e insights sobre o mercado de estágios diretamente no seu e-mail.
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="flex-1 rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-green-ds focus:outline-none focus:ring-2 focus:ring-green-ds/50 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-ds to-green-hover-ds px-6 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-green-ds/30 hover:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Inscrever'}
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                {submitMessage && (
                  <p className="text-sm text-green-ds font-medium animate-fadeIn">{submitMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Main Grid - 4 Columns */}
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Social */}
          <div>
            <a href="/" className="inline-block mb-4" aria-label="EstágioAI - Voltar ao início">
              <img
                src="/images/logos/logo.svg"
                alt="EstágioAI - Logotipo"
                className="h-10 w-auto"
                width="160"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Transformando a busca por estágios com inteligência artificial.
            </p>
            
            {/* Social Links */}
            <nav aria-label="Redes sociais">
              <ul className="flex gap-3">
                <li>
                  <a
                    href="mailto:contato@estagioai.com.br"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-green-ds border-2 border-gray-200 transition-all duration-200 hover:bg-green-ds hover:text-white hover:border-green-ds hover:shadow-lg hover:shadow-green-ds/30 hover:scale-105"
                    aria-label="Enviar e-mail para contato@estagioai.com.br"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/estagioai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-green-ds border-2 border-gray-200 transition-all duration-200 hover:bg-green-ds hover:text-white hover:border-green-ds hover:shadow-lg hover:shadow-green-ds/30 hover:scale-105"
                    aria-label="Visite nosso LinkedIn (abre em nova aba)"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/BrunoBianchi/estagioai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-green-ds border-2 border-gray-200 transition-all duration-200 hover:bg-green-ds hover:text-white hover:border-green-ds hover:shadow-lg hover:shadow-green-ds/30 hover:scale-105"
                    aria-label="Visite nosso GitHub (abre em nova aba)"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 2: Produto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-green-ds mb-6">Para Candidatos</h4>
            <nav aria-label="Links do produto">
              <ul className="space-y-3">
                <li>
                  <a href="/vagas" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Buscar Vagas</span>
                  </a>
                </li>
                <li>
                  <a href="/modelos-de-curriculo" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Modelos de Currículo</span>
                  </a>
                </li>
                <li>
                  <a href="/como-melhorar-seu-perfil" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Melhorar Perfil</span>
                  </a>
                </li>
                <li>
                  <a href="/central-de-ajuda" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Central de Ajuda</span>
                  </a>
                </li>
                <li>
                  <a href="/blog" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Para Empresas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-green-ds mb-6">Para Empresas</h4>
            <nav aria-label="Links para empresas">
              <ul className="space-y-3">
                <li>
                  <a href="/empresas" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Soluções</span>
                  </a>
                </li>
                <li>
                  <a href="/como-publicar-vagas" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Publicar Vagas</span>
                  </a>
                </li>
                <li>
                  <a href="/planos-e-precos" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Planos e Preços</span>
                  </a>
                </li>
                <li>
                  <a href="/contato-comercial" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Contato Comercial</span>
                  </a>
                </li>
                <li>
                  <a href="/suporte-para-empresas" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Suporte</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 4: Empresa */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-green-ds mb-6">Empresa</h4>
            <nav aria-label="Links da empresa">
              <ul className="space-y-3">
                <li>
                  <a href="/sobre" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Sobre Nós</span>
                  </a>
                </li>
                <li>
                  <a href="/contato" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Contato</span>
                  </a>
                </li>
                <li>
                  <a href="/login" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Entrar</span>
                  </a>
                </li>
                <li>
                  <a href="/register" className="group inline-flex items-center gap-2 text-gray-900 transition-colors duration-200 hover:text-green-ds">
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                    <span>Criar Conta</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} EstágioAI. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="/politica-de-privacidade" className="text-gray-900 hover:text-green-ds transition-colors">
              Política de Privacidade
            </a>
            <span className="text-gray-400">•</span>
            <a href="/termos-de-uso" className="text-gray-900 hover:text-green-ds transition-colors">
              Termos de Uso
            </a>
            <span className="text-gray-400">•</span>
            <a href="/termos-de-servico" className="text-gray-900 hover:text-green-ds transition-colors">
              Termos de Serviço
            </a>
          </div>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green-ds shadow-lg shadow-green-ds/50" />
            MVP em constante evolução
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
