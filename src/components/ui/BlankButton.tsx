import Image from "next/image";
import Link from "next/link";

type BlankButtonProps = {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
};

export function BlankButton({
  label,
  href,
  external,
  className = "",
}: BlankButtonProps) {
  const content = (
    <>
      <span className="blank__text mr-5 text-base leading-[26px] font-bold tracking-[1.9px] text-on-brand">
        {label}
      </span>
      <span className="absolute top-1/2 right-5 -translate-y-[60%]">
        <Image
          src="/icons/arrow-dark.svg"
          alt=""
          width={14}
          height={14}
          aria-hidden
          className="max-h-3.5 max-w-3.5 object-contain"
        />
      </span>
    </>
  );

  const classes = `btn--blank relative flex h-[50px] w-[280px] items-center justify-center rounded-[25px] bg-button no-underline transition-opacity hover:opacity-90 ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
