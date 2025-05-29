
import React, { useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { ChevronRight, Play } from "lucide-react";
import { useDeviceType } from "../hooks/use-mobile";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const deviceType = useDeviceType();

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-eagle-dark via-eagle-dark/90 to-eagle-dark/80">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 py-16">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl mx-auto">
            We Help Funeral Homes Provide Compassionate 24/7 Response to{" "}
            <span className="text-eagle-gold">Families in Need</span>{" "}
            Without Sacrificing Staff Wellbeing or Personal Touch
          </h1>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Our Eagle Eye Response AI Assistant ensures every family receives immediate, compassionate attention at any hour—handling calls with empathy, scheduling consultations, and providing information—so your staff can rest while families never reach voicemail.
        </p>

        {/* Video Placeholder */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <div className="relative aspect-video bg-black/30 rounded-xl overflow-hidden border border-eagle-gold/30 shadow-2xl">
            {!showVideo ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-eagle-dark/80 to-black/80">
                <div className="text-center">
                  <div className="w-16 h-16 bg-eagle-gold rounded-full flex items-center justify-center mb-3 mx-auto cursor-pointer hover:bg-eagle-gold/90 transition-colors" onClick={() => setShowVideo(true)}>
                    <Play className="w-6 h-6 text-eagle-dark ml-1" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">See How Eagle Eye AI Response Works</h3>
                  <p className="text-gray-300 text-sm">Watch a 2-minute demonstration</p>
                </div>
              </div>
            ) : (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MOL2f76XY-k?autoplay=1&rel=0" 
                title="Eagle Eye AI Response Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <RainbowButton 
            calendlyLink="https://calendly.com/weareagencyeagleeye/30min" 
            className="font-bold text-sm w-auto px-6 py-3 bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90"
          >
            <span className="whitespace-nowrap">Schedule Your Free Demo</span>
            <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1 flex-shrink-0" />
          </RainbowButton>
          
          <button 
            onClick={() => setShowVideo(true)}
            className="font-bold text-sm w-auto px-6 py-3 border-2 border-eagle-gold text-eagle-gold hover:bg-eagle-gold/10 transition-colors rounded-lg"
          >
            <span className="whitespace-nowrap">See How It Works</span>
          </button>
        </div>

        {/* As Featured In Section */}
        <div className="mt-12">
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">As Featured In</p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-8 text-gray-500">
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span className="text-sm font-semibold">NFDA</span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span className="text-sm font-semibold">American Funeral Director</span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span className="text-sm font-semibold">Connecting Directors</span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span className="text-sm font-semibold">NFDA</span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span className="text-sm font-semibold">American Funeral Director</span>
              </div>
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span className="text-sm font-semibold">Connecting Directors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
