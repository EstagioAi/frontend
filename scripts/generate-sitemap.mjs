// Sitemap dinâmico: reúne rotas estáticas + rotas derivadas + posts do blog (array hardcoded) + empresas (placeholder)
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { blogPosts } from '../src/data/blogPosts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = process.cwd()
const BASE = 'https://estagioai.com'

// Rotas estáticas principais
const STATIC_ROUTES = [
  '/',
  '/login', '/register',
  '/termos-de-uso','/termos-de-servico','/politica-de-privacidade',
  '/suporte-para-universitarios','/central-de-ajuda','/como-melhorar-seu-perfil',
  '/suporte-para-empresas','/como-publicar-vagas','/planos-e-precos','/contato-comercial',
  '/sobre','/blog','/mural-de-vagas','/contato'
]

// Extra: gerar slugs hipotéticos de empresas se no futuro vier de API (placeholder, pode ser removido)
const COMPANY_SLUGS = ['google','microsoft','amazon','ibm','meta','netflix']
const COMPANY_ROUTES = COMPANY_SLUGS.map(s => `/empresas/${s}`)

// Gerar rotas de posts do blog a partir da fonte de dados compartilhada
const blogRoutes = blogPosts.map(p => `/blog/${p.slug}`)

// Metadados para prioridade e changefreq
function metaFor(route) {
  if (route === '/') return { changefreq: 'weekly', priority: 1.0 }
  if (route.startsWith('/blog/')) return { changefreq: 'monthly', priority: 0.6 }
  if (route === '/blog') return { changefreq: 'weekly', priority: 0.7 }
  if (route.startsWith('/empresas/')) return { changefreq: 'weekly', priority: 0.7 }
  if (route.includes('termos') || route.includes('politica')) return { changefreq: 'yearly', priority: 0.3 }
  return { changefreq: 'monthly', priority: 0.5 }
}

const all = [...new Set([...STATIC_ROUTES, ...COMPANY_ROUTES, ...blogRoutes])].sort()

const now = new Date().toISOString()
const body = all.map(r => {
  const { changefreq, priority } = metaFor(r)
  return `  <url><loc>${BASE}${r}</loc><lastmod>${now}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority.toFixed(1)}</priority></url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

const out = path.join(ROOT, 'public', 'sitemap.xml')
fs.writeFileSync(out, xml)
console.log(`Sitemap atualizado (${all.length} URLs):`, out)
