import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/Button";
import { WhatsAppIcon } from "@/components/site/Icons";
import { messages, TEL_1, PHONE_1, waLink } from "@/lib/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/histoire")({
  head: () =>
    pageHead({
      title: "Notre histoire — Une maison née d'une conviction | AJ3 Luxury Home",
      description:
        "L'histoire d'AJ3 Luxury Home à Yaoundé-Messassi : une vision portée par une figure camerounaise du football, sept appartements haut standing et une certaine idée de l'hospitalité.",
      path: "/histoire",
    }),
  component: StoryPage,
});

const values = [
  {
    title: "L'attention",
    text: "Répondre vite, écouter vraiment, anticiper sans peser. L'hospitalité commence avant l'arrivée.",
  },
  {
    title: "La discrétion",
    text: "Une résidence intimiste, des espaces préservés et une équipe qui sait se faire oublier.",
  },
  {
    title: "L'exigence",
    text: "Des matériaux soignés, un entretien attentif et des équipements choisis pour durer.",
  },
];

function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre histoire"
        title={
          <>
            Une maison née
            <br />
            <span className="italic text-champagne">d'une conviction.</span>
          </>
        }
        intro="AJ3 Luxury Home est le fruit d'une vision : offrir à Yaoundé une hospitalité élégante, exclusive et profondément humaine. Une adresse pensée comme une maison, pas comme un hôtel."
        imageBase="/images/site/salle-a-manger-aj3"
        imageAlt="Espace repas de la résidence AJ3 Luxury Home à Yaoundé-Messassi"
        imagePosition="center 55%"
        crumbs={[{ label: "Accueil", to: "/" }, { label: "Histoire" }]}
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <ResponsiveImage
                base="/images/site/salon-aj3"
                alt="Salon de la résidence AJ3 Luxury Home, lumière naturelle et matières chaleureuses"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-4 hidden border border-accent/40 bg-background p-5 sm:block">
                <p className="font-display text-3xl text-accent">07</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Appartements
                </p>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <Eyebrow>L'origine</Eyebrow>
              <h2 className="mt-5 font-display text-4xl leading-[1.06] md:text-5xl">
                Une figure camerounaise du football,
                <span className="italic text-accent"> une certaine idée du beau.</span>
              </h2>
              <div className="mt-7 space-y-5 text-[15px] font-normal leading-relaxed text-muted-foreground">
                <p>
                  Le projet AJ3 Luxury Home est né de la volonté d'une figure camerounaise du
                  football de créer un lieu à la hauteur de ses racines : un espace où l'élégance ne
                  se décorerait pas d'artifices, mais se mesurerait à la qualité de l'accueil.
                </p>
                <p>
                  Ce lieu a pris forme dans le quartier résidentiel de Messassi, à Yaoundé. Plutôt
                  qu'un hôtel, une résidence : sept appartements spacieux, pensés pour accueillir
                  des séjours courts ou prolongés, en famille, entre amis ou pour affaires.
                </p>
                <p>
                  Chaque détail — les volumes, la lumière, le choix des matières, la disponibilité
                  de l'équipe — répond à cette même intention : que l'on se sente attendu, sans
                  jamais se sentir dérangé.
                </p>
              </div>
              <blockquote className="mt-9 border-l border-accent/60 pl-6 font-display text-2xl italic leading-snug text-foreground/85">
                « Une maison ne se raconte pas. Elle se traverse, puis on y revient. »
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow light>La résidence aujourd'hui</Eyebrow>
              <SectionHeading
                light
                className="mt-5"
                title={
                  <>
                    Sept appartements,
                    <br />
                    <span className="italic text-champagne">une même âme.</span>
                  </>
                }
                titleClassName="text-4xl md:text-5xl"
                intro="Deux chambres, deux salles de bains, une cuisine entièrement équipée et une connexion Wi-Fi haut débit dans chaque appartement. Des espaces de 75 à 95 m², pour quatre adultes et deux enfants."
              />
              <Link
                to="/appartements"
                className="group mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] underline decoration-champagne/60 underline-offset-4 text-white/80 transition hover:text-champagne"
              >
                Découvrir les appartements
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>
          <Reveal className="md:col-span-5 md:col-start-8" delay={120}>
            <ResponsiveImage
              base="/images/site/interieur-aj3"
              alt="Espace de vie de la résidence AJ3 Luxury Home, matières naturelles et lumière douce"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[3/4]"
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>Ce qui nous guide</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.06] md:text-5xl">
            Le luxe, pour nous,
            <span className="italic text-accent"> c'est d'abord le soin.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80} className="bg-background p-8">
              <p className="font-display text-sm text-accent">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl">{value.title}</h3>
              <p className="mt-3 text-[13px] font-normal leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-3 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ResponsiveImage
              base="/images/site/detail-art-aj3"
              alt="Détail de décoration et d'art dans la résidence AJ3 Luxury Home"
              sizes="(min-width: 768px) 58vw, 100vw"
              className="aspect-[4/3] h-full"
            />
          </Reveal>
          <Reveal className="md:col-span-5" delay={100}>
            <ResponsiveImage
              base="/images/apartments/valerenga/coin-lecture"
              alt="Coin lecture de l'appartement Valerenga avec fauteuils en rotin"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5] h-full"
            />
          </Reveal>
        </div>
        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm font-normal leading-relaxed text-muted-foreground">
            Envie de découvrir la résidence autrement ? Écrivez-nous : nous vous répondrons
            personnellement.
          </p>
          <div className="flex flex-wrap gap-3">
            <ActionLink
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
            >
              <WhatsAppIcon /> Nous écrire
            </ActionLink>
            <ActionLink href={TEL_1} variant="outline">
              {PHONE_1}
            </ActionLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
