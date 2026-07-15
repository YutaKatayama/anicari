type SectionTransitionProps = {
  to?: "section" | "background" | "surface";
  className?: string;
};

const FILL_CLASS = {
  section: "fill-section",
  background: "fill-background",
  surface: "fill-surface",
} as const;

export function SectionTransition({
  to = "section",
  className = "",
}: SectionTransitionProps) {
  return (
    <div
      className={`relative w-full leading-[0] ${className}`.trim()}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[clamp(3.5rem,11vw,7rem)] w-full [shape-rendering:geometricPrecision]"
      >
        <path
          d="M0,80 C480,4 960,4 1440,80 L1440,120 L0,120 Z"
          className={FILL_CLASS[to]}
        />
      </svg>
    </div>
  );
}
