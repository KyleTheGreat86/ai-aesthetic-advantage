
import React from "react";
import { cn } from "@/lib/utils";
import "../../rainbow-button-styles.css";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 cursor-pointer items-center justify-center rounded-xl border-0 px-8 py-3 font-bold text-primary-foreground transition-colors uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rainbow-enhanced",
        // light and dark mode colors - simplified to match eagle button blue
        "bg-[#1A9BD7] text-white w-48 max-w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
