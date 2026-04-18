import { getContent } from "@/lib/content";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { Emergency } from "@/components/sections/Emergency";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { StickyCallBar } from "@/components/ui/StickyCallBar";

export default function Page() {
  const c = getContent();
  return (
    <>
      <Nav business={c.business} nav={c.nav} />
      <main className="pb-24 md:pb-0">
        <Hero hero={c.hero} business={c.business} />
        <TrustBar items={c.trustBar} />
        <Services
          heading={c.services.heading}
          subheading={c.services.subheading}
          items={c.services.items}
          business={c.business}
        />
        <WhyUs heading={c.whyUs.heading} items={c.whyUs.items} />
        <Emergency
          eyebrow={c.emergency.eyebrow}
          headline={c.emergency.headline}
          subheadline={c.emergency.subheadline}
          ctaLabel={c.emergency.ctaLabel}
          business={c.business}
        />
        <Reviews
          heading={c.reviews.heading}
          subheading={c.reviews.subheading}
          items={c.reviews.items}
          business={c.business}
        />
        <ServiceArea
          heading={c.serviceArea.heading}
          subheading={c.serviceArea.subheading}
          neighborhoods={c.serviceArea.neighborhoods}
          location={c.serviceArea.location}
        />
        <Process
          heading={c.process.heading}
          subheading={c.process.subheading}
          steps={c.process.steps}
        />
        <FinalCta
          eyebrow={c.finalCta.eyebrow}
          headline={c.finalCta.headline}
          subheadline={c.finalCta.subheadline}
          primaryCta={c.finalCta.primaryCta}
          secondaryCta={c.finalCta.secondaryCta}
          business={c.business}
        />
      </main>
      <Footer business={c.business} footer={c.footer} />
      <StickyCallBar
        phone={c.business.phone}
        phoneHref={c.business.phoneHref}
        email={c.business.email}
      />
    </>
  );
}
