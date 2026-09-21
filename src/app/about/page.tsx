import type { Metadata } from "next";
import { Breadcrumbs, CtaSection, PageHero, SectionHead } from "@/components/Blocks";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "About Ospherio — Your All-in-One Software Partner",
  description:
    "Ospherio is a software development and IT services company covering strategy, design, web, mobile, ERP, AI, cloud and support — one partner for your whole product.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="One partner for everything you build."
        lead="Ospherio designs, builds and supports software for companies worldwide — web apps, mobile apps, business systems and AI tools, all under one roof."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stack-gap">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about/" }]} />
          <WhyUs />
        </div>
      </section>
      <section className="section section-deep">
        <div className="container">
          <SectionHead tag="process" title="How we" shine="work." />
          <Process />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
