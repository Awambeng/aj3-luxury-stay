import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({
  items,
  light = false,
  className,
}: {
  items: Crumb[];
  light?: boolean;
  className?: string;
}) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn("text-[10px] uppercase tracking-[0.22em]", className)}
    >
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2",
          light ? "text-white/80" : "text-muted-foreground",
        )}
      >
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.to && !last ? (
                <Link to={item.to} className="transition hover:text-accent">
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={light && last ? "text-white" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last ? <ChevronRight className="h-3 w-3 opacity-50" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
