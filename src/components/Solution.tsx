
import React, { useState, useEffect, useRef } from "react";
import { Heart, Clock, Calendar, Info } from "lucide-react";

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "24/7 Perfect Coverage",
      description: "Your AI employee answers every call instantly - no holds, no voicemail, no 'we're busy right now.'",
      icon: Heart,
      iconColor: "text-eagle-gold"
    },
    {
      title: "Consistent Information Every Time",
      description: "Every prospect gets identical, accurate information about treatments, pricing, and availability. No more mixed messages.",
      icon: Clock,
      iconColor: "text-white"
    },
    {
      title: "Immediate Booking Capability",
      description: "Prospects book consultations while they're motivated instead of being told 'someone will call you back.'",
      icon: Calendar,
      iconColor: "text-eagle-gold"
    },
    {
      title: "Zero Overhead Costs",
      description: "No salary, benefits, sick days, or training time. Just professional service that gets better every month.",
      icon: Info,
      iconColor: "text-white"
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
      className="py-16 sm:py-24 relative overflow-hidden bg-black"
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What You Just Heard Solves Everything
          </h2>
          <p className="text-lg text-gray-300">The demo you experienced eliminates every problem that's costing your practice revenue.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 ${
                    activeFeature === index ? "scale-105 shadow-lg border-eagle-gold" : "scale-100"
                  } transition-all duration-300`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`w-16 h-16 ${feature.iconColor} bg-gray-800 rounded-full flex items-center justify-center mb-4 border-2 ${
                    activeFeature === index ? "border-eagle-gold" : "border-gray-600"
                  }`}>
                    <Icon size={30} />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-center text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center bg-gray-900 text-white rounded-lg p-6 max-w-2xl mx-auto border border-gray-700">
            <Heart className="mx-auto mb-4 text-eagle-gold" size={32} />
            <p className="text-xl font-semibold mb-2">All managed with professionalism and expertise—no complex software to learn.</p>
            <p className="text-gray-300">Your prospects receive premium service at their moment of interest.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
