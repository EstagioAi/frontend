import React, { useRef } from "react"
import Navigation from "@/components/global/Navigation"
import Footer from "@/components/global/Footer"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Página estática com informativos de processos abertos
const processos = [
  {
    empresa: "Acme Tech",
    titulo: "Programa de Estágio 2025",
    data: "Atualizado 03 Set 2025",
    excerpt: "Inscrições abertas para áreas de Eng. de Software, Dados e Produto.",
    img: "/diverse-students-celebrating-internship-success.png",
    tag: "Processo aberto",
  },
  {
    empresa: "Beta Bank",
    titulo: "Summer Internship - Dados",
    data: "Atualizado 28 Ago 2025",
    excerpt: "Desenvolvimento de pipelines e dashboards. Bolsa e benefícios.",
    img: "/hero-section-image.svg",
    tag: "Novidade",
  },
  {
    empresa: "StartHub",
    titulo: "Estágio em Produto",
    data: "Atualizado 22 Ago 2025",
    excerpt: "Trabalho próximo a founders, pesquisa com usuários e métricas.",
    img: "/estagioai-background.png",
    tag: "Processo aberto",
  },
  {
    empresa: "Mega Retail",
    titulo: "Estágio UX/UI",
    data: "Atualizado 20 Ago 2025",
    excerpt: "Design system, prototipação e handoff com devs.",
    img: "/logo-web.png",
    tag: "Inscrições",
  },
]

export default function MuralDeVagas() {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.9 * (dir === "left" ? -1 : 1)
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white text-[#092116]">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-3xl border border-gray-200/70 rotate-6" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-3xl border border-gray-200/70 -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">INFORMATIVO</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-2">Mural de Vagas</h1>
            <div className="h-2 w-40 rounded-full bg-[#01E297] my-6" />
            <p className="text-gray-600 text-base md:text-lg">Aqui publicamos informativos resumidos sobre processos de empresas que abriram. Conteúdo estático, curado pela equipe, como um blog de novidades.</p>
          </div>
        </div>
      </section>

      {/* Carrossel horizontal de informativos */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-extrabold">Processos em destaque</h2>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scrollByCard("left")} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollByCard("right")} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="relative">
            {/* Buttons mobile overlay */}
            <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button onClick={() => scrollByCard("left")} className="pointer-events-auto ml-1 p-2 rounded-lg bg-white/90 border border-gray-200 shadow-sm"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollByCard("right")} className="pointer-events-auto mr-1 p-2 rounded-lg bg-white/90 border border-gray-200 shadow-sm"><ChevronRight className="w-5 h-5" /></button>
            </div>

            <div ref={trackRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: 'none' }}>
              {processos.map((p) => (
                <article key={p.titulo} className="group min-w-[78%] sm:min-w-[340px] lg:min-w-[360px] max-w-[380px] snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="h-1 w-full bg-gradient-to-r from-[#01E297] via-emerald-400/70 to-transparent" />
                  <img src={p.img} alt="capa" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="inline-flex items-center font-semibold text-emerald-700 bg-emerald-100 px-2 py-[3px] rounded-full">{p.tag}</span>
                      <span>•</span>
                      <span>{p.data}</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug">{p.titulo}</h3>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center font-semibold">{p.empresa[0]}</span>
                      <span className="font-medium text-gray-700">{p.empresa}</span>
                    </div>
                    <p className="text-gray-600 text-xs mt-2">{p.excerpt}</p>
                    <div className="mt-3">
                      <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-[#092116] hover:underline">Saiba mais <span aria-hidden>→</span></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nota explicativa */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
            Este mural é informativo e não é um feed de vagas dinâmico. Publicamos manualmente destaques e comunicados sobre a abertura de processos seletivos para universitários. Para ver artigos e dicas completas, visite o <a href="/blog" className="font-medium text-[#092116] underline">Blog</a>.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
