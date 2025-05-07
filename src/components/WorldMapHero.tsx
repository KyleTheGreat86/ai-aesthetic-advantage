
import { motion } from "framer-motion";
import { WorldMap } from "./ui/world-map";
import { Globe } from "lucide-react";

const WorldMapHero = () => {
  return (
    <div className="relative py-16 w-full overflow-hidden">
      {/* Background map with connections */}
      <div className="absolute inset-0 z-0 opacity-80">
        <WorldMap
          dots={[
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
          ]}
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
          <span className="gradient-text-blue">Global Visibility</span>
          <br />
          <span className="gradient-text-orange">Leads to Local Growth</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Connect with customers worldwide and turn positive reviews into powerful business growth
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-block bg-eagle-blue/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-eagle-blue/50">
            <p className="text-xl font-semibold text-white">Serving clients from London to Sydney</p>
            <p className="text-lg font-medium text-eagle-orange">Trusted by aesthetic clinics worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorldMapHero;
