import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap",
  {
    variants: {
      variant: {
        // Badge com borda verde - outline variant
        outline:
          "border-2 border-green-ds bg-green-10 text-primary-ds",

        // Badge simples - simple variant
        simple:
          "border-2 border-black-10 bg-white-ds text-primary-ds",

        // Badge preenchido - filled variant
        filled:
          "bg-green-ds text-primary-ds border-2 border-green-ds",
      },
      size: {
        sm: "px-3 py-1.5 min-h-[32px]",
        md: "px-4 py-2 min-h-[36px]",
      },
      interactive: {
        true: "cursor-pointer hover:opacity-80 min-w-[44px] min-h-[44px] touch-target focus:outline-none focus:ring-4 focus:ring-green-20",
        false: "",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      interactive: false,
    },
  }
)

function Badge({
  className,
  variant,
  size,
  interactive = false,
  onClick,
  ...props
}) {
  const Component = onClick ? 'button' : 'span'
  const isInteractive = interactive || !!onClick
  
  return (
    <Component
      className={cn(badgeVariants({ variant, size, interactive: isInteractive, className }))}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
