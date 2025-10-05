# Implementação de ARIA Labels e Semântica - EstágioAI

## Visão Geral

Este documento detalha a implementação completa de ARIA labels em português e estrutura semântica para garantir acessibilidade WCAG AA em todo o site EstágioAI.

## Landmarks Semânticos Implementados

### 1. Navegação Principal (Navigation.jsx)

#### Estrutura Semântica
```jsx
<nav role="navigation" aria-label="Navegação principal">
  {/* Barra de utilitários */}
  <div role="banner" aria-label="Barra de utilitários">
    <nav role="navigation" aria-label="Links de acesso rápido">
      {/* Links para empresas e universitários */}
    </nav>
  </div>
  
  {/* Menu principal */}
  <nav role="navigation" aria-label="Menu principal">
    {/* Links de navegação */}
  </nav>
  
  {/* Ações de autenticação */}
  <div role="group" aria-label="Ações de autenticação">
    {/* Botões de login e registro */}
  </div>
</nav>
```

#### ARIA Labels em Português
- **Skip Link**: "Pular para o conteúdo principal"
- **Logo**: "EstágioAI - Página inicial"
- **Links de navegação**: Cada link tem aria-label descritivo
  - "Ir para página inicial"
  - "Saiba como funciona nossa plataforma"
  - "Ver planos e preços"
  - "Ler histórias de clientes"
  - "Acessar recursos e ferramentas"
- **Botões de autenticação**:
  - "Fazer login na sua conta"
  - "Criar uma nova conta"
- **Menu mobile**: "Menu de navegação móvel"
- **Botão hamburger**: "Abrir menu" / "Fechar menu"

### 2. Rodapé (Footer.jsx)

#### Estrutura Semântica
```jsx
<footer role="contentinfo" aria-label="Rodapé do site">
  <aside role="complementary" aria-label="Estatísticas de impacto">
    {/* Métricas de impacto */}
  </aside>
  
  <nav role="navigation" aria-label="Links de navegação">
    {/* Links principais */}
  </nav>
  
  <nav role="navigation" aria-label="Links para usuários">
    {/* Links específicos para usuários */}
  </nav>
  
  <nav role="navigation" aria-label="Documentos legais">
    {/* Links legais */}
  </nav>
  
  <nav role="navigation" aria-label="Redes sociais">
    {/* Links de redes sociais */}
  </nav>
</footer>
```

#### ARIA Labels em Português
- **Redes sociais**:
  - "Enviar e-mail para EstágioAI"
  - "Seguir EstágioAI no LinkedIn"
  - "Ver repositórios da EstágioAI no GitHub"
- **Links de navegação**: Cada link tem aria-label específico
  - "Ir para página inicial"
  - "Ir para seção sobre nós"
  - "Ver vagas disponíveis"
  - "Ler artigos do blog"
  - "Entrar em contato"

### 3. Componentes de UI

#### Button Component
```jsx
<button
  aria-disabled={disabled || loading}
  aria-busy={loading}
  aria-label="Descrição específica da ação"
>
  {loading && <span className="sr-only">Carregando...</span>}
  {children}
</button>
```

#### Input Component
```jsx
<input
  aria-invalid={error ? 'true' : 'false'}
  aria-describedby={error ? errorId : success ? successId : undefined}
  aria-label="Descrição específica do campo"
/>
{error && (
  <div id={errorId} className="sr-only" role="alert">
    {error}
  </div>
)}
{success && (
  <div id={successId} className="sr-only" role="status">
    Campo preenchido corretamente
  </div>
)}
```

#### Card Component
```jsx
<article 
  role={onClick ? 'button' : 'article'}
  aria-label={onClick ? 'Clique para ver detalhes do artigo' : undefined}
  tabIndex={onClick ? 0 : undefined}
>
  <img role="presentation" alt="" />
  {children}
</article>
```

### 4. Páginas Principais

#### Home Page
```jsx
<main role="main" aria-label="Conteúdo principal da página inicial">
  <section aria-label="Por que escolher EstágioAI">
    <WhyChooseSection />
  </section>
  <section aria-label="Depoimentos de clientes">
    <TestimonialsCarouselSection />
  </section>
  <section aria-label="Principais empresas parceiras">
    <TopCompaniesSection />
  </section>
  <section aria-label="Estatísticas e números">
    <StatsSection />
  </section>
  <section aria-label="Chamada para ação">
    <CTASection />
  </section>
</main>
```

#### Página de Vagas
```jsx
<main role="main" aria-label="Página de vagas">
  <section role="banner" aria-label="Cabeçalho da página de vagas">
    <form role="search" aria-label="Formulário de busca de vagas">
      <input aria-label="Campo de busca por cargo, tecnologia ou área" />
      <input aria-label="Campo de localidade" />
      <button aria-label="Executar busca de vagas">Buscar</button>
    </form>
  </section>
  
  <aside role="complementary" aria-label="Filtros de busca">
    <fieldset>
      <legend>Tipo de Vaga</legend>
      <div role="group" aria-label="Opções de tipo de vaga">
        <button role="checkbox" aria-checked="false" aria-label="Filtrar por Estágio">
          Estágio
        </button>
      </div>
    </fieldset>
  </aside>
  
  <div role="main" aria-label="Lista de vagas disponíveis">
    <p role="status" aria-live="polite">
      Mostrando 6 vagas
    </p>
    <div role="list" aria-label="Vagas disponíveis">
      <div role="listitem">
        <JobCard aria-label="Vaga de Desenvolvedor Frontend React na empresa TechCorp" />
      </div>
    </div>
  </div>
  
  <nav role="navigation" aria-label="Navegação de páginas">
    <button aria-label="Ir para página anterior">Anterior</button>
    <div role="group" aria-label="Páginas disponíveis">
      <button aria-current="page" aria-label="Página 1">1</button>
    </div>
    <button aria-label="Ir para próxima página">Próxima</button>
  </nav>
</main>
```

## Estados e Feedback

### Estados de Loading
```jsx
{loading && (
  <>
    <span className="sr-only">Carregando...</span>
    <div className="animate-spin" aria-hidden="true" />
  </>
)}
```

### Estados de Erro
```jsx
<div role="alert" className="sr-only">
  {errorMessage}
</div>
```

### Estados de Sucesso
```jsx
<div role="status" className="sr-only">
  Campo preenchido corretamente
</div>
```

### Live Regions
```jsx
<p role="status" aria-live="polite">
  Mostrando {count} resultados
</p>
```

## Elementos Decorativos

Todos os elementos decorativos são marcados com `aria-hidden="true"`:

```jsx
<div className="decorative-element" aria-hidden="true">
  <div className="circle-decoration" />
</div>

<ChevronDown aria-hidden="true" />
<Search aria-hidden="true" />
```

## Navegação por Teclado

### Skip Links
```jsx
<a 
  href="#main-content" 
  className="skip-to-main sr-only focus:not-sr-only"
>
  Pular para o conteúdo principal
</a>
```

### Focus Management
- Todos os elementos interativos têm `tabIndex` apropriado
- Focus rings visíveis: `focus:ring-[#82f7b3]/20`
- Touch targets ≥ 44px: `min-h-[44px] min-w-[44px]`

### Keyboard Events
```jsx
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onClick(e);
  }
}}
```

## Formulários Acessíveis

### Labels e Descrições
```jsx
<label htmlFor="search-input" className="sr-only">
  Pesquisar vagas
</label>
<input 
  id="search-input"
  aria-describedby="search-help"
  aria-invalid={hasError ? 'true' : 'false'}
/>
<div id="search-help" className="sr-only">
  Digite palavras-chave para encontrar vagas
</div>
```

### Fieldsets e Legends
```jsx
<fieldset>
  <legend>Filtros de Vaga</legend>
  <div role="group" aria-label="Opções de tipo de vaga">
    {/* Opções de filtro */}
  </div>
</fieldset>
```

## Listas e Navegação

### Listas Semânticas
```jsx
<ul role="list">
  <li role="listitem">
    <a href="/link" aria-label="Descrição do link">
      Texto do Link
    </a>
  </li>
</ul>
```

### Navegação de Páginas
```jsx
<nav role="navigation" aria-label="Navegação de páginas">
  <button aria-label="Página anterior" disabled={isFirstPage}>
    Anterior
  </button>
  <button aria-current="page" aria-label="Página atual, página 1">
    1
  </button>
  <button aria-label="Ir para página 2">
    2
  </button>
  <button aria-label="Próxima página" disabled={isLastPage}>
    Próxima
  </button>
</nav>
```

## Imagens e Mídia

### Imagens Decorativas
```jsx
<img src="decorative.jpg" alt="" role="presentation" />
```

### Imagens Informativas
```jsx
<img 
  src="logo.svg" 
  alt="EstágioAI - Logotipo" 
  aria-label="EstágioAI - Voltar ao início"
/>
```

## Checklist de Implementação

### ✅ Landmarks Semânticos
- [x] `<nav>` com `role="navigation"` e `aria-label`
- [x] `<main>` com `role="main"` e `aria-label`
- [x] `<aside>` com `role="complementary"` e `aria-label`
- [x] `<footer>` com `role="contentinfo"` e `aria-label`
- [x] `<section>` com `aria-label` descritivos

### ✅ ARIA Labels em Português
- [x] Todos os botões têm `aria-label` descritivos
- [x] Todos os links têm `aria-label` quando necessário
- [x] Formulários têm labels e descrições em português
- [x] Estados de erro/sucesso em português
- [x] Mensagens de loading em português

### ✅ Navegação por Teclado
- [x] Skip links implementados
- [x] Focus management adequado
- [x] Keyboard event handlers
- [x] Touch targets ≥ 44px

### ✅ Estados e Feedback
- [x] `aria-invalid` para campos com erro
- [x] `aria-busy` para estados de loading
- [x] `role="alert"` para erros
- [x] `role="status"` para feedback
- [x] `aria-live` para atualizações dinâmicas

### ✅ Elementos Complexos
- [x] Filtros com `fieldset` e `legend`
- [x] Listas com `role="list"` e `role="listitem"`
- [x] Paginação com `aria-current="page"`
- [x] Cards clicáveis com `role="button"`

## Testes de Acessibilidade

### Ferramentas Recomendadas
1. **axe-core** - Testes automatizados
2. **NVDA/JAWS** - Leitores de tela
3. **Lighthouse** - Auditoria de acessibilidade
4. **Keyboard navigation** - Teste manual

### Comandos de Teste
```bash
# Executar testes de acessibilidade
npm run test:a11y

# Auditoria com Lighthouse
npm run audit:a11y
```

## Conclusão

A implementação completa de ARIA labels e semântica garante que o site EstágioAI atenda aos padrões WCAG AA, proporcionando uma experiência acessível para todos os usuários, incluindo aqueles que utilizam tecnologias assistivas.

Todos os textos, labels e descrições estão em português brasileiro, facilitando a compreensão e navegação para usuários brasileiros que dependem de leitores de tela ou outras tecnologias assistivas.