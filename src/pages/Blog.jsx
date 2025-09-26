import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { posts as blogPosts } from "./blog/posts";
import { Link } from "react-router-dom";
import { Search, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

// Normalize posts for the grid/index view
const posts = blogPosts.map((p) => ({
  title: p.title,
  tag: p.tag || (p.tags?.[0] ?? "Blog"),
  excerpt: p.excerpt,
  img: p.cover,
  slug: p.slug,
  tags: p.tags,
}));

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
    <div className="relative min-h-screen overflow-hidden bg-white text-[#02161F]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6FAFF] to-white" />
        <div className="absolute -top-64 right-[-200px] h-[520px] w-[520px] rounded-full bg-[#6FFFC7]/20 blur-3xl" />
        <div className="absolute bottom-[-360px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[220px]" />
      </div>

      <Navigation />

      <main className="relative flex flex-col">
        <section className="relative overflow-hidden bg-[#020F1A] pt-24 pb-20 text-white sm:pt-28 lg:pt-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(115%_140%_at_90%_0%,rgba(1,226,151,0.22),rgba(2,15,26,0.95))]" />
            <div className="absolute -bottom-28 left-[-140px] h-[320px] w-[320px] rounded-full bg-[#0B3B2A]/70 blur-[180px]" />
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:px-8">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
                Blog EstágioAI
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.05]">
                  Histórias, frameworks e guias para acelerar sua carreira universitária
                </h1>
                <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
                  Selecionamos aprendizados reais com empresas e estudantes que já passaram pelos mesmos processos. Filtre por tema e encontre o próximo passo com confiança.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {insights.map(({ label, value }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/40">{label}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar artigos, dicas e guias..."
                  className="w-full rounded-2xl border border-white/15 bg-white/10 py-4 pl-14 pr-4 text-base text-white shadow-[0_18px_45px_-35px_rgba(111,255,199,0.8)] outline-none transition focus:border-[#6FFFC7]/60 focus:ring-2 focus:ring-[#6FFFC7]/30"
                />
              </div>
            </div>

            {featuredPost ? (
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 text-white shadow-[0_40px_95px_-55px_rgba(24,255,176,0.65)] backdrop-blur-md"
              >
                <div className="absolute inset-0">
                  <img
                    src={featuredPost.img}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020F1A] via-[#020F1A]/70 to-transparent" />
                </div>
                <div className="relative mt-auto flex flex-col gap-4 p-8">
                  <span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Em destaque
                  </span>
                  <h3 className="text-2xl font-semibold leading-snug transition-colors group-hover:text-[#6FFFC7]">
                    {featuredPost.title}
                  </h3>
                  <p className="text-sm text-white/75 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6FFFC7]">
                    Ler artigo completo
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-10 text-white/70">
                <p className="text-lg font-semibold">Nenhum artigo encontrado com os filtros atuais.</p>
                <button
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#6FFFC7] px-5 py-2 text-sm font-semibold text-[#033124] transition hover:bg-[#58E5B4]"
                >
                  Limpar filtros
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="relative border-b border-white/10 bg-white/60 py-12 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
              <div className="inline-flex items-center gap-2 font-semibold">
                <Sparkles className="h-4 w-4 text-[#0E8F66]" />
                Explore por tema
              </div>
              {(selected.size > 0 || query.trim()) && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 transition hover:border-[#0E8F66]/40 hover:text-[#0E8F66]"
                >
                  Limpar filtros
                </button>
              )}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={clearFilters}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  selected.size === 0 && !query
                    ? "bg-[#0E8F66] text-white shadow-[0_18px_40px_-28px_rgba(14,143,102,0.8)]"
                    : "border border-slate-200 bg-white/80 text-slate-600 hover:border-[#0E8F66]/30 hover:text-[#0E8F66]"
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
                    className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#6FFFC7]/90 text-[#033124] shadow-[0_18px_40px_-28px_rgba(111,255,199,0.7)]"
                        : "border border-slate-200 bg-white/80 text-slate-600 hover:border-[#0E8F66]/30 hover:text-[#0E8F66]"
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
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-[0_35px_80px_-50px_rgba(15,23,42,0.35)]">
                <div className="text-5xl">🔍</div>
                <h3 className="mt-4 text-2xl font-semibold text-[#02161F]">Nenhum artigo encontrado</h3>
                <p className="mt-3 text-sm text-slate-600">Tente usar outros termos de busca ou selecionar categorias diferentes.</p>
                <button
                  onClick={clearFilters}
                  className="mt-6 rounded-xl bg-[#0E8F66] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b7453]"
                >
                  Limpar filtros
                </button>
              </div>
            ) : secondaryPosts.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-[0_35px_80px_-50px_rgba(15,23,42,0.35)]">
                <h3 className="text-2xl font-semibold text-[#02161F]">Você está vendo o artigo em destaque</h3>
                <p className="mt-3 text-sm text-slate-600">Aproveite o conteúdo selecionado ou ajuste os filtros para descobrir novos materiais.</p>
                {(selected.size > 0 || query.trim()) && (
                  <button
                    onClick={clearFilters}
                    className="mt-6 rounded-xl border border-[#0E8F66]/40 px-6 py-2.5 text-sm font-semibold text-[#0E8F66] transition hover:bg-[#0E8F66]/10"
                  >
                    Ver todos os artigos
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {pagePosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>

                {secondaryPosts.length > 0 && (
                  <div className="mt-14 flex flex-col items-center gap-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
                      {`Mostrando ${rangeStart.toLocaleString("pt-BR")} – ${rangeEnd.toLocaleString("pt-BR")} de ${secondaryPosts.length.toLocaleString("pt-BR")}`}
                    </div>
                    {totalPages > 1 && (
                      <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" aria-label="Paginação de artigos">
                        <button
                          type="button"
                          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                          disabled={page === 1}
                          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                            page === 1
                              ? "cursor-not-allowed border-slate-200/60 bg-white/40 text-slate-400"
                              : "border-slate-200 bg-white/80 text-slate-600 hover:border-[#0E8F66]/30 hover:text-[#0E8F66]"
                          }`}
                          aria-label="Página anterior"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Anterior
                        </button>
                        {paginationItems.map((item) =>
                          item.type === "ellipsis" ? (
                            <span key={item.value} className="px-2 text-sm font-semibold text-slate-400">
                              …
                            </span>
                          ) : (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => setPage(item.value)}
                              aria-current={page === item.value ? "page" : undefined}
                              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                                page === item.value
                                  ? "bg-[#0E8F66] text-white shadow-[0_18px_40px_-28px_rgba(14,143,102,0.8)]"
                                  : "border border-slate-200 bg-white/80 text-slate-600 hover:border-[#0E8F66]/30 hover:text-[#0E8F66]"
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
                          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                            page === totalPages
                              ? "cursor-not-allowed border-slate-200/60 bg-white/40 text-slate-400"
                              : "border-slate-200 bg-white/80 text-slate-600 hover:border-[#0E8F66]/30 hover:text-[#0E8F66]"
                          }`}
                          aria-label="Próxima página"
                        >
                          Próxima
                          <ArrowRight className="h-4 w-4" />
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
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6FFFC7]/40 to-transparent" />
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white/90 px-8 py-12 text-center shadow-[0_40px_95px_-60px_rgba(15,23,42,0.45)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8F66]/30 bg-[#0E8F66]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0E8F66]">
              Continue aprendendo
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-[#02161F]">Receba o radar semanal com as melhores vagas e guias</h3>
            <p className="mt-4 text-sm text-slate-600">
              Cadastre-se gratuitamente para receber curadoria de vagas, templates úteis e histórias reais da comunidade EstágioAI.
            </p>
            <Link
              to="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0E8F66] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b7453]"
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

function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/40 bg-white/75 p-[1px] shadow-[0_35px_90px_-55px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_40px_100px_-50px_rgba(15,23,42,0.5)]"
    >
      <div className="absolute inset-0 rounded-[30px] opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(14,143,102,0.2) 0%, rgba(37,99,235,0.08) 100%)" }} />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white/95 backdrop-blur">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={post.img}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020F1A]/80 via-[#020F1A]/30 to-transparent opacity-90" />
          <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em]">
            <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-white/85">
              {post.tag}
            </span>
            {(post.tags?.slice(0, 1) ?? []).map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white/70">
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
              Ler agora
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col gap-5 p-7">
          <h3 className="text-lg font-semibold leading-tight text-[#02161F] transition-colors group-hover:text-[#0E8F66] sm:text-xl">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200/70 bg-slate-100/50 px-3 py-1 text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-auto flex items-center justify-between text-sm font-semibold">
            <span className="inline-flex items-center gap-2 text-slate-500">
              <span className="block h-1 w-1 rounded-full bg-[#0E8F66]" />
              Conteúdo curado
            </span>
            <div className="inline-flex items-center gap-2 text-[#0E8F66] transition group-hover:gap-3">
              Ler artigo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

