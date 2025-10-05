import React, { useEffect, useRef, useState } from "react"
import Navigation from "@/components/global/Navigation"
import Footer from "@/components/global/Footer"
import { ChevronLeft, ChevronRight, Sparkles, Bell, Filter, Calendar, GraduationCap, Info, BookmarkPlus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Conteúdo estático de exemplo (pode ser substituído por fetch futuramente)
const processos = [
  {
    empresa: "Acme Tech",
    titulo: "Programa de Estágio 2025",
    data: "Atualizado 03 Set 2025",
    excerpt: "Inscrições abertas para Eng. de Software, Dados e Produto.",
    img: "/images/misc/diverse-students-celebrating-internship-success.webp",
  tag: "Processo aberto",
  modalidade: "Híbrido",
  local: "São Paulo, SP",
  carga: "6h/dia",
  areas: ["Tech", "Produto"],
  tipo: "Programa de Estágio",
  prazo: "30 Set 2025",
  publico: "Uni (3º+ semestre)",
  link: "#",
  },
  {
    empresa: "Beta Bank",
    titulo: "Summer Internship - Dados",
    data: "Atualizado 28 Ago 2025",
  excerpt: "Pipelines e dashboards. Bolsa e benefícios.",
    img: "/images/backgrounds/estagioai-background.webp",
  tag: "Novidade",
  modalidade: "Remoto",
  local: "Brasil",
  carga: "30h/sem",
  areas: ["Dados"],
  tipo: "Summer Internship",
  prazo: "15 Out 2025",
  publico: "Uni (2º+ semestre)",
  link: "#",
  },
  {
    empresa: "StartHub",
    titulo: "Estágio em Produto",
    data: "Atualizado 22 Ago 2025",
    excerpt: "Pesquisa com usuários, métricas e roadmap.",
    img: "/images/logos/logo-web.webp",
  tag: "Processo aberto",
  modalidade: "Presencial",
  local: "Florianópolis, SC",
  carga: "6h/dia",
  areas: ["Produto"],
  tipo: "Estágio em Produto",
  prazo: "10 Out 2025",
  publico: "Uni (4º+ semestre)",
  link: "#",
  },
  {
    empresa: "Mega Retail",
    titulo: "Estágio UX/UI",
    data: "Atualizado 20 Ago 2025",
    excerpt: "Design system, prototipação e handoff.",
    img: "/images/logos/logo-web.webp",
  tag: "Inscrições",
  modalidade: "Híbrido",
  local: "Rio de Janeiro, RJ",
  carga: "20-30h/sem",
  areas: ["Design"],
  tipo: "Estágio UX/UI",
  prazo: "28 Set 2025",
  publico: "Uni (2º+ semestre)",
  link: "#",
  },
]

export default function RadarDeVagas() {
  const trackRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.9 * (dir === "left" ? -1 : 1)
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  // autoplay carrossel (pausa no hover desktop)
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
    <div className="min-h-screen bg-white-ds text-[#092116]">
      <Navigation />

      {/* Hero clean e compacto */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-14 -right-14 w-64 h-64 rounded-3xl border border-gray-200/70 rotate-6" />
          <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-3xl border border-gray-200/70 -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 md:pt-12 md:pb-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-gray-500 font-semibold">INFORMATIVO</p>
            <h1 className="text-2xl md:text-4xl font-extrabold mt-2 flex items-center gap-3">
              <span>Radar de Vagas</span>
              <span className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-[3px] rounded-full border border-emerald-200"><Sparkles className="w-3.5 h-3.5"/> Atualizado semanalmente</span>
            </h1>
            <div className="h-1.5 w-32 rounded-full bg-[#01E297] my-4" />
            <p className="text-gray-600 text-sm md:text-base">Resumo curado pela equipe sobre programas e processos seletivos abertos. Um painel claro, moderno e direto ao ponto.</p>
          </div>

          {/* Filtros simples (não funcionais por enquanto) */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-gray-200 bg-white-ds text-sm hover:bg-gray-50"><Filter className="w-4 h-4"/> Filtros</button>
            <span className="text-xs px-2 py-1 rounded-lg bg-gray-100 border border-gray-200">Remoto</span>
            <span className="text-xs px-2 py-1 rounded-lg bg-gray-100 border border-gray-200">Híbrido</span>
            <span className="text-xs px-2 py-1 rounded-lg bg-gray-100 border border-gray-200">Presencial</span>
            <span className="text-xs px-2 py-1 rounded-lg bg-gray-100 border border-gray-200">Tech</span>
            <span className="text-xs px-2 py-1 rounded-lg bg-gray-100 border border-gray-200">Produto</span>
            <span className="text-xs px-2 py-1 rounded-lg bg-gray-100 border border-gray-200">Dados</span>
          </div>
        </div>
      </section>

      {/* Destaque principal */}
      <section className="pb-1 md:pb-2">
        <div className="max-w-7xl mx-auto px-6">
          {processos[0] && (
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 shadow-card hover:shadow-card-lg transition">
              <div className="relative w-full aspect-[16/5] md:aspect-[21/7]">
                <img src={processos[0].img} alt="capa" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <div className="flex items-center gap-2 text-[11px]">
                    <Badge variant="mint" size="sm" className="text-black bg-[#01E297]/90 border-[#01E297]">
                      {processos[0].tag}
                    </Badge>
                    <span className="text-white-ds/85">{processos[0].data}</span>
                  </div>
                  <h2 className="mt-1 text-base md:text-xl font-extrabold text-white-ds leading-tight">{processos[0].titulo}</h2>
                  <div className="mt-1 flex items-center gap-2 text-[10px] md:text-[11px] text-white-ds/90">
                    <span className="w-4 h-4 rounded-full bg-white-ds/90 text-[#092116] grid place-items-center font-semibold">
                      {processos[0].empresa[0]}
                    </span>
                    <span className="font-medium">{processos[0].empresa}</span>
                  </div>
                  <p className="mt-1 text-white-ds/85 max-w-3xl text-[11px] md:text-xs">{processos[0].excerpt}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <a href="#" className="inline-flex items-center gap-1.5 h-7 md:h-8 px-2.5 md:px-3 rounded-xl bg-[#01E297] text-black text-[11px] md:text-xs font-semibold hover:brightness-95">Ver detalhes
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </a>
                    <span className="inline-flex items-center h-7 md:h-8 px-2.5 rounded-xl bg-white-ds/10 text-white-ds text-[10px] md:text-[11px] border border-white/20 backdrop-blur">
                      Em destaque
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Carrossel horizontal */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[20px] md:text-2xl font-extrabold">Processos em destaque</h2>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scrollByCard("left")} className="p-2 rounded-xl border border-gray-200 bg-white-ds shadow-sm hover:bg-gray-50"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollByCard("right")} className="p-2 rounded-xl border border-gray-200 bg-white-ds shadow-sm hover:bg-gray-50"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="relative">
            {/* Buttons mobile overlay */}
            <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button onClick={() => scrollByCard("left")} className="pointer-events-auto ml-1 p-2 rounded-lg bg-white-ds/90 border border-gray-200 shadow-sm"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scrollByCard("right")} className="pointer-events-auto mr-1 p-2 rounded-lg bg-white-ds/90 border border-gray-200 shadow-sm"><ChevronRight className="w-5 h-5" /></button>
            </div>

            {/* Gradientes laterais */}
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
                  className="group min-w-[78%] sm:min-w-[360px] lg:min-w-[380px] max-w-[420px] snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white-ds shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-gray-50">
                    <img src={p.img} alt="capa" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                    <div className="absolute top-2 left-2">
                      <Badge variant="mint" size="sm" className="shadow-sm">
                        {p.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center font-semibold">{p.empresa[0]}</span>
                      <span className="font-medium text-gray-700">{p.empresa}</span>
                      <span className="text-gray-300">•</span>
                      <span>{p.data}</span>
                    </div>
                    <h3 className="mt-1.5 text-[15px] md:text-base font-semibold text-gray-900 leading-snug line-clamp-2">{p.titulo}</h3>
                    <p className="text-gray-600 text-xs mt-1 line-clamp-2">{p.excerpt}</p>

                    {/* Informações de processo (mais informativo) */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1"><Calendar className="w-3.5 h-3.5" /> Prazo: {p.prazo}</div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1"><GraduationCap className="w-3.5 h-3.5" /> Público: {p.publico}</div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1"><Info className="w-3.5 h-3.5" /> Tipo: {p.tipo}</div>
                      <Badge variant="mint" size="sm" className="gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> {p.tag}
                      </Badge>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <a href={p.link || "#"} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium text-white-ds bg-[#092116] hover:brightness-110">Detalhes <span aria-hidden>→</span></a>
                      <button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-[11px]"><BookmarkPlus className="w-3.5 h-3.5" /> Salvar</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Alertas */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white-ds shadow-card p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-gray-700 inline-flex items-center gap-2"><Bell className="w-4 h-4"/> Receba alertas de novos processos</div>
              <p className="text-sm text-gray-600 mt-1">Um e-mail curto quando abrirem inscrições de programas relevantes.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input type="email" required placeholder="seu@email.com" className="flex-1 md:w-64 h-10 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              <button type="submit" className="h-10 px-4 rounded-xl bg-[#01E297] text-black font-semibold hover:brightness-95">Quero receber</button>
            </form>
          </div>
        </div>
      </section>

      {/* Nota explicativa */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
            O Radar de Vagas é informativo e não é um feed dinâmico. Publicamos manualmente destaques e comunicados sobre a abertura de processos seletivos para universitários. Para conteúdos completos, visite o <a href="/blog" className="font-medium text-[#092116] underline">Blog</a>.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
