import type { Metadata } from "next";
import { Breadcrumbs, JsonLd, SectionHead } from "@/components/Blocks";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Icon } from "@/components/Icon";
import { ScreenPair, shots } from "@/components/Shots";
import { ai, aiPromise, alsoPlanned, faqs, flow, goodshaul, included, reasons, roles } from "@/lib/goodshaul";
import { absoluteUrl, ogImage, pathTo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: goodshaul.metaTitle },
  description: goodshaul.metaDescription,
  alternates: { canonical: goodshaul.path },
  openGraph: {
    title: goodshaul.metaTitle,
    description: goodshaul.metaDescription,
    url: goodshaul.path,
    images: [ogImage],
  },
};

const queue = ["Order A01-000124", "Delivery · stop 3 of 9", "Payment · cash"];

/** Small looping illustration for each AI card. Decorative only. */
function AiViz({ kind }: { kind: (typeof ai)[number]["key"] }) {
  if (kind === "snap") {
    return (
      <div className="ai-viz ai-snap" aria-hidden="true">
        <span className="ai-photo">
          <img src={pathTo("/media/goodshaul/sample-can.webp")} alt="" width={213} height={520} loading="lazy" />
          <i className="ai-scan" />
        </span>
        <span className="ai-fields">
          {["Mango drink", "330 ml", "24 per box"].map((f, i) => (
            <b key={f} style={{ ["--i" as string]: i }}>
              <Icon name="check" size={12} /> {f}
            </b>
          ))}
        </span>
      </div>
    );
  }
  if (kind === "drop") {
    return (
      <div className="ai-viz ai-drop" aria-hidden="true">
        <span className="ai-sheet">
          <em>price-list.pdf</em>
          <i />
          <i />
          <i />
        </span>
        <span className="ai-arrow">
          <Icon name="arrow" size={20} />
        </span>
        <span className="ai-fields">
          {["£18.00", "£32.00", "£12.50"].map((f, i) => (
            <b key={f} style={{ ["--i" as string]: i }}>
              {f}
            </b>
          ))}
        </span>
      </div>
    );
  }
  return (
    <div className="ai-viz ai-show" aria-hidden="true">
      <span className="ai-cutout">
        <img src={pathTo("/media/goodshaul/sample-box.webp")} alt="" width={640} height={386} loading="lazy" />
      </span>
    </div>
  );
}

export default function GoodsHaulPage() {
  const v = goodshaul.video;
  return (
    <>
      {/* HERO */}
      <section className="hero grid-bg gh-hero">
        <div className="container gh-hero-grid">
          <div className="hero-copy">
            <span className="pill rise d1">
              <i className="dot pulse" /> Early access · For wholesalers and distributors
            </span>
            <h1 className="h1-page gh-h1 rise d2">{goodshaul.heroTitle}</h1>
            <p className="lead rise d3">{goodshaul.heroLead}</p>
            <div className="hero-actions rise d4">
              <a href="#early-access" className="btn btn-primary btn-lg pulse">
                Join early access <Icon name="arrow" size={18} />
              </a>
              <a href="#watch" className="btn btn-ghost btn-lg">
                Watch 40 seconds
              </a>
            </div>
          </div>
          <div className="gh-hero-art rise d3">
            <ScreenPair desktop={shots.orderDesktop} phone={shots.orderPhone} eager />
            <p className="gh-note">Design preview with sample data.</p>
          </div>
        </div>
      </section>

      {/* THREE REASONS */}
      <section className="section section-deep gh-reasons-wrap">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: goodshaul.name, href: goodshaul.path },
            ]}
          />
          <h2 className="sr-only">Why {goodshaul.name}</h2>
          <div className="gh-reasons">
            {reasons.map((r, i) => (
              <div key={r.big} className="gh-reason reveal" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <h3 className="gh-reason-title">
                  {r.big} <span className="accent">{r.title}</span>
                </h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section" id="watch">
        <div className="container gh-narrow gh-center">
          <SectionHead tag="watch" title="See it in" shine="40 seconds." />
          <div className="gh-video reveal">
            <video controls preload="none" playsInline poster={pathTo(v.poster)}>
              <source src={pathTo(v.src)} type="video/mp4" />
              Your browser cannot play this video.
            </video>
          </div>
          <p className="gh-note">Concept preview with sample data. No sound.</p>
        </div>
      </section>

      {/* AI */}
      <section className="section section-deep gh-ai" id="ai">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container">
          <div className="gh-ai-head reveal">
            <span className="gh-badge">
              <i className="dot pulse" /> AI · In development
            </span>
            <h2 className="h2">
              AI does the typing. <span className="shine">You stay in charge.</span>
            </h2>
          </div>
          <div className="grid-3">
            {ai.map((a, i) => (
              <div key={a.key} className="card gh-ai-card reveal" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <AiViz kind={a.key} />
                <h3 className="gh-ai-verb">{a.verb}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <p className="gh-ai-promise reveal">
            <Icon name="qa" size={22} /> {aiPromise}
          </p>
        </div>
      </section>

      {/* FLOW */}
      <section className="section" id="how-it-works">
        <div className="container">
          <SectionHead tag="how-it-works" title="One order," shine="five steps." />
          <ol className="gh-flow reveal">
            {flow.map((s, i) => (
              <li key={s.title} className="gh-step" style={{ ["--i" as string]: i }}>
                <span className="gh-step-n" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="h3 h3-lg">{s.title}</h3>
                <span className="kicker">{s.who}</span>
              </li>
            ))}
          </ol>

          <div className="grid-3 gh-roles">
            {roles.map((r, i) => (
              <div key={r.title} className="card reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <span className="kicker">{r.tag}</span>
                <h3 className="h3 h3-lg">{r.title}</h3>
                <ul className="list-check">
                  {r.points.map((t) => (
                    <li key={t}>
                      <Icon name="check" size={18} /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFLINE */}
      <section className="section section-deep" id="offline">
        <div className="container gh-split">
          <div className="gh-ea-copy reveal">
            <span className="tag">&lt;offline-first /&gt;</span>
            <h2 className="h2">
              Works in the cellar. <span className="shine">Syncs on the road.</span>
            </h2>
            <p className="lead">Nothing lost if the app closes. Nothing sent twice.</p>
          </div>
          <div className="gh-sync reveal" aria-hidden="true">
            <div className="gh-sync-head">
              <span className="gh-sync-state">
                <b className="off">No signal</b>
                <b className="on">Back online</b>
              </span>
              <span className="kicker">upload queue</span>
            </div>
            {queue.map((q, i) => (
              <div key={q} className="gh-sync-row" style={{ ["--i" as string]: i }}>
                <span>{q}</span>
                <span className="gh-chip">
                  <b className="off">Saved on phone</b>
                  <b className="on">
                    <Icon name="check" size={12} /> Sent
                  </b>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="section" id="included">
        <div className="container gh-split gh-split-media">
          <div className="reveal">
            <ScreenPair desktop={shots.stockDesktop} phone={shots.stockPhone} flip />
            <p className="gh-note">Design preview with sample data.</p>
          </div>
          <div className="gh-ea-copy reveal">
            <span className="tag">&lt;included /&gt;</span>
            <h2 className="h2">
              Already <span className="shine">in the box.</span>
            </h2>
            <ul className="chips">
              {included.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
            <p className="gh-planned">
              <span className="kicker">Next up</span> {alsoPlanned.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-deep" id="faq">
        <div className="container gh-narrow">
          <SectionHead tag="faq" title="Questions," shine="answered." />
          <div className="faq reveal">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section className="section gh-ea" id="early-access">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container gh-split gh-ea-grid">
          <div className="reveal gh-ea-copy">
            <span className="tag">&lt;early-access /&gt;</span>
            <h2 className="h2">
              Run your next delivery day on <span className="shine">{goodshaul.name}.</span>
            </h2>
            <p className="lead">Open to a small number of wholesalers and distributors. Tell us how you work today.</p>
          </div>
          <div className="reveal" style={{ ["--d" as string]: "90ms" }}>
            <EarlyAccess />
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": `${absoluteUrl(goodshaul.path)}#software`,
          name: goodshaul.name,
          description: goodshaul.metaDescription,
          url: absoluteUrl(goodshaul.path),
          applicationCategory: "BusinessApplication",
          applicationSubCategory: "Wholesale distribution and van sales software",
          operatingSystem: "Web, iOS, Android",
          image: absoluteUrl(shots.orderDesktop.src),
          featureList: [...roles.flatMap((r) => r.points), ...included],
          publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: `${goodshaul.name} in 40 seconds`,
          description: goodshaul.metaDescription,
          thumbnailUrl: absoluteUrl(v.poster),
          contentUrl: absoluteUrl(v.src),
          uploadDate: v.published,
          duration: v.duration,
          publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
