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
  // TODO: replace with your real contact email.
  email: "hello@ospherio.com",
  // TODO: add a booking link (e.g. Calendly) or leave empty to use email only.
  bookingUrl: "",
  // TODO: fill in real profile URLs; empty entries are hidden.
  social: {
    linkedin: "",
    github: "",
    clutch: "",
  },
  // TODO: replace with the real team.
  team: [
    { name: "[Name]", role: "[Role]" },
    { name: "[Name]", role: "[Role]" },
    { name: "[Name]", role: "[Role]" },
  ],
  tech: ["React", "Next.js", "Flutter", "Node.js", "Python", "PostgreSQL", "LLMs & RAG", "AWS"],
};

export const contactHref = site.bookingUrl || `mailto:${site.email}?subject=New%20project%20enquiry`;

// Joins onto site.url including any subpath. Note that `new URL("/about/", base)`
// would resolve against the origin alone and silently drop "/ospherio-website".
export function absoluteUrl(path = "/") {
  const base = site.url.endsWith("/") ? site.url : `${site.url}/`;
  return new URL(path.replace(/^\/+/, ""), base).toString();
}
