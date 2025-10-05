# Requirements Document - Redesign Verde Minimalista

## Introduction

Este documento define os requisitos para a migração completa do site EstágioAI do design system atual (coral/terracota) para o novo design system verde e preto minimalista, já implementado com sucesso na página de Blog. O objetivo é criar uma experiência visual consistente, moderna e profissional em todas as páginas do site, mantendo a identidade clean e minimalista que caracteriza o novo design.

A transformação inclui atualização de cores, tipografia, espaçamentos, componentes de UI, navbar redesenhada (mais discreta, sticky e transparente), e garantia de que todo o conteúdo esteja em português brasileiro.

---

## Requirements

### Requirement 1: Migração da Paleta de Cores

**User Story:** Como usuário do site, quero ver uma identidade visual consistente e moderna em todas as páginas, para que minha experiência seja coesa e profissional.

#### Acceptance Criteria

1. WHEN qualquer página do site for carregada THEN o background principal SHALL ser `#f8f8f8` (cinza claro)
2. WHEN textos principais forem exibidos THEN eles SHALL usar `#0f0f0f` (preto) com opacidade 100%
3. WHEN textos secundários forem exibidos THEN eles SHALL usar `#0f0f0f/70` (preto com 70% de opacidade)
4. WHEN elementos de destaque ou hover forem ativados THEN eles SHALL usar `#82f7b3` (verde principal)
5. WHEN hover em elementos verdes ocorrer THEN a cor SHALL mudar para `#6ee5a1` (verde hover)
6. WHEN bordas forem aplicadas THEN elas SHALL usar `#0f0f0f/10` (preto com 10% de opacidade)
7. WHEN cards ou elementos destacados forem exibidos THEN o background SHALL ser `#ffffff` (branco)
8. WHEN botões primários forem renderizados THEN eles SHALL usar `bg-[#0f0f0f]` com texto branco
9. WHEN botões secundários forem renderizados THEN eles SHALL usar `bg-[#82f7b3]` com texto `#0f0f0f`
10. WHEN badges ou tags forem exibidos THEN eles SHALL usar `border-[#82f7b3]` com `bg-[#82f7b3]/10`

---

### Requirement 2: Redesign da Navbar

**User Story:** Como usuário navegando pelo site, quero uma navbar mais discreta e moderna, para que o foco permaneça no conteúdo principal sem distrações visuais.

#### Acceptance Criteria

1. WHEN a navbar for renderizada THEN ela SHALL ter altura reduzida com `py-3` (12px) em vez de `py-4` (16px)
2. WHEN a página for rolada THEN a navbar SHALL permanecer sticky no topo com `sticky top-0`
3. WHEN a navbar estiver no topo THEN ela SHALL ter background semi-transparente `bg-white/80` com `backdrop-blur-md`
4. WHEN a navbar for exibida THEN ela SHALL ter uma borda inferior sutil `border-b border-[#0f0f0f]/10`
5. WHEN links da navbar forem hovereados THEN eles SHALL mudar para `text-[#82f7b3]` com `bg-[#82f7b3]/10`
6. WHEN o botão CTA da navbar for exibido THEN ele SHALL usar o estilo verde secundário consistente
7. WHEN a navbar mobile for aberta THEN ela SHALL ter animação suave e background consistente
8. WHEN o logo for exibido THEN ele SHALL ter altura de `h-7` (28px) para ser mais discreto

---

### Requirement 3: Atualização de Tipografia e Hierarquia

**User Story:** Como usuário lendo conteúdo, quero uma hierarquia tipográfica clara e moderna, para que eu possa navegar facilmente pelas informações.

#### Acceptance Criteria

1. WHEN títulos H1 (hero) forem exibidos THEN eles SHALL usar `text-5xl sm:text-6xl lg:text-7xl` com `font-bold leading-[1.1] tracking-tight`
2. WHEN títulos H2 (seções) forem exibidos THEN eles SHALL usar `text-3xl sm:text-4xl` com `font-bold tracking-tight`
3. WHEN títulos H3 (cards) forem exibidos THEN eles SHALL usar `text-2xl` com `font-bold`
4. WHEN títulos H4 (subtítulos) forem exibidos THEN eles SHALL usar `text-lg sm:text-xl` com `font-bold leading-tight`
5. WHEN parágrafos principais forem exibidos THEN eles SHALL usar `text-lg leading-relaxed text-[#0f0f0f]/70`
6. WHEN textos secundários forem exibidos THEN eles SHALL usar `text-sm text-[#0f0f0f]/70`
7. WHEN labels ou stats forem exibidos THEN eles SHALL usar `text-xs font-semibold uppercase tracking-wider text-[#0f0f0f]/50`

---

### Requirement 4: Redesign de Botões

**User Story:** Como usuário interagindo com CTAs, quero botões modernos e consistentes, para que minhas ações sejam claras e intuitivas.

#### Acceptance Criteria

1. WHEN botões primários forem renderizados THEN eles SHALL usar `bg-[#0f0f0f] text-white hover:bg-[#1a1a1a]`
2. WHEN botões secundários forem renderizados THEN eles SHALL usar `bg-[#82f7b3] text-[#0f0f0f] hover:bg-[#6ee5a1]`
3. WHEN botões outline forem renderizados THEN eles SHALL usar `border-2 border-[#0f0f0f]/10 bg-white hover:border-[#82f7b3] hover:bg-[#82f7b3]/5`
4. WHEN botões ativos (filtros) forem renderizados THEN eles SHALL usar `bg-[#82f7b3] text-[#0f0f0f] shadow-lg`
5. WHEN hover em botões ocorrer THEN eles SHALL ter `transition-all duration-200` e `hover:shadow-lg`
6. WHEN botões forem exibidos THEN eles SHALL ter `rounded-lg` (8px de border-radius)
7. WHEN botões com ícones forem renderizados THEN eles SHALL usar `inline-flex items-center gap-2`
8. WHEN botões forem desabilitados THEN eles SHALL usar `cursor-not-allowed bg-white/40 text-[#0f0f0f]/30`

---

### Requirement 5: Redesign de Cards

**User Story:** Como usuário visualizando informações em cards, quero um design limpo e moderno, para que o conteúdo seja fácil de escanear.

#### Acceptance Criteria

1. WHEN cards forem renderizados THEN eles SHALL usar `rounded-2xl border-2 border-[#0f0f0f]/10 bg-white shadow-lg`
2. WHEN hover em cards ocorrer THEN eles SHALL ter `hover:-translate-y-1 hover:border-[#82f7b3] hover:shadow-xl`
3. WHEN transições em cards ocorrerem THEN elas SHALL usar `transition-all duration-200`
4. WHEN imagens em cards forem hovereadas THEN elas SHALL ter `group-hover:scale-105` com `transition-transform duration-300`
5. WHEN cards de artigos forem renderizados THEN eles SHALL ter aspect ratio `aspect-[4/3]` para imagens
6. WHEN conteúdo de cards for exibido THEN ele SHALL ter padding `p-6` e gap `gap-4`
7. WHEN cards CTA forem renderizados THEN eles SHALL ter padding maior `px-8 py-12` e centralização `text-center`

---

### Requirement 6: Atualização de Inputs e Forms

**User Story:** Como usuário preenchendo formulários, quero inputs modernos e acessíveis, para que minha experiência de entrada de dados seja agradável.

#### Acceptance Criteria

1. WHEN inputs forem renderizados THEN eles SHALL usar `border-2 border-[#0f0f0f]/10 bg-white rounded-lg`
2. WHEN focus em inputs ocorrer THEN eles SHALL ter `focus:border-[#82f7b3] focus:ring-4 focus:ring-[#82f7b3]/20`
3. WHEN placeholders forem exibidos THEN eles SHALL usar `placeholder:text-[#0f0f0f]/40`
4. WHEN inputs de busca forem renderizados THEN eles SHALL ter ícone com `text-[#0f0f0f]/40`
5. WHEN inputs tiverem erro THEN eles SHALL usar `border-red-500 focus:ring-red-500/20`
6. WHEN inputs tiverem sucesso THEN eles SHALL usar `border-green-500 focus:ring-green-500/20`
7. WHEN inputs estiverem desabilitados THEN eles SHALL usar `bg-[#f8f8f8] text-[#0f0f0f]/40 cursor-not-allowed`

---

### Requirement 7: Elementos Decorativos Minimalistas

**User Story:** Como usuário navegando pelo site, quero elementos decorativos sutis e modernos, para que a experiência visual seja agradável sem ser distrativa.

#### Acceptance Criteria

1. WHEN hero sections forem renderizadas THEN elas SHOULD ter círculos decorativos com `border-[3px] border-[#82f7b3]`
2. WHEN elementos decorativos forem exibidos THEN eles SHALL ter opacidade reduzida (30-40%)
3. WHEN blur effects forem aplicados THEN eles SHALL usar `bg-[#82f7b3]/10 blur-3xl`
4. WHEN separadores verticais forem usados THEN eles SHALL usar `h-4 w-px bg-[#0f0f0f]/20`
5. WHEN separadores horizontais forem usados THEN eles SHALL usar `border-b border-[#0f0f0f]/10`
6. WHEN pontos decorativos forem exibidos THEN eles SHALL usar `h-1 w-1 rounded-full bg-[#82f7b3]`
7. WHEN elementos decorativos forem renderizados THEN eles SHALL ter `pointer-events-none` para não interferir na interação

---

### Requirement 8: Transições e Animações

**User Story:** Como usuário interagindo com o site, quero animações suaves e rápidas, para que a experiência seja fluida e responsiva.

#### Acceptance Criteria

1. WHEN transições padrão forem aplicadas THEN elas SHALL usar `transition-all duration-200`
2. WHEN hover em elementos ocorrer THEN eles SHALL ter elevação com `hover:-translate-y-1`
3. WHEN ícones em botões forem hovereados THEN eles SHALL ter `transition-transform duration-200 group-hover:translate-x-1`
4. WHEN imagens forem hovereadas THEN elas SHALL ter `transition-transform duration-300 group-hover:scale-105`
5. WHEN animações de entrada forem usadas THEN elas SHALL ser sutis e rápidas
6. WHEN usuário tiver prefers-reduced-motion THEN animações SHALL ser desabilitadas
7. WHEN transições de cor ocorrerem THEN elas SHALL usar `transition-colors duration-200`

---

### Requirement 9: Responsividade e Layout

**User Story:** Como usuário acessando o site em diferentes dispositivos, quero uma experiência consistente e otimizada, para que eu possa navegar facilmente em qualquer tela.

#### Acceptance Criteria

1. WHEN páginas forem renderizadas THEN elas SHALL usar containers com `max-w-7xl` para hero sections
2. WHEN conteúdo principal for exibido THEN ele SHALL usar `max-w-6xl` para seções de conteúdo
3. WHEN padding responsivo for aplicado THEN ele SHALL usar `px-4 sm:px-6 lg:px-8`
4. WHEN grids de cards forem renderizados THEN eles SHALL usar `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
5. WHEN espaçamento vertical for aplicado THEN ele SHALL usar `py-20` para seções principais
6. WHEN gaps forem usados THEN eles SHALL seguir o padrão `gap-3` (pequeno), `gap-6` (médio), `gap-12` (grande)
7. WHEN elementos forem escondidos em mobile THEN eles SHALL usar `hidden lg:block`
8. WHEN elementos forem mostrados apenas em mobile THEN eles SHALL usar `block lg:hidden`

---

### Requirement 10: Localização em Português

**User Story:** Como usuário brasileiro, quero todo o conteúdo em português brasileiro, para que eu possa entender facilmente todas as informações.

#### Acceptance Criteria

1. WHEN qualquer texto for exibido THEN ele SHALL estar em português brasileiro
2. WHEN labels de formulário forem renderizados THEN eles SHALL estar em português
3. WHEN mensagens de erro forem exibidas THEN elas SHALL estar em português
4. WHEN botões forem renderizados THEN seus textos SHALL estar em português
5. WHEN placeholders forem exibidos THEN eles SHALL estar em português
6. WHEN títulos e descrições forem renderizados THEN eles SHALL estar em português
7. WHEN ARIA labels forem usados THEN eles SHALL estar em português para acessibilidade

---

### Requirement 11: Atualização de Badges e Tags

**User Story:** Como usuário visualizando categorias e tags, quero badges modernos e consistentes, para que eu possa identificar facilmente informações importantes.

#### Acceptance Criteria

1. WHEN badges com borda forem renderizados THEN eles SHALL usar `border-2 border-[#82f7b3] bg-[#82f7b3]/10`
2. WHEN badges simples forem renderizados THEN eles SHALL usar `border-2 border-[#0f0f0f]/10 bg-white`
3. WHEN badges preenchidos forem renderizados THEN eles SHALL usar `bg-[#82f7b3] text-[#0f0f0f]`
4. WHEN badges forem exibidos THEN eles SHALL ter `rounded-full` e `text-xs font-bold uppercase tracking-wider`
5. WHEN badges com ícones forem renderizados THEN eles SHALL usar `inline-flex items-center gap-2`
6. WHEN badges forem usados em grupos THEN eles SHALL ter `gap-3` entre si

---

### Requirement 12: Hero Section Criativa e Moderna

**User Story:** Como usuário chegando na home, quero uma hero section impactante e moderna, para que eu seja imediatamente engajado com a proposta de valor.

#### Acceptance Criteria

1. WHEN a hero section for renderizada THEN ela SHALL manter a estrutura atual como base
2. WHEN elementos decorativos forem adicionados THEN eles SHALL ser círculos minimalistas com bordas verdes
3. WHEN o título principal for exibido THEN ele SHALL ter destaque com possível highlight verde
4. WHEN CTAs forem renderizados THEN eles SHALL seguir o padrão de botões primário (preto) e secundário (verde)
5. WHEN a hero section for exibida THEN ela SHALL ter espaçamento generoso `pt-20 pb-16 sm:pt-24 lg:pt-28`
6. WHEN imagens ou ilustrações forem usadas THEN elas SHALL ter bordas arredondadas e sombras sutis
7. WHEN stats ou métricas forem exibidos THEN eles SHALL usar o estilo minimalista com separadores sutis

---

### Requirement 13: Consistência em Todas as Páginas

**User Story:** Como usuário navegando entre diferentes páginas, quero uma experiência visual consistente, para que eu me sinta confortável em qualquer seção do site.

#### Acceptance Criteria

1. WHEN qualquer página for carregada THEN ela SHALL usar o mesmo background `bg-[#f8f8f8]`
2. WHEN seções forem renderizadas THEN elas SHALL seguir os mesmos padrões de espaçamento
3. WHEN componentes forem reutilizados THEN eles SHALL manter o mesmo estilo em todas as páginas
4. WHEN transições forem aplicadas THEN elas SHALL ser consistentes em todo o site
5. WHEN hover states forem ativados THEN eles SHALL seguir o mesmo padrão verde
6. WHEN bordas forem aplicadas THEN elas SHALL usar a mesma opacidade `border-[#0f0f0f]/10`
7. WHEN sombras forem usadas THEN elas SHALL ser `shadow-lg` ou `shadow-xl` consistentemente

---

## Páginas a Serem Atualizadas

As seguintes páginas devem ser migradas para o novo design system:

1. **Home.jsx** - Página inicial (hero section como base)
2. **Blog.jsx** - Já implementado (referência)
3. **CompaniesPage.jsx** - Página para empresas
4. **Vagas.jsx** - Mural de vagas
5. **Sobre.jsx** - Sobre nós
6. **Contato.jsx** - Contato
7. **Login.jsx** - Login
8. **Register.jsx** - Registro
9. **PricingPlans.jsx** - Planos e preços
10. **ResumeChecker.jsx** - Verificador de currículo
11. **ResumeTemplates.jsx** - Templates de currículo
12. **Universidades.jsx** - Universidades
13. **HelpCenter.jsx** - Central de ajuda
14. **TermsOfService.jsx** - Termos de serviço
15. **PrivacyPolicy.jsx** - Política de privacidade
16. **TermsOfUse.jsx** - Termos de uso
17. **Todas as demais páginas** - Garantir consistência

---

## Prioridades

### Alta Prioridade
- Navbar redesenhada (mais discreta, sticky, transparente)
- Home page (hero section criativa mantendo estrutura atual)
- Páginas principais (Vagas, Sobre, Contato, CompaniesPage)
- Migração completa de cores

### Média Prioridade
- Páginas de autenticação (Login, Register)
- Páginas de conteúdo (HelpCenter, Blog posts)
- Páginas institucionais (Terms, Privacy)

### Baixa Prioridade
- Páginas em construção
- Páginas de suporte específicas

---

## Critérios de Sucesso

O redesign será considerado bem-sucedido quando:

1. ✅ Todas as páginas usarem a paleta verde e preto consistentemente
2. ✅ A navbar estiver mais discreta, sticky e com background transparente
3. ✅ Todo o conteúdo estiver em português brasileiro
4. ✅ A hero section da home for criativa e moderna mantendo a estrutura atual
5. ✅ Todos os componentes seguirem o design system do Blog
6. ✅ Transições e animações forem suaves (200ms)
7. ✅ A experiência for consistente em todas as páginas
8. ✅ O site for totalmente responsivo
9. ✅ Acessibilidade for mantida (WCAG AA)
10. ✅ Performance não for impactada negativamente
