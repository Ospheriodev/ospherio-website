// Content for the GoodsHaul product page (/goodshaul/). Everything here
// describes what is built today; planned work lives in `comingNext` only.
// Don't add prices, customer names or figures that aren't published.

export const goodshaul = {
  name: "GoodsHaul",
  path: "/goodshaul/",
  category: "Order-to-cash for wholesale distribution",
  metaTitle: "GoodsHaul — Order, Delivery and Payment Software for Wholesale Distributors",
  metaDescription:
    "GoodsHaul is van-sales and distribution software by Ospherio: offline order taking on the phone, delivery runs, invoicing, payments at the drop, credit control and stock, in one system.",
  heroTitle: "Orders, deliveries and cash, from the van to the office.",
  heroLead:
    "GoodsHaul runs a wholesale distributor's day in one system. Reps take orders on the phone, the office confirms and invoices, drivers deliver and collect payment, and every balance stays current. The phone keeps working with no signal.",
  earlyAccessSubject: "GoodsHaul early access",
};

export const flow = [
  {
    who: "Rep or office",
    title: "Take the order",
    text: "On the phone at the customer's counter, or keyed in at the office. Customer prices, tax and pack sizes are applied for you.",
  },
  {
    who: "Office",
    title: "Check and confirm",
    text: "Orders over a credit limit or short on stock are flagged, so the office decides before anything is loaded.",
  },
  {
    who: "Office",
    title: "Invoice and plan the run",
    text: "Invoice confirmed orders, then put them on a delivery run by day, van and driver.",
  },
  {
    who: "Driver",
    title: "Deliver and collect",
    text: "The driver works through the stops on the phone, records each delivery and takes cash or a cheque at the drop.",
  },
  {
    who: "Office",
    title: "Know who owes what",
    text: "Payments settle the oldest debt first. Balances, ageing and statements are current as soon as the phone syncs.",
  },
];

export const roles = [
  {
    tag: "Phone · Rep",
    title: "For reps on the road",
    points: [
      "Take an order with no signal; it is sent when the phone reconnects",
      "Today's customers, with balance and credit limit shown before the order is placed",
      "Customer prices worked out on the phone exactly as the office works them out",
      "Product photos in the picker, and one tap to repeat the last order",
    ],
  },
  {
    tag: "Phone · Driver",
    title: "For drivers at the drop",
    points: [
      "Today's run and its stops, available offline",
      "Record each stop as delivered or failed",
      "Take cash or a cheque and share the receipt from the phone",
      "Undo a mistaken payment; the office still sees what happened",
      "Cash-up for the run when the van is back",
    ],
  },
  {
    tag: "Web · Office",
    title: "For the office",
    points: [
      "A dashboard of what is waiting: orders to confirm, over the limit, not yet on a run",
      "Orders, invoices, credit notes and delivery runs in one place",
      "Payments, cheque register, who owes what and printable statements",
      "Products with units and barcodes, price lists and customer prices",
      "Import products, customers and opening stock from CSV, with a dry run first",
    ],
  },
];

export const offline = [
  {
    title: "Saved on the phone first",
    text: "Orders, deliveries and payments are stored on the device, then queued. Closing the app or losing power doesn't lose them.",
  },
  {
    title: "Sent once, never twice",
    text: "Every change carries its own ID, so a retry on a bad connection can't create a duplicate order or payment.",
  },
  {
    title: "Numbers that hold",
    text: "Each phone has its own number series, so a rep or driver can give an order or receipt number on the spot.",
  },
  {
    title: "The rep's quote is honoured",
    text: "If a price changed while the phone was offline, the order keeps the price the customer was given and is flagged for the office.",
  },
];

export const stock = [
  "On hand, committed and available for every product, in boxes and loose items",
  "Counts and adjustments with a reason: damaged, lost, found, own use",
  "A full movement history that can't be edited after the fact",
  "Short-stock warnings on the order, before the van is loaded",
];

export const catalogue = [
  "Product photos, shown in search, order lines and on the phone",
  "A print-ready PDF catalogue with a cover, brand pages and optional prices",
  "A QR code per product that opens its public page",
  "Public pages show only what you approve: no prices, stock or customer details",
];

export const money = [
  { title: "Payments", text: "Cash and cheques, recorded in the office or taken on the phone at the drop." },
  { title: "Allocation", text: "A payment settles the oldest debt first; the office can re-point it." },
  { title: "Cheque register", text: "Received, banked, cleared or returned. A returned cheque reopens its invoices." },
  { title: "Credit control", text: "Credit limits that warn on the order, and a stop the office can put on a customer." },
  { title: "Credit notes", text: "Corrections are new documents, so an invoice the customer holds never changes." },
  { title: "Statements", text: "Who owes what, ageing by customer and statements ready to print." },
];

export const setup = [
  { title: "Your currency and tax", text: "Currency, time zone, tax rates and bill rounding are set per company." },
  { title: "Your data", text: "CSV imports check every row and report problems before anything is saved." },
  { title: "Your team", text: "Owner, office, warehouse, rep and driver roles decide what each person sees." },
];

export const comingNext = [
  "Guided product capture with the phone camera",
  "Invoices made and printed at the drop",
  "Van stock, goods in, and batch and expiry tracking",
  "AI-assisted product entry: a photo fills the form, a person saves it",
  "Sales and tax summary reports",
];

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
    q: "What does it run on?",
    a: "The back office runs in a web browser. The phone app is built for iPhone and Android.",
  },
  {
    q: "Can we bring our existing products and customers?",
    a: "Yes. Products, customers and opening stock import from CSV. A dry run reports any problems row by row before anything is saved.",
  },
  {
    q: "Which countries and currencies does it support?",
    a: "Each company is set up with its own currency, time zone and tax rates, so it isn't tied to one country.",
  },
  {
    q: "What does early access involve?",
    a: "GoodsHaul is a working product, open to a small number of distributors while we finish the roadmap. Tell us how you take orders and deliver today and we'll arrange a demo.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing isn't published yet. It will depend on the parts of the system you use and the size of your team, and we'll go through it with you during early access.",
  },
];
