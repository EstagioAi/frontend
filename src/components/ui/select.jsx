import * as React from "react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef(({
  className,
  children,
  error,
  success,
  disabled,
  size = "md",
  id,
  ...props
}, ref) => {
  const inputId = id || React.useId()
  const errorId = `${inputId}-error`
  const successId = `${inputId}-success`

  const baseClasses = "w-full rounded-lg border-2 bg-white-ds text-primary-ds outline-none transition-all duration-200 cursor-pointer appearance-none"
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm min-h-[40px] pr-8",
    md: "px-4 py-3 text-base min-h-[44px] pr-10", 
    lg: "px-5 py-4 text-lg min-h-[48px] pr-12"
  }
  
  const stateClasses = {
    default: "border-black-10 focus:border-green-ds focus:ring-4 focus:ring-green-20",
    error: "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20",
    success: "border-green-500 focus:border-green-500 focus:ring-4 focus:ring-green-500/20",
    disabled: "bg-primary-ds text-black-40 cursor-not-allowed border-black-10"
  }

  const getStateClass = () => {
    if (disabled) return stateClasses.disabled
    if (error) return stateClasses.error
    if (success) return stateClasses.success
    return stateClasses.default
  }

  // SVG icons for different sizes
  const getChevronIcon = () => {
    const iconSize = size === 'sm' ? '16' : size === 'lg' ? '24' : '20'
    const strokeWidth = size === 'sm' ? '2' : '1.5'
    
    return (
      <svg 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        width={iconSize} 
        height={iconSize} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        style={{ color: disabled ? '#0f0f0f40' : '#6b7280' }}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={strokeWidth} 
          d="m6 9 6 6 6-6"
        />
      </svg>
    )
  }

  return (
    <div className="relative">
      <select
        ref={ref}
        id={inputId}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : success ? successId : undefined}
        className={cn(
          baseClasses,
          sizeClasses[size],
          getStateClass(),
          className
        )}
        style={{
          minHeight: size === 'sm' ? '40px' : size === 'lg' ? '48px' : '44px',
          backgroundImage: 'none' // Remove default arrow
        }}
        {...props}
      >
        {children}
      </select>
      
      {getChevronIcon()}
      
      {error && (
        <div id={errorId} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </div>
      )}
      
      {success && !error && (
        <div id={successId} className="mt-1 text-sm text-green-600" role="status">
          {success}
        </div>
      )}
    </div>
  )
})

Select.displayName = "Select"

export { Select }
