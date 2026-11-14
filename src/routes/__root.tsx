import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ActionLink } from "@/components/site/Button";
import { WhatsAppIcon } from "@/components/site/Icons";
import { messages, waLink } from "@/lib/contact";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70svh] items-center bg-background px-6 py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-7xl text-accent/40">404</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Cette page n'existe pas.</h1>
        <p className="mx-auto mt-5 max-w-md text-sm font-normal leading-relaxed text-muted-foreground">
          Le lien que vous avez suivi est peut-être obsolète. Retrouvez nos appartements ou
          écrivez-nous directement.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/appartements"
            className="inline-flex items-center justify-center bg-primary px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            Voir les appartements
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-foreground/30 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] transition hover:bg-foreground hover:text-background"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70svh] items-center bg-background px-6 py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Un instant</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">
          Cette page n'a pas pu s'afficher.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm font-normal leading-relaxed text-muted-foreground">
          Un incident technique est survenu. Réessayez, ou contactez-nous sur WhatsApp : notre
          équipe reste disponible.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            Réessayer
          </button>
          <ActionLink
            href={waLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <WhatsAppIcon /> WhatsApp
          </ActionLink>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AJ3 Luxury Home — Appartements meublés haut standing à Yaoundé" },
      {
        name: "description",
        content:
          "Sept appartements meublés haut standing à Yaoundé-Messassi, avec piscine intérieure, sauna, hammam, jacuzzi et services premium.",
      },
      { name: "theme-color", content: "#211c17" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AJ3 Luxury Home" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-background">
        <Header />
        <main id="contenu" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </QueryClientProvider>
  );
}
