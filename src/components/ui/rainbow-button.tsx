
import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  calendlyLink?: string;
}

export function RainbowButton({
  children,
  className,
  calendlyLink,
  ...props
}: RainbowButtonProps) {
  const ButtonComponent = () => (
    <button
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "bg-[#1A9BD7] rainbow-enhanced", // Blue background with rainbow enhancement
        "hover:bg-[#1689c1]", // Darker blue on hover
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );

  if (calendlyLink) {
    return (
      <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-block">
        <ButtonComponent />
      </a>
    );
  }

  return <ButtonComponent />;
}
