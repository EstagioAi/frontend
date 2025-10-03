import React from 'react';
import './error-state.css';

/**
 * ErrorState Component - Displays error messages with coral icon
 * Used when content fails to load or an error occurs
 */
export const ErrorState = ({
  title = 'Algo deu errado',
  message = 'Não foi possível carregar o conteúdo. Por favor, tente novamente.',
  variant = 'default',
  onRetry,
  actions,
  className = ''
}) => {
  const ErrorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );

  return (
    <div className={`error-state ${variant} ${className}`}>
      <div className="error-state-icon">
        <ErrorIcon />
      </div>
      <div className="error-state-content">
        <h3 className="error-state-title">{title}</h3>
        <p className="error-state-message">{message}</p>
        {(onRetry || actions) && (
          <div className="error-state-actions">
            {onRetry && (
              <button
                onClick={onRetry}
                className="btn btn-primary"
                aria-label="Tentar novamente"
              >
                Tentar Novamente
              </button>
            )}
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
