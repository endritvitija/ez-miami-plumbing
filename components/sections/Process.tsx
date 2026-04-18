import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ProcessStep } from "@/lib/types";

type Props = {
  heading: string;
  subheading: string;
  steps: ProcessStep[];
};

export function Process({ heading, subheading, steps }: Props) {
  return (
    <section id="process" className="py-16 sm:py-24 bg-surface/40 border-y border-border">
      <div className="container">
        <SectionHeader eyebrow="How It Works" heading={heading} subheading={subheading} />
        <ol className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3 relative">
          {steps.map((s, i) => (
            <li key={s.step} className="relative rounded-2xl bg-bg border border-border p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent text-black font-extrabold flex items-center justify-center text-lg">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
