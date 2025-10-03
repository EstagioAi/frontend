import React from 'react';
import './loading.css';

/**
 * Loading Component - Skeleton loader with coral shimmer effect
 * Used to indicate content is being loaded
 */
export const Loading = ({ 
  variant = 'default', 
  count = 1,
  className = '' 
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return (
          <div className="loading-skeleton loading-card">
            <div className="loading-skeleton-header" />
            <div className="loading-skeleton-line" />
            <div className="loading-skeleton-line" />
            <div className="loading-skeleton-line short" />
          </div>
        );
      
      case 'text':
        return (
          <div className="loading-skeleton loading-text">
            <div className="loading-skeleton-line" />
            <div className="loading-skeleton-line" />
            <div className="loading-skeleton-line short" />
          </div>
        );
      
      case 'avatar':
        return (
          <div className="loading-skeleton loading-avatar">
            <div className="loading-skeleton-circle" />
            <div className="loading-skeleton-content">
              <div className="loading-skeleton-line" />
              <div className="loading-skeleton-line short" />
            </div>
          </div>
        );
      
      case 'list':
        return (
          <div className="loading-skeleton loading-list">
            {[...Array(count)].map((_, i) => (
              <div key={i} className="loading-list-item">
                <div className="loading-skeleton-line" />
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="loading-skeleton loading-default">
            <div className="loading-skeleton-line" />
            <div className="loading-skeleton-line" />
            <div className="loading-skeleton-line short" />
          </div>
        );
    }
  };

  return (
    <div className={`loading-container ${className}`}>
      {[...Array(count)].map((_, i) => (
        <React.Fragment key={i}>
          {renderSkeleton()}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Loading;
