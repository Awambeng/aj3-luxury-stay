import { useEffect } from "react";

let embedScriptRequested = false;

function loadTikTokScript() {
  if (embedScriptRequested || typeof document === "undefined") return;
  embedScriptRequested = true;
  if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) return;
  const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

export interface TikTokVideoItem {
  /** Full public TikTok video URL, e.g. https://www.tiktok.com/@aj3luxuryhome/video/123456789 */
  url: string;
  caption: string;
}

/**
 * Reusable official TikTok video embed. Add verified AJ3 video URLs to the
 * `videoGallery` array in src/data/videos.ts — no URLs are invented here.
 */
export function TikTokVideo({ video }: { video: TikTokVideoItem }) {
  useEffect(() => {
    loadTikTokScript();
  }, []);

  return (
    <figure className="border border-border bg-card">
      <blockquote
        className="tiktok-embed"
        cite={video.url}
        data-video-id={video.url.split("/").pop()}
        style={{ maxWidth: "605px", minWidth: "325px", margin: 0 }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href={video.url}>
            Voir la vidéo sur TikTok
          </a>
        </section>
      </blockquote>
      <figcaption className="border-t border-border px-4 py-3 text-[11px] font-normal leading-relaxed text-muted-foreground">
        {video.caption}
      </figcaption>
    </figure>
  );
}
