import raw from "@/content.json";
import type { Content } from "./types";

export const content = raw as unknown as Content;

export function getContent(): Content {
  return content;
}

export function themeToCssVars(theme: Content["theme"]): Record<string, string> {
  return {
    "--color-primary": theme.primary,
    "--color-primary-dark": theme.primaryDark,
    "--color-accent": theme.accent,
    "--color-accent-dark": theme.accentDark,
    "--color-bg": theme.background,
    "--color-surface": theme.surface,
    "--color-surface-2": theme.surface2,
    "--color-fg": theme.foreground,
    "--color-muted": theme.muted,
    "--color-success": theme.success,
    "--color-border": theme.border,
  };
}

export function resolveCtaHref(
  cta: { type: "call" | "quote" | "email" },
  business: Content["business"]
): string {
  switch (cta.type) {
    case "call":
      return business.phoneHref;
    case "email":
      return `mailto:${business.email}`;
    case "quote":
      return "#final-cta";
    default:
      return "#";
  }
}
