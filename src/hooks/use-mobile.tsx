
import * as React from "react"

// Constants for different device breakpoints
const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

type DeviceType = 'mobile' | 'tablet' | 'desktop'

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Handler function
    const updateDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    updateDevice()
    
    // Add event listener with passive option for better performance
    window.addEventListener('resize', updateDevice, { passive: true })
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDevice)
  }, [])

  return !!isMobile
}

export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<DeviceType>('desktop')

  React.useEffect(() => {
    // Handler function
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
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateDeviceType, 100)
    }
    
    // Add event listener with passive option
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  return deviceType
}
