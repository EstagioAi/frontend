import React from 'react';
import { Link } from 'react-router-dom';
import { useSubdomain } from '@/hooks/use-subdomain';
import { getUrlForSubdomain, getTargetSubdomainForRoute } from '@/lib/utils';

/**
 * Componente Link inteligente que gerencia navegação entre subdomínios
 */
export const SmartLink = ({ to, children, className, forceSubdomain, ...props }) => {
  const { subdomain: currentSubdomain } = useSubdomain();
  
  // Se forceSubdomain é fornecido, usa ele; senão determina automaticamente
  let targetSubdomain;
  if (forceSubdomain !== undefined) {
    targetSubdomain = forceSubdomain;
  } else {
    targetSubdomain = getTargetSubdomainForRoute(to);
    // Se targetSubdomain é undefined, mantém no subdomínio atual
    targetSubdomain = targetSubdomain === undefined ? currentSubdomain : targetSubdomain;
  }
  
  // Gera a URL correta
  const href = getUrlForSubdomain(to, targetSubdomain, currentSubdomain);
  
  // Se a URL é externa (diferente subdomínio), usa href em vez de to
  if (href.startsWith('http')) {
    return (
      <a 
        href={href} 
        className={`focus:outline-none focus:ring-4 focus:ring-green-20 rounded ${className || ''}`} 
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Se é a mesma página/subdomínio, usa Link normal do React Router
  return (
    <Link 
      to={href} 
      className={`focus:outline-none focus:ring-4 focus:ring-green-20 rounded ${className || ''}`} 
      {...props}
    >
      {children}
    </Link>
  );
};

export default SmartLink;