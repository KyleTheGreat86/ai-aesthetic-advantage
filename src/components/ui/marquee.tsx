
import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  // Use memo to prevent unnecessary re-renders
  const content = React.useMemo(() => children, [children]);
  
  return (
    <div 
      className={cn(
        "w-full overflow-hidden sm:mt-24 mt-10 z-10",
        className
      )} 
      {...props}
    >
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div 
          className={cn(
            "flex w-max animate-marquee will-change-transform",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ 
            "--duration": `${speed}s`,
            // Use hardware acceleration
            transform: "translate3d(0,0,0)" 
          } as React.CSSProperties}
        >
          {content}
          {content}
        </div>
      </div>
    </div>
  )
}
