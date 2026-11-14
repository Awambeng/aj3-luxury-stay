import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

/**
 * Subtle entrance animation. Content is visible without JavaScript and in
 * browsers that block animations: the animation is purely decorative.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Tag = as;
  return (
    <Tag
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
