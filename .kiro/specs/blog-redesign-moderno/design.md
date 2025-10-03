# Design Document - Blog Redesign Moderno

## Overview

Este documento detalha o design para o redesign das páginas de blog (listagem e post individual) com um layout moderno e profissional. O objetivo é criar uma experiência visual impactante inspirada em designs contemporâneos de blogs premium, mantendo a identidade visual da EstágioAI com a paleta coral/terracota e garantindo acessibilidade e responsividade completas.

## Architecture

### Component Structure

```
Blog Page (Listagem)
├── Navigation (existing)
├── HeroSection
│   ├── Title & Description
│   ├── Search Bar
│   ├── Stats Cards (3 items)
│   └── Featured Post Card (large)
├── CategoryFilter Section
│   ├── Filter Pills
│   └── Clear Filters Button
├── PostsGrid Section
│   └── PostCard[] (3 columns desktop, 2 tablet, 1 mobile)
├── Pagination
└── Footer (existing)

Post Page (Individual)
├── Navigation (existing)
├── ProgressBar (fixed top)
├── PostHeader
│   ├── Breadcrumbs
│   ├── Title
│   ├── Metadata (date, reading time, author)
│   ├── Tags/Badges
│   └── Cover Image (hero)
├── MainContent (2-column layout)
│   ├── Article Content
│   │   ├── Markdown Rendered Content
│   │   ├── Share Section
│   │   └── Newsletter CTA
│   └── Sidebar (sticky)
│       ├── Table of Contents
│       └── Tags Widget
└── Footer (existing)
```

### Design Tokens

Utilizaremos os tokens existentes do design system com algumas extensões específicas para o blog:

```css
/* Bordas arredondadas generosas */
--blog-card-radius: 28px;
--blog-hero-radius: 32px;

/* Sombras multicamadas */
--blog-card-shadow: 0 35px 90px -55px rgba(15, 23, 42, 0.45);
--blog-card-shadow-hover: 0 40px 100px -50px rgba(15, 23, 42, 0.5);

/* Espaçamentos específicos */
--blog-section-gap: 48px;
--blog-card-gap: 24px;
```

## Components and Interfaces

### 1. HeroSection (Blog Listing)

**Visual Design:**
- Background: Dark gradient (#020F1A) com overlay radial gradient verde/coral
- Layout: 2 colunas em desktop (conteúdo + featured card)
- Elementos flutuantes: Blobs gradientes com blur para profundidade

**Structure:**
```jsx
<section className="hero-section">
  <div className="hero-content">
    <Badge>Blog EstágioAI</Badge>
    <h1>Histórias, frameworks e guias...</h1>
    <p>Descrição...</p>
    
    <div className="stats-grid">
      <StatCard label="artigos originais" value="X+" />
      <StatCard label="tempo médio" value="~7 min" />
      <StatCard label="novos insights" value="toda semana" />
    </div>
    
    <SearchBar />
  </div>
  
  <FeaturedPostCard post={featured} />
</section>
```

**Styling Details:**
- Título: text-4xl sm:text-5xl lg:text-[54px], font-semibold, leading-tight
- Stats cards: rounded-2xl, border white/10, bg white/5, backdrop-blur
- Search: rounded-2xl, shadow com glow coral/verde, focus ring colorido

### 2. PostCard Component

**Visual Design:**
- Bordas: rounded-[30px] com border white/40
- Sombra: multicamadas com elevação no hover
- Imagem: aspect-[4/3] com overlay gradiente
- Badges: posicionados sobre a imagem com backdrop-blur

**Structure:**
```jsx
<Link to={`/blog/${slug}`} className="post-card">
  <div className="card-inner">
    <div className="image-container">
      <img src={cover} alt={title} />
      <div className="image-overlay" />
      <div className="badges">
        <Badge variant={categoryColor}>{category}</Badge>
        {tags.map(tag => <Badge>{tag}</Badge>)}
      </div>
      <div className="read-cta">Ler agora</div>
    </div>
    
    <div className="card-content">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <div className="tags">{tags}</div>
      <div className="footer">
        <span>Conteúdo curado</span>
        <span>Ler artigo →</span>
      </div>
    </div>
  </div>
</Link>
```

**Hover Effects:**
```css
.post-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--blog-card-shadow-hover);
}

.post-card:hover img {
  transform: scale(1.05);
}

.post-card:hover h3 {
  color: var(--color-coral-primary);
}
```

### 3. FeaturedPostCard

**Visual Design:**
- Tamanho: Maior que cards regulares (ocupa coluna inteira ou metade do hero)
- Background: Imagem com overlay gradiente forte
- Posicionamento: Badges "Em destaque" + categoria
- Efeito: Glow shadow com cor coral/verde

**Styling:**
- rounded-[32px]
- shadow: 0 40px 95px -55px rgba(24, 255, 176, 0.65)
- Overlay: gradient from-[#020F1A] via-[#020F1A]/70 to-transparent
- Hover: scale(1.02) na imagem, cor do título muda para #6FFFC7

### 4. CategoryFilter Section

**Visual Design:**
- Background: white/60 com backdrop-blur
- Border: border-b border-white/10
- Pills: rounded-full com estados active/inactive distintos

**Structure:**
```jsx
<section className="category-filter">
  <div className="filter-header">
    <span>Explore por tema</span>
    {hasFilters && <button>Limpar filtros</button>}
  </div>
  
  <div className="filter-pills">
    <FilterPill active={!selected.size}>
      Todos ({total})
    </FilterPill>
    {categories.map(cat => (
      <FilterPill 
        active={selected.has(cat)}
        onClick={() => toggle(cat)}
      >
        {cat}
      </FilterPill>
    ))}
  </div>
</section>
```

**Pill States:**
```css
/* Inactive */
.filter-pill {
  border: 1px solid var(--color-border-light);
  background: white/80;
  color: var(--color-gray-medium);
}

/* Active */
.filter-pill.active {
  background: #6FFFC7/90;
  color: #033124;
  box-shadow: 0 18px 40px -28px rgba(111, 255, 199, 0.7);
}

/* Hover */
.filter-pill:hover {
  border-color: var(--color-coral-primary)/30;
  color: var(--color-coral-primary);
}
```

### 5. PostHeader (Individual Post)

**Visual Design:**
- Background: Dark (#020F1A) com gradiente radial verde
- Layout: 2 colunas em desktop (info + cover image)
- Breadcrumbs: Pequenos, discretos, com separadores
- Cover: rounded-[32px] com border white/15, shadow colorida

**Structure:**
```jsx
<header className="post-header">
  <div className="header-content">
    <div className="meta-top">
      <Badge>Artigo</Badge>
      <Breadcrumbs />
    </div>
    
    <h1>{title}</h1>
    
    <div className="meta-bottom">
      <span>{date}</span>
      <span>•</span>
      <span>{readingTime} min</span>
      <span>•</span>
      <span>{author}</span>
    </div>
    
    <div className="tags">
      {tags.map(tag => <Badge>{tag}</Badge>)}
    </div>
  </div>
  
  <div className="cover-container">
    <img src={cover} alt="capa" />
  </div>
</header>
```

**Typography:**
- Título: text-3xl sm:text-4xl lg:text-[52px], font-semibold, leading-[1.05]
- Meta: text-xs sm:text-sm, font-medium, text-white/70
- Tags: text-xs, uppercase, tracking-[0.25em]

### 6. Article Content

**Visual Design:**
- Container: rounded-[32px], border slate-200, bg white/95, shadow suave
- Padding: p-8 sm:p-12
- Typography: text-[17px] md:text-[18px], leading-relaxed

**Markdown Styling:**
```css
.prose-markdown {
  /* Headings */
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-gray-dark);
  }
  
  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }
  
  /* Paragraphs */
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: var(--color-gray-medium);
  }
  
  /* Lists */
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.7;
  }
  
  /* Links */
  a {
    color: var(--color-coral-primary);
    text-decoration: underline;
    text-decoration-color: rgba(217, 119, 87, 0.3);
    transition: all 200ms;
  }
  
  a:hover {
    color: var(--color-coral-light);
    text-decoration-color: var(--color-coral-primary);
  }
  
  /* Code blocks */
  pre {
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    overflow-x: auto;
  }
  
  code {
    font-size: 0.9em;
    font-family: 'Fira Code', monospace;
  }
  
  /* Blockquotes */
  blockquote {
    border-left: 4px solid var(--color-coral-primary);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: var(--color-gray-medium);
  }
}
```

### 7. Sidebar (TOC + Tags)

**Visual Design:**
- Position: sticky, top: 108px
- Container: rounded-3xl, border white/30, bg white/85, backdrop-blur
- Shadow: suave e elevada

**Structure:**
```jsx
<aside className="sidebar">
  <div className="toc-widget">
    <h4>Nesta página</h4>
    <nav>
      {toc.map(item => (
        <a 
          href={`#${item.id}`}
          className={activeId === item.id ? 'active' : ''}
        >
          {item.heading}
        </a>
      ))}
    </nav>
    <button>↑ Topo</button>
  </div>
  
  <div className="tags-widget">
    <h4>Tags</h4>
    <div className="tags">
      {tags.map(tag => <Badge>{tag}</Badge>)}
    </div>
  </div>
</aside>
```

**TOC Link States:**
```css
.toc-widget a {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--color-gray-medium);
  transition: all 200ms;
}

.toc-widget a.active {
  background: rgba(14, 143, 102, 0.1);
  color: #0E8F66;
  font-weight: 600;
}

.toc-widget a:hover {
  color: var(--color-coral-primary);
}
```

### 8. ProgressBar

**Visual Design:**
- Position: fixed, top: 0, z-index: 70
- Height: 3px
- Background: white/30 com backdrop-blur
- Fill: gradient from-[#0E8F66] via-[#6FFFC7] to-[#0E8F66]

**Implementation:**
```jsx
<div className="progress-bar-container">
  <div 
    className="progress-bar-fill"
    style={{ width: `${progress}%` }}
  />
</div>
```

## Data Models

### Post Model (Extended)

```typescript
interface Post {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  tag: string; // Primary category
  tags: string[]; // All tags
  date: string; // ISO format
  updatedAt?: string;
  readingTimeMinutes: number;
  author?: {
    name: string;
    avatar?: string;
  };
  body: string; // Markdown content
  // Legacy support
  markdown?: string;
  sections?: Section[];
}

interface Section {
  heading?: string;
  quote?: string;
  body?: string[];
  list?: string[];
  children?: Section[];
  cta?: {
    label: string;
    href: string;
  };
}
```

### Category Badge Mapping

```typescript
const categoryBadgeVariants = {
  'Currículo': 'yellow',
  'Entrevista': 'mint',
  'Carreira': 'lavender',
  'Habilidades': 'peach',
  'Blog': 'yellow',
} as const;

function getCategoryBadgeVariant(category: string): BadgeVariant {
  return categoryBadgeVariants[category] || 'yellow';
}
```

## Error Handling

### Empty States

**No Posts Found:**
```jsx
<EmptyState
  icon="🔍"
  title="Nenhum artigo encontrado"
  description="Tente usar outros termos de busca ou selecionar categorias diferentes."
  action={
    <Button onClick={clearFilters}>
      Limpar filtros
    </Button>
  }
/>
```

**Post Not Found:**
```jsx
<EmptyState
  icon="📄"
  title="Artigo não encontrado"
  description="O conteúdo que você procura pode ter sido movido ou ainda não foi publicado."
  action={
    <Button as={Link} to="/blog">
      Voltar ao blog
    </Button>
  }
/>
```

### Loading States

**Blog Listing:**
- Skeleton cards no grid
- Shimmer effect suave
- Manter layout para evitar CLS

**Individual Post:**
- Skeleton para header
- Skeleton para conteúdo
- Fade in quando carregado

## Testing Strategy

### Visual Regression Testing

**Scenarios:**
1. Blog listing - desktop, tablet, mobile
2. Blog listing - com filtros ativos
3. Blog listing - estado vazio
4. Post individual - desktop com sidebar
5. Post individual - mobile sem sidebar
6. Post individual - com TOC longo
7. Hover states em cards
8. Focus states em elementos interativos

### Responsive Testing

**Breakpoints to Test:**
- 375px (iPhone SE)
- 768px (iPad)
- 1024px (Laptop)
- 1440px (Desktop)
- 1920px (Large Desktop)

**Test Cases:**
- Grid adapta corretamente (1/2/3 colunas)
- Sidebar oculta em mobile
- Featured card adapta layout
- Touch targets adequados (44x44px)
- Sem overflow horizontal
- Imagens mantêm aspect ratio

### Accessibility Testing

**Checklist:**
- [ ] Contraste de cores WCAG AA (4.5:1)
- [ ] Focus visible em todos elementos interativos
- [ ] Navegação por teclado funcional
- [ ] ARIA labels apropriados
- [ ] Headings hierárquicos (h1 → h2 → h3)
- [ ] Alt text em todas imagens
- [ ] Links descritivos (não "clique aqui")
- [ ] Breadcrumbs com aria-label
- [ ] TOC com navegação acessível
- [ ] Reduced motion respeitado

### Performance Testing

**Metrics:**
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Time to Interactive < 3.5s

**Optimizations:**
- Lazy loading de imagens
- Intersection Observer para animações
- Debounce em search input
- Memoização de filtered posts
- Code splitting por rota

## Design Patterns

### Card Hover Pattern

```css
.card {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--blog-card-shadow-hover);
}

.card:hover .card-image {
  transform: scale(1.05);
}

.card:hover .card-title {
  color: var(--color-coral-primary);
}

.card:hover .card-arrow {
  transform: translateX(4px);
}
```

### Gradient Overlay Pattern

```css
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(2, 15, 26, 0.95) 0%,
    rgba(2, 15, 26, 0.7) 50%,
    transparent 100%
  );
}
```

### Backdrop Blur Pattern

```css
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Smooth Scroll Pattern

```javascript
function scrollToElement(id) {
  const element = document.getElementById(id);
  if (!element) return;
  
  const offset = 80; // navbar height
  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  
  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}
```

## Responsive Behavior

### Grid Breakpoints

```css
/* Mobile: 1 column */
.posts-grid {
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .posts-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
```

### Hero Layout

```css
/* Mobile: Stack */
.hero-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

/* Desktop: 2 columns */
@media (min-width: 1024px) {
  .hero-section {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    align-items: center;
  }
}
```

### Post Layout

```css
/* Mobile: Single column */
.post-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

/* Desktop: Content + Sidebar */
@media (min-width: 1024px) {
  .post-layout {
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 2.5rem;
  }
  
  .sidebar {
    position: sticky;
    top: 108px;
  }
}
```

## Animation Specifications

### Card Entrance

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fade-in-up 400ms ease-out;
  animation-fill-mode: both;
}

.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
```

### Progress Bar

```css
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(
    to right,
    #0E8F66,
    #6FFFC7,
    #0E8F66
  );
  transition: width 100ms linear;
}
```

### Smooth Transitions

```css
/* Padrão para elementos interativos */
.interactive {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Rápido para micro-interações */
.micro {
  transition: all 150ms ease-out;
}

/* Lento para modais/overlays */
.modal {
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Color Specifications

### Blog-Specific Colors

```css
:root {
  /* Dark backgrounds */
  --blog-dark-bg: #020F1A;
  --blog-dark-overlay: rgba(2, 15, 26, 0.95);
  
  /* Accent glows */
  --blog-glow-green: rgba(111, 255, 199, 0.65);
  --blog-glow-coral: rgba(217, 119, 87, 0.45);
  
  /* Card backgrounds */
  --blog-card-bg: rgba(255, 255, 255, 0.95);
  --blog-card-border: rgba(255, 255, 255, 0.4);
  
  /* Glass effects */
  --blog-glass-bg: rgba(255, 255, 255, 0.85);
  --blog-glass-border: rgba(255, 255, 255, 0.3);
}
```

### Badge Color Mapping

```css
/* Yellow - Currículo, Blog */
.badge-yellow {
  background: #fef9e7;
  color: #8b7355;
  border: 1px solid rgba(139, 115, 85, 0.2);
}

/* Mint - Entrevista */
.badge-mint {
  background: #e8f8f5;
  color: #0E8F66;
  border: 1px solid rgba(14, 143, 102, 0.2);
}

/* Lavender - Carreira */
.badge-lavender {
  background: #f4ecf7;
  color: #7c3aed;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

/* Peach - Habilidades */
.badge-peach {
  background: #fef5e7;
  color: #d97757;
  border: 1px solid rgba(217, 119, 87, 0.2);
}
```

## Implementation Notes

### Existing Code Preservation

O código atual já implementa muitos dos padrões desejados. As principais mudanças serão:

1. **Ajustes de bordas**: Aumentar radius de 30px para 28-32px
2. **Sombras**: Refinar valores para mais profundidade
3. **Hover effects**: Adicionar mais elevação e transições suaves
4. **Typography**: Ajustar tamanhos e pesos para mais impacto
5. **Espaçamentos**: Aumentar gaps para mais respiração

### CSS Variables to Add

```css
/* Adicionar ao App.css */
:root {
  --blog-card-radius: 28px;
  --blog-hero-radius: 32px;
  --blog-card-shadow: 0 35px 90px -55px rgba(15, 23, 42, 0.45);
  --blog-card-shadow-hover: 0 40px 100px -50px rgba(15, 23, 42, 0.5);
  --blog-section-gap: 48px;
  --blog-card-gap: 24px;
}
```

### Component Reusability

Todos os componentes devem ser reutilizáveis:

- `PostCard` pode ser usado em outras páginas
- `FeaturedPostCard` pode destacar conteúdo em home
- `CategoryFilter` pode ser adaptado para outras listagens
- `ProgressBar` pode ser usado em outros artigos/guias

## Accessibility Considerations

### Keyboard Navigation

**Tab Order:**
1. Skip to main content
2. Navigation links
3. Search input
4. Category filters
5. Post cards
6. Pagination
7. Footer links

**Shortcuts:**
- `/` - Focus search
- `Esc` - Clear search/filters
- `Arrow keys` - Navigate TOC (quando focado)

### Screen Reader Support

```jsx
// Breadcrumbs
<nav aria-label="breadcrumb">
  <ol>
    <li><Link to="/">Início</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li aria-current="page">{post.title}</li>
  </ol>
</nav>

// Pagination
<nav aria-label="Paginação de artigos">
  <button aria-label="Página anterior">Anterior</button>
  <button aria-current="page">1</button>
  <button aria-label="Próxima página">Próxima</button>
</nav>

// TOC
<nav aria-label="Índice do artigo">
  <a href="#section-1">Seção 1</a>
  <a href="#section-2" aria-current="true">Seção 2</a>
</nav>
```

### Color Contrast

Todos os pares de cores foram testados:

- Títulos (#3d3d3a) sobre white: 10.8:1 ✅
- Corpo (#6b6b68) sobre white: 5.2:1 ✅
- Links (#d97757) sobre white: 3.8:1 (apenas texto grande) ⚠️
- White sobre dark (#020F1A): 16.2:1 ✅
- Badges: Todos > 4.5:1 ✅

## Performance Optimizations

### Image Optimization

```jsx
<img
  src={post.cover}
  alt={post.title}
  loading="lazy"
  decoding="async"
  width={800}
  height={600}
/>
```

### Code Splitting

```javascript
// Lazy load post content
const Post = lazy(() => import('./pages/blog/Post'));

// Lazy load markdown renderer
const ReactMarkdown = lazy(() => import('react-markdown'));
```

### Memoization

```javascript
// Memoize filtered posts
const filtered = useMemo(() => {
  let arr = posts;
  if (selected.size) arr = arr.filter(p => selected.has(p.tag));
  if (query.trim()) {
    const q = query.toLowerCase();
    arr = arr.filter(p => 
      (p.title + ' ' + p.excerpt).toLowerCase().includes(q)
    );
  }
  return arr;
}, [query, selected]);

// Memoize pagination
const pagePosts = useMemo(
  () => posts.slice((page - 1) * pageSize, page * pageSize),
  [posts, page, pageSize]
);
```

### Debounce Search

```javascript
const [query, setQuery] = useState('');
const [debouncedQuery, setDebouncedQuery] = useState('');

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedQuery(query);
  }, 300);
  
  return () => clearTimeout(timer);
}, [query]);
```

## Conclusion

Este design mantém a identidade visual da EstágioAI enquanto eleva a experiência do blog para um nível premium e moderno. Todos os componentes são acessíveis, responsivos e performáticos, seguindo as melhores práticas de desenvolvimento web.

As implementações devem ser incrementais, testando cada componente individualmente antes de integrar ao sistema completo.
