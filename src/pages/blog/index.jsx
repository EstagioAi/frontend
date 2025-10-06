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

  const secondaryPosts = useMemo(() => filtered, [filtered]);

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
    <div className="relative min-h-screen overflow-hidden bg-primary-ds text-primary-ds">
      <Navigation />

      <main id="main-content" className="relative flex flex-col">
        <section className="relative overflow-hidden bg-primary-ds pt-20 pb-16 sm:pt-24 lg:pt-28">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Top right circle */}
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full border-[3px] border-green-ds opacity-40" />
            {/* Bottom left circle */}
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border-[3px] border-green-ds opacity-30" />
            {/* Accent shapes */}
            <div className="absolute top-1/4 right-1/4 h-[200px] w-[200px] rounded-full bg-green-ds/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-primary-ds sm:text-6xl lg:text-7xl">
                  A maneira mais fácil de{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">impulsionar</span>
                    <span className="absolute -bottom-2 left-0 h-3 w-full bg-green-ds -z-0" />
                  </span>{" "}
                  sua carreira.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-black-70">
                  Histórias reais, frameworks práticos e guias completos para estudantes universitários. Aprenda com quem já passou pelos mesmos{" "}
                  <span className="relative inline-block font-semibold text-primary-ds">
                    desafios
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-green-ds" />
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black-40" aria-hidden="true" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar artigos..."
                    aria-label="Buscar artigos no blog"
                    className="w-full rounded-lg border-2 border-black-10 bg-white-ds py-3.5 pl-12 pr-4 text-base text-primary-ds placeholder:text-black-40 outline-none transition-all duration-200 focus:border-green-ds focus:ring-4 focus:ring-green-20 sm:w-auto sm:min-w-[320px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-sm text-black-60">Confiado por</div>
                <div className="flex items-center gap-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-black-50">
                    {posts.length}+ artigos
                  </div>
                  <div className="h-4 w-px bg-black-ds/20" />
                  <div className="text-xs font-semibold uppercase tracking-wider text-black-50">
                    ~7 min leitura
                  </div>
                  <div className="h-4 w-px bg-black-ds/20" />
                  <div className="text-xs font-semibold uppercase tracking-wider text-black-50">
                    Toda semana
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual element */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                {/* Decorative circles around image area */}
                <div className="absolute -top-12 -right-12 h-[120%] w-[120%] rounded-full border-[3px] border-green-ds opacity-60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] w-[90%] rounded-full bg-green-ds/20" />

                {/* Placeholder for image/illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-32 w-32 text-green-ds" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-black-10 bg-white-ds py-12" aria-label="Filtros de categoria">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-black-70 sm:flex-row">
              <div className="inline-flex items-center gap-2 font-bold text-primary-ds">
                <Sparkles className="h-4 w-4 text-green-ds" aria-hidden="true" />
                Explore por tema
              </div>
              {(selected.size > 0 || query.trim()) && (
                <button
                  onClick={clearFilters}
                  aria-label="Limpar todos os filtros aplicados"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-black-10 bg-white-ds px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black-70 transition-all duration-200 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds"
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
                className={`rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  selected.size === 0 && !query
                    ? "bg-black-ds text-white-ds shadow-lg hover:bg-black-hover-ds"
                    : "border-2 border-black-10 bg-white-ds text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds"
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
                    className={`rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-green-ds text-primary-ds shadow-lg hover:bg-green-hover-ds"
                        : "border-2 border-black-10 bg-white-ds text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative bg-primary-ds py-20">
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
                    className="rounded-lg bg-black-ds px-6 py-2.5 text-sm font-semibold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg"
                  >
                    Limpar filtros
                  </Button>
                }
              />
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {pagePosts.map((post, index) => (
                    <PostCard key={post.slug} post={post} index={index} />
                  ))}
                </div>

                {secondaryPosts.length > 0 && (
                  <div className="mt-16 flex flex-col items-center gap-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-black-50">
                      {`Mostrando ${rangeStart.toLocaleString("pt-BR")} – ${rangeEnd.toLocaleString("pt-BR")} de ${secondaryPosts.length.toLocaleString("pt-BR")}`}
                    </div>
                    {totalPages > 1 && (
                      <nav className="flex flex-wrap items-center justify-center gap-3" aria-label="Paginação de artigos">
                        <button
                          type="button"
                          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                          disabled={page === 1}
                          className={`group inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                            page === 1
                              ? "cursor-not-allowed border-black-10 bg-white-ds/40 text-black-30"
                              : "border-black-10 bg-white-ds text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds"
                          }`}
                          aria-label="Página anterior"
                        >
                          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                          Anterior
                        </button>
                        {paginationItems.map((item) =>
                          item.type === "ellipsis" ? (
                            <span key={item.value} className="px-2 text-sm font-semibold text-black-40">
                              …
                            </span>
                          ) : (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => setPage(item.value)}
                              aria-current={page === item.value ? "page" : undefined}
                              className={`min-w-[44px] rounded-lg px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                                page === item.value
                                  ? "bg-green-ds text-primary-ds shadow-lg hover:bg-green-hover-ds"
                                  : "border-2 border-black-10 bg-white-ds text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds"
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
                          className={`group inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                            page === totalPages
                              ? "cursor-not-allowed border-black-10 bg-white-ds/40 text-black-30"
                              : "border-black-10 bg-white-ds text-black-70 hover:border-green-ds hover:bg-green-ds/5 hover:text-primary-ds"
                          }`}
                          aria-label="Próxima página"
                        >
                          Próxima
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </button>
                      </nav>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <section className="relative bg-primary-ds py-16">
          <div className="mx-auto max-w-5xl rounded-2xl border-2 border-black-10 bg-white-ds px-8 py-12 text-center shadow-lg">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-green-ds bg-green-ds/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-ds">
              Continue aprendendo
            </span>
            <h3 className="mt-6 text-2xl font-bold text-primary-ds">Receba o radar semanal com as melhores vagas e guias</h3>
            <p className="mt-4 text-sm text-black-70">
              Cadastre-se gratuitamente para receber curadoria de vagas, templates úteis e histórias reais da comunidade EstágioAI.
            </p>
            <Link
              to="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black-ds px-6 py-3 text-sm font-bold text-white-ds transition-all duration-200 hover:bg-black-hover-ds hover:shadow-lg"
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
      className="blog-card-entrance group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-black-10 bg-white-ds shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-green-ds hover:shadow-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/90 via-[#0f0f0f]/40 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <Badge variant={getCategoryBadgeVariant(post.tag)} size="sm" className="text-[11px] uppercase tracking-wider shadow-sm backdrop-blur-md">
            {post.tag}
          </Badge>
          {(post.tags?.slice(0, 1) ?? []).map((tag) => (
            <span key={tag} className="rounded-full border border-white-25 bg-white-ds/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white-ds/90 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <div className="inline-flex items-center gap-2 rounded-lg border-2 border-[#82f7b3]/50 bg-green-ds/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white-ds backdrop-blur-md">
            Ler agora
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col gap-4 p-6">
        <h3 className="text-lg font-bold leading-tight text-primary-ds transition-colors duration-200 group-hover:text-primary-ds sm:text-xl">
          {post.title}
        </h3>
        <p className="text-sm text-black-70 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        {post.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <Badge
                key={tag}
                variant={idx === 0 ? 'mint' : idx === 1 ? 'lavender' : 'peach'}
                size="sm"
                className="text-[11px] uppercase tracking-wider"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
        <div className="mt-auto flex items-center justify-between text-sm font-bold">
          <span className="inline-flex items-center gap-2 text-black-50">
            <span className="block h-1 w-1 rounded-full bg-green-ds" />
            Conteúdo curado
          </span>
          <div className="inline-flex items-center gap-2 text-primary-ds transition-all duration-200 group-hover:gap-3 group-hover:text-green-ds">
            Ler artigo
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

