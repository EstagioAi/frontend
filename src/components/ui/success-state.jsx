import React from 'react';
import './success-state.css';

/**
 * SuccessState Component - Displays success messages with mint green
 * Used to confirm successful actions or operations
 */
export const SuccessState = ({
  title = 'Sucesso!',
  message = 'Operação realizada com sucesso.',
  variant = 'default',
  autoClose = false,
  duration = 3000,
  onClose,
  actions,
  className = ''
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (autoClose && duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  if (!isVisible) return null;

  const SuccessIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <div className={`success-state ${variant} ${className}`}>
      <div className="success-state-icon">
        <SuccessIcon />
      </div>
      <div className="success-state-content">
        <h3 className="success-state-title">{title}</h3>
        <p className="success-state-message">{message}</p>
        {actions && (
          <div className="success-state-actions">
            {actions}
          </div>
        )}
      </div>
      {onClose && !autoClose && (
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="success-state-close"
          aria-label="Fechar"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SuccessState;
