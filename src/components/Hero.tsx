
import React, { useState, useEffect, lazy, Suspense } from "react";
import eagleLogo from "/lovable-uploads/b797bc22-5a08-4a8e-a9e5-b0a065bd73a4.png";
import { EagleButton, EagleSecondaryButton } from "./ui/eagle-button";
import { Eye, Star, TrendingUp, BarChart3, Play, MessageCircle } from "lucide-react";
import { ClientLogosCarousel } from "./ui/client-logos-carousel";
import { useDeviceType, useOrientation } from "../hooks/use-mobile";

// Lazy load non-critical components
const FloatingShapes = lazy(() => import("./FloatingShapes"));

const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showLimitedBanner, setShowLimitedBanner] = useState(false);
  const deviceType = useDeviceType();
  const isLandscape = useOrientation();
  
  // Updated YouTube video ID for embedding
  const videoId = "hLvm2JHzOF4";

  useEffect(() => {
    // Use more efficient timing with requestAnimationFrame
    let timer1, timer2, timer3, timer4;
    
    // Schedule animations to run after first paint
    requestAnimationFrame(() => {
      timer1 = setTimeout(() => setShowStats(true), 1000);
      timer2 = setTimeout(() => setShowTagline(true), 2000);
      timer3 = setTimeout(() => setShowButtons(true), 2800);
      timer4 = setTimeout(() => setShowLimitedBanner(true), 1500);
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Memoize static content to prevent re-renders
  const heroStats = React.useMemo(() => (
    <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto w-full px-2">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <TrendingUp size={28} className="text-eagle-blue mb-2" strokeWidth={1.5} />
        <p className="font-semibold">Rank Higher in Local Search</p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <BarChart3 size={28} className="text-eagle-orange mb-2" strokeWidth={1.5} />
        <p className="font-semibold">Convert 70% More Visitors</p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
        <Star size={28} className="text-eagle-blue mb-2" fill="currentColor" strokeWidth={1.5} />
        <p className="font-semibold">Each 0.1 Star = 5-9% More Clicks</p>
      </div>
    </div>
  ), []);

  const features = React.useMemo(() => (
    <div className="flex flex-wrap justify-center gap-8 mb-12 w-full px-2">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 w-full sm:w-64 text-center transform hover:-translate-y-1 transition-transform">
        <Eye size={32} className="mx-auto mb-3 text-eagle-blue" strokeWidth={1.5} />
        <h3 className="text-xl font-semibold mb-2">Personalized</h3>
        <p className="text-gray-300">Customized messages that get 64% higher response rates than generic requests</p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 w-full sm:w-64 text-center transform hover:-translate-y-1 transition-transform">
        <Eye size={32} className="mx-auto mb-3 text-eagle-orange" strokeWidth={1.5} />
        <h3 className="text-xl font-semibold mb-2">Automated</h3>
        <p className="text-gray-300">Smart timing algorithms deliver requests when customers are most likely to respond</p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 w-full sm:w-64 text-center transform hover:-translate-y-1 transition-transform">
        <Eye size={32} className="mx-auto mb-3 text-eagle-blue" strokeWidth={1.5} />
        <h3 className="text-xl font-semibold mb-2">Results-Based</h3>
        <p className="text-gray-300">You only pay for successful 4-5 star reviews we help you generate</p>
      </div>
    </div>
  ), []);

  return (
    <section id="home" className="relative min-h-screen w-full pt-24 flex items-center">
      <Suspense fallback={null}>
        <FloatingShapes />
      </Suspense>
      
      <div className="section-container relative z-10 w-full px-4">
        <div className="text-center mb-8 max-w-5xl mx-auto w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text-blue">Transform Your Google Reviews</span>
            <br />
            <span className="gradient-text-orange">Into Your #1 Marketing Asset</span>
          </h1>
          {heroStats}
        </div>
        
        {/* Limited Availability Banner */}
        {showLimitedBanner && (
          <div className="mb-6 text-center opacity-0 animate-fade-in w-full">
            <div className="inline-block bg-eagle-blue/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-eagle-blue/50">
              <p className="text-xl font-semibold text-white">Limited Time Offer</p>
              <p className="text-lg font-medium text-eagle-orange">Only Pay for 4-5 Star Reviews</p>
              <p className="text-sm mt-1 text-gray-300">First 50 businesses worldwide - <span className="font-bold">23</span> spots remaining!</p>
            </div>
          </div>
        )}
        
        {!isVideoVisible ? (
          <div className="mb-10 mx-auto w-full max-w-3xl relative">
            <div 
              className="aspect-video rounded-lg flex items-center justify-center cursor-pointer group overflow-hidden relative"
              onClick={() => setIsVideoVisible(true)}
            >
              {/* YouTube thumbnail with play button overlay */}
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-eagle-blue/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={36} className="text-white ml-2" fill="white" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-10 mx-auto w-full max-w-3xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/hLvm2JHzOF4?autoplay=1"
                title="Eagle Eye AI Demo Video"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        
        {/* Call-to-action buttons */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in w-full px-4">
            <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <EagleButton className="uppercase font-bold text-base w-full sm:w-auto">
                BOOK YOUR FREE TRIAL NOW
              </EagleButton>
            </a>
            <a href="https://wa.me/447886073693" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <EagleSecondaryButton className="uppercase font-bold text-base w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center">
                <MessageCircle className="mr-2" size={18} />
                WHATSAPP FREE TRIAL
              </EagleSecondaryButton>
            </a>
          </div>
        )}
        
        <div className="text-center max-w-4xl mx-auto w-full px-2">
          <div className="mb-8">
            <img 
              src={eagleLogo} 
              alt="Eagle Eye Logo" 
              className="h-24 mx-auto animate-pulse-slow"
              width="96"
              height="96" 
            />
          </div>
          
          <div className="mb-8 w-full">
            <p className="text-xl font-semibold text-eagle-blue mb-4 opacity-0 animate-fade-in">
              Trusted By Local Businesses Across 16+ Countries
            </p>
            
            {/* New Client Logos Carousel */}
            <ClientLogosCarousel />
          </div>
          
          {showTagline && (
            <p className="text-xl md:text-2xl mb-10 opacity-0 animate-fade-in">
              <span className="text-white font-medium">Get </span>
              <span className="mx-2 text-eagle-blue">4X More Google Reviews</span>
              <span className="text-white">Than Your Local Competitors</span>
              <br />
              <span className="text-eagle-orange font-medium">Our Proven System Works While You Focus On Running Your Business</span>
            </p>
          )}
          
          {features}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-eagle-dark to-transparent pointer-events-none"></div>
    </section>
  );
};

export default React.memo(Hero);
