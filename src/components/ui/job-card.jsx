import React from 'react';
import Card from './card';
import { Badge } from './badge';

/**
 * JobCard - Card para exibir vagas de emprego/estágio
 * Atualizado para o design verde minimalista
 * 
 * @param {Object} props
 * @param {string} props.logo - URL do logo da empresa
 * @param {string} props.company - Nome da empresa
 * @param {string} props.title - Título da vaga
 * @param {string} props.location - Localização
 * @param {string} props.type - Tipo de vaga (Estágio, CLT, PJ, etc)
 * @param {string} props.level - Nível (Júnior, Pleno, etc)
 * @param {string} props.badge - Badge opcional (Novo, Destaque, etc)
 * @param {Function} props.onClick - Handler de click
 * @param {string} props.className - Classes CSS adicionais
 */
const JobCard = ({ 
  logo,
  company,
  title,
  location,
  type,
  level,
  badge,
  onClick,
  className = '',
  ...props 
}) => {
  const jobDescription = `Vaga de ${title} na empresa ${company}${location ? `, localizada em ${location}` : ''}${type ? `, tipo ${type}` : ''}${level ? `, nível ${level}` : ''}`;
  
  return (
    <Card 
      variant="default"
      className={className}
      onClick={onClick}
      hoverable={true}
      role="article"
      aria-label={onClick ? `Clique para ver detalhes: ${jobDescription}` : jobDescription}
      {...props}
    >
      {/* Header com logo e badge */}
      <header className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-ds" role="img" aria-label={`Logo da empresa ${company}`}>
          {logo ? (
            <img src={logo} alt="" className="h-8 w-8 rounded object-cover" role="presentation" />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded bg-green-ds/20 text-sm font-bold text-primary-ds" aria-label={`Inicial da empresa ${company}`}>
              {company?.charAt(0) || '?'}
            </div>
          )}
        </div>
        {badge && (
          <Badge variant="outline" color="green" role="status" aria-label={`Destaque: ${badge}`}>
            {badge}
          </Badge>
        )}
      </header>

      {/* Conteúdo principal */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-bold text-primary-ds line-clamp-2">{title}</h3>
        <p className="text-base font-medium text-black-70">{company}</p>
      </div>

      {/* Meta informações */}
      <footer className="flex flex-wrap gap-3 text-sm text-black-50" role="group" aria-label="Informações da vaga">
        {location && (
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="sr-only">Localização:</span>
            <span aria-label={`Localização: ${location}`}>{location}</span>
          </span>
        )}
        {type && (
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span className="sr-only">Tipo de contrato:</span>
            <span aria-label={`Tipo de contrato: ${type}`}>{type}</span>
          </span>
        )}
        {level && (
          <span className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span className="sr-only">Nível de experiência:</span>
            <span aria-label={`Nível de experiência: ${level}`}>{level}</span>
          </span>
        )}
      </footer>
    </Card>
  );
};

export default JobCard;
