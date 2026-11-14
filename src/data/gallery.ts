import type { ImageAsset } from "./apartments";

export type GalleryCategory =
  "Tout" | "Salons" | "Chambres" | "Cuisines" | "Salles de bain" | "Extérieurs" | "Détails";

export interface GalleryImage extends ImageAsset {
  category: Exclude<GalleryCategory, "Tout">;
  caption: string;
}

export const galleryCategories: GalleryCategory[] = [
  "Tout",
  "Salons",
  "Chambres",
  "Cuisines",
  "Salles de bain",
  "Extérieurs",
  "Détails",
];

export const galleryImages: GalleryImage[] = [
  {
    base: "/images/site/hero-piscine-aj3",
    alt: "Piscine intérieure et façade de la résidence AJ3 Luxury Home au crépuscule",
    category: "Extérieurs",
    caption: "La piscine et la résidence, à la tombée du jour.",
    position: "center 55%",
  },
  {
    base: "/images/apartments/inter/salon-baies-vitrees",
    alt: "Salon de l'appartement Inter avec canapé en cuir et baies vitrées",
    category: "Salons",
    caption: "Salon de l'appartement Inter.",
  },
  {
    base: "/images/apartments/sundsvalls/salon",
    alt: "Salon de l'appartement Sundsvalls avec canapé en cuir caramel",
    category: "Salons",
    caption: "Salon de l'appartement Sundsvalls.",
  },
  {
    base: "/images/apartments/sundsvalls/chambre-principale",
    alt: "Chambre principale de l'appartement Sundsvalls avec lit double",
    category: "Chambres",
    caption: "Chambre principale, appartement Sundsvalls.",
  },
  {
    base: "/images/apartments/sandviken/chambre-tete-de-lit",
    alt: "Chambre de l'appartement Sandviken avec tête de lit capitonnée",
    category: "Chambres",
    caption: "Chambre, appartement Sandviken.",
  },
  {
    base: "/images/apartments/al-qadsiah/salle-a-manger",
    alt: "Salle à manger de l'appartement Al Qadsiah avec table ronde en bois",
    category: "Salons",
    caption: "Espace repas, appartement Al Qadsiah.",
  },
  {
    base: "/images/apartments/sandviken/cuisine-equipee",
    alt: "Cuisine entièrement équipée de l'appartement Sandviken",
    category: "Cuisines",
    caption: "Cuisine équipée, appartement Sandviken.",
  },
  {
    base: "/images/apartments/valerenga/terrasse",
    alt: "Terrasse de l'appartement Valerenga avec fauteuils en rotin",
    category: "Extérieurs",
    caption: "Terrasse, appartement Valerenga.",
    position: "center 55%",
  },
  {
    base: "/images/apartments/inter/salle-de-bain",
    alt: "Salle de bains de l'appartement Inter avec double vasque",
    category: "Salles de bain",
    caption: "Salle de bains, appartement Inter.",
  },
  {
    base: "/images/apartments/atletico/chambre",
    alt: "Chambre de l'appartement Atletico avec lit double et luminaire suspendu",
    category: "Chambres",
    caption: "Chambre, appartement Atletico.",
  },
  {
    base: "/images/apartments/al-qadsiah/cuisine",
    alt: "Cuisine de l'appartement Al Qadsiah avec plan de travail en bois",
    category: "Cuisines",
    caption: "Cuisine, appartement Al Qadsiah.",
  },
  {
    base: "/images/apartments/voronezh/salle-a-manger",
    alt: "Salle à manger de l'appartement Voronezh dressée pour un repas",
    category: "Salons",
    caption: "Table dressée, appartement Voronezh.",
  },
  {
    base: "/images/apartments/inter/chambre",
    alt: "Chambre de l'appartement Inter avec tête de lit sculptée",
    category: "Chambres",
    caption: "Chambre, appartement Inter.",
  },
  {
    base: "/images/apartments/valerenga/coin-lecture",
    alt: "Coin lecture de l'appartement Valerenga avec fauteuils en rotin",
    category: "Salons",
    caption: "Coin lecture, appartement Valerenga.",
  },
  {
    base: "/images/apartments/sundsvalls/salle-de-bain",
    alt: "Salle de bains de l'appartement Sundsvalls avec douche à l'italienne",
    category: "Salles de bain",
    caption: "Douche à l'italienne, appartement Sundsvalls.",
  },
  {
    base: "/images/site/interieur-aj3",
    alt: "Espace de vie chaleureux de la résidence AJ3 Luxury Home",
    category: "Salons",
    caption: "Un espace de vie de la résidence.",
  },
  {
    base: "/images/site/detail-art-aj3",
    alt: "Détail de décoration et d'art dans la résidence AJ3 Luxury Home",
    category: "Détails",
    caption: "Objets et matières, un soin du détail.",
  },
  {
    base: "/images/apartments/atletico/salle-a-manger",
    alt: "Espace repas de l'appartement Atletico avec table en bois massif",
    category: "Salons",
    caption: "Espace repas, appartement Atletico.",
  },
  {
    base: "/images/apartments/voronezh/chambre",
    alt: "Chambre de l'appartement Voronezh avec lit double et rideaux clairs",
    category: "Chambres",
    caption: "Chambre, appartement Voronezh.",
  },
  {
    base: "/images/apartments/valerenga/salle-de-bain",
    alt: "Salle de bains de l'appartement Valerenga avec miroir rétroéclairé",
    category: "Salles de bain",
    caption: "Salle de bains, appartement Valerenga.",
  },
  {
    base: "/images/apartments/inter/details-etagere",
    alt: "Étagère et objets décoratifs de l'appartement Inter",
    category: "Détails",
    caption: "Détails, appartement Inter.",
  },
  {
    base: "/images/apartments/al-qadsiah/salon",
    alt: "Salon de l'appartement Al Qadsiah avec canapé clair",
    category: "Salons",
    caption: "Salon, appartement Al Qadsiah.",
  },
];
