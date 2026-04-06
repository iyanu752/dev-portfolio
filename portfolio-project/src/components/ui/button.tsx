import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]",
  {
    variants: {
      variant: {
        default:
          "border border-[rgba(212,255,66,0.28)] bg-[rgba(212,255,66,0.96)] text-[#071006] hover:bg-[#f3ffb5]",
        destructive:
          "border border-[rgba(255,77,77,0.5)] bg-[rgba(255,77,77,0.95)] text-white hover:bg-[#ff6666] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-[rgba(212,255,66,0.2)] bg-[rgba(10,14,12,0.9)] text-white hover:bg-[rgba(212,255,66,0.96)] hover:text-[#071006]",
        secondary:
          "border border-[rgba(255,216,77,0.3)] bg-[rgba(255,216,77,0.94)] text-[#090b08] hover:bg-[#fff0a0]",
        ghost:
          "text-white hover:bg-[rgba(212,255,66,0.96)] hover:text-[#071006]",
        link: "text-[#d4ff42] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
