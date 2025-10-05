import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-white-ds-40 disabled:text-black-30 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus:ring-4 focus:ring-green-20 rounded-lg",
  {
    variants: {
      variant: {
        // Primary Button - Black solid background
        primary:
          "bg-black-ds text-white-ds hover:bg-black-hover-ds hover:shadow-lg",

        // Secondary Button - Green solid background
        secondary:
          "bg-green-ds text-primary-ds hover:bg-green-hover-ds hover:shadow-lg",

        // Outline Button - Transparent with border
        outline:
          "border-2 border-black-10 bg-white-ds-ds text-black-70 hover:border-green-ds hover:bg-green-05 hover:text-primary-ds",

        // Active Button - For filters and selected states
        active:
          "bg-green-ds text-primary-ds shadow-lg",

        // Ghost Button - Transparent with subtle hover
        ghost:
          "bg-transparent text-black-70 hover:bg-green-10 hover:text-primary-ds",

        // Link variant - Green text with underline
        link:
          "text-green-ds underline-offset-4 hover:underline hover:text-green-hover-ds",
      },
      size: {
        sm: "h-10 px-4 text-sm gap-2 has-[>svg]:px-3",
        md: "h-12 px-6 text-sm gap-2 has-[>svg]:px-4",
        lg: "h-14 px-8 text-base gap-3 has-[>svg]:px-6",
        icon: "size-10",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
)

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

export { Button, buttonVariants }
