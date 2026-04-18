import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: "phone" | "mail" | "arrow" | null;
  className?: string;
  ariaLabel?: string;
};

const sizeMap: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-4 text-lg sm:text-xl",
};

const variantMap: Record<Variant, string> = {
  primary:
    "bg-accent hover:bg-accent-dark text-black shadow-cta ring-1 ring-black/10 focus-visible:ring-primary",
  secondary:
    "bg-white/10 hover:bg-white/15 text-fg border border-white/20 backdrop-blur",
  ghost:
    "bg-transparent hover:bg-white/10 text-fg border border-white/20",
  light:
    "bg-white hover:bg-white/90 text-primary-dark shadow-cta",
};

export function CallButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "phone",
  className = "",
  ariaLabel,
}: Props) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  const classes = `${base} ${sizeMap[size]} ${variantMap[variant]} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} className="w-5 h-5" />}
      <span>{children}</span>
    </>
  );
  if (isExternal) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
