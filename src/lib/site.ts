// Central site settings. Update the TODO values before going live.
export const site = {
  name: "Ospherio",
  // TODO: replace with your real domain (used for canonical URLs, sitemap and structured data).
  url: "https://www.ospherio.com",
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

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
