# EstágioAI Design System - Documentação Completa

Bem-vindo à documentação completa do Design System do EstágioAI! Este sistema foi criado para garantir consistência visual, acessibilidade e uma experiência profissional focada em estudantes universitários.

## 📚 Documentação Disponível

### 1. [Guia de Estilo Visual](./STYLE_GUIDE.md)
**O que você encontrará:**
- Paleta de cores completa com códigos hex e RGB
- Sistema tipográfico e hierarquia de títulos
- Espaçamento e sistema de grid
- Sombras, bordas e gradientes
- Padrões de animação e transição
- Diretrizes de responsividade
- Requisitos de acessibilidade

**Quando usar:** Ao criar novos designs, escolher cores, definir espaçamentos ou implementar animações.

### 2. [Documentação de Componentes](./COMPONENT_DOCUMENTATION.md)
**O que você encontrará:**
- Exemplos práticos de uso de todos os componentes
- Props disponíveis e suas variações
- Código de exemplo para cada componente
- Padrões de combinação de componentes
- Estados de loading, error e empty
- Diretrizes de acessibilidade por componente

**Quando usar:** Ao implementar componentes em páginas, criar novas features ou entender como usar componentes existentes.

### 3. [Convenções de Nomenclatura](./NAMING_CONVENTIONS.md)
**O que você encontrará:**
- Padrões de nomenclatura para componentes, arquivos e variáveis
- Convenções BEM para classes CSS
- Estrutura de diretórios
- Nomenclatura de hooks, funções e constantes
- Exemplos completos de código

**Quando usar:** Ao criar novos componentes, arquivos, variáveis CSS ou funções JavaScript.

### 4. [App.css - Variáveis do Sistema](../App.css)
**O que você encontrará:**
- Todas as variáveis CSS documentadas
- Comentários explicando uso de cada variável
- Sistema de cores, tipografia e espaçamento
- Animações e transições
- Estilos de acessibilidade

**Quando usar:** Ao precisar de valores específicos de cores, espaçamentos ou outras variáveis do design system.

---

## 🚀 Início Rápido

### Para Designers

1. **Leia o [Guia de Estilo Visual](./STYLE_GUIDE.md)** para entender a paleta de cores, tipografia e espaçamento
2. Use as variáveis CSS definidas em `App.css` para manter consistência
3. Consulte os padrões de design e hierarquia visual

### Para Desenvolvedores

1. **Leia a [Documentação de Componentes](./COMPONENT_DOCUMENTATION.md)** para ver exemplos de uso
2. Consulte as [Convenções de Nomenclatura](./NAMING_CONVENTIONS.md) ao criar novos arquivos
3. Use as variáveis CSS do `App.css` em vez de valores hardcoded
4. Siga os padrões de acessibilidade documentados

### Para Novos Membros da Equipe

1. Comece pelo [Guia de Estilo Visual](./STYLE_GUIDE.md) para entender a identidade visual
2. Explore a [Documentação de Componentes](./COMPONENT_DOCUMENTATION.md) para ver o que está disponível
3. Leia as [Convenções de Nomenclatura](./NAMING_CONVENTIONS.md) para seguir os padrões do projeto
4. Consulte o `App.css` para ver todas as variáveis disponíveis

---

## 🎨 Componentes Disponíveis

### Componentes de UI Base
- **Button** - Botões com variantes primary, secondary, cta, ghost
- **Badge** - Tags e badges com cores pastel
- **Card** - Card base com bordas coral suaves
- **Input** - Campos de entrada de formulário

### Componentes Especializados
- **FeatureCard** - Cards para exibir features com ícone
- **JobCard** - Cards para vagas de emprego/estágio
- **Loading** - Estado de carregamento com skeleton
- **ErrorState** - Estado de erro com retry
- **EmptyState** - Estado vazio com ação
- **SuccessState** - Estado de sucesso

### Componentes de Layout
- **Navigation** - Barra de navegação global
- **Footer** - Rodapé do site
- **HeroSection** - Seção hero de páginas
- **StatsSection** - Seção de estatísticas

---

## 🎯 Princípios do Design System

### 1. Consistência Visual
Todos os componentes seguem a mesma linguagem de design, usando a paleta coral/terracota e mantendo padrões visuais consistentes.

### 2. Foco no Estudante
Elementos visuais que representam juventude, dinamismo e educação, sem perder o profissionalismo.

### 3. Acessibilidade
- Contraste mínimo WCAG AA (4.5:1)
- Touch targets de 44x44px
- Focus visible coral para navegação por teclado
- Suporte a prefers-reduced-motion
- ARIA labels apropriados

### 4. Responsividade
Abordagem mobile-first com breakpoints bem definidos e componentes que se adaptam fluidamente.

### 5. Performance
Animações otimizadas, uso eficiente de CSS, e componentes leves.

---

## 🎨 Paleta de Cores Rápida

### Cores Principais
```css
Coral Primary:   #d97757
Coral Light:     #e89b7d
Gray Dark:       #3d3d3a
Gray Medium:     #6b6b68
BG Primary:      #faf9f5
Success:         #01E297
```

### Uso Comum
- **Botões primários**: Coral Primary (#d97757)
- **Links**: Coral Primary (#d97757)
- **Títulos**: Gray Dark (#3d3d3a)
- **Corpo de texto**: Gray Medium (#6b6b68)
- **Backgrounds**: BG Primary (#faf9f5) ou White (#ffffff)
- **CTAs especiais**: Gradiente roxo (--gradient-purple-vibrant)

---

## 📐 Espaçamento Rápido

Sistema baseado em múltiplos de 8px:

```css
space-1:  8px   - Padding interno pequeno
space-2:  16px  - Gap entre elementos próximos
space-3:  24px  - Gap entre componentes
space-4:  32px  - Espaçamento entre seções pequenas
space-6:  48px  - Espaçamento entre seções
space-10: 80px  - Padding vertical de seções
```

---

## 🔤 Tipografia Rápida

```css
text-sm:   14px - Texto secundário
text-base: 16px - Corpo padrão
text-xl:   20px - Subtítulos
text-2xl:  24px - H3
text-3xl:  30px - H2
text-5xl:  48px - H1
```

**Pesos:**
- 400 (normal) - Corpo
- 600 (semibold) - Subtítulos
- 700 (bold) - H2
- 800 (extrabold) - H1

---

## ✅ Checklist de Implementação

Ao criar um novo componente ou página:

- [ ] Usei variáveis CSS do `App.css` em vez de valores hardcoded?
- [ ] Segui as convenções de nomenclatura (PascalCase para componentes, kebab-case para arquivos)?
- [ ] Apliquei a paleta de cores correta?
- [ ] Usei o sistema de espaçamento (múltiplos de 8px)?
- [ ] Implementei estados de focus visíveis?
- [ ] Garanti touch targets de 44x44px mínimo?
- [ ] Testei responsividade em mobile, tablet e desktop?
- [ ] Adicionei ARIA labels apropriados?
- [ ] Respeitei a hierarquia tipográfica?
- [ ] Usei componentes existentes quando possível?

---

## 🔧 Ferramentas e Recursos

### Ferramentas de Design
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Palette**: https://coolors.co/
- **Typography Scale**: https://typescale.com/

### Recursos Internos
- **Design Document**: `.kiro/specs/design-profissional-estudantes/design.md`
- **Requirements**: `.kiro/specs/design-profissional-estudantes/requirements.md`
- **Tasks**: `.kiro/specs/design-profissional-estudantes/tasks.md`

### Componentes
- **Diretório**: `src/components/ui/`
- **Index**: `src/components/ui/index.js`

---

## 📝 Exemplos de Código

### Usando Variáveis CSS

```css
/* ✅ Correto */
.my-component {
  color: var(--color-coral-primary);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
}

/* ❌ Incorreto */
.my-component {
  color: #d97757;
  padding: 32px;
  border-radius: 16px;
  font-size: 16px;
}
```

### Usando Componentes

```jsx
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FeatureCard from '@/components/ui/feature-card';

function MyPage() {
  return (
    <div>
      <Button variant="cta" size="lg">
        Começar Agora
      </Button>
      
      <Badge variant="mint">Novo</Badge>
      
      <FeatureCard
        icon={<Icon />}
        title="Feature"
        description="Descrição"
        iconBg="peach"
      />
    </div>
  );
}
```

---

## 🤝 Contribuindo

Ao adicionar novos componentes ou padrões ao design system:

1. Documente o componente em `COMPONENT_DOCUMENTATION.md`
2. Adicione variáveis CSS necessárias em `App.css` com comentários
3. Siga as convenções de nomenclatura de `NAMING_CONVENTIONS.md`
4. Garanta que o componente seja acessível (WCAG AA)
5. Teste em múltiplos dispositivos e navegadores
6. Adicione exemplos de uso

---

## 📞 Suporte

Para dúvidas sobre o design system:

1. Consulte a documentação relevante acima
2. Verifique os componentes existentes em `src/components/ui/`
3. Revise o `App.css` para variáveis disponíveis
4. Entre em contato com a equipe de design

---

## 🔄 Versionamento

**Versão Atual**: 1.0.0  
**Última Atualização**: Janeiro 2025

### Changelog

**v1.0.0** (Janeiro 2025)
- ✨ Sistema de design completo implementado
- 📝 Documentação completa criada
- 🎨 Paleta coral/terracota expandida
- ♿ Melhorias de acessibilidade implementadas
- 📱 Sistema responsivo completo
- 🧩 Componentes base criados

---

**Desenvolvido com ❤️ pela equipe EstágioAI**
