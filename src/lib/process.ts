import type { IconName } from "./services";

export type Step = { title: string; text: string; icon: IconName | "chat" | "rocket" };

export const processSteps: Step[] = [
  { title: "Discover", icon: "chat", text: "We learn your goals and agree on scope, timeline and cost." },
  { title: "Design", icon: "design", text: "You see and click through your product before we build it." },
  { title: "Build", icon: "web", text: "We build in short sprints and show you progress along the way." },
  { title: "Launch & support", icon: "rocket", text: "We go live, then keep your product running and improving." },
];
