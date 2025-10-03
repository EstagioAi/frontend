# Design System - Guia Rápido de Referência

**Versão**: 1.0.0  
**Última Atualização**: Janeiro 2025

---

## 🎨 Cores Mais Usadas

```css
/* Primárias */
--color-coral-primary: #d97757    /* Botões, links, CTAs */
--brand-green: #0E8F66            /* Sucesso, ações positivas */
--brand-secondary: #6FFFC7        /* Destaques, featured */

/* Neutras */
--color-gray-dark: #3d3d3a        /* Títulos */
--color-gray-medium: #6b6b68      /* Corpo de texto */
--color-bg-white: #ffffff         /* Backgrounds */
--color-bg-primary: #faf9f5       /* Backgrounds alternados */

/* Blog Específicas */
--blog-dark-bg: #020F1A           /* Hero sections escuras */
```

**Classes Utilitárias:**
```css
.text-brand-primary      /* Texto verde */
.text-brand-secondary    /* Texto mint */
.bg-brand-primary        /* Background verde */
.bg-brand-secondary      /* Background mint */
```

---

## 📏 Espaçamento (Sistema 8px)

```jsx
gap-2   // 8px   - Elementos muito próximos
gap-3   // 12px  - Elementos próximos
gap-4   // 16px  - Gap padrão
gap-6   // 24px  - Gap entre componentes
gap-8   // 32px  - Gap entre seções pequenas
gap-12  // 48px  - Gap entre seções
gap-16  // 64px  - Gap entre seções grandes

px-4    // 16px  - Padding horizontal padrão
px-6    // 24px  - Padding horizontal médio
px-8    // 32px  - Padding horizontal grande

py-12   // 48px  - Padding vertical de seção
py-16   // 64px  - Padding vertical de seção média
py-20   // 80px  - Padding vertical de seção grande
```

---

## 🔤 Tipografia

### Font Sizes
```jsx
text-xs    // 12px  - Labels, metadata
text-sm    // 14px  - Texto secundário
text-base  // 16px  - Corpo padrão
text-lg    // 18px  - Texto destacado
text-xl    // 20px  - Subtítulos
text-2xl   // 24px  - H3
text-3xl   // 30px  - H2
text-4xl   // 36px  - H1 pequeno
text-5xl   // 48px  - H1 médio
```

### Font Weights
```jsx
font-normal     // 400 - Corpo
font-medium     // 500 - Labels
font-semibold   // 600 - Subtítulos, H3
font-bold       // 700 - H2
font-extrabold  // 800 - H1
```

### Line Heights
```jsx
leading-tight    // 1.2   - Títulos
leading-normal   // 1.5   - Padrão
leading-relaxed  // 1.75  - Texto longo
```

---

## 🔲 Border Radius

```jsx
/* Blog Específico */
rounded-[32px]  // Hero, featured cards
rounded-[30px]  // Post cards
rounded-[28px]  // Inner cards

/* Standard */
rounded-3xl     // 24px - Containers grandes
rounded-2xl     // 20px - Cards médios
rounded-xl      // 16px - Botões, cards pequenos
rounded-lg      // 12px - Inputs, badges
rounded-md      // 8px  - Elementos pequenos
rounded-full    // 9999px - Pills, avatares
```

---

## 🌑 Sombras

### Blog Específicas
```css
.shadow-blog-card           /* Sombra padrão de cards */
.shadow-blog-card-hover     /* Sombra hover de cards */
.shadow-blog-featured       /* Sombra featured com glow */
.shadow-blog-coral          /* Sombra coral para ativos */
```

### Standard
```jsx
shadow-sm   // Hover states
shadow-md   // Cards padrão
shadow-lg   // Cards destacados
shadow-xl   // Modais
```

---

## 🎭 Componentes Rápidos

### Button
```jsx
<Button variant="primary" size="md">
  Texto
</Button>

// Variants: primary, secondary, cta, ghost, link
// Sizes: sm, md, lg
```

### Badge
```jsx
<Badge variant="mint" size="sm">
  Tag
</Badge>

// Variants: yellow, mint, lavender, peach
// Sizes: sm, md
```

### EmptyState
```jsx
<EmptyState
  title="Título"
  message="Mensagem"
  icon="search"
  variant="blog"
  actions={<Button>Ação</Button>}
/>
```

---

## 📱 Breakpoints

```jsx
sm:   // 640px  - Tablets pequenos
md:   // 768px  - Tablets
lg:   // 1024px - Laptops
xl:   // 1280px - Desktops
2xl:  // 1536px - Desktops grandes
```

### Grid Responsivo Comum
```jsx
grid-cols-1              // Mobile
sm:grid-cols-2           // Tablet
lg:grid-cols-3           // Desktop
```

---

## ⚡ Animações

### Durações
```jsx
duration-150  // Micro-interações
duration-300  // Padrão
duration-500  // Transições complexas
```

### Easing
```jsx
ease-in-out   // Padrão
ease-out      // Entrada
ease-in       // Saída
```

### Classes Úteis
```jsx
transition-all duration-300 ease-in-out
hover:-translate-y-1
hover:scale-105
```

---

## ♿ Acessibilidade

### Focus States
```css
/* Automático em todos elementos interativos */
focus-visible:ring-2 focus-visible:ring-[#d97757]/60
```

### Touch Targets
```jsx
min-h-[44px] min-w-[44px]  // Mínimo para touch
```

### ARIA
```jsx
aria-label="Descrição"
aria-pressed={isActive}
role="button"
```

---

## 📝 Padrões Comuns

### Card com Hover
```jsx
<div className="rounded-[30px] border border-white/40 bg-white/75 
                shadow-blog-card transition-all duration-300 
                hover:-translate-y-[6px] hover:shadow-blog-card-hover">
  {/* Conteúdo */}
</div>
```

### Hero Section
```jsx
<section className="bg-[#020F1A] text-white py-20 sm:py-28 lg:py-32">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    {/* Conteúdo */}
  </div>
</section>
```

### Grid de Cards
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## ✅ Checklist Rápido

Ao criar um componente:

- [ ] Usei variáveis CSS?
- [ ] Espaçamento é múltiplo de 8px?
- [ ] Cores seguem paleta?
- [ ] Tipografia segue hierarquia?
- [ ] Border radius consistente?
- [ ] Sombras seguem padrão?
- [ ] Focus visible implementado?
- [ ] Touch targets adequados?
- [ ] ARIA labels presentes?
- [ ] Responsivo testado?

---

## 🔗 Links Úteis

- **Documentação Completa**: `src/docs/DESIGN_SYSTEM_README.md`
- **Guia de Estilo**: `src/docs/STYLE_GUIDE.md`
- **Componentes**: `src/docs/COMPONENT_DOCUMENTATION.md`
- **Nomenclatura**: `src/docs/NAMING_CONVENTIONS.md`
- **Variáveis CSS**: `src/App.css`

---

**Dica**: Mantenha este guia aberto enquanto desenvolve para referência rápida!

