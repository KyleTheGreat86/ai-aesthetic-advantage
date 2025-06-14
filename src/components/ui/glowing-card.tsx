
"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  variant?: "default" | "white";
}

const GlowingCard = ({ 
  children, 
  className, 
  intensity = "medium",
  variant = "default" 
}: GlowingCardProps) => {
  const intensityConfig = {
    subtle: { spread: 20, proximity: 32, borderWidth: 1 },
    medium: { spread: 30, proximity: 48, borderWidth: 2 },
    strong: { spread: 40, proximity: 64, borderWidth: 3 }
  };

  const config = intensityConfig[intensity];

  return (
    <div className={cn("relative", className)}>
      <GlowingEffect
        spread={config.spread}
        glow={true}
        disabled={false}
        proximity={config.proximity}
        inactiveZone={0.01}
        borderWidth={config.borderWidth}
        variant={variant}
      />
      {children}
    </div>
  );
};

export { GlowingCard };
