
'use client'

import { useIsMobile } from "@/hooks/use-mobile";
import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineShowcase() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="section-container">
        <Card className="w-full h-[500px] bg-gradient-to-b from-black/90 to-eagle-dark/90 relative overflow-hidden border-white/10">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(26, 155, 215, 0.3)" // eagle-blue with opacity
          />
          
          <div className="flex h-full flex-col md:flex-row">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-eagle-blue to-blue-300">
                AI-Powered Automation
              </h2>
              <p className="mt-4 text-gray-300 max-w-lg">
                Our intelligent system works around the clock to capture leads, manage your reviews, 
                and optimize your patient scheduling - all while you focus on providing excellent care.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative">
              {isMobile ? (
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Visualization" 
                    className="object-cover rounded-lg max-h-[250px]"
                  />
                </div>
              ) : (
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
