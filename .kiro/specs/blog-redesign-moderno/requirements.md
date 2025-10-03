# Requirements Document

## Introduction

Este documento define os requisitos para redesenhar as páginas de blog (listagem e post individual) com um layout moderno e profissional, inspirado em designs contemporâneos de blogs de fitness/lifestyle. O objetivo é criar uma experiência visual mais impactante, com cards de conteúdo mais destacados, melhor hierarquia visual e um design que transmita profissionalismo e modernidade.

## Requirements

### Requirement 1: Redesign da Página de Listagem do Blog

**User Story:** Como um visitante do site, eu quero ver uma página de blog com layout moderno e cards visualmente atraentes, para que eu possa navegar facilmente pelos artigos e me sentir motivado a ler o conteúdo.

#### Acceptance Criteria

1. WHEN o usuário acessa a página de blog THEN o sistema SHALL exibir um layout em grid com cards de diferentes tamanhos (featured card grande + cards menores)
2. WHEN o sistema renderiza os cards de artigos THEN cada card SHALL incluir imagem de capa em destaque, categoria com badge colorido, título em negrito, excerpt do conteúdo e call-to-action visual
3. WHEN o usuário visualiza a página THEN o sistema SHALL aplicar um design com bordas arredondadas generosas (rounded-3xl ou superior), sombras suaves e efeitos de hover elegantes
4. WHEN o usuário passa o mouse sobre um card THEN o sistema SHALL aplicar animações sutis como scale na imagem, elevação do card e mudança de cor no texto
5. IF existe um artigo em destaque THEN o sistema SHALL exibi-lo em um card maior e mais proeminente no topo da grid
6. WHEN o sistema exibe categorias THEN cada categoria SHALL ter uma cor/badge distinto seguindo o design system existente

### Requirement 2: Redesign da Página Individual do Post

**User Story:** Como um leitor, eu quero visualizar artigos individuais em um layout limpo e profissional, para que eu possa focar no conteúdo sem distrações e ter uma experiência de leitura agradável.

#### Acceptance Criteria

1. WHEN o usuário acessa um post individual THEN o sistema SHALL exibir o conteúdo em um layout de duas colunas (conteúdo principal + sidebar) em desktop
2. WHEN o sistema renderiza o header do post THEN ele SHALL incluir título grande e destacado, imagem de capa em formato hero, metadata (data, tempo de leitura, autor) e badges de categorias/tags
3. WHEN o usuário visualiza o conteúdo THEN o sistema SHALL aplicar tipografia otimizada para leitura com espaçamento generoso, tamanho de fonte adequado (17-18px) e line-height confortável
4. WHEN o sistema exibe a imagem de capa THEN ela SHALL ocupar posição de destaque com aspect ratio adequado (16:9 ou similar) e tratamento visual profissional
5. IF o post possui múltiplas seções THEN o sistema SHALL manter hierarquia visual clara com headings bem definidos e espaçamento consistente
6. WHEN o usuário rola a página THEN o sistema SHALL exibir uma barra de progresso de leitura no topo

### Requirement 3: Sistema de Cards Modernos

**User Story:** Como um designer/desenvolvedor, eu quero implementar um sistema de cards moderno e reutilizável, para que possamos manter consistência visual em todo o blog.

#### Acceptance Criteria

1. WHEN o sistema renderiza um card de artigo THEN ele SHALL usar bordas arredondadas grandes (rounded-[28px] ou superior)
2. WHEN o card é renderizado THEN ele SHALL incluir sombras suaves e multicamadas para criar profundidade
3. WHEN o usuário interage com o card THEN o sistema SHALL aplicar transições suaves (duration-300 ou superior)
4. WHEN a imagem do card é exibida THEN ela SHALL ter overlay gradiente sutil para melhorar legibilidade do texto sobreposto
5. IF o card possui badges/tags THEN eles SHALL ser posicionados sobre a imagem com backdrop-blur para destaque
6. WHEN o card está em estado hover THEN o sistema SHALL aplicar transform scale sutil na imagem e elevação no card

### Requirement 4: Melhorias de Tipografia e Espaçamento

**User Story:** Como um leitor, eu quero ver textos bem formatados e espaçados, para que eu possa ler confortavelmente sem esforço visual.

#### Acceptance Criteria

1. WHEN o sistema exibe títulos de artigos THEN eles SHALL usar font-size entre 20-24px nos cards e 32-52px nos headers de post
2. WHEN o sistema renderiza corpo de texto THEN ele SHALL usar font-size de 17-18px com line-height de 1.7-1.8
3. WHEN múltiplos elementos são exibidos THEN o sistema SHALL aplicar espaçamento consistente usando escala (gap-4, gap-6, gap-8, etc.)
4. WHEN badges/tags são renderizados THEN eles SHALL usar uppercase, tracking amplo (0.25-0.3em) e tamanhos pequenos (text-xs ou text-[11px])
5. IF o conteúdo possui listas ou parágrafos THEN o sistema SHALL aplicar espaçamento vertical generoso (space-y-6 ou superior)

### Requirement 5: Responsividade e Adaptação Mobile

**User Story:** Como um usuário mobile, eu quero que o blog seja totalmente responsivo e otimizado para dispositivos móveis, para que eu possa ter uma boa experiência em qualquer tela.

#### Acceptance Criteria

1. WHEN o usuário acessa em mobile THEN o sistema SHALL adaptar o grid para uma coluna única
2. WHEN em tablet THEN o sistema SHALL exibir grid de 2 colunas
3. WHEN em desktop THEN o sistema SHALL exibir grid de 3 colunas para cards regulares
4. WHEN o usuário acessa um post em mobile THEN o sistema SHALL ocultar a sidebar e exibir TOC de forma alternativa
5. IF imagens são exibidas em mobile THEN elas SHALL manter aspect ratio adequado e não causar overflow horizontal
6. WHEN elementos interativos são renderizados em mobile THEN eles SHALL ter touch targets adequados (min 44x44px)

### Requirement 6: Efeitos Visuais e Microinterações

**User Story:** Como um visitante, eu quero ver animações e efeitos visuais sutis, para que a experiência seja mais dinâmica e agradável.

#### Acceptance Criteria

1. WHEN o usuário passa o mouse sobre elementos clicáveis THEN o sistema SHALL aplicar transições suaves de cor e escala
2. WHEN cards são exibidos THEN eles SHALL ter efeito de elevação sutil com sombras que aumentam no hover
3. WHEN imagens são carregadas THEN o sistema SHALL aplicar lazy loading e transições suaves
4. WHEN o usuário interage com filtros/categorias THEN o sistema SHALL aplicar animações de fade e slide
5. IF elementos possuem estados ativos THEN o sistema SHALL indicar visualmente com cores e estilos distintos
6. WHEN a página é rolada THEN animações SHALL ser performáticas sem causar jank ou lag

### Requirement 7: Paleta de Cores e Identidade Visual

**User Story:** Como um stakeholder da marca, eu quero que o blog mantenha a identidade visual da EstágioAI, para que haja consistência com o resto do site.

#### Acceptance Criteria

1. WHEN cores são aplicadas THEN o sistema SHALL usar a paleta existente (#0E8F66, #6FFFC7, #020F1A, etc.)
2. WHEN backgrounds são renderizados THEN eles SHALL usar gradientes sutis e overlays com as cores da marca
3. WHEN badges de categoria são exibidos THEN cada categoria SHALL ter uma cor distinta mas harmoniosa
4. WHEN estados hover são aplicados THEN as cores SHALL manter contraste adequado para acessibilidade
5. IF elementos precisam destaque THEN o sistema SHALL usar a cor primária (#0E8F66) ou accent (#6FFFC7)
6. WHEN texto é exibido sobre imagens THEN o sistema SHALL garantir contraste mínimo de 4.5:1 para legibilidade
