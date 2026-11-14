import type { TikTokVideoItem } from "@/components/site/TikTokVideo";

/**
 * Add verified public AJ3 TikTok video URLs here once the owner has approved
 * each video for use on the website. Keep the caption descriptive.
 *
 * Example (do not use until the URL is verified):
 * { url: "https://www.tiktok.com/@aj3luxuryhome/video/0000000000000000000", caption: "Visite de l'appartement Inter" }
 */
export const videoGallery: TikTokVideoItem[] = [];

export const videoChapters = [
  {
    title: "Les appartements",
    text: "Des intérieurs spacieux, deux chambres, deux salles de bains : découvrez les volumes en images.",
    imageBase: "/images/apartments/sundsvalls/salon",
    imageAlt: "Salon de l'appartement Sundsvalls chez AJ3 Luxury Home",
    href: "https://www.tiktok.com/@aj3luxuryhome",
  },
  {
    title: "Le bien-être",
    text: "Piscine intérieure, hammam, jacuzzi : les espaces qui prolongent le séjour.",
    imageBase: "/images/site/hero-piscine-aj3",
    imageAlt: "Piscine intérieure de la résidence AJ3 Luxury Home",
    href: "https://www.tiktok.com/@aj3luxuryhome",
  },
  {
    title: "Yaoundé-Messassi",
    text: "Le quartier, la résidence et l'art de recevoir, filmés au quotidien.",
    imageBase: "/images/site/salle-a-manger-aj3",
    imageAlt: "Espace repas de la résidence AJ3 Luxury Home",
    href: "https://www.tiktok.com/@aj3luxuryhome",
  },
] as const;
