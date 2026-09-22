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
  // TODO: paste a free Web3Forms access key (web3forms.com — enter the address
  // above, they email you a key). Until it is set, the contact page shows the
  // email card instead of the form, and no form is rendered anywhere.
  formAccessKey: "",
  // TODO: fill in real profile URLs; empty entries are hidden.
  social: {
    linkedin: "",
    github: "",
    clutch: "",
  },
  tech: ["React", "Next.js", "Flutter", "Node.js", "Python", "PostgreSQL", "LLMs & RAG", "AWS"],
};

// Share card used by every page. Pages that declare their own `openGraph`
// replace the root one wholesale rather than merging, so each must spread this
// in explicitly or it ships with no preview image.
export const ogImage = {
  url: `${site.url.replace(/\/$/, "")}/og.png`,
  width: 1200,
  height: 630,
  alt: "Ospherio — we build software your business runs on",
};

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

// A booking link wins if there is one; otherwise send people to the form when
// it is configured, and fall back to email when it is not.
export const contactHref =
  site.bookingUrl ||
  (site.formAccessKey ? pathTo("/contact/") : `mailto:${site.email}?subject=New%20project%20enquiry`);

// Joins onto site.url including any subpath. Note that `new URL("/about/", base)`
// would resolve against the origin alone and silently drop "/ospherio-website".
export function absoluteUrl(path = "/") {
  const base = site.url.endsWith("/") ? site.url : `${site.url}/`;
  return new URL(path.replace(/^\/+/, ""), base).toString();
}
