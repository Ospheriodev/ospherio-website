export type IconName = "web" | "mobile" | "erp" | "ai" | "design" | "cloud" | "qa" | "support";

export type Service = {
  slug: string;
  icon: IconName;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  deliverables: { title: string; text: string }[];
  stack: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "web-app-development",
    icon: "web",
    name: "Web app development",
    short: "Fast, secure web platforms, portals and SaaS products built on modern stacks.",
    metaTitle: "Custom Web App Development Company",
    metaDescription:
      "Custom web application development: SaaS products, client portals and internal tools built with React, Next.js and Node.js by Ospherio.",
    headline: "Web applications built to scale with your business.",
    intro:
      "From SaaS products to customer portals and internal dashboards, we design and build web applications that are fast, secure and easy to maintain.",
    deliverables: [
      { title: "SaaS products", text: "Multi-tenant platforms with authentication, billing and admin tooling." },
      { title: "Portals & dashboards", text: "Customer and partner portals, reporting dashboards and back-office tools." },
      { title: "APIs & integrations", text: "REST and GraphQL APIs, payment gateways and third-party integrations." },
      { title: "Modernisation", text: "Rebuilding legacy systems on a modern, maintainable stack." },
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    faqs: [
      { q: "How long does a web app take to build?", a: "A focused first version usually takes 6–12 weeks, depending on scope. We agree the scope and timeline before work starts." },
      { q: "Will I own the code?", a: "Yes. You own the source code and all project assets." },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "mobile",
    name: "Mobile app development",
    short: "Cross-platform iOS and Android apps, including voice-first and offline-ready experiences.",
    metaTitle: "iOS & Android App Development Company",
    metaDescription:
      "Cross-platform mobile app development for iOS and Android with Flutter and React Native — from MVP to App Store launch.",
    headline: "Mobile apps your customers keep coming back to.",
    intro:
      "We build cross-platform apps for iOS and Android from a single codebase, so you launch faster without compromising on quality.",
    deliverables: [
      { title: "Cross-platform apps", text: "One codebase for iOS and Android using Flutter or React Native." },
      { title: "Voice & offline features", text: "Voice input, speech-to-text and offline-first data sync." },
      { title: "Backend & APIs", text: "Secure backends, push notifications and analytics." },
      { title: "Store launch", text: "App Store and Google Play submission and release management." },
    ],
    stack: ["Flutter", "React Native", "Firebase", "Node.js"],
    faqs: [
      { q: "Do you build native or cross-platform?", a: "We usually recommend cross-platform for speed and cost, and go native when a feature requires it." },
      { q: "Can you publish the app for us?", a: "Yes, we handle App Store and Google Play submissions." },
    ],
  },
  {
    slug: "erp-inventory-software",
    icon: "erp",
    name: "ERP & inventory systems",
    short: "Stock, warehouse, barcode and business-management software tailored to how you operate.",
    metaTitle: "Custom ERP & Inventory Management Software",
    metaDescription:
      "Custom ERP, inventory and warehouse management software with barcode scanning, stock control and reporting — built around your workflow.",
    headline: "Inventory and ERP software that fits how you work.",
    intro:
      "Off-the-shelf ERPs are often too complex or too rigid. We build stock, warehouse and business-management systems around your actual processes.",
    deliverables: [
      { title: "Inventory & stock control", text: "Real-time stock levels, transfers, reorder alerts and audits." },
      { title: "Warehouse management", text: "Bin locations, picking, packing and barcode scanning." },
      { title: "Sales & purchasing", text: "Orders, invoices, suppliers and customer records in one place." },
      { title: "Reporting", text: "Dashboards and exports for stock value, movement and performance." },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Barcode & QR scanning"],
    faqs: [
      { q: "Can you migrate data from our current system?", a: "Yes. We plan and run data migration from spreadsheets or existing software." },
      { q: "Does it work with barcode scanners?", a: "Yes — handheld scanners and phone cameras are both supported." },
    ],
  },
  {
    slug: "ai-automation",
    icon: "ai",
    name: "AI & automation",
    short: "LLM integrations, RAG search over your documents, and workflow automation.",
    metaTitle: "AI Development & Automation Services",
    metaDescription:
      "AI development services: LLM integrations, RAG systems that answer questions from your documents, AI reporting and workflow automation.",
    headline: "Practical AI that saves your team hours every week.",
    intro:
      "We add AI where it creates real value — answering questions from your own data, generating reports and automating repetitive work.",
    deliverables: [
      { title: "RAG systems", text: "Search and chat over your documents and databases with cited answers." },
      { title: "AI reporting", text: "Plain-language questions turned into reports and summaries." },
      { title: "LLM integrations", text: "Adding AI features to your existing products and tools." },
      { title: "Workflow automation", text: "Automating data entry, document processing and hand-offs." },
    ],
    stack: ["Python", "OpenAI / Anthropic APIs", "Vector databases", "LangChain"],
    faqs: [
      { q: "Is our data safe?", a: "We design for privacy from the start: access controls, no training on your data, and hosting options that meet your requirements." },
      { q: "Can AI work with our existing systems?", a: "Yes. We connect to your databases, documents and tools through secure integrations." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "design",
    name: "UI/UX design",
    short: "Research-led product design, prototypes and design systems your users understand.",
    metaTitle: "UI/UX Design Services for Web & Mobile Apps",
    metaDescription:
      "UI/UX design for web and mobile products: user research, wireframes, clickable prototypes and design systems.",
    headline: "Design that makes complex products feel simple.",
    intro:
      "Good design reduces support requests and increases adoption. We design interfaces your users understand from the first click.",
    deliverables: [
      { title: "Research", text: "User interviews and competitor reviews to find what matters." },
      { title: "Wireframes & prototypes", text: "Clickable prototypes to test ideas before development." },
      { title: "Visual design", text: "Polished interfaces that reflect your brand." },
      { title: "Design systems", text: "Reusable components that keep your product consistent." },
    ],
    stack: ["Figma", "Prototyping", "Design systems"],
    faqs: [
      { q: "Can you redesign an existing product?", a: "Yes. We audit what you have, then improve it step by step." },
    ],
  },
  {
    slug: "cloud-devops",
    icon: "cloud",
    name: "Cloud & DevOps",
    short: "Hosting, CI/CD, monitoring and cost-sensible cloud architecture.",
    metaTitle: "Cloud & DevOps Services",
    metaDescription:
      "Cloud and DevOps services: AWS hosting, CI/CD pipelines, monitoring, backups and cloud cost optimisation.",
    headline: "Reliable infrastructure without the surprise bills.",
    intro:
      "We set up and run the infrastructure behind your product so releases are routine and downtime is rare.",
    deliverables: [
      { title: "Cloud setup", text: "Secure, scalable hosting on AWS and other providers." },
      { title: "CI/CD", text: "Automated testing and deployment pipelines." },
      { title: "Monitoring", text: "Uptime, error and performance monitoring with alerts." },
      { title: "Cost optimisation", text: "Right-sizing resources to cut monthly cloud spend." },
    ],
    stack: ["AWS", "Docker", "GitHub Actions", "Vercel"],
    faqs: [
      { q: "Can you take over our existing servers?", a: "Yes. We review your current setup and improve it without disrupting your users." },
    ],
  },
  {
    slug: "qa-testing",
    icon: "qa",
    name: "QA & testing",
    short: "Manual and automated testing so releases ship without surprises.",
    metaTitle: "Software QA & Testing Services",
    metaDescription:
      "Software QA and testing services: manual testing, automated end-to-end tests, performance and regression testing for web and mobile apps.",
    headline: "Ship with confidence, every release.",
    intro:
      "We catch bugs before your users do, with a mix of manual testing and automated test suites that run on every change.",
    deliverables: [
      { title: "Manual testing", text: "Structured test plans across devices and browsers." },
      { title: "Automated tests", text: "End-to-end and API test suites that run in CI." },
      { title: "Regression testing", text: "Making sure new features don't break old ones." },
      { title: "Performance testing", text: "Load and speed testing before launch." },
    ],
    stack: ["Playwright", "Jest", "Postman"],
    faqs: [
      { q: "Can you test software another team built?", a: "Yes. We can join an existing project as an independent QA team." },
    ],
  },
  {
    slug: "it-consulting",
    icon: "support",
    name: "Maintenance & IT consulting",
    short: "Ongoing support, upgrades and honest technical advice for your roadmap.",
    metaTitle: "Software Maintenance & IT Consulting",
    metaDescription:
      "Software maintenance and IT consulting: ongoing support, security updates, technical audits and product roadmap advice.",
    headline: "A technical partner after launch day.",
    intro:
      "Software needs care after it goes live. We keep your product secure and up to date, and help you plan what to build next.",
    deliverables: [
      { title: "Maintenance plans", text: "Bug fixes, updates and security patches on a monthly plan." },
      { title: "Technical audits", text: "Code, security and performance reviews with clear recommendations." },
      { title: "Roadmap advice", text: "Help choosing technologies and prioritising features." },
      { title: "Team extension", text: "Extra developers for your in-house team when you need them." },
    ],
    stack: ["Code audits", "Security reviews", "Support SLAs"],
    faqs: [
      { q: "Do you support software you didn't build?", a: "Yes, after a short audit to understand the codebase." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
