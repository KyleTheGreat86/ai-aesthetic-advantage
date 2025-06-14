
import React, { useState, useEffect, useRef } from "react";
import { Clock, TrendingDown, AlertTriangle } from "lucide-react";
import { GlowingCard } from "./ui/glowing-card";

const ProblemStatement = () => {
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

  const problems = [
    {
      icon: Clock,
      title: "Biller Burnout",
      description: "8-12 mins/claim at $25/hr = $3.50 wasted per claim",
      subtext: "Senior staff stuck on data entry instead of AR follow-up",
      iconColor: "text-eagle-orange"
    },
    {
      icon: TrendingDown,
      title: "Shrinking Margins",
      description: "Charging clients $4/claim but costing you $3.50 to process",
      subtext: "20% revenue lost to denials from keying errors",
      iconColor: "text-eagle-blue"
    },
    {
      icon: AlertTriangle,
      title: "Lost Competitiveness",
      description: "Competitors submit claims same-day; yours take 48+ hours",
      subtext: "Clients leaving for faster billing companies",
      iconColor: "text-eagle-orange"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark to-eagle-dark/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Every Manual CMS-1500 Costs You <span className="text-eagle-orange">$3.50</span> in Wasted Biller Time
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            While you're manually processing claims, your competitors are automating their way to higher profits and faster turnaround times.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
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
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full group">
                    <Icon size={48} className={`${problem.iconColor} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-center text-white">{problem.title}</h3>
                    <p className="text-base md:text-lg font-semibold text-center mb-3 text-eagle-orange">
                      {problem.description}
                    </p>
                    <p className="text-sm md:text-base text-gray-300 text-center leading-relaxed">
                      {problem.subtext}
                    </p>
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

export default ProblemStatement;
