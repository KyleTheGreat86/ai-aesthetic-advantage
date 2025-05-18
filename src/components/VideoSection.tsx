
import React from "react";
import { EagleButton, EagleSecondaryButton } from "./ui/eagle-button";
import { ChevronRight } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video-section" className="py-16 bg-eagle-dark relative z-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">See How It Works</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Watch our short video to discover how our AI-powered system revolutionizes 
            commercial real estate brokerage
          </p>
        </div>
        
        {/* Video embed container with responsive sizing */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl mb-10">
          <iframe 
            src="https://www.youtube.com/embed/MOL2f76XY-k?rel=0" 
            className="absolute top-0 left-0 w-full h-full"
            title="Eagle Eye AI Demo Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        
        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <EagleButton className="uppercase font-bold text-base w-full sm:w-auto group px-3 sm:px-6">
              <span className="whitespace-normal sm:whitespace-nowrap">Schedule Your Strategy Session</span>
              <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </EagleButton>
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto">
            <EagleSecondaryButton className="uppercase font-bold text-base w-full sm:w-auto flex items-center justify-center">
              <span className="whitespace-normal sm:whitespace-nowrap">See How It Works</span>
            </EagleSecondaryButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
