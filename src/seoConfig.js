// Mapear SEO por rota. Ajuste os textos conforme sua proposta de valor.

export default function getSEO(pathname) {
  // Normalizar sem trailing slash
  const path = pathname.replace(/\/$/, "");

  // Dinâmico para páginas de empresas
  if (path.startsWith("/empresas")) {
    return {
      title: "Vagas de Estágio por Empresa — Estágio AI",
      description: "Explore oportunidades de estágio abertas por empresas parceiras e candidate-se com rapidez e transparência.",
    };
  }

  // Dinâmico: páginas de blog (detalhe do post)
  if (/^\/blog\//.test(path)) {
    // O componente do Post definirá tags completas; aqui fornecemos um fallback seguro
    return {
      title: "Artigo do Blog — Estágio AI",
      description: "Conteúdos, novidades e dicas para impulsionar sua carreira de estágio.",
      ogType: "article",
    };
  }

  const map = {
    "": {
      title: "Estágio AI — Encontre vagas de estágio com rapidez e transparência",
      description: "Conectamos universitários e empresas com tecnologia e IA para agilizar a busca por estágios e melhorar a compatibilidade das candidaturas.",
    },
    "/": {
      title: "Estágio AI — Encontre vagas de estágio com rapidez e transparência",
      description: "Conectamos universitários e empresas com tecnologia e IA para agilizar a busca por estágios e melhorar a compatibilidade das candidaturas.",
    },
    "/login": {
      title: "Entrar — Estágio AI",
      description: "Acesse sua conta para acompanhar candidaturas, receber recomendações e salvar vagas de estágio.",
    },
    "/register": {
      title: "Criar conta — Estágio AI",
      description: "Cadastre-se gratuitamente para encontrar vagas de estágio alinhadas ao seu perfil e objetivos.",
    },
    "/termos-de-uso": {
      title: "Termos de Uso — Estágio AI",
      description: "Leia os Termos de Uso do Estágio AI e entenda as condições para utilização da plataforma.",
    },
    "/termos-de-servico": {
      title: "Termos de Serviço — Estágio AI",
      description: "Regras e responsabilidades relacionadas ao uso do Estágio AI por candidatos e empresas.",
    },
    "/politica-de-privacidade": {
      title: "Política de Privacidade — Estágio AI",
      description: "Saiba como coletamos, usamos e protegemos seus dados pessoais na plataforma Estágio AI.",
    },
    "/suporte-para-universitarios": {
      title: "Suporte para Universitários — Estágio AI",
      description: "Dicas, materiais e respostas para ajudar universitários a encontrarem o estágio ideal.",
    },
    "/central-de-ajuda": {
      title: "Central de Ajuda — Estágio AI",
      description: "Encontre respostas rápidas para dúvidas frequentes sobre cadastro, candidaturas e funcionalidades.",
    },
    "/como-melhorar-seu-perfil": {
      title: "Como melhorar seu perfil — Estágio AI",
      description: "Boas práticas para destacar seu perfil e aumentar suas chances em vagas de estágio.",
    },
    "/suporte-para-empresas": {
      title: "Suporte para Empresas — Estágio AI",
      description: "Orientações para empresas: como publicar vagas, avaliar candidatos e otimizar seus processos.",
    },
    "/como-publicar-vagas": {
      title: "Como publicar vagas — Estágio AI",
      description: "Guia passo a passo para publicar vagas de estágio e atrair os melhores candidatos.",
    },
    "/planos-e-precos": {
      title: "Planos e Preços — Estágio AI",
      description: "Compare planos da Estágio AI para empresas e escolha a opção ideal para o seu recrutamento.",
    },
    "/contato-comercial": {
      title: "Contato Comercial — Estágio AI",
      description: "Fale com nosso time para parcerias, demonstrações e condições para sua empresa.",
    },

	    "/sobre": {
	      title: "Sobre — Estágio AI",
	      description: "Conheça nossa missão, valores e como ajudamos universitários e empresas.",
	    },
	    "/blog": {
	      title: "Blog — Estágio AI",
        description: "Conteúdos, novidades e dicas para impulsionar sua carreira de estágio.",
        keywords: [
          "blog estágio",
          "como conseguir estágio",
          "currículo para estágio",
          "entrevista de estágio",
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog — Estágio AI",
          description: "Conteúdos e guias práticos para universitários e empresas.",
          url: "https://estagioai.com/blog",
        },
	    },
	    "/mural-de-vagas": {
	      title: "Mural de Vagas — Estágio AI",
	      description: "Veja oportunidades recentes e acompanhe sua compatibilidade.",
	    },
	    "/contato": {
	      title: "Contato — Estágio AI",
	      description: "Fale com nossa equipe: dúvidas, sugestões ou parcerias.",
	    },

      "/modelos-de-curriculo": {
        title: "Modelos de Currículo — Estágio AI",
        description: "Mais de 50 modelos modernos e compatíveis com ATS para universitários. Escolha, personalize e gere seu PDF em minutos.",
        keywords: [
          "modelos de currículo",
          "currículo para estágio",
          "currículo ATS",
          "template de currículo",
          "currículo grátis"
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Modelos de Currículo — Estágio AI",
          description: "Coleção de modelos de currículo compatíveis com ATS e aprovados por recrutadores.",
          url: "https://estagioai.com/modelos-de-curriculo"
        }
      },

      "/verificador-de-curriculo-ats": {
        title: "Verificador de Currículo ATS — Estágio AI",
        description: "Cole seu currículo e receba um diagnóstico instantâneo de compatibilidade com ATS, com sugestões de melhoria.",
        keywords: [
          "verificador de currículo",
          "ATS",
          "analisar currículo",
          "otimizar currículo",
          "compatibilidade ATS"
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Verificador de Currículo ATS — Estágio AI",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Ferramenta para avaliar e otimizar currículos para sistemas de triagem (ATS).",
          url: "https://estagioai.com/verificador-de-curriculo-ats"
        }
      },

    "/em-construcao": {
      title: "Página em construção — Estágio AI",
      description: "Estamos preparando novidades para você. Volte em breve!",
    },
  };

  return map[path] || {};
}

