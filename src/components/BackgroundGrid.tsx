
import { useEffect, useRef, useState } from "react";
import { FlickeringGrid } from "./ui/flickering-grid";

const BackgroundGrid = () => {
  const [scrollY, setScrollY] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={gridRef} 
      className="fixed inset-0 w-full h-screen pointer-events-none z-0"
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
        transition: 'transform 0.05s ease-out'
      }}
    >
      <FlickeringGrid
        className="w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#1A9BD7" // Using eagle-blue color
        maxOpacity={0.15}
        flickerChance={0.1}
      />
      <div className="absolute inset-0 bg-eagle-dark/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default BackgroundGrid;
