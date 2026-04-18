import { Icon } from "@/components/ui/Icon";
import type { BusinessConfig, Content } from "@/lib/types";

type Props = {
  business: BusinessConfig;
  footer: Content["footer"];
};

export function Footer({ business, footer }: Props) {
  const rights = footer.rightsTemplate
    .replace("{year}", new Date().getFullYear().toString())
    .replace("{name}", business.name);
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-base mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-black">
              <Icon name="drop" className="w-4 h-4" strokeWidth={2.5} />
            </span>
            {business.name}
          </div>
          <p className="text-muted leading-relaxed">{footer.note}</p>
        </div>
        <div>
          <div className="font-bold mb-2">Contact</div>
          <ul className="space-y-1.5 text-muted">
            <li className="inline-flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4 text-accent" />
              <a href={business.phoneHref} className="hover:text-fg">{business.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4 text-accent" />
              <a href={`mailto:${business.email}`} className="hover:text-fg">{business.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="map" className="w-4 h-4 text-accent" />
              <span>{business.serviceArea}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" className="w-4 h-4 text-accent" />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Credentials</div>
          <ul className="space-y-1.5 text-muted">
            <li className="flex items-center gap-2">
              <Icon name="shield" className="w-4 h-4 text-success" />
              <span>{business.licenseText}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="heart" className="w-4 h-4 text-success" />
              <span>Family-owned · {business.yearsExperience}+ years</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4 text-xs text-muted text-center">
          {rights}
        </div>
      </div>
    </footer>
  );
}
