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

export function WhyUs() {
  return (
    <div className="why">
      {reasons.map((r, i) => (
        <div key={r.title} className="why-item reveal" style={{ ["--d" as string]: `${i * 90}ms` }}>
          <span className="svc-ic">
            <Icon name={r.icon} size={24} />
          </span>
          <h3 className="h3">{r.title}</h3>
          <p>{r.text}</p>
        </div>
      ))}
    </div>
  );
}
