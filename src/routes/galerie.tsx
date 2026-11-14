import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { GalleryGrid } from "@/components/site/GalleryLightbox";
import { Reveal } from "@/components/site/Reveal";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/galerie")({
  head: () =>
    pageHead({
      title: "Galerie photo — Appartements & résidence AJ3 Luxury Home, Yaoundé",
      description:
        "Découvrez en images les salons, chambres, cuisines, salles de bains et espaces extérieurs des appartements AJ3 Luxury Home à Yaoundé-Messassi.",
      path: "/galerie",
    }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState<GalleryCategory>("Tout");
  const images = useMemo(
    () =>
      category === "Tout"
        ? galleryImages
        : galleryImages.filter((image) => image.category === category),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title={
          <>
            Regarder,
            <br />
            <span className="italic text-champagne">puis venir voir.</span>
          </>
        }
        intro="Des matières, des lumières et des volumes réels : toutes les images présentées ici proviennent des galeries officielles AJ3. Cliquez sur une photographie pour l'agrandir."
        imageBase="/images/apartments/inter/salon-baies-vitrees"
        imageAlt="Salon de l'appartement Inter avec canapé en cuir et baies vitrées"
        imagePosition="center 55%"
        crumbs={[{ label: "Accueil", to: "/" }, { label: "Galerie" }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <Eyebrow>La résidence en images</Eyebrow>
            <SectionHeading
              className="mt-5"
              title="Un aperçu de nos intérieurs."
              titleClassName="text-4xl md:text-5xl"
            />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={100}>
            <p className="text-[13px] font-normal leading-relaxed text-muted-foreground">
              Photographies issues des appartements et des espaces communs AJ3 Luxury Home. Les
              visuels sont représentatifs des logements ; l'appartement attribué peut varier selon
              les disponibilités.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-wrap gap-2 border-y border-border py-5">
          {galleryCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={cn(
                "border px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition",
                category === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
          <span
            aria-live="polite"
            className="ml-auto self-center text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
          >
            {images.length} photographie{images.length > 1 ? "s" : ""}
          </span>
        </Reveal>

        <div className="mt-10">
          <GalleryGrid images={images} />
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center">
          <p className="max-w-2xl leading-relaxed">
            Les photographies proviennent des galeries officielles AJ3 ; leur utilisation sur ce
            site reste à confirmer par écrit auprès de la direction. Certaines vues peuvent
            légèrement différer de l'appartement attribué.
          </p>
          <p className="text-[9px] uppercase tracking-[0.18em]">Source : aj3luxuryhome.com</p>
        </Reveal>
      </Section>
    </>
  );
}
