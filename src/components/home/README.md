# Estrutura dos Componentes da Home

Esta pasta contém todos os componentes relacionados à página inicial, organizados em subpastas por funcionalidade:

## 📁 Estrutura de Pastas

### `sections/`
Componentes que representam seções principais da página:
- `HeroSection.jsx` - Seção inicial com chamada principal
- `ProblemsSection.jsx` - Seção que apresenta os problemas
- `SolutionSection.jsx` - Seção que apresenta as soluções
- `FeedbackSection.jsx` - Seção de feedback/avaliações
- `TalentBankSection.jsx` - Seção do banco de talentos automático
- `TestimonialsSection.jsx` - Seção de depoimentos
- `CTASection.jsx` - Seção de call-to-action final
- `HowItWorksSection.jsx` - Seção explicando como funciona

### `features/`
Componentes que destacam funcionalidades e recursos:
- `CategoriesSection.jsx` - Seção de categorias de vagas
- `FeaturesSection.jsx` - Seção de principais funcionalidades
- `FormatoUnificadoSection.jsx` - Seção sobre formato unificado

### `forms/`
Componentes relacionados a formulários e captura de dados:
- `EmailCaptureSection.jsx` - Seção para captura de email

## 🔧 Como usar

Todos os imports foram atualizados para refletir a nova estrutura:

```jsx
// Seções principais
import HeroSection from '@/components/home/sections/HeroSection'
import ProblemsSection from '@/components/home/sections/ProblemsSection'

// Funcionalidades
import FeaturesSection from '@/components/home/features/FeaturesSection'
import CategoriesSection from '@/components/home/features/CategoriesSection'

// Formulários
import EmailCaptureSection from '@/components/home/forms/EmailCaptureSection'
```

## 📋 Benefícios desta organização

1. **Facilita a localização** - Cada tipo de componente tem sua pasta específica
2. **Melhora a manutenção** - Desenvolvedores sabem onde encontrar cada tipo de componente
3. **Escalabilidade** - Novos componentes podem ser adicionados nas categorias certas
4. **Clareza** - A estrutura reflete a funcionalidade de cada componente

## 🏗️ Adicionando novos componentes

- **Seções da página**: Adicione em `sections/`
- **Funcionalidades/recursos**: Adicione em `features/`
- **Formulários**: Adicione em `forms/`
- **Componentes genéricos da home**: Considere criar uma nova categoria se necessário