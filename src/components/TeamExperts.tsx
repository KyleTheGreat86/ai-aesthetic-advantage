
import { useRef, useState, useEffect } from "react";
import { AnimatedTestimonialsDemo } from "./ui/animated-testimonials-demo";

const TeamExperts = () => {
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

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our Team of Experts
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Our team of dedicated specialists brings decades of combined experience in audiology practice management and growth strategies.
          </p>
          
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <AnimatedTestimonialsDemo />
          </div>
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

export default TeamExperts;
