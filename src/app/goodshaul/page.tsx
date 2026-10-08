import type { Metadata } from "next";
import { Breadcrumbs, JsonLd, SectionHead } from "@/components/Blocks";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Icon } from "@/components/Icon";
import { ScreenPair, shots } from "@/components/Shots";
import { catalogue, comingNext, faqs, flow, goodshaul, money, offline, roles, setup, stock } from "@/lib/goodshaul";
import { absoluteUrl, ogImage, site } from "@/lib/site";

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

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="list-check">
      {items.map((t) => (
        <li key={t}>
          <Icon name="check" size={18} /> {t}
        </li>
      ))}
    </ul>
  );
}

const queue = ["Order A01-000124", "Delivery · stop 3 of 9", "Payment · cash"];

export default function GoodsHaulPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero grid-bg gh-hero">
        <div className="container gh-hero-grid">
          <div className="hero-copy">
            <span className="pill rise d1">
              <i className="dot pulse" /> Early access · Wholesale and van-sales distribution
            </span>
            <h1 className="h1-page gh-h1 rise d2">{goodshaul.heroTitle}</h1>
            <p className="lead rise d3">{goodshaul.heroLead}</p>
            <div className="hero-actions rise d4">
              <a href="#early-access" className="btn btn-primary btn-lg pulse">
                Join early access <Icon name="arrow" size={18} />
              </a>
              <a href="#how-it-works" className="btn btn-ghost btn-lg">
                See how it works
              </a>
            </div>
          </div>
          <div className="gh-hero-art rise d3">
            <ScreenPair desktop={shots.orderDesktop} phone={shots.orderPhone} eager />
            <p className="gh-note">Design preview with sample data.</p>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="section section-deep" id="how-it-works">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: goodshaul.name, href: goodshaul.path },
            ]}
          />
          <div className="gh-gap" />
          <SectionHead
            tag="order-to-cash"
            title="One order,"
            shine="followed all the way."
            lead="The same order moves from the rep's phone to the office, onto the van and into the customer's account. Nobody keys it in twice."
          />
          <ol className="gh-flow reveal">
            {flow.map((s, i) => (
              <li key={s.title} className="gh-step" style={{ ["--i" as string]: i }}>
                <span className="gh-step-n" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="kicker">{s.who}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ROLES */}
      <section className="section" id="who-uses-it">
        <div className="container">
          <SectionHead
            tag="roles"
            title="Built for the people"
            shine="doing the work."
            lead="One phone app for reps and drivers, one back office in the browser. Each person sees only what their job needs."
          />
          <div className="grid-3">
            {roles.map((r, i) => (
              <div key={r.title} className="card reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <span className="kicker">{r.tag}</span>
                <h3 className="h3 h3-lg">{r.title}</h3>
                <Checks items={r.points} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFLINE */}
      <section className="section section-deep" id="offline">
        <div className="container">
          <SectionHead
            tag="offline-first"
            title="Keeps working where"
            shine="the signal doesn't."
            lead="Cellars, cold stores and country roads are part of the job. The phone app saves the work locally first, so the day carries on without a connection."
          />
          <div className="gh-split">
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
            <div className="gh-points">
              {offline.map((o, i) => (
                <div key={o.title} className="gh-point reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
                  <h3 className="h3">{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STOCK AND CATALOGUE */}
      <section className="section" id="stock">
        <div className="container">
          <SectionHead
            tag="stock"
            title="Know what you"
            shine="can promise."
            lead="Stock is a ledger of movements, so the figure on screen is always the sum of what actually happened."
          />
          <div className="gh-split gh-split-media">
            <div className="reveal">
              <ScreenPair desktop={shots.stockDesktop} phone={shots.stockPhone} flip />
              <p className="gh-note">Design preview with sample data.</p>
            </div>
            <div className="stack-gap gh-tight">
              <div className="reveal">
                <h3 className="h3 h3-lg">Stock levels</h3>
                <Checks items={stock} />
              </div>
              <div className="reveal">
                <h3 className="h3 h3-lg">Photos and catalogue</h3>
                <Checks items={catalogue} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONEY */}
      <section className="section section-deep" id="money">
        <div className="container">
          <SectionHead
            tag="money"
            title="Cash, cheques and credit,"
            shine="under control."
            lead="Deliveries on account only work if you know who owes what. GoodsHaul keeps that picture current."
          />
          <div className="grid-3">
            {money.map((m, i) => (
              <div key={m.title} className="card reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <h3 className="h3">{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP AND ROADMAP */}
      <section className="section" id="setup">
        <div className="container">
          <SectionHead
            tag="setup"
            title="Set up for"
            shine="your business."
            lead="Configured per company rather than hard-wired to one country or one way of working."
          />
          <div className="gh-split">
            <div className="gh-points gh-points-1">
              {setup.map((s, i) => (
                <div key={s.title} className="gh-point reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="card gh-next reveal">
              <span className="kicker">Coming next</span>
              <h3 className="h3 h3-lg">On the roadmap</h3>
              <p>Not in the product yet. Early-access customers help decide the order.</p>
              <ul className="gh-next-list">
                {comingNext.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
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
            <p className="lead">
              We&apos;re opening {goodshaul.name} to a small number of wholesalers and distributors. Tell us how you take
              orders and deliver today, and we&apos;ll show you the product with your kind of day in mind.
            </p>
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
          featureList: [...roles.flatMap((r) => r.points), ...stock, ...money.map((m) => `${m.title}: ${m.text}`)],
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
