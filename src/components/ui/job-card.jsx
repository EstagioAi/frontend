import React from 'react';
import Card from './card';
import { Badge } from './badge';
import './job-card.css';

/**
 * JobCard - Card para exibir vagas de emprego/estágio
 * 
 * @param {Object} props
 * @param {string} props.logo - URL do logo da empresa
 * @param {string} props.company - Nome da empresa
 * @param {string} props.title - Título da vaga
 * @param {string} props.location - Localização
 * @param {string} props.type - Tipo de vaga (Estágio, CLT, PJ, etc)
 * @param {string} props.level - Nível (Júnior, Pleno, etc)
 * @param {string} props.badge - Badge opcional (Novo, Destaque, etc)
 * @param {string} props.badgeColor - Cor do badge (yellow, mint, lavender, peach)
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
  badgeColor = 'mint',
  onClick,
  className = '',
  ...props 
}) => {
  return (
    <Card 
      className={`job-card ${className}`}
      onClick={onClick}
      hoverable={true}
      {...props}
    >
      {/* Header com logo e badge */}
      <div className="job-card__header">
        <div className="job-card__logo">
          {logo ? (
            <img src={logo} alt={`${company} logo`} />
          ) : (
            <div className="job-card__logo-placeholder">
              {company?.charAt(0) || '?'}
            </div>
          )}
        </div>
        {badge && (
          <Badge variant={badgeColor} size="sm">
            {badge}
          </Badge>
        )}
      </div>

      {/* Conteúdo principal */}
      <div className="job-card__content">
        <h3 className="job-card__title">{title}</h3>
        <p className="job-card__company">{company}</p>
      </div>

      {/* Meta informações */}
      <div className="job-card__meta">
        {location && (
          <span className="job-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="sr-only">Localização:</span>
            {location}
          </span>
        )}
        {type && (
          <span className="job-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span className="sr-only">Tipo:</span>
            {type}
          </span>
        )}
        {level && (
          <span className="job-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span className="sr-only">Nível:</span>
            {level}
          </span>
        )}
      </div>
    </Card>
  );
};

export default JobCard;
