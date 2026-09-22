import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaSection, JsonLd, PageHero, ProjectCard } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { getService, services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { absoluteUrl, contactHref, ogImage, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  const path = `/services/${s.slug}/`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: `${s.metaTitle} | Ospherio`, description: s.metaDescription, url: path , images: [ogImage] },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = projects.filter((p) => p.services.includes(s.slug));
  const url = absoluteUrl(`/services/${s.slug}/`);

  return (
    <>
      <PageHero tag={s.name} title={s.headline} lead={s.intro} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stack-gap">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services/" },
              { name: s.name, href: `/services/${s.slug}/` },
            ]}
          />

          <div className="detail-grid">
            <div className="stack-gap">
              <div className="reveal">
                <h2 className="h2" style={{ marginBottom: 28 }}>What we deliver</h2>
                <div className="grid-2">
                  {s.deliverables.map((d) => (
                    <div key={d.title} className="card">
                      <span className="svc-ic"><Icon name={s.icon} size={24} /></span>
                      <h3 className="h3">{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {s.faqs.length > 0 && (
                <div className="faq reveal">
                  <h2 className="h2" style={{ marginBottom: 12 }}>Questions</h2>
                  {s.faqs.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              )}
            </div>

            <aside className="aside">
              <div className="card reveal">
                <span className="kicker">Tech we use</span>
                <div className="chips">
                  {s.stack.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
              <div className="card reveal">
                <h2 className="h3">Talk to us about {s.name}</h2>
                <p>Tell us what you&apos;re building and we&apos;ll reply with next steps.</p>
                <a href={contactHref} className="btn btn-primary">
                  Book a free consultation <Icon name="arrow" size={16} />
                </a>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="h2 reveal" style={{ marginBottom: 28 }}>Related work</h2>
              <div className="grid-3">
                {related.map((p) => (
                  <ProjectCard key={p.slug} p={p} />
                ))}
              </div>
            </div>
          )}

          <p className="muted reveal">
            Other services:{" "}
            {services
              .filter((o) => o.slug !== s.slug)
              .map((o, i, arr) => (
                <span key={o.slug}>
                  <Link href={`/services/${o.slug}/`} className="link">{o.name}</Link>
                  {i < arr.length - 1 ? " · " : ""}
                </span>
              ))}
          </p>
        </div>
      </section>

      <CtaSection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          serviceType: s.name,
          description: s.metaDescription,
          url,
          areaServed: "Worldwide",
          provider: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
        }}
      />
      {s.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
    </>
  );
}
