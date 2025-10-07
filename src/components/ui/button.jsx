import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button-variants"

const Button = React.forwardRef(({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  disabled = false,
  loading = false,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-slot="button"
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      style={{
        minHeight: '44px', // Ensure touch targets ≥ 44px
        minWidth: size === 'icon' ? '44px' : 'auto'
      }}
      {...props}
    >
      {loading ? (
        <>
          <span className="sr-only">Carregando...</span>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" aria-hidden="true" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  );
})

Button.displayName = "Button"

export { Button }
