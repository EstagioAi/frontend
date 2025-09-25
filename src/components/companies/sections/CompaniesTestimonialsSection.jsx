import React from 'react'
import { Star } from 'lucide-react'

const CompaniesTestimonialsSection = () => {
  const testimonials = [
    {
      company: "TechCorp",
      logo: "TC",
      name: "Carlos Mendes",
      position: "Head de RH",
      content: "O EstágioAI revolucionou nosso processo de recrutamento. Conseguimos reduzir o tempo de contratação em 60% e encontrar candidatos muito mais qualificados.",
      rating: 5
    },
    {
      company: "InnovaCorp", 
      logo: "IC",
      name: "Ana Rodriguez",
      position: "Diretora de Pessoas",
      content: "A plataforma nos conectou com talentos incríveis que não encontraríamos pelos meios tradicionais. O sistema de match é impressionante.",
      rating: 5
    },
    {
      company: "DataSolutions",
      logo: "DS", 
      name: "Roberto Silva",
      position: "VP de Engenharia",
      content: "Nunca foi tão fácil encontrar estudantes com as habilidades técnicas que precisamos. A verificação de perfis nos dá total confiança.",
      rating: 5
    }
  ]

  const companyLogos = [
    { name: "Microsoft", logo: "MS" },
    { name: "Google", logo: "GL" },
    { name: "Amazon", logo: "AM" },
    { name: "Meta", logo: "MT" },
    { name: "Netflix", logo: "NF" },
    { name: "Spotify", logo: "SP" }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#01E297]/10 border border-[#01E297]/20 mb-6">
            <Star className="w-4 h-4 text-[#01E297]" />
            <span className="text-sm font-medium text-[#0b2a1d]">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b2a1d] mb-6 leading-tight">
            Empresas que confiam
            <span className="block text-[#01E297]">na nossa plataforma</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Veja como líderes de mercado estão acelerando contratações e encontrando talentos excepcionais.
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-20 opacity-50">
          {companyLogos.map((company, index) => (
            <div key={index} className="flex items-center gap-3 px-5 py-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                {company.logo}
              </div>
              <span className="text-base font-semibold text-gray-800">{company.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#01E297]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#01E297] text-[#01E297]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-base italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#01E297]/10 rounded-xl flex items-center justify-center text-[#0b2a1d] font-bold text-sm border border-[#01E297]/20">
                  {testimonial.logo}
                </div>
                <div>
                  <div className="font-bold text-[#0b2a1d]">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm font-medium">{testimonial.position}</div>
                  <div className="text-[#01E297] text-xs font-semibold mt-1">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center bg-white rounded-2xl p-12 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-[#0b2a1d] mb-8">Resultados que comprovam a eficácia</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-3 text-[#01E297]">500+</div>
              <div className="text-gray-600 font-semibold">Empresas ativas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-3 text-[#0b2a1d]">70%</div>
              <div className="text-gray-600 font-semibold">Redução no tempo</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-3 text-[#0b2a1d]">95%</div>
              <div className="text-gray-600 font-semibold">Taxa de satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-3 text-[#01E297]">50k+</div>
              <div className="text-gray-600 font-semibold">Contratações realizadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesTestimonialsSection