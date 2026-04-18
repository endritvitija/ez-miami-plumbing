import { CallButton } from "@/components/ui/CallButton";
import { Icon } from "@/components/ui/Icon";
import { resolveCtaHref } from "@/lib/content";
import type { BusinessConfig, CtaConfig } from "@/lib/types";

type Props = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaConfig;
  secondaryCta: CtaConfig;
  business: BusinessConfig;
};

export function FinalCta({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  business,
}: Props) {
  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-bg">
      <div className="container">
        <div className="relative rounded-3xl bg-gradient-emergency p-8 sm:p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-accent text-sm font-bold uppercase tracking-wider">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              {headline}
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-2xl mx-auto text-balance">
              {subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <CallButton
                href={resolveCtaHref(primaryCta, business)}
                variant="light"
                size="lg"
                icon="phone"
              >
                {primaryCta.label}
              </CallButton>
              <CallButton
                href={resolveCtaHref(secondaryCta, business)}
                variant="ghost"
                size="lg"
                icon="mail"
              >
                {secondaryCta.label}
              </CallButton>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="phone" className="w-4 h-4" />
                {business.phone}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="mail" className="w-4 h-4" />
                {business.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="map" className="w-4 h-4" />
                {business.serviceArea}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
