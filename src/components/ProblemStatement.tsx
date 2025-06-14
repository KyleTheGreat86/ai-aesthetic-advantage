
import React, { useState, useEffect, useRef } from "react";
import { Clock, TrendingDown, AlertTriangle } from "lucide-react";

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
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark to-eagle-dark/90"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Every Manual CMS-1500 Costs You $3.50 in Wasted Biller Time
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <Icon size={48} className={`${problem.iconColor} mb-6 mx-auto`} />
                  <h3 className="text-xl font-bold mb-4 text-center">{problem.title}</h3>
                  <p className="text-lg font-semibold text-center mb-3 text-eagle-orange">
                    {problem.description}
                  </p>
                  <p className="text-gray-300 text-center">
                    {problem.subtext}
                  </p>
                </div>
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
