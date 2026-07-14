import { COLORS } from "@/constants/colors";

export type FeatureItem = {
  id: string;
  label: string;
  labelJa: string;
  title: string;
  description: string;
  highlight?: string;
  image: string;
  imageAlt: string;
  bgColor: string;
  align: "left" | "right";
};

export const FEATURES: FeatureItem[] = [
  {
    id: "students",
    label: "STUDENTS",
    labelJa: "学生との出会い",
    title: "志の高い学生との出会い",
    description:
      "自ら動いて参加する、業界への熱量が高い学生が集まります。単なる説明会ではなく、本気で動物医療の現場を知りたい学生だけが集う場です。",
    highlight: "業界への熱量が高い学生",
    image: "/anicari/S__84885555_0.jpg",
    imageAlt: "ワークショップに参加する学生たち",
    bgColor: COLORS.brand,
    align: "left",
  },
  {
    id: "dialogue",
    label: "DIALOGUE",
    labelJa: "想いを伝える",
    title: "想いを直接伝えられる場",
    description:
      "HPや実習では伝わりにくい「病院の文化・価値観」を、対話を通してじっくり届けられます。病院の「らしさ」を、言葉と表情で伝える機会です。",
    highlight: "病院の文化・価値観",
    image: "/anicari/S__84885560_0.jpg",
    imageAlt: "面談・対話の場",
    bgColor: COLORS.brandDark,
    align: "right",
  },
  {
    id: "value",
    label: "VALUE",
    labelJa: "コストパフォーマンス",
    title: "コストパフォーマンスの高さ",
    description:
      "大手合同説明会と比べ、低コストで質の高い学生接点を実現。限られた採用予算の中でも、本気の出会いを重視したい病院様に最適です。",
    highlight: "低コストで質の高い学生接点",
    image: "/anicari/S__84885558_0.jpg",
    imageAlt: "打ち合わせ・議論の様子",
    bgColor: COLORS.button,
    align: "left",
  },
  {
    id: "trust",
    label: "TRUST",
    labelJa: "早期関係構築",
    title: "早期関係構築",
    description:
      "就活本格化前から信頼関係を積み上げられます。イベント参加を通じて、学生との距離を縮め、将来の採用につながる土台を作れます。",
    highlight: "就活本格化前から信頼関係",
    image: "/anicari/S__84885567_0.jpg",
    imageAlt: "動物病院での現場見学",
    bgColor: COLORS.brandLight,
    align: "right",
  },
  {
    id: "network",
    label: "NETWORK",
    labelJa: "口コミ広報",
    title: "口コミによる採用広報の波及",
    description:
      "参加学生のネットワークを通じて、病院の認知が継続的に広がります。一度の出会いが、次の出会いを呼び込む好循環を生み出します。",
    highlight: "病院の認知が継続的に広がる",
    image: "/anicari/Anicari.2.jpg",
    imageAlt: "AniCariチームの連携",
    bgColor: COLORS.brandDark,
    align: "left",
  },
];
