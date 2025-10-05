import React from 'react';
import './decorative-elements.css';

/**
 * Decorative Elements Component
 * Provides minimalist decorative elements for hero sections and layouts
 * Following the green/black design system
 */

// Decorative circles for hero sections
export const DecorativeCircle = ({ 
  size = 'md', 
  opacity = 30, 
  className = '',
  position = 'absolute' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const opacityClass = `opacity-${opacity}`;
  
  return (
    <div 
      className={`
        ${position} 
        ${sizeClasses[size]} 
        rounded-full 
        border-[3px] 
        border-green-ds 
        ${opacityClass}
        pointer-events-none
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

// Blur effects for background decoration
export const BlurEffect = ({ 
  size = 'md', 
  intensity = 'medium',
  className = '',
  position = 'absolute' 
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96'
  };

  const intensityClasses = {
    light: 'blur-xl',
    medium: 'blur-3xl',
    heavy: 'blur-[100px]'
  };

  return (
    <div 
      className={`
        ${position}
        ${sizeClasses[size]}
        bg-green-ds/10
        ${intensityClasses[intensity]}
        rounded-full
        pointer-events-none
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

// Combined decorative element for hero sections
export const HeroDecorative = ({ 
  variant = 'default',
  className = '' 
}) => {
  if (variant === 'circles') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        {/* Top right circle */}
        <DecorativeCircle 
          size="lg" 
          opacity={30}
          className="top-10 right-10 lg:top-20 lg:right-20"
        />
        
        {/* Bottom left circle */}
        <DecorativeCircle 
          size="md" 
          opacity={40}
          className="bottom-20 left-10 lg:bottom-32 lg:left-20"
        />
        
        {/* Center blur effect */}
        <BlurEffect 
          size="xl"
          intensity="medium"
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        {/* Single top circle */}
        <DecorativeCircle 
          size="xl" 
          opacity={30}
          className="top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Subtle blur effect */}
        <BlurEffect 
          size="lg"
          intensity="light"
          className="bottom-10 left-10"
        />
      </div>
    );
  }

  // Default variant
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Main decorative circle */}
      <DecorativeCircle 
        size="lg" 
        opacity={35}
        className="top-1/4 right-1/4"
      />
      
      {/* Background blur */}
      <BlurEffect 
        size="md"
        intensity="medium"
        className="bottom-1/3 left-1/3"
      />
    </div>
  );
};

// Separator components
export const VerticalSeparator = ({ 
  className = '',
  height = 'h-4' 
}) => {
  return (
    <div 
      className={`
        ${height} 
        w-px 
        bg-black-ds/20 
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

export const HorizontalSeparator = ({ 
  className = '',
  width = 'w-full' 
}) => {
  return (
    <div 
      className={`
        ${width} 
        border-b 
        border-black-10 
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

// Decorative dots
export const DecorativeDot = ({ 
  className = '',
  color = 'bg-green-ds' 
}) => {
  return (
    <div 
      className={`
        h-1 
        w-1 
        rounded-full 
        ${color} 
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

// Dot pattern for decorative purposes
export const DotPattern = ({ 
  count = 3, 
  spacing = 'gap-2',
  className = '',
  direction = 'horizontal' 
}) => {
  const dots = Array.from({ length: count }, (_, index) => (
    <DecorativeDot key={index} />
  ));

  const flexDirection = direction === 'vertical' ? 'flex-col' : 'flex-row';

  return (
    <div 
      className={`
        flex 
        ${flexDirection} 
        items-center 
        ${spacing} 
        ${className}
      `}
      aria-hidden="true"
    >
      {dots}
    </div>
  );
};

// Combined separator with dots
export const SeparatorWithDots = ({ 
  className = '',
  showDots = true,
  dotCount = 3 
}) => {
  return (
    <div 
      className={`
        flex 
        items-center 
        justify-center 
        w-full 
        ${className}
      `}
      aria-hidden="true"
    >
      <HorizontalSeparator width="flex-1" />
      {showDots && (
        <>
          <div className="px-4">
            <DotPattern count={dotCount} />
          </div>
          <HorizontalSeparator width="flex-1" />
        </>
      )}
    </div>
  );
};

// Section divider with decorative elements
export const SectionDivider = ({ 
  variant = 'simple',
  className = '' 
}) => {
  if (variant === 'dots') {
    return (
      <div className={`flex justify-center py-8 ${className}`} aria-hidden="true">
        <DotPattern count={5} spacing="gap-3" />
      </div>
    );
  }

  if (variant === 'line-dots') {
    return (
      <div className={`py-8 ${className}`} aria-hidden="true">
        <SeparatorWithDots />
      </div>
    );
  }

  // Simple line separator
  return (
    <div className={`py-4 ${className}`} aria-hidden="true">
      <HorizontalSeparator />
    </div>
  );
};

// Stats separator (for use between statistics)
export const StatsSeparator = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`} aria-hidden="true">
      <VerticalSeparator />
    </div>
  );
};

export default {
  DecorativeCircle,
  BlurEffect,
  HeroDecorative,
  VerticalSeparator,
  HorizontalSeparator,
  DecorativeDot,
  DotPattern,
  SeparatorWithDots,
  SectionDivider,
  StatsSeparator
};