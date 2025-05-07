
import { motion, AnimatePresence } from "framer-motion";
import { WorldMap } from "./ui/world-map";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

const WorldMapHero = () => {
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

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  const conversionTypes = [
    "Customers",
    "Appointments",
    "Leads", 
    "Sales",
    "Phone Calls",
    "Local Traffic",
    "Repeat Business",
    "Local Domination",
    "Area Domination"
  ];
  
  const typewriterText = "The Numbers That Matter";
  
  // Typewriter effect
  useEffect(() => {
    if (!isTyping) {
      setIsTyping(true);
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < typewriterText.length) {
          setTypedText(prev => prev + typewriterText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, []);
  
  // Word rotation effect
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % conversionTypes.length);
    }, 1000);
    
    return () => clearInterval(wordInterval);
  }, []);

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
        
        <motion.div 
          className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="flex flex-wrap justify-center">
            <span>The #1 Review Management Platform Helping Local Businesses Worldwide Rank Higher & Convert More </span>
            <span className="relative inline-block min-w-[160px] text-eagle-orange font-semibold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="absolute left-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {conversionTypes[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
          
          <div className="mt-4">
            <span className="font-semibold text-eagle-blue">Google Reviews: </span>
            <span className="font-medium inline-block overflow-hidden border-r-2 border-eagle-orange pr-1 animate-pulse">
              {typedText}
            </span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-block bg-eagle-blue/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-eagle-blue/50">
            <p className="text-xl font-semibold text-white">Serving clients from London to Sydney</p>
            <p className="text-lg font-medium text-eagle-orange">Trusted by local businesses worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorldMapHero;
