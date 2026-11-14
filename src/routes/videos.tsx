import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { TikTokEmbed } from "@/components/site/TikTokEmbed";
import { TikTokVideo } from "@/components/site/TikTokVideo";
import { ActionLink } from "@/components/site/Button";
import { WhatsAppIcon } from "@/components/site/Icons";
import { videoChapters, videoGallery } from "@/data/videos";
import { messages, TIKTOK, waLink } from "@/lib/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/videos")({
  head: () =>
    pageHead({
      title: "Vidéos & TikTok — Découvrir AJ3 Luxury Home en mouvement",
      description:
        "Retrouvez les vidéos officielles d'AJ3 Luxury Home sur TikTok : appartements, espaces bien-être et vie de la résidence à Yaoundé-Messassi.",
      path: "/videos",
    }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Vidéos"
        title={
          <>
            Nos histoires,
            <br />
            <span className="italic text-champagne">en mouvement.</span>
          </>
        }
        intro="La résidence se raconte aussi en vidéo. Retrouvez nos publications officielles sur TikTok : visites d'appartements, espaces bien-être et instants de vie à Yaoundé-Messassi."
        imageBase="/images/site/interieur-aj3"
        imageAlt="Intérieur chaleureux de la résidence AJ3 Luxury Home"
        imagePosition="center 55%"
        crumbs={[{ label: "Accueil", to: "/" }, { label: "Vidéos" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Le fil officiel</Eyebrow>
            <SectionHeading
              className="mt-5"
              title="Suivez la vie de la résidence."
              titleClassName="text-4xl md:text-5xl"
              intro="Le module ci-dessous affiche les dernières publications publiques de notre compte TikTok officiel. Le contenu est hébergé et mis à jour par TikTok."
            />
            <div className="mt-8 border border-border bg-card p-2 sm:p-4">
              <TikTokEmbed />
            </div>
            <p className="mt-4 text-[10px] font-normal leading-relaxed text-muted-foreground">
              Si le module ne s'affiche pas, votre navigateur ou une extension de confidentialité
              peut bloquer les contenus tiers. Le lien vers notre profil reste disponible ci-contre.
            </p>
          </Reveal>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal
              delay={100}
              className="border border-border bg-secondary p-7 lg:sticky lg:top-28"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-accent/40 text-accent">
                <Play className="h-5 w-5" aria-hidden />
              </div>
              <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                TikTok officiel
              </p>
              <p className="mt-2 font-display text-3xl">@aj3luxuryhome</p>
              <p className="mt-4 text-[13px] font-normal leading-relaxed text-muted-foreground">
                Les vidéos sont publiées directement par l'équipe AJ3. Aucune vidéo n'est reproduite
                ou simulée sur ce site : nous préférons vous renvoyer à la source.
              </p>
              <ActionLink
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
                className="mt-6 w-full"
              >
                Ouvrir TikTok <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </ActionLink>
              <div className="mt-5 border-t border-border pt-5">
                <p className="text-[11px] font-normal leading-relaxed text-muted-foreground">
                  Une question après avoir vu une vidéo ? Écrivez-nous directement.
                </p>
                <ActionLink
                  href={waLink(messages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="mt-4 w-full"
                >
                  <WhatsAppIcon /> WhatsApp
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            light
            eyebrow="Chapitres"
            title="Trois façons d'entrer dans l'univers AJ3."
            titleClassName="text-4xl md:text-5xl"
          />
          <p className="max-w-xs text-[11px] font-normal leading-relaxed text-white/65">
            Une sélection éditoriale pour découvrir la résidence autrement.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {videoChapters.map((chapter, index) => (
            <Reveal key={chapter.title} delay={index * 90}>
              <a
                href={chapter.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`${chapter.title} — voir sur TikTok`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                  <ResponsiveImage
                    base={chapter.imageBase}
                    alt={chapter.imageAlt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="transition-transform duration-[1.3s] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition group-hover:border-champagne group-hover:text-champagne">
                      <Play className="ml-0.5 h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-champagne">
                      Chapitre 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">{chapter.title}</h3>
                    <p className="mt-2 text-[11px] font-normal leading-relaxed text-white/60">
                      {chapter.text}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-white/60">
          <Play className="h-3.5 w-3.5 text-champagne" aria-hidden />
          Vidéos officielles hébergées par TikTok
        </Reveal>
      </Section>

      {videoGallery.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Sélection"
            title="Vidéos à la une."
            titleClassName="text-4xl md:text-5xl"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoGallery.map((video) => (
              <TikTokVideo key={video.url} video={video} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="py-14 md:py-16">
        <Reveal className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm font-normal leading-relaxed text-muted-foreground">
            Les images ne remplacent pas une visite. Découvrez les appartements en détail.
          </p>
          <Link
            to="/appartements"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] underline decoration-accent/60 underline-offset-4 transition hover:text-accent"
          >
            Voir les appartements
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
