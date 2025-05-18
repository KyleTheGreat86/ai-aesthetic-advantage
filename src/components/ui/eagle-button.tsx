
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

export interface EagleButtonProps extends ButtonProps {
  calendlyLink?: string;
}

export const EagleButton = React.forwardRef<HTMLButtonElement, EagleButtonProps>(
  ({ className, children, calendlyLink, ...props }, ref) => {
    const ButtonComponent = () => (
      <Button
        ref={ref}
        className={cn(
          "bg-[#1A9BD7] text-white shadow-[2px_2px_3px_rgba(0,0,0,0.3),_0_0_15px_rgba(213,70,239,0.5)] hover:bg-[#1689c1] w-48 max-w-full uppercase font-bold py-3 hover:shadow-[2px_2px_3px_rgba(0,0,0,0.3),_0_0_20px_rgba(213,70,239,0.8)] transition-all hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );

    if (calendlyLink) {
      return (
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-block">
          <ButtonComponent />
        </a>
      );
    }

    return <ButtonComponent />;
  }
)
EagleButton.displayName = "EagleButton"

export interface EagleSecondaryButtonProps extends ButtonProps {
  calendlyLink?: string;
}

export const EagleSecondaryButton = React.forwardRef<HTMLButtonElement, EagleSecondaryButtonProps>(
  ({ className, children, calendlyLink, ...props }, ref) => {
    const ButtonComponent = () => (
      <Button
        ref={ref}
        className={cn(
          "bg-[#1A9BD7] text-white shadow-[2px_2px_3px_rgba(0,0,0,0.3),_0_0_15px_rgba(213,70,239,0.5)] hover:bg-[#1689c1] w-48 max-w-full uppercase font-bold py-3 hover:shadow-[2px_2px_3px_rgba(0,0,0,0.3),_0_0_20px_rgba(213,70,239,0.8)] transition-all hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );

    if (calendlyLink) {
      return (
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-block">
          <ButtonComponent />
        </a>
      );
    }

    return <ButtonComponent />;
  }
)
EagleSecondaryButton.displayName = "EagleSecondaryButton"

export interface EagleOutlineButtonProps extends ButtonProps {
  calendlyLink?: string;
}

export const EagleOutlineButton = React.forwardRef<HTMLButtonElement, EagleOutlineButtonProps>(
  ({ className, children, calendlyLink, ...props }, ref) => {
    const ButtonComponent = () => (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "border-[#1A9BD7] text-white hover:bg-[#1A9BD7]/10 w-48 max-w-full shadow-[2px_2px_3px_rgba(0,0,0,0.3),_0_0_15px_rgba(213,70,239,0.5)] uppercase font-bold py-3 hover:shadow-[2px_2px_3px_rgba(0,0,0,0.3),_0_0_20px_rgba(213,70,239,0.8)] transition-all hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );

    if (calendlyLink) {
      return (
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-block">
          <ButtonComponent />
        </a>
      );
    }

    return <ButtonComponent />;
  }
)
EagleOutlineButton.displayName = "EagleOutlineButton"
