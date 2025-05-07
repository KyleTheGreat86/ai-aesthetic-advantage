
import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface BenefitItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
  isVisible: boolean;
  index: number;
}

const BenefitItem = memo(({ title, description, icon: Icon, delay, isVisible, index }: BenefitItemProps) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 relative transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay + 200}ms` }}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-eagle-blue to-eagle-orange opacity-10 rounded-full -translate-y-1/4 translate-x-1/4"></div>
      
      <Icon size={32} className={`mb-4 ${index === 0 ? 'text-eagle-blue' : index === 1 ? 'text-eagle-orange' : 'text-eagle-blue'}`} />
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-300">{description}</p>
    </div>
  );
});

export default BenefitItem;
