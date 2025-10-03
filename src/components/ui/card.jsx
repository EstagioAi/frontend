import React from 'react';
import './card.css';

/**
 * Card - Componente base de card com bordas coral suaves
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Conteúdo do card
 * @param {string} props.className - Classes CSS adicionais
 * @param {Function} props.onClick - Handler de click (opcional)
 * @param {boolean} props.hoverable - Se deve ter efeito hover (padrão: true)
 * @param {Object} props.style - Estilos inline adicionais
 */
const Card = ({ 
  children, 
  className = '', 
  onClick, 
  hoverable = true,
  style,
  ...props 
}) => {
  const cardClasses = [
    'card',
    hoverable && 'card--hoverable',
    onClick && 'card--clickable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
