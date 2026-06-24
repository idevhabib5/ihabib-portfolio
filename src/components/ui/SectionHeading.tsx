interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <p className="section-label mb-2">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div
        className={`mt-3 h-0.5 w-12 bg-accent rounded-full ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p className="mt-4 text-base text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
