import {
  Bath,
  BedDouble,
  CarFront,
  ChefHat,
  Coffee,
  Droplets,
  Dumbbell,
  Flame,
  Waves,
  Wifi,
  Wind,
  WashingMachine,
  Tv,
  Utensils,
  Wine,
  Sparkles,
  Building2,
  MapPin,
  ShowerHead,
  CookingPot,
  VolumeX,
  ParkingCircle,
} from "lucide-react";
import type { AmenityKey } from "@/data/apartments";
import type { ExperienceIcon } from "@/data/experiences";

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${className} fill-current`}>
      <path d="M16.6 2h-3.1v13.2a2.7 2.7 0 1 1-2.3-2.7V9.3a5.9 5.9 0 1 0 5.4 5.9V8.6a7 7 0 0 0 4.1 1.3V6.8a4 4 0 0 1-4.1-4.8Z" />
    </svg>
  );
}

const amenityIcons = {
  bedrooms: BedDouble,
  bathrooms: Bath,
  kitchen: CookingPot,
  ac: Wind,
  soundproof: VolumeX,
  tv: Tv,
  wifi: Wifi,
  washer: WashingMachine,
  dishwasher: Utensils,
  minibar: Wine,
  terrace: Building2,
  poolView: Waves,
  interiorView: Building2,
  cityView: MapPin,
  wellness: Flame,
  parking: ParkingCircle,
} satisfies Record<AmenityKey, typeof BedDouble>;

export function AmenityIcon({
  name,
  className = "h-5 w-5",
}: {
  name: AmenityKey;
  className?: string;
}) {
  const Icon = amenityIcons[name];
  return <Icon aria-hidden className={className} strokeWidth={1.25} />;
}

const experienceIcons = {
  pool: Waves,
  sauna: Flame,
  hammam: Droplets,
  jacuzzi: Bath,
  massage: Sparkles,
  chef: ChefHat,
  breakfast: Coffee,
  shuttle: CarFront,
  wifi: Wifi,
} satisfies Record<ExperienceIcon, typeof Waves>;

export function ExperienceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: ExperienceIcon;
  className?: string;
}) {
  const Icon = experienceIcons[name];
  return <Icon aria-hidden className={className} strokeWidth={1.15} />;
}

export const ShowerIcon = ShowerHead;
export const GymIcon = Dumbbell;
