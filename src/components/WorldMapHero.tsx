
import { motion } from "framer-motion";
import { WorldMap } from "./ui/world-map";
import { Globe, ArrowRight } from "lucide-react";
import { useState } from "react";

const WorldMapHero = () => {
  const [isShaking, setIsShaking] = useState(true);
  
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

  // Restart shaking animation every 5 seconds
  const restartShaking = () => {
    setIsShaking(false);
    setTimeout(() => setIsShaking(true), 100);
  };

  // Start the animation loop
  useState(() => {
    const interval = setInterval(restartShaking, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    // Scroll to how it works section (can be replaced with video trigger)
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-16 w-full overflow-hidden">
      {/* Background map with connections */}
      <div className="absolute inset-0 z-0 opacity-80">
        <WorldMap
          dots={mapConnections}
          lineColor="#1A9BD7" // eagle-blue
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Globe size={48} className="mx-auto text-eagle-blue mb-4" />
        </motion.div>
        
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
        
        <motion.p 
          className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The #1 Review Management Platform Helping Local Businesses Worldwide Rank Higher & Convert More Customers
        </motion.p>
        
        {/* Call to action button with shaking animation */}
        <motion.button
          onClick={handleButtonClick}
          className="eagle-btn-primary mt-6 group relative flex items-center justify-center px-8 py-4 text-lg font-bold shadow-lg"
          animate={isShaking ? {
            x: [0, -5, 5, -5, 5, 0],
            transition: { duration: 0.5 }
          } : {}}
        >
          <span>See How Google Reviews Transform Your Business</span>
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          <div className="absolute -top-2 -right-2 bg-eagle-orange text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            CLICK HERE
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default WorldMapHero;
