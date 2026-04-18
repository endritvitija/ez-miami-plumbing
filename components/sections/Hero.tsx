import { CallButton } from "@/components/ui/CallButton";
import { Stars } from "@/components/ui/Stars";
import { Icon } from "@/components/ui/Icon";
import { resolveCtaHref } from "@/lib/content";
import type { BusinessConfig, HeroConfig } from "@/lib/types";

type Props = { hero: HeroConfig; business: BusinessConfig };

export function Hero({ hero, business }: Props) {
  return (
    <section id="top" className="relative bg-gradient-hero overflow-hidden">
      <div className="container relative py-12 sm:py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-5">
            <span className="inline-block w-2 h-2 rounded-full bg-success animate-pulse" />
            {hero.eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-muted max-w-2xl text-balance">
            {hero.subheadline}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CallButton
              href={resolveCtaHref(hero.primaryCta, business)}
              variant="primary"
              size="lg"
              icon="phone"
              ariaLabel={`Call ${business.phone}`}
            >
              {hero.primaryCta.label}
            </CallButton>
            <CallButton
              href={resolveCtaHref(hero.secondaryCta, business)}
              variant="secondary"
              size="lg"
              icon="arrow"
            >
              {hero.secondaryCta.label}
            </CallButton>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-muted">
            <Stars rating={business.rating} />
            <span className="font-semibold text-fg">{business.rating.toFixed(1)}</span>
            <span>·</span>
            <span>{business.reviewCount}+ local reviews</span>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            {hero.badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="w-4 h-4 text-success" strokeWidth={3} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
