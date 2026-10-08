export type Visual = "barcode" | "voice" | "report" | "shop" | "none";

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  metaDescription: string;
  overview: string;
  features: string[];
  services: string[]; // service slugs
  visual: Visual;
  /** A product with its own page outside /work/. When set, listings link here
   *  and no /work/[slug]/ page is generated (the old URL 301s in _redirects). */
  href?: string;
  /** A screenshot served from public/, shown instead of the CSS motif. */
  image?: string;
  imageAlt?: string;
  /** Optional demo clip, served from public/. Needs a poster: without one the
   *  player is a black box until it loads. */
  video?: string;
  videoPoster?: string;
  /** ISO 8601 duration and the date the clip went live on this site — both
   *  required by schema.org VideoObject for video results. */
  videoDuration?: string;
  videoPublished?: string;
};

export const projects: Project[] = [
  {
    slug: "goodshaul",
    name: "GoodsHaul",
    category: "Product · Wholesale distribution · Early access",
    summary:
      "Order-to-cash for wholesale distributors: reps take orders on the phone, the office confirms and invoices, drivers deliver and collect payment. It keeps working with no signal.",
    metaDescription:
      "GoodsHaul is van-sales and distribution software by Ospherio: offline order taking, delivery runs, invoicing, payments at the drop, credit control and stock.",
    overview:
      "GoodsHaul follows an order from the rep's phone to the office, onto the van and into the customer's account. It has its own page with the full picture.",
    features: [
      "Offline order taking and deliveries on the phone",
      "Invoices, delivery runs, payments and cheques in one back office",
      "Credit limits, statements and stock that stay current",
    ],
    services: ["erp-inventory-software", "web-app-development", "mobile-app-development", "ui-ux-design"],
    visual: "barcode",
    href: "/goodshaul/",
    image: "/media/goodshaul/order-desktop.webp",
    imageAlt: "GoodsHaul order screen with the order total, a short-stock warning and the customer's credit position",
  },
  {
    slug: "voice-ledger",
    name: "VoiceLedger",
    category: "Mobile · Voice AI · Fintech",
    summary:
      "A digital ledger you talk to — spoken transactions are transcribed and recorded as structured entries.",
    metaDescription:
      "VoiceLedger is a voice-based digital ledger app by Ospherio: speak a transaction and it is transcribed and recorded automatically.",
    overview:
      "VoiceLedger turns a spoken transaction into a structured ledger entry. Entries can be added by voice or by hand, and reviewed, edited or deleted with a tap.",
    features: [
      "Add entries by speaking or typing",
      "Speech is transcribed and parsed into structured records",
      "Tap-based viewing, editing and deleting",
    ],
    services: ["mobile-app-development", "ai-automation"],
    visual: "voice",
  },
  {
    slug: "reporting-gpt",
    name: "ReportingGPT",
    category: "AI · Analytics",
    summary:
      "Ask questions of your own business data in plain language and get a report back, grounded in the documents it drew from.",
    metaDescription:
      "ReportingGPT is a RAG reporting system by Ospherio: ask your business documents and data questions in plain language and get reports grounded in the sources.",
    overview:
      "ReportingGPT sits on top of a company's own documents and data. Retrieval-augmented generation pulls the material that actually answers a question asked in plain English, so the reply is grounded in the business's own records rather than guessed at. The result reads as a report, and points back at the sources behind it.",
    features: [
      "Ask questions of your own documents and data in plain language",
      "Retrieval-augmented answers grounded in the source material",
      "Answers come back as readable reports, traceable to their sources",
    ],
    services: ["ai-automation"],
    visual: "report",
    video: "/media/reporting-gpt-demo.mp4",
    videoPoster: "/media/reporting-gpt-cover.jpg",
    videoDuration: "PT38S",
    videoPublished: "2026-09-22",
  },
  {
    slug: "bakerify",
    name: "Bakerify",
    category: "E-commerce · Web",
    summary:
      "An online storefront for a bakery — customers browse and order, the owner runs products and orders from one place.",
    metaDescription:
      "Bakerify is a bakery e-commerce website built by Ospherio, with an online product catalogue, ordering and checkout, and an admin area for products and orders.",
    overview:
      "Bakerify puts a bakery's counter online. Customers browse what is available and place an order; behind the storefront, the owner keeps the product range current and works through incoming orders in the same place, instead of tracking them across messages and spreadsheets.",
    features: [
      "Product catalogue customers browse and order from",
      "Cart and checkout built for repeat orders",
      "Admin area for managing products and incoming orders",
    ],
    services: ["web-app-development", "ui-ux-design"],
    visual: "shop",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Where a listing should send people for this project. */
export const projectHref = (p: Project) => p.href ?? `/work/${p.slug}/`;

/** Projects that get a generated /work/[slug]/ page. */
export const workPages = projects.filter((p) => !p.href);
