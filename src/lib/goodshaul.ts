// Content for the GoodsHaul product page (/goodshaul/). Keep it short: one idea
// per line. `reasons`, `flow`, `roles` and `included` describe what is built
// today. `ai` and `alsoPlanned` are in development and are labelled that way on
// the page. Don't add prices, customer names or figures that aren't published.

export const goodshaul = {
  name: "GoodsHaul",
  path: "/goodshaul/",
  metaTitle: "GoodsHaul — Order, Delivery and Payment Software for Wholesale Distributors",
  metaDescription:
    "GoodsHaul is van-sales and distribution software by Ospherio: offline order taking, delivery runs, invoicing, payments at the drop, credit control and stock, with AI product capture in development.",
  heroTitle: "Orders, deliveries and cash, from the van to the office.",
  heroLead: "One system for wholesale distributors. It keeps working when the signal doesn't.",
  earlyAccessSubject: "GoodsHaul early access",
  video: {
    src: "/media/goodshaul/goodshaul-demo.mp4",
    poster: "/media/goodshaul/goodshaul-demo-cover.jpg",
    duration: "PT40S",
    published: "2026-10-08",
  },
};

export const reasons = [
  { big: "No signal?", title: "No problem.", text: "Orders, deliveries and payments save on the phone and send themselves later." },
  { big: "Key it in", title: "once.", text: "The rep's order becomes the invoice, the delivery and the balance." },
  { big: "Who owes", title: "what?", text: "Cash, cheques and credit limits, current the moment the van syncs." },
];

// In development. Shown under an "In development" badge, never as shipped.
export const ai = [
  {
    key: "snap",
    verb: "Snap it.",
    text: "Photograph a product and its box. The details fill themselves in.",
  },
  {
    key: "drop",
    verb: "Drop it in.",
    text: "Upload a supplier price list. Your prices line up without retyping.",
  },
  {
    key: "show",
    verb: "Show it off.",
    text: "Clean product photos, ready for your catalogue.",
  },
] as const;

export const aiPromise = "AI drafts. A person approves. It never posts, prices or pays on its own.";

export const flow = [
  { who: "Rep or office", title: "Order" },
  { who: "Office", title: "Confirm" },
  { who: "Office", title: "Invoice" },
  { who: "Driver", title: "Deliver" },
  { who: "Driver", title: "Get paid" },
];

export const roles = [
  {
    tag: "Phone",
    title: "Reps",
    points: ["Take orders offline", "See balance and credit limit first", "Repeat the last order in one tap"],
  },
  {
    tag: "Phone",
    title: "Drivers",
    points: ["Today's run, stop by stop", "Take cash or a cheque at the drop", "Share the receipt from the phone"],
  },
  {
    tag: "Web",
    title: "The office",
    points: ["See what needs attention today", "Invoice and plan runs", "Chase what's owed with statements"],
  },
];

export const included = [
  "Stock levels",
  "Price lists",
  "Customer prices",
  "Credit limits",
  "Cheque register",
  "Credit notes",
  "Statements",
  "Delivery runs",
  "Product photos",
  "PDF catalogue",
  "QR product pages",
  "CSV import",
  "Any currency and tax",
  "Roles for every job",
];

export const alsoPlanned = ["Invoices printed at the drop", "Van stock", "Batch and expiry", "Sales and tax reports"];

export const faqs = [
  {
    q: "Who is GoodsHaul for?",
    a: "Wholesalers and distributors who take orders through reps or an office and deliver from their own vans, from a single van upwards.",
  },
  {
    q: "Does the phone app need a signal?",
    a: "No. Reps and drivers can take orders, record deliveries and take payments offline. The phone sends everything when it reconnects, and nothing is duplicated if a send is retried.",
  },
  {
    q: "Is the AI available now?",
    a: "Not yet. AI product capture is in development. When it arrives it drafts the details and a person approves them before anything is saved.",
  },
  {
    q: "Can we bring our existing products and customers?",
    a: "Yes. Products, customers and opening stock import from CSV, and a dry run reports any problems before anything is saved.",
  },
  {
    q: "What does it run on?",
    a: "The back office runs in a web browser. The phone app is built for iPhone and Android.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing isn't published yet. It will depend on the parts of the system you use and the size of your team, and we'll go through it with you during early access.",
  },
];
