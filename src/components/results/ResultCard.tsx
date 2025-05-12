
import { memo } from "react";
import { TrendingUp } from "lucide-react";
import { ResultItem } from "./resultsData";
import FiveStars from "./FiveStars";

interface ResultCardProps {
  item: ResultItem;
  index: number;
  isVisible: boolean;
  animateNumbers: boolean;
}

const ResultCard = memo(({ item, index, isVisible, animateNumbers }: ResultCardProps) => (
  <div 
    className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
    style={{ transitionDelay: `${Math.min(index * 50, 500)}ms` }}
  >
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-gray-400 text-sm">{item.businessType}, {item.location}</p>
      </div>
      <div className="bg-eagle-blue/20 rounded-full px-3 py-1 flex items-center">
        <TrendingUp size={14} className="text-eagle-blue mr-1" />
        <span className="text-eagle-blue font-bold">+{item.percentage}%</span>
      </div>
    </div>
    
    <div className="flex items-baseline gap-1 mb-2">
      <span className="text-gray-400">{item.reviews.before} →</span>
      <span className="text-2xl font-bold text-white">
        {animateNumbers ? item.reviews.after : item.reviews.before}
      </span>
      <span className="text-xs ml-1 text-gray-400">hours saved</span>
    </div>
    
    <p className="text-gray-300 text-sm">
      Time saved in <span className="text-eagle-blue font-medium">{item.timeframe}</span>
    </p>
  </div>
));

ResultCard.displayName = "ResultCard";

export default ResultCard;
