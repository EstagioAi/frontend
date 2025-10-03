import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-medium transition-all whitespace-nowrap rounded-full",
  {
    variants: {
      variant: {
        // Yellow pastel - for categories, highlights
        yellow:
          "bg-[#fef9e7] text-[#92400e] border border-[#fef3c7]",
        
        // Mint pastel - for success, active states
        mint:
          "bg-[#e8f8f5] text-[#065f46] border border-[#a7f3d0]",
        
        // Lavender pastel - for info, secondary categories
        lavender:
          "bg-[#f4ecf7] text-[#6b21a8] border border-[#e9d5ff]",
        
        // Peach pastel - for warm highlights, featured items
        peach:
          "bg-[#fef5e7] text-[#9a3412] border border-[#fed7aa]",
      },
      size: {
        sm: "px-2.5 py-1 text-xs min-h-[32px]",
        md: "px-3 py-1.5 text-sm min-h-[36px]",
      },
      interactive: {
        true: "cursor-pointer hover:opacity-80 min-w-[44px] min-h-[44px] touch-target",
        false: "",
      },
    },
    defaultVariants: {
      variant: "yellow",
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
