import React from 'react';

/**
 * Componente de Loading moderno e elegante
 * Usado para estados de carregamento em toda a aplicação
 */
const LoadingSpinner = ({ size = 'md', color = 'green', text = null, fullScreen = false }) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
    xl: 'h-16 w-16 border-4',
  };

  const colorClasses = {
    green: 'border-green-ds border-t-transparent',
    black: 'border-black border-t-transparent',
    white: 'border-white border-t-transparent',
  };

  const spinnerContent = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
        role="status"
        aria-label="Carregando"
      />
      {text && (
        <p className="text-sm font-medium text-gray-600 animate-pulse">
          {text}
        </p>
      )}
      <span className="sr-only">Carregando...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
};

/**
 * Skeleton loader para cards e conteúdo
 */
export const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`animate-pulse space-y-4 ${className}`}>
      <div className="h-48 bg-gray-200 rounded-2xl skeleton" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded skeleton w-3/4" />
        <div className="h-4 bg-gray-200 rounded skeleton w-1/2" />
      </div>
    </div>
  );
};

/**
 * Skeleton para lista de itens
 */
export const SkeletonList = ({ items = 3, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="animate-pulse flex items-center space-x-4">
          <div className="rounded-full bg-gray-200 h-12 w-12 skeleton" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded skeleton w-3/4" />
            <div className="h-3 bg-gray-200 rounded skeleton w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Skeleton para texto
 */
export const SkeletonText = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded skeleton ${
            index === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

/**
 * Loading dots animation
 */
export const LoadingDots = ({ color = 'green' }) => {
  const colorClasses = {
    green: 'bg-green-ds',
    black: 'bg-black',
    white: 'bg-white',
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className={`h-2 w-2 rounded-full ${colorClasses[color]} animate-bounce`}
        style={{ animationDelay: '0ms' }}
      />
      <div
        className={`h-2 w-2 rounded-full ${colorClasses[color]} animate-bounce`}
        style={{ animationDelay: '150ms' }}
      />
      <div
        className={`h-2 w-2 rounded-full ${colorClasses[color]} animate-bounce`}
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
};

/**
 * Pulse loader (círculo pulsante)
 */
export const PulseLoader = ({ size = 'md', color = 'green' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const colorClasses = {
    green: 'bg-green-ds',
    black: 'bg-black',
    white: 'bg-white',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full opacity-75 animate-pulse`}
      />
    </div>
  );
};

export default LoadingSpinner;
