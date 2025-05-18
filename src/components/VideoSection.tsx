
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { EagleSecondaryButton } from "./ui/eagle-button";
import { ChevronRight } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-eagle-dark relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">See How Eagle Eye Works</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Watch how our AI system transforms the CRE brokerage workflow, eliminating busywork and helping you close more deals.
          </p>
        </div>
        
        <div className="relative aspect-video w-full max-w-4xl mx-auto mb-10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(213,70,239,0.3)]">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/MOL2f76XY-k?rel=0" 
            title="Eagle Eye AI System Overview" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <RainbowButton 
            calendlyLink="https://calendly.com/weareagencyeagleeye/30min" 
            className="uppercase font-bold text-base group w-auto"
          >
            <span className="whitespace-nowrap">Schedule Your Strategy Session</span>
            <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
          </RainbowButton>
          
          <RainbowButton className="uppercase font-bold text-base w-auto">
            <a href="#how-it-works" className="w-full h-full flex items-center justify-center">
              See How It Works
            </a>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
