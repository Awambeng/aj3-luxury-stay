import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { ApartmentCard } from "@/components/site/ApartmentCard";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/Button";
import { WhatsAppIcon } from "@/components/site/Icons";
import { apartments, priceBands, type PriceBandId } from "@/data/apartments";
import { messages, waLink } from "@/lib/contact";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/appartements/")({
  head: () =>
    pageHead({
      title: "Appartements meublés haut standing à Yaoundé — AJ3 Luxury Home",
      description:
        "Comparez les sept appartements AJ3 Luxury Home à Yaoundé-Messassi : 75 ou 95 m², deux chambres, deux salles de bains, à partir de 70 000 FCFA la nuit.",
      path: "/appartements",
    }),
  component: ApartmentsPage,
});

type SizeFilter = "all" | "75" | "95";

const sizeFilters: { id: SizeFilter; label: string }[] = [
  { id: "all", label: "Toutes les surfaces" },
  { id: "75", label: "75 m²" },
  { id: "95", label: "95 m²" },
];

function ApartmentsPage() {
  const [priceBand, setPriceBand] = useState<PriceBandId>("all");
  const [size, setSize] = useState<SizeFilter>("all");

  const visible = useMemo(() => {
    const band = priceBands.find((item) => item.id === priceBand) ?? priceBands[0];
    return apartments.filter((apartment) => {
      const matchesPrice = apartment.price >= band.min && apartment.price <= band.max;
      const matchesSize = size === "all" || apartment.area === Number(size);
      return matchesPrice && matchesSize;
    });
  }, [priceBand, size]);

  const active = priceBand !== "all" || size !== "all";

  function reset() {
    setPriceBand("all");
    setSize("all");
  }

  return (
    <>
      <PageHero
        eyebrow="Nos appartements"
        title={
          <>
            Sept appartements.
            <br />
            <span className="italic text-champagne">Une même attention.</span>
          </>
        }
        intro="Tous nos appartements disposent de deux chambres, deux salles de bains avec douche à l'italienne, d'une cuisine entièrement équipée et d'une connexion Wi-Fi haut débit. Choisissez l'atmosphère qui vous ressemble."
        imageBase="/images/site/salon-aj3"
        imageAlt="Salon lumineux de la résidence AJ3 Luxury Home à Yaoundé-Messassi"
        imagePosition="center 55%"
        crumbs={[{ label: "Accueil", to: "/" }, { label: "Appartements" }]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <Eyebrow>Choisir son séjour</Eyebrow>
            <SectionHeading
              className="mt-5"
              title="Des espaces généreux, sans superflu."
              titleClassName="text-4xl md:text-5xl"
            />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
            <p className="text-[15px] font-normal leading-relaxed text-muted-foreground">
              Chaque appartement accueille jusqu'à quatre adultes et deux enfants. Les tarifs
              ci-dessous sont des tarifs indicatifs « à partir de » ; la disponibilité et le tarif
              final sont confirmés directement par l'équipe AJ3.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 border-y border-border py-5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                  Surface
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizeFilters.map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setSize(filter.id)}
                      aria-pressed={size === filter.id}
                      className={cn(
                        "border px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition",
                        size === filter.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground",
                      )}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                  Tarif indicatif
                </p>
                <div className="flex flex-wrap gap-2">
                  {priceBands.map((band) => (
                    <button
                      key={band.id}
                      type="button"
                      onClick={() => setPriceBand(band.id)}
                      aria-pressed={priceBand === band.id}
                      className={cn(
                        "border px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition",
                        priceBand === band.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground",
                      )}
                    >
                      {band.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p
                aria-live="polite"
                className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {visible.length} appartement{visible.length > 1 ? "s" : ""}
              </p>
              {active ? (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-accent underline underline-offset-4"
                >
                  <RotateCcw className="h-3 w-3" aria-hidden /> Réinitialiser
                </button>
              ) : null}
            </div>
          </div>
        </Reveal>

        {visible.length ? (
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
            {visible.map((apartment, index) => (
              <Reveal key={apartment.slug} delay={(index % 2) * 90}>
                <ApartmentCard apartment={apartment} index={apartments.indexOf(apartment)} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 border border-border bg-card p-10 text-center">
            <p className="font-display text-3xl">Aucun appartement ne correspond à ces critères.</p>
            <p className="mx-auto mt-3 max-w-md text-sm font-normal text-muted-foreground">
              Réinitialisez les filtres ou contactez-nous : nous vous aiderons à trouver
              l'appartement adapté à vos dates.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Réinitialiser
            </button>
          </div>
        )}

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-[12px] font-normal leading-relaxed text-muted-foreground">
            Une question sur un appartement précis, les arrivées tardives ou un séjour prolongé ?
            Écrivez-nous : nous répondons avec les disponibilités réelles.
          </p>
          <ActionLink
            href={waLink(messages.availability)}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
          >
            <WhatsAppIcon /> Demander les disponibilités
          </ActionLink>
        </Reveal>
      </Section>

      <Section tone="dark" className="py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Eyebrow light>Pas encore décidé ?</Eyebrow>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Laissez-nous vous guider.</h2>
            <p className="mt-3 max-w-xl text-sm font-normal text-white/60">
              Dites-nous vos dates et le nombre de voyageurs. Nous vous proposerons l'appartement le
              plus adapté.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionLink
              href={waLink(messages.availability)}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
            >
              <WhatsAppIcon /> WhatsApp
            </ActionLink>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-primary"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
