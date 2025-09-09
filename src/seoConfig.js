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
    "/em-construcao": {
      title: "Página em construção — Estágio AI",
      description: "Estamos preparando novidades para você. Volte em breve!",
    },
  };

  return map[path] || {};
}

