import React from 'react';
import Card from './card';

/**
 * FeatureCard - Card para exibir features com ícone, título e descrição
 * Atualizado para o design verde minimalista
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Ícone ou elemento SVG
 * @param {string} props.title - Título da feature
 * @param {string} props.description - Descrição da feature
 * @param {string} props.className - Classes CSS adicionais
 */
const FeatureCard = ({
  icon,
  title,
  description,
  className = '',
  ...props
}) => {
  return (
    <Card variant="feature" className={`${className}`} {...props}>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-green-ds/10 text-primary-ds">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-primary-ds">{title}</h3>
      <p className="text-sm leading-relaxed text-black-70">{description}</p>
    </Card>
  );
};

export default FeatureCard;
