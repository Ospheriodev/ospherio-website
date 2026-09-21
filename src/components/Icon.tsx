import type { IconName } from "@/lib/services";

const paths: Record<IconName | "arrow" | "check" | "chat" | "rocket", React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18M8 21h8M12 18v3" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  erp: <path d="M3 9l9-5 9 5v11H3zM7 20v-7h10v7M7 16h10" />,
  ai: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 10h4v4h-4z" />
    </>
  ),
  design: <path d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3" />,
  cloud: <path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18z" />,
  qa: <path d="M9 12l2 2 4-4M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  support: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" />
    </>
  ),
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  chat: <path d="M4 5h16v11H9l-5 4z M8 9h8M8 12h5" />,
  rocket: (
    <>
      <path d="M12 15l-3-3c1.5-4 4.5-7 10-8-1 5.5-4 8.5-8 10z" />
      <path d="M9 12l-4 1 2-4h4M12 15l-1 4 4-2v-4" />
      <circle cx="15" cy="9" r="1.2" />
    </>
  ),
  check: <path d="M5 12l5 5 9-10" />,
};

export function Icon({ name, size = 24 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={name === "arrow" || name === "check" ? 2 : 1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
