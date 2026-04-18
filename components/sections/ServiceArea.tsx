import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LocationConfig } from "@/lib/types";

type Props = {
  heading: string;
  subheading: string;
  neighborhoods: string[];
  location: LocationConfig;
};

export function ServiceArea({ heading, subheading, neighborhoods, location }: Props) {
  const query = encodeURIComponent(location.mapQuery || location.address);
  const zoom = location.zoom ?? 11;
  // Keyless Google Maps embed — works for any address/city per client.
  const mapSrc = `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  const directionsLabel = location.directionsLabel || "Get Directions";

  return (
    <section id="service-area" className="py-16 sm:py-24 bg-bg">
      <div className="container">
        <SectionHeader eyebrow="Service Area" heading={heading} subheading={subheading} />

        <div className="mt-10 grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border bg-surface shadow-lg">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
              <iframe
                title={`Map of ${location.address}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border-t border-border bg-surface-2">
              <div className="flex items-start gap-2.5 text-sm">
                <Icon name="map" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-fg">{location.label}</div>
                  <div className="text-muted">{location.address}</div>
                </div>
              </div>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2.5 text-sm transition-colors"
              >
                {directionsLabel}
                <Icon name="arrow" className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-fg mb-4">Neighborhoods we serve</h3>
            <ul className="flex flex-wrap gap-2">
              {neighborhoods.map((n) => (
                <li
                  key={n}
                  className="inline-flex items-center gap-1.5 text-sm font-medium rounded-full border border-border bg-surface px-3.5 py-2"
                >
                  <Icon name="map" className="w-4 h-4 text-accent" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
