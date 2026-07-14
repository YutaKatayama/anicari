import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/social";

type SocialLinksProps = {
  variant?: "buttons" | "inline";
  className?: string;
};

export function SocialLinks({
  variant = "buttons",
  className = "",
}: SocialLinksProps) {
  if (variant === "inline") {
    return (
      <ul className={`flex flex-wrap gap-4 ${className}`}>
        {SOCIAL_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold tracking-[0.15em] text-brand uppercase no-underline transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={`grid gap-4 sm:grid-cols-3 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-2xl border border-brand/20 bg-surface px-5 py-6 no-underline transition-all hover:border-brand/40 hover:shadow-sm"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
            {link.label}
          </span>
          <span className="mt-2 text-base font-bold text-foreground transition-colors group-hover:text-brand">
            {link.description}
          </span>
        </a>
      ))}
    </div>
  );
}

export function SocialLinksFooter({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-6 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[1.6px] text-foreground no-underline hover:text-brand"
        >
          {link.label}
          <span aria-hidden className="text-brand">
            ↗
          </span>
        </a>
      ))}
      <Link
        href="#contact"
        className="text-[13px] font-bold tracking-[1.6px] text-foreground no-underline hover:text-brand"
      >
        CONTACT
      </Link>
    </div>
  );
}
