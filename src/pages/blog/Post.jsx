import React, { useEffect, useState, useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import { getPostBySlug } from "./posts";
import { setBasicTags } from "@/lib/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
// CSS específico dos posts (tipografia markdown e detalhes visuais)
import "./post.css";
// Tema de syntax highlighting (clean e discreto)
import "highlight.js/styles/github-dark-dimmed.css";

const BASE_URL = "https://estagioai.com";

// Helper: convert legacy sections schema into Markdown so we can render everything via MD
function sectionsToMarkdown(sections = []) {
  if (!Array.isArray(sections)) return "";
  const lines = [];
  for (const s of sections) {
    if (!s) continue;
    if (s.heading) lines.push(`## ${s.heading}`);
    if (s.quote) lines.push(`> ${s.quote}`);
    if (Array.isArray(s.body)) s.body.forEach((p) => lines.push(p));
    if (Array.isArray(s.list) && s.list.length) {
      s.list.forEach((li) => lines.push(`- ${li}`));
    }
    if (Array.isArray(s.children)) {
      for (const c of s.children) {
        if (c.heading) lines.push(`### ${c.heading}`);
        if (Array.isArray(c.body)) c.body.forEach((p) => lines.push(p));
        if (Array.isArray(c.list) && c.list.length) c.list.forEach((li) => lines.push(`- ${li}`));
      }
    }
    if (s.cta?.label) lines.push(`[${s.cta.label}](${s.cta.href || "#"})`);
    lines.push("");
  }
  return lines.join("\n\n");
}

export default function Post() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);
  const tocScrollRef = useRef(null);
  const articleRef = useRef(null);

  // Build markdown content from either post.markdown or legacy sections schema
  const markdown = useMemo(() => {
    if (!post) return "";
    // Prefer the new schema: `body` contains full markdown
    if (typeof post.body === "string" && post.body.trim()) return post.body;
    // Backward-compat: some posts may still use `markdown`
    if (typeof post.markdown === "string" && post.markdown.trim()) return post.markdown;
    // Legacy schema: structured sections -> convert to markdown
    return sectionsToMarkdown(post.sections || []);
  }, [post]);
  // Dynamic TOC extracted from rendered markdown headings
  const [toc, setToc] = useState([]);

  useEffect(() => {
    if (!post) return;
    const url = `${BASE_URL}/blog/${post.slug}`;
    const title = `${post.title} — Estágio AI`;
    const description = post.excerpt;
  const image = post.cover || `${BASE_URL}/images/backgrounds/estagioai-background.webp`;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description,
      datePublished: post.date,
      dateModified: post.updatedAt || post.date,
      image: image.startsWith("http") ? image : `${BASE_URL}${image}`,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: post.author?.name || "Estágio AI" },
      publisher: { "@type": "Organization", name: "Estágio AI" },
    };

    setBasicTags({
      title,
      description,
      canonical: url,
      og: { title, description, url, type: "article", image },
      twitter: { card: "summary_large_image", title, description, image },
      jsonLd,
    });
  }, [post]);

  // ScrollSpy + reading progress based on actual headings present in article
  useEffect(() => {
    if (!post) return;

    // Collect headings from the rendered markdown
    const container = articleRef.current;
    const headingEls = container ? Array.from(container.querySelectorAll("h2, h3")) : [];

    // Build TOC items
    const items = headingEls.map((el) => ({ id: el.id, heading: el.tagName === "H3" ? `— ${el.textContent}` : el.textContent }));
    setToc(items);

    // Observe headings for active state
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: [0.25, 0.5, 0.75] }
    );
    headingEls.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const pct = Math.min(100, Math.max(0, (scrollTop / (docHeight - winHeight)) * 100));
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [post, markdown]);

  // Keep active link visible inside the sidebar (auto-scroll)
  useEffect(() => {
    const container = tocScrollRef.current;
    if (!container || !activeId) return;
    const link = container.querySelector(`a[href="#${activeId}"]`);
    if (!link) return;
    const cRect = container.getBoundingClientRect();
    const lRect = link.getBoundingClientRect();
    const padding = 48; // keep some space around
    if (lRect.top < cRect.top + padding || lRect.bottom > cRect.bottom - padding) {
      link.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [activeId]);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for navbar
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  if (!post) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-white text-[#02161F]">
        <Navigation />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-semibold text-[#02161F]">Artigo não encontrado</h1>
          <p className="mt-3 text-sm text-slate-600">O conteúdo que você procura pode ter sido movido ou ainda não foi publicado.</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0E8F66] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b7453]"
          >
            Voltar ao blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#02161F]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6FAFF] to-white" />
        <div className="absolute -top-52 left-[-160px] h-[500px] w-[500px] rounded-full bg-[#6FFFC7]/20 blur-3xl" />
        <div className="absolute bottom-[-320px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[#2563EB]/12 blur-[220px]" />
      </div>

      <Navigation />

      <div className="fixed left-0 right-0 top-0 z-[70] h-[3px] bg-white/30 backdrop-blur">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-[#0E8F66] via-[#6FFFC7] to-[#0E8F66]"
        />
      </div>

      <header className="relative overflow-hidden bg-[#020F1A] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_140%_at_95%_0%,rgba(1,226,151,0.22),rgba(2,15,26,0.95))]" />
          <div className="absolute -bottom-40 right-[-140px] h-[360px] w-[360px] rounded-full bg-[#0B3B2A]/70 blur-[200px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold uppercase tracking-[0.3em]">Artigo</span>
                <nav aria-label="breadcrumb" className="text-[11px] sm:text-xs">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link to="/" className="transition hover:text-[#6FFFC7]">Início</Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link to="/blog" className="transition hover:text-[#6FFFC7]">Blog</Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-white/80" aria-current="page">{post.title}</li>
                  </ol>
                </nav>
              </div>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[52px] lg:leading-[1.05]">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/70 sm:text-sm">
                <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                <span className="opacity-50">•</span>
                <span>{post.readingTimeMinutes} min de leitura</span>
                {post.author?.name && (
                  <>
                    <span className="opacity-50">•</span>
                    <span>{post.author.name}</span>
                  </>
                )}
              </div>

              {post.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {post.cover && (
              <div className="relative hidden overflow-hidden rounded-[32px] border border-white/15 bg-white/5 shadow-[0_40px_95px_-60px_rgba(24,255,176,0.45)] backdrop-blur lg:block">
                <img src={post.cover} alt="capa do artigo" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F1A] via-transparent to-transparent" />
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:pt-20">
        <article className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-[0_45px_95px_-60px_rgba(15,23,42,0.45)] sm:p-12">
          <div className="pointer-events-none absolute right-[-80px] top-[-120px] hidden h-[320px] w-[320px] rounded-full bg-[#6FFFC7]/20 blur-3xl sm:block" />
          <div className="relative space-y-8">
            {post.cover && (
              <figure className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 aspect-[16/9] lg:hidden">
                <img src={post.cover} alt="capa do artigo" loading="lazy" className="h-full w-full object-cover" />
              </figure>
            )}

            <div ref={articleRef} className="prose-markdown max-w-none text-[17px] md:text-[18px]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  rehypeRaw,
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: 'anchor-link' } }],
                  rehypeHighlight,
                  [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
                ]}
              >
                {markdown}
              </ReactMarkdown>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F6FAFF]/80 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Compartilhar</span>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 font-semibold text-[#0E8F66] transition hover:border-[#0E8F66]/40 hover:text-[#0b7453]"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${BASE_URL}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 font-semibold text-[#0E8F66] transition hover:border-[#0E8F66]/40 hover:text-[#0b7453]"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${BASE_URL}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 font-semibold text-[#0E8F66] transition hover:border-[#0E8F66]/40 hover:text-[#0b7453]"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${BASE_URL}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#0E8F66]/25 bg-[#0E8F66]/5 p-6 sm:p-8">
              <h4 className="text-xl font-semibold text-[#02161F]">Inscreva-se na newsletter</h4>
              <p className="mt-2 text-sm text-slate-600">Receba conteúdos práticos sobre carreiras e estágios direto no seu e-mail.</p>
              <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="flex-1 rounded-xl border border-[#0E8F66]/30 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0E8F66] focus:ring-2 focus:ring-[#6FFFC7]/30"
                />
                <button className="rounded-xl bg-[#0E8F66] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b7453]">
                  Assinar
                </button>
              </form>
            </div>
          </div>
        </article>

        <aside className="hidden self-start lg:block" style={{ position: "sticky", top: "108px" }}>
          <div ref={tocScrollRef} className="space-y-6">
            <div className="rounded-3xl border border-white/30 bg-white/85 p-6 shadow-[0_35px_80px_-55px_rgba(15,23,42,0.45)] backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Nesta página</div>
              <nav className="mt-4 space-y-2">
                {toc.map((i) => {
                  const isActive = activeId === i.id;
                  return (
                    <a
                      key={i.id}
                      href={`#${i.id}`}
                      onClick={(e) => handleAnchorClick(e, i.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        isActive ? "bg-[#0E8F66]/10 text-[#0E8F66]" : "text-slate-600 hover:text-[#0E8F66]"
                      }`}
                    >
                      {i.heading}
                    </a>
                  );
                })}
              </nav>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 transition hover:text-[#0E8F66]"
              >
                ↑ Topo
              </button>
            </div>

            {post.tags?.length ? (
              <div className="rounded-3xl border border-white/30 bg-white/85 p-6 shadow-[0_35px_80px_-55px_rgba(15,23,42,0.45)] backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Tags</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-full border border-[#0E8F66]/20 bg-[#0E8F66]/10 px-3 py-1 text-xs font-semibold text-[#0E8F66]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
