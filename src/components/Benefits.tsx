
import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Clock, Smartphone, Bell, Briefcase, Shield, Calculator } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dealSize, setDealSize] = useState("5000000");
  const [calculatedROI, setCalculatedROI] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      title: "30% More Deals Closed",
      description: "Atlanta broker closed 4 extra industrial deals in 6 months.",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "15+ Hours Saved Weekly",
      description: "No more chasing docs or manual follow-ups.",
      icon: Clock,
      color: "text-eagle-orange"
    },
    {
      title: "Mobile-First Control",
      description: "Manage your entire pipeline via Telegram—no desktop needed.",
      icon: Smartphone,
      color: "text-eagle-blue"
    },
    {
      title: "Zero Missed Opportunities",
      description: "AI tracks lead follow-ups so you never drop the ball.",
      icon: Bell,
      color: "text-amber-500"
    },
    {
      title: "Double-Sided Commissions",
      description: "Auto-match buyers/sellers in your database.",
      icon: Briefcase,
      color: "text-purple-500"
    },
    {
      title: "Effortless Compliance",
      description: "Deadline reminders for inspections, contingencies.",
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

  const calculateROI = () => {
    const dealSizeNum = parseFloat(dealSize.replace(/,/g, ''));
    if (isNaN(dealSizeNum)) return;
    
    // Assuming 3% commission and 4 additional deals per year
    const commission = dealSizeNum * 0.03;
    const annualAdditionalRevenue = commission * 4;
    const annualCost = (5995 + (1750 * 12));
    const roi = (annualAdditionalRevenue - annualCost) / annualCost;
    
    // Format as Xx ROI instead of percentage
    setCalculatedROI(`${roi.toFixed(2)}x`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format number with commas
    const value = e.target.value.replace(/[^\d]/g, '');
    setDealSize(value);
    setCalculatedROI(null);
  };

  const formatNumber = (value: string) => {
    return new Intl.NumberFormat('en-US').format(parseInt(value || "0"));
  };

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why Top Brokers Choose Eagle Eye
          </h2>
          <p className="text-xl text-gray-300">AI infrastructure designed specifically for $3M-$20M CRE deals</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transform transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${benefit.color} bg-white/10`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* ROI Calculator */}
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-eagle-blue/30 p-8">
          <div className="flex items-center mb-4">
            <Calculator size={28} className="text-eagle-blue mr-3" />
            <h3 className="text-2xl font-bold">ROI Calculator</h3>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Enter your average deal size:</label>
            <div className="flex items-center">
              <span className="bg-white/10 p-2 rounded-l-md border border-white/20">$</span>
              <input
                type="text"
                value={formatNumber(dealSize)}
                onChange={handleInputChange}
                className="bg-white/10 text-white p-2 flex-grow border border-white/20 focus:outline-none focus:border-eagle-blue"
              />
              <button 
                onClick={calculateROI}
                className="bg-eagle-blue hover:bg-eagle-blue/90 text-white py-2 px-4 rounded-r-md transition"
              >
                Calculate
              </button>
            </div>
          </div>
          
          {calculatedROI && (
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-sm mb-1">Your potential ROI:</p>
              <p className="text-3xl font-bold text-eagle-orange">{calculatedROI}</p>
              <p className="text-sm text-gray-300 mt-2">For every $1 invested, you get {calculatedROI} back</p>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
              <EagleButton>Get Your Customized ROI Analysis</EagleButton>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Benefits;
