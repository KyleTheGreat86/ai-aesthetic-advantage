
import React, { useState, useEffect, useRef } from "react";
import { Mail, Cpu, CheckSquare, FileText } from "lucide-react";
import { GlowingCard } from "./ui/glowing-card";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const steps = [
    {
      number: 1,
      title: "Email CMS-1500 PDFs to our secure inbox",
      icon: Mail,
      iconColor: "text-eagle-blue"
    },
    {
      number: 2,
      title: "AI extracts patient data, ICD-10s, CPT codes",
      icon: Cpu,
      iconColor: "text-eagle-orange"
    },
    {
      number: 3,
      title: "Auto-populates your Medisoft/AdvancedMD by 8 AM",
      icon: FileText,
      iconColor: "text-eagle-blue"
    },
    {
      number: 4,
      title: "Review & submit – No rekeying, just quality checks",
      icon: CheckSquare,
      iconColor: "text-eagle-orange"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark to-eagle-dark/90"
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <GlowingCard intensity="medium" className="h-full">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full group">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-eagle-orange rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl">
                          {step.number}
                        </div>
                        <Icon size={32} className={`${step.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-xl font-bold text-white leading-relaxed">{step.title}</h3>
                    </div>
                  </GlowingCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;
