export type Visual = "barcode" | "voice" | "none";

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
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "goodshaul",
    name: "Goodshaul",
    category: "AI · Warehouse · ERP",
    summary:
      "A complete AI warehouse solution — scan, track and control stock across locations, with the grip of a full ERP and none of its weight.",
    metaDescription:
      "Goodshaul is a complete AI warehouse solution by Ospherio: barcode scanning, live stock and location tracking, and AI-assisted reporting on stock movement.",
    overview:
      "Goodshaul runs a warehouse end to end. Barcode scanning covers the day-to-day movements — goods in, goods out, transfers between locations — so stock levels stay accurate without anyone keeping a parallel spreadsheet. On top of that history, AI turns raw movement data into reporting the team can act on. It is built for businesses that need the control of a full ERP without the cost and complexity of rolling one out.",
    features: [
      "Barcode scanning for stock in, stock out and transfers",
      "Live stock and location tracking across warehouses",
      "AI-assisted reporting over your stock movement history",
    ],
    services: ["erp-inventory-software", "web-app-development", "ai-automation", "ui-ux-design"],
    visual: "barcode",
    featured: true,
  },
  {
    slug: "voiceledger",
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
    featured: true,
  },
  {
    slug: "reportinggpt",
    name: "ReportingGPT",
    category: "AI · Analytics",
    summary:
      "Ask questions of your own business data in plain language and get a report back, grounded in the documents it drew from.",
    metaDescription:
      "ReportingGPT is a RAG reporting system by Ospherio: ask questions of your business documents and data in plain language and get reports grounded in the source material.",
    overview:
      "ReportingGPT sits on top of a company's own documents and data. Retrieval-augmented generation pulls the material that actually answers a question asked in plain English, so the reply is grounded in the business's own records rather than guessed at. The result reads as a report, and points back at the sources behind it.",
    features: [
      "Ask questions of your own documents and data in plain language",
      "Retrieval-augmented answers grounded in the source material",
      "Answers come back as readable reports, traceable to their sources",
    ],
    services: ["ai-automation"],
    visual: "none",
    featured: false,
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
    visual: "none",
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
