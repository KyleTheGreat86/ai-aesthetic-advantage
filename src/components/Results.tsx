
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Star, TrendingUp } from "lucide-react";
import { AudiologistLogosDemo } from "./ui/audiologist-logos-demo";
import { EagleButton } from "./ui/eagle-button";

const resultsData = [
  {
    clinic: "Dryer Vent Superheros of PBC",
    name: "Daniel",
    reviews: {
      before: 40,
      after: 145
    },
    timeframe: "4 months",
    percentage: 263
  },
  {
    clinic: "30A Blaze Beach Bonfires",
    name: "Davin",
    reviews: {
      before: 23,
      after: 685
    },
    timeframe: "22 months",
    percentage: 2878
  },
  {
    clinic: "Region Scoopers",
    name: "John",
    reviews: {
      before: 157,
      after: 288
    },
    timeframe: "2 months",
    percentage: 83
  },
  {
    clinic: "Junk Punks Tampa",
    name: "Logan S.",
    reviews: {
      before: 127,
      after: 357
    },
    timeframe: "4 months",
    percentage: 181
  },
  {
    clinic: "BeAbstrakt Photography",
    name: "Jarell",
    reviews: {
      before: 55,
      after: 122
    },
    timeframe: "1 month",
    percentage: 121
  },
  {
    clinic: "DDS Pediatric Dentist",
    name: "Dr. Lawrence",
    reviews: {
      before: 39,
      after: 428
    },
    timeframe: "2 months",
    percentage: 997
  }
];

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);
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
    if (isVisible) {
      const timer = setTimeout(() => setAnimateNumbers(true), 300);
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
            Our Clients <span className="text-eagle-blue">See</span> Remarkable Results
          </h2>
          
          {/* Testimonial logos animation section */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <AudiologistLogosDemo />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {resultsData.map((item, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.clinic}</p>
                  </div>
                  <div className="bg-eagle-blue/20 rounded-full px-3 py-1 flex items-center">
                    <TrendingUp size={14} className="text-eagle-blue mr-1" />
                    <span className="text-eagle-blue font-bold">+{item.percentage}%</span>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-gray-400">{item.reviews.before} →</span>
                  <span className="text-2xl font-bold text-white">
                    {animateNumbers ? item.reviews.after : item.reviews.before}
                  </span>
                  <div className="flex ml-2">
                    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
                    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
                    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
                    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
                    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">
                  Reviews in <span className="text-eagle-blue font-medium">{item.timeframe}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#testimonials" className="inline-flex items-center text-eagle-blue hover:text-eagle-blue/80 transition-colors">
              <span className="font-semibold">See 50+ Other Happy Customers</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          <div
            className={`mt-16 p-6 bg-white/5 rounded-lg border border-white/10 transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative mb-4 md:mb-0 md:mr-8">
                <div className="w-16 h-16 rounded-full bg-eagle-blue/20 flex items-center justify-center text-2xl">
                  "
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-lg italic">
                  "After using Eagle Eye we are out ranking businesses that have been in our area for <span className="text-eagle-orange font-semibold">10+ years!</span>"
                </p>
                <p className="mt-2 text-gray-400">
                  – Daniel Plourde, Dryer Vent Superheros PBC
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pricing"
              className="inline-block"
            >
              <EagleButton 
                className={`uppercase font-bold transform transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                START FREE
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
