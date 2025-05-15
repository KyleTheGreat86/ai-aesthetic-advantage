
import React, { useState, useEffect, useRef } from "react";
import { EagleButton, EagleSecondaryButton } from "./ui/eagle-button";
import { ChevronRight, Play, Pause } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Words for typewriter effect
  const words = [
    {
      text: "We",
    },
    {
      text: "Help",
    },
    {
      text: "U.S.",
    },
    {
      text: "CRE",
    },
    {
      text: "Brokers",
    },
    {
      text: "Close",
    },
    {
      text: "More",
    },
    {
      text: "$3M–$20M",
      className: "text-eagle-orange",
    },
    {
      text: "Off-Market",
    },
    {
      text: "&",
    },
    {
      text: "NNN",
      className: "text-eagle-blue",
    },
    {
      text: "Deals",
    },
    {
      text: "Using",
    },
    {
      text: "Next-Gen",
      className: "text-eagle-orange",
    },
    {
      text: "AI",
      className: "text-eagle-blue",
    },
  ];

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
            className="w-screen h-screen min-h-screen object-cover"
            onLoad={() => setIsVideoLoaded(true)}
            style={{
              width: '100vw',
              height: '56.25vw', /* 16:9 Aspect Ratio */
              minHeight: '100vh',
              minWidth: '177.77vh',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          ></iframe>
        </div>
        
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Overlay content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4">
        <div className="mb-6">
          <TypewriterEffect words={words} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" />
        </div>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Our Eagle Eye AI Autopilot eliminates <span className="text-eagle-orange font-semibold">90% of manual work</span>—scouring markets, analyzing deals, nurturing clients, and scheduling tours—so you close more <span className="text-eagle-blue font-semibold">$5M+ off-market deals</span> while competitors chase cold leads.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <EagleButton className="uppercase font-bold text-base w-full sm:w-auto group">
              Schedule Your Strategy Session
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </EagleButton>
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto">
            <EagleSecondaryButton className="uppercase font-bold text-base w-full sm:w-auto flex items-center justify-center">
              See How It Works
            </EagleSecondaryButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
