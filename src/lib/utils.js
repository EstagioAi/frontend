import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Gera URL correta baseada no contexto do subdomínio
 * @param {string} path - caminho da rota
 * @param {string} targetSubdomain - subdomínio alvo ('empresas' ou null para domínio principal)
 * @param {string} currentSubdomain - subdomínio atual
 * @returns {string} URL completa ou relativa
 */
export function getUrlForSubdomain(path, targetSubdomain = null, currentSubdomain = null) {
  // Se estivermos no ambiente de desenvolvimento
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    // Para desenvolvimento local, usa parâmetros de query
    if (targetSubdomain === 'empresas') {
      return `${path}${path.includes('?') ? '&' : '?'}subdomain=empresas`;
    }
    return path;
  }

  // Se o subdomínio alvo é diferente do atual, gera URL absoluta
  if (targetSubdomain !== currentSubdomain) {
    const baseUrl = targetSubdomain 
      ? `https://${targetSubdomain}.estagioai.com`
      : 'https://estagioai.com';
    return `${baseUrl}${path}`;
  }

  // Se são o mesmo subdomínio, usa URL relativa
  return path;
}

/**
 * Links específicos para empresas que devem sempre ir para o subdomínio
 */
export const COMPANY_ROUTES = [
  '/suporte-para-empresas',
  '/como-publicar-vagas', 
  '/planos-e-precos',
  '/contato-comercial',
  '/termos-de-servico'
];

/**
 * Links que devem sempre ir para o domínio principal
 */
export const MAIN_DOMAIN_ROUTES = [
  '/sobre',
  '/blog',
  '/vagas',
  '/empresas',
  '/universidades', 
  '/radar-de-vagas',
  '/modelos-de-curriculo',
  '/verificador-de-curriculo-ats',
  '/como-melhorar-seu-perfil',
  '/suporte-para-universitarios',
  '/central-de-ajuda'
];

/**
 * Determina qual subdomínio usar para uma rota específica
 */
export function getTargetSubdomainForRoute(path) {
  if (COMPANY_ROUTES.includes(path)) {
    return 'empresas';
  }
  if (MAIN_DOMAIN_ROUTES.includes(path)) {
    return null; // domínio principal
  }
  
  // Para login/register, mantém no subdomínio atual
  if (['/login', '/register', '/contato'].includes(path)) {
    return undefined; // não muda de subdomínio
  }
  
  return null; // padrão: domínio principal
}
