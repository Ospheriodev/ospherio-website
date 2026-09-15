"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark, Wordmark } from "./Logo";
import { Icon } from "./Icon";
import { contactHref } from "@/lib/site";

const nav = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Ospherio home">
          <LogoMark size={38} />
          <Wordmark />
        </Link>

        <nav className={"nav" + (open ? " is-open" : "")} aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={contactHref} className="btn btn-primary nav-cta-mobile">
            Start a project
          </a>
        </nav>

        <a href={contactHref} className="btn btn-primary btn-sm nav-cta">
          Start a project <Icon name="arrow" size={16} />
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={"burger" + (open ? " is-open" : "")} />
        </button>
      </div>
    </header>
  );
}
