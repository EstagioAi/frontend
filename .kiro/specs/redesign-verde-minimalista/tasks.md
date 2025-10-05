# Implementation Plan - Redesign Verde Minimalista

## Overview

Este plano de implementação converte o design do redesign verde minimalista em uma série de tarefas específicas de codificação. O foco está em uma abordagem incremental, priorizando componentes base, depois páginas principais, garantindo que cada etapa seja testável e funcional.

---

## Tasks

- [x] 1. Configurar foundation do novo design system





  - Atualizar variáveis CSS globais no App.css com paleta verde/preto
  - Implementar sistema de opacidades padronizadas
  - Configurar transições e animações base
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 8.1, 8.2_

- [x] 1.1 Atualizar variáveis CSS principais


  - Substituir cores coral/terracota por verde (#82f7b3) e preto (#0f0f0f)
  - Definir backgrounds (#f8f8f8 para seções, #ffffff para cards)
  - Implementar sistema de opacidades (70%, 50%, 40%, 30%, 10%)
  - _Requirements: 1.1, 1.2, 1.3, 1.6, 1.7_



- [ ] 1.2 Configurar sistema de transições



  - Implementar transições rápidas (200ms) como padrão



  - Configurar suporte a prefers-reduced-motion
  - Definir animações de hover e focus
  - _Requirements: 8.1, 8.2, 8.6, 8.7_

- [ ] 2. Redesenhar componente Navigation


  - Reduzir altura da navbar de py-4 para py-3


  - Implementar background transparente com backdrop-blur
  - Atualizar hover states para verde
  - Tornar logo mais discreto (h-7 em vez de h-8)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.8_



- [ ] 2.1 Implementar navbar mais discreta


  - Alterar padding vertical de py-4 para py-3
  - Reduzir altura do logo de h-8 para h-7
  - Aplicar background semi-transparente bg-white/80 backdrop-blur-md
  - _Requirements: 2.1, 2.3, 2.8_

- [x] 2.2 Atualizar interações da navbar


  - Implementar hover states verdes nos links (text-[#82f7b3] bg-[#82f7b3]/10)
  - Atualizar botão CTA para estilo verde secundário
  - Garantir animações suaves na navbar mobile
  - _Requirements: 2.5, 2.6, 2.7_



- [x] 3. Criar sistema de componentes Button redesenhado

  - Implementar variantes primary (preto), secondary (verde), outline
  - Configurar estados de hover, focus e disabled
  - Garantir acessibilidade com focus rings verdes
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_

- [x] 3.1 Implementar Button component base
  - Criar interface TypeScript com variantes e props
  - Implementar botão primário: bg-[#0f0f0f] text-white hover:bg-[#1a1a1a]
  - Implementar botão secundário: bg-[#82f7b3] text-[#0f0f0f] hover:bg-[#6ee5a1]
  - _Requirements: 4.1, 4.2_

- [x] 3.2 Implementar estados e variações de Button
  - Criar botão outline: border-[#0f0f0f]/10 hover:border-[#82f7b3]
  - Implementar botão ativo para filtros: bg-[#82f7b3] shadow-lg
  - Configurar estado disabled: cursor-not-allowed bg-white/40 text-[#0f0f0f]/30
  - _Requirements: 4.3, 4.4, 4.8_

- [x] 3.3 Configurar acessibilidade e interações



  - Implementar focus rings: focus:ring-[#82f7b3]/20
  - Configurar transições: transition-all duration-200 hover:shadow-lg
  - Garantir touch targets ≥ 44px
  - _Requirements: 4.5, 4.6, 9.8_
  -

- [x] 4. Criar sistema de componentes Card modernizado




  - Implementar cards com bordas arredondadas (rounded-2xl)
  - Configurar hover effects com elevação e mudança de borda
  - Criar variantes para diferentes tipos de conteúdo
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

- [x] 4.1 Implementar Card component base


  - Criar estrutura: rounded-2xl border-2 border-[#0f0f0f]/10 bg-white shadow-lg
  - Implementar hover: hover:-translate-y-1 hover:border-[#82f7b3] hover:shadow-xl
  - Configurar transições: transition-all duration-200
  - _Requirements: 5.1, 5.2, 5.3_

- [x] 4.2 Criar variantes de Card especializadas


  - Card de artigo com aspect-[4/3] para imagens
  - Card CTA com padding maior (px-8 py-12) e centralização
  - Implementar hover em imagens: group-hover:scale-105
  - _Requirements: 5.4, 5.5, 5.7_

- [x] 5. Implementar sistema de Input modernizado





  - Criar inputs com bordas sutis e focus rings verdes
  - Implementar estados de erro, sucesso e disabled
  - Configurar input de busca com ícone
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [x] 5.1 Criar Input component base


  - Implementar estrutura: border-2 border-[#0f0f0f]/10 bg-white rounded-lg
  - Configurar focus: focus:border-[#82f7b3] focus:ring-4 focus:ring-[#82f7b3]/20
  - Definir placeholders: placeholder:text-[#0f0f0f]/40
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 5.2 Implementar estados e variações de Input


  - Estado de erro: border-red-500 focus:ring-red-500/20
  - Estado de sucesso: border-green-500 focus:ring-green-500/20
  - Estado disabled: bg-[#f8f8f8] text-[#0f0f0f]/40 cursor-not-allowed
  - Input de busca com ícone: text-[#0f0f0f]/40
  - _Requirements: 6.4, 6.5, 6.6, 6.7_
-

- [x] 6. Criar sistema de Badge minimalista




  - Implementar badges com bordas verdes
  - Configurar variantes outline, filled e simple
  - Garantir tipografia consistente (text-xs font-bold uppercase)
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

- [x] 6.1 Implementar Badge component


  - Badge com borda: border-2 border-[#82f7b3] bg-[#82f7b3]/10
  - Badge simples: border-2 border-[#0f0f0f]/10 bg-white
  - Badge preenchido: bg-[#82f7b3] text-[#0f0f0f]
  - Configurar tipografia: rounded-full text-xs font-bold uppercase tracking-wider
  - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [x] 7. Implementar elementos decorativos minimalistas





  - Criar círculos decorativos com bordas verdes
  - Implementar blur effects sutis
  - Configurar separadores e pontos decorativos
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_

- [x] 7.1 Criar elementos decorativos para hero sections


  - Círculos com border-[3px] border-[#82f7b3] e opacidade 30-40%
  - Blur effects: bg-[#82f7b3]/10 blur-3xl
  - Garantir pointer-events-none para não interferir na interação
  - _Requirements: 7.1, 7.2, 7.3, 7.7_

- [x] 7.2 Implementar separadores e elementos auxiliares


  - Separadores verticais: h-4 w-px bg-[#0f0f0f]/20
  - Separadores horizontais: border-b border-[#0f0f0f]/10
  - Pontos decorativos: h-1 w-1 rounded-full bg-[#82f7b3]
  - _-equ
irements: 7.4, 7.5, 7.6_
  - [x] 8 Atualizar tipografia e hierarquia visual
  - Implementar hierarquia de títulos (H1, H2, H3, H4)
  - Configurar estilos de parágrafo e texto
  - Criar destaques de texto com highlight verde
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [ ] 8.1 Implementar hierarquia de títulos




  - H1 (hero): text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight
  - H2 (seções): text-3xl sm:text-4xl font-bold tracking-tight
  - H3 (cards): text-2xl font-bold
  - H4 (subtítulos): text-lg sm:text-xl font-bold leading-tight
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [-] 8.2 Configurar estilos de texto e parágrafos




  - Parágrafo principal: text-lg leading-relaxed text-[#0f0f0f]/70
  - Texto secundário: text-sm text-[#0f0f0f]/70
  - Labels/stats: text-xs font-semibold uppercase tracking-wider text-[#0f0f0f]/50
  - _Requirements: 3.5, 3.6, 3.7_

- [x] 9. Migrar página Home mantendo estrutura atual





  - Aplicar novo design system mantendo layout da hero section
  - Atualizar todas as cores para paleta verde/preto
  - Implementar elementos decorativos minimalistas
  - Traduzir todo conteúdo para português
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

- [x] 9.1 Atualizar HeroSection da Home


  - Manter estrutura atual como base
  - Aplicar background: bg-[#f8f8f8]
  - Atualizar títulos com nova tipografia
  - Implementar círculos decorativos minimalistas
  - _Requirements: 12.1, 12.2, 12.5_

- [x] 9.2 Atualizar CTAs e elementos interativos da Home


  - Aplicar novos estilos de botão (primário preto, secundário verde)
  - Atualizar hover states para verde
  - Garantir espaçamento generoso: pt-20 pb-16 sm:pt-24 lg:pt-28
  - _Requirements: 12.4, 12.5_


- [x] 9.3 Traduzir conteúdo da Home para português


  - Revisar todos os textos e garantir português brasileiro
  - Atualizar labels de botões e CTAs
  - Verificar ARIA labels para acessibilidade
  - _Requirements: 10.1, 10.2, 10.4, 10.7_
-

- [x] 10. Migrar páginas principais (CompaniesPage, Vagas, Sobre, Contato)




  - Aplicar novo design system consistentemente
  - Atualizar componentes para usar novos estilos
  - Garantir responsividade e acessibilidade
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7_

- [x] 10.1 Migrar CompaniesPage.jsx



  - Aplicar background: bg-[#f8f8f8]
  - Atualizar todos os botões para novos estilos
  - Implementar cards com hover effects
  - Traduzir conteúdo para português
  - _Requirements: 13.1, 13.2, 13.3, 10.1_

- [x] 10.2 Migrar Vagas.jsx (Mural de Vagas)



  - Atualizar filtros para usar botões outline/active
  - Implementar cards de vaga com novo design
  - Configurar input de busca com ícone
  - Garantir paginação consistente
  - _Requirements: 13.1, 13.2, 13.3_

- [x] 10.3 Migrar Sobre.jsx



  - Aplicar nova tipografia e hierarquia
  - Atualizar seções com espaçamento generoso (py-20)
  - Implementar elementos decorativos sutis
  - Traduzir todo conteúdo
  - _Requirements: 13.1, 13.4, 10.1_


- [x] 10.4 Migrar Contato.jsx


  - Atualizar formulários com novos estilos de input
  - Implementar estados de erro/sucesso
  - Configurar botões de envio com loading states
  - Garantir acessibilidade completa
  - [x] 11. Migrar páginas de autenticação (Login, Register)



  - [ ] 11. Migrar páginas de autenticação (Login, Register)

  - Implementar formulários com novos estilos de input
  - Configurar validação visual com estados de erro
  - Atualizar botões e links
  - _Requirements: 6.1, 6.2, 6.5, 4.1, 4.2, 10.1, 10.2, 10.3_

- [x] 11.1 Migrar Login.jsx



  - Atualizar inputs: border-[#0f0f0f]/10 focus:border-[#82f7b3]
  - Implementar botão primário para login
  - Configurar links com hover verde
  - Traduzir labels e mensagens
  - _Requirements: 6.1, 6.2, 4.1, 10.2, 10.3_


- [x] 11.2 Migrar Register.jsx


  - Aplicar estilos consistentes de formulário
  - Implementar validação visual em tempo real
  - Configurar estados de sucesso/erro
  - Garantir acessibilidade completa
  - _Requirements: 6.1, 6.2, 6.5, 6.6, 9.8_

- [x] 12. Migrar páginas de conteúdo (PricingPlans, HelpCenter, ResumeChecker, ResumeTemplates)





  - Aplicar design system consistentemente
  - Atualizar cards de pricing e features
  - Implementar componentes especializados
  - _Requirements: 13.1, 13.2, 13.3, 5.1, 5.2_

- [x] 12.1 Migrar PricingPlans.jsx



  - Criar cards de plano com novo design
  - Implementar badges para planos populares
  - Atualizar botões CTA para cada plano
  - Configurar hover effects nos cards
  - _Requirements: 5.1, 5.2, 11.1, 11.3, 4.1, 4.2_


- [x] 12.2 Migrar HelpCenter.jsx


  - Implementar sistema de busca com novo input
  - Criar cards para categorias de ajuda
  - Atualizar tipografia para melhor legibilidade
  - Configurar navegação breadcrumb
  - _Requirements: 6.1, 6.4, 5.1, 3.1, 3.2_


- [x] 12.3 Migrar ResumeChecker.jsx


  - Atualizar área de upload de arquivo
  - Implementar feedback visual durante análise
  - Configurar resultados com cards e badges
  - Manter cores semânticas (verde para sucesso)
  - _Requirements: 5.1, 11.1, 6.6_


- [x] 12.4 Migrar ResumeTemplates.jsx


  - Criar grid de templates com cards hover
  - Implementar filtros com botões outline/active
  - Configurar preview modal consistente
  - Atualizar CTAs de download
  - _Requirements: 5.1, 5.2, 4.3, 4.4, 4.1_

- [-] 13. Migrar páginas institucionais (Universidades, Terms, Privacy)



  - Aplicar tipografia e espaçamento consistentes
  - Atualizar links e elementos interativos
  - Garantir legibilidade e acessibilidade
  - _Requirements: 3.1, 3.2, 3.5, 3.6, 9.8, 10.1_

- [x] 13.1 Migrar Universidades.jsx


  - Implementar cards para universidades parceiras
  - Configurar filtros por região/curso
  - Atualizar logos e informações
  - Manter cores semânticas onde apropriado
  - _Requirements: 5.1, 4.3, 4.4_

- [x] 13.2 Migrar TermsOfService.jsx


  - Aplicar nova tipografia para melhor legibilidade
  - Implementar navegação interna (índice)
  - Configurar links com hover verde
  - Garantir estrutura semântica (headings)
  - _Requirements: 3.1, 3.2, 3.5, 9.8_

- [x] 13.3 Migrar PrivacyPolicy.jsx


  - Aplicar estilos consistentes com Terms
  - Implementar seções colapsáveis se necessário
  - Configurar links externos com indicação visual
  - Traduzir completamente para português
  - _Requirements: 3.1, 3.2, 3.5, 10.1_

- [-] 13.4 Migrar TermsOfUse.jsx

  - Manter consistência com outras páginas legais
  - Aplicar espaçamento generoso entre seções
  - Configurar tipografia hierárquica
  - Garantir acessibilidade completa
  - _Requirements: 3.1, 3.2, 9.1, 9.8_ 
  - [ ] 14. Implementar responsividade completa

  - Configurar breakpoints e containers responsivos
  - Implementar grids adaptativos para cards
  - Garantir navegação mobile otimizada

 - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8_


- [-] 14.1 Configurar containers e layouts responsivos





  - Implementar max-w-7xl para hero sections
  - Configurar max-w-6xl para conteúdo principal
  - Aplicar padding responsivo: px-4 sm:px-6 lg:px-8
  - _Requirements: 9.1, 9.2, 9.3_






- [ ] 14.2 Implementar grids e espaçamentos adaptativos

  - Configurar grids: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  - Aplicar espaçamento vertical: py-20 para seções principais

  - Implementar gaps responsivos: gap-6, gap-8, gap-12
  - _Requirements: 9.4, 9.5, 9.6_

- [ ] 14.3 Otimizar navegação mobile




  - Garantir elementos escondidos/mostrados apropriadamente
  - Configurar touch targets ≥ 44px
  - Implementar menu mobile com animações suaves
  - _Requirements: 9.7, 9.8_

- [ ] 15. Implementar acessibilidade completa

  - Configurar focus states visíveis em todos os elementos
  - Implementar ARIA labels em português
  - Garantir contraste WCAG AA
  - Configurar navegação por teclado
  - _Requirements: 9.8, 10.7_

- [x] 15.1 Configurar focus states e navegação por teclado






- [ ] 15.1 Configurar focus states e navegação por teclado

  - Implementar focus:ring-[#82f7b3]/20 em elementos interativos
  - Configurar skip links para navegação
  - Garantir ordem de tab lógica
  - _Requirements: 9.8_
 
-

- [x] 15.2 Implementar ARIA labels e semântica






  - Traduzir todos os ARIA labels para português
  - Configurar landmarks semânticos (main, nav, aside)
  - Implementar descrições para elementos complexos
  - _Requirements: 10.7, 9.8_



- [ ] 16. Otimizar performance e animações

  - Implementar prefers-reduced-motion
  - Configurar transições otimizadas (200ms)
  - Garantir animações suaves em todos os dispositivos
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_


- [ ] 16.1 Configurar sistema de animações otimizado



  - Implementar transições padrão: transition-all duration-200
  - Configurar hover elevação: hover:-translate-y-1
  - Implementar animações de ícones: group-hover:translate-x-1
  - _Requirements: 8.1, 8.2, 8.3_


-
- [ ] 16.2 Implementar suporte a reduced motion

- [-] 16.2 Implementar suporte a reduced motion




  - Configurar media query para prefers-reduced-motion
  - Desabilitar animações quando necessário

  - Manter funcionalidade sem depender de animações
  - _Requirements: 8.6_


- [ ] 17. Realizar testes e validação final



  - Executar testes de regressão visual
  - Validar acessibilidade com ferramentas automatizadas
  - Testar performance em diferentes dispositivos
  - Verificar consistência cross-browser


  - _Requirements: Todos os requirements_


- [ ] 17.1 Executar testes de componentes


  - Testar todos os estados de botões (hove
r, focus, disabled)
  - Validar comportamento de cards e inputs
  - Verificar responsividade em diferentes br
eakpoints
  - _Requirements: 4.1-4.8, 5.1-5.7, 6.1-6.7_

- [ ] 17.2 Validar migração completa




  - Verificar se todas as páginas usam paleta verde/preto
  - Confirmar que navbar está mais discreta
  - Validar que todo conteúdo está em português
  - Testar navegação e funcionalidades
  - _Requirements: 1.1-1.10, 2.1-2.8, 10.1-10.7, 13.1-13.7_

- [ ] 18. Documentar e finalizar implementação





  - Atualizar documentação de componentes

  - Criar guia de migração para futuras páginas
  - Documentar padrões e convenções estabelecidas
  - _Requirements: Documentação e manutenibilidade_




- [ ] 18.1 Criar documentação de componentes
  - Documentar props e variantes de cada componente
  - Criar exemplos de uso para Button, Card, Input, Badge
  - Estabelecer guidelines de quando usar cada variante
  - _Requirements: Manutenibilidade_


- [ ] 18.2 Finalizar guias e convenções

  - Criar checklist para migração de novas páginas
  - Documentar paleta de cores e quando usar cada uma
  - Estabelecer padrões de espaçamento e tipografia
  - _Requirements: Consistência e escalabilidade_