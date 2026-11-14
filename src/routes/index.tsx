import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import hero from "@/assets/hero.jpg";
import bedroom from "@/assets/bedroom.jpg";
import details from "@/assets/details.jpg";
import dining from "@/assets/dining.jpg";
import { PHONE_1, PHONE_2, TEL_1, TEL_2, TIKTOK, waLink, inquiryText } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AJ3 Luxury Home — Appartements meublés haut standing au Cameroun" },
      { name: "description", content: "AJ3 Luxury Home : appartements meublés haut standing au Cameroun. Accueil personnalisé, confort et réservation simple sur WhatsApp." },
      { property: "og:title", content: "AJ3 Luxury Home — Appartements meublés haut standing" },
      { property: "og:description", content: "Votre séjour, une expérience à part. Réservez simplement sur WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Lang = "fr" | "en";

const T = {
  fr: {
    nav: [["accueil", "Accueil"], ["appartements", "Appartements"], ["experience", "Expérience"], ["galerie", "Galerie"], ["contact", "Contact"]],
    book: "Réserver",
    eyebrow: "Séjours • Confort • Élégance",
    h1: "Votre séjour, une expérience à part.",
    lead: "Des appartements meublés haut standing, pensés pour vous offrir calme, confort et intimité — pour un court séjour comme pour un séjour prolongé.",
    ctaWa: "Réserver sur WhatsApp",
    ctaDisc: "Découvrir nos appartements",
    waGeneral: "Bonjour AJ3 Luxury Home, je souhaite avoir des informations sur vos appartements meublés et vos disponibilités.",
    waDispo: "Bonjour AJ3 Luxury Home, je souhaite connaître vos disponibilités. Mes dates : … Nombre de personnes : …",
    values: [["Accueil personnalisé", "Une équipe à votre écoute, avant et pendant votre séjour."], ["Confort au quotidien", "Des intérieurs meublés avec soin, prêts à vivre."], ["Réservation simple", "Un message WhatsApp suffit pour organiser votre séjour."]],
    aptEyebrow: "Nos appartements",
    aptH: "Des intérieurs pensés pour se sentir chez soi.",
    aptLead: "Chaque espace est aménagé avec attention. Contactez-nous pour connaître les appartements disponibles selon vos dates.",
    cards: [["Espaces de vie", "Des pièces à vivre lumineuses et accueillantes."], ["Suites & chambres", "Le repos, dans une atmosphère sereine."], ["Détails & confort", "Le soin apporté aux finitions fait la différence."]],
    askDispo: "Demander les disponibilités",
    expEyebrow: "L'expérience AJ3",
    expH: "Le calme, le confort et l'intimité d'un lieu à soi.",
    exp: [["Calme", "Un cadre paisible pour vous reposer, travailler ou simplement prendre votre temps."], ["Intimité", "La liberté d'un appartement privé, à votre rythme."], ["Service", "Un interlocuteur disponible pour faciliter votre arrivée et votre séjour."]],
    galEyebrow: "Galerie",
    galH: "Un aperçu de l'atmosphère.",
    galNote: "Visuels d'inspiration — à remplacer par les photos réelles des appartements AJ3 Luxury Home.",
    illus: "Visuel illustratif",
    banH: "Prêt à réserver votre prochain séjour ?",
    banP: "Écrivez-nous sur WhatsApp ou appelez-nous directement. Nous vous répondons avec les disponibilités.",
    call: "Appeler",
    ctEyebrow: "Contact",
    ctH: "Parlons de votre séjour.",
    ctP: "Remplissez le formulaire : votre demande s'ouvrira directement dans WhatsApp, prête à être envoyée.",
    phones: "Téléphone & WhatsApp",
    follow: "Suivez-nous",
    f: { name: "Nom complet", arrival: "Date d'arrivée", departure: "Date de départ", guests: "Nombre de personnes", message: "Message", send: "Envoyer via WhatsApp", hint: "Aucune donnée n'est enregistrée sur ce site — l'envoi se fait depuis votre WhatsApp." },
    foot: "Appartements meublés haut standing — Cameroun.",
    concept: "Concept de site — proposition non officielle.",
  },
  en: {
    nav: [["accueil", "Home"], ["appartements", "Apartments"], ["experience", "Experience"], ["galerie", "Gallery"], ["contact", "Contact"]],
    book: "Book",
    eyebrow: "Stays • Comfort • Elegance",
    h1: "Your stay, a class apart.",
    lead: "Premium furnished apartments designed for calm, comfort and privacy — for short or extended stays.",
    ctaWa: "Book on WhatsApp",
    ctaDisc: "Discover our apartments",
    waGeneral: "Hello AJ3 Luxury Home, I would like information about your furnished apartments and availability.",
    waDispo: "Hello AJ3 Luxury Home, I would like to check availability. My dates: … Number of guests: …",
    values: [["Personal welcome", "A team attentive to you, before and during your stay."], ["Everyday comfort", "Carefully furnished interiors, ready to live in."], ["Simple booking", "One WhatsApp message is all it takes."]],
    aptEyebrow: "Our apartments",
    aptH: "Interiors designed to feel at home.",
    aptLead: "Each space is thoughtfully arranged. Contact us to find out which apartments are available for your dates.",
    cards: [["Living spaces", "Bright, welcoming rooms to live in."], ["Suites & bedrooms", "Rest in a serene atmosphere."], ["Details & comfort", "Care in the finishes makes the difference."]],
    askDispo: "Check availability",
    expEyebrow: "The AJ3 experience",
    expH: "The calm, comfort and privacy of a place of your own.",
    exp: [["Calm", "A peaceful setting to rest, work or simply take your time."], ["Privacy", "The freedom of a private apartment, at your own pace."], ["Service", "A dedicated contact to ease your arrival and stay."]],
    galEyebrow: "Gallery",
    galH: "A glimpse of the atmosphere.",
    galNote: "Inspiration visuals — to be replaced with real photos of AJ3 Luxury Home apartments.",
    illus: "Illustrative image",
    banH: "Ready to book your next stay?",
    banP: "Message us on WhatsApp or call us directly. We'll reply with availability.",
    call: "Call",
    ctEyebrow: "Contact",
    ctH: "Let's talk about your stay.",
    ctP: "Fill in the form: your request will open in WhatsApp, ready to send.",
    phones: "Phone & WhatsApp",
    follow: "Follow us",
    f: { name: "Full name", arrival: "Arrival date", departure: "Departure date", guests: "Number of guests", message: "Message", send: "Send via WhatsApp", hint: "No data is stored on this site — the message is sent from your WhatsApp." },
    foot: "Premium furnished apartments — Cameroon.",
    concept: "Website concept — unofficial proposal.",
  },
} as const;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WaIcon() {
  return <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>;
}

const btn = "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const btnDark = `${btn} bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground`;
const btnGold = `${btn} bg-accent text-accent-foreground hover:bg-background hover:text-foreground`;
const btnOutlineLight = `${btn} border border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-foreground`;
const btnOutline = `${btn} border border-foreground/40 text-foreground hover:bg-foreground hover:text-background`;

function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`scroll-mt-24 px-6 py-24 md:px-12 md:py-32 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>;
}

function Index() {
  const [lang, setLang] = useState<Lang>("fr");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = T[lang];
  useReveal();
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const wa = waLink(t.waGeneral);
  const waDispo = waLink(t.waDispo);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    const text = inquiryText({ name: g("name"), arrival: g("arrival"), departure: g("departure"), guests: g("guests"), message: g("message") }, lang);
    window.open(waLink(text), "_blank", "noopener");
  }

  const navSolid = scrolled || open;
  const field = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-0";

  return (
    <div className="bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navSolid ? "border-b border-border bg-background/95 text-foreground backdrop-blur-sm" : "text-primary-foreground"}`}>
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12" aria-label="Navigation principale">
          <a href="#accueil" className="font-display text-xl tracking-[0.18em]">AJ3 <span className="text-accent">LUXURY</span> HOME</a>
          <ul className="hidden items-center gap-9 lg:flex">
            {t.nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="text-xs uppercase tracking-[0.2em] opacity-85 transition hover:text-accent hover:opacity-100">{l}</a></li>)}
          </ul>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === "fr" ? "en" : "fr")} className="text-xs tracking-[0.2em] opacity-80 hover:opacity-100" aria-label="Changer de langue / Switch language">
              <span className={lang === "fr" ? "text-accent" : ""}>FR</span> / <span className={lang === "en" ? "text-accent" : ""}>EN</span>
            </button>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={`hidden sm:inline-flex ${btnGold} px-5 py-2.5`}><WaIcon />{t.book}</a>
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu">
              <span className="block h-px w-6 bg-current" /><span className={`mt-1.5 block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`} /><span className="mt-1.5 block h-px w-6 bg-current" />
            </button>
          </div>
        </nav>
        {open && (
          <div id="mobile-menu" className="border-t border-border bg-background px-6 pb-8 lg:hidden">
            <ul className="flex flex-col">
              {t.nav.map(([id, l]) => <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className="block border-b border-border py-4 font-display text-2xl">{l}</a></li>)}
            </ul>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={`mt-6 w-full ${btnDark}`}><WaIcon />{t.ctaWa}</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="accueil" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={hero} alt="Salon d'appartement haut standing (visuel illustratif)" width={1600} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-overlay/35 to-overlay/65" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 text-primary-foreground md:px-12 md:pb-28">
          <p className="eyebrow animate-rise">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-normal leading-[1.02] animate-rise [animation-delay:120ms] sm:text-6xl md:text-8xl">{t.h1}</h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed opacity-90 animate-rise [animation-delay:240ms] md:text-lg">{t.lead}</p>
          <div className="mt-10 flex flex-col gap-4 animate-rise [animation-delay:360ms] sm:flex-row">
            <a href={wa} target="_blank" rel="noopener noreferrer" className={btnGold}><WaIcon />{t.ctaWa}</a>
            <a href="#appartements" className={btnOutlineLight}>{t.ctaDisc}</a>
          </div>
        </div>
      </section>

      {/* Values */}
      <div className="border-b border-border bg-secondary px-6 md:px-12">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {t.values.map(([h, p], i) => (
            <div key={h} className={`py-10 md:px-10 ${i ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
              <p className="font-display text-sm text-accent">0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl">{h}</h3>
              <p className="mt-2 text-sm font-light text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Apartments */}
      <Section id="appartements">
        <div className="reveal grid gap-8 md:grid-cols-2 md:items-end">
          <div><p className="eyebrow">{t.aptEyebrow}</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{t.aptH}</h2></div>
          <p className="max-w-md font-light text-muted-foreground md:justify-self-end">{t.aptLead}</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.cards.map(([title, desc], i) => { const img = [dining, bedroom, details][i % 3]; return (
            <a key={i} href={waDispo} target="_blank" rel="noopener noreferrer" className={`reveal group block ${i === 1 ? "md:mt-16" : ""}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={img} alt={`${title} (${t.illus})`} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                <span className="absolute left-4 top-4 bg-background/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.illus}</span>
              </div>
              <h3 className="mt-6 font-display text-3xl">{title}</h3>
              <p className="mt-2 text-sm font-light text-muted-foreground">{desc}</p>
            </a>
          ); })}
        </div>
        <div className="mt-16 text-center"><a href={waDispo} target="_blank" rel="noopener noreferrer" className={btnDark}><WaIcon />{t.askDispo}</a></div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="bg-primary text-primary-foreground">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="reveal relative">
            <img src={bedroom} alt={`Chambre (${t.illus})`} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-accent md:block" aria-hidden />
          </div>
          <div className="reveal">
            <p className="eyebrow">{t.expEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{t.expH}</h2>
            <div className="mt-12 space-y-8">
              {t.exp.map(([h, p]) => (
                <div key={h} className="border-t border-primary-foreground/15 pt-6">
                  <h3 className="font-display text-2xl text-accent">{h}</h3>
                  <p className="mt-2 font-light opacity-80">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="galerie">
        <div className="reveal text-center"><p className="eyebrow">{t.galEyebrow}</p><h2 className="mt-4 font-display text-4xl md:text-6xl">{t.galH}</h2></div>
        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-4">
          {[[hero, "col-span-2 row-span-2"], [details, ""], [bedroom, "row-span-2"], [dining, ""]].map(([src, cls], i) => (
            <div key={i} className={`reveal overflow-hidden ${cls}`}>
              <img src={src} alt={`${t.illus} ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105" />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs italic tracking-wide text-muted-foreground">{t.galNote}</p>
      </Section>

      {/* Banner */}
      <section className="relative overflow-hidden px-6 py-28 text-primary-foreground md:px-12">
        <img src={dining} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay/75" />
        <div className="reveal relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-tight md:text-6xl">{t.banH}</h2>
          <p className="mx-auto mt-6 max-w-xl font-light opacity-85">{t.banP}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={wa} target="_blank" rel="noopener noreferrer" className={btnGold}><WaIcon />{t.ctaWa}</a>
            <a href={TEL_2} className={btnOutlineLight}>{t.call} {PHONE_2}</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid gap-16 md:grid-cols-5">
          <div className="reveal md:col-span-2">
            <p className="eyebrow">{t.ctEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{t.ctH}</h2>
            <p className="mt-6 font-light text-muted-foreground">{t.ctP}</p>
            <dl className="mt-12 space-y-8">
              <div>
                <dt className="eyebrow">{t.phones}</dt>
                <dd className="mt-3 space-y-1 font-display text-2xl">
                  <a href={TEL_1} className="block hover:text-accent">{PHONE_1}</a>
                  <a href={TEL_2} className="block hover:text-accent">{PHONE_2}</a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t.follow}</dt>
                <dd className="mt-3"><a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="font-display text-2xl hover:text-accent">TikTok — @aj3luxuryhome</a></dd>
              </div>
            </dl>
          </div>
          <form onSubmit={submit} className="reveal space-y-6 border border-border bg-card p-8 md:col-span-3 md:p-12">
            <label className="block"><span className="eyebrow">{t.f.name}</span><input name="name" required autoComplete="name" className={field} /></label>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block"><span className="eyebrow">{t.f.arrival}</span><input type="date" name="arrival" className={field} /></label>
              <label className="block"><span className="eyebrow">{t.f.departure}</span><input type="date" name="departure" className={field} /></label>
            </div>
            <label className="block"><span className="eyebrow">{t.f.guests}</span><input type="number" min={1} name="guests" className={field} /></label>
            <label className="block"><span className="eyebrow">{t.f.message}</span><textarea name="message" rows={3} className={`${field} resize-none`} /></label>
            <button type="submit" className={`w-full ${btnDark}`}><WaIcon />{t.f.send}</button>
            <p className="text-center text-xs text-muted-foreground">{t.f.hint}</p>
          </form>
        </div>
      </Section>

      <footer className="border-t border-border bg-secondary px-6 py-14 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.18em]">AJ3 <span className="text-accent">LUXURY</span> HOME</p>
            <p className="mt-2 text-sm font-light text-muted-foreground">{t.foot}</p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {t.nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">{l}</a></li>)}
          </ul>
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-xs text-muted-foreground">© {new Date().getFullYear()} AJ3 Luxury Home · {t.concept}</p>
      </footer>

      {/* Mobile floating WhatsApp */}
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={t.ctaWa} className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg sm:hidden"><WaIcon /></a>
    </div>
  );
}
