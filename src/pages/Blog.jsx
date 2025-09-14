import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { posts as blogPosts } from "./blog/posts";
import { Link } from "react-router-dom";
import { BookOpen, MessageSquare, Newspaper, Layers } from "lucide-react";

// Normalize posts for the grid/index view
const posts = blogPosts.map((p) => ({
  title: p.title,
  tag: p.tag || (p.tags?.[0] ?? "Blog"),
  excerpt: p.excerpt,
  img: p.cover,
  slug: p.slug,
  tags: p.tags,
}));

export default function Blog() {
  const allCategories = useMemo(() => Array.from(new Set(posts.map((p) => p.tag))), []);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filtered = useMemo(() => {
    let arr = posts;
    if (selected.size) arr = arr.filter((p) => selected.has(p.tag));
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter((p) => (p.title + " " + p.excerpt).toLowerCase().includes(q));
    }
    return arr;
  }, [query, selected]);

  useEffect(() => { setPage(1); }, [query, selected]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pagePosts = useMemo(
    () => filtered.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize),
    [filtered, page]
  );
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  // Seções derivadas para compor a página (estilo vitrine)
  const featured = useMemo(() => filtered.slice(0, 3), [filtered]);
  const curriculos = useMemo(() => filtered.filter((p) => p.tag === "Currículo").slice(0, 3), [filtered]);
  const entrevistas = useMemo(() => filtered.filter((p) => p.tag === "Entrevista").slice(0, 3), [filtered]);
  const noticias = useMemo(() => filtered.filter((p) => ["Carreira", "Vagas"].includes(p.tag)).slice(0, 3), [filtered]);

  const toggleCategory = (c) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };
  const clearFilters = () => { setSelected(new Set()); setQuery(""); setPage(1); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/20 text-[#092116]">
      <Navigation />

      {/* Header */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] tracking-wider text-gray-500 font-semibold">BLOG</p>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-1 leading-tight">Aprendizado e carreira com propósito</h1>
              <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl">Guias práticos, entrevistas e tendências para acelerar sua jornada de estágio.</p>
            </div>
            <div className="hidden md:block text-sm text-gray-500">{filtered.length} artigos</div>
          </div>
        </div>
      </section>

      {/* Filtros + Busca */}
      <section className="py-3">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por tópicos, posts e mais"
                type="search"
                className="w-full pl-10 pr-3 py-3 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" /></svg>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap -mx-2 px-2">
              <button onClick={clearFilters} className="text-xs px-3 py-1.5 rounded-full border transition-colors bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/60">Todos</button>
              {allCategories.map((c) => (
                <button key={c} onClick={() => toggleCategory(c)} className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selected.has(c) ? "bg-emerald-600 text-white border-emerald-600" : "bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/60"}`}>{c}</button>
              ))}
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-card">
              <div className="text-sm font-semibold text-gray-700">Todos os posts</div>
              <div className="mt-2 text-xs text-gray-500">Filtre por categorias para personalizar sua leitura.</div>
            </div>
          </aside>
        </div>
      </section>

      {/* Destaques (layout dividido) + Seções por categoria */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Destaques */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">Destaques</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">Sugestões para você</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Esquerda: card grande */}
            {featured[0] && (
              <Link to={`/blog/${featured[0].slug}`} className="md:col-span-2 block overflow-hidden rounded-3xl border border-gray-200 shadow-card hover:shadow-card-lg transition">
                <div className="relative w-full bg-gray-900" style={{ minHeight: 360 }}>
                  {/* Fill the card without barras vazias; crop center for melhor composição */}
                  <img src={featured[0].img} alt="capa" className="absolute inset-0 h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
                  {/* Content anchored to the bottom with extra padding to bring title lower */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 pb-8 md:pb-12">
                    <span className="inline-flex items-center text-[11px] font-semibold text-black bg-[#01E297]/90 px-2.5 py-[3px] rounded-full">{featured[0].tag}</span>
                    <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">{featured[0].title}</h3>
                    <p className="mt-1.5 text-white/90 text-sm md:text-base max-w-3xl">{featured[0].excerpt}</p>
                  </div>
                </div>
              </Link>
            )}

            {/* Direita: dois cards pequenos */}
            <div className="grid grid-rows-2 gap-6">
              {featured.slice(1, 3).map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-card hover:shadow-card-lg transition">
                  <div className="grid grid-cols-[112px_1fr] gap-4 items-center p-4">
                    <div className="w-[112px] h-[72px] rounded-lg overflow-hidden bg-gray-50 grid place-items-center">
                      <img src={p.img} alt={p.title} className="max-w-full max-h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]" />
                    </div>
                    <div className="min-w-0">
                      <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-[2px] rounded-full">{p.tag}</span>
                      <h4 className="mt-1 text-sm font-bold text-gray-900 line-clamp-2">{p.title}</h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{p.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Explore nosso conteúdo */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg md:text-xl font-extrabold">Explore nosso conteúdo</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a href="#sec-curriculos" className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-card hover:shadow-card-lg transition flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#01E297]/10 text-[#01E297] grid place-items-center"><FileIcon icon="file" /></span>
                <div>
                  <div className="text-sm font-semibold">Currículos</div>
                  <div className="text-xs text-gray-500">Modelos e boas práticas</div>
                </div>
              </a>
              <a href="#sec-entrevistas" className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-card hover:shadow-card-lg transition flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#01E297]/10 text-[#01E297] grid place-items-center"><ChatIcon /></span>
                <div>
                  <div className="text-sm font-semibold">Entrevistas</div>
                  <div className="text-xs text-gray-500">Perguntas e roteiros</div>
                </div>
              </a>
              <a href="#sec-noticias" className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-card hover:shadow-card-lg transition flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#01E297]/10 text-[#01E297] grid place-items-center"><NewsIcon /></span>
                <div>
                  <div className="text-sm font-semibold">Notícias</div>
                  <div className="text-xs text-gray-500">Atualizações úteis</div>
                </div>
              </a>
              <a href="#recentes" className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-card hover:shadow-card-lg transition flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#01E297]/10 text-[#01E297] grid place-items-center"><Layers className="w-4 h-4" /></span>
                <div>
                  <div className="text-sm font-semibold">Recentes</div>
                  <div className="text-xs text-gray-500">O que saiu agora</div>
                </div>
              </a>
            </div>
          </div>

          {/* Seção: Currículos */}
          {!!curriculos.length && (
            <div id="sec-curriculos" className="mt-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-extrabold">Currículos</h3>
                <a href="#recentes" className="text-sm text-[#092116] font-semibold hover:underline">Ver todos</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {curriculos.map((p) => (
                  <Card key={p.slug} post={p} />
                ))}
              </div>
            </div>
          )}

          {/* Seção: Entrevistas */}
          {!!entrevistas.length && (
            <div id="sec-entrevistas" className="mt-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-extrabold">Entrevistas</h3>
                <a href="#recentes" className="text-sm text-[#092116] font-semibold hover:underline">Ver todos</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {entrevistas.map((p) => (
                  <Card key={p.slug} post={p} />
                ))}
              </div>
            </div>
          )}

          {/* Seção: Notícias */}
          {!!noticias.length && (
            <div id="sec-noticias" className="mt-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-extrabold">Notícias</h3>
                <a href="#recentes" className="text-sm text-[#092116] font-semibold hover:underline">Ver todos</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {noticias.map((p) => (
                  <Card key={p.slug} post={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Publicações recentes (com paginação) */}
      <section id="recentes" className="pt-2 pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">Publicações recentes</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">O que saiu agora</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {pagePosts.map((p) => (
              <Card key={p.slug || p.title} post={p} />
            ))}
          </div>

          {/* Paginação */}
          <nav className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex items-center gap-1 h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              Anterior
            </button>
            <div className="flex items-center gap-2">
              {pages.map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  aria-current={page === n ? "page" : undefined}
                  className={`h-10 min-w-10 px-3 rounded-xl border text-sm shadow-sm transition-colors ${
                    page === n
                      ? "bg-[#01E297] border-[#01E297] text-black"
                      : "bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/60"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Próximo"
            >
              Próximo
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </nav>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Componentes utilitários simples para evitar repetição
function Card({ post }) {
  return (
    <Link
      to={post.slug ? `/blog/${post.slug}` : "#"}
      className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-50 grid place-items-center">
        <img src={post.img} alt={post.title} className="max-h-full max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]" loading="lazy" />
      </div>
      <div className="p-5">
        <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-[2px] rounded-full">{post.tag}</span>
        <h3 className="mt-2 text-lg md:text-xl font-bold text-gray-900">{post.title}</h3>
        <p className="mt-2 text-gray-600 text-sm md:text-base">{post.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags?.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium">{t}</span>
          ))}
        </div>
        <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#092116]">
          Ler mais
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>
    </Link>
  )
}

function FileIcon() { return <BookOpen className="w-4 h-4" /> }
function ChatIcon() { return <MessageSquare className="w-4 h-4" /> }
function NewsIcon() { return <Newspaper className="w-4 h-4" /> }
