
import React, { useState, useEffect, useRef } from "react";
import { EagleButton, EagleSecondaryButton } from "./ui/eagle-button";
import { ChevronRight, MessageCircle, Play, Pause } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', handleVideoLoaded);
    }

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', handleVideoLoaded);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute inset-0 bg-black z-10 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <source src="https://www.youtube.com/embed/MOL2f76XY-k?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=MOL2f76XY-k" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Video controls */}
        <button 
          className={`absolute bottom-5 right-5 bg-white/20 backdrop-blur-sm rounded-full p-2 z-20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
          onClick={togglePlayPause}
        >
          {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
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
