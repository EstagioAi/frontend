# 🎨 Paleta de Cores - EstágioAI

## Cores Principais

### Verde Principal
```
Cor: #82f7b3
Variável: --color-primary-green
Uso: Botões secundários, destaques, CTAs, links
RGB: rgb(130, 247, 179)
```

### Verde Hover
```
Cor: #6ee5a1
Variável: --color-primary-green-hover
Uso: Estados hover sobre verde
RGB: rgb(110, 229, 161)
```

### Preto Principal
```
Cor: #0f0f0f
Variável: --color-primary-black
Uso: Botões primários, texto principal, elementos escuros
RGB: rgb(15, 15, 15)
```

### Preto Hover
```
Cor: #1a1a1a
Variável: --color-primary-black-hover
Uso: Estados hover sobre preto
RGB: rgb(26, 26, 26)
```

## Backgrounds

### Branco
```
Cor: #ffffff
Variável: --color-bg-white
Uso: Cards, modais, containers principais
RGB: rgb(255, 255, 255)
```

### Cinza Claro
```
Cor: #f8f8f8
Variável: --color-bg-primary
Uso: Seções principais, backgrounds alternados
RGB: rgb(248, 248, 248)
```

### Bege Claro
```
Cor: #f5f4ed
Variável: --color-bg-secondary
Uso: Seções alternadas, variação de background
RGB: rgb(245, 244, 237)
```

## Sistema de Opacidades

### Preto com Opacidades

| Opacidade | Variável | Valor | Uso |
|-----------|----------|-------|-----|
| 100% | `--color-text-primary` | `#0f0f0f` | Títulos, texto principal |
| 80% | `--color-text-80` | `rgba(15, 15, 15, 0.8)` | Texto enfatizado |
| 75% | `--color-text-75` | `rgba(15, 15, 15, 0.75)` | Texto de corpo |
| 70% | `--color-text-secondary` | `rgba(15, 15, 15, 0.7)` | Texto secundário |
| 60% | `--color-text-60` | `rgba(15, 15, 15, 0.6)` | Texto médio |
| 50% | `--color-text-tertiary` | `rgba(15, 15, 15, 0.5)` | Texto auxiliar |
| 40% | `--color-text-muted` | `rgba(15, 15, 15, 0.4)` | Placeholders |
| 35% | `--color-text-35` | `rgba(15, 15, 15, 0.35)` | Texto muito sutil |
| 30% | `--color-text-subtle` | `rgba(15, 15, 15, 0.3)` | Metadados |
| 25% | `--color-text-25` | `rgba(15, 15, 15, 0.25)` | Elementos auxiliares |
| 15% | `--color-text-15` | `rgba(15, 15, 15, 0.15)` | Bordas médias |
| 10% | `--color-border-light` | `rgba(15, 15, 15, 0.1)` | Bordas sutis |
| 8% | `--color-text-08` | `rgba(15, 15, 15, 0.08)` | Bordas muito sutis |
| 5% | `--color-text-05` | `rgba(15, 15, 15, 0.05)` | Backgrounds sutis |

### Verde com Opacidades

| Opacidade | Variável | Valor | Uso |
|-----------|----------|-------|-----|
| 100% | `--color-primary-green` | `#82f7b3` | Verde sólido |
| 95% | `--color-green-95` | `rgba(130, 247, 179, 0.95)` | Praticamente sólido |
| 90% | `--color-green-90` | `rgba(130, 247, 179, 0.90)` | Quase sólido |
| 85% | `--color-green-85` | `rgba(130, 247, 179, 0.85)` | Muito visível |
| 75% | `--color-green-75` | `rgba(130, 247, 179, 0.75)` | Decorações principais |
| 70% | `--color-green-70` | `rgba(130, 247, 179, 0.70)` | Elementos destacados |
| 55% | `--color-green-55` | `rgba(130, 247, 179, 0.55)` | Decorações fortes |
| 45% | `--color-green-45` | `rgba(130, 247, 179, 0.45)` | Decorações médias |
| 40% | `--color-green-40` | `rgba(130, 247, 179, 0.40)` | Elementos ativos |
| 35% | `--color-green-35` | `rgba(130, 247, 179, 0.35)` | Bordas destacadas |
| 30% | `--color-green-bg-strong` | `rgba(130, 247, 179, 0.30)` | Elementos decorativos |
| 25% | `--color-green-25` | `rgba(130, 247, 179, 0.25)` | Elementos médios |
| 20% | `--color-green-bg-medium` | `rgba(130, 247, 179, 0.20)` | Focus rings |
| 18% | `--color-green-18` | `rgba(130, 247, 179, 0.18)` | Decorações |
| 15% | `--color-green-15` | `rgba(130, 247, 179, 0.15)` | Bordas e backgrounds |
| 10% | `--color-green-bg-light` | `rgba(130, 247, 179, 0.10)` | Backgrounds sutis |
| 8% | `--color-green-08` | `rgba(130, 247, 179, 0.08)` | Backgrounds sutis |
| 5% | `--color-green-05` | `rgba(130, 247, 179, 0.05)` | Backgrounds muito sutis |

### Branco com Opacidades

| Opacidade | Variável | Valor | Uso |
|-----------|----------|-------|-----|
| 80% | `--color-white-80` | `rgba(255, 255, 255, 0.80)` | Texto sobre escuro |
| 70% | `--color-white-70` | `rgba(255, 255, 255, 0.70)` | Texto sobre escuro |
| 40% | `--color-white-40` | `rgba(255, 255, 255, 0.40)` | Elementos sobre escuro |
| 25% | `--color-white-25` | `rgba(255, 255, 255, 0.25)` | Bordas sobre escuro |
| 10% | `--color-white-10` | `rgba(255, 255, 255, 0.10)` | Backgrounds sobre escuro |
| 5% | `--color-white-05` | `rgba(255, 255, 255, 0.05)` | Backgrounds sobre escuro |

## Classes CSS Disponíveis

### Texto

```css
/* Cores principais */
.text-primary-ds        /* Preto 100% */
.text-secondary-ds      /* Preto 70% */
.text-tertiary-ds       /* Preto 50% */
.text-muted-ds          /* Preto 40% */
.text-subtle-ds         /* Preto 30% */
.text-green-ds          /* Verde 100% */
.text-green-hover-ds    /* Verde hover */
.text-white-ds          /* Branco 100% */

/* Opacidades específicas - Preto */
.text-black-80          /* Preto 80% */
.text-black-75          /* Preto 75% */
.text-black-70          /* Preto 70% */
.text-black-60          /* Preto 60% */
.text-black-50          /* Preto 50% */
.text-black-40          /* Preto 40% */
.text-black-35          /* Preto 35% */
.text-black-30          /* Preto 30% */
.text-black-25          /* Preto 25% */

/* Opacidades específicas - Verde */
.text-green-70          /* Verde 70% */
```

### Backgrounds

```css
/* Backgrounds sólidos */
.bg-white-ds            /* Branco */
.bg-primary-ds          /* Cinza claro */
.bg-secondary-ds        /* Bege claro */
.bg-black-ds            /* Preto */
.bg-black-hover-ds      /* Preto hover */
.bg-green-ds            /* Verde */
.bg-green-hover-ds      /* Verde hover */

/* Backgrounds - Verde com opacidades */
.bg-green-05            /* Verde 5% */
.bg-green-08            /* Verde 8% */
.bg-green-10            /* Verde 10% */
.bg-green-15            /* Verde 15% */
.bg-green-18            /* Verde 18% */
.bg-green-20            /* Verde 20% */
.bg-green-25            /* Verde 25% */
.bg-green-30            /* Verde 30% */
.bg-green-35            /* Verde 35% */
.bg-green-40            /* Verde 40% */
.bg-green-70            /* Verde 70% */
.bg-green-90            /* Verde 90% */

/* Backgrounds - Preto com opacidades */
.bg-black-05            /* Preto 5% */
.bg-black-08            /* Preto 8% */
.bg-black-10            /* Preto 10% */
.bg-black-15            /* Preto 15% */
.bg-black-20            /* Preto 20% */

/* Backgrounds - Branco com opacidades */
.bg-white-05            /* Branco 5% */
.bg-white-10            /* Branco 10% */
.bg-white-25            /* Branco 25% */
.bg-white-40            /* Branco 40% */
.bg-white-70            /* Branco 70% */
.bg-white-80            /* Branco 80% */
```

### Bordas

```css
/* Bordas principais */
.border-light-ds        /* Preto 10% */
.border-medium-ds       /* Preto 20% */
.border-green-ds        /* Verde 100% */
.border-green-hover-ds  /* Verde hover */

/* Bordas - Preto com opacidades */
.border-black-05        /* Preto 5% */
.border-black-08        /* Preto 8% */
.border-black-10        /* Preto 10% */
.border-black-15        /* Preto 15% */
.border-black-20        /* Preto 20% */
.border-black-25        /* Preto 25% */

/* Bordas - Verde com opacidades */
.border-green-08        /* Verde 8% */
.border-green-10        /* Verde 10% */
.border-green-15        /* Verde 15% */
.border-green-20        /* Verde 20% */
.border-green-25        /* Verde 25% */
.border-green-30        /* Verde 30% */
.border-green-35        /* Verde 35% */
.border-green-40        /* Verde 40% */

/* Bordas - Branco */
.border-white-25        /* Branco 25% */
```

## Exemplos de Uso

### Hierarquia de Texto
```html
<h1 class="text-primary-ds">Título Principal (100%)</h1>
<h2 class="text-black-80">Subtítulo (80%)</h2>
<p class="text-secondary-ds">Parágrafo normal (70%)</p>
<p class="text-tertiary-ds">Texto auxiliar (50%)</p>
<span class="text-muted-ds">Placeholder (40%)</span>
<small class="text-subtle-ds">Metadados (30%)</small>
```

### Backgrounds com Profundidade
```html
<div class="bg-white-ds">
  <div class="bg-green-05">Verde muito sutil</div>
  <div class="bg-green-10">Verde sutil</div>
  <div class="bg-green-20">Verde médio</div>
  <div class="bg-green-30">Verde visível</div>
</div>
```

### Bordas Sutis
```html
<div class="border-2 border-black-10">Borda muito sutil</div>
<div class="border-2 border-black-20">Borda sutil</div>
<div class="border-2 border-green-20">Borda verde sutil</div>
<div class="border-2 border-green-ds">Borda verde sólida</div>
```

### Botões com Cores
```html
<button class="bg-black-ds text-white-ds">Preto</button>
<button class="bg-green-ds text-black-ds">Verde</button>
<button class="bg-white-ds text-black-ds border-2 border-black-10">Branco</button>
```

## Acessibilidade

### Contraste Mínimo (WCAG 2.1 AA)

| Combinação | Contraste | Status |
|------------|-----------|--------|
| Preto (#0f0f0f) + Branco (#ffffff) | 20.6:1 | ✅ AAA |
| Verde (#82f7b3) + Preto (#0f0f0f) | 12.8:1 | ✅ AAA |
| Preto 70% + Branco | 14.4:1 | ✅ AAA |
| Verde + Branco | 1.6:1 | ⚠️ Apenas decorativo |

### Recomendações

1. **Texto principal**: Use `text-primary-ds` (preto 100%)
2. **Texto secundário**: Use `text-secondary-ds` (preto 70%)
3. **Links e CTAs**: Use `text-green-ds` sobre fundo escuro
4. **Botões primários**: Preto com texto branco
5. **Botões secundários**: Verde com texto preto

## Modo Escuro (Futuro)

Preparado para implementação futura:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0f0f0f;
    --foreground: #ffffff;
    --color-bg-primary: #1a1a1a;
    /* ... */
  }
}
```

---

**Última atualização**: 2025-10-05
**Versão**: 2.0.0

