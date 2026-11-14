import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { AMENITIES, apartments, formatPrice, getApartment } from "@/data/apartments";
import { galleryImages } from "@/data/gallery";
import { experiences, servicesNote } from "@/data/experiences";
import { apartmentEnquiry, experienceEnquiry, waLink } from "@/lib/contact";
import { pageHead, SITE_URL } from "@/lib/seo";

const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("routes", () => {
  const staticPaths = [
    "/",
    "/appartements",
    "/experience",
    "/galerie",
    "/videos",
    "/histoire",
    "/contact",
  ];

  it.each(staticPaths)("matches %s", (path) => {
    const matches = router.matchRoutes(path);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(apartments.map((apartment) => apartment.slug))(
    "matches the apartment page for %s",
    (slug) => {
      const path = `/appartements/${slug}`;
      const matches = router.matchRoutes(path);
      const last = matches.at(-1);
      expect(last?.routeId).toBe("/appartements/$slug");
      expect(last?.params).toMatchObject({ slug });
    },
  );

  it("does not match an unknown apartment to a page", () => {
    const matches = router.matchRoutes("/appartements/inconnu");
    expect(matches.at(-1)?.routeId).toBe("/appartements/$slug");
    expect(matches.at(-1)?.params).toMatchObject({ slug: "inconnu" });
  });
});

describe("apartment data", () => {
  it("contains the seven verified apartments with unique slugs", () => {
    expect(apartments).toHaveLength(7);
    expect(new Set(apartments.map((apartment) => apartment.slug)).size).toBe(7);
  });

  it("uses only known amenities and valid prices", () => {
    for (const apartment of apartments) {
      expect(apartment.price).toBeGreaterThanOrEqual(70000);
      expect(apartment.price).toBeLessThanOrEqual(100000);
      expect(apartment.area).toBeGreaterThan(0);
      for (const amenity of apartment.amenities) {
        expect(AMENITIES[amenity]).toBeDefined();
      }
    }
  });

  it("links every apartment to its official page", () => {
    for (const apartment of apartments) {
      expect(apartment.officialUrl).toMatch(/^https:\/\/aj3luxuryhome\.com\/accommodation\/.+\/$/);
      expect(apartment.gallery.length).toBeGreaterThanOrEqual(4);
      expect(apartment.gallery.every((image) => !/-(480|960|1600)\.webp$/.test(image.base))).toBe(
        true,
      );
    }
  });

  it("looks up apartments by slug", () => {
    expect(getApartment("inter")?.name).toBe("Inter");
    expect(getApartment("inconnu")).toBeUndefined();
  });

  it("formats prices in FCFA", () => {
    expect(formatPrice(70000)).toBe("70 000 FCFA");
    expect(formatPrice(100000)).toBe("100 000 FCFA");
  });
});

describe("contextual WhatsApp messages", () => {
  it("mentions the apartment name and opens the correct number", () => {
    const url = waLink(apartmentEnquiry("Inter"));
    expect(url.startsWith("https://wa.me/237658346919?text=")).toBe(true);
    expect(decodeURIComponent(url)).toContain("appartement Inter");
  });

  it("mentions the experience name", () => {
    expect(experienceEnquiry("Hammam")).toContain("« Hammam »");
  });

  it("keeps the required services disclaimer intact", () => {
    expect(servicesNote).toBe(
      "Certaines prestations sont proposées en supplément. Contactez notre équipe pour connaître les disponibilités et les tarifs.",
    );
    expect(experiences).toHaveLength(9);
  });
});

describe("SEO", () => {
  it("builds canonical and Open Graph URLs from the site origin", () => {
    const head = pageHead({
      title: "Titre",
      description: "Description",
      path: "/appartements/inter",
    });
    expect(head.links[0]).toEqual({ rel: "canonical", href: `${SITE_URL}/appartements/inter` });
    expect(head.meta).toContainEqual({
      property: "og:url",
      content: `${SITE_URL}/appartements/inter`,
    });
  });
});

describe("gallery data", () => {
  it("keeps every image base free of responsive suffixes", () => {
    expect(galleryImages.length).toBeGreaterThan(10);
    for (const image of galleryImages) {
      expect(image.base).toMatch(/^\/images\//);
      expect(image.base).not.toMatch(/-(480|960|1600)\.webp$/);
      expect(image.caption.length).toBeGreaterThan(0);
    }
  });
});
