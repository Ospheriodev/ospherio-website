import Link from "next/link";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";
import { absoluteUrl, contactHref, site } from "@/lib/site";
import type { Project } from "@/lib/projects";
import type { Service } from "@/lib/services";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/**
 * Cards take a `level` so listing pages, where the cards sit straight under
 * the h1 with no SectionHead above them, don't skip a heading level.
 */
export function SectionHead({
  tag,
  title,
  shine,
  lead,
}: {
  tag: string;
  title: string;
  shine?: string;
  lead?: string;
}) {
  return (
    <div className="section-head reveal">
      <div>
        <span className="tag">&lt;{tag} /&gt;</span>
        <h2 className="h2">
          {title} {shine && <span className="shine">{shine}</span>}
        </h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function ServiceCard({ s, i, level: H = "h3" }: { s: Service; i: number; level?: "h2" | "h3" }) {
  return (
    <Link href={`/services/${s.slug}/`} className="card svc reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
      <span className="svc-ic">
        <Icon name={s.icon} size={26} />
      </span>
      <H className="h3">{s.name}</H>
      <p>{s.short}</p>
      <span className="more">
        Learn more <Icon name="arrow" size={16} />
      </span>
    </Link>
  );
}

export function ProjectVisual({ visual, small = false }: { visual: Project["visual"]; small?: boolean }) {
  if (visual === "barcode") {
    const bars = [6, 2, 10, 3, 2, 8, 3, 6, 2, 10, 4, 2, 7];
    return (
      <div className={"pv pv-barcode" + (small ? " pv-sm" : "")} aria-hidden="true">
        {bars.map((w, i) => (
          <span key={i} style={{ width: w }} />
        ))}
        <i className="scan" />
      </div>
    );
  }
  if (visual === "voice") {
    const bars = [60, 110, 150, 90, 170, 120, 70, 130, 50];
    return (
      <div className={"pv pv-voice" + (small ? " pv-sm" : "")} aria-hidden="true">
        {bars.map((h, i) => (
          <span key={i} className={i === 4 ? "hi" : undefined} style={{ height: h, animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    );
  }
  if (visual === "report") {
    // A question, an answer being written, and the figures it produced.
    const bars = [44, 70, 34, 86, 58];
    return (
      <div className={"pv pv-report" + (small ? " pv-sm" : "")} aria-hidden="true">
        <span className="q">ask your data</span>
        <span className="rows">
          {[100, 86, 94].map((w, i) => (
            <i key={i} className={i === 1 ? "hi" : undefined} style={{ width: `${w}%` }} />
          ))}
        </span>
        <span className="bars">
          {bars.map((h, i) => (
            <b key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }} />
          ))}
        </span>
      </div>
    );
  }
  if (visual === "shop") {
    // A storefront: a row of products with one in the basket.
    return (
      <div className={"pv pv-shop" + (small ? " pv-sm" : "")} aria-hidden="true">
        <span className="bar">
          <i />
          <i />
          <i />
          <b className="cart">1</b>
        </span>
        <span className="tiles">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <i key={i} className={i === 1 ? "hi" : undefined} />
          ))}
        </span>
      </div>
    );
  }
  return (
    <div className={"pv pv-mark" + (small ? " pv-sm" : "")} aria-hidden="true">
      <LogoMark size={small ? 64 : 90} />
    </div>
  );
}

export function ProjectCard({ p, large, level: H = "h3" }: { p: Project; large?: boolean; level?: "h2" | "h3" }) {
  return (
    <Link href={`/work/${p.slug}/`} className={"card proj reveal" + (large ? " proj-lg" : "")}>
      <ProjectVisual visual={p.visual} small={!large} />
      <span className="kicker">{p.category}</span>
      <H className={large ? "h3 h3-lg" : "h3"}>{p.name}</H>
      <p>{p.summary}</p>
      <span className="more">
        View project <Icon name="arrow" size={16} />
      </span>
    </Link>
  );
}

export function CtaSection({ title = "Have a project in mind?" }: { title?: string }) {
  return (
    <section className="cta">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container cta-inner reveal">
        <LogoMark size={96} animated />
        <h2 className="h-cta">
          {title} <span className="shine">Let&apos;s talk.</span>
        </h2>
        <div className="cta-actions">
          <a href={contactHref} className="btn btn-primary btn-lg pulse">
            Book a free consultation <Icon name="arrow" size={18} />
          </a>
          <span className="muted">
            or email <a href={`mailto:${site.email}`} className="link">{site.email}</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ tag, title, lead }: { tag: string; title: string; lead: string }) {
  return (
    <section className="page-hero grid-bg">
      <div className="container">
        <span className="pill rise d1">
          <i className="dot pulse" /> {tag}
        </span>
        <h1 className="h1-page rise d2">{title}</h1>
        <p className="lead rise d3">{lead}</p>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((it, i) => (
            <li key={it.href}>
              {i < items.length - 1 ? <Link href={it.href}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            item: absoluteUrl(it.href),
          })),
        }}
      />
    </>
  );
}
