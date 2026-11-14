import { Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Maximize, Users } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";
import { WhatsAppIcon } from "./Icons";
import { ActionLink } from "./Button";
import { apartmentEnquiry, waLink } from "@/lib/contact";
import { formatPrice, type Apartment } from "@/data/apartments";
import { cn } from "@/lib/utils";

export function ApartmentCard({
  apartment,
  index = 0,
  className,
  priority = false,
  offset = false,
}: {
  apartment: Apartment;
  index?: number;
  className?: string;
  priority?: boolean;
  offset?: boolean;
}) {
  return (
    <article className={cn("group flex flex-col", offset && "md:mt-16", className)}>
      <Link
        to="/appartements/$slug"
        params={{ slug: apartment.slug }}
        className="relative block overflow-hidden bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      >
        <div className="aspect-[4/3] w-full overflow-hidden">
          <ResponsiveImage
            base={apartment.hero.base}
            alt={apartment.hero.alt}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            position={apartment.hero.position}
            className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.035]"
          />
        </div>
        <span className="absolute left-4 top-4 bg-background/92 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-foreground/75 backdrop-blur-sm">
          À partir de {formatPrice(apartment.price)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col border-x border-b border-border bg-card px-6 pb-7 pt-6 md:px-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-3xl leading-none">
            <Link
              to="/appartements/$slug"
              params={{ slug: apartment.slug }}
              className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {apartment.name}
            </Link>
          </h3>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            0{index + 1}
          </span>
        </div>
        <p className="mt-3 text-[13px] font-normal leading-relaxed text-muted-foreground">
          {apartment.tagline}
        </p>

        <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5 text-accent" aria-hidden />
            <dt className="sr-only">Surface</dt>
            <dd>{apartment.area} m²</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-accent" aria-hidden />
            <dt className="sr-only">Capacité</dt>
            <dd>
              {apartment.adults} adultes + {apartment.children} enfants
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5 text-accent" aria-hidden />
            <dt className="sr-only">Couchage</dt>
            <dd>2 lits doubles</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
          <Link
            to="/appartements/$slug"
            params={{ slug: apartment.slug }}
            className="group/link inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground underline decoration-accent/60 decoration-1 underline-offset-4 transition hover:text-accent"
          >
            Voir les détails
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1"
              aria-hidden
            />
          </Link>
          <ActionLink
            href={waLink(apartmentEnquiry(apartment.name))}
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            className="gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" /> Demander
          </ActionLink>
        </div>
      </div>
    </article>
  );
}
