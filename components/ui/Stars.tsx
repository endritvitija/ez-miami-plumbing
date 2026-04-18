import { Icon } from "./Icon";

type Props = { rating?: number; className?: string };

export function Stars({ rating = 5, className = "" }: Props) {
  const count = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className={`flex items-center gap-0.5 text-accent ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className="w-4 h-4" />
      ))}
    </div>
  );
}
