import type { IconName } from "@/lib/types";

type Props = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = "w-6 h-6", strokeWidth = 2 }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 4.5-3.3 8.5-8 9-4.7-.5-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "dollar":
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M17 7H10a3 3 0 100 6h4a3 3 0 110 6H6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12l4 4L19 6" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.1l1.4-6.8L2.2 9.6l6.9-.8L12 2.5z" />
        </svg>
      );
    case "drop":
      return (
        <svg {...common}>
          <path d="M12 3s6 7.5 6 12a6 6 0 11-12 0c0-4.5 6-12 6-12z" />
        </svg>
      );
    case "drain":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4v16M7 7l10 10M17 7L7 17" />
        </svg>
      );
    case "heater":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="3" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M12 3l10 17H2L12 3z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case "pipe":
      return (
        <svg {...common}>
          <path d="M3 7h6a3 3 0 013 3v4a3 3 0 003 3h6" />
          <path d="M9 4v6M15 14v6" />
        </svg>
      );
    case "faucet":
      return (
        <svg {...common}>
          <path d="M6 9h12M12 9v4" />
          <path d="M9 13h6v2a3 3 0 01-6 0v-2z" />
          <path d="M12 3v3M9 5h6" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 7.6a5 5 0 00-8.8-2.4A5 5 0 003.2 7.6c0 5.4 8.8 11.4 8.8 11.4s8.8-6 8.8-11.4z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    default:
      return null;
  }
}
