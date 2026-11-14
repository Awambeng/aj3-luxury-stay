import { WhatsAppIcon } from "./Icons";
import { messages, waLink } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter AJ3 Luxury Home sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 border border-white/10 bg-[oklch(0.42_0.09_150)] px-4 py-3.5 text-white shadow-[0_12px_40px_-12px_oklch(0.2_0.02_150/0.55)] transition hover:bg-[oklch(0.36_0.08_150)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden text-[10px] uppercase tracking-[0.18em] sm:inline">WhatsApp</span>
    </a>
  );
}
