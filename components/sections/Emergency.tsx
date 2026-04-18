import { CallButton } from "@/components/ui/CallButton";
import { Icon } from "@/components/ui/Icon";
import type { BusinessConfig } from "@/lib/types";

type Props = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  business: BusinessConfig;
};

export function Emergency({ eyebrow, headline, subheadline, ctaLabel, business }: Props) {
  return (
    <section aria-label="Emergency plumbing" className="bg-gradient-emergency">
      <div className="container py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-accent bg-black/20 border border-white/10 rounded-full px-3 py-1 mb-4">
              <Icon name="alert" className="w-4 h-4" strokeWidth={2.5} />
              {eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              {headline}
            </h2>
            <p className="mt-3 text-white/85 text-base sm:text-lg text-balance">
              {subheadline}
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <CallButton
              href={business.phoneHref}
              variant="light"
              size="lg"
              icon="phone"
              ariaLabel={`Call ${business.phone}`}
            >
              {ctaLabel}
            </CallButton>
            <div className="text-center text-white/80 text-sm font-semibold">
              {business.phone} · {business.hours}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
