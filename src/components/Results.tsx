
import { useState, useEffect, useRef, memo } from "react";
import { ArrowRight } from "lucide-react";
import { AudiologistLogosDemo } from "./ui/audiologist-logos-demo";
import { EagleButton } from "./ui/eagle-button";
import ResultCard from "./results/ResultCard";
import { resultsData } from "./results/resultsData";
import TestimonialsSection from "./results/TestimonialsSection";

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // More efficient intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '100px' } // Lower threshold and bigger rootMargin for earlier loading
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      // Delay animations to avoid layout thrashing
      const timer = setTimeout(() => setAnimateNumbers(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Real Results From <span className="text-eagle-blue">Real Local Businesses</span>
          </h2>
          
          {/* Only render when visible */}
          {isVisible && (
            <div className="transition-opacity duration-300 opacity-100">
              <AudiologistLogosDemo />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {resultsData.map((item, index) => (
              <ResultCard 
                key={index}
                item={item} 
                index={index} 
                isVisible={isVisible} 
                animateNumbers={animateNumbers} 
              />
            ))}
          </div>

          <div className="text-center mt-4 text-sm text-gray-400 italic">
            *Results vary by industry, location, and business type. On average, our clients see a 210% increase in Google reviews within the first 90 days.
          </div>

          <div className="text-center mt-10">
            <a href="#testimonials" className="inline-flex items-center text-eagle-blue hover:text-eagle-blue/80 transition-colors">
              <span className="font-semibold">See 50+ Other Happy Customers</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          <TestimonialsSection isVisible={isVisible} />

          <div className="mt-12 text-center">
            <a
              href="#pricing"
              className="inline-block"
            >
              <EagleButton 
                className={`uppercase font-bold transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                START YOUR FREE 30-DAY TRIAL
              </EagleButton>
            </a>
          </div>
        </div>
      </div>

      {/* Simplified background */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default memo(Results);
