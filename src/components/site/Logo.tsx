import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="font-display text-[1.7rem] tracking-[0.16em]">
        AJ3
        <span
          className={cn(
            "ml-1.5 align-middle text-[0.62rem] tracking-[0.34em]",
            light ? "text-champagne" : "text-accent",
          )}
        >
          LUXURY
        </span>
      </span>
      <span
        className={cn(
          "mt-1 text-[0.56rem] uppercase tracking-[0.46em]",
          light ? "text-white/70" : "text-muted-foreground",
        )}
      >
        Home · Yaoundé
      </span>
    </span>
  );
}
