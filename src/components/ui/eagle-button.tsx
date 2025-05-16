
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

export interface EagleButtonProps extends ButtonProps {}

export const EagleButton = React.forwardRef<HTMLButtonElement, EagleButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="container relative p-[3px] bg-gradient-to-r from-[#03a9f4] to-[#f441a5] rounded-xl transition-all duration-400 hover:before:blur-xl before:content-[''] before:absolute before:inset-0 before:m-auto before:rounded-xl before:z-[-10] before:filter before:blur-0 before:transition-all before:duration-400 before:hover:bg-gradient-to-r before:hover:from-[#03a9f4] before:hover:to-[#f441a5] before:active:blur-sm">
        <Button
          ref={ref}
          className={cn(
            "group relative animate-rainbow bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]",
            
            // before styles for glow effect
            "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

            // eagle button styles combined with rainbow effect
            "bg-[linear-gradient(var(--eagle-button-bg,#1A9BD7),var(--eagle-button-bg,#1A9BD7)),linear-gradient(var(--eagle-button-bg,#1A9BD7)_50%,rgba(26,155,215,0.6)_80%,rgba(26,155,215,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
            
            "w-full shadow-[2px_2px_3px_rgba(0,0,0,0.7)]",
            
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
)
EagleButton.displayName = "EagleButton"

export interface EagleSecondaryButtonProps extends ButtonProps {}

export const EagleSecondaryButton = React.forwardRef<HTMLButtonElement, EagleSecondaryButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="container relative p-[3px] bg-gradient-to-r from-[#03a9f4] to-[#f441a5] rounded-xl transition-all duration-400 hover:before:blur-xl before:content-[''] before:absolute before:inset-0 before:m-auto before:rounded-xl before:z-[-10] before:filter before:blur-0 before:transition-all before:duration-400 before:hover:bg-gradient-to-r before:hover:from-[#03a9f4] before:hover:to-[#f441a5] before:active:blur-sm">
        <Button
          ref={ref}
          className={cn(
            "group relative animate-rainbow bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]",
            
            // before styles for glow effect
            "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

            // eagle secondary button styles combined with rainbow effect
            "bg-[linear-gradient(var(--eagle-button-bg,#FF8024),var(--eagle-button-bg,#FF8024)),linear-gradient(var(--eagle-button-bg,#FF8024)_50%,rgba(255,128,36,0.6)_80%,rgba(255,128,36,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
            
            "w-full shadow-[2px_2px_3px_rgba(0,0,0,0.7)]",
            
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
)
EagleSecondaryButton.displayName = "EagleSecondaryButton"

export interface EagleOutlineButtonProps extends ButtonProps {}

export const EagleOutlineButton = React.forwardRef<HTMLButtonElement, EagleOutlineButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="container relative p-[3px] bg-gradient-to-r from-[#03a9f4] to-[#f441a5] rounded-xl transition-all duration-400 hover:before:blur-xl before:content-[''] before:absolute before:inset-0 before:m-auto before:rounded-xl before:z-[-10] before:filter before:blur-0 before:transition-all before:duration-400 before:hover:bg-gradient-to-r before:hover:from-[#03a9f4] before:hover:to-[#f441a5] before:active:blur-sm">
        <Button
          ref={ref}
          variant="outline"
          className={cn(
            "group relative animate-rainbow bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.12*1rem)_solid_transparent]",
            
            // before styles for glow effect
            "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

            // outline style with rainbow border
            "bg-[linear-gradient(rgba(5,10,20,0.8),rgba(5,10,20,0.8)),linear-gradient(rgba(5,10,20,0.5),rgba(5,10,20,0.5)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
            "text-white hover:bg-[linear-gradient(rgba(5,10,20,0.7),rgba(5,10,20,0.7)),linear-gradient(rgba(5,10,20,0.4),rgba(5,10,20,0.4)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
            
            "w-full shadow-[2px_2px_3px_rgba(0,0,0,0.7)]",
            
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
)
EagleOutlineButton.displayName = "EagleOutlineButton"
