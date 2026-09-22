// Central site settings. Update the TODO values before going live.
export const site = {
  name: "Ospherio",
  // Used for canonical URLs, sitemap and structured data. Must carry the same
  // subpath as `basePath` in next.config.mjs.
  // TODO: on a custom domain, drop the subpath here and remove basePath there.
  url: "https://ospheriodev.github.io/ospherio-website",
  tagline: "Software development & IT services",
  description:
    "Ospherio is a software development and IT services company building web apps, mobile apps, ERP and inventory systems, and AI solutions for businesses worldwide.",
  email: "contact@ospherio.com",
  // TODO: add a booking link (e.g. Calendly) or leave empty to use email only.
  bookingUrl: "",
  // TODO: fill in real profile URLs; empty entries are hidden.
  social: {
    linkedin: "",
    github: "",
    clutch: "",
  },
  tech: ["React", "Next.js", "Flutter", "Node.js", "Python", "PostgreSQL", "LLMs & RAG", "AWS"],
};

export const contactHref = site.bookingUrl || `mailto:${site.email}?subject=New%20project%20enquiry`;

// The subpath the site is served from, derived from site.url so it cannot drift
// from `basePath` in next.config.mjs. Empty on a custom domain served at the root.
export const basePath = new URL(site.url).pathname.replace(/\/$/, "");

// Root-relative href *including* the subpath, for raw HTML that Next does not
// rewrite the way it rewrites next/link and next/image. Prefer this over
// absoluteUrl() when the link only has to resolve on whatever host is serving:
// an absolute URL would send localhost and preview builds to production.
export function pathTo(path = "/") {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

// Joins onto site.url including any subpath. Note that `new URL("/about/", base)`
// would resolve against the origin alone and silently drop "/ospherio-website".
export function absoluteUrl(path = "/") {
  const base = site.url.endsWith("/") ? site.url : `${site.url}/`;
  return new URL(path.replace(/^\/+/, ""), base).toString();
}
