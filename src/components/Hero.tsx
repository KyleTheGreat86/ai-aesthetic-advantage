
import React, { useState, useEffect } from "react";
import eagleLogo from "/lovable-uploads/b797bc22-5a08-4a8e-a9e5-b0a065bd73a4.png";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowStats(true), 1000);
    const timer2 = setTimeout(() => setShowTagline(true), 2000);
    const timer3 = setTimeout(() => setShowButtons(true), 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center">
      <FloatingShapes />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text-blue">Eagle Eye AI:</span> The #1 Growth System for Audiology Clinics
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Add 15-20 High Value Appointments & <span className="text-eagle-orange font-bold">${"5,200+"}</span> Monthly Net Profit After Our Fee To Your Clinic Every Month Or You Pay NOTHING.
          </p>
        </div>
        
        {!isVideoVisible && (
          <div className="mb-10 mx-auto w-full max-w-5xl relative">
            <div 
              className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center cursor-pointer group overflow-hidden"
              onClick={() => setIsVideoVisible(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-eagle-blue/20 to-eagle-orange/20 group-hover:opacity-70 transition-opacity"></div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="text-xl font-medium">Watch Our 90-Second Demo</p>
              </div>
            </div>
          </div>
        )}
        
        {isVideoVisible && (
          <div className="mb-10 mx-auto w-full max-w-5xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/NpB49c8D-UE"
                title="Eagle Eye AI Demo Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
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
          
          <p className="text-xl font-semibold text-eagle-blue mb-4 opacity-0 animate-fade-in">
            Typical Client Results
          </p>
          
          <div className="mb-8 flex flex-col md:flex-row justify-center gap-6">
            {showStats && (
              <>
                <div className="opacity-0 animate-fade-in">
                  <p className="text-2xl md:text-3xl font-bold">18+</p>
                  <p className="text-gray-400">Extra Appointments</p>
                </div>
                <div className="opacity-0 animate-fade-in animate-delay-200">
                  <p className="text-2xl md:text-3xl font-bold">40%</p>
                  <p className="text-gray-400">Conversion Rate</p>
                </div>
                <div className="opacity-0 animate-fade-in animate-delay-400">
                  <p className="text-2xl md:text-3xl font-bold">$5,200+</p>
                  <p className="text-gray-400">Net Profit/Month</p>
                </div>
              </>
            )}
          </div>
          
          {showTagline && (
            <p className="text-xl md:text-2xl mb-10 opacity-0 animate-fade-in">
              <span className="text-white font-medium">AI-Powered.</span>
              <span className="mx-2 text-eagle-blue">Fully Managed.</span>
              <span className="text-eagle-orange font-medium">$5,200+ Minimum Net Profit.</span>
            </p>
          )}
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in">
              <a href="#contact" className="eagle-btn-primary">
                BOOK FREE STRATEGY CALL
              </a>
              <a href="#pricing" className="eagle-btn-secondary">
                START 14-DAY FREE TRIAL
              </a>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-eagle-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
