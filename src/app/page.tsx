import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { CtaSection, SectionHead, ServiceCard } from "@/components/Blocks";
import { Showcase } from "@/components/Showcase";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { contactHref, site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

const rotating = ["web apps", "mobile apps", "ERP systems", "AI tools"];

export default function Home() {
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
          <SectionHead
            tag="work"
            title="Products we're"
            shine="building."
            lead="Our own software, in the open — what each one does and who it is for."
          />
          <Showcase items={projects} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <SectionHead
            tag="process"
            title="How we"
            shine="work."
            lead="Four simple steps from idea to launch — and we stay with you after."
          />
          <Process />
        </div>
      </section>

      {/* WHY OSPHERIO */}
      <section className="section section-deep" id="why">
        <div className="container">
          <SectionHead
            tag="why-ospherio"
            title="Your all-in-one"
            shine="tech partner."
            lead="Whatever you need built, fixed or improved, it starts and ends with one partner who owns the result."
          />
          <WhyUs />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
