
import * as React from "react"

// Constants for different device breakpoints - adjusted for modern devices
const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

type DeviceType = 'mobile' | 'tablet' | 'desktop'

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with check if window is available (SSR safe)
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  React.useEffect(() => {
    // Handler function with performance optimizations
    const updateDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    updateDevice()
    
    // Use a more efficient debounced resize handler
    let timeoutId: ReturnType<typeof setTimeout>
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(updateDevice, 100)
    }
    
    // Add event listener with passive option for better performance
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return isMobile
}

export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<DeviceType>(() => {
    // Initialize with check if window is available (SSR safe)
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        return 'mobile'
      } else if (width < TABLET_BREAKPOINT) {
        return 'tablet'
      }
    }
    return 'desktop'
  })

  React.useEffect(() => {
    // Handler function with optimizations
    const updateDeviceType = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType('mobile')
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }
    
    // Initial check
    updateDeviceType()
    
    // Debounce resize events for better performance
    let timeoutId: ReturnType<typeof setTimeout>
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(updateDeviceType, 100)
    }
    
    // Add event listener with passive option
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return deviceType
}

// Add helper hook for orientation changes
export function useOrientation() {
  const [isLandscape, setIsLandscape] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(orientation: landscape)").matches
    }
    return false
  })
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)")
    
    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setIsLandscape(e.matches)
    }
    
    // Modern way to add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleOrientationChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleOrientationChange)
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleOrientationChange)
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleOrientationChange)
      }
    }
  }, [])
  
  return isLandscape
}

// Add viewport size hook for responsive design
export function useViewportSize() {
  const [viewport, setViewport] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })
  
  React.useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    // Add event listener with passive option for better performance
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Initial check
    handleResize()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return viewport
}
