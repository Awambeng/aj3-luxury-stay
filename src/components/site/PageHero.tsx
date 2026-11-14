import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Eyebrow } from "./Section";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  imageBase: string;
  imageAlt: string;
  imagePosition?: string | undefined;
  crumbs?: Crumb[];
  children?: ReactNode;
  compact?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  imageBase,
  imageAlt,
  imagePosition,
  crumbs,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-primary text-primary-foreground md:min-h-[68svh]">
      <ResponsiveImage
        base={imageBase}
        alt={imageAlt}
        priority
        sizes="100vw"
        position={imagePosition}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.16_0.012_65/0.95)] via-[oklch(0.16_0.012_65/0.5)] to-[oklch(0.16_0.012_65/0.62)]" />
      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-6 pb-14 sm:px-8 md:px-12",
          compact ? "pt-32 md:pb-16" : "pt-36 md:pb-20",
        )}
      >
        {crumbs ? <Breadcrumbs items={crumbs} light className="mb-8" /> : null}
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.015em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-7 max-w-2xl text-[15px] font-normal leading-relaxed text-white/88 md:text-base">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
      {!compact ? (
        <a
          href="#contenu"
          className="absolute bottom-6 right-6 hidden items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/70 transition hover:text-white md:flex"
        >
          Découvrir <ArrowDown className="h-3.5 w-3.5" aria-hidden />
        </a>
      ) : null}
    </section>
  );
}
