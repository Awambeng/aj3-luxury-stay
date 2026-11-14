import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "ivory",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "sand" | "dark" | "none";
}) {
  const tones = {
    ivory: "bg-background text-foreground",
    sand: "bg-secondary text-secondary-foreground",
    dark: "bg-primary text-primary-foreground",
    none: "",
  };
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 px-6 py-20 sm:px-8 md:px-12 md:py-28", tones[tone], className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p className={cn("eyebrow", light && "text-champagne", className)}>
      <span className="mr-3 inline-block h-px w-6 align-middle bg-current opacity-70" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-5 font-display text-4xl leading-[1.06] tracking-[-0.01em] sm:text-5xl md:text-6xl",
          light ? "text-primary-foreground" : "text-foreground",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[15px] font-normal leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
