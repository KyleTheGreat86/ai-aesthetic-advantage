
import React, { memo } from 'react';

// Define shapes outside component to prevent recreation on each render
const shapes = [
  { shape: 'circle', size: 'w-24 h-24 rounded-full', position: 'top-[10%] left-[5%]', delay: 'animation-delay-100' },
  { shape: 'square', size: 'w-32 h-32 rounded-lg rotate-45', position: 'top-[30%] right-[8%]', delay: 'animation-delay-300' },
  { shape: 'triangle', size: 'w-40 h-40', position: 'bottom-[15%] left-[15%]', delay: 'animation-delay-200' },
  { shape: 'rect', size: 'w-64 h-16 rounded-lg', position: 'top-[50%] left-[70%]', delay: 'animation-delay-400' },
  { shape: 'circle', size: 'w-16 h-16 rounded-full', position: 'bottom-[30%] right-[20%]', delay: 'animation-delay-500' },
];

const FloatingShapes = () => {
  return (
    <div className="floating-shapes will-change-opacity">
      {shapes.map((shape, index) => {
        const backgroundClass = index % 2 === 0 
          ? 'bg-eagle-blue/20 backdrop-blur-sm' 
          : 'bg-eagle-orange/20 backdrop-blur-sm';
        
        return (
          <div 
            key={`shape-${index}`}
            className={`floating-shape ${shape.size} ${shape.position} ${shape.delay} ${backgroundClass}`}
            style={{
              animationDuration: `${5 + index}s`,
              // Use hardware acceleration
              transform: 'translate3d(0,0,0)',
              willChange: 'transform'
            }}
          />
        );
      })}
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(FloatingShapes);
