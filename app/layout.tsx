import type { Metadata, Viewport } from "next";
import { getContent, themeToCssVars } from "@/lib/content";
import "./globals.css";

const { business, theme } = getContent();

export const metadata: Metadata = {
  title: `${business.name} — ${business.tagline}`,
  description: `${business.name} serves ${business.serviceArea}. ${business.licenseText}. 24/7 emergency plumbing, free estimates, flat per-job pricing. Call ${business.phone}.`,
  openGraph: {
    title: `${business.name} — ${business.tagline}`,
    description: `24/7 plumbing service in ${business.city}. Free estimates. Flat per-job pricing. Call ${business.phone}.`,
    type: "website",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: theme.primary,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = themeToCssVars(theme) as React.CSSProperties;
  return (
    <html lang="en" style={cssVars}>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
