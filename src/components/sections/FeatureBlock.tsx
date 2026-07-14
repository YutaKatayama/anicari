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
      className={`__box-content max-w-[390px] ${textClass}`}
    >
      <div className="__box-content__title text-sm leading-[30px] font-bold tracking-[1.7px]">
        <span className="font-sans">{feature.label} / </span>
        {feature.labelJa}
      </div>
      <h3 className="__box-content__heading mt-1 text-2xl leading-8 font-bold tracking-[2.9px]">
        {feature.title}
      </h3>
      <div className="__box-content__detail mt-2.5 text-[15px] leading-6 tracking-[1.8px]">
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
      className={`__box__image shrink-0 ${
        isRight
          ? "__box__image--right ml-0 md:ml-[4.375rem]"
          : "mr-0 md:mr-[4.375rem]"
      }`}
    >
      <Image
        src={feature.image}
        alt={feature.imageAlt}
        width={660}
        height={440}
        className={`h-auto max-h-[440px] w-full max-w-[660px] object-cover ${
          isRight
            ? "rounded-tl-lg rounded-bl-lg md:rounded-tr-none md:rounded-br-none"
            : "rounded-tr-lg rounded-br-lg"
        } xl:rounded-lg`}
      />
    </ScrollReveal>
  );

  return (
    <div
      className="feature-block py-15 md:py-15"
      style={{ backgroundColor: feature.bgColor }}
    >
      <div
        className={`__box mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-5 md:flex-row md:items-center ${
          isRight ? "__box--right justify-end" : ""
        }`}
      >
        {!isRight && image}
        {content}
        {isRight && image}
      </div>
    </div>
  );
}
