# Guia de Estilo Visual - EstágioAI

Este guia define os padrões visuais do EstágioAI, garantindo consistência em todo o produto.

## 🎨 Paleta de Cores

### Cores Primárias - Coral/Terracota

A identidade visual do EstágioAI é baseada em tons coral/terracota que transmitem energia, juventude e profissionalismo.

| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| **Coral Primary** | `#d97757` | `rgb(217, 119, 87)` | Botões primários, links, CTAs, ícones principais |
| **Coral Light** | `#e89b7d` | `rgb(232, 155, 125)` | Hover states, backgrounds suaves |
| **Coral Lighter** | `#f2c4b0` | `rgb(242, 196, 176)` | Backgrounds de seções, cards |
| **Coral Lightest** | `#fae8e0` | `rgb(250, 232, 224)` | Backgrounds alternados, seções suaves |
| **Peach** | `#ffb088` | `rgb(255, 176, 136)` | Variação complementar, destaques |

**Quando usar:**
- Primary: Ações principais, links, elementos interativos
- Light: Estados hover, transições
- Lighter/Lightest: Backgrounds de seções, áreas de destaque suave

### Cores Neutras - Cinzas

Hierarquia de cinzas para texto e elementos neutros.

| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| **Gray Dark** | `#3d3d3a` | `rgb(61, 61, 58)` | Títulos, headings, texto principal |
| **Gray Medium** | `#6b6b68` | `rgb(107, 107, 104)` | Texto de corpo, descrições |
| **Gray Light** | `#9a9a97` | `rgb(154, 154, 151)` | Texto secundário, placeholders |
| **Gray Lighter** | `#c8c8c6` | `rgb(200, 200, 198)` | Bordas, elementos desabilitados |

**Hierarquia de Texto:**
1. Títulos → Gray Dark
2. Corpo → Gray Medium
3. Secundário → Gray Light
4. Desabilitado → Gray Lighter

### Cores de Background - Beges

Backgrounds suaves que criam ritmo visual sem competir com o conteúdo.

| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| **BG Primary** | `#faf9f5` | `rgb(250, 249, 245)` | Seções principais, hero sections |
| **BG Secondary** | `#f5f4ed` | `rgb(245, 244, 237)` | Seções alternadas |
| **BG Tertiary** | `#f0efe6` | `rgb(240, 239, 230)` | Footer, seções de contraste |
| **BG White** | `#ffffff` | `rgb(255, 255, 255)` | Cards, modais, containers |

**Padrão de Alternância:**
```
Seção 1: White
Seção 2: BG Primary
Seção 3: White
Seção 4: BG Secondary
Footer: BG Tertiary
```

### Cores de Destaque - Accent

Cores complementares para ações específicas e feedback.

| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| **Success** | `#01E297` | `rgb(1, 226, 151)` | Sucesso, confirmações, CTAs positivos |
| **Info** | `#60a5fa` | `rgb(96, 165, 250)` | Informações, dicas, notificações |
| **Warning** | `#fbbf24` | `rgb(251, 191, 36)` | Avisos, alertas não críticos |
| **Peach Accent** | `#ffb088` | `rgb(255, 176, 136)` | Destaques alternativos |

### Cores Pastel - Tags e Badges

Cores suaves para categorização visual sem competir com o conteúdo principal.

| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| **Pastel Yellow** | `#fef9e7` | `rgb(254, 249, 231)` | Tags de destaque, novidades |
| **Pastel Mint** | `#e8f8f5` | `rgb(232, 248, 245)` | Tags de sucesso, aprovado |
| **Pastel Lavender** | `#f4ecf7` | `rgb(244, 236, 247)` | Tags de informação, categorias |
| **Pastel Peach** | `#fef5e7` | `rgb(254, 245, 231)` | Tags de atenção, em andamento |

---

## 📝 Tipografia

### Fonte Principal

**Space Grotesk** - Fonte geométrica moderna que transmite profissionalismo e juventude.

- Disponível em: Google Fonts
- Pesos utilizados: 400, 500, 600, 700, 800
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Escala Tipográfica

| Nome | Tamanho | Uso | Peso |
|------|---------|-----|------|
| **text-xs** | 12px (0.75rem) | Labels pequenos, timestamps | 400-500 |
| **text-sm** | 14px (0.875rem) | Texto secundário, captions | 400-500 |
| **text-base** | 16px (1rem) | Texto de corpo padrão | 400-500 |
| **text-lg** | 18px (1.125rem) | Texto destacado, leads | 500-600 |
| **text-xl** | 20px (1.25rem) | Subtítulos, H4 | 600 |
| **text-2xl** | 24px (1.5rem) | H3, títulos de seção | 600-700 |
| **text-3xl** | 30px (1.875rem) | H2, títulos de página | 700 |
| **text-4xl** | 36px (2.25rem) | H1 pequeno | 700-800 |
| **text-5xl** | 48px (3rem) | H1 médio, hero titles | 800 |
| **text-6xl** | 60px (3.75rem) | H1 grande, display | 800 |
| **text-7xl** | 72px (4.5rem) | Display extra large | 800 |

### Hierarquia de Títulos

```css
H1: text-5xl (48px), font-extrabold (800), leading-tight (1.2)
H2: text-3xl (30px), font-bold (700), leading-tight (1.2)
H3: text-2xl (24px), font-semibold (600), leading-normal (1.5)
H4: text-xl (20px), font-semibold (600), leading-normal (1.5)
Body: text-base (16px), font-normal (400), leading-normal (1.5)
Small: text-sm (14px), font-normal (400), leading-relaxed (1.75)
```

### Line Heights

- **Tight (1.2)**: Títulos, headlines - máximo impacto visual
- **Normal (1.5)**: Texto de corpo - legibilidade ideal
- **Relaxed (1.75)**: Texto longo, artigos - conforto de leitura

### Tipografia Responsiva

Use `clamp()` para títulos que escalam fluidamente:

```css
/* Hero Title */
font-size: clamp(2rem, 5vw, 4rem);

/* Section Title */
font-size: clamp(1.5rem, 3vw, 2.5rem);

/* Subtitle */
font-size: clamp(1rem, 2vw, 1.25rem);
```

---

## 📐 Espaçamento

### Sistema de Espaçamento (8px base)

Todos os espaçamentos seguem múltiplos de 8px para consistência visual.

| Token | Valor | Uso |
|-------|-------|-----|
| **space-1** | 8px (0.5rem) | Padding interno pequeno |
| **space-2** | 16px (1rem) | Espaçamento entre elementos próximos |
| **space-3** | 24px (1.5rem) | Gap entre componentes |
| **space-4** | 32px (2rem) | Espaçamento entre seções pequenas |
| **space-5** | 40px (2.5rem) | Espaçamento entre seções médias |
| **space-6** | 48px (3rem) | Espaçamento entre seções grandes |
| **space-8** | 64px (4rem) | Espaçamento entre seções principais |
| **space-10** | 80px (5rem) | Padding vertical de seções |
| **space-12** | 96px (6rem) | Padding vertical de seções grandes |
| **space-16** | 128px (8rem) | Hero sections, espaçamento máximo |

### Padrões de Espaçamento

**Cards:**
```css
padding: 24px (space-3) em mobile
padding: 32px (space-4) em desktop
gap entre cards: 24px (space-3)
```

**Seções:**
```css
padding-top: 80px (space-10)
padding-bottom: 80px (space-10)
gap entre elementos: 48px (space-6)
```

**Componentes:**
```css
gap entre botões: 16px (space-2)
margin-bottom de títulos: 24px (space-3)
padding de botões: 12px 24px
```

---

## 🎭 Componentes Visuais

### Bordas e Cantos

| Token | Valor | Uso |
|-------|-------|-----|
| **radius-sm** | 8px | Elementos pequenos, badges internos |
| **radius-md** | 12px | Inputs, selects, formulários |
| **radius-lg** | 16px | Botões, cards pequenos |
| **radius-xl** | 20px | Cards médios, containers |
| **radius-2xl** | 24px | Cards grandes, feature cards |
| **radius-full** | 9999px | Badges, avatares, pills |

**Padrão:**
- Botões: `radius-lg` (16px)
- Cards: `radius-xl` ou `radius-2xl` (20-24px)
- Inputs: `radius-md` (12px)
- Badges: `radius-full` (circular)

### Sombras e Elevação

| Token | Valor | Uso |
|-------|-------|-----|
| **shadow-sm** | `0 1px 2px rgba(0,0,0,0.05)` | Hover states |
| **shadow-md** | `0 4px 6px rgba(0,0,0,0.07)` | Cards padrão |
| **shadow-lg** | `0 10px 15px rgba(0,0,0,0.1)` | Cards destacados |
| **shadow-xl** | `0 20px 25px rgba(0,0,0,0.15)` | Modais, dropdowns |
| **shadow-2xl** | `0 25px 50px rgba(0,0,0,0.25)` | Overlays, popovers |
| **shadow-coral** | `0 4px 6px rgba(217,119,87,0.25)` | Botões coral |
| **shadow-coral-strong** | `0 10px 15px rgba(217,119,87,0.35)` | Botões coral hover |

**Hierarquia de Elevação:**
```
Nível 0: Sem sombra (backgrounds)
Nível 1: shadow-sm (hover)
Nível 2: shadow-md (cards)
Nível 3: shadow-lg (cards destacados)
Nível 4: shadow-xl (modais)
Nível 5: shadow-2xl (overlays)
```

### Bordas

**Bordas Neutras:**
```css
border: 1px solid #e2e8f0 (border-light)
```

**Bordas Coral:**
```css
/* Suave */
border: 1px solid rgba(217, 119, 87, 0.15)

/* Visível */
border: 1px solid rgba(217, 119, 87, 0.2)

/* Forte */
border: 2px solid #d97757
```

---

## 🎬 Animações e Transições

### Durações

| Token | Valor | Uso |
|-------|-------|-----|
| **duration-fast** | 150ms | Micro-interações (hover, focus) |
| **duration-normal** | 300ms | Transições padrão (fade, slide) |
| **duration-slow** | 500ms | Transições complexas (modais) |

### Easings

```css
/* Padrão - suave e natural */
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)

/* Entrada - desaceleração */
ease-out: cubic-bezier(0, 0, 0.2, 1)

/* Saída - aceleração */
ease-in: cubic-bezier(0.4, 0, 1, 1)
```

### Animações Comuns

**Hover em Botões:**
```css
transition: all 300ms ease-in-out;
hover: transform translateY(-2px), shadow aumentada
```

**Hover em Cards:**
```css
transition: all 300ms ease-in-out;
hover: transform translateY(-4px), border mais forte
```

**Float Animation:**
```css
animation: float 3s ease-in-out infinite;
/* Movimento vertical suave de -10px */
```

**Fade In Up:**
```css
animation: fade-in-up 300ms ease-out;
/* Opacidade 0→1 + translateY 20px→0 */
```

---

## 🎯 Gradientes

### Gradientes Disponíveis

**Coral:**
```css
background: linear-gradient(135deg, #d97757 0%, #e89b7d 100%);
/* Uso: Botões primários especiais */
```

**Coral Soft:**
```css
background: linear-gradient(135deg, #fae8e0 0%, #f2c4b0 100%);
/* Uso: Backgrounds de seções */
```

**Hero:**
```css
background: linear-gradient(135deg, #faf9f5 0%, #f5f4ed 50%, #fae8e0 100%);
/* Uso: Hero sections, headers */
```

**Purple Vibrant:**
```css
background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
/* Uso: CTAs principais, ações críticas */
```

### Quando Usar Gradientes

✅ **Usar:**
- Botões CTA principais
- Hero sections
- Backgrounds de seções especiais
- Elementos de destaque máximo

❌ **Evitar:**
- Texto sobre gradientes (problemas de contraste)
- Múltiplos gradientes na mesma tela
- Gradientes em elementos pequenos

---

## 📱 Responsividade

### Breakpoints

| Nome | Valor | Dispositivo |
|------|-------|-------------|
| **xs** | 0-640px | Mobile |
| **sm** | 640px+ | Tablets pequenos |
| **md** | 768px+ | Tablets |
| **lg** | 1024px+ | Laptops |
| **xl** | 1280px+ | Desktops |
| **2xl** | 1536px+ | Desktops grandes |

### Abordagem Mobile-First

Sempre comece com estilos mobile e adicione media queries para telas maiores:

```css
/* Mobile (padrão) */
.element {
  padding: 16px;
  font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    padding: 24px;
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    padding: 32px;
    font-size: 18px;
  }
}
```

### Grid Responsivo Padrão

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  {/* Cards */}
</div>
```

---

## ♿ Acessibilidade

### Contraste de Cores

Todos os pares de cores seguem WCAG AA (mínimo 4.5:1 para texto normal):

✅ **Aprovados:**
- Gray Dark (#3d3d3a) sobre White → 10.8:1
- Gray Medium (#6b6b68) sobre White → 5.2:1
- Coral Primary (#d97757) sobre White → 3.8:1 (apenas para texto grande)
- White sobre Coral Primary → 5.5:1

### Focus Visible

Todos os elementos interativos têm outline coral visível:

```css
*:focus-visible {
  outline: 3px solid rgba(217, 119, 87, 0.6);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Touch Targets

Mínimo de 44x44px para todos os elementos interativos:

```css
.touch-target {
  min-width: 44px;
  min-height: 44px;
}
```

### Reduced Motion

Respeitar preferência de movimento reduzido:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 Padrões de Design

### Alternância de Backgrounds

Criar ritmo visual alternando backgrounds:

```
Hero: gradient-hero
Seção 1: bg-white
Seção 2: bg-primary (#faf9f5)
Seção 3: bg-white
Seção 4: bg-secondary (#f5f4ed)
Footer: bg-tertiary (#f0efe6)
```

### Hierarquia Visual

**Títulos:**
1. Hero Title: text-5xl, font-extrabold, coral-primary
2. Section Title: text-3xl, font-bold, gray-dark
3. Subsection: text-2xl, font-semibold, gray-dark
4. Card Title: text-xl, font-semibold, gray-dark

**CTAs:**
1. Primário: Button variant="cta" (gradiente roxo)
2. Secundário: Button variant="primary" (coral sólido)
3. Terciário: Button variant="secondary" (outline coral)
4. Quaternário: Button variant="ghost" (transparente)

### Espaçamento de Seções

```css
/* Seção padrão */
padding: 80px 0; /* space-10 */

/* Seção grande */
padding: 96px 0; /* space-12 */

/* Hero section */
padding: 128px 0; /* space-16 */
```

---

## 🚀 Melhores Práticas

### Do's ✅

- Use variáveis CSS para cores e espaçamentos
- Mantenha consistência em bordas e sombras
- Aplique a hierarquia tipográfica corretamente
- Teste contraste de cores (WCAG AA)
- Use mobile-first approach
- Respeite o sistema de espaçamento (8px base)
- Aplique animações com moderação
- Garanta touch targets de 44x44px mínimo

### Don'ts ❌

- Não use cores fora da paleta definida
- Não misture múltiplos gradientes na mesma tela
- Não ignore estados de focus para acessibilidade
- Não use tamanhos de fonte menores que 14px para corpo
- Não crie espaçamentos arbitrários (use o sistema)
- Não abuse de animações (pode causar motion sickness)
- Não ignore responsividade mobile
- Não use apenas cor para transmitir informação

---

## 📚 Recursos

### Arquivos de Referência

- **Variáveis CSS**: `src/App.css` (seção :root)
- **Componentes**: `src/components/ui/`
- **Documentação de Componentes**: `src/docs/COMPONENT_DOCUMENTATION.md`
- **Design Document**: `.kiro/specs/design-profissional-estudantes/design.md`
- **Requirements**: `.kiro/specs/design-profissional-estudantes/requirements.md`

### Ferramentas Úteis

- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Palette**: https://coolors.co/
- **Typography Scale**: https://typescale.com/
- **Spacing Calculator**: https://spacing.app/

---

## 🔄 Versionamento

**Versão**: 1.0.0  
**Última Atualização**: Janeiro 2025  
**Autor**: Equipe EstágioAI

Para sugestões ou dúvidas sobre o guia de estilo, consulte a documentação completa ou entre em contato com a equipe de design.
