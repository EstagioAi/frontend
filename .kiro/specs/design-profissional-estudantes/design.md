# Design Document

## Overview

Este documento detalha o design system profissional para o site EstágioAI, expandindo a paleta coral/terracota existente e estabelecendo padrões visuais consistentes para todas as páginas.

### Design Principles

1. **Consistência Visual**: Todos os componentes seguem a mesma linguagem de design
2. **Foco no Estudante**: Elementos visuais que representam juventude, dinamismo e educação
3. **Profissionalismo**: Design clean e moderno que transmite confiança
4. **Acessibilidade**: Contraste adequado e suporte a diferentes necessidades
5. **Responsividade**: Experiência fluida em todos os dispositivos

## Architecture

### Color System Architecture

O sistema de cores é organizado em camadas hierárquicas:

```
Color System
├── Primary Colors (Coral/Terracota)
│   ├── Main: #d97757
│   ├── Light: #e89b7d
│   ├── Lighter: #f2c4b0
│   └── Lightest: #fae8e0
├── Neutral Colors (Cinzas)
│   ├── Dark: #3d3d3a
│   ├── Medium: #6b6b68
│   ├── Light: #9a9a97
│   └── Lighter: #c8c8c6
├── Background Colors (Beges)
│   ├── Primary: #faf9f5
│   ├── Secondary: #f5f4ed
│   ├── Tertiary: #f0efe6
│   └── White: #ffffff
├── Accent Colors (Complementares)
│   ├── Success: #01E297 (Verde menta)
│   ├── Info: #60a5fa (Azul suave)
│   ├── Warning: #fbbf24 (Amarelo)
│   └── Peach: #ffb088 (Pêssego)
└── Pastel Colors (Tags/Badges)
    ├── Yellow: #fef9e7
    ├── Mint: #e8f8f5
    ├── Lavender: #f4ecf7
    └── Peach: #fef5e7
```

## Components and Interfaces

### 1. Color Tokens (CSS Variables)

Todas as cores serão definidas como variáveis CSS em :root para fácil manutenção e consistência.

### 2. Typography System

- Font Family: Space Grotesk (mantido)
- Fluid Typography usando clamp()
- Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- Line Heights: 1.2 (tight), 1.5 (normal), 1.75 (relaxed)

### 3. Button Components

**Primary Button (Coral)**
- Background: #d97757
- Hover: #e89b7d com elevação
- Border radius: 1rem
- Shadow: rgba(61, 61, 58, 0.25)

**Secondary Button (Outline)**
- Border: 2px solid #d97757
- Hover: background rgba(217, 119, 87, 0.05)
- Transparent background

**CTA Button (Purple Gradient)**
- Background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)
- Usado para ações principais
- Shadow mais pronunciada

### 4. Card Components

**Feature Card**
- Background: white
- Border: 1px solid rgba(217, 119, 87, 0.15)
- Border radius: 1.5rem
- Hover: elevação e border mais forte

**Job Card**
- Similar ao feature card
- Inclui badges com cores pastel
- Hover effect com border coral

### 5. Section Backgrounds

Alternância de backgrounds para criar ritmo visual:
- Branco (#ffffff)
- Bege claro 1 (#faf9f5)
- Bege claro 2 (#f5f4ed)

### 6. Navigation Component

- Sticky top
- Background: rgba(255, 255, 255, 0.95) com backdrop-filter
- Border bottom: rgba(217, 119, 87, 0.1)
- Links hover: coral

## Data Models

### Theme Configuration

```typescript
interface ThemeConfig {
  colors: {
    primary: ColorPalette;
    neutral: ColorPalette;
    background: ColorPalette;
    accent: ColorPalette;
    pastel: ColorPalette;
  };
  typography: TypographyConfig;
  spacing: SpacingConfig;
}
```

## Error Handling

### Visual Feedback States

1. **Loading**: Skeleton com shimmer coral suave
2. **Error**: Background vermelho suave, ícone coral
3. **Empty**: Ilustração minimalista coral
4. **Success**: Background verde menta suave

## Testing Strategy

### Visual Testing
- Screenshots de componentes em diferentes estados
- Teste de contraste (WCAG AA)
- Responsive em múltiplos viewports

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Motion sensitivity (prefers-reduced-motion)

### Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile Safari e Chrome Mobile

## Implementation Guidelines

### Page-by-Page Application

**Home**: Hero com gradiente coral, features alternando backgrounds, stats com ícones coral

**Vagas**: Header bege claro, filters sidebar branco, job cards grid

**Empresas**: Similar à home, foco em logos e stats

**Sobre**: Timeline coral, team cards com backgrounds pastel

**Login/Register**: Forms brancos, inputs com focus coral

### Responsive Breakpoints

- xs: 0-640px
- sm: 640px+
- md: 768px+
- lg: 1024px+
- xl: 1280px+
- 2xl: 1536px+

## Design Rationale

**Por que expandir a paleta coral?**
Criar hierarquia visual, melhor diferenciação entre seções, mais flexibilidade para estados.

**Por que cores pastel para tags?**
Categorização visual leve, modernidade, boa legibilidade, associação com juventude.

**Por que manter Space Grotesk?**
Moderna, geométrica, profissional, excelente legibilidade, gratuita.

**Por que gradiente roxo para CTAs?**
Contraste forte, transmite energia, moderno, diferencia ações principais.
