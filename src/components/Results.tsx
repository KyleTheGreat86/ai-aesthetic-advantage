
import { useState, useEffect, useRef } from "react";
import { EagleButton } from "./ui/eagle-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import AnimatedTextCycle from "./ui/animated-text-cycle";

const Results = () => {
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

  const rotatingWords = [
    "Market Leader",
    "Tech-Driven Powerhouse",
    "AI-Enabled Enterprise",
    "Future-Ready Firm",
    "Automated Success Story",
    "Scalable Operation",
    "Data-Driven Dealmaker",
    "Streamlined Machine",
    "High-Performance Team",
    "Next-Gen Brokerage"
  ];

  const personalRotatingWords = [
    "Life",
    "Business",
    "Legacy",
    "Future",
    "Career",
    "Workflow",
    "Wealth",
    "Freedom"
  ];

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2 sm:px-0">
            Ready to Transform Your Brokerage into a{" "}
            <span className="inline-block">
              <AnimatedTextCycle 
                words={rotatingWords} 
                interval={3000} 
                className="text-eagle-blue"
                suffix="?" 
              />
            </span>
          </h2>
        </div>
        
        <div className="mt-10 sm:mt-16 flex justify-center px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-3xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-eagle-orange">6.2x</h3>
                <p className="text-gray-300 text-sm sm:text-base">Average ROI</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-eagle-blue">78%</h3>
                <p className="text-gray-300 text-sm sm:text-base">Reduction in Admin Work</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-eagle-orange">23.4%</h3>
                <p className="text-gray-300 text-sm sm:text-base">Increased Deal Closure</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
                <EagleButton className="uppercase font-bold w-48 max-w-full py-3">
                  See How We Can Help
                </EagleButton>
              </a>
            </div>
          </div>
        </div>

        {/* Second animated text section */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to Transform Your{" "}
            <span className="inline-block">
              <AnimatedTextCycle 
                words={personalRotatingWords} 
                interval={3000} 
                className="text-eagle-orange"
                suffix="?"
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl mt-3">Proven ROI Within 60 Days</p>
          
          <div className="mt-6 sm:mt-8 text-center">
            <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
              <EagleButton className="uppercase font-bold w-48 max-w-full py-3">
                Free Consultation
              </EagleButton>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Results;
