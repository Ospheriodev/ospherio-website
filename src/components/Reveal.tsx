"use client";

import { useEffect } from "react";

/**
 * Adds `is-visible` to every `.reveal` element as it scrolls into view.
 * Content is fully visible without JavaScript (the hidden state is only
 * applied once `js-reveal` is set on <html>), so crawlers see everything.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const observe = () =>
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    observe();

    // Pick up elements added by client-side navigation.
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
