
import React, { useState, useEffect, useRef } from "react";
import { Search, BarChart3, Calendar, MessageSquare } from "lucide-react";

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "Lead Generation Engine",
      description: "Scrapes LoopNet/CoStar, IDs off-market deals",
      icon: Search,
      iconColor: "text-eagle-blue"
    },
    {
      title: "Instant Deal Analyzer",
      description: "Runs cap rates, ROI projections in seconds",
      icon: BarChart3,
      iconColor: "text-eagle-orange"
    },
    {
      title: "Tour Scheduler",
      description: "Books inspections, drone photographers, lender calls",
      icon: Calendar,
      iconColor: "text-eagle-blue"
    },
    {
      title: "Client Nurture Bot",
      description: "Sends quarterly updates to past clients (e.g., 'Your 2019 asset is now worth $X')",
      icon: MessageSquare,
      iconColor: "text-eagle-orange"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto rotate through features
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, features.length]);

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/80 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The CRE Industry's First End-to-End AI Deal System
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Interactive workflow diagram - removed the blue/orange line */}
          <div className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center ${
                      activeFeature === index ? "scale-110 z-10" : "scale-100 opacity-80"
                    } transition-all duration-300`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className={`w-16 h-16 ${feature.iconColor} bg-white/10 rounded-full flex items-center justify-center mb-4 border-2 ${
                      activeFeature === index ? "border-white" : "border-transparent"
                    }`}>
                      <Icon size={30} />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">{feature.title}</h3>
                    <p className="text-sm text-center text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <MessageSquare className="mx-auto mb-4 text-eagle-blue" size={32} />
            <p className="text-xl font-semibold mb-2">All managed via Telegram—no complex software to learn.</p>
            <p className="text-gray-300">Control your entire brokerage from your phone with simple commands and buttons.</p>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Solution;
