import { Icon } from "@/components/ui/Icon";
import type { TrustBadge } from "@/lib/types";

type Props = { items: TrustBadge[] };

export function TrustBar({ items }: Props) {
  return (
    <section aria-label="Trust indicators" className="border-y border-border bg-surface/60">
      <div className="container py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
          {items.map((item) => (
            <li key={item.label} className="inline-flex items-center gap-2">
              <Icon name={item.icon} className="w-4 h-4 text-accent" strokeWidth={2.5} />
              <span className="font-medium text-fg/90">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
