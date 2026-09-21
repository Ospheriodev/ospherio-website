import type { Metadata } from "next";
import { Breadcrumbs, CtaSection, PageHero, ServiceCard } from "@/components/Blocks";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "IT Services — Web, Mobile, ERP & AI Development",
  description:
    "Ospherio's IT services: web and mobile app development, custom ERP and inventory software, AI and automation, UI/UX design, cloud, QA and IT consulting.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Everything you need to build and run software."
        lead="Pick one service or bring us the whole product. Either way, you work with the same people from first call to launch and beyond."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stack-gap">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }]} />
          <div className="grid-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
