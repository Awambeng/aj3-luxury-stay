import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Info, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/Button";
import { ExperienceIcon, WhatsAppIcon } from "@/components/site/Icons";
import { experiences, servicesNote } from "@/data/experiences";
import { experienceEnquiry, messages, PHONE_1, TEL_1, waLink } from "@/lib/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () =>
    pageHead({
      title: "Expériences & services — Piscine, sauna, hammam, chef | AJ3 Luxury Home",
      description:
        "Piscine intérieure, sauna, hammam, jacuzzi, massages, chef, petit-déjeuner à la carte et navette privée : découvrez les expériences AJ3 Luxury Home à Yaoundé-Messassi.",
      path: "/experience",
    }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Expériences & services"
        title={
          <>
            Le temps de vivre,
            <br />
            <span className="italic text-champagne">vraiment.</span>
          </>
        }
        intro="La résidence prolonge l'appartement : un espace bien-être, une table sur demande, une navette pour arriver sereinement. Des attentions pensées pour que votre séjour ne ressemble à aucun autre."
        imageBase="/images/site/hero-piscine-aj3"
        imageAlt="Piscine intérieure de la résidence AJ3 Luxury Home au crépuscule"
        imagePosition="center 62%"
        crumbs={[{ label: "Accueil", to: "/" }, { label: "Expérience" }]}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <Eyebrow>L'art de recevoir</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.06] md:text-5xl">
              Tout ce qu'il faut pour ralentir,
              <span className="italic text-accent"> sans renoncer à l'essentiel.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={100}>
            <p className="text-[14px] font-normal leading-relaxed text-muted-foreground">
              Chaque service est proposé selon les disponibilités et les conditions propres à AJ3.
              Notre équipe vous accompagne pour composer le séjour qui vous ressemble.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <div className="relative h-full min-h-[320px] overflow-hidden md:min-h-[480px]">
              <ResponsiveImage
                base="/images/site/hero-piscine-aj3"
                alt="Piscine intérieure et espace bien-être de la résidence AJ3 Luxury Home"
                sizes="(min-width: 768px) 66vw, 100vw"
                position="center 55%"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 max-w-md">
                <p className="text-[9px] uppercase tracking-[0.24em] text-champagne">Signature</p>
                <p className="mt-2 font-display text-3xl text-white md:text-4xl">
                  La piscine intérieure
                </p>
                <p className="mt-2 text-[12px] font-normal leading-relaxed text-white/65">
                  Un bassin abrité, à quelques pas des appartements.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between border border-border bg-secondary p-7">
              <div>
                <p className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                  Bien-être
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">Un espace pour soi.</h3>
                <p className="mt-4 text-[13px] font-normal leading-relaxed text-muted-foreground">
                  Sauna, hammam et jacuzzi complètent l'expérience de la résidence. L'accès au
                  hammam et au jacuzzi est payant ; les conditions sont confirmées par l'équipe.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] underline decoration-accent/60 underline-offset-4 transition hover:text-accent"
              >
                Poser une question <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <Reveal>
          <SectionHeading
            eyebrow="Les expériences"
            title="Neuf façons de prendre soin de votre séjour."
            intro="Les services ci-dessous sont disponibles à la résidence ou sur demande. Certains sont inclus, d'autres proposés en supplément : nous préférons la transparence à la promesse."
            titleClassName="text-4xl md:text-5xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.slug}
              delay={(index % 3) * 70}
              className="bg-background p-7 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <ExperienceIcon name={experience.icon} className="h-7 w-7 text-accent" />
                <span className="border border-border px-2.5 py-1 text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
                  {experience.availability}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl">{experience.title}</h3>
              <p className="mt-2 text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                {experience.summary}
              </p>
              <p className="mt-4 text-[13px] font-normal leading-relaxed text-muted-foreground">
                {experience.detail}
              </p>
              <a
                href={waLink(experienceEnquiry(experience.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-foreground/70 underline decoration-accent/50 underline-offset-4 transition hover:text-accent"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" /> Se renseigner
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-4 border border-accent/30 bg-accent/5 p-6 sm:flex-row sm:items-center">
          <Info className="h-5 w-5 shrink-0 text-accent" aria-hidden />
          <p className="text-[12px] font-normal leading-relaxed text-muted-foreground">
            {servicesNote}
          </p>
        </Reveal>
      </Section>

      <Section tone="dark">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <ResponsiveImage
              base="/images/apartments/inter/salle-a-manger"
              alt="Salle à manger dressée pour un repas à la résidence AJ3 Luxury Home"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5]"
            />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <Eyebrow light>Sur demande</Eyebrow>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
                Une table, un trajet,
                <span className="italic text-champagne"> une attention.</span>
              </h2>
              <p className="mt-6 text-[15px] font-normal leading-relaxed text-white/65">
                Le chef prépare des menus africains ou européens selon vos envies. La navette privée
                organise votre arrivée. Le petit-déjeuner à la carte accompagne vos matins.
                Dites-nous ce qu'il vous faut : nous vous répondrons avec les conditions et les
                tarifs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink
                  href={waLink(messages.experience)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                >
                  <WhatsAppIcon /> Parler à l'équipe
                </ActionLink>
                <ActionLink href={TEL_1} variant="lightOutline">
                  <Phone className="h-3.5 w-3.5" aria-hidden /> {PHONE_1}
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="py-14 md:py-16">
        <Reveal className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm font-normal leading-relaxed text-muted-foreground">
            Envie de découvrir les appartements qui accompagnent ces expériences ?
          </p>
          <Link
            to="/appartements"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] underline decoration-accent/60 underline-offset-4 transition hover:text-accent"
          >
            Découvrir nos appartements
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
