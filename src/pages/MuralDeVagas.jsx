import React, { useEffect, useRef, useState } from "react"
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
  img: "/images/misc/diverse-students-celebrating-internship-success.webp",
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
  img: "/images/backgrounds/estagioai-background.webp",
    tag: "Processo aberto",
  },
  {
    empresa: "Mega Retail",
    titulo: "Estágio UX/UI",
    data: "Atualizado 20 Ago 2025",
    excerpt: "Design system, prototipação e handoff com devs.",
  img: "/images/logos/logo-web.webp",
    tag: "Inscrições",
  },
]

export default function MuralDeVagas() {
  const trackRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.9 * (dir === "left" ? -1 : 1)
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  // Autoplay do carrossel com pausa ao passar o mouse
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const interval = setInterval(() => {
      if (isHovering) return
      const max = el.scrollWidth - el.clientWidth
      const next = Math.min(max, el.scrollLeft + el.clientWidth * 0.9)
      if (Math.abs(next - el.scrollLeft) < 8 || next >= max - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollTo({ left: next, behavior: "smooth" })
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [isHovering])

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

      {/* Card principal em destaque */}
      <section className="pb-4 md:pb-6">
        <div className="max-w-7xl mx-auto px-6">
          {processos[0] && (
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 shadow-card hover:shadow-card-lg transition">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                <img src={processos[0].img} alt="capa" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="inline-flex items-center font-semibold text-black bg-[#01E297]/90 px-2.5 py-[3px] rounded-full">
                      {processos[0].tag}
                    </span>
                    <span className="text-white/90">{processos[0].data}</span>
                  </div>
                  <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-white leading-tight">{processos[0].titulo}</h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                    <span className="w-6 h-6 rounded-full bg-white/90 text-[#092116] grid place-items-center font-semibold">
                      {processos[0].empresa[0]}
                    </span>
                    <span className="font-medium">{processos[0].empresa}</span>
                  </div>
                  <p className="mt-2 text-white/90 max-w-3xl">{processos[0].excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-[#01E297] text-black text-sm font-semibold hover:brightness-95">Ver detalhes
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </a>
                    <span className="inline-flex items-center h-10 px-3 rounded-xl bg-white/10 text-white text-xs border border-white/20 backdrop-blur">
                      Em destaque
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Carrossel horizontal de informativos (melhorado) */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-extrabold">Processos em destaque</h2>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scrollByCard("left")} className="p-2 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-gray-50"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollByCard("right")} className="p-2 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-gray-50"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="relative">
            {/* Buttons mobile overlay */}
            <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button onClick={() => scrollByCard("left")} className="pointer-events-auto ml-1 p-2 rounded-lg bg-white/90 border border-gray-200 shadow-sm"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollByCard("right")} className="pointer-events-auto mr-1 p-2 rounded-lg bg-white/90 border border-gray-200 shadow-sm"><ChevronRight className="w-5 h-5" /></button>
            </div>

            {/* Gradientes de borda para indicar rolagem */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />

            <div
              ref={trackRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollbarWidth: 'none' }}
            >
              {processos.map((p) => (
                <article
                  key={p.titulo}
                  className="group min-w-[78%] sm:min-w-[340px] lg:min-w-[360px] max-w-[400px] snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-gray-50">
                    <img src={p.img} alt="capa" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                    <div className="absolute top-2 left-2 inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-[2px] rounded-full border border-emerald-200/70">{p.tag}</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center font-semibold">{p.empresa[0]}</span>
                      <span className="font-medium text-gray-700">{p.empresa}</span>
                      <span className="text-gray-400">•</span>
                      <span>{p.data}</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug line-clamp-2">{p.titulo}</h3>
                    <p className="text-gray-600 text-xs mt-1 line-clamp-2">{p.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-[#092116] hover:underline">Saiba mais <span aria-hidden>→</span></a>
                      <button className="text-[11px] px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Salvar</button>
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
