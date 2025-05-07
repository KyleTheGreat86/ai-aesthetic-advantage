
import React, { useState, useEffect } from "react";
import eagleLogo from "/lovable-uploads/b797bc22-5a08-4a8e-a9e5-b0a065bd73a4.png";
import FloatingShapes from "./FloatingShapes";
import { EagleButton, EagleSecondaryButton } from "./ui/eagle-button";
import { Eye } from "lucide-react";

const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLimitedBanner, setShowLimitedBanner] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowStats(true), 1000);
    const timer2 = setTimeout(() => setShowTagline(true), 2000);
    const timer3 = setTimeout(() => setShowButtons(true), 2800);
    const timer4 = setTimeout(() => setShowLimitedBanner(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center">
      <FloatingShapes />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text-blue">Gain Razor-Sharp Visibility Through Reviews</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Soar Above Your Competitors On Google and Increase Sales
          </p>
        </div>
        
        {/* Limited Availability Banner */}
        {showLimitedBanner && (
          <div className="mb-6 text-center opacity-0 animate-fade-in">
            <div className="inline-block bg-eagle-blue/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-eagle-blue/50">
              <p className="text-xl font-semibold text-white">Limited Time Offer</p>
              <p className="text-lg font-medium text-eagle-orange">Only Pay for 4-5 Star Reviews</p>
              <p className="text-sm mt-1 text-gray-300">First 1,000 users only!</p>
            </div>
          </div>
        )}
        
        {!isVideoVisible && (
          <div className="mb-10 mx-auto w-full max-w-3xl relative">
            <div 
              className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center cursor-pointer group overflow-hidden"
              onClick={() => setIsVideoVisible(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-eagle-blue/20 to-eagle-orange/20 group-hover:opacity-70 transition-opacity"></div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="text-xl font-medium">Click to Watch How It Works</p>
              </div>
            </div>
          </div>
        )}
        
        {isVideoVisible && (
          <div className="mb-10 mx-auto w-full max-w-3xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/sm5QGrA7oeU"
                title="Eagle Eye AI Demo Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        
        {/* Call-to-action buttons moved directly below the video */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in">
            <a href="#pricing" className="w-full sm:w-auto">
              <EagleButton className="uppercase font-bold text-base w-full sm:w-auto">
                START FREE
              </EagleButton>
            </a>
            <a href="#results" className="w-full sm:w-auto">
              <EagleSecondaryButton className="uppercase font-bold text-base w-full sm:w-auto">
                SEE RESULTS
              </EagleSecondaryButton>
            </a>
          </div>
        )}
        
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={eagleLogo} 
              alt="Eagle Eye Logo" 
              className="h-24 mx-auto animate-pulse-slow" 
            />
          </div>
          
          <div className="mb-8">
            <p className="text-xl font-semibold text-eagle-blue mb-4 opacity-0 animate-fade-in">
              Great brands are using Eagle Eye
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="bg-white/5 p-3 rounded-lg w-24 h-16 flex items-center justify-center opacity-0 animate-fade-in">
                <div className="w-full h-4 bg-white/30 rounded"></div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg w-24 h-16 flex items-center justify-center opacity-0 animate-fade-in animate-delay-100">
                <div className="w-full h-4 bg-white/30 rounded"></div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg w-24 h-16 flex items-center justify-center opacity-0 animate-fade-in animate-delay-200">
                <div className="w-full h-4 bg-white/30 rounded"></div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg w-24 h-16 flex items-center justify-center opacity-0 animate-fade-in animate-delay-300">
                <div className="w-full h-4 bg-white/30 rounded"></div>
              </div>
              <p className="text-gray-400 opacity-0 animate-fade-in animate-delay-400">+ many more</p>
            </div>
          </div>
          
          {showTagline && (
            <p className="text-xl md:text-2xl mb-10 opacity-0 animate-fade-in">
              <span className="text-white font-medium">Get More Reviews than your competition with our</span>
              <span className="mx-2 text-eagle-blue">personalized</span>
              <span className="text-white">requests.</span>
              <br />
              <span className="text-eagle-orange font-medium">Only pay Once You Get Reviews.</span>
            </p>
          )}
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 w-64 text-center transform hover:-translate-y-1 transition-transform">
              <Eye size={32} className="mx-auto mb-3 text-eagle-blue" />
              <h3 className="text-xl font-semibold mb-2">Personalized</h3>
              <p className="text-gray-300">Tailored review requests designed specifically for your business</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 w-64 text-center transform hover:-translate-y-1 transition-transform">
              <Eye size={32} className="mx-auto mb-3 text-eagle-orange" />
              <h3 className="text-xl font-semibold mb-2">Automated</h3>
              <p className="text-gray-300">Set it once and let our systems work for you 24/7</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 w-64 text-center transform hover:-translate-y-1 transition-transform">
              <Eye size={32} className="mx-auto mb-3 text-eagle-blue" />
              <h3 className="text-xl font-semibold mb-2">Risk Free</h3>
              <p className="text-gray-300">Start with a free trial and only pay for results</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-eagle-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
