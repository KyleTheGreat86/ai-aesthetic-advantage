
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
  suffix?: string;
}

export default function AnimatedTextCycle({
  words,
  interval = 5000,
  className = "",
  suffix = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Responsive width adjustment
  useEffect(() => {
    const handleResize = () => {
      if (measureRef.current) {
        const elements = measureRef.current.children;
        if (elements.length > currentIndex) {
          // Add a bit more buffer to prevent text wrapping
          const newWidth = elements[currentIndex].getBoundingClientRect().width + 5;
          setWidth(`${newWidth}px`);
        }
      }
    };

    // Initial measurement
    handleResize();
    
    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Word cycling logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  // Container animation for the whole word
  const containerVariants = {
    hidden: { 
      y: -10,
      opacity: 0,
      filter: "blur(8px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      y: 10,
      opacity: 0,
      filter: "blur(8px)",
      transition: { 
        duration: 0.3, 
        ease: "easeIn"
      }
    },
  };

  return (
    <>
      {/* Hidden measurement div with all words rendered */}
      <div 
        ref={measureRef} 
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={`font-bold ${className}`}>
            {word}{suffix}
          </span>
        ))}
      </div>

      {/* Visible animated word */}
      <motion.span 
        ref={containerRef}
        className="relative inline-block align-bottom"
        animate={{ 
          width,
          transition: { 
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 1,
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap", display: "inline-block" }}
          >
            {words[currentIndex]}{suffix}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}
