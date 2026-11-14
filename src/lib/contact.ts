export const WA_NUMBER = "237658346919";
export const PHONE_1 = "+237 658 346 919";
export const PHONE_2 = "+237 682 814 819";
export const TEL_2 = "tel:+237682814819";
export const TEL_1 = "tel:+237658346919";
export const TIKTOK = "https://www.tiktok.com/@aj3luxuryhome";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export interface Inquiry { name: string; arrival: string; departure: string; guests: string; message: string }

export function inquiryText(i: Inquiry, lang: "fr" | "en" = "fr") {
  const L = lang === "fr"
    ? ["Bonjour AJ3 Luxury Home, je souhaite faire une demande de réservation.", "Nom", "Arrivée", "Départ", "Voyageurs", "Message"]
    : ["Hello AJ3 Luxury Home, I would like to make a booking inquiry.", "Name", "Arrival", "Departure", "Guests", "Message"];
  const lines = [L[0]];
  if (i.name) lines.push(`${L[1]} : ${i.name}`);
  if (i.arrival) lines.push(`${L[2]} : ${i.arrival}`);
  if (i.departure) lines.push(`${L[3]} : ${i.departure}`);
  if (i.guests) lines.push(`${L[4]} : ${i.guests}`);
  if (i.message) lines.push(`${L[5]} : ${i.message}`);
  return lines.join("\n");
}
