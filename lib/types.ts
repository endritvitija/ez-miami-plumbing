export type CtaType = "call" | "quote" | "email";

export interface CtaConfig {
  label: string;
  type: CtaType;
}

export interface ThemeConfig {
  primary: string;
  primaryDark: string;
  accent: string;
  accentDark: string;
  background: string;
  surface: string;
  surface2: string;
  foreground: string;
  muted: string;
  success: string;
  border: string;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  city: string;
  state: string;
  serviceArea: string;
  yearsExperience: number;
  rating: number;
  reviewCount: number;
  licenseText: string;
  hours: string;
}

export interface NavConfig {
  links: { label: string; href: string }[];
  ctaLabel: string;
}

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaConfig;
  secondaryCta: CtaConfig;
  ratingText: string;
  badges: string[];
}

export type IconName =
  | "clock"
  | "shield"
  | "dollar"
  | "check"
  | "star"
  | "drop"
  | "drain"
  | "heater"
  | "alert"
  | "pipe"
  | "faucet"
  | "bolt"
  | "heart"
  | "phone"
  | "mail"
  | "map"
  | "arrow";

export interface TrustBadge {
  icon: IconName;
  label: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  desc: string;
  cta: string;
}

export interface WhyUsItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface LocationConfig {
  label: string;
  address: string;
  mapQuery: string;
  zoom?: number;
  directionsLabel?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

export interface Content {
  business: BusinessConfig;
  theme: ThemeConfig;
  nav: NavConfig;
  hero: HeroConfig;
  trustBar: TrustBadge[];
  services: { heading: string; subheading: string; items: ServiceItem[] };
  whyUs: { heading: string; items: WhyUsItem[] };
  reviews: { heading: string; subheading: string; items: ReviewItem[] };
  emergency: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
  };
  serviceArea: {
    heading: string;
    subheading: string;
    neighborhoods: string[];
    location: LocationConfig;
  };
  process: { heading: string; subheading: string; steps: ProcessStep[] };
  finalCta: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
  };
  ctaVariations: string[];
  footer: { note: string; rightsTemplate: string };
}
