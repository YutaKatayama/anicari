import { COMPANY } from "@/constants/company";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://anicari.com";

export const SEO_KEYWORDS = [
  "Anicari",
  "アニキャリ",
  "動物看護",
  "キャリアイベント",
  "ペット業界",
  "動物看護師就活",
  "動物看護師",
  "動物看護学生",
  "就活マッチング",
  "動物病院 就活",
  "ペット業界 就活",
  "キャリア支援",
] as const;

export const SEO = {
  siteName: "AniCari",
  siteNameJa: COMPANY.nameJa,
  title:
    "AniCari | 動物看護師就活・ペット業界のキャリアイベント | アニキャリ",
  description:
    "AniCari（アニキャリ）は、動物看護師就活を支援するペット業界特化型のキャリアイベント団体です。動物看護学生と動物病院・ペット業界企業をつなぐ就活マッチングイベントを開催。動物看護のキャリア支援ならアニキャリ。",
  ogDescription:
    "動物看護師就活・ペット業界のキャリアイベント。AniCari（アニキャリ）が動物看護学生と動物病院をつなぐ就活マッチングを支援します。",
  keywords: [...SEO_KEYWORDS],
  locale: "ja_JP",
  twitterHandle: "@anicari_student",
  ogImagePath: "/anicari/Anicari.1.jpg",
  googleSiteVerification: "ba7d86fcdc50660b",
};

export const SEO_H1 =
  "AniCari（アニキャリ）| 動物看護師就活・ペット業界キャリアイベント";
