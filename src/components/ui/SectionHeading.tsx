type SectionHeadingProps = {
  en: string;
  ja?: string;
  description?: string;
  align?: "center" | "left";
  primary?: "en" | "ja";
  className?: string;
};

export function SectionHeading({
  en,
  ja,
  description,
  align = "center",
  primary = "en",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`.trim()}>
      {primary === "en" ? (
        <>
          <h2 className="section-title">{en}</h2>
          {ja && (
            <p className="mt-2 text-xs font-bold tracking-[1.44px] text-brand">
              {ja}
            </p>
          )}
        </>
      ) : (
        <>
          <p className="text-xs tracking-[0.2em] text-brand uppercase sm:text-sm">
            {en}
          </p>
          {ja && <h2 className="section-title mt-2 sm:mt-3">{ja}</h2>}
        </>
      )}
      {description && (
        <p className="section-desc mx-auto mt-3 max-w-[640px] sm:mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
