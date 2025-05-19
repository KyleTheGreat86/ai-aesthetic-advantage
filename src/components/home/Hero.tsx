
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-eagle-dark/40 via-transparent to-white pointer-events-none"></div>
      
      {/* Background image - placeholder skyline */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eagle-dark mb-4">
              Add <span className="text-eagle-gold">$1M+</span> in CRE Commissions with Zero Busywork
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-eagle-dark/80">
              The Eagle Eye Profit Maximizer automates your Florida CRE brokerage—leads, deals, tours, and clients—all from your phone.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 rounded-md uppercase font-semibold text-lg px-8 py-6"
              >
                <a 
                  href="https://calendly.com/agencyeagleeye/profit-blueprint" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Claim Your Free Profit Blueprint 
                  <span className="ml-2 bg-red-500 text-white text-xs px-1 py-0.5 rounded">2 Spots Left</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Video wrapper with 16:9 aspect ratio */}
            <div className="relative w-full pt-[56.25%] bg-eagle-dark rounded-lg shadow-2xl overflow-hidden">
              {/* Loading placeholder */}
              <div className={`absolute inset-0 flex items-center justify-center bg-eagle-dark transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                <div className="text-white text-center p-4">
                  <svg className="animate-spin h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p>Loading 2-min demo of Telegram commands and AI in action...</p>
                </div>
              </div>
              
              {/* Placeholder iframe - replace with actual YouTube embed when available */}
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="2-min demo of Telegram commands and AI in action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsVideoLoaded(true)}
              ></iframe>
            </div>
            
            {/* Video caption */}
            <p className="mt-2 text-center text-sm text-eagle-dark/70">
              See how the AI automates your entire workflow in 2 minutes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
