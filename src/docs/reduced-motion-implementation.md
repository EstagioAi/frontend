# Implementação de Suporte a Reduced Motion

## Visão Geral

Esta implementação fornece suporte completo para `prefers-reduced-motion: reduce`, garantindo que usuários sensíveis a movimento tenham uma experiência confortável e acessível. O sistema desabilita automaticamente todas as animações e transições quando o usuário tem essa preferência ativada.

## Requirement Atendido

**Requirement 8.6**: "WHEN usuário tiver prefers-reduced-motion THEN animações SHALL ser desabilitadas"

## Implementação Técnica

### 1. Media Query Consolidada

Todas as regras de reduced motion foram consolidadas em um único bloco no `src/App.css`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Global animation and transition disabling */
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Disable all CSS animations completely */
  [class*="animate-"],
  .animate-float,
  .animate-fade-in,
  /* ... mais classes ... */
  {
    animation: none !important;
    animation-duration: 0s !important;
    animation-delay: 0s !important;
  }
  
  /* Disable hover transforms that can cause motion sickness */
  .hover\:scale-105:hover,
  .hover\:-translate-y-1:hover,
  /* ... mais transforms ... */
  {
    transform: none !important;
  }
  
  /* Disable all transitions while maintaining functionality */
  .transition-all,
  .transition-colors,
  /* ... mais transições ... */
  {
    transition: none !important;
    transition-duration: 0s !important;
  }
}
```

### 2. Abordagem Abrangente

A implementação cobre:

- **Animações CSS**: Todas as classes `animate-*` e animações nomeadas
- **Transições**: Todas as classes `transition-*` 
- **Hover Effects**: Transforms de hover que podem causar enjoo
- **Scroll Behavior**: Desabilita smooth scrolling
- **Componentes Específicos**: Carrosséis, modais, slot machines, etc.

### 3. Manutenção da Funcionalidade

Importante: As animações são desabilitadas, mas a funcionalidade é mantida:

- Botões continuam funcionando normalmente
- Estados de hover ainda aplicam mudanças de cor
- Modais e dropdowns ainda aparecem/desaparecem
- A navegação permanece totalmente funcional

## Tipos de Animações Desabilitadas

### Animações de Entrada/Saída
- `fade-in`, `slide-up`, `scale-in`
- Animações de modal e overlay
- Transições de página

### Animações Contínuas
- `float`, `bounce`, `pulse`, `spin`
- Animações de loading
- Efeitos de parallax

### Hover Effects
- `hover:scale-*`
- `hover:-translate-y-*`
- `group-hover:*` transforms

### Transições
- `transition-all`
- `transition-colors`
- `transition-transform`
- `transition-shadow`

## Como Testar

### No Navegador (Chrome/Edge)
1. Abra DevTools (F12)
2. Command Menu (Ctrl+Shift+P)
3. Digite "Emulate CSS prefers-reduced-motion"
4. Selecione "reduce"

### No Sistema Operacional

**Windows:**
- Configurações → Facilidade de Acesso → Exibir → Desmarcar "Mostrar animações"

**macOS:**
- Preferências do Sistema → Acessibilidade → Exibir → Marcar "Reduzir movimento"

**Linux:**
- Varia por distribuição, geralmente em configurações de acessibilidade

### Componente de Teste

Use o componente `ReducedMotionTest` para verificar a implementação:

```jsx
import ReducedMotionTest from './components/ui/reduced-motion-test';

// Em qualquer página para testar
<ReducedMotionTest />
```

## Benefícios da Implementação

### Acessibilidade
- Reduz enjoo e desconforto para usuários sensíveis
- Melhora experiência para usuários com distúrbios vestibulares
- Atende diretrizes WCAG 2.1 AA

### Performance
- Reduz uso de CPU/GPU em dispositivos com recursos limitados
- Melhora duração da bateria em dispositivos móveis
- Reduz carga de processamento

### Experiência do Usuário
- Respeita preferências do usuário
- Mantém funcionalidade completa
- Interface mais limpa e focada

## Manutenção

### Adicionando Novas Animações
Ao adicionar novas animações, certifique-se de incluí-las no bloco de reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .minha-nova-animacao {
    animation: none !important;
  }
}
```

### Testando Novas Features
Sempre teste novas funcionalidades com reduced motion ativado para garantir que:
1. A funcionalidade não quebra
2. A experiência permanece usável
3. Não há elementos que dependem exclusivamente de animação

## Conformidade WCAG

Esta implementação atende aos seguintes critérios:

- **WCAG 2.1 AA 2.3.3**: Animation from Interactions
- **WCAG 2.1 AAA 2.2.2**: Pause, Stop, Hide

## Arquivos Modificados

- `src/App.css`: Implementação principal consolidada
- `src/index.css`: Suporte adicional para animações específicas
- `src/components/ui/reduced-motion-test.jsx`: Componente de teste
- `src/docs/reduced-motion-implementation.md`: Esta documentação

## Conclusão

A implementação de suporte a reduced motion é abrangente e garante que todos os usuários tenham uma experiência confortável e acessível, independentemente de suas preferências ou necessidades de acessibilidade. O sistema é robusto, bem testado e fácil de manter.