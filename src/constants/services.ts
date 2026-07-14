import { SOCIAL_BY_ID } from "@/constants/social";

export type ServiceItem = {
  id: string;
  layout: "left" | "right" | "bottom";
  titleEn: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  image: string;
  imageAlt: string;
  buttonLabel: string;
  buttonHref: string;
  external?: boolean;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "matching",
    layout: "left",
    titleEn: "ANICARI\nMATCHING",
    subtitle: "業界特化型の\n就活マッチングイベント",
    description:
      "動物看護学生と動物病院・ペット業界企業が直接出会える、業界特化型の就活マッチングイベント。学生はリアルな現場の声を聞き、企業は熱意ある人材と出会えます。",
    highlights: ["業界の人材不足", "早期離職"],
    image: "/anicari/S__84885566_0.jpg",
    imageAlt: "動物病院訪問・マッチングイベント",
    buttonLabel: "VIEW EVENTS",
    buttonHref: "#events",
  },
  {
    id: "career-event",
    layout: "right",
    titleEn: "CAREER\nEVENT",
    subtitle: "企業紹介から\n面談・交流まで",
    description:
      "各病院様による病院紹介のあと、学生・病院双方の価値観や想いを共有する「価値観ワークショップ」を実施。単なる説明だけでは分からない相互理解を深め、座談会形式で直接交流いただける時間もご用意しています。",
    image: "/anicari/S__84885559_0.jpg",
    imageAlt: "キャリアイベントでの企業紹介",
    buttonLabel: "EVENT FLOW",
    buttonHref: "#events",
  },
  {
    id: "tacopa",
    layout: "bottom",
    titleEn: "ANICARI\nTACOPA",
    subtitle: "たこ焼きでつながる\n交流の場",
    description:
      "就活イベント特有の堅さをなくすため、AniCariが初めて取り入れた形式です。動物病院紹介・学生との個別面談のあと、たこ焼きを一緒に食べながらラフに交流。面談だけでは伝わりにくい病院の「人柄」や雰囲気を、自然な会話を通じて感じてもらえます。",
    image: "/anicari/S__84885572_0.jpg",
    imageAlt: "TACOPAでの交流の様子",
    buttonLabel: "公式LINEへ",
    buttonHref: SOCIAL_BY_ID.line.href,
    external: true,
  },
];

export const SERVICE_INTRO = {
  desktop:
    "AniCariは、動物看護学生と動物病院・\nペット業界企業をつなぐ、\nキャリア支援団体です。",
  mobile:
    "AniCariは、動物看護学生と動物病院・ペット業界企業をつなぐ、キャリア支援団体です。",
  note: "業界の人材不足と早期離職という課題に向き合う、新しい就活の場を提供しています。",
};
