# Convenções de Nomenclatura - EstágioAI

Este documento define as convenções de nomenclatura para código, arquivos, componentes e variáveis no projeto EstágioAI.

## 📋 Índice

- [Componentes React](#componentes-react)
- [Arquivos e Diretórios](#arquivos-e-diretórios)
- [Variáveis CSS](#variáveis-css)
- [Classes CSS](#classes-css)
- [Props e Variáveis JavaScript](#props-e-variáveis-javascript)
- [Funções e Métodos](#funções-e-métodos)
- [Constantes](#constantes)
- [Hooks Customizados](#hooks-customizados)
- [Tipos e Interfaces](#tipos-e-interfaces)

---

## Componentes React

### Nomenclatura de Componentes

**Convenção**: PascalCase

```jsx
✅ Correto:
Button
FeatureCard
JobCard
NavigationBar
HeroSection
TestimonialsCarousel

❌ Incorreto:
button
feature-card
jobCard
navigation_bar
```

### Regras

1. **Nome descritivo**: O nome deve descrever claramente o propósito do componente
2. **Substantivos**: Use substantivos ou frases nominais
3. **Específico sobre genérico**: Prefira nomes específicos

```jsx
✅ Bom:
UserProfileCard
JobListingGrid
CompanyLogoCarousel

❌ Ruim:
Card
Grid
Carousel
```

### Componentes de UI Base

Para componentes de UI reutilizáveis, use nomes simples e diretos:

```jsx
Button
Badge
Card
Input
Select
Modal
Dropdown
```

### Componentes Compostos

Para componentes que são variações ou especializações:

```jsx
FeatureCard (especialização de Card)
JobCard (especialização de Card)
PrimaryButton (variação de Button)
```

### Componentes de Seção

Para componentes que representam seções de página:

```jsx
HeroSection
FeaturesSection
TestimonialsSection
CTASection
StatsSection
```

**Padrão**: `[Nome]Section`

---

## Arquivos e Diretórios

### Arquivos de Componentes

**Convenção**: kebab-case para arquivos, PascalCase para componentes

```
✅ Correto:
button.jsx → export Button
feature-card.jsx → export FeatureCard
job-card.jsx → export JobCard
navigation-bar.jsx → export NavigationBar

❌ Incorreto:
Button.jsx
FeatureCard.jsx
feature_card.jsx
```

### Arquivos CSS

**Convenção**: kebab-case, mesmo nome do componente

```
✅ Correto:
button.css
feature-card.css
job-card.css
navigation-bar.css

❌ Incorreto:
Button.css
featureCard.css
feature_card.css
styles.css (muito genérico)
```

### Estrutura de Diretórios

```
src/
├── components/
│   ├── ui/              # Componentes de UI base
│   │   ├── button.jsx
│   │   ├── badge.jsx
│   │   └── card.jsx
│   ├── home/            # Componentes específicos da home
│   │   └── sections/
│   │       ├── hero-section.jsx
│   │       └── features-section.jsx
│   ├── global/          # Componentes globais
│   │   ├── navigation.jsx
│   │   └── footer.jsx
│   └── companies/       # Componentes de empresas
│       └── sections/
│           └── companies-hero-section.jsx
├── pages/               # Páginas
│   ├── Home.jsx
│   ├── Vagas.jsx
│   └── Sobre.jsx
├── hooks/               # Custom hooks
│   ├── useVagas.js
│   └── useAuth.js
├── lib/                 # Utilitários
│   └── utils.js
└── styles/              # Estilos globais
    └── responsive-utilities.css
```

### Regras de Organização

1. **Componentes de UI**: `components/ui/` - componentes reutilizáveis
2. **Componentes de Página**: `components/[pagina]/` - específicos de uma página
3. **Componentes Globais**: `components/global/` - usados em todo o site
4. **Páginas**: `pages/` - componentes de página principal
5. **Hooks**: `hooks/` - custom hooks
6. **Utilitários**: `lib/` - funções auxiliares

---

## Variáveis CSS

### Variáveis de Cor

**Convenção**: `--color-[categoria]-[variação]`

```css
✅ Correto:
--color-coral-primary
--color-coral-light
--color-coral-lighter
--color-gray-dark
--color-gray-medium
--color-bg-primary
--color-bg-secondary
--color-success
--color-pastel-yellow

❌ Incorreto:
--coral
--primary-color
--grayDark
--background_color
```

### Categorias de Cores

```css
/* Primary Colors */
--color-coral-[variação]
--color-peach

/* Neutral Colors */
--color-gray-[variação]

/* Background Colors */
--color-bg-[variação]

/* Accent Colors */
--color-success
--color-info
--color-warning

/* Pastel Colors */
--color-pastel-[cor]
```

### Variáveis Semânticas

**Convenção**: `--[tipo]-[descrição]`

```css
✅ Correto:
--text-primary
--text-secondary
--text-muted
--border-light
--border-coral
--shadow-sm
--shadow-coral

❌ Incorreto:
--primary-text
--lightBorder
--coral_shadow
```

### Variáveis de Espaçamento

**Convenção**: `--space-[número]`

```css
✅ Correto:
--space-1    /* 8px */
--space-2    /* 16px */
--space-3    /* 24px */
--space-10   /* 80px */

❌ Incorreto:
--spacing-small
--space-xs
--padding-1
```

### Variáveis de Tipografia

**Convenção**: `--text-[tamanho]`, `--font-[peso]`, `--leading-[altura]`

```css
✅ Correto:
--text-xs
--text-base
--text-2xl
--font-normal
--font-bold
--leading-tight
--leading-relaxed

❌ Incorreto:
--font-size-small
--fontWeight-bold
--line-height-normal
```

### Variáveis de Layout

```css
/* Border Radius */
--radius-sm
--radius-lg
--radius-full

/* Shadows */
--shadow-sm
--shadow-xl

/* Durations */
--duration-fast
--duration-normal

/* Easings */
--ease-in-out
--ease-out

/* Breakpoints */
--screen-sm
--screen-lg
```

---

## Classes CSS

### Classes de Componente

**Convenção**: BEM (Block Element Modifier) com kebab-case

```css
✅ Correto:
.feature-card
.feature-card__icon
.feature-card__title
.feature-card__description
.feature-card--highlighted

.job-card
.job-card__header
.job-card__logo
.job-card__meta
.job-card__meta-item

❌ Incorreto:
.featureCard
.feature_card
.FeatureCard
.feature-card-icon (deveria ser __)
.feature-card-highlighted (deveria ser --)
```

### Estrutura BEM

```css
/* Block (componente) */
.card { }

/* Element (parte do componente) */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier (variação) */
.card--large { }
.card--highlighted { }
.card--hoverable { }
```

### Classes Utilitárias

**Convenção**: Seguir padrão Tailwind quando possível

```css
✅ Correto:
.text-center
.flex
.grid
.gap-4
.p-6
.rounded-lg
.shadow-md

❌ Incorreto:
.textCenter
.flex-container
.padding-6
```

### Classes de Estado

**Convenção**: Prefixo com estado

```css
✅ Correto:
.is-active
.is-disabled
.is-loading
.has-error
.is-open

❌ Incorreto:
.active
.disabled
.loading
```

### Classes Responsivas

**Convenção**: Prefixo com breakpoint

```css
✅ Correto:
.sm\:text-lg
.md\:grid-cols-2
.lg\:flex-row
.xl\:gap-8

❌ Incorreto:
.text-lg-sm
.grid-cols-2-md
```

---

## Props e Variáveis JavaScript

### Props de Componentes

**Convenção**: camelCase

```jsx
✅ Correto:
<Button 
  variant="primary"
  size="lg"
  fullWidth
  onClick={handleClick}
  isLoading={loading}
  className="custom-class"
/>

<FeatureCard
  icon={<Icon />}
  title="Título"
  description="Descrição"
  iconBg="peach"
/>

❌ Incorreto:
<Button 
  Variant="primary"
  button-size="lg"
  full_width
  on-click={handleClick}
/>
```

### Variáveis de Estado

**Convenção**: camelCase, descritivo

```jsx
✅ Correto:
const [isLoading, setIsLoading] = useState(false);
const [userData, setUserData] = useState(null);
const [selectedJob, setSelectedJob] = useState(null);
const [showModal, setShowModal] = useState(false);

❌ Incorreto:
const [loading, setLoading] = useState(false);  // pouco descritivo
const [data, setData] = useState(null);         // muito genérico
const [job, setJob] = useState(null);           // ambíguo
const [modal, setModal] = useState(false);      // não indica boolean
```

### Variáveis Booleanas

**Convenção**: Prefixo com `is`, `has`, `should`, `can`

```jsx
✅ Correto:
const isActive = true;
const hasError = false;
const shouldRender = true;
const canEdit = false;
const isLoading = true;
const hasPermission = false;

❌ Incorreto:
const active = true;
const error = false;
const render = true;
const edit = false;
```

### Arrays e Objetos

**Convenção**: Plural para arrays, singular para objetos

```jsx
✅ Correto:
const jobs = [];
const companies = [];
const users = [];
const selectedJob = {};
const currentUser = {};

❌ Incorreto:
const job = [];           // deveria ser plural
const company = [];       // deveria ser plural
const selectedJobs = {};  // deveria ser singular
```

---

## Funções e Métodos

### Funções de Componente

**Convenção**: PascalCase (mesmo que componentes)

```jsx
✅ Correto:
function Button() { }
function FeatureCard() { }
const JobCard = () => { };

❌ Incorreto:
function button() { }
const feature_card = () => { };
```

### Handlers de Eventos

**Convenção**: `handle[Evento]` ou `on[Evento]`

```jsx
✅ Correto:
const handleClick = () => { };
const handleSubmit = () => { };
const handleChange = () => { };
const onClose = () => { };
const onSuccess = () => { };

<Button onClick={handleClick} />
<Form onSubmit={handleSubmit} />
<Modal onClose={onClose} />

❌ Incorreto:
const click = () => { };
const submit = () => { };
const clickHandler = () => { };
```

### Funções Utilitárias

**Convenção**: camelCase, verbo + substantivo

```jsx
✅ Correto:
function formatDate(date) { }
function validateEmail(email) { }
function calculateTotal(items) { }
function fetchUserData(id) { }
function transformData(data) { }

❌ Incorreto:
function date(date) { }
function email(email) { }
function total(items) { }
function user(id) { }
```

### Funções que Retornam Boolean

**Convenção**: Prefixo com `is`, `has`, `should`, `can`

```jsx
✅ Correto:
function isValidEmail(email) { }
function hasPermission(user) { }
function shouldRender(condition) { }
function canEdit(user, resource) { }

❌ Incorreto:
function validEmail(email) { }
function permission(user) { }
function render(condition) { }
```

---

## Constantes

### Constantes Globais

**Convenção**: SCREAMING_SNAKE_CASE

```jsx
✅ Correto:
const API_BASE_URL = 'https://api.example.com';
const MAX_ITEMS_PER_PAGE = 20;
const DEFAULT_TIMEOUT = 5000;
const SUPPORTED_FILE_TYPES = ['jpg', 'png', 'pdf'];

❌ Incorreto:
const apiBaseUrl = 'https://api.example.com';
const maxItemsPerPage = 20;
const default_timeout = 5000;
```

### Enums e Configurações

**Convenção**: SCREAMING_SNAKE_CASE para chaves, camelCase para objetos

```jsx
✅ Correto:
const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  CTA: 'cta',
  GHOST: 'ghost',
};

const BADGE_COLORS = {
  YELLOW: 'yellow',
  MINT: 'mint',
  LAVENDER: 'lavender',
  PEACH: 'peach',
};

❌ Incorreto:
const buttonVariants = {
  primary: 'primary',
  secondary: 'secondary',
};

const BADGE_COLORS = {
  yellow: 'yellow',
  mint: 'mint',
};
```

---

## Hooks Customizados

### Nomenclatura de Hooks

**Convenção**: `use[Nome]` em camelCase

```jsx
✅ Correto:
useVagas()
useAuth()
useLocalStorage()
useDebounce()
useWindowSize()
useFetchData()

❌ Incorreto:
getVagas()
auth()
localStorage()
Debounce()
use_window_size()
```

### Estrutura de Arquivo

```jsx
// hooks/useVagas.js
export function useVagas() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // ... lógica
  
  return { vagas, isLoading, error };
}
```

### Retorno de Hooks

**Convenção**: Objeto com propriedades descritivas

```jsx
✅ Correto:
return { 
  data, 
  isLoading, 
  error, 
  refetch 
};

return { 
  user, 
  isAuthenticated, 
  login, 
  logout 
};

❌ Incorreto:
return [data, loading, error];  // array não descritivo
return data;                     // retorno único não flexível
```

---

## Tipos e Interfaces

### TypeScript/JSDoc

**Convenção**: PascalCase para tipos e interfaces

```typescript
✅ Correto:
interface ButtonProps {
  variant: string;
  size: string;
  onClick: () => void;
}

type BadgeVariant = 'yellow' | 'mint' | 'lavender' | 'peach';

interface JobCardData {
  id: string;
  title: string;
  company: string;
  location: string;
}

❌ Incorreto:
interface buttonProps { }
type badge_variant = string;
interface jobCardData { }
```

### Props Types

**Convenção**: `[ComponentName]Props`

```typescript
✅ Correto:
interface ButtonProps { }
interface FeatureCardProps { }
interface JobCardProps { }

❌ Incorreto:
interface IButton { }
interface FeatureCardProperties { }
interface JobCardType { }
```

---

## Resumo Rápido

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| **Componentes** | PascalCase | `Button`, `FeatureCard` |
| **Arquivos** | kebab-case | `button.jsx`, `feature-card.css` |
| **Variáveis CSS** | kebab-case | `--color-coral-primary` |
| **Classes CSS** | BEM kebab-case | `.feature-card__icon` |
| **Props** | camelCase | `variant`, `iconBg` |
| **Funções** | camelCase | `handleClick`, `formatDate` |
| **Constantes** | SCREAMING_SNAKE_CASE | `API_BASE_URL` |
| **Hooks** | use + camelCase | `useVagas`, `useAuth` |
| **Types** | PascalCase | `ButtonProps`, `BadgeVariant` |

---

## Checklist de Nomenclatura

Antes de criar um novo componente ou arquivo, verifique:

- [ ] Nome do componente está em PascalCase?
- [ ] Nome do arquivo está em kebab-case?
- [ ] Props estão em camelCase?
- [ ] Variáveis CSS seguem o padrão `--[categoria]-[variação]`?
- [ ] Classes CSS seguem BEM?
- [ ] Funções handler começam com `handle` ou `on`?
- [ ] Variáveis booleanas têm prefixo `is`, `has`, `should`, `can`?
- [ ] Constantes estão em SCREAMING_SNAKE_CASE?
- [ ] Hooks customizados começam com `use`?
- [ ] Nomes são descritivos e não ambíguos?

---

## Exemplos Completos

### Componente Completo

```jsx
// feature-card.jsx
import React from 'react';
import './feature-card.css';

const ICON_BACKGROUNDS = {
  YELLOW: 'yellow',
  MINT: 'mint',
  LAVENDER: 'lavender',
  PEACH: 'peach',
};

function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconBg = ICON_BACKGROUNDS.PEACH,
  onClick,
  className = '',
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  const isClickable = !!onClick;
  
  return (
    <div 
      className={`feature-card ${isClickable ? 'feature-card--clickable' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className={`feature-card__icon feature-card__icon--${iconBg}`}>
        {icon}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}

export default FeatureCard;
```

### CSS Completo

```css
/* feature-card.css */
.feature-card {
  background: var(--color-bg-white);
  border: 1px solid var(--border-coral);
  border-radius: var(--radius-2xl);
  padding: var(--space-4);
  transition: all var(--duration-normal) var(--ease-in-out);
}

.feature-card--clickable {
  cursor: pointer;
}

.feature-card--clickable:hover {
  transform: translateY(-4px);
  border-color: var(--border-coral-strong);
  box-shadow: var(--shadow-lg);
}

.feature-card__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-3);
}

.feature-card__icon--yellow {
  background: var(--color-pastel-yellow);
  color: var(--color-coral-primary);
}

.feature-card__icon--mint {
  background: var(--color-pastel-mint);
  color: var(--color-success);
}

.feature-card__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.feature-card__description {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}
```

---

## Recursos Adicionais

- **Guia de Estilo**: `src/docs/STYLE_GUIDE.md`
- **Documentação de Componentes**: `src/docs/COMPONENT_DOCUMENTATION.md`
- **Design Document**: `.kiro/specs/design-profissional-estudantes/design.md`

---

**Versão**: 1.0.0  
**Última Atualização**: Janeiro 2025  
**Autor**: Equipe EstágioAI
