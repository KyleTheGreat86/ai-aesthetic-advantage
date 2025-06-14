
import React, { useState, useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import { GlowingCard } from "./ui/glowing-card";

const CompetitorComparison = () => {
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

  const comparisonData = [
    {
      task: "Claims Processing",
      manual: "8-12 mins/claim\n($3.50 labor cost)",
      eagleEye: "90 seconds/claim\n($0.50 cost)",
      manualIcon: X,
      eagleEyeIcon: Check
    },
    {
      task: "Daily Volume",
      manual: "30-40 claims/biller\n(4-7/hour)",
      eagleEye: "100+ claims/hour\n(Overnight batches)",
      manualIcon: X,
      eagleEyeIcon: Check
    },
    {
      task: "Denial Rate",
      manual: "15-20%\n($25/rework claim)",
      eagleEye: "<5%\n(99.9% accuracy)",
      manualIcon: X,
      eagleEyeIcon: Check
    },
    {
      task: "Cash Flow",
      manual: "48-72 hr turnaround\n(Delayed payments)",
      eagleEye: "Same-day submission\n(Faster reimbursements)",
      manualIcon: X,
      eagleEyeIcon: Check
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark to-eagle-dark/90"
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Outperform Other Billing Companies
          </h2>
          <p className="text-xl text-gray-300">
            See how automated practices gain an unbeatable edge:
          </p>
        </div>

        <GlowingCard intensity="medium" className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div className="bg-white/10 p-4 font-bold text-center border-b md:border-b-0 md:border-r border-white/20">
                Task
              </div>
              <div className="bg-red-500/20 p-4 font-bold text-center border-b md:border-b-0 md:border-r border-white/20">
                Manual Processing
              </div>
              <div className="bg-eagle-blue/20 p-4 font-bold text-center border-b md:border-b-0 md:border-r border-white/20">
                With Agency Eagle Eye
              </div>
              <div className="bg-white/10 p-4 font-bold text-center">
                Advantage
              </div>
            </div>

            {comparisonData.map((row, index) => {
              const ManualIcon = row.manualIcon;
              const EagleEyeIcon = row.eagleEyeIcon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-white/10 transform transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="p-4 font-semibold text-center border-b md:border-b-0 md:border-r border-white/20">
                    {row.task}
                  </div>
                  <div className="p-4 text-center border-b md:border-b-0 md:border-r border-white/20">
                    <div className="whitespace-pre-line text-sm">{row.manual}</div>
                  </div>
                  <div className="p-4 text-center border-b md:border-b-0 md:border-r border-white/20">
                    <div className="whitespace-pre-line text-sm">{row.eagleEye}</div>
                  </div>
                  <div className="p-4 text-center">
                    <EagleEyeIcon className="text-green-500 mx-auto" size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </GlowingCard>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default CompetitorComparison;
