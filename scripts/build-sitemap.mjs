import { writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { posts } from "../src/pages/blog/posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE = "https://estagioai.com";

const staticUrls = [
  { loc: `${BASE}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${BASE}/login`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/register`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/termos-de-uso`, changefreq: "yearly", priority: "0.2" },
  { loc: `${BASE}/termos-de-servico`, changefreq: "yearly", priority: "0.2" },
  { loc: `${BASE}/politica-de-privacidade`, changefreq: "yearly", priority: "0.2" },
  { loc: `${BASE}/suporte-para-universitarios`, changefreq: "quarterly", priority: "0.6" },
  { loc: `${BASE}/central-de-ajuda`, changefreq: "monthly", priority: "0.6" },
  { loc: `${BASE}/como-melhorar-seu-perfil`, changefreq: "quarterly", priority: "0.5" },
  { loc: `${BASE}/suporte-para-empresas`, changefreq: "quarterly", priority: "0.6" },
  { loc: `${BASE}/como-publicar-vagas`, changefreq: "quarterly", priority: "0.5" },
  { loc: `${BASE}/planos-e-precos`, changefreq: "monthly", priority: "0.7" },
  { loc: `${BASE}/contato-comercial`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/sobre`, changefreq: "quarterly", priority: "0.5" },
  { loc: `${BASE}/blog`, changefreq: "weekly", priority: "0.7" },
  { loc: `${BASE}/mural-de-vagas`, changefreq: "weekly", priority: "0.8" },
  { loc: `${BASE}/contato`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE}/em-construcao`, changefreq: "monthly", priority: "0.1" },
  { loc: `${BASE}/empresas/`, changefreq: "daily", priority: "0.8" },
];

const blogUrls = posts.map((p) => ({
  loc: `${BASE}/blog/${p.slug}`,
  changefreq: "weekly",
  priority: "0.8",
  lastmod: p.updatedAt || p.date,
}));

const urls = [...staticUrls, ...blogUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) =>
    `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}<changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
  )
  .join("\n")}\n</urlset>\n`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
await writeFile(outPath, xml, "utf8");
console.log(`Sitemap updated with ${urls.length} URLs -> ${outPath}`);
