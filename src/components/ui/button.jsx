import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#d97757]/60 focus-visible:ring-offset-2 touch-target",
  {
    variants: {
      variant: {
        // Primary Button - Coral solid background
        primary:
          "bg-[#d97757] text-white shadow-[0_4px_6px_rgba(217,119,87,0.25)] hover:bg-[#e89b7d] hover:shadow-[0_10px_15px_rgba(217,119,87,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_4px_6px_rgba(217,119,87,0.25)] rounded-[1rem]",
        
        // Secondary Button - Coral outline
        secondary:
          "border-2 border-[#d97757] bg-transparent text-[#d97757] hover:bg-[rgba(217,119,87,0.05)] hover:border-[#e89b7d] active:bg-[rgba(217,119,87,0.1)] rounded-[1rem]",
        
        // CTA Button - Purple gradient for main actions
        cta:
          "bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] text-white shadow-[0_10px_15px_rgba(139,92,246,0.3)] hover:shadow-[0_20px_25px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-[0_10px_15px_rgba(139,92,246,0.3)] rounded-[1rem]",
        
        // Ghost Button - Transparent with subtle hover
        ghost:
          "bg-transparent text-[#6b6b68] hover:bg-[#f5f4ed] hover:text-[#3d3d3a] rounded-[1rem]",
        
        // Link variant - Coral text with underline
        link: 
          "text-[#d97757] underline-offset-4 hover:underline hover:text-[#e89b7d]",
        
        // Legacy variants for backward compatibility
        default:
          "bg-gradient-to-r from-[#01E297] to-[#6FFFC7] text-white shadow-lg shadow-[#01E297]/30 hover:shadow-xl hover:shadow-[#01E297]/40 hover:-translate-y-0.5 active:translate-y-0 rounded-xl",
        destructive:
          "bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/40 rounded-xl",
        outline:
          "border-2 border-[#01E297]/20 bg-white text-gray-700 shadow-sm hover:bg-[#01E297]/5 hover:border-[#01E297]/40 rounded-xl",
      },
      size: {
        sm: "h-10 px-4 text-sm gap-2 has-[>svg]:px-3",
        md: "h-12 px-6 text-base gap-3 has-[>svg]:px-4",
        lg: "h-14 px-8 text-lg gap-3 has-[>svg]:px-6",
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

function Button({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
