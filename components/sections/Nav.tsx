import { CallButton } from "@/components/ui/CallButton";
import { Icon } from "@/components/ui/Icon";
import type { BusinessConfig, NavConfig } from "@/lib/types";

type Props = { business: BusinessConfig; nav: NavConfig };

export function Nav({ business, nav }: Props) {
  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-accent text-black">
            <Icon name="drop" className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="hidden sm:inline">{business.name}</span>
          <span className="sm:hidden">{business.shortName}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-fg transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <CallButton
          href={business.phoneHref}
          variant="primary"
          size="sm"
          icon="phone"
          ariaLabel={`Call ${business.phone}`}
        >
          <span className="hidden sm:inline">{business.phone}</span>
          <span className="sm:hidden">{nav.ctaLabel}</span>
        </CallButton>
      </div>
    </header>
  );
}
