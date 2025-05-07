
import { memo } from "react";
import { X } from "lucide-react";

interface ProblemItemProps {
  number: number;
  problem: string;
  detail: string;
  delay: number;
  isVisible: boolean;
}

const ProblemItem = memo(({ number, problem, detail, delay, isVisible }: ProblemItemProps) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-5 flex items-center gap-4 transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
          <X size={24} className="text-red-500" />
        </div>
      </div>
      <div className="flex-grow text-left">
        <h3 className="text-xl font-medium">{problem}</h3>
        <p className="text-gray-400">{detail}</p>
      </div>
    </div>
  );
});

export default ProblemItem;
