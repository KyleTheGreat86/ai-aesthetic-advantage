
import React, { useState, useEffect, useRef } from "react";
import { Clock, DollarSign, Shield, BarChart, CheckCircle, Zap } from "lucide-react";
import { GlowingCard } from "./ui/glowing-card";

const Benefits = () => {
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

  const benefits = [
    {
      icon: Clock,
      title: "85% Time Reduction",
      description: "From 8 minutes to 90 seconds per CMS-1500 claim.",
      iconColor: "text-eagle-orange"
    },
    {
      icon: BarChart,
      title: "15+ Hours Saved Weekly",
      description: "No more manual data entry or claim rework.",
      iconColor: "text-eagle-blue"
    },
    {
      icon: Zap,
      title: "Same-Day Processing",
      description: "Submit claims within hours, not days.",
      iconColor: "text-eagle-orange"
    },
    {
      icon: CheckCircle,
      title: "99.9% Accuracy",
      description: "AI eliminates human keying errors and denials.",
      iconColor: "text-eagle-blue"
    },
    {
      icon: DollarSign,
      title: "$5,000+ Monthly Savings",
      description: "Reduce labor costs while increasing throughput.",
      iconColor: "text-eagle-orange"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Secure processing with full audit trails.",
      iconColor: "text-eagle-blue"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Medical Billing Companies Choose Eagle Eye
          </h2>
          <p className="text-xl text-gray-300">
            AI-powered CMS-1500 processing designed for your existing workflow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <GlowingCard intensity="medium" className="h-full">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full group">
                    <Icon size={48} className={`${benefit.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </GlowingCard>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Benefits;
