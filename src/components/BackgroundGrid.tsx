
import { useRef, memo } from "react";
import { FlickeringGrid } from "./ui/flickering-grid";

const BackgroundGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={gridRef} 
      className="fixed inset-0 w-full h-screen pointer-events-none z-0"
      style={{
        transform: `translateZ(0)`, // Hardware acceleration
        willChange: 'transform',
      }}
    >
      <FlickeringGrid
        className="w-full h-full"
        squareSize={6} // Increased size for better performance
        gridGap={8} // Increased gap for better performance
        color="#1A9BD7" // Using eagle-blue color
        maxOpacity={0.12}
        flickerChance={0.05} // Reduced flicker chance for better performance
      />
      <div className="absolute inset-0 bg-eagle-dark/40 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default memo(BackgroundGrid);
