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
    if (post.markdown && typeof post.markdown === "string") return post.markdown;
    return sectionsToMarkdown(post.sections || []);
  }, [post]);
  // Dynamic TOC extracted from rendered markdown headings
  const [toc, setToc] = useState([]);

  useEffect(() => {
    if (!post) return;
    const url = `${BASE_URL}/blog/${post.slug}`;
    const title = `${post.title} — Estágio AI`;
    const description = post.excerpt;
    const image = post.cover || `${BASE_URL}/estagioai-background.png`;

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
      <div className="min-h-screen bg-white text-[#092116]">
        <Navigation />
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-2xl font-extrabold">Artigo não encontrado</h1>
          <p className="text-gray-600 mt-2">O conteúdo que você procura pode ter sido movido.</p>
          <Link to="/blog" className="inline-block mt-6 px-4 py-2 rounded-lg bg-[#01E297] text-black font-semibold">Voltar ao Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#092116]">
      <Navigation />

      {/* Reading progress bar */}
      <div className="fixed left-0 right-0 top-0 h-[3px] bg-gray-200/60 z-[60]">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-[#01E297] to-emerald-600"
        />
      </div>

      {/* Hero */}
      <header className="border-b border-gray-100 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
          {/* Badge + Breadcrumb on top to avoid being hidden by large titles */}
          <div className="flex flex-wrap items-center gap-3 text-gray-600">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold uppercase tracking-wide">Artigo</span>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="text-xs sm:text-sm">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:underline">Início</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/blog" className="hover:underline">Blog</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-800" aria-current="page">{post.title}</li>
              </ol>
            </nav>
          </div>

          {/* Smaller, still strong title */}
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
            <span>•</span>
            <span>{post.readingTimeMinutes} min de leitura</span>
            <div className="flex gap-2">
              {post.tags?.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_280px] items-start gap-10 md:gap-12 py-10 md:py-14" style={{ overflow: 'visible' }}>
        <article ref={articleRef} className="prose prose-markdown max-w-none text-[17px] md:text-[18px]">
          {/* Cover with controlled height/aspect for a more elegant look */}
          {post.cover && (
            <figure className="w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 aspect-[16/9]">
              <img src={post.cover} alt="capa do artigo" loading="lazy" className="h-full w-full object-cover" />
            </figure>
          )}

          {/* Render Markdown content */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: 'anchor-link' } }]]}
          >
            {markdown}
          </ReactMarkdown>

          {/* Share */}
          <div className="mt-10 flex items-center gap-3">
            <span className="text-sm text-gray-600">Compartilhar:</span>
            <a
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${BASE_URL}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
              target="_blank" rel="noreferrer"
            >Twitter</a>
            <a
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${BASE_URL}/blog/${post.slug}`)}`}
              target="_blank" rel="noreferrer"
            >LinkedIn</a>
            <a
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${BASE_URL}/blog/${post.slug}`)}`}
              target="_blank" rel="noreferrer"
            >Facebook</a>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h4 className="text-xl font-bold">Inscreva-se na newsletter</h4>
            <p className="text-gray-600 mt-1">Receba conteúdos práticos sobre carreiras e estágios direto no seu e‑mail.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Seu e‑mail" className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200" />
              <button className="px-4 py-2 rounded-lg bg-[#01E297] text-black font-semibold">Assinar</button>
            </form>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block self-start sticky-sidebar" style={{ position: 'sticky', top: '96px' }}>
          <div ref={tocScrollRef} className="space-y-6 pr-1">
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-600">Nesta página</div>
              <nav className="mt-3 space-y-2">
                {toc.map((i) => {
                  const isActive = activeId === i.id;
                  return (
                    <a
                      key={i.id}
                      href={`#${i.id}`}
                      onClick={(e) => handleAnchorClick(e, i.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`block text-sm transition-colors ${
                        isActive ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-700"
                      }`}
                    >
                      {i.heading}
                    </a>
                  );
                })}
              </nav>
              <a href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});}} className="mt-3 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">↑ Voltar ao topo</a>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-600">Tags</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags?.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
