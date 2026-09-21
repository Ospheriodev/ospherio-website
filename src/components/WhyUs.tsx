import { Icon } from "./Icon";
import type { IconName } from "@/lib/services";

const reasons: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "web",
    title: "One partner, every layer",
    text: "Strategy, design, web, mobile, cloud, AI and support under one roof — no juggling agencies or lost hand-offs.",
  },
  {
    icon: "ai",
    title: "Right tool for the job",
    text: "We're not tied to one stack. We choose the technology that fits your product, budget and future plans.",
  },
  {
    icon: "support",
    title: "Direct line to the builders",
    text: "You talk to the people designing and building your product, not a chain of account managers.",
  },
  {
    icon: "qa",
    title: "You own everything",
    text: "Full source code, documentation and accounts are yours from day one. No lock-in.",
  },
];

/**
 * `level` is the heading tag for each card, styled as an h3 either way.
 * Use "h3" under a SectionHead (home) and "h2" where the section has no
 * heading of its own (About), so the page never skips a level.
 */
export function WhyUs({ level: H = "h3" }: { level?: "h2" | "h3" }) {
  return (
    <div className="why">
      {reasons.map((r, i) => (
        <div key={r.title} className="why-item reveal" style={{ ["--d" as string]: `${i * 90}ms` }}>
          <span className="svc-ic">
            <Icon name={r.icon} size={24} />
          </span>
          <H className="h3">{r.title}</H>
          <p>{r.text}</p>
        </div>
      ))}
    </div>
  );
}
