// Gera sitemap.xml simples a partir das rotas definidas em seoConfig.js
import fs from 'fs'
import path from 'path'
import url from 'url'
import seoConfig from '../src/seoConfig.js'

const BASE = 'https://estagioai.com'

// extrai chaves do map interno
const staticPaths = Object.keys(seoConfig('')) // chamando com string vazia para pegar map
  .filter(()=>false) // placeholder

// Como seoConfig retorna objeto diferente dependendo da rota, vamos declarar manualmente as rotas conhecidas
const ROUTES = [
  '/',
  '/login', '/register',
  '/termos-de-uso','/termos-de-servico','/politica-de-privacidade',
  '/suporte-para-universitarios','/central-de-ajuda','/como-melhorar-seu-perfil',
  '/suporte-para-empresas','/como-publicar-vagas','/planos-e-precos','/contato-comercial',
  '/sobre','/blog','/mural-de-vagas','/contato'
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
ROUTES.map(r => `  <url><loc>${BASE}${r}</loc></url>`).join('\n') + '\n</urlset>'

const out = path.join(process.cwd(), 'public', 'sitemap.xml')
fs.writeFileSync(out, xml)
console.log('Sitemap atualizado:', out)
