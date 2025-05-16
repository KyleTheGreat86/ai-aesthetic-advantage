
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

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Brokerage into a{" "}
            <AnimatedTextCycle 
              words={rotatingWords} 
              interval={3000} 
              className="text-eagle-blue"
            />?
          </h2>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-eagle-orange">6.2x</h3>
                <p className="text-gray-300">Average ROI</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-eagle-blue">78%</h3>
                <p className="text-gray-300">Reduction in Admin Work</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-eagle-orange">23.4%</h3>
                <p className="text-gray-300">Increased Deal Closure</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
                <EagleButton className="uppercase font-bold container">
                  See How We Can Help You
                </EagleButton>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Results;
