import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Phone, Sparkles, Waves } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { ApartmentCard } from "@/components/site/ApartmentCard";
import { ActionLink, buttonClass } from "@/components/site/Button";
import { ExperienceIcon, WhatsAppIcon } from "@/components/site/Icons";
import { apartments, formatPrice } from "@/data/apartments";
import { experiences, servicesNote } from "@/data/experiences";
import { galleryImages } from "@/data/gallery";
import { EMAIL, MAPS, PHONE_1, PHONE_2, TEL_2, TIKTOK, messages, waLink } from "@/lib/contact";
import { localBusinessJsonLd, pageHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "AJ3 Luxury Home — Appartements meublés haut standing à Yaoundé",
      description:
        "Découvrez sept appartements meublés haut standing à Yaoundé-Messassi : 75 à 95 m², piscine intérieure, sauna, hammam, jacuzzi et services premium. Réservez directement avec AJ3.",
      path: "/",
    }),
  component: Home,
});

const featured = apartments.filter((apartment) => apartment.featured);
const previewGallery = [
  galleryImages[0]!,
  galleryImages[1]!,
  galleryImages[9]!,
  galleryImages[7]!,
  galleryImages[5]!,
];

function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HomeHero />
      <Intro />
      <FeaturedApartments />
      <SignatureExperiences />
      <GalleryPreview />
      <BrandStory />
      <Location />
      <FinalCta />
    </>
  );
}

function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-primary text-primary-foreground">
      <ResponsiveImage
        base="/images/site/hero-piscine-aj3"
        alt="Piscine intérieure et façade illuminée de la résidence AJ3 Luxury Home à Yaoundé-Messassi"
        priority
        sizes="100vw"
        position="center 58%"
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[oklch(0.14_0.01_60/0.94)] via-[oklch(0.14_0.01_60/0.36)] to-[oklch(0.14_0.01_60/0.62)]" />
      <div
        aria-hidden
        className="absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-8 md:px-12 md:pb-20">
        <Reveal>
          <p className="eyebrow text-champagne">
            <span
              className="mr-3 inline-block h-px w-8 align-middle bg-current opacity-70"
              aria-hidden
            />
            Yaoundé-Messassi · Cameroun
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-7 max-w-5xl font-display text-[3.35rem] leading-[0.92] tracking-[-0.02em] sm:text-7xl md:text-8xl lg:text-[7rem]">
            Votre séjour
            <span className="block italic text-champagne">d'exception</span>
            <span className="block">commence ici.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-[15px] font-normal leading-relaxed text-white/88 md:text-base">
            Découvrez des appartements meublés haut standing à Yaoundé, pensés pour votre confort,
            votre intimité et des expériences inoubliables.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
            >
              <WhatsAppIcon /> Réserver mon séjour
            </ActionLink>
            <Link to="/appartements" className={buttonClass("lightOutline")}>
              Découvrir nos appartements <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/70">
            <span className="flex items-center gap-2">
              <Waves className="h-3.5 w-3.5 text-champagne" aria-hidden /> Piscine intérieure
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
            <span>7 appartements · 75 à 95 m²</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
            <span>4 adultes + 2 enfants</span>
            <span className="ml-auto hidden text-white/60 md:block">Défilez pour découvrir</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <Section className="pb-10 md:pb-14">
      <div className="grid gap-12 border-b border-border pb-16 md:grid-cols-12 md:gap-8 md:pb-20">
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>Bienvenue</Eyebrow>
            <p className="mt-5 font-display text-2xl leading-snug text-muted-foreground md:text-3xl">
              L'hospitalité,
              <br />
              dans ce qu'elle a de plus personnel.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.08] tracking-[-0.01em] md:text-5xl">
              Sept appartements, une même exigence : que vous vous sentiez attendu.
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] font-normal leading-relaxed text-muted-foreground">
              AJ3 Luxury Home est une résidence d'appartements meublés haut standing installée dans
              le quartier résidentiel de Messassi. Des intérieurs spacieux, une intimité préservée
              et une équipe disponible : tout est pensé pour que votre séjour à Yaoundé soit simple,
              calme et profondément agréable.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <p className="font-display text-4xl text-accent">07</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Appartements
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-accent">75–95</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  m² par appartement
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-accent">06</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Personnes accueillies
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-px border-b border-border bg-border md:grid-cols-3">
        {[
          {
            title: "Une adresse, un art de recevoir",
            text: "Un accueil attentif et une équipe joignable, avant et pendant votre séjour.",
          },
          {
            title: "Des espaces qui respirent",
            text: "Deux chambres, deux salles de bains et une cuisine équipée dans chaque appartement.",
          },
          {
            title: "Une réservation sans détour",
            text: "Un message WhatsApp suffit pour vérifier les disponibilités et organiser votre arrivée.",
          },
        ].map((item, index) => (
          <Reveal
            key={item.title}
            className="bg-background px-0 py-8 md:px-8 md:py-10"
            delay={index * 90}
          >
            <p className="font-display text-sm text-accent">0{index + 1}</p>
            <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
            <p className="mt-2 max-w-sm text-[13px] font-normal leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FeaturedApartments() {
  return (
    <Section tone="sand" className="overflow-hidden">
      <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Nos appartements"
          title={
            <>
              Chaque adresse a
              <br />
              son caractère.
            </>
          }
          intro="Deux volumes, deux atmosphères : 75 m² ou 95 m², toujours deux chambres et deux salles de bains. Découvrez les appartements disponibles pour vos dates."
        />
        <Link
          to="/appartements"
          className="group inline-flex shrink-0 items-center gap-2 border-b border-foreground/30 pb-2 text-[10px] uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent"
        >
          Les sept appartements
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        {featured.map((apartment, index) => (
          <Reveal key={apartment.slug} delay={index * 100}>
            <ApartmentCard apartment={apartment} index={index} offset={index === 1} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center">
        <p>Tarifs indicatifs à partir de {formatPrice(70000)} la nuit.</p>
        <Link
          to="/appartements"
          className="text-[10px] uppercase tracking-[0.18em] underline decoration-accent/60 underline-offset-4 hover:text-accent"
        >
          Comparer les appartements
        </Link>
      </Reveal>
    </Section>
  );
}

function SignatureExperiences() {
  const signatures = experiences.filter((item) =>
    ["piscine", "hammam", "chef", "navette"].includes(item.slug),
  );

  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-px bg-white/8" aria-hidden />
      <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative lg:col-span-5">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <ResponsiveImage
              base="/images/site/interieur-aj3"
              alt="Espace de vie chaleureux de la résidence AJ3 Luxury Home"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden border border-champagne/40 p-6 md:block">
            <p className="font-display text-3xl text-champagne">AJ3</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
              L'art de recevoir
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionHeading
              light
              eyebrow="L'expérience AJ3"
              title={
                <>
                  Le temps de vivre,
                  <br />
                  <span className="italic text-champagne">vraiment.</span>
                </>
              }
              intro="La résidence prolonge l'appartement : un espace bien-être, une table sur demande, une navette pour arriver sereinement. Certaines prestations sont proposées en supplément."
            />
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {signatures.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80} className="border-t border-white/12 py-5">
                <div className="flex items-start gap-4">
                  <ExperienceIcon
                    name={item.icon}
                    className="mt-0.5 h-5 w-5 shrink-0 text-champagne"
                  />
                  <div>
                    <h3 className="font-display text-xl text-white">{item.title}</h3>
                    <p className="mt-1 text-[13px] font-normal leading-relaxed text-white/70">
                      {item.summary}
                    </p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-champagne/80">
                      {item.availability}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/experience" className={buttonClass("gold")}>
              Explorer nos expériences <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <p className="max-w-xs text-[11px] font-normal leading-relaxed text-white/65">
              {servicesNote}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function GalleryPreview() {
  return (
    <Section className="pb-16 md:pb-20">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="Galerie" title="Un aperçu, avant d'y être." />
        <Link
          to="/galerie"
          className="group inline-flex shrink-0 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition hover:text-accent"
        >
          Ouvrir la galerie
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <Reveal className="col-span-2 row-span-2">
          <Link to="/galerie" className="group block h-full overflow-hidden">
            <div className="relative aspect-[4/3] h-full min-h-[280px] w-full md:min-h-[460px]">
              <ResponsiveImage
                base={previewGallery[0]?.base ?? "/images/site/hero-piscine-aj3"}
                alt={previewGallery[0]?.alt ?? "Piscine intérieure AJ3 Luxury Home"}
                sizes="(min-width: 768px) 50vw, 100vw"
                position={previewGallery[0]?.position}
                className="transition-transform duration-[1.3s] group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-4 left-4 bg-background/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-foreground/70">
                La résidence
              </span>
            </div>
          </Link>
        </Reveal>
        {previewGallery.slice(1).map((image, index) => (
          <Reveal key={image.base + index} delay={80 + index * 60}>
            <Link to="/galerie" className="group block overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <ResponsiveImage
                  base={image.base}
                  alt={image.alt}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  position={image.position}
                  className="transition-transform duration-[1.3s] group-hover:scale-[1.04]"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BrandStory() {
  return (
    <Section tone="sand">
      <div className="grid gap-14 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <ResponsiveImage
                base="/images/site/salon-aj3"
                alt="Salon de la résidence AJ3 Luxury Home, canapé clair et lumière naturelle"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-40 border-8 border-secondary md:block lg:w-52">
              <ResponsiveImage
                base="/images/site/chambre-aj3"
                alt="Chambre de la résidence AJ3 Luxury Home"
                sizes="200px"
                className="aspect-[3/4]"
              />
            </div>
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <Eyebrow>Notre histoire</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.06] md:text-5xl">
              Une maison née d'une conviction :
              <span className="italic text-accent"> le beau doit aussi être accueillant.</span>
            </h2>
            <p className="mt-7 text-[15px] font-normal leading-relaxed text-muted-foreground">
              AJ3 Luxury Home est le fruit d'une vision portée par une figure camerounaise du
              football, désireuse d'offrir à Yaoundé une hospitalité élégante, exclusive et
              profondément humaine. Le projet a pris racine dans le quartier résidentiel de
              Messassi.
            </p>
            <p className="mt-5 text-[15px] font-normal leading-relaxed text-muted-foreground">
              Aujourd'hui, la résidence réunit sept appartements de deux chambres, des équipements
              modernes et des services premium : espaces bien-être, chef cuisinier, petit-déjeuner à
              la carte, navette privée et Wi-Fi haut débit. Une vision contemporaine du luxe, à
              taille humaine.
            </p>
            <blockquote className="mt-8 border-l border-accent/60 pl-6 font-display text-2xl italic leading-snug text-foreground/85">
              « Le luxe, c'est de se sentir attendu, sans jamais se sentir dérangé. »
            </blockquote>
            <Link
              to="/histoire"
              className="group mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] underline decoration-accent/60 underline-offset-4 transition hover:text-accent"
            >
              Lire notre histoire
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Location() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>Nous trouver</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl">
              Messassi, au cœur
              <br />
              de Yaoundé.
            </h2>
            <p className="mt-6 max-w-md text-[15px] font-normal leading-relaxed text-muted-foreground">
              Un quartier résidentiel paisible, à proximité des quartiers administratifs,
              commerciaux et culturels de la capitale. Un point de départ idéal pour découvrir
              Yaoundé, puis retrouver le calme de la résidence.
            </p>
            <div className="mt-8 space-y-4 border-t border-border pt-6">
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Adresse
                  </p>
                  <p className="mt-1 text-sm transition group-hover:text-accent">
                    Yaoundé-Messassi, Cameroun
                  </p>
                </div>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:text-accent"
                  aria-hidden
                />
              </a>
              <a href={TEL_2} className="group flex items-start gap-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Téléphone
                  </p>
                  <p className="mt-1 text-sm transition group-hover:text-accent">
                    {PHONE_1} · {PHONE_2}
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block text-sm transition hover:text-accent"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="md:col-span-7" delay={120}>
          <div className="relative h-[360px] overflow-hidden md:h-[520px]">
            <ResponsiveImage
              base="/images/site/salle-a-manger-aj3"
              alt="Espace repas de la résidence AJ3 Luxury Home à Yaoundé-Messassi"
              sizes="(min-width: 768px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.24em] text-champagne">
                  AJ3 Luxury Home
                </p>
                <p className="mt-2 font-display text-2xl text-white md:text-3xl">
                  Yaoundé-Messassi
                </p>
              </div>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-primary"
              >
                Ouvrir dans Maps <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-primary px-6 py-24 text-primary-foreground sm:px-8 md:px-12 md:py-32">
      <ResponsiveImage
        base="/images/site/hero-piscine-aj3"
        alt=""
        sizes="100vw"
        position="center 65%"
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-[oklch(0.14_0.01_60/0.82)]" />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow light className="justify-center">
            Votre prochain séjour
          </Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.04] sm:text-5xl md:text-6xl">
            Parlons de vos dates.
            <br />
            <span className="italic text-champagne">Nous nous occupons du reste.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-normal leading-relaxed text-white/80">
            Écrivez-nous sur WhatsApp ou appelez-nous directement. Nous vous répondons avec les
            disponibilités et les conditions de votre séjour.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink
              href={waLink(messages.availability)}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
            >
              <WhatsAppIcon /> Demander les disponibilités
            </ActionLink>
            <ActionLink href={TEL_2} variant="lightOutline">
              <Phone className="h-4 w-4" aria-hidden /> {PHONE_2}
            </ActionLink>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-white/55">
            Ou suivez nos séjours sur{" "}
            <a
              href={TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-4 hover:text-white"
            >
              TikTok
            </a>{" "}
            · {SITE_URL.replace("https://", "")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
