# Organização de imagens

Este projeto foi reorganizado para centralizar e otimizar os assets visuais.

## Estrutura nova

As imagens públicas ficam em `public/images/` nas seguintes categorias:

- `logos/` — marcas e ícones de marca (logo.svg, favicon.ico, etc.)
- `companies/` — logos de empresas (amazon.webp, google.webp, etc.)
- `backgrounds/` — fundos e imagens de herói
- `blog/` — capas usadas nas postagens do blog
- `icons/` — ícones em SVG ou PNG de UI (envelope, github, etc.)
- `misc/` — demais imagens não classificadas acima

## Formatos

- Todo raster foi convertido para `.webp` (qualidade 82; imagens com alpha usam qualidade 90).
- SVGs e ICOs foram mantidos nos formatos originais.

## Como migrar/otimizar novas imagens

1. Coloque seus arquivos originais em `public/` (ou `src/assets/`).
2. Rode o migrador para converter e mover para a nova estrutura:
   
   - pnpm migrate:images
   
3. Atualize o código para referenciar `/images/<categoria>/<arquivo>.webp`.

O script gera `scripts/images-manifest.json` com um mapa de caminhos antigos → novos para facilitar substituições.

## Observações

- O Vite serve arquivos de `public/` na raiz do site: `/images/...`.
- Para OG/Twitter, usamos `images/backgrounds/estagioai-background.webp`. Se precisar compatibilidade máxima com crawlers antigos, adicione um PNG fallback.
