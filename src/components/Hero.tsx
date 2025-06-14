
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

  // Words for typewriter effect - updated for medical billing
  const words = [
    { text: "No", className: "text-white" },
    { text: "Software", className: "text-white" },
    { text: "Changes", className: "text-white" },
    { text: "or", className: "text-white" },
    { text: "New", className: "text-white" },
    { text: "Training", className: "text-white" },
    { text: "Needed", className: "text-white" },
    { text: "—", className: "text-white" },
    { text: "Medical", className: "text-eagle-blue" },
    { text: "Billing", className: "text-eagle-blue" },
    { text: "Companies", className: "text-white" },
    { text: "Save", className: "text-eagle-orange" },
    { text: "$5,000+", className: "text-eagle-orange" },
    { text: "Per", className: "text-white" },
    { text: "Month", className: "text-white" },
    { text: "While", className: "text-white" },
    { text: "Cutting", className: "text-white" },
    { text: "CMS-1500", className: "text-eagle-blue" },
    { text: "Time", className: "text-white" },
    { text: "from", className: "text-white" },
    { text: "8", className: "text-eagle-orange" },
    { text: "Minutes", className: "text-white" },
    { text: "to", className: "text-white" },
    { text: "90", className: "text-eagle-orange" },
    { text: "Seconds", className: "text-white" }
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
          Stop losing <span className="text-eagle-orange font-semibold">$3.50 per claim</span> on manual data entry. Our AI processes CMS-1500s into your existing PM system for <span className="text-eagle-blue font-semibold">$0.50/claim</span>—with zero setup and same-day onboarding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm md:text-base">
          <div className="text-eagle-orange font-semibold">• $5,000+ Monthly Savings – Slash labor costs by 85% immediately</div>
          <div className="text-eagle-blue font-semibold">• 90-Second Claims – Process 100+/hour vs. 4-7 manually</div>
          <div className="text-white">• Works in Your Current Software – Medisoft, AdvancedMD, NextGen, etc.</div>
          <div className="text-eagle-orange font-semibold">• Fewer Denials – 99.9% accuracy eliminates $25 rework costs</div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-eagle-orange/30">
          <p className="text-lg font-bold text-eagle-orange">"Processing 3,000 claims/month? You're spending $10,500. We'll do it for $1,500."</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-16">
          <RainbowButton 
            calendlyLink="https://calendly.com/weareagencyeagleeye/30min" 
            className="uppercase font-bold text-base w-auto px-6 group"
          >
            <span className="whitespace-nowrap">Start FREE 100-Claim Trial</span>
            <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1 flex-shrink-0" />
          </RainbowButton>
          
          <RainbowButton className="uppercase font-bold text-base w-auto px-6">
            <a href="#how-it-works" className="w-full h-full flex items-center justify-center">
              <span className="whitespace-nowrap">See Exact Savings for My Company</span>
            </a>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
