import { BOOKING_LINKS } from "@/constants/booking";
import { SOCIAL_BY_ID } from "@/constants/social";

export type EventItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  flow: string[];
  featured?: boolean;
};

export const EVENTS: EventItem[] = [
  {
    id: "vol5-tacopa",
    title: "vol.5 AniCariキャリアイベント",
    subtitle: "タコパ編",
    date: "8月2日（日）",
    time: "18:00〜21:00",
    venue: "東京都豊島区東池袋1-27-7 サンライズビル2F",
    flow: ["企業紹介", "グループ面談", "タコパ交流"],
    featured: true,
  },
  {
    id: "vol5-workshop",
    title: "vol.5 AniCariキャリアイベント",
    subtitle: "ワークショップ編",
    date: "6月28日（日）",
    time: "18:00〜21:00",
    venue: "東京都港区芝大門1丁目6-6 ヤマトビル3F",
    flow: ["企業紹介", "ワークショップ", "面談", "懇親会"],
  },
];

export const EVENT_CTA = {
  label: "イベントに申し込む",
  href: SOCIAL_BY_ID.line.href,
};

export const EVENT_CALENDAR_CTA = {
  label: BOOKING_LINKS.eventCalendar.label,
  href: BOOKING_LINKS.eventCalendar.href,
};
