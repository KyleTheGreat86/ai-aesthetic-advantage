
import React from "react";
import { cn } from "@/lib/utils";
import "../rainbow-button-styles.css";

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
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 px-8 py-2 font-medium text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rainbow-enhanced",
        // light and dark mode colors - simplified to match eagle button blue
        "bg-[#1A9BD7]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
