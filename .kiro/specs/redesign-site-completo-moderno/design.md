# Design Document - Redesign Site Completo Moderno

## Overview

Este documento detalha o design técnico e arquitetural para o redesign completo do site EstágioAI, transformando-o em uma plataforma visualmente moderna e profissional. O redesign mantém toda a funcionalidade existente enquanto eleva significativamente o nível visual através de princípios de design contemporâneo.

### Design Principles

1. **Visual Hierarchy**: Tipografia grande e bold para títulos, espaçamento generoso entre elementos
2. **Soft & Modern**: Bordas arredondadas generosas (24-32px), sombras multicamadas suaves
3. **Color Harmony**: Uso consistente da paleta coral/verde menta com backgrounds beges alternados
4. **Smooth Interactions**: Transições suaves (300ms), animações float, hover effects elegantes
5. **Responsive Excellence**: Mobile-first com breakpoints bem definidos e layouts fluidos
6. **Performance First**: Animações GPU-accelerated, lazy loading, otimizações de rendering

## Architecture

### Component Structure

```
src/
├── components/
│   ├── global/
│   │   ├── Navigation.jsx (UPDATE)
│   │   └── Footer.jsx (UPDATE)
│   ├── home/sections/
│   │   ├── HeroSection.jsx (UPDATE)
│   │   ├── WhyChooseSection.jsx (UPDATE)
│   │   ├── StatsSection.jsx (UPDATE)
│   │   ├── TestimonialsCarouselSection.jsx (UPDATE)
│   │   ├── TopCompaniesSection.jsx (UPDATE)
│   │   └── CTASection.jsx (UPDATE)
│   └── ui/
│       ├── button.jsx (UPDATE)
│       ├── card.jsx (NEW)
│       ├── badge.jsx (NEW)
│       └── animated-section.jsx (NEW)
├── styles/
│   ├── modern-design-system.css (NEW)
│   └── animations.css (NEW)
└── hooks/
    ├── useScrollAnimation.js (NEW)
    └── useParallax.js (NEW)
```

### Design System Tokens

Criar arquivo `src/styles/modern-design-system.css` com tokens CSS customizados para espaçamento, bordas, sombras, tipografia e transições.

## Components and Interfaces

### 1. Modern Card Component

**File**: `src/components/ui/card.jsx`

Variants: default, featured, glass, gradient
Sizes: sm, md, lg
Features: Hover elevation, glow effects, smooth transitions

### 2. Premium Button Component

**File**: `src/components/ui/button.jsx` (UPDATE)

Variants: primary, secondary, outline, ghost, gradient
Features: Glow shadows, scale hover, icon support

### 3. Animated Section Wrapper

**File**: `src/components/ui/animated-section.jsx`

Features: Intersection Observer, fade-up animations, stagger delays, reduced motion support

### 4. Modern Hero Section

**File**: `src/components/home/sections/HeroSection.jsx` (UPDATE)

Features:
- Min-height 90vh
- Gradient background
- Decorative blobs with blur
- Large title (clamp 3.5rem-5.5rem)
- Floating visual elements
- Parallax effects

### 5. Modern Stats Section

**File**: `src/components/home/sections/StatsSection.jsx` (UPDATE)

Features:
- Grid layout (2-4 columns)
- Large gradient numbers
- Counter animations
- Icon integration
- Card-based design

### 6. Premium Testimonials Section

**File**: `src/components/home/sections/TestimonialsCarouselSection.jsx` (UPDATE)

Features:
- Carousel with smooth transitions
- Large quote marks
- Avatar circles
- Rating display
- Auto-play with pause on hover

### 7. Modern Company Grid

**File**: `src/components/home/sections/TopCompaniesSection.jsx` (UPDATE)

Features:
- Responsive grid (2-6 columns)
- Logo containers with hover effects
- Float animations
- Grayscale to color transition

### 8. Modern Navigation

**File**: `src/components/global/Navigation.jsx` (UPDATE)

Features:
- Fixed with backdrop-blur
- Scroll shadow
- Animated underlines
- Mobile drawer menu
- CTA button with glow

### 9. Professional Footer

**File**: `src/components/global/Footer.jsx` (UPDATE)

Features:
- Multi-column layout
- Social icons with hover
- Bege background
- Divider sections
- Responsive columns

## Data Models

### Design Token System

```typescript
interface DesignTokens {
  spacing: Record<string, string>;
  radius: Record<string, string>;
  shadow: Record<string, string>;
  typography: {
    size: Record<string, string>;
    weight: Record<string, number>;
  };
  transition: Record<string, string>;
}
```

### Animation Configuration

```typescript
interface AnimationConfig {
  type: 'fade-up' | 'fade-in' | 'scale' | 'float';
  duration: number;
  delay: number;
  threshold: number;
}
```

## Error Handling

- Reduced motion support via prefers-reduced-motion
- Intersection Observer fallbacks
- Transform property detection
- Performance monitoring

## Testing Strategy

- Visual regression testing
- Accessibility compliance (WCAG 2.1 AA)
- Performance metrics (Lighthouse 90+)
- Cross-browser compatibility
- Responsive testing at all breakpoints

## Implementation Phases

1. Foundation: Design system tokens and animations
2. Core Components: Card, Button, Badge, AnimatedSection
3. Navigation & Footer: Modern header and professional footer
4. Hero Section: Premium design with decorative elements
5. Content Sections: Stats, Testimonials, Companies
6. Polish & Optimization: Scroll animations and performance
7. Responsive & Accessibility: Testing and compliance

## Technical Considerations

- CSS Variables for all design tokens
- GPU-accelerated animations (transform/opacity only)
- Mobile-first responsive strategy
- Accessibility requirements (focus indicators, contrast, keyboard nav)
- Browser support: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)

## Success Metrics

- Modern, professional appearance
- Lighthouse Performance 90+
- WCAG 2.1 AA compliance
- Smooth 60fps animations
- Fast loading times (LCP < 2.5s)
