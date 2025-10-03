import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { posts as blogPosts } from "./blog/posts";
import { Link } from "react-router-dom";
import { Search, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Badge, EmptyState } from "@/components/ui";
import { Button } from "@/components/ui/button";

// Normalize posts for the grid/index view
const posts = blogPosts.map((p) => ({
  title: p.title,
  tag: p.tag || (p.tags?.[0] ?? "Blog"),
  excerpt: p.excerpt,
  img: p.cover,
  slug: p.slug,
  tags: p.tags,
}));

// Helper: map category to badge variant (requirement 4.3)
const getCategoryBadgeVariant = (category) => {
  const categoryMap = {
    'Currículo': 'yellow',
    'Entrevista': 'mint',
    'Carreira': 'lavender',
    'Habilidades': 'peach',
    'Blog': 'yellow',
  };
  return categoryMap[category] || 'yellow';
};

const insights = [
  { label: "artigos originais", value: `${posts.length}+` },
  { label: "tempo médio de leitura", value: "~7 min" },
  { label: "novos insights", value: "toda semana" }
];

export default function Blog() {
  const allCategories = useMemo(() => Array.from(new Set(posts.map((p) => p.tag))), []);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const filtered = useMemo(() => {
    let arr = posts;
    if (selected.size) arr = arr.filter((p) => selected.has(p.tag));
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter((p) => (p.title + " " + p.excerpt).toLowerCase().includes(q));
    }
    return arr;
  }, [query, selected]);

  const { featuredPost, secondaryPosts } = useMemo(() => {
    if (!filtered.length) return { featuredPost: null, secondaryPosts: [] };
    const [first, ...rest] = filtered;
    return { featuredPost: first, secondaryPosts: rest };
  }, [filtered]);

  useEffect(() => { setPage(1); }, [query, selected]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(secondaryPosts.length / pageSize)),
    [secondaryPosts.length]
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pagePosts = useMemo(
    () => secondaryPosts.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize),
    [secondaryPosts, page]
  );

  const rangeStart = useMemo(
    () => (secondaryPosts.length ? (page - 1) * pageSize + 1 : 0),
    [page, pageSize, secondaryPosts.length]
  );
  const rangeEnd = useMemo(
    () => Math.min(page * pageSize, secondaryPosts.length),
    [page, pageSize, secondaryPosts.length]
  );

  const paginationItems = useMemo(() => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => ({ type: "page", value: i + 1 }));
    }
    const raw = [1, totalPages, page - 1, page, page + 1];
    const numbers = Array.from(new Set(raw)).filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);
    const items = [];
    for (let i = 0; i < numbers.length; i++) {
      const current = numbers[i];
      const prev = numbers[i - 1];
      if (i > 0 && current - prev > 1) {
        items.push({ type: "ellipsis", value: `${prev}-ellipsis-${current}` });
      }
      items.push({ type: "page", value: current });
    }
    return items;
  }, [page, totalPages]);

  const toggleCategory = (c) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };
  
  const clearFilters = () => {
    setSelected(new Set());
    setQuery("");
    setPage(1);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf9f5] text-[#3d3d3a]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f5] via-white to-[#faf9f5]" />
        <div className="absolute -top-64 right-[-200px] h-[520px] w-[520px] rounded-full bg-[#d97757]/10 blur-3xl" />
        <div className="absolute bottom-[-360px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#e89b7d]/8 blur-[220px]" />
      </div>

      <Navigation />

      <main id="main-content" className="relative flex flex-col">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#3d3d3a] via-[#2a2a28] to-[#1a1a18] pt-20 pb-12 text-white sm:pt-24 lg:pt-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(115%_140%_at_90%_0%,rgba(217,119,87,0.25),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_10%_50%,rgba(232,155,125,0.18),transparent)]" />
            <div className="absolute -bottom-28 left-[-140px] h-[320px] w-[320px] rounded-full bg-[#d97757]/20 blur-[180px]" />
            <div className="absolute -top-20 right-[-100px] h-[400px] w-[400px] rounded-full bg-[#e89b7d]/15 blur-[160px]" />
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d97757]/30 bg-[#d97757]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-[#fae8e0]">
                <Sparkles className="h-3.5 w-3.5" />
                Blog EstágioAI
              </span>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
                  Histórias, frameworks e guias para acelerar sua carreira universitária
                </h1>
                <p className="max-w-2xl text-base text-white/80 sm:text-lg">
                  Selecionamos aprendizados reais com empresas e estudantes que já passaram pelos mesmos processos. Filtre por tema e encontre o próximo passo com confiança.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {insights.map(({ label, value }) => (
                  <div key={label} className="rounded-2xl border border-[#d97757]/20 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#d97757]/40 hover:bg-white/10">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/60">{label}</div>
                    <div className="mt-1.5 text-xl font-bold text-[#fae8e0]">{value}</div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60 transition-colors" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar artigos, dicas e guias..."
                  aria-label="Buscar artigos no blog"
                  className="w-full rounded-2xl border border-[#d97757]/30 bg-white/10 py-3.5 pl-14 pr-4 text-base text-white placeholder:text-white/50 shadow-[0_18px_45px_-35px_rgba(217,119,87,0.5)] outline-none backdrop-blur-sm transition-all duration-300 focus:border-[#d97757]/60 focus:bg-white/15 focus:shadow-[0_20px_50px_-30px_rgba(217,119,87,0.8)] focus:ring-2 focus:ring-[#d97757]/40"
                />
              </div>
            </div>

            {featuredPost ? (
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#d97757]/30 bg-gradient-to-br from-white/10 to-white/5 text-white shadow-[0_40px_95px_-55px_rgba(217,119,87,0.6)] backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_50px_110px_-60px_rgba(217,119,87,0.8)]"
              >
                <div className="absolute inset-0">
                  <img
                    src={featuredPost.img}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover opacity-75 transition-all duration-300 ease-in-out group-hover:opacity-85 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3d3d3a] via-[#3d3d3a]/85 to-[#3d3d3a]/30" />
                </div>
                <div className="relative mt-auto flex flex-col gap-4 p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-fit rounded-full border border-[#d97757]/40 bg-[#d97757]/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[#fae8e0] shadow-[0_8px_20px_-8px_rgba(217,119,87,0.6)] backdrop-blur-md">
                      🔥 Em destaque
                    </span>
                    <Badge variant={getCategoryBadgeVariant(featuredPost.tag)} size="sm" className="text-[11px] uppercase tracking-[0.3em] backdrop-blur-md">
                      {featuredPost.tag}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold leading-snug transition-colors duration-300 ease-in-out group-hover:text-[#fae8e0]">
                    {featuredPost.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#fae8e0] transition-all duration-300 ease-in-out group-hover:gap-3">
                    Ler artigo completo
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="relative rounded-[32px] border border-[#d97757]/30 bg-white/5 p-10 text-center text-white/70 backdrop-blur-md">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#d97757]/10">
                  <Search className="h-10 w-10 text-white/60" strokeWidth={1.5} />
                </div>
                <p className="text-xl font-semibold text-white">Nenhum artigo em destaque</p>
                <p className="mt-2 text-sm text-white/70">Ajuste os filtros para ver mais conteúdo.</p>
                <button
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#d97757] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c26647]"
                >
                  Limpar filtros
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="relative border-b border-[#d97757]/10 bg-white/80 py-12 backdrop-blur-md" aria-label="Filtros de categoria">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#6b6b68] sm:flex-row">
              <div className="inline-flex items-center gap-2 font-bold">
                <Sparkles className="h-4 w-4 text-[#d97757]" aria-hidden="true" />
                Explore por tema
              </div>
              {(selected.size > 0 || query.trim()) && (
                <button
                  onClick={clearFilters}
                  aria-label="Limpar todos os filtros aplicados"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d97757]/30 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#6b6b68] transition-all duration-300 hover:border-[#d97757]/60 hover:bg-white hover:text-[#d97757]"
                >
                  Limpar filtros
                </button>
              )}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar artigos por categoria">
              <button
                onClick={clearFilters}
                aria-pressed={selected.size === 0 && !query}
                aria-label={`Mostrar todos os artigos (${filtered.length})`}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  selected.size === 0 && !query
                    ? "bg-[#d97757] text-white shadow-[0_18px_40px_-28px_rgba(217,119,87,0.7)] hover:bg-[#c26647] hover:shadow-[0_20px_45px_-30px_rgba(217,119,87,0.85)]"
                    : "border border-[#c8c8c6] bg-white/90 text-[#6b6b68] hover:border-[#d97757]/50 hover:bg-white hover:text-[#d97757] hover:shadow-sm"
                }`}
              >
                Todos ({filtered.length})
              </button>
              {allCategories.map((category) => {
                const isActive = selected.has(category);
                return (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    aria-pressed={isActive}
                    aria-label={`Filtrar por categoria ${category}`}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#e89b7d] text-white shadow-[0_18px_40px_-28px_rgba(232,155,125,0.7)] hover:bg-[#d97757] hover:shadow-[0_20px_45px_-30px_rgba(217,119,87,0.85)]"
                        : "border border-[#c8c8c6] bg-white/90 text-[#6b6b68] hover:border-[#d97757]/50 hover:bg-white hover:text-[#d97757] hover:shadow-sm"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <EmptyState
                title="Nenhum artigo encontrado"
                message="Tente usar outros termos de busca ou selecionar categorias diferentes."
                icon="search"
                variant="blog"
                actions={
                  <Button
                    onClick={clearFilters}
                    className="rounded-xl bg-[#d97757] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c26647] hover:shadow-lg"
                  >
                    Limpar filtros
                  </Button>
                }
              />
            ) : secondaryPosts.length === 0 ? (
              <div className="rounded-3xl border border-[#d97757]/20 bg-white/90 p-12 text-center shadow-[0_35px_80px_-50px_rgba(217,119,87,0.3)]">
                <h3 className="text-2xl font-bold text-[#3d3d3a]">Você está vendo o artigo em destaque</h3>
                <p className="mt-3 text-sm text-[#6b6b68]">Aproveite o conteúdo selecionado ou ajuste os filtros para descobrir novos materiais.</p>
                {(selected.size > 0 || query.trim()) && (
                  <button
                    onClick={clearFilters}
                    className="mt-6 rounded-xl border border-[#d97757]/40 px-6 py-2.5 text-sm font-semibold text-[#d97757] transition hover:bg-[#d97757]/10"
                  >
                    Ver todos os artigos
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {pagePosts.map((post, index) => (
                    <PostCard key={post.slug} post={post} index={index} />
                  ))}
                </div>

                {secondaryPosts.length > 0 && (
                  <div className="mt-16 flex flex-col items-center gap-8">
                    <div className="text-xs font-bold uppercase tracking-[0.26em] text-[#9a9a97]">
                      {`Mostrando ${rangeStart.toLocaleString("pt-BR")} – ${rangeEnd.toLocaleString("pt-BR")} de ${secondaryPosts.length.toLocaleString("pt-BR")}`}
                    </div>
                    {totalPages > 1 && (
                      <nav className="flex flex-wrap items-center justify-center gap-3" aria-label="Paginação de artigos">
                        <button
                          type="button"
                          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                          disabled={page === 1}
                          className={`group inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold transition-all duration-300 ease-in-out ${
                            page === 1
                              ? "cursor-not-allowed border-[#c8c8c6]/60 bg-white/40 text-[#9a9a97]"
                              : "border-[#c8c8c6] bg-white/90 text-[#6b6b68] shadow-sm hover:border-[#d97757]/50 hover:bg-white hover:text-[#d97757] hover:shadow-md hover:-translate-y-0.5"
                          }`}
                          aria-label="Página anterior"
                        >
                          <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5" />
                          Anterior
                        </button>
                        {paginationItems.map((item) =>
                          item.type === "ellipsis" ? (
                            <span key={item.value} className="px-2 text-sm font-semibold text-[#9a9a97]">
                              …
                            </span>
                          ) : (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => setPage(item.value)}
                              aria-current={page === item.value ? "page" : undefined}
                              className={`min-w-[44px] rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                                page === item.value
                                  ? "bg-[#d97757] text-white shadow-[0_18px_40px_-28px_rgba(217,119,87,0.7)] hover:bg-[#c26647] hover:shadow-[0_20px_45px_-30px_rgba(217,119,87,0.85)]"
                                  : "border border-[#c8c8c6] bg-white/90 text-[#6b6b68] shadow-sm hover:border-[#d97757]/50 hover:bg-white hover:text-[#d97757] hover:shadow-md hover:-translate-y-0.5"
                              }`}
                            >
                              {item.value}
                            </button>
                          )
                        )}
                        <button
                          type="button"
                          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                          disabled={page === totalPages}
                          className={`group inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold transition-all duration-300 ease-in-out ${
                            page === totalPages
                              ? "cursor-not-allowed border-[#c8c8c6]/60 bg-white/40 text-[#9a9a97]"
                              : "border-[#c8c8c6] bg-white/90 text-[#6b6b68] shadow-sm hover:border-[#d97757]/50 hover:bg-white hover:text-[#d97757] hover:shadow-md hover:-translate-y-0.5"
                          }`}
                          aria-label="Próxima página"
                        >
                          Próxima
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </button>
                      </nav>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <section className="relative py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d97757]/40 to-transparent" />
          <div className="mx-auto max-w-5xl rounded-[32px] border border-[#d97757]/20 bg-white/90 px-8 py-12 text-center shadow-[0_40px_95px_-60px_rgba(217,119,87,0.4)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d97757]/30 bg-[#fae8e0] px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-[#d97757]">
              Continue aprendendo
            </span>
            <h3 className="mt-6 text-2xl font-bold text-[#3d3d3a]">Receba o radar semanal com as melhores vagas e guias</h3>
            <p className="mt-4 text-sm text-[#6b6b68]">
              Cadastre-se gratuitamente para receber curadoria de vagas, templates úteis e histórias reais da comunidade EstágioAI.
            </p>
            <Link
              to="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#d97757] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#c26647]"
            >
              Criar minha conta
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function PostCard({ post, index = 0 }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="blog-card-entrance group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#d97757]/20 bg-white p-[1px] shadow-[0_35px_90px_-55px_rgba(217,119,87,0.3),0_20px_50px_-30px_rgba(217,119,87,0.2)] transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_40px_100px_-50px_rgba(217,119,87,0.5),0_25px_60px_-35px_rgba(217,119,87,0.35)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 rounded-[30px] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(217,119,87,0.15) 0%, rgba(232,155,125,0.1) 100%)" }} />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white backdrop-blur">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={post.img}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3d3d3a]/95 via-[#3d3d3a]/60 to-transparent" />
          <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
            <Badge variant={getCategoryBadgeVariant(post.tag)} size="sm" className="text-[11px] uppercase tracking-[0.3em] shadow-sm backdrop-blur-md">
              {post.tag}
            </Badge>
            {(post.tags?.slice(0, 1) ?? []).map((tag) => (
              <span key={tag} className="rounded-full border border-white/25 bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <div className="inline-flex items-center gap-2 rounded-xl border border-[#d97757]/30 bg-[#d97757]/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md">
              Ler agora
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col gap-5 p-7">
          <h3 className="text-lg font-bold leading-tight text-[#3d3d3a] transition-colors duration-300 ease-in-out group-hover:text-[#d97757] sm:text-xl">
            {post.title}
          </h3>
          <p className="text-sm text-[#6b6b68] line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, idx) => (
                <Badge
                  key={tag}
                  variant={idx === 0 ? 'mint' : idx === 1 ? 'lavender' : 'peach'}
                  size="sm"
                  className="text-[11px] uppercase tracking-[0.25em]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
          <div className="mt-auto flex items-center justify-between text-sm font-bold">
            <span className="inline-flex items-center gap-2 text-[#9a9a97]">
              <span className="block h-1 w-1 rounded-full bg-[#d97757]" />
              Conteúdo curado
            </span>
            <div className="inline-flex items-center gap-2 text-[#d97757] transition-all duration-300 ease-in-out group-hover:gap-3">
              Ler artigo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

