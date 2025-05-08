
import { Gravity, MatterBody } from "./gravity";
import { Shield, Zap, TrendingUp, Rocket, HandCoins, User } from "lucide-react";

type BlockProps = {
  text: string;
  icon: React.ReactNode;
  color: string;
  x: string;
  y: string;
  angle?: number;
}

const BlockContent = ({ text, icon, color }: { text: string, icon: React.ReactNode, color: string }) => {
  return (
    <div className={`${color} text-white rounded-lg shadow-lg px-6 py-4 flex items-center gap-3 hover:cursor-grab transition-all hover:shadow-xl min-w-[180px] backdrop-blur-sm border border-white/10`}>
      {icon}
      <span className="font-semibold text-lg whitespace-nowrap">{text}</span>
    </div>
  );
};

export const InteractiveBlocks = () => {
  const blocks: BlockProps[] = [
    { 
      text: "Personalized", 
      icon: <User size={24} strokeWidth={1.5} />, 
      color: "bg-eagle-blue", 
      x: "30%", 
      y: "10%" 
    },
    { 
      text: "Risk Free", 
      icon: <Shield size={24} strokeWidth={1.5} />, 
      color: "bg-eagle-orange", 
      x: "70%", 
      y: "15%",
      angle: 5 
    },
    { 
      text: "Automated", 
      icon: <Zap size={24} strokeWidth={1.5} />, 
      color: "bg-eagle-blue", 
      x: "25%", 
      y: "35%" 
    },
    { 
      text: "Growth", 
      icon: <TrendingUp size={24} strokeWidth={1.5} />, 
      color: "bg-eagle-orange", 
      x: "65%", 
      y: "25%" 
    },
    { 
      text: "Domination", 
      icon: <Rocket size={24} strokeWidth={1.5} />, 
      color: "bg-eagle-blue/90", 
      x: "45%", 
      y: "20%",
      angle: -5 
    },
    { 
      text: "Leads", 
      icon: <HandCoins size={24} strokeWidth={1.5} />, 
      color: "bg-eagle-orange/90", 
      x: "15%", 
      y: "20%" 
    },
    { 
      text: "Sales", 
      icon: <TrendingUp size={24} strokeWidth={1.5} />, 
      color: "bg-eagle-blue", 
      x: "85%", 
      y: "30%",
      angle: 3
    },
  ];

  return (
    <div className="w-full h-[350px] md:h-[400px] relative">
      <Gravity 
        gravity={{ x: 0, y: 0.5 }} 
        className="w-full h-full"
        resetOnResize={true}
        grabCursor={true}
      >
        {blocks.map((block, index) => (
          <MatterBody
            key={index}
            matterBodyOptions={{ friction: 0.2, restitution: 0.3 }}
            x={block.x}
            y={block.y}
            angle={block.angle || 0}
            isDraggable={true}
          >
            <BlockContent text={block.text} icon={block.icon} color={block.color} />
          </MatterBody>
        ))}
      </Gravity>
    </div>
  );
};
