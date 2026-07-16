import { BOOKING_LINKS } from "@/constants/booking";
import { SOCIAL_BY_ID } from "@/constants/social";

export type EventItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  addressLocality: string;
  flow: string[];
  startDate: string;
  endDate: string;
  image: string;
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
    addressLocality: "豊島区",
    flow: ["企業紹介", "グループ面談", "タコパ交流"],
    startDate: "2026-08-02T18:00:00+09:00",
    endDate: "2026-08-02T21:00:00+09:00",
    image: "/anicari/S__84885572_0.jpg",
    featured: true,
  },
  {
    id: "vol5-workshop",
    title: "vol.5 AniCariキャリアイベント",
    subtitle: "ワークショップ編",
    date: "9月6日（日）",
    time: "18:00〜21:00",
    venue: "東京都港区芝大門1丁目6-6 ヤマトビル3F",
    addressLocality: "港区",
    flow: ["企業紹介", "ワークショップ", "面談", "懇親会"],
    startDate: "2026-09-06T18:00:00+09:00",
    endDate: "2026-09-06T21:00:00+09:00",
    image: "/anicari/S__84885559_0.jpg",
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
