
import React, { useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { ChevronRight, Play, Phone } from "lucide-react";
import { useDeviceType } from "../hooks/use-mobile";
import AnimatedTextCycle from "./ui/animated-text-cycle";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const deviceType = useDeviceType();

  const dynamicTexts = [
    "Never Miss a Scottish Buyer - Even After-Hours",
    "Auto Viewing Bookings - Instant Diary Sync", 
    "3-5 Extra Leads Monthly - Or No Charge",
    "Ready Tomorrow - 24 Hour Setup"
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-16 bg-black">
      {/* Enhanced Background with Scottish loch colors */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated background pattern with gold accents */}
        <div className="absolute inset-0 opacity-10 bg-tartan-pattern animate-pulse-slow"></div>
        
        {/* Highland mist floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/15 to-indigo-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-amber-400/8 to-yellow-500/8 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Content with Scottish luxury feel */}
      <div className="relative z-20 max-w-6xl mx-auto text-center px-4 py-16">
        {/* Scottish heritage badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/30 rounded-full px-8 py-3 mb-6 backdrop-blur-sm">
            <img src="/lovable-uploads/b6f5fba6-d002-48b6-877f-161d0c1d76fe.png" alt="Agency Eagle Eye" className="w-8 h-8 mr-3" />
            <span className="text-amber-400 font-bold text-sm tracking-wider">SCOTLAND'S PREMIER AI VOICE SOLUTIONS</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto mb-6">
            Scottish Estate Agents: Let <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Oor AI Laura</span> Add £9,600 to Your Bottom Line This Month
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
            Your 24/7 Digital Star Employee - Books Viewings, Qualifies Leads & Cuts Admin While You Focus On Revenue Generating Closings
          </h2>
        </div>

        {/* Dynamic bullet points with animation */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="min-h-[100px] flex items-center justify-center">
            <div className="text-lg sm:text-xl md:text-2xl font-semibold">
              <span className="text-amber-400 text-2xl mr-3">🏠</span>
              <AnimatedTextCycle
                words={dynamicTexts}
                interval={4000}
                className="text-white leading-tight max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Trust indicator with Scottish phone number */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-slate-300 mb-4 text-lg">
              Don't Believe Us? Call Laura And Demo Now
            </p>
            <a 
              href="tel:07883299579" 
              className="inline-flex items-center text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <Phone className="mr-3 group-hover:animate-pulse" size={28} />
              07883 299 579
            </a>
          </div>
        </div>

        {/* Enhanced Video with Scottish branding */}
        <div className="relative max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="relative aspect-video bg-slate-900/50 rounded-xl overflow-hidden border-2 border-amber-400/30 shadow-2xl backdrop-blur-sm">
            {/* Tartan glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-purple-500/10 to-amber-400/20 rounded-xl blur opacity-60"></div>
            
            {!showVideo ? (
              <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-900/90 to-purple-900/50 h-full">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div 
                    className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto cursor-pointer hover:shadow-lg hover:shadow-amber-400/50 transition-all duration-300 group" 
                    onClick={() => setShowVideo(true)}
                  >
                    <Play className="w-8 h-8 text-slate-900 ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Hear Oor Laura In Action</h3>
                  <p className="text-slate-300">Watch how she charms Scottish buyers into bookings</p>
                </div>
              </div>
            ) : (
              <iframe 
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/MOL2f76XY-k?autoplay=1&rel=0" 
                title="Oor Laura AI Voice Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Scottish CTA with premium styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="group">
            <RainbowButton 
              calendlyLink="https://calendly.com/weareagencyeagleeye/30min" 
              className="font-bold text-lg px-12 py-6 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 hover:shadow-lg hover:shadow-amber-400/50 transform hover:scale-105 transition-all duration-300 border-2 border-amber-300"
            >
              <span className="whitespace-nowrap">Aye Told You She Was Braw - Get Your 30 Day Free Trial</span>
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </RainbowButton>
          </div>
          
          <button 
            onClick={() => setShowVideo(true)}
            className="font-bold text-lg px-12 py-6 border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 transition-all duration-300 rounded-lg backdrop-blur-sm hover:shadow-lg hover:shadow-amber-400/30 transform hover:scale-105"
          >
            <span className="whitespace-nowrap">See Laura Work Her Magic</span>
          </button>
        </div>

        {/* Scottish heritage stats with tartan accents */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <p className="text-xs text-slate-400 mb-6 uppercase tracking-wider font-semibold">Trusted by Scottish Estate Agents</p>
          <div className="overflow-hidden rounded-lg bg-slate-800/30 backdrop-blur-sm border border-amber-400/20 py-6">
            <div className="flex animate-marquee space-x-16 text-slate-300">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center space-x-3 whitespace-nowrap">
                    <span className="text-amber-400 font-bold text-lg">47%</span>
                    <span className="text-sm font-medium hover:text-amber-400 transition-colors">Of Scottish property inquiries happen after 6pm</span>
                  </div>
                  <div className="flex items-center space-x-3 whitespace-nowrap">
                    <span className="text-amber-400 font-bold text-lg">£9,600</span>
                    <span className="text-sm font-medium hover:text-amber-400 transition-colors">Average monthly revenue increase with Laura</span>
                  </div>
                  <div className="flex items-center space-x-3 whitespace-nowrap">
                    <span className="text-amber-400 font-bold text-lg">24/7</span>
                    <span className="text-sm font-medium hover:text-amber-400 transition-colors">Never miss a viewing booking again</span>
                  </div>
                  <div className="flex items-center space-x-3 whitespace-nowrap">
                    <span className="text-amber-400 font-bold text-lg">24 Hours</span>
                    <span className="text-sm font-medium hover:text-amber-400 transition-colors">From setup to answering calls</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scottish scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
