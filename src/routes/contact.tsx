import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/Section";
import { ResponsiveImage } from "@/components/site/ResponsiveImage";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { ActionLink } from "@/components/site/Button";
import { WhatsAppIcon } from "@/components/site/Icons";
import { servicesNote } from "@/data/experiences";
import {
  ADDRESS,
  EMAIL,
  MAPS,
  PHONE_1,
  PHONE_2,
  TEL_1,
  TEL_2,
  TIKTOK,
  messages,
  waLink,
} from "@/lib/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact & réservation — AJ3 Luxury Home, Yaoundé-Messassi",
      description:
        "Contactez AJ3 Luxury Home à Yaoundé-Messassi par WhatsApp, téléphone ou email. Vérifiez les disponibilités de nos appartements meublés haut standing.",
      path: "/contact",
    }),
  component: ContactPage,
});

const steps = [
  {
    title: "Vos dates",
    text: "Indiquez votre arrivée, votre départ et le nombre de voyageurs.",
  },
  {
    title: "Votre appartement",
    text: "Précisez l'appartement qui vous intéresse, ou laissez-nous vous conseiller.",
  },
  {
    title: "Notre réponse",
    text: "Nous revenons vers vous avec les disponibilités, le tarif et les conditions.",
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de
            <br />
            <span className="italic text-champagne">votre séjour.</span>
          </>
        }
        intro="Une question, une demande de disponibilité ou un projet de séjour ? Écrivez-nous sur WhatsApp ou utilisez le formulaire : votre demande nous parvient directement, sans intermédiaire."
        imageBase="/images/site/detail-art-aj3"
        imageAlt="Détail de décoration de la résidence AJ3 Luxury Home"
        imagePosition="center 55%"
        crumbs={[{ label: "Accueil", to: "/" }, { label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Demande de séjour</Eyebrow>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                Dites-nous ce qu'il vous faut.
              </h2>
              <p className="mt-4 max-w-xl text-[14px] font-normal leading-relaxed text-muted-foreground">
                Ce formulaire ne stocke aucune donnée. Il compose un message et l'ouvre dans
                WhatsApp, prêt à être envoyé à l'équipe AJ3.
              </p>
            </Reveal>
            <Reveal className="mt-9 border border-border bg-card p-6 sm:p-8" delay={100}>
              <InquiryForm />
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal className="space-y-8">
              <div className="border border-border bg-secondary p-7">
                <p className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                  Le plus rapide
                </p>
                <h3 className="mt-2 font-display text-3xl">WhatsApp</h3>
                <p className="mt-3 text-[13px] font-normal leading-relaxed text-muted-foreground">
                  Pour une réponse directe sur les disponibilités et les tarifs.
                </p>
                <ActionLink
                  href={waLink(messages.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  className="mt-5 w-full"
                >
                  <WhatsAppIcon /> Ouvrir WhatsApp
                </ActionLink>
              </div>

              <div className="space-y-5">
                <a href={TEL_1} className="group flex items-start gap-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      Téléphone
                    </p>
                    <p className="mt-1 text-sm transition group-hover:text-accent">{PHONE_1}</p>
                    <p className="text-sm transition group-hover:text-accent">{PHONE_2}</p>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="group flex items-start gap-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm transition group-hover:text-accent">
                      {EMAIL}
                    </p>
                  </div>
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      Adresse
                    </p>
                    <p className="mt-1 text-sm transition group-hover:text-accent">{ADDRESS}</p>
                  </div>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                </a>
                <a
                  href={TIKTOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-[10px] font-medium text-accent"
                    aria-hidden
                  >
                    ♪
                  </span>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      TikTok
                    </p>
                    <p className="mt-1 text-sm transition group-hover:text-accent">
                      @aj3luxuryhome
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4 border-t border-border pt-5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      Arrivée
                    </p>
                    <p className="mt-1 text-sm">À partir de 14h00</p>
                  </div>
                </div>
              </div>

              <p className="text-[10px] font-normal leading-relaxed text-muted-foreground">
                {servicesNote}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <Eyebrow>Comment ça marche</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Trois étapes, aucune surprise.
            </h2>
            <p className="mt-4 max-w-sm text-sm font-normal leading-relaxed text-muted-foreground">
              Aucun paiement en ligne n'est demandé sur ce site. Toutes les conditions sont
              confirmées directement avec l'équipe avant votre arrivée.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={TEL_1} variant="dark">
                <Phone className="h-3.5 w-3.5" aria-hidden /> Appeler
              </ActionLink>
              <ActionLink href={TEL_2} variant="outline">
                {PHONE_2}
              </ActionLink>
            </div>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 80}
                className="flex gap-5 border-t border-border py-6"
              >
                <span className="font-display text-2xl text-accent">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl">{step.title}</h3>
                  <p className="mt-1 text-[13px] font-normal leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-16">
        <Reveal className="relative overflow-hidden">
          <div className="relative h-[300px] md:h-[400px]">
            <ResponsiveImage
              base="/images/site/hero-piscine-aj3"
              alt="La résidence AJ3 Luxury Home et sa piscine intérieure à Yaoundé-Messassi"
              sizes="100vw"
              position="center 60%"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/35 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-center p-7 md:p-12">
              <p className="text-[9px] uppercase tracking-[0.24em] text-champagne">
                Nous rendre visite
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Yaoundé-Messassi, Cameroun
              </h2>
              <p className="mt-3 text-[13px] font-normal leading-relaxed text-white/65">
                Un quartier résidentiel paisible, à proximité des quartiers administratifs,
                commerciaux et culturels de la capitale.
              </p>
              <ActionLink
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                variant="lightOutline"
                className="mt-6 self-start"
              >
                Ouvrir dans Maps <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
