import type { Metadata } from "next";
import Link from "next/link";
import { pathTo } from "@/lib/site";

export type Rename = { was: string; name: string; to: string };

/**
 * A renamed project's old URL. Those slugs already shipped in the sitemap, so
 * they are kept alive and pointed at the new page — a static export cannot
 * return a 301. Delete the route once the old URL stops getting traffic.
 */
export const renamedMetadata = ({ was, name, to }: Rename): Metadata => ({
  title: `${was} is now ${name}`,
  description: `${was} has been renamed ${name}. This page redirects to the current project.`,
  alternates: { canonical: to },
  robots: { index: false, follow: true },
});

export function RenamedProject({ was, name, to }: Rename) {
  return (
    <>
      {/* React hoists this into <head>, where it actually performs the redirect.
          Root-relative on purpose: an absolute URL would bounce local and
          preview builds to production. */}
      <meta httpEquiv="refresh" content={`0; url=${pathTo(to)}`} />
      <section className="section">
        <div className="container stack-gap">
          <h1 className="h1-page">
            {was} is now {name}
          </h1>
          <p className="lead">
            Taking you to the project now. If nothing happens,{" "}
            <Link href={to} className="link">
              open {name}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
