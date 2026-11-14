export type AmenityKey =
  | "bedrooms"
  | "bathrooms"
  | "kitchen"
  | "ac"
  | "soundproof"
  | "tv"
  | "wifi"
  | "washer"
  | "dishwasher"
  | "minibar"
  | "terrace"
  | "poolView"
  | "interiorView"
  | "cityView"
  | "wellness"
  | "parking";

export interface Amenity {
  label: string;
  detail: string;
}

export const AMENITIES: Record<AmenityKey, Amenity> = {
  bedrooms: { label: "2 chambres", detail: "Deux chambres climatisées et insonorisées." },
  bathrooms: {
    label: "2 salles de bains",
    detail: "Équipées de douches à l'italienne.",
  },
  kitchen: {
    label: "Cuisine équipée",
    detail: "Plaque de cuisson, réfrigérateur, lave-vaisselle et ustensiles.",
  },
  ac: { label: "Climatisation", detail: "Un confort maîtrisé à toute heure." },
  soundproof: { label: "Insonorisation", detail: "Des espaces pensés pour le calme." },
  tv: {
    label: "TV & streaming",
    detail: "Écran plat avec services de streaming à la demande.",
  },
  wifi: {
    label: "Wi-Fi haut débit",
    detail: "Une connexion fiable pour travailler ou se divertir.",
  },
  washer: { label: "Lave-linge", detail: "Pour un séjour autonome, court ou prolongé." },
  dishwasher: { label: "Lave-vaisselle", detail: "Intégré à la cuisine entièrement équipée." },
  minibar: { label: "Minibar", detail: "À disposition dans l'appartement." },
  terrace: { label: "Terrasse", detail: "Un espace extérieur privatif pour se détendre." },
  poolView: { label: "Vue piscine", detail: "Sur la piscine intérieure du complexe." },
  interiorView: { label: "Vue intérieure", detail: "Sur les espaces paisibles de la résidence." },
  cityView: { label: "Vue ville", detail: "Un aperçu de Yaoundé depuis l'appartement." },
  wellness: {
    label: "Accès bien-être",
    detail: "Jacuzzi et hammam accessibles selon conditions (payant).",
  },
  parking: { label: "Parking gratuit", detail: "Stationnement privé pour les résidents." },
};

export interface ImageAsset {
  /** Base path without the responsive suffix, e.g. /images/apartments/inter/salon */
  base: string;
  alt: string;
  /** CSS object-position value for crops */
  position?: string;
}

export interface Apartment {
  slug: string;
  name: string;
  area: number;
  adults: number;
  children: number;
  price: number;
  tagline: string;
  description: string[];
  amenities: AmenityKey[];
  hero: ImageAsset;
  gallery: ImageAsset[];
  officialUrl: string;
  featured?: boolean;
}

const official = (path: string) => `https://aj3luxuryhome.com/accommodation/${path}/`;

export const apartments: Apartment[] = [
  {
    slug: "sundsvalls",
    name: "Sundsvalls",
    area: 75,
    adults: 4,
    children: 2,
    price: 85000,
    tagline: "Une parenthèse lumineuse, tournée vers l'intérieur de la résidence.",
    description: [
      "L'appartement Sundsvalls propose une expérience de séjour haut de gamme, avec accès aux équipements bien-être du complexe, notamment le jacuzzi et le hammam. Spacieux et confortable, il dispose de deux chambres et de deux salles de bains avec douches à l'italienne, d'un salon accueillant et d'une terrasse idéale pour se détendre.",
      "La cuisine entièrement équipée comprend une plaque de cuisson, un réfrigérateur, un lave-vaisselle et tous les ustensiles nécessaires. Climatisé et insonorisé, l'appartement dispose également d'une télévision à écran plat avec services de streaming. Il propose deux lits pour un confort et une intimité optimaux.",
    ],
    amenities: [
      "bedrooms",
      "bathrooms",
      "kitchen",
      "ac",
      "soundproof",
      "tv",
      "wifi",
      "terrace",
      "interiorView",
      "wellness",
      "parking",
    ],
    hero: {
      base: "/images/apartments/sundsvalls/salon",
      alt: "Salon lumineux de l'appartement Sundsvalls avec canapé en cuir et grandes fenêtres",
    },
    gallery: [
      {
        base: "/images/apartments/sundsvalls/salon",
        alt: "Salon de l'appartement Sundsvalls, canapé en cuir et lumière naturelle",
      },
      {
        base: "/images/apartments/sundsvalls/chambre-principale",
        alt: "Chambre principale de l'appartement Sundsvalls avec lit double et tête de lit rembourrée",
      },
      {
        base: "/images/apartments/sundsvalls/chambre-tons-chauds",
        alt: "Seconde chambre de l'appartement Sundsvalls aux tons chauds",
      },
      {
        base: "/images/apartments/sundsvalls/salle-de-bain",
        alt: "Salle de bains de l'appartement Sundsvalls avec douche à l'italienne",
      },
      {
        base: "/images/apartments/sundsvalls/details-bibliotheque",
        alt: "Détail de la bibliothèque et des objets décoratifs de l'appartement Sundsvalls",
      },
    ],
    officialUrl: official("superior-room"),
    featured: true,
  },
  {
    slug: "sandviken",
    name: "Sandviken",
    area: 75,
    adults: 4,
    children: 2,
    price: 85000,
    tagline: "L'élégance discrète d'un appartement pensé pour le repos.",
    description: [
      "L'appartement Sandviken se distingue par ses prestations bien-être haut de gamme, idéales pour une expérience de détente exclusive. Spacieux et élégant, il dispose de deux chambres et de deux salles de bains avec douches à l'italienne, ainsi que d'un espace salon convivial et d'une terrasse propice au repos.",
      "La cuisine entièrement équipée permet de préparer vos repas en toute autonomie et comprend une plaque de cuisson, un réfrigérateur, un lave-vaisselle et les ustensiles nécessaires. Climatisé et insonorisé, l'appartement est doté d'une télévision à écran plat avec services de streaming, d'un lave-linge et offre une agréable vue sur la piscine.",
    ],
    amenities: [
      "bedrooms",
      "bathrooms",
      "kitchen",
      "ac",
      "soundproof",
      "tv",
      "wifi",
      "washer",
      "terrace",
      "poolView",
      "parking",
    ],
    hero: {
      base: "/images/apartments/sandviken/chambre-tete-de-lit",
      alt: "Chambre de l'appartement Sandviken avec lit double et tête de lit capitonnée",
    },
    gallery: [
      {
        base: "/images/apartments/sandviken/chambre-tete-de-lit",
        alt: "Chambre de l'appartement Sandviken avec lit double et tête de lit capitonnée",
      },
      {
        base: "/images/apartments/sandviken/cuisine-equipee",
        alt: "Cuisine entièrement équipée de l'appartement Sandviken",
      },
      {
        base: "/images/apartments/sandviken/literie",
        alt: "Détail de la literie et des coussins dans l'appartement Sandviken",
      },
      {
        base: "/images/apartments/sandviken/details-sculpture",
        alt: "Sculpture décorative dans l'appartement Sandviken",
      },
    ],
    officialUrl: official("appartement-sandviken"),
  },
  {
    slug: "atletico",
    name: "Atletico",
    area: 95,
    adults: 4,
    children: 2,
    price: 100000,
    tagline: "95 m² de raffinement, entre salon, terrasse et lumière.",
    description: [
      "L'appartement Atletico propose une expérience luxueuse et raffinée. Spacieux et élégamment aménagé, il dispose de deux chambres et de deux salles de bains avec douches à l'italienne, ainsi que d'un espace salon confortable et d'une terrasse idéale pour se détendre.",
      "La cuisine entièrement équipée permet de préparer vos repas en toute autonomie et comprend une plaque de cuisson, un réfrigérateur, un lave-vaisselle et tous les ustensiles nécessaires. Climatisé et parfaitement insonorisé, l'appartement est doté d'une télévision à écran plat avec services de streaming, d'un lave-linge et offre une agréable vue sur la piscine.",
    ],
    amenities: [
      "bedrooms",
      "bathrooms",
      "kitchen",
      "ac",
      "soundproof",
      "tv",
      "wifi",
      "washer",
      "terrace",
      "poolView",
      "parking",
    ],
    hero: {
      base: "/images/apartments/atletico/chambre",
      alt: "Chambre de l'appartement Atletico avec lit double et décoration soignée",
    },
    gallery: [
      {
        base: "/images/apartments/atletico/chambre",
        alt: "Chambre de l'appartement Atletico avec lit double et décoration soignée",
      },
      {
        base: "/images/apartments/atletico/salon",
        alt: "Salon de l'appartement Atletico, assises élégantes et lumière naturelle",
      },
      {
        base: "/images/apartments/atletico/salle-a-manger",
        alt: "Espace repas de l'appartement Atletico avec table en bois",
      },
      {
        base: "/images/apartments/atletico/chambre-verte",
        alt: "Seconde chambre de l'appartement Atletico aux tonalités vertes",
      },
      {
        base: "/images/apartments/atletico/details-salon",
        alt: "Détail du mobilier et de la décoration du salon Atletico",
      },
    ],
    officialUrl: official("signature-room"),
    featured: true,
  },
  {
    slug: "voronezh",
    name: "Voronezh",
    area: 75,
    adults: 4,
    children: 2,
    price: 85000,
    tagline: "Des volumes généreux et une atmosphère paisible.",
    description: [
      "L'appartement Voronezh offre une expérience haut de gamme unique. Spacieux et soigneusement aménagé, il dispose de deux chambres et de deux salles de bains avec douches à l'italienne, ainsi qu'un espace salon confortable et une terrasse idéale pour se détendre.",
      "La cuisine entièrement équipée comprend une plaque de cuisson, un réfrigérateur, un lave-vaisselle et l'ensemble des ustensiles nécessaires à la préparation des repas. Climatisé et parfaitement insonorisé, l'appartement est doté d'une télévision à écran plat avec services de streaming, d'un lave-linge, d'un minibar et offre une agréable vue sur la piscine.",
    ],
    amenities: [
      "bedrooms",
      "bathrooms",
      "kitchen",
      "ac",
      "soundproof",
      "tv",
      "wifi",
      "washer",
      "minibar",
      "terrace",
      "poolView",
      "parking",
    ],
    hero: {
      base: "/images/apartments/voronezh/chambre",
      alt: "Chambre de l'appartement Voronezh avec lit double et lumière douce",
    },
    gallery: [
      {
        base: "/images/apartments/voronezh/chambre",
        alt: "Chambre de l'appartement Voronezh avec lit double et lumière douce",
      },
      {
        base: "/images/apartments/voronezh/chambre-grise",
        alt: "Seconde chambre de l'appartement Voronezh aux tons gris",
      },
      {
        base: "/images/apartments/voronezh/salle-a-manger",
        alt: "Salle à manger de l'appartement Voronezh avec table dressée",
      },
      {
        base: "/images/apartments/voronezh/salon",
        alt: "Salon de l'appartement Voronezh avec canapé et grande fenêtre",
        position: "center 60%",
      },
      {
        base: "/images/apartments/voronezh/salon-lumineux",
        alt: "Vue du salon lumineux de l'appartement Voronezh",
      },
    ],
    officialUrl: official("deluxe-room"),
  },
  {
    slug: "al-qadsiah",
    name: "Al Qadsiah",
    area: 95,
    adults: 4,
    children: 2,
    price: 100000,
    tagline: "Une adresse de prestige, entre vue piscine et vue ville.",
    description: [
      "L'appartement Al Qadsiah offre un cadre luxueux et apaisant. Spacieux et élégamment aménagé, il dispose de deux chambres et de deux salles de bains avec douches à l'italienne, ainsi que d'un espace salon confortable et d'une terrasse dédiée à la détente.",
      "La cuisine entièrement équipée comprend une plaque de cuisson, un réfrigérateur, un lave-vaisselle et tous les ustensiles nécessaires à la préparation des repas. Climatisé et parfaitement insonorisé, l'appartement est doté d'une télévision à écran plat avec services de streaming et offre une agréable vue sur la piscine. Il propose deux lits, garantissant confort, intimité et sérénité durant le séjour.",
    ],
    amenities: [
      "bedrooms",
      "bathrooms",
      "kitchen",
      "ac",
      "soundproof",
      "tv",
      "wifi",
      "terrace",
      "poolView",
      "cityView",
      "parking",
    ],
    hero: {
      base: "/images/apartments/al-qadsiah/salon",
      alt: "Salon de l'appartement Al Qadsiah, canapé clair et grandes ouvertures",
    },
    gallery: [
      {
        base: "/images/apartments/al-qadsiah/salon",
        alt: "Salon de l'appartement Al Qadsiah, canapé clair et grandes ouvertures",
      },
      {
        base: "/images/apartments/al-qadsiah/cuisine",
        alt: "Cuisine équipée de l'appartement Al Qadsiah avec plan de travail en bois",
      },
      {
        base: "/images/apartments/al-qadsiah/salle-a-manger",
        alt: "Salle à manger de l'appartement Al Qadsiah avec table ronde",
      },
      {
        base: "/images/apartments/al-qadsiah/salle-de-bain",
        alt: "Salle de bains de l'appartement Al Qadsiah avec douche à l'italienne",
      },
      {
        base: "/images/apartments/al-qadsiah/details-bibliotheque",
        alt: "Détail de la bibliothèque de l'appartement Al Qadsiah",
      },
    ],
    officialUrl: official("appartement-executif"),
    featured: true,
  },
  {
    slug: "inter",
    name: "Inter",
    area: 75,
    adults: 4,
    children: 2,
    price: 70000,
    tagline: "L'appartement bien-être, avec accès jacuzzi et hammam.",
    description: [
      "Cet appartement luxueux offre une expérience de bien-être complète, avec accès au jacuzzi et au hammam. Spacieux et élégant, il dispose de deux chambres et de deux salles de bains équipées de douches à l'italienne, ainsi que d'un espace salon confortable.",
      "La cuisine entièrement équipée comprend une plaque de cuisson, un réfrigérateur, un lave-vaisselle et tous les ustensiles nécessaires. Climatisé et parfaitement insonorisé, l'appartement est doté d'une télévision à écran plat avec services de streaming, d'un lave-linge, d'un minibar et offre une agréable vue sur la piscine. Il propose deux lits pour un séjour alliant confort, intimité et raffinement.",
    ],
    amenities: [
      "bedrooms",
      "bathrooms",
      "kitchen",
      "ac",
      "soundproof",
      "tv",
      "wifi",
      "washer",
      "minibar",
      "poolView",
      "wellness",
      "parking",
    ],
    hero: {
      base: "/images/apartments/inter/salon-baies-vitrees",
      alt: "Salon de l'appartement Inter avec grandes baies vitrées et canapé en cuir",
    },
    gallery: [
      {
        base: "/images/apartments/inter/salon-baies-vitrees",
        alt: "Salon de l'appartement Inter avec grandes baies vitrées et canapé en cuir",
      },
      {
        base: "/images/apartments/inter/salle-a-manger",
        alt: "Salle à manger de l'appartement Inter avec table en marbre",
      },
      {
        base: "/images/apartments/inter/chambre",
        alt: "Chambre de l'appartement Inter avec lit double et tête de lit sculptée",
      },
      {
        base: "/images/apartments/inter/salle-de-bain",
        alt: "Salle de bains de l'appartement Inter avec double vasque et douche",
      },
      {
        base: "/images/apartments/inter/details-etagere",
        alt: "Détail de l'étagère et des objets décoratifs de l'appartement Inter",
      },
      {
        base: "/images/apartments/inter/details-decoration",
        alt: "Décoration murale et luminaire de l'appartement Inter",
      },
    ],
    officialUrl: official("appartement-inter"),
  },
  {
    slug: "valerenga",
    name: "Valerenga",
    area: 75,
    adults: 4,
    children: 2,
    price: 85000,
    tagline: "Une terrasse, la lumière de Yaoundé et le calme en plus.",
    description: [
      "L'appartement Valerenga offre une expérience exclusive. Spacieux et soigneusement aménagé, il dispose de deux chambres et de deux salles de bains avec douches à l'italienne, ainsi que d'un espace salon confortable et d'une terrasse propice à la détente.",
      "La cuisine entièrement équipée comprend une plaque de cuisson, un réfrigérateur, un lave-vaisselle et l'ensemble des ustensiles nécessaires. Climatisé et insonorisé, l'appartement est doté d'une télévision à écran plat avec services de streaming, d'un lave-linge et offre une agréable vue sur la piscine. Il dispose de deux lits, garantissant confort, intimité et sérénité tout au long du séjour.",
    ],
    amenities: [
      "bedrooms",
      "bathrooms",
      "kitchen",
      "ac",
      "soundproof",
      "tv",
      "wifi",
      "washer",
      "terrace",
      "poolView",
      "parking",
    ],
    hero: {
      base: "/images/apartments/valerenga/terrasse",
      alt: "Terrasse de l'appartement Valerenga avec fauteuils et vue dégagée",
      position: "center 55%",
    },
    gallery: [
      {
        base: "/images/apartments/valerenga/terrasse",
        alt: "Terrasse de l'appartement Valerenga avec fauteuils et vue dégagée",
        position: "center 55%",
      },
      {
        base: "/images/apartments/valerenga/salon",
        alt: "Salon de l'appartement Valerenga, canapé en cuir et lumière naturelle",
      },
      {
        base: "/images/apartments/valerenga/chambre",
        alt: "Chambre de l'appartement Valerenga avec lit double et décoration sobre",
      },
      {
        base: "/images/apartments/valerenga/salle-de-bain",
        alt: "Salle de bains de l'appartement Valerenga avec douche à l'italienne",
      },
      {
        base: "/images/apartments/valerenga/coin-lecture",
        alt: "Coin lecture de l'appartement Valerenga avec fauteuils en rotin",
      },
      {
        base: "/images/apartments/valerenga/coin-repas",
        alt: "Coin repas de l'appartement Valerenga avec table en bois clair",
      },
    ],
    officialUrl: official("appartement-valerenga"),
  },
];

export const apartmentSlugs = apartments.map((a) => a.slug);

export function getApartment(slug: string) {
  return apartments.find((a) => a.slug === slug);
}

export function formatPrice(price: number) {
  return `${price.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} FCFA`;
}

export const priceBands = [
  { id: "all", label: "Tous les tarifs", min: 0, max: Infinity },
  { id: "70-85", label: "70 000 – 85 000 FCFA", min: 0, max: 85000 },
  { id: "95-100", label: "95 000 – 100 000 FCFA", min: 95000, max: Infinity },
] as const;

export type PriceBandId = (typeof priceBands)[number]["id"];
