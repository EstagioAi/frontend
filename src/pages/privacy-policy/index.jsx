import React, { useState } from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { ArrowLeft, Database, Eye, Share2, UserCheck, Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

const sections = [
  { id: 'dados-coletados', title: '1. Dados Coletados', icon: Database },
  { id: 'uso-dados', title: '2. Uso dos Dados', icon: Eye },
  { id: 'compartilhamento', title: '3. Compartilhamento', icon: Share2 },
  { id: 'direitos-usuario', title: '4. Direitos do Usuário', icon: UserCheck },
  { id: 'seguranca', title: '5. Segurança', icon: Shield },
]

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('')
  const [expandedSections, setExpandedSections] = useState({})

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="min-h-screen bg-primary-ds">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary-ds py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center gap-2 text-sm font-medium text-black-70 transition-colors duration-200 hover:text-green-ds"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
          
          <div className="mt-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary-ds sm:text-4xl">
              Política de Privacidade
            </h1>
            <div className="mt-4 h-1 w-32 rounded-full bg-green-ds" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-black-50">
              Última atualização: 07 set 2025
            </p>
            <p className="mt-4 text-lg leading-relaxed text-black-70">
              Esta política descreve como coletamos, usamos e protegemos suas informações pessoais na plataforma EstágioAI.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Navegação lateral */}
          <aside className="lg:w-80">
            <div className="sticky top-24 rounded-2xl border-2 border-black-10 bg-white-ds p-6 shadow-lg">
              <h3 className="text-lg font-bold text-primary-ds">Índice</h3>
              <nav className="mt-4 space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-green-ds/10 text-primary-ds border-l-2 border-green-ds'
                          : 'text-black-70 hover:bg-green-ds/5 hover:text-primary-ds'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {section.title}
                    </button>
                  )
                })}
              </nav>

              {/* Contato rápido */}
              <div className="mt-6 rounded-lg border-2 border-green-20 bg-green-ds/5 p-4">
                <h4 className="text-sm font-bold text-primary-ds">Dúvidas sobre privacidade?</h4>
                <p className="mt-1 text-xs text-black-70">
                  Entre em contato conosco
                </p>
                <a 
                  href="mailto:privacidade@estagio.ai"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-ds transition-colors duration-200 hover:text-green-hover-ds"
                >
                  privacidade@estagio.ai
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Conteúdo principal */}
          <main id="main-content" className="flex-1">
            <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg lg:p-12">
              <div className="prose prose-gray max-w-none">
                <section id="dados-coletados" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">1. Dados Coletados</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
                  </p>

                  {/* Seção expansível */}
                  <div className="mt-6 space-y-4">
                    <div className="rounded-lg border-2 border-black-10 bg-primary-ds">
                      <button
                        onClick={() => toggleSection('dados-perfil')}
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium text-primary-ds">Dados de Perfil</span>
                        {expandedSections['dados-perfil'] ? (
                          <ChevronUp className="h-4 w-4 text-black-50" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-black-50" />
                        )}
                      </button>
                      {expandedSections['dados-perfil'] && (
                        <div className="border-t border-black-10 p-4 pt-4">
                          <p className="text-black-70">
                            Nome, email, telefone, informações acadêmicas, experiências profissionais, 
                            habilidades e preferências de carreira fornecidas durante o cadastro.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="rounded-lg border-2 border-black-10 bg-primary-ds">
                      <button
                        onClick={() => toggleSection('dados-uso')}
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium text-primary-ds">Dados de Uso</span>
                        {expandedSections['dados-uso'] ? (
                          <ChevronUp className="h-4 w-4 text-black-50" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-black-50" />
                        )}
                      </button>
                      {expandedSections['dados-uso'] && (
                        <div className="border-t border-black-10 p-4 pt-4">
                          <p className="text-black-70">
                            Informações sobre como você interage com nossa plataforma, incluindo páginas 
                            visitadas, tempo de sessão, vagas visualizadas e candidaturas realizadas.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                <section id="uso-dados" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">2. Uso dos Dados</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    Utilizamos suas informações para:
                  </p>
                  <ul className="mt-4 space-y-2 text-black-70">
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1 w-1 rounded-full bg-green-ds" />
                      <span>Personalizar recomendações de vagas baseadas no seu perfil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1 w-1 rounded-full bg-green-ds" />
                      <span>Melhorar a experiência de uso da plataforma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1 w-1 rounded-full bg-green-ds" />
                      <span>Facilitar conexões entre candidatos e empresas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-2 h-1 w-1 rounded-full bg-green-ds" />
                      <span>Enviar notificações sobre oportunidades relevantes</span>
                    </li>
                  </ul>
                </section>

                <section id="compartilhamento" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">3. Compartilhamento</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    Compartilhamos dados apenas com fornecedores que nos ajudam a operar o serviço, 
                    seguindo contratos rigorosos e leis aplicáveis. Nunca vendemos suas informações pessoais.
                  </p>
                  <div className="mt-6 rounded-lg border-2 border-green-20 bg-green-ds/5 p-4">
                    <h4 className="font-medium text-primary-ds">Importante:</h4>
                    <p className="mt-1 text-sm text-black-70">
                      Seus dados só são compartilhados com empresas quando você se candidata 
                      ativamente a uma vaga específica.
                    </p>
                  </div>
                </section>

                <section id="direitos-usuario" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">4. Direitos do Usuário</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    Você tem direito a:
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border-2 border-black-10 bg-primary-ds p-4">
                      <h4 className="font-medium text-primary-ds">Acesso</h4>
                      <p className="mt-1 text-sm text-black-70">
                        Solicitar uma cópia dos seus dados pessoais
                      </p>
                    </div>
                    <div className="rounded-lg border-2 border-black-10 bg-primary-ds p-4">
                      <h4 className="font-medium text-primary-ds">Correção</h4>
                      <p className="mt-1 text-sm text-black-70">
                        Atualizar informações incorretas ou incompletas
                      </p>
                    </div>
                    <div className="rounded-lg border-2 border-black-10 bg-primary-ds p-4">
                      <h4 className="font-medium text-primary-ds">Exclusão</h4>
                      <p className="mt-1 text-sm text-black-70">
                        Solicitar a remoção dos seus dados pessoais
                      </p>
                    </div>
                    <div className="rounded-lg border-2 border-black-10 bg-primary-ds p-4">
                      <h4 className="font-medium text-primary-ds">Portabilidade</h4>
                      <p className="mt-1 text-sm text-black-70">
                        Receber seus dados em formato estruturado
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-black-70">
                    Para exercer qualquer destes direitos, entre em contato em{' '}
                    <a 
                      href="mailto:privacidade@estagio.ai" 
                      className="font-medium text-green-ds transition-colors duration-200 hover:text-green-hover-ds"
                    >
                      privacidade@estagio.ai
                    </a>
                  </p>
                </section>

                <section id="seguranca" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">5. Segurança</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    Adotamos medidas técnicas e organizacionais rigorosas para proteger suas informações:
                  </p>
                  <ul className="mt-4 space-y-2 text-black-70">
                    <li className="flex items-start gap-2">
                      <Shield className="mt-1 h-4 w-4 text-green-ds" />
                      <span>Criptografia de dados em trânsito e em repouso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-1 h-4 w-4 text-green-ds" />
                      <span>Controles de acesso baseados em funções</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-1 h-4 w-4 text-green-ds" />
                      <span>Monitoramento contínuo de segurança</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="mt-1 h-4 w-4 text-green-ds" />
                      <span>Auditorias regulares de segurança</span>
                    </li>
                  </ul>
                </section>

                {/* Call to Action */}
                <div className="mt-16 rounded-2xl border-2 border-green-20 bg-green-ds/5 p-8 text-center">
                  <h3 className="text-xl font-bold text-primary-ds">Transparência é nossa prioridade</h3>
                  <p className="mt-2 text-black-70">
                    Tem dúvidas sobre como tratamos seus dados? Estamos aqui para esclarecer.
                  </p>
                  <a 
                    href="mailto:privacidade@estagio.ai"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg"
                  >
                    <Shield className="h-4 w-4" />
                    Falar sobre Privacidade
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy

