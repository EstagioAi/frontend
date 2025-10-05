# EstágioAI - Design System

## 📋 Visão Geral

Sistema de design padronizado com paleta verde e preta minimalista.

## 🎨 Paleta de Cores

### Cores Principais

```css
--color-primary-green: #82f7b3      /* Verde principal */
--color-primary-green-hover: #6ee5a1 /* Verde hover */
--color-primary-black: #0f0f0f      /* Preto principal */
--color-primary-black-hover: #1a1a1a /* Preto hover */
```

### Backgrounds

```css
--color-bg-primary: #f8f8f8    /* Cinza claro - seções */
--color-bg-secondary: #f5f4ed  /* Bege claro - alternado */
--color-bg-white: #ffffff      /* Branco - cards */
```

## 📝 Classes Utilitárias

### Texto

```html
<!-- Cores de texto -->
<p class="text-primary-ds">Texto principal (preto 100%)</p>
<p class="text-secondary-ds">Texto secundário (preto 70%)</p>
<p class="text-tertiary-ds">Texto terciário (preto 50%)</p>
<p class="text-muted-ds">Texto muted (preto 40%)</p>
<p class="text-green-ds">Texto verde</p>

<!-- Opacidades específicas -->
<p class="text-black-80">Preto 80%</p>
<p class="text-black-70">Preto 70%</p>
<p class="text-black-50">Preto 50%</p>
<p class="text-black-40">Preto 40%</p>
<p class="text-black-30">Preto 30%</p>
```

### Backgrounds

```html
<!-- Backgrounds sólidos -->
<div class="bg-white-ds">Fundo branco</div>
<div class="bg-primary-ds">Fundo cinza claro</div>
<div class="bg-black-ds">Fundo preto</div>
<div class="bg-green-ds">Fundo verde</div>

<!-- Backgrounds com opacidade - Verde -->
<div class="bg-green-05">Verde 5%</div>
<div class="bg-green-10">Verde 10%</div>
<div class="bg-green-20">Verde 20%</div>
<div class="bg-green-30">Verde 30%</div>

<!-- Backgrounds com opacidade - Preto -->
<div class="bg-black-05">Preto 5%</div>
<div class="bg-black-10">Preto 10%</div>
<div class="bg-black-20">Preto 20%</div>

<!-- Backgrounds com opacidade - Branco -->
<div class="bg-white-80">Branco 80%</div>
<div class="bg-white-70">Branco 70%</div>
```

### Bordas

```html
<!-- Cores de borda -->
<div class="border-2 border-light-ds">Borda clara (preto 10%)</div>
<div class="border-2 border-medium-ds">Borda média (preto 20%)</div>
<div class="border-2 border-green-ds">Borda verde</div>

<!-- Bordas com opacidade -->
<div class="border-2 border-black-10">Borda preto 10%</div>
<div class="border-2 border-green-10">Borda verde 10%</div>
<div class="border-2 border-green-20">Borda verde 20%</div>
```

## 🔘 Botões

### Variantes

```html
<!-- Botão primário (preto) -->
<button class="btn-base btn-primary btn-md">
  Botão Primário
</button>

<!-- Botão secundário (verde) -->
<button class="btn-base btn-secondary btn-md">
  Botão Secundário
</button>

<!-- Botão outline -->
<button class="btn-base btn-outline btn-md">
  Botão Outline
</button>

<!-- Botão ghost -->
<button class="btn-base btn-ghost btn-md">
  Botão Ghost
</button>
```

### Tamanhos

```html
<button class="btn-base btn-primary btn-sm">Pequeno</button>
<button class="btn-base btn-primary btn-md">Médio</button>
<button class="btn-base btn-primary btn-lg">Grande</button>
```

## 📦 Cards

```html
<!-- Card básico -->
<div class="card-base">
  <h3>Título do Card</h3>
  <p>Conteúdo do card</p>
</div>

<!-- Card compacto -->
<div class="card-base card-compact">
  Conteúdo compacto
</div>

<!-- Card espaçoso -->
<div class="card-base card-spacious">
  Conteúdo espaçoso
</div>
```

## 📝 Inputs

```html
<!-- Input básico -->
<input 
  type="text" 
  class="input-base" 
  placeholder="Digite aqui..."
/>

<!-- Input com estado de erro -->
<input 
  type="text" 
  class="input-base" 
  style="border-color: #ef4444;"
/>

<!-- Input desabilitado -->
<input 
  type="text" 
  class="input-base" 
  disabled
/>
```

## 📏 Espaçamento

Sistema baseado em múltiplos de 8px:

```html
<!-- Padding -->
<div class="p-2-ds">Padding 16px</div>
<div class="p-4-ds">Padding 32px</div>
<div class="p-6-ds">Padding 48px</div>

<!-- Margin -->
<div class="m-2-ds">Margin 16px</div>
<div class="m-4-ds">Margin 32px</div>

<!-- Gap -->
<div class="flex gap-2-ds">Gap 16px</div>
<div class="flex gap-4-ds">Gap 32px</div>
```

## 🎭 Sombras

```html
<div class="shadow-sm-ds">Sombra pequena</div>
<div class="shadow-md-ds">Sombra média</div>
<div class="shadow-lg-ds">Sombra grande</div>
<div class="shadow-xl-ds">Sombra extra grande</div>
```

## 🔄 Animações

### Float Animation

```html
<div class="float-y float-y-1">
  Elemento flutuante
</div>
```

### Marquee Animation

```html
<div class="marquee-container">
  <div class="animate-marquee-left">
    Conteúdo em movimento
  </div>
</div>
```

### Rotate Animation

```html
<div class="animate-rotate-slow">
  Elemento rotacionando
</div>
```

## 🎨 Efeitos de Hover

### Elevação e Escala

```html
<!-- Elevação suave -->
<div class="hover-lift">Eleva -4px</div>

<!-- Elevação maior -->
<div class="hover-slide-up">Eleva -8px</div>

<!-- Escala para imagens -->
<div class="hover-scale">
  <img src="..." alt="...">
</div>

<!-- Escala para botões -->
<button class="hover-scale-button">Botão</button>

<!-- Zoom em imagem -->
<div class="hover-image-zoom">
  <img src="..." alt="...">
</div>
```

### Cores e Bordas

```html
<!-- Borda verde no hover -->
<div class="border-2 border-black-10 hover-border-green">
  Conteúdo
</div>

<!-- Background verde no hover -->
<div class="hover-bg-green">Conteúdo</div>

<!-- Texto verde no hover -->
<span class="hover-text-green">Texto</span>
```

### Brilho (Glow)

```html
<!-- Brilho verde -->
<div class="hover-glow">Conteúdo</div>

<!-- Brilho verde forte -->
<div class="hover-glow-strong">Conteúdo</div>
```

### Sublinhado Animado

```html
<a href="#" class="hover-underline">
  Link com sublinhado verde animado
</a>
```

### Sombras

```html
<!-- Sombra padrão -->
<div class="hover-shadow">Conteúdo</div>

<!-- Sombra grande -->
<div class="hover-shadow-xl">Conteúdo</div>
```

### Cards com Hover

```html
<!-- Card padrão -->
<div class="hover-card">Card com elevação</div>

<!-- Card com sombra verde -->
<div class="hover-card-green">Card verde</div>
```

**📘 Guia Completo**: Veja `HOVERS_GUIDE.md` para todos os 50+ efeitos de hover disponíveis

## ♿ Acessibilidade

### Skip Link

```html
<a href="#main-content" class="skip-to-main">
  Pular para o conteúdo principal
</a>
```

### Screen Reader Only

```html
<span class="sr-only">
  Texto apenas para leitores de tela
</span>
```

## 📱 Responsividade

### Breakpoints

```css
--screen-sm: 640px   /* Tablets pequenos */
--screen-md: 768px   /* Tablets */
--screen-lg: 1024px  /* Laptops */
--screen-xl: 1280px  /* Desktops */
--screen-2xl: 1536px /* Desktops grandes */
```

## 🎨 Variáveis CSS Disponíveis

### Tipografia

```css
/* Tamanhos */
--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
--text-xl: 1.25rem    /* 20px */
--text-2xl: 1.5rem    /* 24px */
--text-3xl: 1.875rem  /* 30px */
--text-4xl: 2.25rem   /* 36px */
--text-5xl: 3rem      /* 48px */
--text-6xl: 3.75rem   /* 60px */
--text-7xl: 4.5rem    /* 72px */

/* Pesos */
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800

/* Line Heights */
--leading-tight: 1.2
--leading-normal: 1.5
--leading-relaxed: 1.75
```

### Border Radius

```css
--radius-sm: 0.5rem    /* 8px */
--radius-md: 0.75rem   /* 12px */
--radius-lg: 1rem      /* 16px */
--radius-xl: 1.25rem   /* 20px */
--radius-2xl: 1.5rem   /* 24px */
--radius-full: 9999px  /* Circular */
```

### Transições

```css
--duration-fast: 200ms
--duration-medium: 300ms
--duration-slow: 500ms

--transition-all: all 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-colors: color 200ms, background-color 200ms, border-color 200ms
--transition-transform: transform 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-shadow: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)
```

## 📂 Estrutura de Arquivos

```
src/
├── App.css          # Design system principal (666 linhas)
└── index.css        # Animações e estilos específicos (320 linhas)
```

## ✅ Benefícios da Padronização

1. **Consistência**: Todas as cores vêm de variáveis CSS
2. **Manutenibilidade**: Fácil alterar cores globalmente
3. **Performance**: Arquivo reduzido de ~3915 para 666 linhas
4. **Acessibilidade**: Focus states e reduced motion incluídos
5. **Responsividade**: Sistema de breakpoints padronizado
6. **DX**: Classes utilitárias intuitivas e bem documentadas

## 🔄 Migração

### Antes (hardcoded)
```html
<div class="bg-[#82f7b3] text-[#0f0f0f]/70 border-[#0f0f0f]/10">
```

### Depois (padronizado)
```html
<div class="bg-green-ds text-black-70 border-black-10">
```

## 📞 Suporte

Para dúvidas sobre o design system, consulte este documento ou os arquivos:
- `src/App.css` - Variáveis e classes utilitárias
- `src/index.css` - Animações e estilos específicos

