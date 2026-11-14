export type ExperienceIcon =
  "pool" | "sauna" | "hammam" | "jacuzzi" | "massage" | "chef" | "breakfast" | "shuttle" | "wifi";

export type ExperienceAvailability = "Sur place" | "Sur demande" | "Accès payant" | "Inclus";

export interface Experience {
  slug: string;
  title: string;
  icon: ExperienceIcon;
  availability: ExperienceAvailability;
  summary: string;
  detail: string;
}

export const experiences: Experience[] = [
  {
    slug: "piscine",
    title: "Piscine intérieure",
    icon: "pool",
    availability: "Sur place",
    summary: "Un bassin abrité, au cœur de la résidence.",
    detail:
      "La piscine intérieure est l'un des espaces signature du complexe. Elle invite à la détente à l'abri des regards, dans une atmosphère paisible, à quelques pas des appartements.",
  },
  {
    slug: "sauna",
    title: "Sauna",
    icon: "sauna",
    availability: "Sur demande",
    summary: "La chaleur sèche, pour ralentir et récupérer.",
    detail:
      "Le sauna complète l'offre bien-être de la résidence. Les conditions d'accès et les horaires sont communiqués par l'équipe AJ3 lors de votre demande.",
  },
  {
    slug: "hammam",
    title: "Hammam",
    icon: "hammam",
    availability: "Accès payant",
    summary: "Un rituel de vapeur, entre calme et Tradition.",
    detail:
      "Le hammam est accessible pendant votre séjour. L'accès est payant ; notre équipe vous précise le tarif et les disponibilités au moment de la réservation.",
  },
  {
    slug: "jacuzzi",
    title: "Jacuzzi",
    icon: "jacuzzi",
    availability: "Accès payant",
    summary: "Un moment privatif, bercé par l'eau.",
    detail:
      "Le jacuzzi est proposé en complément du séjour. L'accès est payant et soumis à disponibilité. Certains appartements incluent un accès privilégié ; confirmez les conditions avec AJ3.",
  },
  {
    slug: "massages",
    title: "Massages",
    icon: "massage",
    availability: "Sur demande",
    summary: "Des mains expertes, dans l'intimité de votre séjour.",
    detail:
      "Des prestations de massage peuvent être organisées sur demande. Le type de soin, la durée et le tarif sont à convenir directement avec l'équipe AJ3.",
  },
  {
    slug: "chef",
    title: "Services de chef",
    icon: "chef",
    availability: "Sur demande",
    summary: "Une table personnalisée, africaine ou européenne.",
    detail:
      "Un chef peut préparer vos repas selon vos envies, avec des menus africains ou européens. Ce service est proposé sur demande ; les modalités et le tarif sont confirmés par AJ3.",
  },
  {
    slug: "petit-dejeuner",
    title: "Petit-déjeuner à la carte",
    icon: "breakfast",
    availability: "Sur demande",
    summary: "Commencer la journée sans se presser.",
    detail:
      "Un petit-déjeuner à la carte est proposé. Les conditions d'inclusion dépendent du séjour et sont à confirmer avec l'équipe avant votre arrivée.",
  },
  {
    slug: "navette",
    title: "Navette privée",
    icon: "shuttle",
    availability: "Sur demande",
    summary: "Votre trajet organisé, de l'aéroport à la résidence.",
    detail:
      "Une navette privée peut être organisée sur demande, ainsi qu'un transport vers l'établissement selon les conditions communiquées par AJ3. Réservez à l'avance.",
  },
  {
    slug: "wifi",
    title: "Wi-Fi haut débit",
    icon: "wifi",
    availability: "Inclus",
    summary: "Rester connecté, sans y penser.",
    detail:
      "Une connexion Wi-Fi haut débit est disponible dans les appartements, pour travailler, échanger ou simplement se divertir pendant le séjour.",
  },
];

export const servicesNote =
  "Certaines prestations sont proposées en supplément. Contactez notre équipe pour connaître les disponibilités et les tarifs.";
