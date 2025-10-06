import React from 'react';

/**
 * Card - Componente base de card com design verde minimalista
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Conteúdo do card
 * @param {string} props.className - Classes CSS adicionais
 * @param {Function} props.onClick - Handler de click (opcional)
 * @param {boolean} props.hoverable - Se deve ter efeito hover (padrão: true)
 * @param {'default' | 'article' | 'cta' | 'feature'} props.variant - Variante do card
 * @param {string} props.image - URL da imagem (para variant article)
 * @param {Object} props.style - Estilos inline adicionais
 */
const Card = ({ 
  children, 
  className = '', 
  onClick, 
  hoverable = true,
  variant = 'default',
  image,
  style,
  ...props 
}) => {
  // Base classes para o REDESIGN 2025
  const baseClasses = 'rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300';
  
  // Hover classes - REDESIGN 2025
  const hoverClasses = hoverable ? 'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]' : '';
  
  // Clickable classes
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-ds focus-visible:ring-offset-2' : '';
  
  // Variant-specific classes
  const variantClasses = {
    default: 'p-8',
    article: 'group relative flex h-full flex-col overflow-hidden',
    cta: 'px-8 py-12 text-center',
    feature: 'p-8'
  };
  
  const cardClasses = [
    baseClasses,
    hoverClasses,
    clickableClasses,
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ');

  // Para variant article com imagem
  if (variant === 'article' && image) {
    return (
      <article 
        className={cardClasses}
        onClick={onClick}
        style={style}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? 'button' : 'article'}
        aria-label={onClick ? 'Clique para ver detalhes do artigo' : undefined}
        onKeyDown={onClick ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(e);
          }
        } : undefined}
        {...props}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt="" 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            role="presentation"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          {children}
        </div>
      </article>
    );
  }

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      style={style}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? 'Clique para interagir com este card' : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
