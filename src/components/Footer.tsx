import Link from "next/link";
import Image from "next/image";
import logoWhite from "../../public/brand/logo-horizontal-white.svg";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  const social = [
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "GitHub", href: site.social.github },
    { label: "Clutch", href: site.social.clutch },
  ].filter((s) => s.href);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src={logoWhite} alt="Ospherio" width={198} height={32} />
          <p>Software development and IT services for companies worldwide.</p>
          <a href={`mailto:${site.email}`} className="footer-email">{site.email}</a>
        </div>
        <div>
          <h2 className="footer-title">Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Company</h2>
          <ul>
            <li><Link href="/work/">Work</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
        {social.length > 0 && (
          <div>
            <h2 className="footer-title">Connect</h2>
            <ul>
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ospherio. All rights reserved.</span>
      </div>
    </footer>
  );
}
