
import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Clock, Smartphone, Bell, Briefcase, Shield } from "lucide-react";
import MedicalBillingRoiCalculator from "./MedicalBillingRoiCalculator";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      title: "85% Time Reduction",
      description: "From 8 minutes to 90 seconds per CMS-1500 claim.",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "15+ Hours Saved Weekly",
      description: "No more manual data entry or claim rework.",
      icon: Clock,
      color: "text-eagle-orange"
    },
    {
      title: "Same-Day Processing",
      description: "Submit claims within hours, not days.",
      icon: Smartphone,
      color: "text-eagle-blue"
    },
    {
      title: "99.9% Accuracy",
      description: "AI eliminates human keying errors and denials.",
      icon: Bell,
      color: "text-amber-500"
    },
    {
      title: "$5,000+ Monthly Savings",
      description: "Reduce labor costs while increasing throughput.",
      icon: Briefcase,
      color: "text-purple-500"
    },
    {
      title: "HIPAA Compliant",
      description: "Secure processing with full audit trails.",
      icon: Shield,
      color: "text-teal-500"
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

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-10 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Why Medical Billing Companies Choose Eagle Eye
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">AI-powered CMS-1500 processing designed for your existing workflow</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6 transform transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-full ${benefit.color} bg-white/10`}>
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold ml-3">{benefit.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* ROI Calculator */}
        <MedicalBillingRoiCalculator />
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Benefits;
