# Documentação de Componentes - EstágioAI Design System

Este documento fornece exemplos práticos de uso dos componentes do design system do EstágioAI.

## Índice

- [Button](#button)
- [Badge](#badge)
- [Card](#card)
- [FeatureCard](#featurecard)
- [JobCard](#jobcard)
- [Loading](#loading)
- [ErrorState](#errorstate)
- [EmptyState](#emptystate)
- [SuccessState](#successstate)

---

## Button

Componente de botão com múltiplas variantes e tamanhos.

### Importação

```jsx
import { Button } from '@/components/ui/button';
```

### Variantes

#### Primary (Padrão)
Botão coral sólido para ações principais.

```jsx
<Button variant="primary">
  Encontrar Vagas
</Button>
```

#### Secondary
Botão com outline coral para ações secundárias.

```jsx
<Button variant="secondary">
  Saiba Mais
</Button>
```

#### CTA
Botão com gradiente roxo vibrante para CTAs principais.

```jsx
<Button variant="cta">
  Cadastre-se Grátis
</Button>
```

#### Ghost
Botão transparente para ações terciárias.

```jsx
<Button variant="ghost">
  Cancelar
</Button>
```

#### Link
Estilo de link com underline.

```jsx
<Button variant="link">
  Ver todos
</Button>
```

### Tamanhos

```jsx
{/* Pequeno - 40px altura */}
<Button size="sm">Pequeno</Button>

{/* Médio (padrão) - 48px altura */}
<Button size="md">Médio</Button>

{/* Grande - 56px altura */}
<Button size="lg">Grande</Button>

{/* Ícone apenas */}
<Button size="icon">
  <SearchIcon />
</Button>
```

### Largura Total

```jsx
<Button fullWidth>
  Botão de Largura Total
</Button>
```

### Com Ícones

```jsx
import { Search, ArrowRight } from 'lucide-react';

{/* Ícone à esquerda */}
<Button>
  <Search />
  Buscar Vagas
</Button>

{/* Ícone à direita */}
<Button>
  Começar Agora
  <ArrowRight />
</Button>
```

### Estados

```jsx
{/* Desabilitado */}
<Button disabled>
  Botão Desabilitado
</Button>

{/* Loading */}
<Button disabled>
  <Loader2 className="animate-spin" />
  Carregando...
</Button>
```

### Exemplos Práticos

```jsx
// Hero Section CTA
<div className="flex flex-col sm:flex-row gap-4">
  <Button variant="cta" size="lg">
    <Sparkles />
    Encontre seu Estágio
  </Button>
  <Button variant="secondary" size="lg">
    Como Funciona
  </Button>
</div>

// Formulário de Login
<Button variant="primary" fullWidth type="submit">
  Entrar
</Button>

// Card de Vaga
<Button variant="secondary" size="sm">
  Ver Detalhes
  <ArrowRight />
</Button>
```

---

## Badge

Componente de badge/tag com cores pastel para categorização.

### Importação

```jsx
import { Badge } from '@/components/ui/badge';
```

### Variantes

```jsx
{/* Yellow - Destaques, novidades */}
<Badge variant="yellow">Novo</Badge>

{/* Mint - Sucesso, aprovado */}
<Badge variant="mint">Ativo</Badge>

{/* Lavender - Informação, categorias */}
<Badge variant="lavender">Remoto</Badge>

{/* Peach - Atenção, em andamento */}
<Badge variant="peach">Destaque</Badge>
```

### Tamanhos

```jsx
{/* Pequeno - 32px altura mínima */}
<Badge size="sm">Pequeno</Badge>

{/* Médio (padrão) - 36px altura mínima */}
<Badge size="md">Médio</Badge>
```

### Interativo

```jsx
{/* Badge clicável */}
<Badge 
  variant="mint" 
  interactive 
  onClick={() => console.log('Clicked')}
>
  Filtro Ativo
</Badge>
```

### Exemplos Práticos

```jsx
// Filtros de Vagas
<div className="flex flex-wrap gap-2">
  <Badge variant="lavender" interactive onClick={handleFilter}>
    Remoto
  </Badge>
  <Badge variant="mint" interactive onClick={handleFilter}>
    Híbrido
  </Badge>
  <Badge variant="peach" interactive onClick={handleFilter}>
    Presencial
  </Badge>
</div>

// Status de Vaga
<Badge variant="yellow">Novo</Badge>
<Badge variant="mint">Vagas Abertas</Badge>

// Categorias de Blog
<Badge variant="lavender" size="sm">Carreira</Badge>
<Badge variant="peach" size="sm">Dicas</Badge>
```

---

## Card

Componente base de card com bordas coral suaves.

### Importação

```jsx
import Card from '@/components/ui/card';
```

### Uso Básico

```jsx
<Card>
  <h3>Título do Card</h3>
  <p>Conteúdo do card...</p>
</Card>
```

### Props

```jsx
{/* Com hover effect (padrão) */}
<Card hoverable>
  Conteúdo
</Card>

{/* Sem hover effect */}
<Card hoverable={false}>
  Conteúdo
</Card>

{/* Clicável */}
<Card onClick={() => navigate('/detalhes')}>
  Conteúdo clicável
</Card>

{/* Classes customizadas */}
<Card className="p-8 bg-gradient-to-br from-coral-lightest to-white">
  Conteúdo customizado
</Card>
```

### Exemplos Práticos

```jsx
// Card de Estatística
<Card className="text-center p-6">
  <div className="text-4xl font-extrabold text-coral-primary mb-2">
    1.500+
  </div>
  <p className="text-gray-medium">Vagas Disponíveis</p>
</Card>

// Card de Depoimento
<Card className="p-6">
  <div className="flex items-center gap-4 mb-4">
    <img 
      src="/avatar.jpg" 
      alt="João Silva" 
      className="w-12 h-12 rounded-full"
    />
    <div>
      <h4 className="font-semibold">João Silva</h4>
      <p className="text-sm text-gray-medium">Estudante de Engenharia</p>
    </div>
  </div>
  <p className="text-gray-medium">
    "Consegui meu primeiro estágio através do EstágioAI..."
  </p>
</Card>
```

---

## FeatureCard

Card especializado para exibir features com ícone, título e descrição.

### Importação

```jsx
import FeatureCard from '@/components/ui/feature-card';
```

### Uso Básico

```jsx
import { Briefcase } from 'lucide-react';

<FeatureCard
  icon={<Briefcase />}
  title="Vagas Exclusivas"
  description="Acesso a oportunidades de estágio em empresas parceiras"
  iconBg="peach"
/>
```

### Cores de Background do Ícone

```jsx
{/* Yellow pastel */}
<FeatureCard iconBg="yellow" icon={<Star />} title="..." description="..." />

{/* Mint pastel */}
<FeatureCard iconBg="mint" icon={<Check />} title="..." description="..." />

{/* Lavender pastel */}
<FeatureCard iconBg="lavender" icon={<Info />} title="..." description="..." />

{/* Peach pastel (padrão) */}
<FeatureCard iconBg="peach" icon={<Heart />} title="..." description="..." />
```

### Exemplo Prático

```jsx
import { Briefcase, Users, TrendingUp, Award } from 'lucide-react';

// Seção de Features
<section className="py-20 bg-bg-primary">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-center mb-12">
      Por que escolher o EstágioAI?
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <FeatureCard
        icon={<Briefcase />}
        iconBg="peach"
        title="Vagas Exclusivas"
        description="Acesso a oportunidades em empresas parceiras"
      />
      
      <FeatureCard
        icon={<Users />}
        iconBg="mint"
        title="Networking"
        description="Conecte-se com profissionais e empresas"
      />
      
      <FeatureCard
        icon={<TrendingUp />}
        iconBg="lavender"
        title="Crescimento"
        description="Desenvolva sua carreira desde o início"
      />
      
      <FeatureCard
        icon={<Award />}
        iconBg="yellow"
        title="Certificações"
        description="Cursos e certificados para se destacar"
      />
    </div>
  </div>
</section>
```

---

## JobCard

Card especializado para exibir vagas de emprego/estágio.

### Importação

```jsx
import JobCard from '@/components/ui/job-card';
```

### Uso Básico

```jsx
<JobCard
  logo="/logos/empresa.png"
  company="Tech Company"
  title="Estágio em Desenvolvimento"
  location="São Paulo, SP"
  type="Estágio"
  level="Júnior"
  badge="Novo"
  badgeColor="mint"
  onClick={() => navigate('/vaga/123')}
/>
```

### Props Completas

```jsx
<JobCard
  logo="/logos/empresa.png"        // URL do logo (opcional)
  company="Nome da Empresa"         // Nome da empresa (obrigatório)
  title="Título da Vaga"            // Título da vaga (obrigatório)
  location="São Paulo, SP"          // Localização (opcional)
  type="Estágio"                    // Tipo de vaga (opcional)
  level="Júnior"                    // Nível (opcional)
  badge="Novo"                      // Badge opcional
  badgeColor="mint"                 // Cor do badge (yellow, mint, lavender, peach)
  onClick={handleClick}             // Handler de click
  className="custom-class"          // Classes adicionais
/>
```

### Sem Logo

```jsx
{/* Quando não há logo, exibe inicial da empresa */}
<JobCard
  company="Startup Inovadora"
  title="Estágio em Marketing"
  location="Remoto"
  type="Estágio"
/>
```

### Exemplo Prático

```jsx
// Grid de Vagas
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <JobCard
    logo="/logos/google.png"
    company="Google"
    title="Estágio em Engenharia de Software"
    location="São Paulo, SP"
    type="Estágio"
    level="Júnior"
    badge="Destaque"
    badgeColor="yellow"
    onClick={() => navigate('/vaga/1')}
  />
  
  <JobCard
    logo="/logos/microsoft.png"
    company="Microsoft"
    title="Estágio em Cloud Computing"
    location="Remoto"
    type="Estágio"
    level="Júnior"
    badge="Novo"
    badgeColor="mint"
    onClick={() => navigate('/vaga/2')}
  />
  
  <JobCard
    company="Startup Tech"
    title="Desenvolvedor Frontend Júnior"
    location="Belo Horizonte, MG"
    type="CLT"
    level="Júnior"
    onClick={() => navigate('/vaga/3')}
  />
</div>
```

---

## Loading

Componente de loading com skeleton coral.

### Importação

```jsx
import Loading from '@/components/ui/loading';
```

### Uso Básico

```jsx
{isLoading ? (
  <Loading />
) : (
  <Content />
)}
```

### Exemplo Prático

```jsx
// Loading de Lista de Vagas
function VagasList() {
  const { data, isLoading } = useVagas();
  
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map(vaga => (
        <JobCard key={vaga.id} {...vaga} />
      ))}
    </div>
  );
}
```

---

## ErrorState

Componente para exibir estados de erro.

### Importação

```jsx
import ErrorState from '@/components/ui/error-state';
```

### Uso Básico

```jsx
<ErrorState
  title="Erro ao carregar vagas"
  message="Não foi possível carregar as vagas. Tente novamente."
  onRetry={() => refetch()}
/>
```

### Exemplo Prático

```jsx
function VagasList() {
  const { data, isLoading, error, refetch } = useVagas();
  
  if (error) {
    return (
      <ErrorState
        title="Ops! Algo deu errado"
        message="Não conseguimos carregar as vagas no momento. Por favor, tente novamente."
        onRetry={refetch}
      />
    );
  }
  
  // ... resto do componente
}
```

---

## EmptyState

Componente para exibir estados vazios.

### Importação

```jsx
import EmptyState from '@/components/ui/empty-state';
```

### Uso Básico

```jsx
<EmptyState
  title="Nenhuma vaga encontrada"
  message="Não encontramos vagas com os filtros selecionados. Tente ajustar sua busca."
  actionLabel="Limpar Filtros"
  onAction={() => clearFilters()}
/>
```

### Exemplo Prático

```jsx
function VagasList() {
  const { data, isLoading } = useVagas();
  
  if (!isLoading && data.length === 0) {
    return (
      <EmptyState
        title="Nenhuma vaga disponível"
        message="No momento não há vagas que correspondam aos seus critérios. Volte mais tarde ou ajuste seus filtros."
        actionLabel="Ver Todas as Vagas"
        onAction={() => navigate('/vagas')}
      />
    );
  }
  
  // ... resto do componente
}
```

---

## SuccessState

Componente para exibir estados de sucesso.

### Importação

```jsx
import SuccessState from '@/components/ui/success-state';
```

### Uso Básico

```jsx
<SuccessState
  title="Candidatura enviada!"
  message="Sua candidatura foi enviada com sucesso. A empresa entrará em contato em breve."
  actionLabel="Ver Minhas Candidaturas"
  onAction={() => navigate('/candidaturas')}
/>
```

### Exemplo Prático

```jsx
function CandidaturaForm() {
  const [submitted, setSubmitted] = useState(false);
  
  if (submitted) {
    return (
      <SuccessState
        title="Candidatura Enviada!"
        message="Sua candidatura foi enviada com sucesso. Boa sorte!"
        actionLabel="Voltar para Vagas"
        onAction={() => navigate('/vagas')}
      />
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* ... formulário */}
    </form>
  );
}
```

---

## Padrões de Uso Comuns

### Combinando Componentes

```jsx
// Card com Badge e Button
<Card className="p-6">
  <div className="flex items-start justify-between mb-4">
    <h3 className="text-xl font-bold">Título</h3>
    <Badge variant="mint">Novo</Badge>
  </div>
  
  <p className="text-gray-medium mb-6">
    Descrição do conteúdo...
  </p>
  
  <Button variant="secondary" fullWidth>
    Ver Mais
  </Button>
</Card>
```

### Grid Responsivo de Cards

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {items.map(item => (
    <Card key={item.id}>
      {/* conteúdo */}
    </Card>
  ))}
</div>
```

### Estados de Loading/Error/Empty

```jsx
function DataList() {
  const { data, isLoading, error } = useData();
  
  if (isLoading) return <Loading />;
  if (error) return <ErrorState onRetry={refetch} />;
  if (!data.length) return <EmptyState />;
  
  return (
    <div className="grid gap-6">
      {data.map(item => (
        <Card key={item.id}>{/* ... */}</Card>
      ))}
    </div>
  );
}
```

---

## Acessibilidade

Todos os componentes seguem as melhores práticas de acessibilidade:

- **Focus Visible**: Outline coral visível para navegação por teclado
- **Touch Targets**: Mínimo de 44x44px para elementos interativos
- **ARIA Labels**: Labels apropriados para leitores de tela
- **Semantic HTML**: Uso de elementos semânticos corretos
- **Contraste**: Ratio mínimo de 4.5:1 (WCAG AA)

### Exemplo de Uso Acessível

```jsx
<Button 
  aria-label="Buscar vagas de estágio"
  onClick={handleSearch}
>
  <Search aria-hidden="true" />
  Buscar
</Button>

<Badge 
  role="status" 
  aria-label="Status: Novo"
>
  Novo
</Badge>
```

---

## Responsividade

Todos os componentes são responsivos por padrão. Use as classes utilitárias do Tailwind para ajustes:

```jsx
{/* Botões responsivos */}
<div className="flex flex-col sm:flex-row gap-4">
  <Button className="w-full sm:w-auto">Ação 1</Button>
  <Button className="w-full sm:w-auto">Ação 2</Button>
</div>

{/* Grid responsivo */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* cards */}
</div>

{/* Tamanhos responsivos */}
<Button className="text-sm md:text-base lg:text-lg">
  Texto Responsivo
</Button>
```

---

## Convenções de Nomenclatura

- **Componentes**: PascalCase (Button, FeatureCard)
- **Props**: camelCase (iconBg, badgeColor, fullWidth)
- **Variantes**: lowercase (primary, secondary, mint, yellow)
- **Classes CSS**: kebab-case (feature-card__icon, job-card__meta)
- **Arquivos**: kebab-case (feature-card.jsx, job-card.css)

---

## Suporte

Para dúvidas ou sugestões sobre os componentes, consulte:
- Design Document: `.kiro/specs/design-profissional-estudantes/design.md`
- Requirements: `.kiro/specs/design-profissional-estudantes/requirements.md`
- Style Guide: `src/docs/STYLE_GUIDE.md`
