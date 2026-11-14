import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { TIKTOK } from "@/lib/contact";

let scriptRequested = false;

/**
 * Official TikTok creator embed. TikTok renders the profile's latest public
 * videos. If the embed is blocked or unavailable, the visible link remains.
 */
export function TikTokEmbed() {
  useEffect(() => {
    if (scriptRequested) return;
    scriptRequested = true;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.tiktok.com/embed.js"]',
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[780px] bg-[oklch(0.985_0.006_85)] p-3 sm:p-6">
      <blockquote
        className="tiktok-embed"
        cite={TIKTOK}
        data-unique-id="aj3luxuryhome"
        data-embed-from="oembed"
        data-embed-type="creator"
        style={{ maxWidth: "780px", minWidth: "288px", margin: 0 }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${TIKTOK}?refer=creator_embed`}
            className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4"
          >
            @aj3luxuryhome <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </section>
      </blockquote>
    </div>
  );
}
