
import React, { useState, useEffect, useRef } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { ChevronRight, Play, Pause } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useDeviceType } from "../hooks/use-mobile";
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";
import { CSSProperties } from "react";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const deviceType = useDeviceType();

  // Words for typewriter effect - updated with full headline
  const words = [
    { text: "We", className: "text-white" },
    { text: "Help", className: "text-white" },
    { text: "U.S.", className: "text-white" },
    { text: "CRE", className: "text-white" },
    { text: "Brokers", className: "text-white" },
    { text: "Close", className: "text-white" },
    { text: "More", className: "text-white" },
    { text: "$3M–$20M", className: "text-eagle-orange" },
    { text: "Off-Market", className: "text-white" },
    { text: "&", className: "text-white" },
    { text: "NNN", className: "text-eagle-blue" },
    { text: "Deals", className: "text-white" },
    { text: "Using", className: "text-white" },
    { text: "Next-Gen", className: "text-eagle-orange" },
    { text: "AI", className: "text-eagle-blue" },
    { text: "—", className: "text-white" },
    { text: "No", className: "text-white" },
    { text: "Extra", className: "text-white" },
    { text: "Staff,", className: "text-white" },
    { text: "No", className: "text-white" },
    { text: "Lead", className: "text-white" },
    { text: "Leakage,", className: "text-white" },
    { text: "No", className: "text-white" },
    { text: "Busywork", className: "text-white" }
  ];

  // Determine optimal video sizing based on device type
  const getVideoStyle = (): CSSProperties => {
    // Base styles that work across all devices
    const baseStyle: CSSProperties = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      objectFit: 'cover' as 'cover',
    };

    // Device-specific adjustments
    if (deviceType === 'mobile') {
      return baseStyle;
    } else if (deviceType === 'tablet') {
      return baseStyle;
    } else {
      // Desktop - maintain aspect ratio but ensure full coverage
      return {
        ...baseStyle,
        minWidth: '100%',
        minHeight: '100%',
      };
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className={`absolute inset-0 bg-black z-10 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <iframe 
            ref={videoRef}
            src="https://www.youtube.com/embed/MOL2f76XY-k?autoplay=1&mute=1&controls=0&loop=1&playlist=MOL2f76XY-k&modestbranding=1&showinfo=0&rel=0" 
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setIsVideoLoaded(true)}
            style={getVideoStyle()}
          ></iframe>
        </div>
        
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Overlay content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 py-8">
        <div className="mb-6">
          <TypewriterEffect words={words} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" />
        </div>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white">
          Our Eagle Eye AI Autopilot eliminates <span className="text-eagle-orange font-semibold">90% of manual work</span>—scouring markets, analyzing deals, nurturing clients, and scheduling tours—so you close more <span className="text-eagle-blue font-semibold">$5M+ off-market deals</span> while competitors chase cold leads.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-16">
          <RainbowButton 
            calendlyLink="https://calendly.com/weareagencyeagleeye/30min" 
            className="uppercase font-bold text-base w-auto px-6 group"
          >
            <span className="whitespace-nowrap">Schedule Your Strategy Session</span>
            <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1 flex-shrink-0" />
          </RainbowButton>
          
          <RainbowButton className="uppercase font-bold text-base w-auto px-6">
            <a href="#how-it-works" className="w-full h-full flex items-center justify-center">
              <span className="whitespace-nowrap">See How It Works</span>
            </a>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
