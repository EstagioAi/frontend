import React from "react"
import Navigation from "@/components/global/Navigation"
import Footer from "@/components/global/Footer"
import { Users, Target, Zap, Heart, Award, TrendingUp, MapPin, Calendar, CheckCircle, ArrowRight, Lightbulb, Rocket, Shield, Star, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero modernizado */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
        {/* Background decorativo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#01E297]/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#01E297] to-emerald-400 text-black text-sm font-semibold shadow-lg mb-6">
                <Heart className="w-4 h-4" />
                Feito por estudantes, para estudantes
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Transformando 
                <span className="bg-gradient-to-r from-[#01E297] to-emerald-600 bg-clip-text text-transparent"> carreiras </span>
                universitárias
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Nascemos com a missão de conectar universitários e empresas com mais 
                <span className="font-semibold text-[#01E297]"> transparência, feedback e compatibilidade</span>. 
                Construímos a ponte entre talento e oportunidade.
              </p>

              {/* Stats rápidas */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#01E297]">15k+</div>
                  <div className="text-sm text-gray-600">Estudantes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#01E297]">500+</div>
                  <div className="text-sm text-gray-600">Empresas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#01E297]">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#01E297] via-emerald-400 to-[#01E297] rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
                <Button className="relative px-16 py-6 bg-gradient-to-r from-[#01E297] to-emerald-400 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 text-xl group overflow-hidden min-w-[300px]">
                  <span className="relative z-10 flex items-center gap-3">
                    Conheça nossa história
                    <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-white/40 rounded-full animate-ping group-hover:animate-pulse"></div>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#01E297]/30 to-emerald-400/30 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#01E297]/10 to-emerald-100 rounded-2xl p-4 text-center">
                    <Users className="w-8 h-8 text-[#01E297] mx-auto mb-2" />
                    <div className="text-sm font-semibold">Comunidade</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Foco</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 text-center">
                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Inovação</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 text-center">
                    <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Excelência</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">Estágio AI</div>
                  <div className="text-gray-600">O futuro dos estágios é aqui</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos valores modernizados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="bg-gradient-to-r from-[#01E297] to-emerald-600 bg-clip-text text-transparent">valores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que nos guiam na construção de uma plataforma revolucionária
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Transparência", 
                desc: "Informações claras sobre vagas, processos e etapas. Sem pegadinhas, sem surpresas.",
                color: "from-[#01E297] to-emerald-400"
              },
              { 
                icon: Zap, 
                title: "Agilidade", 
                desc: "Busca simples, notificações instantâneas e acompanhamento em tempo real do seu progresso.",
                color: "from-blue-500 to-blue-600"
              },
              { 
                icon: Target, 
                title: "Precisão", 
                desc: "IA e tecnologia avançada para conectar perfis ideais com as melhores oportunidades.",
                color: "from-purple-500 to-purple-600"
              },
            ].map((item, index) => (
              <div key={item.title} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#01E297] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa missão */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nossa <span className="bg-gradient-to-r from-[#01E297] to-emerald-600 bg-clip-text text-transparent">missão</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Revolucionar o mercado de estágios no Brasil, criando conexões genuínas entre estudantes talentosos 
                e empresas inovadoras. Acreditamos que cada universitário merece uma oportunidade justa e transparente 
                para iniciar sua carreira profissional.
              </p>
              
              <div className="space-y-4">
                {[
                  "Democratizar o acesso a oportunidades de qualidade",
                  "Eliminar barreiras e preconceitos nos processos seletivos",
                  "Promover diversidade e inclusão no mercado de trabalho",
                  "Acelerar o desenvolvimento profissional dos jovens"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#01E297] shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#01E297]/20 to-emerald-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#01E297] mb-2">2025</div>
                    <div className="text-sm text-gray-600">Ano de fundação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#01E297] mb-2">15k+</div>
                    <div className="text-sm text-gray-600">Usuários ativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#01E297] mb-2">500+</div>
                    <div className="text-sm text-gray-600">Empresas parceiras</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#01E297] mb-2">98%</div>
                    <div className="text-sm text-gray-600">Taxa de satisfação</div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-[#01E297]/10 to-emerald-100 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-[#01E297]" />
                    <span className="font-semibold text-gray-900">Nota média da plataforma</span>
                  </div>
                  <div className="text-2xl font-bold text-[#01E297]">4.9/5.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa equipe */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Conheça nossa <span className="bg-gradient-to-r from-[#01E297] to-emerald-600 bg-clip-text text-transparent">equipe</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estudantes apaixonados por tecnologia e inovação, trabalhando para transformar o mercado de estágios
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bruno Bianchi",
                role: "CEO & Founder",
                bio: "Estudante de Engenharia, apaixonado por IA e inovação.",
                image: "./images/founders/brunobianchi.png"
              },
              {
                name: "João Pedro",
                role: "CEO & Co-founder", 
                bio: "Desenvolvedora full-stack com experiência em startups",
                image: "https://i.pravatar.cc/400?img=2"
              },
              {
                name: "Tales Kodama",
                role: "CEO & Co-founder",
                bio: "Designer UX/UI focado em experiência do usuário",
                image: "https://i.pravatar.cc/400?img=3"
              }
            ].map((member, index) => (
              <div key={member.name} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#01E297] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-[#01E297] to-emerald-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já encontraram suas oportunidades ideais através da nossa plataforma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-black text-white hover:bg-gray-800 font-semibold rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
              Criar conta gratuita
            </Button>
            <Button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-black border-2 border-black/20 hover:bg-white/30 font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg">
              Saiba mais
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

