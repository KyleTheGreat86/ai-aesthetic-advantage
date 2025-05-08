
import { motion } from "framer-motion";
import { WorldMap } from "./ui/world-map";
import { Globe } from "lucide-react";
import { useState, useEffect, memo } from "react";
import { useDeviceType } from "../hooks/use-mobile";
import { InteractiveBlocks } from "./ui/interactive-blocks";

const mapConnections = [
  {
    start: { lat: 64.2008, lng: -149.4937 }, // Alaska
    end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  },
  {
    start: { lat: 64.2008, lng: -149.4937 }, // Alaska
    end: { lat: -15.7975, lng: -47.8919 }, // Brazil
  },
  {
    start: { lat: -15.7975, lng: -47.8919 }, // Brazil
    end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
  },
  {
    start: { lat: 51.5074, lng: -0.1278 }, // London
    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
  },
];

const WorldMapHero = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const deviceType = useDeviceType();
  
  // Performance optimized animation - reduced animations
  useEffect(() => {
    // Only start animations when component is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('mapSection') || document.body);
    
    // Animation is now disabled by default to improve performance
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="mapSection" className="relative py-16 w-full overflow-hidden">
      {/* Background map with connections - only render if visible */}
      {isVisible && (
        <div className="absolute inset-0 z-0 opacity-80">
          <WorldMap
            dots={mapConnections}
            lineColor="#1A9BD7" // eagle-blue
          />
        </div>
      )}
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="inline-block mb-6 rounded-full p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Globe size={48} className="text-eagle-blue" strokeWidth={1.5} />
          </motion.div>
        </div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text-blue">Dominate Local Search</span>
          <br />
          <span className="gradient-text-orange">With 5-Star Google Reviews</span>
        </motion.h1>
        
        <div className="inline-block p-2 rounded-lg max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10">
          <motion.p 
            className="text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The #1 Review Management Platform Helping Local Businesses Worldwide Rank Higher & Convert More Customers
          </motion.p>
        </div>

        {/* Add the interactive blocks */}
        <motion.div
          className="w-full mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <InteractiveBlocks />
        </motion.div>
      </div>
    </div>
  );
};

export default memo(WorldMapHero);
