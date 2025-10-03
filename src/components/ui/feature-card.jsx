import React from 'react';
import Card from './card';
import './feature-card.css';

/**
 * FeatureCard - Card para exibir features com ícone, título e descrição
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Ícone ou elemento SVG
 * @param {string} props.title - Título da feature
 * @param {string} props.description - Descrição da feature
 * @param {string} props.iconBg - Cor de background do ícone (yellow, mint, lavender, peach)
 * @param {string} props.className - Classes CSS adicionais
 */
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconBg = 'peach',
  className = '',
  ...props 
}) => {
  return (
    <Card className={`feature-card ${className}`} {...props}>
      <div className={`feature-card__icon feature-card__icon--${iconBg}`}>
        {icon}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </Card>
  );
};

export default FeatureCard;
