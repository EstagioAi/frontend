import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-green-ds focus-visible:ring-offset-2 rounded-lg",
  {
    variants: {
      variant: {
        // Primary Button - Green with hover effect (REDESIGN 2025)
        primary:
          "bg-green-ds text-black hover:bg-[#4AC77D] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(130,247,179,0.3)]",

        // Secondary Button - Black solid background
        secondary:
          "bg-black text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-xl",

        // Outline Button - Transparent with border
        outline:
          "border-2 border-black/10 bg-white text-black/70 hover:border-green-ds hover:bg-green-ds/5 hover:text-black",

        // Active Button - For filters and selected states
        active:
          "bg-green-ds text-black shadow-lg",

        // Ghost Button - Transparent with subtle hover
        ghost:
          "bg-transparent text-black/70 hover:bg-green-ds/10 hover:text-black",

        // Link variant - Green text with underline
        link:
          "text-green-ds underline-offset-4 hover:underline hover:text-[#4AC77D]",
      },
      size: {
        sm: "h-10 px-4 text-sm gap-2 has-[>svg]:px-3",
        md: "h-12 px-8 text-base gap-2 has-[>svg]:px-6",
        lg: "h-14 px-12 text-lg gap-3 has-[>svg]:px-8",
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
