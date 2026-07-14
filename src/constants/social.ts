export type SocialLink = {
  id: "instagram" | "line" | "x";
  label: string;
  href: string;
  description: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/anicari_student",
    description: "@anicari_student",
  },
  {
    id: "line",
    label: "公式LINE",
    href: "https://lin.ee/PWYVaoH",
    description: "お申込み・質問はこちら",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/anicari_student",
    description: "@anicari_student",
  },
];

export const SOCIAL_BY_ID = Object.fromEntries(
  SOCIAL_LINKS.map((link) => [link.id, link]),
) as Record<SocialLink["id"], SocialLink>;
