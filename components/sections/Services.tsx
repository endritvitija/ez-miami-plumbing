import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { BusinessConfig, ServiceItem } from "@/lib/types";

type Props = {
  heading: string;
  subheading: string;
  items: ServiceItem[];
  business: BusinessConfig;
};

export function Services({ heading, subheading, items, business }: Props) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-bg">
      <div className="container">
        <SectionHeader eyebrow="Services" heading={heading} subheading={subheading} />
        <div className="mt-10 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl bg-surface border border-border p-6 hover:border-accent/60 transition-colors shadow-card"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent mb-4">
                <Icon name={s.icon} className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
              <a
                href={business.phoneHref}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                aria-label={`${s.cta} — call ${business.phone}`}
              >
                {s.cta}
                <Icon name="arrow" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
