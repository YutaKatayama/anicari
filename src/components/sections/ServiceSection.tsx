import { SERVICES } from "@/constants/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceSection() {
  return (
    <section id="service" className="relative overflow-x-hidden bg-background pb-10 pt-14 sm:pt-20">
      <div className="heading__box relative" id="inService">
        <ScrollReveal variant="fade-up">
          <div className="heading__box-title section-title-en text-center">
            SERVICE
          </div>
          <div className="heading__box-subtitle mt-1.5 mb-6 text-center text-xs leading-4 font-bold tracking-[1.44px] text-brand sm:mb-7.5">
            サービス紹介
          </div>
        </ScrollReveal>

        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
