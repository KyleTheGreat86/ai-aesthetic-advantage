
import React, { useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { ChevronRight, Play } from "lucide-react";
import { useDeviceType } from "../hooks/use-mobile";
import AnimatedTextCycle from "./ui/animated-text-cycle";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const deviceType = useDeviceType();

  const rotatingWords = [
    "Families In Need",
    "Grieving Families", 
    "Families Facing Loss",
    "Loved Ones in Crisis",
    "Those Navigating Grief",
    "Families Under Stress"
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Enhanced Background with overlay and animated grid */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20 bg-grid animate-pulse-slow"></div>
        
        {/* Floating shapes for premium feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-eagle-gold/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-eagle-gold/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 py-16">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            We Help Funeral Homes Provide Compassionate 24/7 Response to{" "}
            <span className="relative inline-block">
              <AnimatedTextCycle 
                words={rotatingWords}
                interval={3000}
                className="text-eagle-gold bg-gradient-to-r from-eagle-gold to-yellow-300 bg-clip-text text-transparent font-bold"
              />
            </span>{" "}
            Without Sacrificing Staff Wellbeing or Personal Touch
          </h1>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Our Eagle Eye Response AI Assistant ensures every family receives immediate, compassionate attention at any hour—handling calls with empathy, scheduling consultations, and providing information—so your staff can rest while families never reach voicemail.
          </p>
        </div>

        {/* Enhanced Video Placeholder with premium styling */}
        <div className="relative max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative aspect-video bg-black/30 rounded-xl overflow-hidden border border-eagle-gold/30 shadow-2xl backdrop-blur-sm">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-eagle-gold/20 to-transparent rounded-xl blur opacity-60"></div>
            
            {!showVideo ? (
              <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-black/80 h-full">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div 
                    className="w-16 h-16 bg-gradient-to-r from-eagle-gold to-yellow-400 rounded-full flex items-center justify-center mb-3 mx-auto cursor-pointer hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 group" 
                    onClick={() => setShowVideo(true)}
                  >
                    <Play className="w-6 h-6 text-black ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-eagle-gold transition-colors">See How Eagle Eye AI Response Works</h3>
                  <p className="text-gray-300 text-sm">Watch a 2-minute demonstration</p>
                </div>
              </div>
            ) : (
              <iframe 
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/MOL2f76XY-k?autoplay=1&rel=0" 
                title="Eagle Eye AI Response Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Enhanced CTA Buttons with premium animations */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="group">
            <RainbowButton 
              calendlyLink="https://calendly.com/weareagencyeagleeye/30min" 
              className="font-bold text-sm w-auto px-8 py-4 bg-gradient-to-r from-eagle-gold to-yellow-400 text-black hover:shadow-lg hover:shadow-eagle-gold/30 transform hover:scale-105 transition-all duration-300"
            >
              <span className="whitespace-nowrap">Schedule Your Free Demo</span>
              <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </RainbowButton>
          </div>
          
          <button 
            onClick={() => setShowVideo(true)}
            className="font-bold text-sm w-auto px-8 py-4 border-2 border-eagle-gold text-eagle-gold hover:bg-eagle-gold/10 transition-all duration-300 rounded-lg backdrop-blur-sm hover:shadow-lg hover:shadow-eagle-gold/20 transform hover:scale-105"
          >
            <span className="whitespace-nowrap">See How It Works</span>
          </button>
        </div>

        {/* Enhanced As Featured In Section with marquee animation */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider font-semibold">As Featured In</p>
          <div className="overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 py-4">
            <div className="flex animate-marquee space-x-12 text-gray-400">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <span className="text-sm font-semibold hover:text-eagle-gold transition-colors">NFDA</span>
                  </div>
                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <span className="text-sm font-semibold hover:text-eagle-gold transition-colors">American Funeral Director</span>
                  </div>
                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <span className="text-sm font-semibold hover:text-eagle-gold transition-colors">Connecting Directors</span>
                  </div>
                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <span className="text-sm font-semibold hover:text-eagle-gold transition-colors">Funeral Business Advisor</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-eagle-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-eagle-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
