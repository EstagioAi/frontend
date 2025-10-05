import React, { useState } from 'react'
import Navigation from '@/components/global/Navigation'
import Footer from '@/components/global/Footer'
import { ArrowLeft, FileText, Clock, Shield, Users, HelpCircle } from 'lucide-react'

const sections = [
  { id: 'descricao', title: '1. Descrição do Serviço', icon: FileText },
  { id: 'elegibilidade', title: '2. Elegibilidade', icon: Users },
  { id: 'limitacoes', title: '3. Limitações', icon: Shield },
  { id: 'disponibilidade', title: '4. Disponibilidade', icon: Clock },
  { id: 'suporte', title: '5. Suporte', icon: HelpCircle },
]

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
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
              Termos de Serviço
            </h1>
            <div className="mt-4 h-1 w-32 rounded-full bg-green-ds" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-black-50">
              Última atualização: 07 set 2025
            </p>
            <p className="mt-4 text-lg leading-relaxed text-black-70">
              Estes termos regem o uso da plataforma EstágioAI. Leia atentamente antes de utilizar nossos serviços.
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
            </div>
          </aside>

          {/* Conteúdo principal */}
          <main id="main-content" className="flex-1">
            <div className="rounded-2xl border-2 border-black-10 bg-white-ds p-8 shadow-lg lg:p-12">
              <div className="prose prose-gray max-w-none">
                <section id="descricao" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">1. Descrição do Serviço</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    O EstágioAI é uma plataforma digital que agrega oportunidades de estágio e fornece recursos 
                    especializados para descoberta e candidatura a vagas. Nossa missão é conectar estudantes e 
                    recém-formados com empresas que oferecem oportunidades de desenvolvimento profissional.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-black-70">
                    Oferecemos ferramentas de busca avançada, análise de currículos, templates profissionais e 
                    recursos educacionais para maximizar as chances de sucesso na busca por estágios.
                  </p>
                </section>

                <section id="elegibilidade" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">2. Elegibilidade</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    O uso da plataforma EstágioAI é destinado a pessoas maiores de 16 anos ou conforme a 
                    legislação aplicável em sua região. Usuários menores de idade devem ter autorização 
                    dos responsáveis legais.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-black-70">
                    É necessário fornecer informações verdadeiras e atualizadas durante o cadastro. 
                    Contas com informações falsas ou enganosas podem ser suspensas ou encerradas.
                  </p>
                </section>

                <section id="limitacoes" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">3. Limitações</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    O EstágioAI atua como intermediário entre candidatos e empresas. Não nos responsabilizamos 
                    por decisões de contratação, processos seletivos ou políticas internas das empresas 
                    anunciantes.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-black-70">
                    Embora nos esforcemos para manter informações precisas e atualizadas, não garantimos 
                    a veracidade de todas as informações fornecidas por terceiros, incluindo descrições 
                    de vagas e dados das empresas.
                  </p>
                </section>

                <section id="disponibilidade" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">4. Disponibilidade</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    Nos esforçamos para manter o serviço disponível 24 horas por dia, 7 dias por semana. 
                    No entanto, o serviço pode sofrer interrupções programadas para manutenção ou por 
                    fatores técnicos fora do nosso controle.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-black-70">
                    Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do 
                    serviço a qualquer momento, com ou sem aviso prévio.
                  </p>
                </section>

                <section id="suporte" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-primary-ds">5. Suporte</h2>
                  <div className="mt-2 h-0.5 w-16 bg-green-ds" />
                  <p className="mt-6 text-lg leading-relaxed text-black-70">
                    Oferecemos suporte técnico e atendimento ao usuário através do email 
                    <a 
                      href="mailto:contato@estagio.ai" 
                      className="font-medium text-green-ds transition-colors duration-200 hover:text-green-hover-ds"
                    >
                      {' '}contato@estagio.ai
                    </a>. 
                    Nos comprometemos a responder às solicitações em até 48 horas úteis.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-black-70">
                    Para questões urgentes relacionadas à segurança da conta ou problemas técnicos críticos, 
                    priorizamos o atendimento e buscamos resolver no menor tempo possível.
                  </p>
                </section>

                {/* Call to Action */}
                <div className="mt-16 rounded-2xl border-2 border-green-20 bg-green-ds/5 p-8 text-center">
                  <h3 className="text-xl font-bold text-primary-ds">Dúvidas sobre os Termos?</h3>
                  <p className="mt-2 text-black-70">
                    Entre em contato conosco para esclarecimentos adicionais.
                  </p>
                  <a 
                    href="mailto:contato@estagio.ai"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-ds px-6 py-3 text-sm font-bold text-primary-ds transition-all duration-200 hover:bg-green-hover-ds hover:shadow-lg"
                  >
                    <HelpCircle className="h-4 w-4" />
                    Falar com Suporte
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

export default TermsOfService

