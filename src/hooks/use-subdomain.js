import { useMemo } from 'react';

/**
 * Hook para detectar e gerenciar subdomínios
 * @returns {Object} objeto com informações do subdomínio
 */
export const useSubdomain = () => {
  const subdomain = useMemo(() => {
    if (typeof window === 'undefined') return null;
    
    const hostname = window.location.hostname;
    
    // Para desenvolvimento local
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      // Verifica se há um parâmetro na URL para simular subdomínio
      const urlParams = new URLSearchParams(window.location.search);
      const mockSubdomain = urlParams.get('subdomain');
      return mockSubdomain || null;
    }
    
    // Para produção
    const parts = hostname.split('.');
    
    // Se tiver pelo menos 3 partes (ex: empresas.estagioai.com)
    if (parts.length >= 3) {
      const sub = parts[0];
      // Retorna apenas se não for 'www'
      return sub !== 'www' ? sub : null;
    }
    
    return null;
  }, []);

  const isCompaniesSubdomain = subdomain === 'empresas';
  const isMainDomain = !subdomain;

  return {
    subdomain,
    isCompaniesSubdomain,
    isMainDomain,
    hostname: typeof window !== 'undefined' ? window.location.hostname : '',
  };
};