import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Check, Maximize, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { AmenityIcon, WhatsAppIcon } from "@/components/site/Icons";
import { ActionLink } from "@/components/site/Button";
import { GalleryGrid } from "@/components/site/GalleryLightbox";
import { ApartmentCard } from "@/components/site/ApartmentCard";
import { AMENITIES, apartments, formatPrice, getApartment } from "@/data/apartments";
import { apartmentEnquiry, PHONE_1, TEL_1, waLink } from "@/lib/contact";
import { pageHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/appartements/$slug")({
  loader: ({ params }) => {
    const apartment = getApartment(params.slug);
    if (!apartment) throw notFound();
    return { apartment };
  },
  head: ({ loaderData }) => {
    const apartment = loaderData?.apartment;
    if (!apartment) {
      return pageHead({
        title: "Appartement — AJ3 Luxury Home",
        description:
          "Découvrez les appartements meublés haut standing AJ3 Luxury Home à Yaoundé-Messassi.",
        path: "/appartements",
      });
    }
    return pageHead({
      title: `Appartement ${apartment.name} — ${apartment.area} m² à Yaoundé | AJ3 Luxury Home`,
      description: `Appartement ${apartment.name} chez AJ3 Luxury Home : ${apartment.area} m², 2 chambres, 2 salles de bains, ${apartment.adults} adultes + ${apartment.children} enfants, à partir de ${formatPrice(apartment.price)} la nuit à Yaoundé-Messassi.`,
      path: `/appartements/${apartment.slug}`,
    });
  },
  component: ApartmentDetail,
});

const faqs = [
  {
    q: "À quelle heure puis-je arriver ?",
    a: "Les arrivées sont possibles à partir de 14h00. Une arrivée anticipée peut être envisagée sous réserve de disponibilité ; contactez-nous à l'avance.",
  },
  {
    q: "Le stationnement est-il gratuit ?",
    a: "Oui, un parking gratuit est mis à la disposition des résidents au sein de la résidence.",
  },
  {
    q: "Le petit-déjeuner est-il inclus ?",
    a: "Le petit-déjeuner est annoncé inclus dans le séjour sur le site officiel d'AJ3. Les conditions exactes sont à confirmer avec l'équipe au moment de la réservation.",
  },
  {
    q: "Le jacuzzi et le hammam sont-ils inclus ?",
    a: "L'accès au jacuzzi et au hammam est payant. Certains appartements bénéficient de conditions d'accès spécifiques ; confirmez-les avec notre équipe.",
  },
  {
    q: "Puis-je regarder mes plateformes de streaming ?",
    a: "Chaque appartement est équipé d'une télévision à écran plat avec services de streaming à la demande.",
  },
];

function ApartmentDetail() {
  const { apartment } = Route.useLoaderData();
  const others = apartments.filter((item) => item.slug !== apartment.slug).slice(0, 3);
  const gallery = apartment.gallery.map((image, index) => ({
    ...image,
    caption:
      index === 0 ? `${apartment.name}, ${apartment.area} m² à Yaoundé-Messassi.` : image.alt,
    category: "Salons" as const,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: `Appartement ${apartment.name} — AJ3 Luxury Home`,
    description: apartment.description.join(" "),
    url: `${SITE_URL}/appartements/${apartment.slug}`,
    image: `${SITE_URL}${apartment.hero.base}-1600.webp`,
    numberOfRooms: 2,
    numberOfBathroomsTotal: 2,
    floorSize: { "@type": "QuantitativeValue", value: apartment.area, unitCode: "MTK" },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: apartment.adults + apartment.children,
    },
    amenityFeature: apartment.amenities.map((key) => ({
      "@type": "LocationFeatureSpecification",
      name: AMENITIES[key].label,
      value: true,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Appartement"
        title={apartment.name}
        intro={apartment.tagline}
        imageBase={apartment.hero.base}
        imageAlt={apartment.hero.alt}
        imagePosition={apartment.hero.position ?? undefined}
        crumbs={[
          { label: "Accueil", to: "/" },
          { label: "Appartements", to: "/appartements" },
          { label: apartment.name },
        ]}
      >
        <dl className="mt-9 grid max-w-3xl grid-cols-2 gap-px border border-white/20 bg-white/15 sm:grid-cols-4">
          {[
            { icon: Maximize, label: "Surface", value: `${apartment.area} m²` },
            {
              icon: Users,
              label: "Capacité",
              value: `${apartment.adults} adultes + ${apartment.children} enf.`,
            },
            { icon: BedDouble, label: "Couchage", value: "2 lits doubles" },
            { icon: Check, label: "À partir de", value: formatPrice(apartment.price) },
          ].map((fact) => (
            <div
              key={fact.label}
              className="bg-[oklch(0.16_0.012_60/0.62)] px-4 py-4 backdrop-blur-sm"
            >
              <dt className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/70">
                <fact.icon className="h-3.5 w-3.5 text-champagne" aria-hidden /> {fact.label}
              </dt>
              <dd className="mt-2 text-sm text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>L'appartement</Eyebrow>
              <h2 className="mt-5 font-display text-4xl leading-[1.06] md:text-5xl">
                Un espace à vivre,
                <span className="italic text-accent"> pas seulement à dormir.</span>
              </h2>
              <div className="mt-7 space-y-5">
                {apartment.description.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-[15px] font-normal leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <p className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                Équipements confirmés
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {apartment.amenities.map((key) => (
                  <li key={key} className="flex items-start gap-3 border-t border-border py-4">
                    <AmenityIcon name={key} className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm">{AMENITIES[key].label}</p>
                      <p className="mt-0.5 text-[11px] font-normal leading-relaxed text-muted-foreground">
                        {AMENITIES[key].detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal className="lg:sticky lg:top-28">
              <div className="border border-border bg-card p-7">
                <p className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                  Tarif indicatif
                </p>
                <p className="mt-2 font-display text-4xl">
                  {formatPrice(apartment.price)}
                  <span className="ml-2 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    / nuit
                  </span>
                </p>
                <p className="mt-3 text-[11px] font-normal leading-relaxed text-muted-foreground">
                  Tarif « à partir de ». Disponibilité et tarif final à confirmer directement avec
                  AJ3.
                </p>
                <div className="mt-6 space-y-3 border-t border-border pt-5 text-[12px] text-muted-foreground">
                  <p className="flex justify-between gap-4">
                    <span>Surface</span>
                    <span className="text-foreground">{apartment.area} m²</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Capacité</span>
                    <span className="text-foreground">
                      {apartment.adults} adultes + {apartment.children} enfants
                    </span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Chambres</span>
                    <span className="text-foreground">2 chambres</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Arrivée</span>
                    <span className="text-foreground">dès 14h00</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Parking</span>
                    <span className="text-foreground">gratuit</span>
                  </p>
                </div>
                <ActionLink
                  href={waLink(apartmentEnquiry(apartment.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  className="mt-6 w-full"
                >
                  <WhatsAppIcon /> Réserver {apartment.name}
                </ActionLink>
                <a
                  href={TEL_1}
                  className="mt-3 flex items-center justify-center gap-2 border border-border px-5 py-3.5 text-[10px] uppercase tracking-[0.18em] text-foreground transition hover:border-foreground"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden /> {PHONE_1}
                </a>
                <p className="mt-4 text-center text-[10px] font-normal leading-relaxed text-muted-foreground">
                  Aucun paiement en ligne. Votre demande est traitée directement par l'équipe AJ3.
                </p>
              </div>
              <Link
                to="/appartements"
                className="mt-4 flex items-center justify-center gap-2 py-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-accent"
              >
                Voir tous les appartements <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <Reveal>
          <SectionHeading
            eyebrow="En images"
            title="Parcourir l'appartement."
            intro={`Quelques vues de l'appartement ${apartment.name}. Toutes les photographies proviennent des galeries officielles AJ3.`}
            titleClassName="text-4xl md:text-5xl"
          />
        </Reveal>
        <div className="mt-10">
          <GalleryGrid images={gallery} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Eyebrow>Bon à savoir</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight">Avant votre arrivée.</h2>
            <p className="mt-4 max-w-sm text-sm font-normal leading-relaxed text-muted-foreground">
              Les informations ci-dessous reprennent les conditions communiquées par AJ3. Pour toute
              demande particulière, contactez-nous directement.
            </p>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 50}>
                <details className="group border-t border-border py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-2 font-display text-xl transition group-open:text-accent">
                    {item.q}
                    <span
                      className="mt-1 text-accent transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-2 text-sm font-normal leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="À découvrir aussi"
            title="D'autres atmosphères."
            titleClassName="text-4xl md:text-5xl"
          />
          <Link
            to="/appartements"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-accent"
          >
            Les sept appartements <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {others.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <ApartmentCard apartment={item} index={apartments.indexOf(item)} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
