import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ResponsiveImage } from "./ResponsiveImage";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const image = images[index];

  const go = useCallback(
    (direction: number) => {
      onNavigate((index + direction + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go]);

  if (!image) return null;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="flex h-[100dvh] w-screen max-w-none flex-col border-0 bg-[oklch(0.15_0.01_60/0.97)] p-0 text-white shadow-none sm:h-[92dvh] sm:w-[92vw] sm:max-w-[92vw] sm:rounded-none"
        aria-describedby={undefined}
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <DialogTitle className="sr-only">{image.caption}</DialogTitle>
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/75">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label="Fermer la galerie"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">
          <img
            src={`${image.base}-1600.webp`}
            srcSet={`${image.base}-960.webp 960w, ${image.base}-1600.webp 1600w`}
            sizes="(min-width: 640px) 80vw, 100vw"
            alt={image.alt}
            className="max-h-full max-w-full object-contain"
            style={image.position ? { objectPosition: image.position } : undefined}
          />
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/20 text-white transition hover:border-white/60 hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:left-6"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/20 text-white transition hover:border-white/60 hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:right-6"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="border-t border-white/10 px-5 py-4 text-center">
          <p className="text-sm font-normal text-white/80">{image.caption}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function GalleryGrid({
  images = galleryImages,
  className,
}: {
  images?: GalleryImage[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div
        className={cn(
          "columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]",
          className,
        )}
      >
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image.base}-${index}`}
            onClick={() => setOpen(index)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden bg-secondary text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            aria-label={`Agrandir : ${image.caption}`}
          >
            <div
              className={cn(
                "w-full overflow-hidden",
                index % 7 === 0
                  ? "aspect-[4/5]"
                  : index % 5 === 0
                    ? "aspect-square"
                    : index % 3 === 0
                      ? "aspect-[5/4]"
                      : "aspect-[4/3]",
              )}
            >
              <ResponsiveImage
                base={image.base}
                alt={image.alt}
                position={image.position}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="text-[11px] uppercase tracking-[0.14em] text-white">{image.caption}</p>
              <Maximize2 className="h-4 w-4 shrink-0 text-white/80" aria-hidden />
            </div>
          </button>
        ))}
      </div>
      {open !== null ? (
        <Lightbox images={images} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
      ) : null}
    </>
  );
}
