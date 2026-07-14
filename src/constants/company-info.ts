import { COMPANY } from "@/constants/company";

export const COMPANY_INFO = [
  { label: "団体名", value: "AniCari.（個人事業）/ 学生団体 AniCari" },
  { label: "代表", value: COMPANY.representative },
  { label: "活動場所", value: COMPANY.location },
  {
    label: "メンバー",
    value: `AniCari. ${COMPANY.members.business}名 / 学生団体 AniCari ${COMPANY.members.student}名`,
  },
  { label: "事業内容", value: "キャリア支援事業（マッチングイベント）" },
  { label: "Mail", value: COMPANY.email },
  { label: "Tel", value: COMPANY.phone },
] as const;
