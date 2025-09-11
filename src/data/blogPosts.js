// Fonte única dos posts do blog para reutilizar em listagem, sitemap e páginas individuais
// Futuro: substituir por fetch de CMS ou arquivo Markdown.

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\u00C0-\u017F\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export const featuredPosts = [
  {
    title: 'Explore e aprenda com quem já estagiou',
    tag: 'Destaque',
    excerpt: 'Guias práticos, dicas e experiências do mundo real.',
    img: '/hero-section-image.svg'
  },
  {
    title: 'Como se preparar para os processos seletivos',
    tag: 'Carreira',
    excerpt: 'Checklist inteligente para entrevistas e dinâmicas de grupo.',
    img: '/diverse-students-celebrating-internship-success.png'
  }
]

export const blogPosts = [
  { title: 'Como destacar seu perfil de estagiário', tag: 'Carreira', excerpt: 'Boas práticas simples para aumentar suas chances.', img: '/estagioai-background.png' },
  { title: 'Checklist para entrevistas de estágio', tag: 'Entrevista', excerpt: 'Passo a passo para se preparar sem stress.', img: '/company-login.png' },
  { title: 'Tendências de tecnologia para 2025', tag: 'Tecnologia', excerpt: 'O que as empresas estão buscando nos estagiários.', img: '/hero-section-image.svg' },
  { title: 'Como escrever um bom currículo', tag: 'Currículo', excerpt: 'Estrutura e exemplos que funcionam.', img: '/logo-web.png' },
  { title: 'LinkedIn para universitários', tag: 'Marca pessoal', excerpt: 'Otimize seu perfil e aumente seu alcance.', img: '/logo-web copy.png' },
  { title: 'Portfólio express para áreas criativas', tag: 'Design', excerpt: 'Mostre projetos mesmo sem experiência.', img: '/estagioai-background.png' }
].map(p => ({ ...p, slug: slugify(p.title) }))

export function findPostBySlug(slug) {
  return blogPosts.find(p => p.slug === slug)
}
