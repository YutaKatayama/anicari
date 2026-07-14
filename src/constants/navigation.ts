import { SOCIAL_BY_ID } from "@/constants/social";

export type NavLink = {
  label: string;
  href: string;
};

export type ExternalNavLink = NavLink & {
  external?: boolean;
};

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "ABOUT ANICARI", href: "#about" },
  { label: "SERVICE", href: "#service" },
  { label: "FEATURES", href: "#features" },
  { label: "RESULTS", href: "#results" },
  { label: "EVENTS", href: "#events" },
  { label: "COMPANY", href: "#company" },
  { label: "MESSAGE", href: "#greeting" },
  { label: "CONTACT", href: "#contact" },
];

export const EXTERNAL_NAV_LINKS: ExternalNavLink[][] = [
  [
    {
      label: "INSTAGRAM",
      href: SOCIAL_BY_ID.instagram.href,
      external: true,
    },
    {
      label: "OFFICIAL LINE",
      href: SOCIAL_BY_ID.line.href,
      external: true,
    },
  ],
  [
    {
      label: "X",
      href: SOCIAL_BY_ID.x.href,
      external: true,
    },
    {
      label: "FOR STUDENTS",
      href: "#events",
    },
  ],
];
