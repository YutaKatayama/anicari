export const EVENT_RESULTS = [
  { vol: 1, students: 10, hospitals: 2 },
  { vol: 2, students: 17, hospitals: 2 },
  { vol: 3, students: 10, hospitals: 3 },
  { vol: 4, students: 16, hospitals: 5 },
] as const;

export const RESULTS_HIGHLIGHT = {
  rate: 90,
  label: "参加学生の90％が参加動物病院での実習に繋がりました",
} as const;

export const PARTICIPATING_SCHOOLS = [
  "ヤマザキ学園（大学・短大・専門）",
  "日本大学",
  "横浜動物専門学校",
  "麻布大学",
] as const;

export const PARTICIPATING_GRADUATES = [
  { year: "27卒", count: 18 },
  { year: "28卒", count: 9 },
  { year: "29卒", count: 17 },
  { year: "30卒", count: 2 },
] as const;

export const PARTICIPATING_HOSPITALS = [
  "TRVA動物医療センター",
  "東京動物皮膚科センター",
  "しらさぎ動物病院",
  "おだわら動物病院",
  "原宿動物病院",
  "サーカス動物病院",
  "つくば夜間動物病院",
  "キャットクリニック世田谷",
  "久我山動物医療センター",
] as const;
