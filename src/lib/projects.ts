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

// TODO: replace every [bracketed] placeholder with real project details.
export const projects: Project[] = [
  {
    slug: "barcodex",
    name: "BarcodeX",
    category: "Inventory · ERP",
    summary:
      "Stock and warehouse management built to be easy to use — scan, track and control inventory without ERP complexity.",
    metaDescription:
      "BarcodeX is an easy-to-use stock and warehouse management system built by Ospherio, with barcode scanning and inventory control.",
    overview:
      "BarcodeX is a stock and warehouse management product designed to give businesses the control of a full ERP without its complexity.",
    features: [
      "Barcode scanning for stock in, stock out and transfers",
      "Warehouse and stock-level tracking",
      "[Add key feature]",
    ],
    services: ["erp-inventory-software", "web-app-development", "ui-ux-design"],
    visual: "barcode",
    featured: true,
  },
  {
    slug: "voice-khata",
    name: "Voice Khata",
    category: "Mobile · Voice AI · Fintech",
    summary:
      "A digital ledger you talk to — spoken transactions are transcribed and recorded as structured entries.",
    metaDescription:
      "Voice Khata is a voice-based digital ledger app by Ospherio: speak a transaction and it is transcribed and recorded automatically.",
    overview:
      "Voice Khata turns a spoken transaction into a structured ledger entry. Entries can be added by voice or by hand, and reviewed, edited or deleted with a tap.",
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
    slug: "warehouse-management-system",
    name: "Warehouse Management System",
    category: "Logistics · Web",
    summary: "[One-line description: what it manages and for whom]",
    metaDescription: "Warehouse Management System project by Ospherio. [Add a one-sentence description]",
    overview: "[Project overview]",
    features: ["[Key feature]", "[Key feature]"],
    services: ["erp-inventory-software", "web-app-development"],
    visual: "none",
    featured: false,
  },
  {
    slug: "bakerify",
    name: "Bakerify",
    category: "[Category]",
    summary: "[One-line description of Bakerify]",
    metaDescription: "Bakerify project by Ospherio. [Add a one-sentence description]",
    overview: "[Project overview]",
    features: ["[Key feature]", "[Key feature]"],
    services: ["web-app-development"],
    visual: "none",
    featured: false,
  },
  {
    slug: "rag-reporting-system",
    name: "RAG Reporting System",
    category: "AI · Analytics",
    summary: "[One-line description, e.g. ask questions of your business data and get reports in plain language]",
    metaDescription: "RAG Reporting System project by Ospherio. [Add a one-sentence description]",
    overview: "[Project overview]",
    features: ["[Key feature]", "[Key feature]"],
    services: ["ai-automation"],
    visual: "none",
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
