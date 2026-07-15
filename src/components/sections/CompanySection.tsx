import { COMPANY_INFO } from "@/constants/company-info";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTransition } from "@/components/ui/SectionTransition";

function CompanyValue({ label, value }: { label: string; value: string }) {
  if (label === "Mail") {
    return (
      <a
        href={`mailto:${value}`}
        className="break-all text-foreground no-underline hover:text-brand"
      >
        {value}
      </a>
    );
  }

  if (label === "Tel") {
    return (
      <a
        href={`tel:${value.replace(/-/g, "")}`}
        className="text-foreground no-underline hover:text-brand"
      >
        {value}
      </a>
    );
  }

  return <span className="break-words">{value}</span>;
}

export function CompanySection() {
  return (
    <section id="company" className="bg-section">
      <div className="mx-auto max-w-[900px] px-5 py-14 sm:py-20 md:px-10 md:py-24">
        <ScrollReveal variant="fade-up">
          <SectionHeading en="COMPANY" ja="団体概要" className="mb-8 sm:mb-10 md:mb-14" />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="md:hidden">
            <dl className="divide-y divide-brand/15">
              {COMPANY_INFO.map((row) => (
                <div key={row.label} className="py-4 sm:py-5">
                  <dt className="text-xs font-bold tracking-[0.15em] text-brand uppercase sm:text-sm">
                    {row.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
                    <CompanyValue label={row.label} value={row.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <table className="company-info hidden w-full border-collapse text-left md:table">
            <tbody>
              {COMPANY_INFO.map((row) => (
                <tr key={row.label} className="border-b border-brand/15">
                  <th className="info-heading w-[28%] py-5 pr-4 align-top text-sm font-bold tracking-[0.15em] text-brand uppercase md:py-6">
                    {row.label}
                  </th>
                  <td className="py-5 text-[15px] leading-7 tracking-[1.8px] text-foreground md:py-6">
                    <CompanyValue label={row.label} value={row.value} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
      </div>

      <div className="bg-section leading-[0]">
        <SectionTransition to="background" className="-mb-px" />
      </div>
    </section>
  );
}
