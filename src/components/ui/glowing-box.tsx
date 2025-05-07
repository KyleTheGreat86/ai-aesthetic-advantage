
import { lazy, Suspense, useState, useEffect, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Lazy load the GlowingEffect component
const GlowingEffect = lazy(() => import("./lazy-glowing-effect").then((module) => ({ default: module.LazyGlowingEffect })));

interface GlowingBoxProps {
  children: ReactNode;
  className?: string;
  enableOnIntersection?: boolean;
  style?: CSSProperties;
}

export function GlowingBox({ children, className, enableOnIntersection = true, style }: GlowingBoxProps) {
  const [isInView, setIsInView] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (enableOnIntersection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('.glowing-box-container');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [enableOnIntersection]);

  return (
    <div className={cn("relative glowing-box-container", className)} style={style}>
      {isClient && isInView && (
        <Suspense fallback={null}>
          <GlowingEffect 
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
          />
        </Suspense>
      )}
      {children}
    </div>
  );
}
