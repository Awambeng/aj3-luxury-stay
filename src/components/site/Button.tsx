import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "gold" | "outline" | "lightOutline" | "text";

const base =
  "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  dark: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
  gold: "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground",
  outline:
    "border border-foreground/35 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
  lightOutline:
    "border border-white/55 text-white hover:border-white hover:bg-white hover:text-primary",
  text: "px-0 py-1 text-foreground/85 hover:text-accent",
};

export function buttonClass(variant: Variant = "dark", className?: string) {
  return cn(base, variants[variant], className);
}

interface ActionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function ActionLink({ variant = "dark", className, children, ...props }: ActionLinkProps) {
  return (
    <a className={buttonClass(variant, className)} {...props}>
      {children}
    </a>
  );
}

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function ActionButton({
  variant = "dark",
  className,
  children,
  ...props
}: ActionButtonProps) {
  return (
    <button className={buttonClass(variant, className)} {...props}>
      {children}
    </button>
  );
}
