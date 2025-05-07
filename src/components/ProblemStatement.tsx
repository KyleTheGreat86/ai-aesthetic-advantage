
import { useState, useEffect, useRef, memo } from "react";
import ProblemSection from "./problem-statement/ProblemSection";
import BenefitsSection from "./problem-statement/BenefitsSection";
import { problemItems, benefits } from "./problem-statement/problemStatementData";

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [dollarAmount, setDollarAmount] = useState("$5,000+");
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

  useEffect(() => {
    if (isVisible && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [isVisible, animationStarted]);

  // Dollar amount rotation effect - optimized with reduced interval checks
  useEffect(() => {
    if (!isVisible) return;
    
    const amounts = ["$5,000+", "$6,000+", "$7,000+", "$8,000+", "$9,000+", "$10,000+", "$15,000+"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % amounts.length;
      setDollarAmount(amounts[index]);
    }, 3000); // Changed from 2000ms to 3000ms to reduce re-renders
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <>
      <section
        ref={sectionRef}
        id="problem"
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent"></div>
        <div className="section-container relative z-10">
          <ProblemSection 
            problemItems={problemItems} 
            animationStarted={animationStarted} 
            dollarAmount={dollarAmount}
          />
        </div>

        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-red-500/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-[60%] right-[10%] w-32 h-32 bg-red-500/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-[40%] left-[30%] w-40 h-40 bg-red-500/5 rounded-full animate-pulse-slow"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        <div className="section-container relative z-10">
          <BenefitsSection benefits={benefits} isVisible={isVisible} />
        </div>

        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      </section>
    </>
  );
};

export default memo(ProblemStatement);
