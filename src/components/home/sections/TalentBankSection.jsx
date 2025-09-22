import React from 'react'
import { Database, MessageCircle, Mail, Users, Zap, Target } from 'lucide-react'

const TalentBankSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb orb--emerald orb-animate w-[280px] h-[280px] -top-8 -right-16 opacity-40"></div>
        <div className="orb orb--purple orb-animate w-[240px] h-[240px] -bottom-12 -left-12 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01E297] text-white text-sm font-medium mb-6">
            <Database className="w-4 h-4" />
            Banco de Talentos Automático
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black mb-6">
            Você no radar das empresas{" "}
            <span className="text-[#01E297]">automaticamente</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ao participar de qualquer vaga, seu perfil é automaticamente inserido no banco de talentos da empresa. 
            Receba oportunidades exclusivas via WhatsApp e e-mail quando seu perfil for recomendado para novas vagas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Informações */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#01E297]/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#01E297]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Inserção Automática
                  </h3>
                  <p className="text-gray-600">
                    Ao se candidatar a qualquer vaga, você é automaticamente adicionado ao banco de talentos da empresa. 
                    Sem trabalho extra, sem cadastros adicionais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Recomendações Inteligentes
                  </h3>
                  <p className="text-gray-600">
                    Nossa IA analisa seu perfil e identifica quando você é o candidato ideal para novas vagas. 
                    Você é notificado apenas para oportunidades relevantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Múltiplas Empresas
                  </h3>
                  <p className="text-gray-600">
                    Quanto mais vagas você participar, mais empresas terão seu perfil. 
                    Maximize suas oportunidades de forma inteligente.
                  </p>
                </div>
              </div>
            </div>

            {/* Notificações */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#01E297]" />
                Como você será notificado:
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>WhatsApp:</strong> Notificações instantâneas para vagas urgentes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>E-mail:</strong> Resumo semanal de oportunidades compatíveis
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>App:</strong> Push notifications para matches perfeitos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado direito - Visualização */}
          <div className="relative">
            {/* Smartphone mockup */}
            <div className="relative mx-auto max-w-sm">
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-xs text-gray-600">
                    <span>9:41</span>
                    <span>●●●</span>
                  </div>
                  
                  {/* Notificações */}
                  <div className="p-4 space-y-3">
                    <div className="text-center py-2">
                      <h5 className="font-semibold text-gray-900">Notificações</h5>
                    </div>
                    
                    {/* Notificação WhatsApp */}
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium text-green-800">WhatsApp</span>
                        <span className="text-xs text-gray-500">Agora</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Google</strong> tem uma nova vaga que combina com seu perfil! 
                        Vaga: Estagiário de Produto
                      </p>
                    </div>

                    {/* Notificação Email */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-800">E-mail</span>
                        <span className="text-xs text-gray-500">2h atrás</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <strong>Meta</strong> adicionou você ao banco de talentos! 
                        Você receberá oportunidades exclusivas.
                      </p>
                    </div>

                    {/* Notificação App */}
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Database className="w-4 h-4 text-purple-600" />
                        <span className="text-xs font-medium text-purple-800">Estágio AI</span>
                        <span className="text-xs text-gray-500">1 dia</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Você foi recomendado para 3 novas vagas! 
                        Match: 89% com Amazon Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos flutuantes */}
            <div className="absolute -top-4 -left-4 bg-[#01E297] text-white p-3 rounded-xl shadow-lg animate-bounce">
              <div className="text-xs font-medium">+5 Empresas</div>
              <div className="text-xs opacity-80">no seu banco</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg animate-pulse">
              <div className="text-xs font-medium">89% Match</div>
              <div className="text-xs opacity-80">Nova vaga!</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#01E297] to-green-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Comece agora e entre no radar das melhores empresas
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Cada candidatura é uma oportunidade de estar no banco de talentos de empresas incríveis. 
              Quanto mais você participa, mais visibilidade tem.
            </p>
            <button className="bg-white text-[#01E297] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Encontrar Vagas Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalentBankSection