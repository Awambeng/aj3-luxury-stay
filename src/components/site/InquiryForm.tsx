import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { ActionButton } from "./Button";
import { WhatsAppIcon } from "./Icons";
import { inquiryText, waLink } from "@/lib/contact";
import { apartments } from "@/data/apartments";

const field =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/55 focus:border-accent focus:outline-none focus:ring-0";
const label = "text-[9px] uppercase tracking-[0.24em] text-muted-foreground";

export function InquiryForm({
  defaultApartment,
  compact = false,
}: {
  defaultApartment?: string;
  compact?: boolean;
}) {
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const text = inquiryText({
      name: value("name"),
      arrival: value("arrival"),
      departure: value("departure"),
      guests: value("guests"),
      apartment: value("apartment"),
      message: value("message"),
    });
    const url = waLink(text);
    setWaUrl(url);
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-5" : "space-y-6"}>
      <div>
        <label className="block">
          <span className={label}>Nom complet *</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder="Votre nom"
          />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Arrivée</span>
          <input type="date" name="arrival" className={field} />
        </label>
        <label className="block">
          <span className={label}>Départ</span>
          <input type="date" name="departure" className={field} />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Voyageurs</span>
          <input
            type="number"
            min={1}
            max={9}
            name="guests"
            className={field}
            placeholder="2 adultes"
          />
        </label>
        <label className="block">
          <span className={label}>Appartement</span>
          <select
            name="apartment"
            defaultValue={defaultApartment ?? ""}
            className={`${field} cursor-pointer`}
          >
            <option value="">Tous / à définir</option>
            {apartments.map((apartment) => (
              <option key={apartment.slug} value={apartment.name}>
                {apartment.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className={label}>Message</span>
        <textarea
          name="message"
          rows={compact ? 2 : 3}
          className={`${field} resize-none`}
          placeholder="Précisez vos envies, vos questions ou vos besoins particuliers."
        />
      </label>

      <div className="pt-2">
        <ActionButton type="submit" className="w-full">
          <WhatsAppIcon /> Envoyer ma demande via WhatsApp
        </ActionButton>
        <p className="mt-4 text-center text-[11px] font-normal leading-relaxed text-muted-foreground">
          Aucune donnée n'est enregistrée sur ce site. Votre demande s'ouvre dans WhatsApp, prête à
          être envoyée à l'équipe AJ3.
        </p>
        {sent ? (
          <p aria-live="polite" className="mt-3 text-center text-[11px] text-muted-foreground">
            WhatsApp devrait s'ouvrir.{" "}
            {waUrl ? (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent underline underline-offset-4"
              >
                Ouvrir le message <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            ) : null}
          </p>
        ) : null}
      </div>
    </form>
  );
}
