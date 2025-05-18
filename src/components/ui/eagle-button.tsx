
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

export interface EagleButtonProps extends ButtonProps {}

export const EagleButton = React.forwardRef<HTMLButtonElement, EagleButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-[#1A9BD7] text-white shadow-[2px_2px_3px_rgba(0,0,0,0.3)] hover:bg-[#1689c1] w-48 max-w-full uppercase font-bold py-3 rainbow-enhanced",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
)
EagleButton.displayName = "EagleButton"

export interface EagleSecondaryButtonProps extends ButtonProps {}

export const EagleSecondaryButton = React.forwardRef<HTMLButtonElement, EagleSecondaryButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-[#1A9BD7] text-white shadow-[2px_2px_3px_rgba(0,0,0,0.3)] hover:bg-[#1689c1] w-48 max-w-full uppercase font-bold py-3 rainbow-enhanced",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
)
EagleSecondaryButton.displayName = "EagleSecondaryButton"

export interface EagleOutlineButtonProps extends ButtonProps {}

export const EagleOutlineButton = React.forwardRef<HTMLButtonElement, EagleOutlineButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "border-[#1A9BD7] text-white hover:bg-[#1A9BD7]/10 w-48 max-w-full shadow-[2px_2px_3px_rgba(0,0,0,0.3)] uppercase font-bold py-3",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
)
EagleOutlineButton.displayName = "EagleOutlineButton"
