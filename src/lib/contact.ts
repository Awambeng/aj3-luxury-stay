export const WA_NUMBER = "237658346919";
export const PHONE_1 = "+237 658 34 69 19";
export const PHONE_2 = "+237 682 81 48 19";
export const TEL_1 = "tel:+237658346919";
export const TEL_2 = "tel:+237682814819";
export const EMAIL = "info@aj3luxuryhome.com";
export const ADDRESS = "Yaoundé-Messassi, Cameroun";
export const TIKTOK = "https://www.tiktok.com/@aj3luxuryhome";
export const OFFICIAL_SITE = "https://aj3luxuryhome.com/";
export const WHATSAPP = "https://wa.me/237658346919";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Yaound%C3%A9+Messassi+Cameroun";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const messages = {
  general:
    "Bonjour AJ3 Luxury Home, je souhaite obtenir des informations sur vos appartements meublés et vos disponibilités.",
  availability:
    "Bonjour AJ3 Luxury Home, je souhaite connaître vos disponibilités et vos tarifs. Mes dates : … Nombre de personnes : …",
  contact:
    "Bonjour AJ3 Luxury Home, je souhaite échanger avec votre équipe au sujet d'un séjour à Yaoundé.",
  breakfast:
    "Bonjour AJ3 Luxury Home, je souhaite connaître les conditions du petit-déjeuner et des services bien-être pour mon séjour.",
  experience:
    "Bonjour AJ3 Luxury Home, je souhaite en savoir plus sur les expériences et services proposés pendant un séjour.",
} as const;

export function apartmentEnquiry(apartment: string) {
  return `Bonjour AJ3 Luxury Home, je souhaite obtenir des informations sur la disponibilité et le tarif de l'appartement ${apartment}. Merci.`;
}

export function experienceEnquiry(experience: string) {
  return `Bonjour AJ3 Luxury Home, je souhaite obtenir des informations sur « ${experience} » (disponibilité, conditions et tarif). Merci.`;
}

export interface Inquiry {
  name: string;
  arrival: string;
  departure: string;
  guests: string;
  message: string;
  apartment?: string;
}

export function inquiryText(i: Inquiry, lang: "fr" | "en" = "fr") {
  const L =
    lang === "fr"
      ? [
          "Bonjour AJ3 Luxury Home, je souhaite faire une demande de réservation.",
          "Nom",
          "Arrivée",
          "Départ",
          "Voyageurs",
          "Appartement",
          "Message",
        ]
      : [
          "Hello AJ3 Luxury Home, I would like to make a booking inquiry.",
          "Name",
          "Arrival",
          "Departure",
          "Guests",
          "Apartment",
          "Message",
        ];
  const lines = [L[0]];
  if (i.name) lines.push(`${L[1]} : ${i.name}`);
  if (i.arrival) lines.push(`${L[2]} : ${i.arrival}`);
  if (i.departure) lines.push(`${L[3]} : ${i.departure}`);
  if (i.guests) lines.push(`${L[4]} : ${i.guests}`);
  if (i.apartment) lines.push(`${L[5]} : ${i.apartment}`);
  if (i.message) lines.push(`${L[6]} : ${i.message}`);
  return lines.join("\n");
}
