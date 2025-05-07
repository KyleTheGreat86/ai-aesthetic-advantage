
import { Star } from "lucide-react";
import { memo } from "react";

const FiveStars = memo(() => (
  <div className="flex ml-2">
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
  </div>
));

FiveStars.displayName = "FiveStars";

export default FiveStars;
