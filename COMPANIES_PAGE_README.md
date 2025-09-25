# Página para Empresas - EstágioAI

## 📋 Visão Geral

Foi criada uma nova página dedicada para empresas que funciona através do subdomínio `empresas.estagioai.com`. Esta página oferece uma experiência otimizada e focada para empresas que desejam contratar talentos universitários.

## 🚀 Características

### Detecção Inteligente de Subdomínio
- **Hook personalizado**: `useSubdomain()` para detectar automaticamente se o usuário está acessando o subdomínio de empresas
- **Roteamento condicional**: O App.jsx renderiza diferentes conjuntos de rotas baseado no subdomínio
- **Suporte a desenvolvimento local**: Funciona tanto em produção quanto em desenvolvimento

### Página Dedicada para Empresas
A nova página inclui seções específicas:

1. **Hero Section** - Apresentação impactante com:
   - Título focado em recrutamento de talentos
   - Estatísticas relevantes (50k+ estudantes, 500+ empresas, 95% taxa de contratação)
   - Preview de dashboard de recrutamento
   - CTAs para publicar vagas gratuitamente

2. **Features Section** - Recursos da plataforma:
   - Busca inteligente com filtros avançados
   - Match preciso usando IA
   - Comunicação direta com candidatos
   - Analytics completo
   - Processo ágil de contratação
   - Perfis verificados

3. **Testimonials Section** - Cases de sucesso:
   - Depoimentos reais de empresas
   - Estatísticas de contratação
   - Logos de empresas parceiras
   - Métricas de performance

4. **CTA Section** - Chamada para ação final:
   - Design dark premium
   - Benefícios destacados
   - Garantia de satisfação
   - Multiple CTAs

## 🛠 Implementação Técnica

### Arquivos Criados/Modificados

**Novos Hooks:**
- `src/hooks/use-subdomain.js` - Hook para detecção de subdomínios

**Novos Componentes:**
- `src/components/companies/sections/CompaniesHeroSection.jsx`
- `src/components/companies/sections/CompaniesFeaturesSection.jsx`
- `src/components/companies/sections/CompaniesTestimonialsSection.jsx`
- `src/components/companies/sections/CompaniesCTASection.jsx`

**Nova Página:**
- `src/pages/CompaniesPage.jsx`

**Modificações:**
- `src/App.jsx` - Roteamento condicional baseado em subdomínio
- `vite.config.js` - Configuração para suporte a subdomínios locais

### Como Funciona

1. **Detecção de Subdomínio**: O hook `useSubdomain()` verifica o hostname atual
2. **Roteamento Condicional**: O App.jsx renderiza diferentes rotas baseado no subdomínio
3. **Experiência Otimizada**: A página de empresas tem conteúdo específico e otimizado

## 🧪 Como Testar

### Em Desenvolvimento Local

**Opção 1: Usando parâmetro URL**
```
http://localhost:3000/?subdomain=empresas
```

**Opção 2: Editando arquivo hosts (Windows)**
1. Abra o arquivo `C:\Windows\System32\drivers\etc\hosts` como administrador
2. Adicione a linha:
   ```
   127.0.0.1 empresas.localhost
   ```
3. Acesse: `http://empresas.localhost:3000`

**Opção 3: Usando empresas.localhost:3000 diretamente**
- O browser pode resolver automaticamente para localhost

### Em Produção

O subdomínio `empresas.estagioai.com` deve ser configurado no DNS para apontar para o mesmo servidor da aplicação principal.

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: Azul (#3B82F6) - Profissionalismo e confiança
- **Secundária**: Roxo (#8B5CF6) - Inovação e tecnologia
- **Accent**: Verde (#10B981) - Sucesso e crescimento

### Elementos Visuais
- **Gradientes sutis**: Para criar profundidade
- **Cards interativos**: Com hover effects
- **Ícones consistentes**: Lucide React para uniformidade
- **Tipografia**: Hierarquia clara com diferentes pesos

### Responsividade
- **Mobile-first**: Layout otimizado para todos os dispositivos
- **Grid systems**: Flexíveis e adaptativos
- **Breakpoints**: Bem definidos para diferentes telas

## 🚀 Deploy e Configuração

### DNS Configuration
Para produção, configure o DNS:
```
empresas.estagioai.com CNAME estagioai.com
```

### Vercel Configuration
Se usando Vercel, adicione ao `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "host",
          "value": "empresas.estagioai.com"
        }
      ],
      "destination": "https://estagioai.com/$1"
    }
  ]
}
```

## 📈 Métricas e Analytics

### Objetivos de Conversão
- Publicação de vagas
- Cadastro de empresas
- Agendamento de demos
- Download de materiais

### Tracking Sugerido
- Google Analytics com subdomínio tracking
- Hotjar para heatmaps
- Eventos personalizados para CTAs

## 🔧 Manutenção

### Performance
- Lazy loading implementado
- Componentes otimizados
- Imagens responsivas

### SEO
- Meta tags específicas para empresas
- Structured data para rich snippets
- URLs amigáveis

### Acessibilidade
- Semantic HTML
- ARIA labels onde necessário
- Contraste adequado
- Navegação por teclado

## 🤝 Contribuindo

Para adicionar novas seções ou modificar existentes:

1. Crie componentes em `src/components/companies/sections/`
2. Importe na `CompaniesPage.jsx`
3. Mantenha consistência visual
4. Teste em diferentes dispositivos

## 📞 Suporte

Para dúvidas ou problemas:
- Documentação técnica no código
- Comentários inline nos componentes
- Estrutura bem organizada para manutenção