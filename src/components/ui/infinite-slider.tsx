
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

interface InfiniteSliderProps {
  children: React.ReactNode[]
  speed?: number
  speedOnHover?: number
  className?: string
  gap?: number
}

export function InfiniteSlider({ 
  children, 
  speed = 60, 
  speedOnHover = 80, 
  className, 
  gap = 0 
}: InfiniteSliderProps) {
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentSpeed = hovered ? speedOnHover : speed

  useEffect(() => {
    const slider = containerRef.current
    if (!slider) return

    // Calculate the animation duration based on the width and speed
    const updateDuration = () => {
      const containerWidth = slider.offsetWidth
      const duration = (containerWidth / currentSpeed) * 1.5
      slider.style.animationDuration = `${duration}s`
    }

    updateDuration()
    
    window.addEventListener('resize', updateDuration)
    return () => window.removeEventListener('resize', updateDuration)
  }, [currentSpeed])

  const computedClassName = cn(
    "flex min-w-full shrink-0 items-center justify-around gap-4 animate-scroll",
    className
  )

  return (
    <div 
      className="group/slider flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex animate-scroll" ref={containerRef}>
        <div className={computedClassName} style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className={computedClassName} style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  )
}
