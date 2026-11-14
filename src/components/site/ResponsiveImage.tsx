import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  base: string;
  alt: string;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  position?: string | undefined;
}

/**
 * Serves the 480 / 960 / 1600 px WebP variants generated in /public/images.
 * The base path never includes a size suffix.
 */
export function ResponsiveImage({
  base,
  alt,
  sizes = "100vw",
  className,
  width = 1600,
  height = 1067,
  priority = false,
  position,
}: ResponsiveImageProps) {
  return (
    <img
      src={`${base}-960.webp`}
      srcSet={`${base}-480.webp 480w, ${base}-960.webp 960w, ${base}-1600.webp 1600w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
