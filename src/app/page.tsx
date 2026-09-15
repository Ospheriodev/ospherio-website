import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { CtaSection, ProjectCard, SectionHead, ServiceCard } from "@/components/Blocks";
import { contactHref, site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

const steps = [
  { title: "Discover", text: "We learn your business, users and goals, then agree on scope, timeline and cost." },
  { title: "Design", text: "Wireframes and clickable prototypes you can test before a line of code is written." },
  { title: "Build", text: "Short sprints with a working demo at the end of each one — you always see progress." },
  { title: "Launch & support", text: "We deploy, monitor and keep improving the product after it goes live." },
];

const rotating = ["web apps", "mobile apps", "ERP systems", "AI tools"];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      {/* HERO */}
      <section className="hero grid-bg">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill rise d1">
              <i className="dot pulse" /> Software development &amp; IT services
            </span>
            <h1 className="h1 hero-title">
              <span className="rise d2">We build</span>
              <span className="rotator rise d3" aria-hidden="true">
                <span className="rotator-track">
                  {[...rotating, rotating[0]].map((w, i) => (
                    <span key={i}>{w}</span>
                  ))}
                </span>
              </span>
              {/* Full sentence for search engines and screen readers */}
              <span className="sr-only">web apps, mobile apps, ERP systems and AI tools</span>
              <span className="rise d4">your business runs on.</span>
            </h1>
            <p className="lead rise d5">
              Ospherio designs and engineers custom software for companies worldwide — from first idea to live
              product and beyond.
            </p>
            <div className="hero-actions rise d5">
              <a href={contactHref} className="btn btn-primary btn-lg pulse">
                Book a free consultation <Icon name="arrow" size={18} />
              </a>
              <Link href="/work/" className="btn btn-ghost btn-lg">
                See our work
              </Link>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-glow" />
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="hero-mark">
              <LogoMark size={240} animated />
            </div>
            <div className="float-card float-a">
              <span className="accent">$</span> git push origin main
              <i className="caret" />
            </div>
            <div className="float-card float-b">
              <span className="ok">
                <Icon name="check" size={11} />
              </span>
              build passed · deployed
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-label="Technologies we use">
        <div className="marquee-track">
          {[...site.tech, ...site.tech].map((t, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span aria-hidden={i >= site.tech.length}>{t}</span>
              <i className="dot" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <SectionHead
            tag="services"
            title="IT services,"
            shine="end to end."
            lead="One team for strategy, design, engineering and support — so nothing gets lost between agencies."
          />
          <div className="grid-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section section-deep" id="work">
        <div className="container">
          <SectionHead tag="work" title="Products we're building." />
          <div className="grid-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} p={p} large />
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: 22 }}>
            {others.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <SectionHead tag="process" title="How we work." />
          <div className="track" aria-hidden="true">
            <i />
          </div>
          <ol className="grid-4 steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {steps.map((s, i) => (
              <li key={s.title} className="step reveal" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="step-no">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      <section className="container">
        <div className="panel reveal">
          <div>
            <span className="tag">&lt;team /&gt;</span>
            <h2 className="h2">Small team. Direct line to the builders.</h2>
          </div>
          <div>
            <p className="lead">
              Ospherio is a three-person team. No account managers or hand-offs — the people you talk to are the
              people writing your code.
            </p>
            <ul className="team">
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
