import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { ActionLink } from "./Button";
import { TEL_1, PHONE_1, messages, waLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/appartements", label: "Appartements" },
  { to: "/experience", label: "Expérience" },
  { to: "/galerie", label: "Galerie" },
  { to: "/videos", label: "Vidéos" },
  { to: "/histoire", label: "Histoire" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-background focus:px-4 focus:py-2 focus:text-foreground"
      >
        Aller au contenu
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "border-b border-white/10 bg-gradient-to-b from-[oklch(0.12_0.01_60/0.6)] via-[oklch(0.12_0.01_60/0.25)] to-transparent text-white"
            : "border-b border-border bg-background/95 text-foreground shadow-[0_1px_0_oklch(0.86_0.025_78/0.35)] backdrop-blur-md",
        )}
      >
        <nav
          className="mx-auto flex h-[5.5rem] max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 md:px-12"
          aria-label="Navigation principale"
        >
          <Link to="/" aria-label="AJ3 Luxury Home — Accueil" className="shrink-0">
            <Logo light={transparent} />
          </Link>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "relative py-2 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-accent",
                    isActive(item.to)
                      ? transparent
                        ? "text-champagne"
                        : "text-accent"
                      : transparent
                        ? "text-white/90"
                        : "text-foreground/80",
                  )}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-300",
                      isActive(item.to) ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={TEL_1}
              className={cn(
                "hidden items-center gap-2 text-[11px] uppercase tracking-[0.14em] transition-colors xl:flex",
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden /> {PHONE_1}
            </a>
            <ActionLink
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              variant={transparent ? "gold" : "dark"}
              className="hidden px-5 py-3 sm:inline-flex"
            >
              <WhatsAppIcon /> Réserver
            </ActionLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center border lg:hidden",
                transparent ? "border-white/30" : "border-foreground/25",
              )}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-primary text-primary-foreground lg:hidden"
        >
          <div className="flex h-[5.5rem] items-center justify-between px-6 sm:px-8">
            <Link to="/" onClick={() => setOpen(false)} aria-label="AJ3 Luxury Home — Accueil">
              <Logo light />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white transition hover:border-white/60"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-between px-6 pb-10 pt-4 sm:px-8">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline gap-4 border-b border-white/10 py-3.5 font-display text-3xl transition hover:text-champagne sm:text-4xl",
                      isActive(item.to) ? "text-champagne" : "text-white",
                    )}
                  >
                    <span className="text-[9px] tracking-[0.2em] text-white/55">0{index + 1}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-6">
              <ActionLink
                href={waLink(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                className="w-full"
              >
                <WhatsAppIcon /> Réserver mon séjour
              </ActionLink>
              <div className="text-[11px] leading-relaxed text-white/60">
                <a href={TEL_1} className="block transition hover:text-white">
                  {PHONE_1}
                </a>
                <p className="mt-1">Yaoundé-Messassi, Cameroun</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
