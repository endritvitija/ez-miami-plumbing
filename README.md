# EZ Miami Plumbing — Conversion-Focused Homepage

A mobile-first, high-converting homepage template for local home-services businesses (currently configured for **EZ Miami Plumbing**). All copy, business info, and theme colors are driven from a single `content.json`, so you can reskin it for any client by editing one file.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The page is fully statically rendered for fast LCP.

## Run locally

```bash
npm install
npm run dev           # http://localhost:3000
npm run build && npm start   # production
```

## Reskin for a new client (the only file you usually touch)

All client-specific content lives in [`content.json`](./content.json). Edit it and rebuild — no code changes needed.

### 1. Business info

```json
"business": {
  "name": "EZ Miami Plumbing",
  "phone": "645-214-2222",
  "phoneHref": "tel:+16452142222",
  "email": "ezangelsplumbing@gmail.com",
  "city": "Miami",
  "serviceArea": "Miami-Dade & parts of Broward County",
  "yearsExperience": 10,
  "rating": 4.9,
  "reviewCount": 127
}
```

### 2. Theme colors (brand swap)

Edit any of the 11 hex values under `theme` and the whole site restyles automatically via CSS custom properties:

```json
"theme": {
  "primary":     "#1D5FD1",
  "primaryDark": "#0B3B9A",
  "accent":      "#F5A524",
  "accentDark":  "#D18910",
  "background":  "#0A1628",
  "surface":     "#0F2340",
  "surface2":    "#152C50",
  "foreground":  "#FFFFFF",
  "muted":       "#A8B8D1",
  "success":     "#10B981",
  "border":      "#1E3560"
}
```

Quick client presets you can drop in:

- **Navy + Gold (default):** primary `#1D5FD1`, accent `#F5A524`
- **Red + White (HVAC / emergency):** primary `#B91C1C`, accent `#F97316`, background `#0B0B0F`
- **Forest + Lime (landscaping):** primary `#14532D`, accent `#84CC16`, background `#0A1F12`
- **Teal + Coral (spa / pool):** primary `#0F766E`, accent `#FB7185`, background `#06201F`

### 3. Copy blocks

Each section in `content.json` maps 1:1 to a component:

| JSON key       | Component                                |
| -------------- | ---------------------------------------- |
| `hero`         | `components/sections/Hero.tsx`           |
| `trustBar`     | `components/sections/TrustBar.tsx`       |
| `services`     | `components/sections/Services.tsx`       |
| `whyUs`        | `components/sections/WhyUs.tsx`          |
| `reviews`      | `components/sections/Reviews.tsx`        |
| `emergency`    | `components/sections/Emergency.tsx`      |
| `serviceArea`  | `components/sections/ServiceArea.tsx`    |
| `process`      | `components/sections/Process.tsx`        |
| `finalCta`     | `components/sections/FinalCta.tsx`       |
| `footer`       | `components/sections/Footer.tsx`         |

Icons on services / whyUs / trustBar are referenced by name (`"icon": "drop"`). Available icons: `clock`, `shield`, `dollar`, `check`, `star`, `drop`, `drain`, `heater`, `alert`, `pipe`, `faucet`, `bolt`, `heart`, `phone`, `mail`, `map`, `arrow`. Add more in [`components/ui/Icon.tsx`](./components/ui/Icon.tsx) if a client needs a different set.

### 4. CTAs

Every CTA config uses `{ label, type }` where `type` is one of:

- `"call"` → `tel:` link to `business.phoneHref`
- `"email"` → `mailto:` link to `business.email`
- `"quote"` → scrolls to the final CTA section

The `ctaVariations` array holds alternate button labels you can swap into any CTA when A/B testing.

## Conversion design choices

- **Mobile-first**: every section is designed for a single narrow column and scales up.
- **Sticky mobile call bar**: fixed to the bottom of the viewport under `md`; one-tap `tel:` dial. Single biggest lever for local-services conversion.
- **Urgency above the fold**: the hero leads with city + same-day service + upfront pricing, not branding fluff.
- **Trust stacking**: license, insurance, rating, and review count are repeated at the hero, trust bar, reviews section, and footer so a skimmer sees them at every scroll depth.
- **Emergency band mid-page**: a second chance to convert users who bounced past the hero.
- **Per-service CTAs**: every service card calls the phone directly — no intermediate pages required.
- **No heavy JS**: fully static output, no animation libraries, no image carousels that hurt LCP.

## Project layout

```
app/
  layout.tsx        reads theme from content.json and injects CSS vars
  page.tsx          composes all sections
  globals.css       base styles + gradient utilities
components/
  sections/         one file per homepage section
  ui/               reusable: CallButton, StickyCallBar, Icon, Stars, SectionHeader
lib/
  content.ts        JSON loader + theme helpers + CTA href resolver
  types.ts          TypeScript types for the JSON shape
content.json        ← all client content and theme
tailwind.config.ts  maps Tailwind color names to CSS vars
```

## Deploy

Zero-config deploy to [Vercel](https://vercel.com/): point it at the repo and press deploy. Also works on Netlify, Cloudflare Pages, or any Node host with `npm run build && npm start`.
