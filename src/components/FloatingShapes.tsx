
import React, { memo, useMemo } from 'react';

const FloatingShapes = () => {
  // Use useMemo to avoid recreating the shapes array on re-renders
  const shapesElements = useMemo(() => {
    // Reduced number of shapes and simplified animation
    const shapes = [
      { shape: 'circle', size: 'w-24 h-24 rounded-full', position: 'top-[10%] left-[5%]', animation: 'animate-float-slow' },
      { shape: 'square', size: 'w-32 h-32 rounded-lg rotate-45', position: 'top-[30%] right-[8%]', animation: 'animate-float-slower' },
      { shape: 'triangle', size: 'w-40 h-40', position: 'bottom-[15%] left-[15%]', animation: 'animate-float-slow' },
    ];
    
    return shapes.map((shape, index) => {
      const backgroundClass = index % 2 === 0 
        ? 'bg-eagle-blue/15 backdrop-blur-sm' 
        : 'bg-eagle-orange/15 backdrop-blur-sm';
      
      return (
        <div 
          key={`shape-${index}`}
          className={`absolute ${shape.size} ${shape.position} ${backgroundClass} ${shape.animation}`}
          style={{
            transform: 'translate3d(0,0,0)', // Hardware acceleration
            willChange: 'transform',
            animationDuration: `${5 + index}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate'
          }}
        />
      );
    });
  }, []);

  return (
    <div className="floating-shapes fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapesElements}
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(FloatingShapes);
