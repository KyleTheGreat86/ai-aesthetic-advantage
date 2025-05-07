
import { memo } from "react";
import { LucideIcon } from "lucide-react";
import BenefitItem from "./BenefitItem";

interface BenefitsSectionProps {
  benefits: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
    delay: number;
  }>;
  isVisible: boolean;
}

const BenefitsSection = memo(({ benefits, isVisible }: BenefitsSectionProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="gradient-text-blue">Eagle Eye</span> Benefits
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            delay={benefit.delay}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </div>
  );
});

export default BenefitsSection;
