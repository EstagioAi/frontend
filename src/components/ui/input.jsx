import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({
  className,
  type = "text",
  error,
  success,
  disabled,
  icon,
  id,
  ...props
}, ref) => {
  const baseClasses = "w-full rounded-lg border-2 bg-white-ds px-4 py-3 text-base text-primary-ds placeholder:text-black-40 outline-none transition-all duration-200"
  
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

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const errorId = error ? `${inputId}-error` : undefined
  const successId = success ? `${inputId}-success` : undefined

  if (type === "search" && icon) {
    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <div className="text-black-40" aria-hidden="true">
            {icon}
          </div>
        </div>
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : success ? successId : undefined}
          className={cn(
            baseClasses,
            getStateClass(),
            "pl-12", // Extra padding for icon
            className
          )}
          {...props}
        />
        {error && (
          <div id={errorId} className="sr-only" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div id={successId} className="sr-only" role="status">
            Campo preenchido corretamente
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <input
        ref={ref}
        id={inputId}
        type={type}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : success ? successId : undefined}
        className={cn(
          baseClasses,
          getStateClass(),
          className
        )}
        {...props}
      />
      {error && (
        <div id={errorId} className="sr-only" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div id={successId} className="sr-only" role="status">
          Campo preenchido corretamente
        </div>
      )}
    </>
  )
})

Input.displayName = "Input"

export { Input }
