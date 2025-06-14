
import React, { useState, useEffect, useRef } from "react";
import { Mail, Cpu, CheckSquare, BarChart3 } from "lucide-react";
import { GlowingCard } from "./ui/glowing-card";

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "Email PDFs",
      description: "Secure HIPAA-compliant inbox",
      icon: Mail,
      iconColor: "text-eagle-blue"
    },
    {
      title: "Overnight AI Processing",
      description: "90 sec/claim into your PM system",
      icon: Cpu,
      iconColor: "text-eagle-orange"
    },
    {
      title: "Review & Submit",
      description: "Clean claims ready by 8 AM",
      icon: CheckSquare,
      iconColor: "text-eagle-blue"
    },
    {
      title: "Track Savings",
      description: "Daily reports show $5,000+ monthly ROI",
      icon: BarChart3,
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
            AI-Powered CMS-1500 Processing That Fits Your Existing Workflow
          </h2>
          <h3 className="text-2xl font-semibold text-eagle-blue mb-8">How It Works</h3>
        </div>

        <div className="max-w-5xl mx-auto">
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
                    <GlowingCard intensity={activeFeature === index ? "strong" : "medium"}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-4 w-full text-center">
                        <div className="text-3xl font-bold text-eagle-orange mb-2">{index + 1}</div>
                        <div className={`w-16 h-16 ${feature.iconColor} bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto border-2 ${
                          activeFeature === index ? "border-white" : "border-transparent"
                        }`}>
                          <Icon size={30} />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2">{feature.title}</h3>
                        <p className="text-sm text-center text-gray-300">{feature.description}</p>
                      </div>
                    </GlowingCard>
                    
                    {index < features.length - 1 && (
                      <div className="hidden md:block absolute top-8 -right-3 transform translate-x-1/2 z-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L20 10L10 20V0Z" fill="white" fillOpacity="0.3" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <GlowingCard intensity="medium" className="max-w-2xl mx-auto">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-eagle-blue">Results You'll See</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-eagle-orange font-semibold">• Same-Day Submission → Faster reimbursements</div>
                <div className="text-eagle-blue font-semibold">• 85% Fewer Labor Hours → Redeploy staff to high-value work</div>
                <div className="text-white">• 99.9% Accuracy → Slash denials by 40%+</div>
                <div className="text-eagle-orange font-semibold">• Trusted by Medical Billing Leaders</div>
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Solution;
