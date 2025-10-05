# Guia de Variáveis CSS - EstágioAI

## 📋 Visão Geral

Este documento lista todas as classes utilitárias CSS disponíveis para substituir valores hardcoded no código.

**Objetivo**: Facilitar manutenção e garantir consistência visual em todo o projeto.

---

## 🎨 Cores de Texto

### Cores Principais
```css
.text-primary-ds      /* #0f0f0f - Texto principal (títulos) */
.text-secondary-ds    /* rgba(15,15,15,0.7) - Texto secundário */
.text-tertiary-ds     /* rgba(15,15,15,0.5) - Texto auxiliar */
.text-muted-ds        /* rgba(15,15,15,0.4) - Placeholders */
.text-subtle-ds       /* rgba(15,15,15,0.3) - Metadados */
.text-green-ds        /* #82f7b3 - Verde principal */
.text-green-hover-ds  /* #6ee5a1 - Verde hover */
.text-white-ds        /* white - Texto branco */
```

### Texto Preto com Opacidades Específicas
```css
.text-black-80        /* rgba(15,15,15,0.8) */
.text-black-75        /* rgba(15,15,15,0.75) */
.text-black-70        /* rgba(15,15,15,0.7) */
.text-black-60        /* rgba(15,15,15,0.6) */
.text-black-50        /* rgba(15,15,15,0.5) */
.text-black-40        /* rgba(15,15,15,0.4) */
.text-black-35        /* rgba(15,15,15,0.35) */
.text-black-30        /* rgba(15,15,15,0.3) */
.text-black-25        /* rgba(15,15,15,0.25) */
```

### Texto Verde com Opacidades
```css
.text-green-70        /* rgba(130,247,179,0.7) */
```

---

## 🎨 Cores de Background

### Backgrounds Principais
```css
.bg-primary-ds        /* #f8f8f8 - Cinza claro */
.bg-secondary-ds      /* #f5f4ed - Bege claro */
.bg-white-ds          /* #ffffff - Branco */
.bg-black-ds          /* #0f0f0f - Preto */
.bg-black-hover-ds    /* #1a1a1a - Preto hover */
.bg-green-ds          /* #82f7b3 - Verde */
.bg-green-hover-ds    /* #6ee5a1 - Verde hover */
```

### Backgrounds Verde com Opacidades
```css
.bg-green-05          /* rgba(130,247,179,0.05) */
.bg-green-08          /* rgba(130,247,179,0.08) */
.bg-green-10          /* rgba(130,247,179,0.1) */
.bg-green-15          /* rgba(130,247,179,0.15) */
.bg-green-18          /* rgba(130,247,179,0.18) */
.bg-green-20          /* rgba(130,247,179,0.2) */
.bg-green-25          /* rgba(130,247,179,0.25) */
.bg-green-30          /* rgba(130,247,179,0.3) */
.bg-green-35          /* rgba(130,247,179,0.35) */
.bg-green-40          /* rgba(130,247,179,0.4) */
.bg-green-70          /* rgba(130,247,179,0.7) */
.bg-green-90          /* rgba(130,247,179,0.9) */
```

### Backgrounds Preto com Opacidades
```css
.bg-black-05          /* rgba(15,15,15,0.05) */
.bg-black-08          /* rgba(15,15,15,0.08) */
.bg-black-10          /* rgba(15,15,15,0.1) */
.bg-black-15          /* rgba(15,15,15,0.15) */
.bg-black-20          /* rgba(15,15,15,0.2) */
```

### Backgrounds Branco com Opacidades
```css
.bg-white-05          /* rgba(255,255,255,0.05) */
.bg-white-10          /* rgba(255,255,255,0.1) */
.bg-white-25          /* rgba(255,255,255,0.25) */
.bg-white-40          /* rgba(255,255,255,0.4) */
.bg-white-70          /* rgba(255,255,255,0.7) */
.bg-white-80          /* rgba(255,255,255,0.8) */
```

---

## 🎨 Cores de Borda

### Bordas Principais
```css
.border-light-ds      /* rgba(15,15,15,0.1) - Borda sutil */
.border-medium-ds     /* rgba(15,15,15,0.2) - Borda visível */
.border-green-ds      /* #82f7b3 - Borda verde */
.border-green-hover-ds /* #6ee5a1 - Borda verde hover */
```

### Bordas Preto com Opacidades
```css
.border-black-05      /* rgba(15,15,15,0.05) */
.border-black-08      /* rgba(15,15,15,0.08) */
.border-black-10      /* rgba(15,15,15,0.1) */
.border-black-15      /* rgba(15,15,15,0.15) */
.border-black-20      /* rgba(15,15,15,0.2) */
.border-black-25      /* rgba(15,15,15,0.25) */
```

### Bordas Verde com Opacidades
```css
.border-green-08      /* rgba(130,247,179,0.08) */
.border-green-10      /* rgba(130,247,179,0.1) */
.border-green-15      /* rgba(130,247,179,0.15) */
.border-green-20      /* rgba(130,247,179,0.2) */
.border-green-25      /* rgba(130,247,179,0.25) */
.border-green-30      /* rgba(130,247,179,0.3) */
.border-green-35      /* rgba(130,247,179,0.35) */
.border-green-40      /* rgba(130,247,179,0.4) */
```

### Bordas Branco
```css
.border-white-25      /* rgba(255,255,255,0.25) */
```

---

## 📏 Largura de Borda

```css
.border-1-ds          /* 1px */
.border-2-ds          /* 2px */
```

---

## 🔲 Border Radius

```css
.rounded-sm-ds        /* 8px */
.rounded-md-ds        /* 12px */
.rounded-lg-ds        /* 16px */
.rounded-xl-ds        /* 20px */
.rounded-2xl-ds       /* 24px */
.rounded-full-ds      /* 9999px - Circular */
```

---

## 🌑 Sombras

```css
.shadow-sm-ds         /* Sombra mínima */
.shadow-md-ds         /* Sombra média */
.shadow-lg-ds         /* Sombra grande */
.shadow-xl-ds         /* Sombra extra grande */
.shadow-2xl-ds        /* Sombra máxima */
.shadow-green-ds      /* Sombra verde */
.shadow-green-strong-ds /* Sombra verde forte */
```

---

## 📝 Exemplos de Uso

### Antes (Hardcoded)
```jsx
<div className="bg-[#f8f8f8] text-[#0f0f0f] border-2 border-[#0f0f0f]/10">
  <h1 className="text-[#0f0f0f]">Título</h1>
  <p className="text-[#0f0f0f]/70">Descrição</p>
  <button className="bg-[#82f7b3] text-[#0f0f0f] hover:bg-[#6ee5a1]">
    Botão
  </button>
</div>
```

### Depois (Com Classes Utilitárias)
```jsx
<div className="bg-primary-ds text-primary-ds border-2 border-black-10">
  <h1 className="text-primary-ds">Título</h1>
  <p className="text-black-70">Descrição</p>
  <button className="bg-green-ds text-primary-ds hover:bg-green-hover-ds">
    Botão
  </button>
</div>
```

---

## 🔄 Mapeamento de Cores Comuns

| Valor Hardcoded | Classe Utilitária | Uso |
|----------------|-------------------|-----|
| `bg-[#f8f8f8]` | `.bg-primary-ds` | Background principal |
| `bg-[#0f0f0f]` | `.bg-black-ds` | Background preto |
| `bg-[#82f7b3]` | `.bg-green-ds` | Background verde |
| `bg-[#6ee5a1]` | `.bg-green-hover-ds` | Background verde hover |
| `text-[#0f0f0f]` | `.text-primary-ds` | Texto principal |
| `text-[#0f0f0f]/70` | `.text-black-70` | Texto secundário |
| `text-[#0f0f0f]/50` | `.text-black-50` | Texto auxiliar |
| `text-[#82f7b3]` | `.text-green-ds` | Texto verde |
| `border-[#0f0f0f]/10` | `.border-black-10` | Borda sutil |
| `border-[#82f7b3]` | `.border-green-ds` | Borda verde |
| `border-[#82f7b3]/30` | `.border-green-30` | Borda verde 30% |

---

## ✅ Benefícios

1. **Manutenção Fácil**: Alterar cores em um único lugar (App.css)
2. **Consistência**: Mesmas cores em todo o projeto
3. **Legibilidade**: Nomes semânticos ao invés de valores hex
4. **Performance**: Menos código duplicado
5. **Escalabilidade**: Fácil adicionar novos temas

---

## 📚 Referências

- Arquivo principal: `src/App.css`
- Documentação completa: `src/docs/DESIGN_SYSTEM.md`
- Guia de padronização: `src/docs/PADRONIZACAO_GUIA.md`

