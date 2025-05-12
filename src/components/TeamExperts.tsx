
import { useRef, useState, useEffect, memo } from "react";
import { AnimatedTestimonialsDemo } from "./ui/animated-testimonials-demo";
import { EagleButton } from "./ui/eagle-button";

const TeamExperts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '100px' // Load before fully visible
      }
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
      id="team"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet The Team
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Led by our founder Kyle Holland, we bring together expertise in AI, automation, and intellectual property law to create transformative solutions for legal professionals worldwide.
          </p>
          
          {/* Schedule Demo button */}
          <div className="inline-block mb-10 rounded-lg">
            <a
              href="https://calendly.com/weareagencyeagleeye/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EagleButton>SCHEDULE YOUR AI DEMO</EagleButton>
            </a>
          </div>
          
          {/* Only load testimonials when section is visible */}
          {isVisible && (
            <div
              className="transition-all duration-700 transform opacity-100 translate-y-0"
            >
              <AnimatedTestimonialsDemo />
            </div>
          )}
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-eagle-dark/0 to-eagle-dark/50 pointer-events-none"></div>
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-eagle-blue/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-24 h-24 bg-eagle-orange/5 rounded-full animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default memo(TeamExperts);
