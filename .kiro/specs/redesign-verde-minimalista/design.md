# Design Document - Redesign Verde Minimalista

## Overview

Este documento descreve a arquitetura técnica e estratégia de implementação para migrar todo o site EstágioAI do design system atual (coral/terracota) para o novo design system verde e preto minimalista. O design será baseado na implementação bem-sucedida da página de Blog, garantindo consistência visual, performance otimizada e experiência de usuário moderna.

A migração seguirá uma abordagem sistemática, priorizando componentes base, depois páginas principais, e finalmente páginas secundárias, garantindo que cada etapa seja testada e validada antes de prosseguir.

---

## Architecture

### Design System Foundation

O novo design system será baseado nos seguintes pilares arquiteturais:

#### 1. Atomic Design Structure
```
src/
├── components/
│   ├── ui/                    # Componentes base (atoms)
│   │   ├── Button.jsx         # Botões redesenhados
│   │   ├── Card.jsx           # Cards minimalistas
│   │   ├── Input.jsx          # Inputs modernos
│   │   ├── Badge.jsx          # Badges verdes
│   │   └── ...
│   ├── global/                # Componentes globais
│   │   ├── Navigation.jsx     # Navbar redesenhada
│   │   ├── Footer.jsx         # Footer atualizado
│   │   └── ...
│   └── sections/              # Seções específicas por página
│       ├── home/
│       ├── companies/
│       └── ...
```

#### 2. CSS Architecture
```css
/* Variáveis do novo design system */
:root {
  /* Cores principais */
  --color-primary-green: #82f7b3;
  --color-primary-green-hover: #6ee5a1;
  --color-primary-black: #0f0f0f;
  --color-primary-black-hover: #1a1a1a;
  
  /* Backgrounds */
  --color-bg-primary: #f8f8f8;
  --color-bg-white: #ffffff;
  
  /* Opacidades padronizadas */
  --opacity-text-primary: 1;
  --opacity-text-secondary: 0.7;
  --opacity-text-tertiary: 0.5;
  --opacity-border: 0.1;
  
  /* Espaçamentos */
  --spacing-section: 5rem;      /* py-20 */
  --spacing-container: 4rem;    /* py-16 */
  --spacing-element: 1.5rem;    /* gap-6 */
  
  /* Transições */
  --transition-fast: 200ms;
  --transition-medium: 300ms;
}
```
#### 3
. Component Hierarchy
```
Page Level (organisms)
├── Navigation (global)
├── HeroSection (page-specific)
├── ContentSections (page-specific)
├── CTASection (reusable)
└── Footer (global)

Section Level (molecules)
├── Card (ui)
├── Button (ui)
├── Input (ui)
└── Badge (ui)

Element Level (atoms)
├── Typography
├── Colors
├── Spacing
└── Animations
```

---

## Components and Interfaces

### 1. Navigation Component (Redesigned)

#### Interface
```typescript
interface NavigationProps {
  transparent?: boolean;
  sticky?: boolean;
  reduced?: boolean; // Nova prop para altura reduzida
}
```

#### Design Specifications
```jsx
// Navbar mais discreta e moderna
<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#0f0f0f]/10 transition-all duration-200">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between py-3"> {/* Reduzido de py-4 para py-3 */}
      {/* Logo menor e mais discreto */}
      <img src="/logo.svg" alt="EstágioAI" className="h-7 w-auto" /> {/* Reduzido de h-8 para h-7 */}
      
      {/* Links com hover verde */}
      <div className="hidden lg:flex items-center gap-1">
        <Link className="px-4 py-2 text-sm font-medium text-[#0f0f0f] hover:text-[#82f7b3] hover:bg-[#82f7b3]/10 rounded-lg transition-all duration-200">
          Início
        </Link>
      </div>
      
      {/* CTAs redesenhados */}
      <div className="flex items-center gap-3">
        <Button variant="ghost">Entrar</Button>
        <Button variant="secondary">Vamos conversar</Button>
      </div>
    </div>
  </div>
</nav>
```
#
## 2. Button Component System

#### Interface
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'active';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}
```

#### Design Variants
```jsx
// Botão Primário (Preto)
<Button variant="primary">
  className="inline-flex items-center gap-2 rounded-lg bg-[#0f0f0f] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-lg"
</Button>

// Botão Secundário (Verde)
<Button variant="secondary">
  className="inline-flex items-center gap-2 rounded-lg bg-[#82f7b3] px-6 py-3 text-sm font-bold text-[#0f0f0f] transition-all duration-200 hover:bg-[#6ee5a1] hover:shadow-lg"
</Button>

// Botão Outline
<Button variant="outline">
  className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0f0f0f]/10 bg-white px-5 py-2.5 text-sm font-bold text-[#0f0f0f]/70 hover:border-[#82f7b3] hover:bg-[#82f7b3]/5 hover:text-[#0f0f0f] transition-all duration-200"
</Button>
```

### 3. Card Component System

#### Interface
```typescript
interface CardProps {
  variant?: 'default' | 'article' | 'cta' | 'feature';
  hover?: boolean;
  image?: string;
  children: React.ReactNode;
}
```

#### Design Specifications
```jsx
// Card Padrão
<Card variant="default">
  className="rounded-2xl border-2 border-[#0f0f0f]/10 bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-[#82f7b3] hover:shadow-xl"
</Card>

// Card de Artigo
<Card variant="article">
  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#0f0f0f]/10 bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-[#82f7b3] hover:shadow-xl"
</Card>
```### 4. In
put Component System

#### Interface
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search';
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  success?: boolean;
  disabled?: boolean;
}
```

#### Design Specifications
```jsx
// Input Padrão
<Input>
  className="w-full rounded-lg border-2 border-[#0f0f0f]/10 bg-white px-4 py-3 text-base text-[#0f0f0f] placeholder:text-[#0f0f0f]/40 outline-none transition-all duration-200 focus:border-[#82f7b3] focus:ring-4 focus:ring-[#82f7b3]/20"
</Input>

// Input de Busca
<Input type="search" icon={<Search />}>
  className="w-full rounded-lg border-2 border-[#0f0f0f]/10 bg-white py-3.5 pl-12 pr-4 text-base text-[#0f0f0f] placeholder:text-[#0f0f0f]/40 outline-none transition-all duration-200 focus:border-[#82f7b3] focus:ring-4 focus:ring-[#82f7b3]/20"
</Input>
```

### 5. Badge Component System

#### Interface
```typescript
interface BadgeProps {
  variant?: 'default' | 'outline' | 'filled';
  color?: 'green' | 'neutral';
  icon?: React.ReactNode;
  children: React.ReactNode;
}
```

#### Design Specifications
```jsx
// Badge com Borda Verde
<Badge variant="outline" color="green">
  className="inline-flex items-center gap-2 rounded-full border-2 border-[#82f7b3] bg-[#82f7b3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0f0f0f]"
</Badge>

// Badge Preenchido
<Badge variant="filled" color="green">
  className="rounded-full bg-[#82f7b3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0f0f0f]"
</Badge>
```

---

## Data Models

### 1. Design System Configuration

```typescript
interface DesignSystemConfig {
  colors: {
    primary: {
      green: string;
      greenHover: string;
      black: string;
      blackHover: string;
    };
    background: {
      primary: string;
      white: string;
    };
    opacity: {
      textPrimary: number;
      textSecondary: number;
      textTertiary: number;
      border: number;
    };
  };
  spacing: {
    section: string;
    container: string;
    element: string;
  };
  transitions: {
    fast: string;
    medium: string;
  };
  typography: {
    hero: string;
    section: string;
    card: string;
    body: string;
  };
}
```#
## 2. Component Theme Configuration

```typescript
interface ComponentTheme {
  button: {
    variants: {
      primary: string;
      secondary: string;
      outline: string;
      ghost: string;
    };
    sizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  card: {
    variants: {
      default: string;
      article: string;
      cta: string;
      feature: string;
    };
  };
  input: {
    states: {
      default: string;
      focus: string;
      error: string;
      success: string;
      disabled: string;
    };
  };
}
```

### 3. Page Layout Configuration

```typescript
interface PageLayoutConfig {
  navigation: {
    height: string;
    background: string;
    blur: boolean;
    sticky: boolean;
  };
  hero: {
    padding: string;
    maxWidth: string;
    decorativeElements: boolean;
  };
  sections: {
    padding: string;
    maxWidth: string;
    gap: string;
  };
  footer: {
    background: string;
    padding: string;
  };
}
```

---

## Error Handling

### 1. Design System Fallbacks

```typescript
// Fallback para cores não definidas
const getColor = (colorKey: string, fallback: string = '#0f0f0f') => {
  return designSystemColors[colorKey] || fallback;
};

// Fallback para componentes não carregados
const ComponentFallback = ({ error }: { error: Error }) => (
  <div className="rounded-lg border-2 border-red-500/20 bg-red-50 p-4 text-red-700">
    <p>Erro ao carregar componente: {error.message}</p>
  </div>
);
```### 
2. Migration Error Handling

```typescript
// Verificação de compatibilidade de cores
const validateColorMigration = (oldColor: string, newColor: string) => {
  const contrastRatio = calculateContrast(newColor, '#ffffff');
  if (contrastRatio < 4.5) {
    console.warn(`Cor ${newColor} não atende critérios de acessibilidade`);
    return false;
  }
  return true;
};

// Fallback para componentes não migrados
const LegacyComponentWrapper = ({ children, migrated = false }) => {
  if (!migrated) {
    console.warn('Componente ainda não migrado para o novo design system');
  }
  return <div className={migrated ? 'new-design' : 'legacy-design'}>{children}</div>;
};
```

### 3. Runtime Error Boundaries

```typescript
class DesignSystemErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Design System Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border-2 border-[#0f0f0f]/10 bg-white p-8 text-center">
          <h3 className="text-lg font-bold text-[#0f0f0f]">Algo deu errado</h3>
          <p className="mt-2 text-sm text-[#0f0f0f]/70">
            Erro no carregamento do componente. Tente recarregar a página.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## Testing Strategy

### 1. Visual Regression Testing

```typescript
// Testes de regressão visual para garantir consistência
describe('Design System Migration', () => {
  test('Navbar deve ter altura reduzida', async () => {
    const navbar = await screen.findByRole('navigation');
    expect(navbar).toHaveClass('py-3'); // Não py-4
  });

  test('Botões devem usar cores corretas', async () => {
    const primaryButton = await screen.findByRole('button', { name: /primário/i });
    expect(primaryButton).toHaveClass('bg-[#0f0f0f]');
    
    const secondaryButton = await screen.findByRole('button', { name: /secundário/i });
    expect(secondaryButton).toHaveClass('bg-[#82f7b3]');
  });

  test('Cards devem ter hover effects', async () => {
    const card = await screen.findByTestId('card');
    expect(card).toHaveClass('hover:-translate-y-1');
    expect(card).toHaveClass('hover:border-[#82f7b3]');
  });
});
```### 
2. Accessibility Testing

```typescript
// Testes de acessibilidade
describe('Accessibility Compliance', () => {
  test('Contraste de cores deve atender WCAG AA', async () => {
    const textElements = await screen.findAllByText(/./);
    textElements.forEach(element => {
      const contrast = getContrastRatio(element);
      expect(contrast).toBeGreaterThanOrEqual(4.5);
    });
  });

  test('Focus states devem ser visíveis', async () => {
    const interactiveElements = await screen.findAllByRole('button');
    interactiveElements.forEach(element => {
      fireEvent.focus(element);
      expect(element).toHaveClass('focus:ring-[#82f7b3]/20');
    });
  });
});
```

### 3. Performance Testing

```typescript
// Testes de performance
describe('Performance Impact', () => {
  test('Transições devem ser rápidas (200ms)', () => {
    const elements = document.querySelectorAll('[class*="transition"]');
    elements.forEach(element => {
      const duration = getComputedStyle(element).transitionDuration;
      expect(duration).toBe('0.2s');
    });
  });

  test('Animações devem respeitar prefers-reduced-motion', () => {
    // Simular preferência de movimento reduzido
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: true, // prefers-reduced-motion: reduce
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });

    const animatedElements = document.querySelectorAll('[class*="animate"]');
    animatedElements.forEach(element => {
      const animation = getComputedStyle(element).animation;
      expect(animation).toBe('none');
    });
  });
});
```

---

## Implementation Strategy

### Phase 1: Foundation (Week 1)
1. **Design System Setup**
   - Atualizar variáveis CSS globais
   - Criar componentes base (Button, Card, Input, Badge)
   - Implementar sistema de cores verde/preto

2. **Navigation Redesign**
   - Reduzir altura da navbar (py-3)
   - Implementar background transparente com blur
   - Atualizar hover states para verde
   - Tornar sticky e responsiva

### Phase 2: Core Pages (Week 2)
1. **Home Page Transformation**
   - Manter estrutura atual da hero section como base
   - Aplicar novo design system
   - Adicionar elementos decorativos minimalistas
   - Atualizar todos os CTAs

2. **Main Pages Migration**
   - CompaniesPage.jsx
   - Vagas.jsx
   - Sobre.jsx
   - Contato.jsx### Phase 
3: Secondary Pages (Week 3)
1. **Authentication Pages**
   - Login.jsx
   - Register.jsx

2. **Content Pages**
   - PricingPlans.jsx
   - HelpCenter.jsx
   - ResumeChecker.jsx
   - ResumeTemplates.jsx

### Phase 4: Final Pages & Polish (Week 4)
1. **Remaining Pages**
   - Universidades.jsx
   - TermsOfService.jsx
   - PrivacyPolicy.jsx
   - TermsOfUse.jsx

2. **Quality Assurance**
   - Testes de regressão visual
   - Validação de acessibilidade
   - Otimização de performance
   - Testes cross-browser

### Phase 5: Localization & Final Review
1. **Portuguese Localization**
   - Revisar todos os textos
   - Atualizar labels e placeholders
   - Verificar ARIA labels

2. **Final Polish**
   - Ajustes finos de espaçamento
   - Otimização de animações
   - Documentação final

---

## Migration Checklist

### Design System Components
- [ ] Variáveis CSS atualizadas
- [ ] Button component redesenhado
- [ ] Card component atualizado
- [ ] Input component modernizado
- [ ] Badge component implementado
- [ ] Navigation component redesenhada

### Color Migration
- [ ] Background principal: `#f8f8f8`
- [ ] Texto principal: `#0f0f0f`
- [ ] Texto secundário: `#0f0f0f/70`
- [ ] Accent color: `#82f7b3`
- [ ] Hover color: `#6ee5a1`
- [ ] Bordas: `#0f0f0f/10`

### Typography Updates
- [ ] H1: `text-5xl sm:text-6xl lg:text-7xl`
- [ ] H2: `text-3xl sm:text-4xl`
- [ ] H3: `text-2xl`
- [ ] H4: `text-lg sm:text-xl`
- [ ] Body: `text-lg leading-relaxed`
- [ ] Small: `text-sm`

### Layout & Spacing
- [ ] Containers: `max-w-7xl` (hero), `max-w-6xl` (content)
- [ ] Section padding: `py-20`
- [ ] Element gaps: `gap-6`, `gap-8`, `gap-12`
- [ ] Responsive padding: `px-4 sm:px-6 lg:px-8`

### Interactions & Animations
- [ ] Transições: `duration-200`
- [ ] Hover elevação: `hover:-translate-y-1`
- [ ] Focus rings: `focus:ring-[#82f7b3]/20`
- [ ] Prefers-reduced-motion support

### Accessibility
- [ ] Contraste WCAG AA
- [ ] Focus states visíveis
- [ ] ARIA labels em português
- [ ] Navegação por teclado
- [ ] Touch targets ≥ 44px---


## Success Metrics

### Visual Consistency
- ✅ 100% das páginas usando paleta verde/preto
- ✅ Navbar 20% mais discreta (altura reduzida)
- ✅ Hover states consistentes em todo o site
- ✅ Elementos decorativos minimalistas

### Performance
- ✅ Transições ≤ 200ms
- ✅ Lighthouse Score ≥ 90
- ✅ First Contentful Paint ≤ 1.5s
- ✅ Cumulative Layout Shift ≤ 0.1

### User Experience
- ✅ 100% do conteúdo em português
- ✅ Navegação intuitiva e consistente
- ✅ Responsividade em todos os dispositivos
- ✅ Acessibilidade WCAG AA

### Technical Quality
- ✅ 0 erros de console
- ✅ Componentes reutilizáveis
- ✅ Código limpo e documentado
- ✅ Testes de regressão passando

---

## Conclusion

Este design representa uma evolução significativa na identidade visual do EstágioAI, migrando de um design system coral/terracota para uma abordagem verde e preta minimalista. A implementação seguirá uma estratégia faseada, garantindo qualidade, performance e acessibilidade em cada etapa.

O resultado final será um site moderno, consistente e profissional que reflete os valores de inovação e simplicidade da EstágioAI, proporcionando uma experiência de usuário superior em todas as páginas e dispositivos.

### Key Design Principles

1. **Minimalismo**: Foco no conteúdo com elementos decorativos sutis
2. **Consistência**: Paleta de cores e componentes padronizados
3. **Performance**: Transições rápidas e animações otimizadas
4. **Acessibilidade**: Contraste adequado e navegação inclusiva
5. **Responsividade**: Experiência otimizada em todos os dispositivos

### Next Steps

Após a aprovação deste design, o próximo passo será criar o documento de tasks detalhado, quebrando a implementação em tarefas específicas e executáveis para cada componente e página do sistema.