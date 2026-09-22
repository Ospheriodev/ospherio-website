import type { Metadata } from "next";
import { Breadcrumbs, CtaSection, PageHero, ProjectCard } from "@/components/Blocks";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work — Software Projects & Case Studies",
  description:
    "Software products built by Ospherio, including the Goodshaul AI warehouse solution and the VoiceLedger voice-based ledger app.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <>
      <PageHero
        tag="Work"
        title="Products we're building."
        lead="A look at the software we design, build and run — from inventory systems to voice-powered apps and AI reporting."
      />
      <section className="section section-deep">
        <div className="container stack-gap">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Work", href: "/work/" }]} />
          <div className="grid-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} p={p} large level="h2" />
            ))}
          </div>
          <div className="grid-3">
            {others.map((p) => (
              <ProjectCard key={p.slug} p={p} level="h2" />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
