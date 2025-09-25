import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { posts } from "../src/pages/blog/posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE = "https://estagioai.com";
const COMPANIES_BASE = "https://empresas.estagioai.com";

const staticUrls = [
  { loc: `${BASE}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${BASE}/login`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/register`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/termos-de-uso`, changefreq: "yearly", priority: "0.2" },
  { loc: `${BASE}/termos-de-servico`, changefreq: "yearly", priority: "0.2" },
  { loc: `${BASE}/politica-de-privacidade`, changefreq: "yearly", priority: "0.2" },
  { loc: `${BASE}/suporte-para-universitarios`, changefreq: "monthly", priority: "0.6" },
  { loc: `${BASE}/central-de-ajuda`, changefreq: "monthly", priority: "0.6" },
  { loc: `${BASE}/como-melhorar-seu-perfil`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/suporte-para-empresas`, changefreq: "monthly", priority: "0.6" },
  { loc: `${BASE}/como-publicar-vagas`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/planos-e-precos`, changefreq: "monthly", priority: "0.7" },
  { loc: `${BASE}/contato-comercial`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/sobre`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/blog`, changefreq: "weekly", priority: "0.7" },
  { loc: `${BASE}/radar-de-vagas`, changefreq: "weekly", priority: "0.8" },
  { loc: `${BASE}/contato`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/em-construcao`, changefreq: "monthly", priority: "0.1" },
  { loc: `${BASE}/empresas/`, changefreq: "daily", priority: "0.8" },
  { loc: `${BASE}/modelos-de-curriculo`, changefreq: "monthly", priority: "0.7" },
  { loc: `${BASE}/verificador-de-curriculo-ats`, changefreq: "weekly", priority: "0.8" },
];

// URLs específicas do subdomínio de empresas
const companiesUrls = [
  { loc: `${COMPANIES_BASE}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${COMPANIES_BASE}/login`, changefreq: "monthly", priority: "0.8" },
  { loc: `${COMPANIES_BASE}/register`, changefreq: "monthly", priority: "0.9" },
  { loc: `${COMPANIES_BASE}/contato`, changefreq: "monthly", priority: "0.9" },
  { loc: `${COMPANIES_BASE}/planos-e-precos`, changefreq: "weekly", priority: "0.9" },
  { loc: `${COMPANIES_BASE}/suporte`, changefreq: "monthly", priority: "0.7" },
  { loc: `${COMPANIES_BASE}/como-publicar-vagas`, changefreq: "monthly", priority: "0.8" },
  { loc: `${COMPANIES_BASE}/termos-de-uso`, changefreq: "yearly", priority: "0.3" },
  { loc: `${COMPANIES_BASE}/termos-de-servico`, changefreq: "yearly", priority: "0.3" },
  { loc: `${COMPANIES_BASE}/politica-de-privacidade`, changefreq: "yearly", priority: "0.3" },
];

const blogUrls = posts.map((p) => ({
  loc: `${BASE}/blog/${p.slug}`,
  changefreq: "weekly",
  priority: "0.8",
  lastmod: p.updatedAt || p.date,
}));

// Helpers
function toUrlset(urls, { xmlnsExtras = "" } = {}) {
  const xmlns = `xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"${xmlnsExtras ? " " + xmlnsExtras : ""}`;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset ${xmlns}>\n${urls
    .map(
      (u) =>
        `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}${u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : ""}${u.priority ? `<priority>${u.priority}</priority>` : ""}${u.images?.length ? `\n${u.images
          .map((img) => `    <image:image><image:loc>${img}</image:loc></image:image>`)
          .join("\n")}\n  ` : ""}</url>`
    )
    .join("\n")}\n</urlset>\n`;
}

async function writePublicAndDist(fileName, content) {
  // Always write to public/
  const publicPath = resolve(__dirname, "../public/" + fileName);
  await writeFile(publicPath, content, "utf8");

  // Also write to dist/ if it exists (after vite build)
  const distDir = resolve(__dirname, "../dist");
  let distPath;
  if (existsSync(distDir)) {
    distPath = resolve(distDir, fileName);
    await writeFile(distPath, content, "utf8");
  }
  return { publicPath, distPath };
}

// 1) Main sitemap.xml (combined)
const combined = [...staticUrls, ...blogUrls, ...companiesUrls];
const mainXml = toUrlset(combined);
let out = await writePublicAndDist("sitemap.xml", mainXml);
console.log(`sitemap.xml -> ${out.publicPath}${out.distPath ? ` | ${out.distPath}` : ""} (${combined.length} URLs)`);

// 2) sitemap-pages.xml (static pages only)
const pagesXml = toUrlset(staticUrls);
out = await writePublicAndDist("sitemap-pages.xml", pagesXml);
console.log(`sitemap-pages.xml -> ${out.publicPath}${out.distPath ? ` | ${out.distPath}` : ""} (${staticUrls.length} URLs)`);

// 3) sitemap-posts.xml (blog posts only)
const postsXml = toUrlset(blogUrls);
out = await writePublicAndDist("sitemap-posts.xml", postsXml);
console.log(`sitemap-posts.xml -> ${out.publicPath}${out.distPath ? ` | ${out.distPath}` : ""} (${blogUrls.length} URLs)`);

// 4) sitemap-images.xml (pages with image:image for post covers)
const imageNs = 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
const blogWithImages = posts.map((p) => {
  const img = p.cover ? (p.cover.startsWith("http") ? p.cover : `${BASE}${p.cover}`) : undefined;
  return {
    loc: `${BASE}/blog/${p.slug}`,
    changefreq: "weekly",
    priority: "0.6",
    lastmod: p.updatedAt || p.date,
    images: img ? [img] : [],
  };
});
const imagesXml = toUrlset(blogWithImages, { xmlnsExtras: imageNs });
out = await writePublicAndDist("sitemap-images.xml", imagesXml);
console.log(`sitemap-images.xml -> ${out.publicPath}${out.distPath ? ` | ${out.distPath}` : ""} (${blogWithImages.length} URLs)`);

// 5) sitemap-news.xml (recent posts in Google News format - last 48h)
const now = new Date();
const newsWindowMs = 48 * 60 * 60 * 1000; // 48 hours
const newsPosts = posts.filter((p) => {
  const d = new Date(p.date);
  return !isNaN(d.getTime()) && now - d <= newsWindowMs;
});
const newsXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n` +
  newsPosts
    .map((p) => {
      const lastmod = p.updatedAt || p.date;
      const title = escapeXml(p.title);
      return `  <url>\n    <loc>${BASE}/blog/${p.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <news:news>\n      <news:publication>\n        <news:name>Estágio AI</news:name>\n        <news:language>pt-br</news:language>\n      </news:publication>\n      <news:publication_date>${p.date}</news:publication_date>\n      <news:title>${title}</news:title>\n    </news:news>\n  </url>`;
    })
    .join("\n") +
  "\n</urlset>\n";
out = await writePublicAndDist("sitemap-news.xml", newsXml);
console.log(`sitemap-news.xml -> ${out.publicPath}${out.distPath ? ` | ${out.distPath}` : ""} (${newsPosts.length} URLs)`);

// 6) ai-sitemap.xml (mirror of posts for AI crawlers)
const aiXml = toUrlset(blogUrls);
out = await writePublicAndDist("ai-sitemap.xml", aiXml);
console.log(`ai-sitemap.xml -> ${out.publicPath}${out.distPath ? ` | ${out.distPath}` : ""} (${blogUrls.length} URLs)`);

// 7) sitemap-companies.xml (B2B subdomain pages)
const companiesXml = toUrlset(companiesUrls);
out = await writePublicAndDist("sitemap-companies.xml", companiesXml);
console.log(`sitemap-companies.xml -> ${out.publicPath}${out.distPath ? ` | ${out.distPath}` : ""} (${companiesUrls.length} URLs)`);

// Small XML escape helper for titles
function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
