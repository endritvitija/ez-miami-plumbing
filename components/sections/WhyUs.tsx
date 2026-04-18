import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { WhyUsItem } from "@/lib/types";

type Props = { heading: string; items: WhyUsItem[] };

export function WhyUs({ heading, items }: Props) {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-surface/40 border-y border-border">
      <div className="container">
        <SectionHeader eyebrow="Why Us" heading={heading} />
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl bg-bg border border-border p-6 hover:border-primary/60 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/20 text-accent mb-4">
                <Icon name={w.icon} className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <h3 className="text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
