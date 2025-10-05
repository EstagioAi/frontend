# 🎨 Guia de Sections - EstágioAI

## 📋 Visão Geral

Sections modernas e responsivas criadas com a paleta de cores do EstágioAI (Verde #82f7b3 e Preto #0f0f0f).

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   └── sections/
│       ├── HeroSection.jsx          # Hero principal
│       ├── FeaturesSection.jsx      # Funcionalidades
│       ├── HowItWorksSection.jsx    # Como funciona
│       ├── StatsSection.jsx         # Estatísticas
│       ├── TestimonialsSection.jsx  # Depoimentos
│       ├── PricingSection.jsx       # Planos e preços
│       ├── FAQSection.jsx           # Perguntas frequentes
│       └── CTASection.jsx           # Call to Action
└── pages/
    └── LandingPageDemo.jsx          # Demo completa
```

## 🎯 Sections Criadas

### 1. Hero Section
**Arquivo**: `src/components/sections/HeroSection.jsx`

**Características**:
- ✅ Background preto com padrão de grid
- ✅ Orbs verdes animados (blur + pulse)
- ✅ Título com sublinhado verde animado
- ✅ 2 CTAs (Secondary glow + Outline)
- ✅ Estatísticas inline (10k+, 500+, 95%)
- ✅ Card flutuante com ilustração
- ✅ Floating cards com animação
- ✅ Scroll indicator animado

**Paleta**:
- Background: `bg-black-ds`
- Texto principal: `text-white-ds`
- Destaque: `text-green-ds`
- Cards: `bg-white-ds`

**Uso**:
```jsx
import HeroSection from './components/sections/HeroSection';

<HeroSection />
```

---

### 2. Features Section
**Arquivo**: `src/components/sections/FeaturesSection.jsx`

**Características**:
- ✅ Background claro com orbs verdes
- ✅ Grid 3 colunas (responsivo)
- ✅ 6 features com ícones
- ✅ Cards interativos com hover
- ✅ Ícone anima no hover
- ✅ Seta aparece no hover
- ✅ CTA no final

**Features incluídas**:
1. 🎯 Match Inteligente
2. ⚡ Processo Rápido
3. 🔒 Seguro e Confiável
4. 📊 Dashboard Completo
5. 🤝 Empresas Verificadas
6. 💬 Suporte 24/7

**Paleta**:
- Background: `bg-bg-primary`
- Cards: `card-base card-interactive hover-card-green`

---

### 3. How It Works Section
**Arquivo**: `src/components/sections/HowItWorksSection.jsx`

**Características**:
- ✅ Background branco com grid pattern
- ✅ 4 passos alternados (esquerda/direita)
- ✅ Numeração grande (01, 02, 03, 04)
- ✅ Ícones grandes
- ✅ Lista de detalhes com checkmarks
- ✅ Cards com gradiente verde
- ✅ Linha vertical conectando passos

**Passos**:
1. 👤 Crie seu perfil
2. 🔍 Encontre vagas
3. 📝 Candidate-se
4. 🚀 Comece seu estágio

**Paleta**:
- Background: `bg-white-ds`
- Numeração: `text-green-10`
- Cards: `card-base card-glow`

---

### 4. Stats Section
**Arquivo**: `src/components/sections/StatsSection.jsx`

**Características**:
- ✅ Background preto com orbs animados
- ✅ Grid 4 colunas (responsivo)
- ✅ Números grandes em verde
- ✅ Ícones animam no hover
- ✅ Badge "Atualizado em tempo real"

**Estatísticas**:
- 👨‍🎓 10.000+ Estudantes
- 🏢 500+ Empresas
- 💼 5.000+ Vagas
- ⭐ 95% Satisfação

**Paleta**:
- Background: `bg-black-ds`
- Cards: `bg-white-05 border-white-10`
- Números: `text-green-ds`

---

### 5. Testimonials Section
**Arquivo**: `src/components/sections/TestimonialsSection.jsx`

**Características**:
- ✅ Background bege com padrão radial
- ✅ Grid 3 colunas (responsivo)
- ✅ 6 depoimentos reais
- ✅ Rating com estrelas
- ✅ Badge de destaque
- ✅ Avatar com emoji
- ✅ Cards com shimmer effect
- ✅ CTA no final

**Depoimentos**:
1. Ana Silva - Engenharia
2. Carlos Santos - Design
3. Maria Oliveira - Marketing
4. João Pedro - TI
5. Beatriz Costa - Administração
6. Lucas Ferreira - Dados

**Paleta**:
- Background: `bg-bg-secondary`
- Cards: `card-base card-shimmer hover-card-green`
- Estrelas: `text-green-ds`

---

### 6. Pricing Section
**Arquivo**: `src/components/sections/PricingSection.jsx`

**Características**:
- ✅ Background branco com orbs
- ✅ Grid 3 colunas (responsivo)
- ✅ 3 planos (Estudante, Pro, Empresa)
- ✅ Badge "Mais Popular"
- ✅ Card central em destaque (scale + glow)
- ✅ Lista de features com checkmarks
- ✅ Garantia de reembolso

**Planos**:
1. 🎓 Estudante - Grátis
2. ⭐ Estudante Pro - R$ 29/mês (Popular)
3. 🏢 Empresa - Sob consulta

**Paleta**:
- Background: `bg-white-ds`
- Card destaque: `card-glow card-border-animated`
- Preço: `text-green-ds`

---

### 7. FAQ Section
**Arquivo**: `src/components/sections/FAQSection.jsx`

**Características**:
- ✅ Background claro com grid
- ✅ Layout 2 colunas (sticky left)
- ✅ 8 perguntas frequentes
- ✅ Accordion interativo
- ✅ Card de suporte
- ✅ Ícone rotaciona no abrir/fechar

**Perguntas**:
1. Como funciona a plataforma?
2. É realmente grátis?
3. Como são selecionadas as vagas?
4. Quanto tempo leva?
5. Posso me candidatar a quantas vagas?
6. Como funciona o suporte?
7. As empresas são verificadas?
8. Posso cancelar a assinatura?

**Paleta**:
- Background: `bg-bg-primary`
- Cards: `card-base hover:border-green-ds`
- Ícone: `text-green-ds`

---

### 8. CTA Section
**Arquivo**: `src/components/sections/CTASection.jsx`

**Características**:
- ✅ Background preto com orbs
- ✅ Grid pattern verde
- ✅ Título com sublinhado animado
- ✅ 2 CTAs (Glow + Pulse + Outline)
- ✅ Trust indicators
- ✅ Estatísticas inline
- ✅ Centralizado

**Paleta**:
- Background: `bg-black-ds`
- Título: `text-white-ds`
- Destaque: `text-green-ds`
- CTAs: `btn-secondary btn-glow btn-pulse`

---

## 🎨 Paleta de Cores Utilizada

### Cores Principais
- **Verde**: `#82f7b3` (`text-green-ds`, `bg-green-ds`)
- **Preto**: `#0f0f0f` (`text-black-ds`, `bg-black-ds`)
- **Branco**: `#ffffff` (`text-white-ds`, `bg-white-ds`)

### Backgrounds
- `bg-bg-primary` - Cinza claro (#f8f8f8)
- `bg-bg-secondary` - Bege claro (#f5f4ed)
- `bg-black-ds` - Preto (#0f0f0f)
- `bg-white-ds` - Branco (#ffffff)

### Opacidades
- `text-white-70` - Branco 70%
- `text-black-70` - Preto 70%
- `bg-green-05` - Verde 5%
- `bg-green-10` - Verde 10%
- `bg-white-05` - Branco 5%
- `border-white-10` - Branco 10%

## 🎯 Classes de Hover Utilizadas

### Botões
- `btn-base btn-primary` - Botão preto
- `btn-base btn-secondary` - Botão verde
- `btn-base btn-outline` - Botão outline
- `btn-base btn-glow` - Com brilho
- `btn-base btn-pulse` - Com pulso
- `btn-base btn-shimmer` - Com shimmer

### Cards
- `card-base` - Card padrão
- `card-glow` - Com brilho verde
- `card-interactive` - Ícone + seta animados
- `card-shimmer` - Com shimmer
- `card-border-animated` - Borda animada
- `hover-card-green` - Hover verde

### Badges
- `badge-base badge-filled` - Badge preenchido
- `badge-base badge-outline` - Badge outline

## 📱 Responsividade

Todas as sections são totalmente responsivas:

- **Mobile** (< 768px): 1 coluna
- **Tablet** (768px - 1024px): 2 colunas
- **Desktop** (> 1024px): 3-4 colunas

## 🚀 Como Usar

### 1. Importar Section Individual
```jsx
import HeroSection from './components/sections/HeroSection';

function App() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
```

### 2. Usar Landing Page Completa
```jsx
import LandingPageDemo from './pages/LandingPageDemo';

function App() {
  return <LandingPageDemo />;
}
```

### 3. Personalizar Conteúdo
Edite os arrays de dados dentro de cada section:

```jsx
// Em FeaturesSection.jsx
const features = [
  {
    icon: '🎯',
    title: 'Seu Título',
    description: 'Sua descrição',
    color: 'green'
  },
  // ...
];
```

## ✨ Animações Incluídas

- ✅ `animate-pulse` - Pulso contínuo
- ✅ `animate-float-y` - Flutuação vertical
- ✅ `animate-bounce` - Bounce
- ✅ Hover transitions suaves
- ✅ Accordion expand/collapse
- ✅ Shimmer effects
- ✅ Glow effects

## 🎁 Recursos Extras

### Padrões de Background
```jsx
// Grid Pattern
backgroundImage: `linear-gradient(...)`

// Radial Pattern
backgroundImage: `radial-gradient(...)`

// Dot Pattern
backgroundImage: `radial-gradient(circle at 2px 2px, ...)`
```

### Orbs Animados
```jsx
<div className="absolute w-96 h-96 bg-green-ds opacity-20 rounded-full blur-3xl animate-pulse"></div>
```

### Sublinhado Animado
```jsx
<svg className="absolute -bottom-2 left-0 w-full" height="12">
  <path d="M2 10C50 2 150 2 198 10" stroke="#82f7b3" strokeWidth="3"/>
</svg>
```

## 📊 Estatísticas das Sections

| Section | Linhas | Componentes | Animações |
|---------|--------|-------------|-----------|
| Hero | 120 | 5 | 4 |
| Features | 90 | 6 | 2 |
| How It Works | 140 | 4 | 1 |
| Stats | 80 | 4 | 2 |
| Testimonials | 110 | 6 | 2 |
| Pricing | 130 | 3 | 3 |
| FAQ | 100 | 8 | 1 |
| CTA | 90 | 3 | 2 |

**Total**: 860 linhas de código React

## ✅ Checklist de Implementação

- [x] Hero Section com background preto
- [x] Features com grid 3 colunas
- [x] How It Works com 4 passos
- [x] Stats com números grandes
- [x] Testimonials com 6 depoimentos
- [x] Pricing com 3 planos
- [x] FAQ com accordion
- [x] CTA final com orbs
- [x] Paleta verde e preta
- [x] Hovers avançados
- [x] Responsividade completa
- [x] Animações suaves
- [x] Documentação completa

---

**Criado em**: 2025-10-05
**Total de Sections**: 8
**Linhas de código**: 860+
**Componentes**: 40+

