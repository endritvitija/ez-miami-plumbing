import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stars } from "@/components/ui/Stars";
import type { BusinessConfig, ReviewItem } from "@/lib/types";

type Props = {
  heading: string;
  subheading: string;
  items: ReviewItem[];
  business: BusinessConfig;
};

export function Reviews({ heading, subheading, items, business }: Props) {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-bg">
      <div className="container">
        <SectionHeader eyebrow="Reviews" heading={heading} subheading={subheading} />
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
          <Stars rating={business.rating} />
          <span className="font-semibold text-fg">{business.rating.toFixed(1)}</span>
          <span>· {business.reviewCount}+ reviews</span>
        </div>
        <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-3">
          {items.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl bg-surface border border-border p-6 flex flex-col"
            >
              <Stars rating={r.rating} />
              <blockquote className="mt-3 text-fg/90 leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border text-sm">
                <div className="font-semibold text-fg">{r.name}</div>
                <div className="text-muted">{r.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
