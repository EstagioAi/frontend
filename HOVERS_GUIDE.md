# 🎨 Guia Completo de Hovers - EstágioAI

## 📋 Visão Geral

Todos os efeitos de hover implementados no design system, organizados por categoria.

## 🔘 Botões

### Botões Padrão
```html
<!-- Botão Primário (Preto) -->
<button class="btn-base btn-primary btn-md">
  Hover: Escurece + Eleva + Sombra
</button>

<!-- Botão Secundário (Verde) -->
<button class="btn-base btn-secondary btn-md">
  Hover: Verde mais escuro + Eleva + Sombra
</button>

<!-- Botão Outline -->
<button class="btn-base btn-outline btn-md">
  Hover: Background verde claro + Borda verde
</button>

<!-- Botão Ghost -->
<button class="btn-base btn-ghost btn-md">
  Hover: Background verde claro
</button>
```

**Efeitos**:
- ✅ Mudança de cor
- ✅ Elevação (-2px)
- ✅ Sombra aumentada
- ✅ Transição suave (200ms)

## 📦 Cards

### Cards Padrão
```html
<!-- Card com hover -->
<div class="card-base">
  Hover: Eleva + Borda verde + Sombra
</div>

<!-- Card com hover verde -->
<div class="card-base hover-card-green">
  Hover: Eleva + Borda verde + Sombra verde
</div>
```

**Efeitos**:
- ✅ Elevação (-4px)
- ✅ Borda muda para verde
- ✅ Sombra aumentada
- ✅ Transição suave (200ms)

## 📝 Inputs e Formulários

### Inputs
```html
<input type="text" class="input-base" placeholder="Digite...">
<!-- Hover: Borda mais escura -->
<!-- Focus: Borda verde + Ring verde -->
```

### Selects
```html
<select class="select-base">
  <option>Opção 1</option>
</select>
<!-- Hover: Borda mais escura -->
<!-- Focus: Borda verde + Ícone verde -->
```

### Checkboxes e Radios
```html
<label class="checkbox-wrapper">
  <input type="checkbox" class="checkbox-custom">
  <span>Opção</span>
</label>
<!-- Hover: Background verde claro + Borda verde + Ring -->
```

### Switches
```html
<label class="switch-base">
  <span class="switch-track">
    <span class="switch-thumb"></span>
  </span>
</label>
<!-- Hover: Track mais escuro + Thumb com sombra -->
```

## 🎭 Efeitos de Hover Avançados

### Elevação
```html
<!-- Hover Lift - Elevação suave -->
<div class="hover-lift">
  Eleva -4px no hover
</div>

<!-- Hover Slide Up - Elevação maior -->
<div class="hover-slide-up">
  Eleva -8px no hover
</div>
```

### Escala
```html
<!-- Hover Scale - Para imagens -->
<div class="hover-scale">
  <img src="..." alt="...">
  <!-- Escala 1.05 no hover -->
</div>

<!-- Hover Scale Button - Para botões -->
<button class="hover-scale-button">
  Escala 1.02 no hover
</button>

<!-- Hover Image Zoom - Zoom em container -->
<div class="hover-image-zoom">
  <img src="..." alt="...">
  <!-- Imagem faz zoom 1.1 -->
</div>
```

### Brilho (Glow)
```html
<!-- Hover Glow - Brilho verde -->
<div class="hover-glow">
  Brilho verde no hover
</div>

<!-- Hover Glow Strong - Brilho verde forte -->
<div class="hover-glow-strong">
  Brilho verde forte no hover
</div>
```

### Cores
```html
<!-- Hover Border Green - Borda verde -->
<div class="border-2 border-black-10 hover-border-green">
  Borda fica verde no hover
</div>

<!-- Hover BG Green - Background verde -->
<div class="hover-bg-green">
  Background verde claro no hover
</div>

<!-- Hover Text Green - Texto verde -->
<span class="hover-text-green">
  Texto fica verde no hover
</span>
```

### Opacidade e Brilho
```html
<!-- Hover Opacity - Reduz opacidade -->
<div class="hover-opacity">
  Opacidade 0.8 no hover
</div>

<!-- Hover Brightness - Aumenta brilho -->
<div class="hover-brightness">
  Brilho 1.1 no hover
</div>
```

### Sublinhado Animado
```html
<!-- Hover Underline - Sublinhado verde animado -->
<a href="#" class="hover-underline">
  Sublinhado verde aparece no hover
</a>
```

### Rotação
```html
<!-- Hover Rotate - Rotação suave -->
<div class="hover-rotate">
  Rotaciona 5° no hover
</div>
```

### Sombras
```html
<!-- Hover Shadow - Sombra padrão -->
<div class="hover-shadow">
  Sombra lg no hover
</div>

<!-- Hover Shadow XL - Sombra grande -->
<div class="hover-shadow-xl">
  Sombra xl no hover
</div>
```

## 🏷️ Badges e Tags

### Badges
```html
<!-- Badge Outline -->
<span class="badge-base badge-outline">
  Hover: Borda verde + BG verde claro
</span>

<!-- Badge Filled -->
<span class="badge-base badge-filled">
  Hover: Verde mais escuro + Escala 1.05
</span>

<!-- Badge Simple -->
<span class="badge-base badge-simple">
  Hover: BG verde claro + Borda verde
</span>
```

### Tags/Chips
```html
<!-- Tag Outline -->
<span class="tag-base tag-outline">
  Hover: Borda verde + BG + Escala
</span>

<!-- Tag Filled -->
<span class="tag-base tag-filled">
  Hover: BG mais escuro + Escala
</span>
```

## 🔗 Links e Navegação

### Links
```html
<!-- Link Base -->
<a href="#" class="link-base">
  Hover: Texto verde
</a>

<!-- Link Verde -->
<a href="#" class="link-green">
  Hover: Verde mais escuro + Sublinhado
</a>

<!-- Link Underline -->
<a href="#" class="link-underline">
  Hover: Verde + Sublinhado mais grosso
</a>
```

### Navegação
```html
<!-- Nav Link -->
<a href="#" class="nav-link">
  Hover: Verde + BG verde claro
</a>

<!-- Nav Link Underline -->
<a href="#" class="nav-link-underline">
  Hover: Verde + Sublinhado animado
</a>
```

### Dropdown
```html
<div class="dropdown-item">
  Hover: BG verde claro + Texto verde
</div>
```

### Breadcrumbs
```html
<a href="#" class="breadcrumb-link">
  Hover: Verde + BG verde claro
</a>
```

## 📊 Tabelas e Listas

### Tabelas
```html
<table class="table-hover">
  <tbody>
    <tr><!-- Hover: BG verde claro --></tr>
  </tbody>
</table>

<!-- Linha clicável -->
<tr class="table-row-clickable">
  Hover: BG verde + Escala 1.01
</tr>
```

### Listas
```html
<ul class="list-hover">
  <li>Hover: BG verde + Padding left</li>
</ul>

<!-- Item clicável -->
<li class="list-item-clickable">
  Hover: BG verde + Desliza para direita
</li>
```

## 🎨 Ícones

### Ícones com Hover
```html
<!-- Icon Hover - Escala -->
<svg class="icon-hover">
  Hover: Verde + Escala 1.1
</svg>

<!-- Icon Hover Rotate - Rotação -->
<svg class="icon-hover-rotate">
  Hover: Verde + Rotação 15°
</svg>

<!-- Icon Hover Bounce - Bounce -->
<svg class="icon-hover-bounce">
  Hover: Verde + Animação bounce
</svg>
```

## 👤 Avatares

```html
<img src="..." class="avatar-hover" alt="Avatar">
<!-- Hover: Borda verde + Escala 1.1 + Ring verde -->
```

## 📑 Componentes Interativos

### Accordion
```html
<button class="accordion-trigger" aria-expanded="false">
  Hover: BG verde claro + Borda verde
</button>
```

### Tabs
```html
<button class="tab-button" aria-selected="false">
  Hover: Texto escuro + BG verde + Borda
</button>

<button class="tab-button" aria-selected="true">
  Ativo: Verde + Borda verde + Bold
</button>
```

### Pagination
```html
<button class="pagination-button">
  Hover: BG verde + Borda verde + Escala
</button>

<button class="pagination-button" aria-current="page">
  Ativo: BG verde + Texto preto + Bold
</button>
```

### Progress Bar
```html
<div class="progress-bar">
  <div class="progress-fill" style="width: 60%"></div>
</div>
<!-- Hover: Altura aumenta de 8px para 10px -->
```

## 🎯 Combinações Recomendadas

### Card Interativo Completo
```html
<div class="card-base hover-card-green hover-glow">
  Card com elevação + borda verde + brilho verde
</div>
```

### Botão com Escala
```html
<button class="btn-base btn-primary hover-scale-button">
  Botão com escala sutil
</button>
```

### Link com Sublinhado Animado
```html
<a href="#" class="link-base hover-underline">
  Link com sublinhado verde animado
</a>
```

### Imagem com Zoom
```html
<div class="hover-image-zoom rounded-xl overflow-hidden">
  <img src="..." alt="...">
</div>
```

## ⚡ Performance

Todos os hovers usam:
- ✅ **Transições CSS** (não JavaScript)
- ✅ **Duração padrão**: 200ms (rápido)
- ✅ **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- ✅ **Will-change**: Apenas quando necessário
- ✅ **GPU acceleration**: transform e opacity

## ♿ Acessibilidade

- ✅ **Reduced Motion**: Todos os hovers respeitam `prefers-reduced-motion`
- ✅ **Focus States**: Todos os elementos interativos têm focus verde
- ✅ **Touch Targets**: Mínimo 44x44px
- ✅ **Keyboard Navigation**: Todos os hovers funcionam com :focus-visible

## 📝 Notas

1. **Combine classes** para efeitos múltiplos
2. **Use com moderação** - não exagere nos efeitos
3. **Teste em mobile** - alguns hovers não funcionam em touch
4. **Performance** - evite hover em muitos elementos simultaneamente

---

**Última atualização**: 2025-10-05
**Total de hovers**: 50+ efeitos diferentes

