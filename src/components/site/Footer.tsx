import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { TikTokIcon, WhatsAppIcon } from "./Icons";
import {
  ADDRESS,
  EMAIL,
  MAPS,
  OFFICIAL_SITE,
  PHONE_1,
  PHONE_2,
  TEL_1,
  TEL_2,
  TIKTOK,
  messages,
  waLink,
} from "@/lib/contact";
import { apartments } from "@/data/apartments";

const nav = [
  { to: "/appartements", label: "Appartements" },
  { to: "/experience", label: "Expérience" },
  { to: "/galerie", label: "Galerie" },
  { to: "/videos", label: "Vidéos" },
  { to: "/histoire", label: "Notre histoire" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 md:px-12 md:pt-24">
        <div className="grid gap-14 border-b border-white/12 pb-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" aria-label="AJ3 Luxury Home — Accueil">
              <Logo light />
            </Link>
            <p className="mt-7 max-w-xs text-sm font-normal leading-relaxed text-white/72">
              Sept appartements meublés haut standing à Yaoundé-Messassi, pensés pour le confort, la
              discrétion et les séjours qui ont du sens.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AJ3 Luxury Home sur TikTok"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-champagne hover:text-champagne"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={waLink(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter AJ3 Luxury Home sur WhatsApp"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-champagne hover:text-champagne"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={OFFICIAL_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-white/65 transition hover:text-white"
              >
                Site officiel <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="Liens du pied de page">
            <p className="text-[10px] uppercase tracking-[0.26em] text-champagne">Explorer</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm font-normal text-white/78 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.26em] text-champagne">
              Nos appartements
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              {apartments.map((apartment) => (
                <li key={apartment.slug}>
                  <Link
                    to="/appartements/$slug"
                    params={{ slug: apartment.slug }}
                    className="text-sm font-normal text-white/78 transition hover:text-white"
                  >
                    {apartment.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.26em] text-champagne">Nous joindre</p>
            <ul className="mt-5 space-y-4 text-sm font-normal text-white/78">
              <li>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  {ADDRESS}
                </a>
              </li>
              <li>
                <a href={TEL_1} className="flex gap-3 transition hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  {PHONE_1}
                </a>
              </li>
              <li>
                <a href={TEL_2} className="flex gap-3 transition hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  {PHONE_2}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex gap-3 transition hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-[10px] uppercase tracking-[0.16em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AJ3 Luxury Home · Yaoundé-Messassi, Cameroun</p>
          <p className="normal-case tracking-normal text-white/50">
            Tarifs indicatifs à partir de — disponibilités et conditions à confirmer avec AJ3.
          </p>
        </div>
      </div>
    </footer>
  );
}
