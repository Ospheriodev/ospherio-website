import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaSection, JsonLd, ProjectVisual } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { getProject, projects } from "@/lib/projects";
import { getService } from "@/lib/services";
import { absoluteUrl, ogImage, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const hasPlaceholder = (text: string) => /\[[^\]]+\]/.test(text);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const path = `/work/${p.slug}/`;
  return {
    title: `${p.name} — ${p.category.split(" · ")[0]} Project`,
    description: p.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: `${p.name} | Ospherio`, description: p.metaDescription, url: path , images: [ogImage] },
    // Keep unfinished case studies out of search results until their details are filled in.
    robots: hasPlaceholder(p.overview + p.summary) ? { index: false, follow: true } : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const svc = p.services.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <section className="page-hero grid-bg">
        <div className="container">
          <span className="pill rise d1">
            <i className="dot pulse" /> {p.category}
          </span>
          <h1 className="h1-page rise d2">{p.name}</h1>
          <p className="lead rise d3">{p.summary}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stack-gap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Work", href: "/work/" },
              { name: p.name, href: `/work/${p.slug}/` },
            ]}
          />
          <div className="reveal">
            <ProjectVisual visual={p.visual} />
          </div>

          <div className="detail-grid">
            <div className="stack-gap">
              <div className="reveal">
                <h2 className="h2" style={{ marginBottom: 20 }}>Overview</h2>
                <p className="lead" style={{ maxWidth: "none" }}>{p.overview}</p>
              </div>
              <div className="reveal">
                <h2 className="h2" style={{ marginBottom: 12 }}>Key features</h2>
                <ul className="list-check">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={18} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="aside">
              <div className="card reveal">
                <span className="kicker">Services involved</span>
                <ul className="list-check">
                  {svc.map((s) => (
                    <li key={s.slug}>
                      <Icon name={s.icon} size={18} />
                      <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/work/" className="btn btn-ghost">
                All projects
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection title="Want something like this?" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.name,
          description: p.metaDescription,
          url: absoluteUrl(`/work/${p.slug}/`),
          creator: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
        }}
      />
    </>
  );
}
