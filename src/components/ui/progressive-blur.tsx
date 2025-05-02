
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
  direction?: 'left' | 'right' | 'top' | 'bottom'
  className?: string
  blurIntensity?: number
}

export function ProgressiveBlur({ 
  direction = 'left', 
  className, 
  blurIntensity = 0.5 
}: ProgressiveBlurProps) {
  const getGradient = () => {
    const intensity = Math.min(Math.max(blurIntensity, 0), 1)
    
    switch (direction) {
      case 'left':
        return `linear-gradient(to left, transparent, rgba(0,0,0,${intensity}))`
      case 'right':
        return `linear-gradient(to right, transparent, rgba(0,0,0,${intensity}))`
      case 'top':
        return `linear-gradient(to top, transparent, rgba(0,0,0,${intensity}))`
      case 'bottom':
        return `linear-gradient(to bottom, transparent, rgba(0,0,0,${intensity}))`
      default:
        return `linear-gradient(to left, transparent, rgba(0,0,0,${intensity}))`
    }
  }

  return (
    <div 
      className={cn("absolute pointer-events-none", className)} 
      style={{ 
        backgroundImage: getGradient(),
        maskImage: getGradient(),
        WebkitMaskImage: getGradient(),
      }}
    />
  )
}
