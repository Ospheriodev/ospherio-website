import type { Metadata } from "next";
import { Breadcrumbs, CtaSection, PageHero } from "@/components/Blocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ospherio — A Small, Senior Software Team",
  description:
    "Ospherio is a three-person software development studio. You work directly with the people designing and building your product.",
  alternates: { canonical: "/about/" },
};

const values = [
  { title: "Direct communication", text: "No account managers. You talk to the people writing your code." },
  { title: "Working software, early", text: "Demos every sprint, so you see real progress and can steer." },
  { title: "Built to last", text: "Clean, documented code that your team — or ours — can maintain." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="Small team. Direct line to the builders."
        lead="Ospherio is a three-person software studio building web apps, mobile apps, business systems and AI tools for companies worldwide."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stack-gap">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about/" }]} />

          <div className="grid-3">
            {values.map((v, i) => (
              <div key={v.title} className="card reveal" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="step-no">0{i + 1}</span>
                <h2 className="h3">{v.title}</h2>
                <p>{v.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h2 className="h2" style={{ marginBottom: 28 }}>The team</h2>
            <ul className="team" style={{ maxWidth: 720 }}>
              {site.team.map((m, i) => (
                <li key={i}>
                  <div className="team-photo">[Photo]</div>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
