import Image from "next/image";
import { COLORS } from "@/constants/colors";
import type { FeatureItem } from "@/constants/features";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function FeatureDescription({
  description,
  highlight,
}: {
  description: string;
  highlight?: string;
}) {
  if (!highlight || !description.includes(highlight)) {
    return <p>{description}</p>;
  }

  const [before, after] = description.split(highlight);
  return (
    <p>
      {before}
      <span className="font-bold">{highlight}</span>
      {after}
    </p>
  );
}

export function FeatureBlock({ feature }: { feature: FeatureItem }) {
  const isRight = feature.align === "right";
  const isLightBg = feature.bgColor === COLORS.brandLight;
  const textClass = isLightBg ? "text-foreground" : "text-on-brand";

  const content = (
    <ScrollReveal
      variant={isRight ? "fade-left" : "fade-right"}
      delay={120}
      className={`__box-content w-full min-w-0 md:w-1/2 lg:w-auto lg:max-w-[390px] ${textClass}`}
    >
      <div className="__box-content__title text-xs leading-7 font-bold tracking-[1.4px] sm:text-sm sm:leading-[30px] sm:tracking-[1.7px]">
        <span className="font-sans">{feature.label} / </span>
        {feature.labelJa}
      </div>
      <h3 className="__box-content__heading mt-1 text-xl leading-7 font-bold tracking-[2px] sm:text-2xl sm:leading-8 sm:tracking-[2.9px]">
        {feature.title}
      </h3>
      <div className="__box-content__detail mt-2.5 text-sm leading-6 tracking-[1.5px] sm:text-[15px] sm:tracking-[1.8px]">
        <FeatureDescription
          description={feature.description}
          highlight={feature.highlight}
        />
      </div>
    </ScrollReveal>
  );

  const image = (
    <ScrollReveal
      variant={isRight ? "fade-right" : "fade-left"}
      className={`__box__image w-full min-w-0 md:w-1/2 lg:w-auto lg:max-w-[660px] lg:shrink-0 ${
        isRight ? "lg:ml-[4.375rem]" : "lg:mr-[4.375rem]"
      }`}
    >
      <Image
        src={feature.image}
        alt={feature.imageAlt}
        width={660}
        height={440}
        className={`h-auto max-h-[240px] w-full object-cover sm:max-h-[320px] md:max-h-[440px] md:max-w-[660px] ${
          isRight
            ? "rounded-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none md:rounded-br-none"
            : "rounded-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-tl-none md:rounded-bl-none"
        } xl:rounded-lg`}
      />
    </ScrollReveal>
  );

  return (
    <div
      className="feature-block py-10 sm:py-15"
      style={{ backgroundColor: feature.bgColor }}
    >
      <div
        className={`__box mx-auto flex max-w-[1280px] min-w-0 flex-col items-stretch gap-6 px-5 sm:gap-8 md:flex-row md:items-center md:gap-8 lg:gap-12 ${
          isRight ? "md:flex-row-reverse" : ""
        }`}
      >
        {!isRight && image}
        {content}
        {isRight && image}
      </div>
    </div>
  );
}
