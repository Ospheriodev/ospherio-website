import type { Metadata } from "next";
import { Breadcrumbs, PageHero } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { contactHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Ospherio — Start Your Software Project",
  description:
    "Tell Ospherio about your web, mobile, ERP or AI project. Book a free consultation or email us to get started.",
  alternates: { canonical: "/contact/" },
};

const checklist = [
  "What you want to build and who it's for",
  "Any existing systems it needs to work with",
  "Your ideal timeline and budget range",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Let's talk about your project."
        lead="Share a few details and we'll get back to you with questions, ideas and next steps."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container stack-gap">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact/" }]} />
          <div className="grid-2">
            <div className="card contact-card reveal">
              <span className="kicker">Email</span>
              <a href={`mailto:${site.email}?subject=New%20project%20enquiry`} className="big">
                {site.email}
              </a>
              <p>The quickest way to reach the whole team.</p>
              <a href={contactHref} className="btn btn-primary pulse" style={{ alignSelf: "flex-start" }}>
                Book a free consultation <Icon name="arrow" size={16} />
              </a>
            </div>
            <div className="card reveal" style={{ ["--d" as string]: "90ms" }}>
              <span className="kicker">Helpful to include</span>
              <ul className="list-check">
                {checklist.map((c) => (
                  <li key={c}>
                    <Icon name="check" size={18} /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
