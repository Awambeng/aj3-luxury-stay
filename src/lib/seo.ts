export const SITE_URL = "https://aj3luxuryhome.com";
export const OG_IMAGE = `${SITE_URL}/images/og/aj3-luxury-home.jpg`;

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
}

export function pageHead({
  title,
  description,
  path,
  image = OG_IMAGE,
  imageAlt = "La piscine et la résidence AJ3 Luxury Home à Yaoundé-Messassi",
  type = "website",
}: PageMeta) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: imageAlt },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "AJ3 Luxury Home",
  description:
    "Résidence d'appartements meublés haut standing à Yaoundé-Messassi, avec piscine intérieure, sauna, hammam, jacuzzi et services premium.",
  url: SITE_URL,
  image: OG_IMAGE,
  telephone: ["+237 658 34 69 19", "+237 682 81 48 19"],
  email: "info@aj3luxuryhome.com",
  priceRange: "70 000 – 100 000 FCFA",
  currenciesAccepted: "XAF",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yaoundé",
    addressRegion: "Centre",
    addressCountry: "CM",
    streetAddress: "Messassi",
  },
  amenityFeature: [
    "Piscine intérieure",
    "Sauna",
    "Hammam",
    "Jacuzzi",
    "Wi-Fi haut débit",
    "Parking gratuit",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  sameAs: ["https://www.tiktok.com/@aj3luxuryhome"],
};
