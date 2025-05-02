
import React from 'react';

const FloatingShapes = () => {
  // Different geometric shapes for the floating background elements
  const shapes = [
    { shape: 'circle', size: 'w-24 h-24 rounded-full', position: 'top-[10%] left-[5%]', delay: 'animation-delay-100' },
    { shape: 'square', size: 'w-32 h-32 rounded-lg rotate-45', position: 'top-[30%] right-[8%]', delay: 'animation-delay-300' },
    { shape: 'triangle', size: 'w-40 h-40', position: 'bottom-[15%] left-[15%]', delay: 'animation-delay-200' },
    { shape: 'rect', size: 'w-64 h-16 rounded-lg', position: 'top-[50%] left-[70%]', delay: 'animation-delay-400' },
    { shape: 'circle', size: 'w-16 h-16 rounded-full', position: 'bottom-[30%] right-[20%]', delay: 'animation-delay-500' },
  ];

  return (
    <div className="floating-shapes">
      {shapes.map((shape, index) => {
        let backgroundClass;
        
        if (index % 2 === 0) {
          backgroundClass = 'bg-eagle-blue/10';
        } else {
          backgroundClass = 'bg-eagle-orange/10';
        }
        
        return (
          <div 
            key={`shape-${index}`}
            className={`floating-shape ${shape.size} ${shape.position} ${shape.delay} ${backgroundClass}`}
            style={{animationDuration: `${5 + index}s`}}
          />
        );
      })}
    </div>
  );
};

export default FloatingShapes;
