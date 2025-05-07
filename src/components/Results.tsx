
import { useState, useEffect, useRef, memo } from "react";
import { ArrowRight, Check, Star, TrendingUp } from "lucide-react";
import { AudiologistLogosDemo } from "./ui/audiologist-logos-demo";
import { EagleButton } from "./ui/eagle-button";

// Pre-defined data to avoid recalculation
const resultsData = [
  {
    businessType: "Home Services",
    location: "Palm Beach, FL",
    name: "Daniel P.",
    reviews: {
      before: 40,
      after: 145
    },
    timeframe: "4 months",
    percentage: 263
  },
  {
    businessType: "Recreation Services",
    location: "Florida",
    name: "Davin K.",
    reviews: {
      before: 23,
      after: 685
    },
    timeframe: "22 months",
    percentage: 2878
  },
  {
    businessType: "Local Service Provider",
    location: "Michigan",
    name: "John M.",
    reviews: {
      before: 157,
      after: 288
    },
    timeframe: "2 months",
    percentage: 83
  },
  {
    businessType: "Junk Removal",
    location: "Tampa, FL",
    name: "Logan S.",
    reviews: {
      before: 127,
      after: 357
    },
    timeframe: "4 months",
    percentage: 181
  },
  {
    businessType: "Photography Studio",
    location: "New York",
    name: "Jarell T.",
    reviews: {
      before: 55,
      after: 122
    },
    timeframe: "1 month",
    percentage: 121
  },
  {
    businessType: "Dental Clinic",
    location: "Chicago",
    name: "Dr. Lawrence",
    reviews: {
      before: 39,
      after: 428
    },
    timeframe: "2 months",
    percentage: 997
  }
];

// Memoized stars component to avoid rerendering
const FiveStars = memo(() => (
  <div className="flex ml-2">
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
    <Star size={14} className="text-eagle-orange" fill="#FF8024" />
  </div>
));

FiveStars.displayName = "FiveStars";

// Memoized result card component
const ResultCard = memo(({ item, index, isVisible, animateNumbers }) => (
  <div 
    className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
    style={{ transitionDelay: `${Math.min(index * 50, 500)}ms` }}
  >
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-gray-400 text-sm">{item.businessType}, {item.location}</p>
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
      <FiveStars />
    </div>
    
    <p className="text-gray-300 text-sm">
      Google reviews in <span className="text-eagle-blue font-medium">{item.timeframe}</span>
    </p>
  </div>
));

ResultCard.displayName = "ResultCard";

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

  // Wrap expensive parts in useMemo
  const testimonialsSection = isVisible ? (
    <div
      className="mt-16 p-6 bg-white/5 rounded-lg border border-white/10 transition-opacity duration-300 opacity-100"
      style={{ transitionDelay: "500ms" }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative mb-4 md:mb-0 md:mr-8">
          <div className="w-16 h-16 rounded-full bg-eagle-blue/20 flex items-center justify-center text-2xl">
            "
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-lg italic">
            "After using Eagle Eye we are outranking businesses that have been in our area for <span className="text-eagle-orange font-semibold">10+ years!</span> The Google reviews we're getting are bringing in more calls every day."
          </p>
          <p className="mt-2 text-gray-400">
            – Daniel Plourde, Dryer Vent Superheros PBC
          </p>
        </div>
      </div>
    </div>
  ) : null;

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

          {testimonialsSection}

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
