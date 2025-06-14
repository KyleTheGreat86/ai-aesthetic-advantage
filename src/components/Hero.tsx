
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
    { text: "Needed", className: "text-white" }
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
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
      <div className="relative z-20 max-w-6xl mx-auto text-center px-4 py-8 sm:py-12">
        <div className="mb-6">
          <TypewriterEffect words={words} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Medical Billing Companies Save <span className="text-eagle-orange">$5,000+</span> Per Month
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-4">
            While Cutting CMS-1500 Time from <span className="text-eagle-blue">8 Minutes</span> to <span className="text-eagle-orange">90 Seconds</span>
          </p>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
          Stop losing <span className="text-eagle-orange font-semibold">$3.50 per claim</span> on manual data entry. Our AI processes CMS-1500s into your existing PM system for <span className="text-eagle-blue font-semibold">$0.50/claim</span>—with zero setup and same-day onboarding.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm md:text-base max-w-4xl mx-auto">
          <div className="bg-eagle-orange/20 p-4 rounded-lg border border-eagle-orange/30">
            <div className="text-eagle-orange font-semibold">• $5,000+ Monthly Savings</div>
            <div className="text-white/80">Slash labor costs by 85% immediately</div>
          </div>
          <div className="bg-eagle-blue/20 p-4 rounded-lg border border-eagle-blue/30">
            <div className="text-eagle-blue font-semibold">• 90-Second Claims</div>
            <div className="text-white/80">Process 100+/hour vs. 4-7 manually</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg border border-white/20">
            <div className="text-white font-semibold">• Works in Your Current Software</div>
            <div className="text-white/80">Medisoft, AdvancedMD, NextGen, etc.</div>
          </div>
          <div className="bg-eagle-orange/20 p-4 rounded-lg border border-eagle-orange/30">
            <div className="text-eagle-orange font-semibold">• Fewer Denials</div>
            <div className="text-white/80">99.9% accuracy eliminates $25 rework costs</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-eagle-orange/20 to-eagle-blue/20 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl mx-auto border border-eagle-orange/30">
          <p className="text-lg md:text-xl font-bold text-white">
            "Processing 3,000 claims/month? You're spending <span className="text-eagle-orange">$10,500</span>. We'll do it for <span className="text-eagle-blue">$1,500</span>."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <RainbowButton 
            calendlyLink="https://calendly.com/weareagencyeagleeye/30min" 
            className="uppercase font-bold text-sm md:text-base px-6 py-3 group min-w-[250px]"
          >
            <span className="whitespace-nowrap">Start FREE 100-Claim Trial</span>
            <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1 flex-shrink-0" />
          </RainbowButton>
          
          <RainbowButton className="uppercase font-bold text-sm md:text-base px-6 py-3 min-w-[250px]">
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
