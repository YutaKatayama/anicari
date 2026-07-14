import { COMPANY_INFO } from "@/constants/company-info";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CompanySection() {
  return (
    <section id="company" className="bg-section px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal variant="fade-up">
          <div className="company-top mb-10 text-center md:mb-14">
            <h2 className="company-top__title text-[58px] leading-[48px] font-bold tracking-[7px] text-brand">
              COMPANY
            </h2>
            <p className="company-top__note mt-2 text-xs font-bold tracking-[1.44px] text-brand">
              団体概要
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <table className="company-info w-full border-collapse text-left">
          <tbody>
            {COMPANY_INFO.map((row) => (
              <tr key={row.label} className="border-b border-brand/15">
                <th className="info-heading w-[30%] py-5 pr-4 align-top text-sm font-bold tracking-[0.15em] text-brand uppercase md:w-[28%] md:py-6">
                  {row.label}
                </th>
                <td className="py-5 text-[15px] leading-7 tracking-[1.8px] text-foreground md:py-6">
                  {row.label === "Mail" ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="text-foreground no-underline hover:text-brand"
                    >
                      {row.value}
                    </a>
                  ) : row.label === "Tel" ? (
                    <a
                      href={`tel:${row.value.replace(/-/g, "")}`}
                      className="text-foreground no-underline hover:text-brand"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </ScrollReveal>
      </div>
    </section>
  );
}
