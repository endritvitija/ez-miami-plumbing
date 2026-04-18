type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className = "",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p className="text-accent text-sm font-bold uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-muted text-base sm:text-lg text-balance">
          {subheading}
        </p>
      )}
    </div>
  );
}
