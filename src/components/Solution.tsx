
import { useState, useEffect, useRef, memo } from "react";
import { Star } from "lucide-react";

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Google Reviews: The Numbers That Matter";
  const typingSpeed = 50;

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
      let i = 0;
      const typeInterval = setInterval(() => {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(typeInterval);
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    }
  }, [isVisible]);

  const reviewStats = [
    { stat: "87%", description: "of consumers read online reviews for local businesses in 2024" },
    { stat: "28%", description: "more revenue for businesses with 4.5+ stars vs 4.0 stars" },
    { stat: "50%", description: "higher rankings for local businesses with 50+ reviews" },
    { stat: "70%", description: "of customers will travel farther to businesses with better reviews" },
    { stat: "5-9%", description: "increase in conversions for every 0.1 increase in star rating" },
  ];

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark to-eagle-dark/90"
    >
      <div className="absolute inset-0 bg-grid"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-4xl md:text-5xl lg:text-6xl gradient-text-blue block mt-2 perspective-card">
                The Google Review Flywheel Effect
              </span>
            </h2>
          </div>

          <div className="h-8 my-8">
            <p className="text-xl md:text-2xl font-medium">{typedText}<span className="animate-pulse">|</span></p>
          </div>

          <div className={`mt-12 grid md:grid-cols-5 gap-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 transform delay-300`}>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-eagle-blue" fill="currentColor" />
                <Star className="h-6 w-6 text-eagle-blue" fill="currentColor" />
              </div>
              <p className="font-semibold text-lg">More Reviews</p>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-eagle-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center">
              <p className="font-semibold text-lg mb-2">Higher Rankings</p>
              <svg className="w-6 h-6 text-eagle-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-eagle-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center">
              <p className="font-semibold text-lg">More Customers</p>
              <svg className="w-6 h-6 text-eagle-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewStats.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <h3 className="text-3xl font-bold text-eagle-blue mb-2">{item.stat}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-sm text-gray-400 italic">
            Source: BrightLocal Local Consumer Survey 2024
          </div>

          <div
            className={`mt-12 transition-all duration-700 transform delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a href="#how-it-works" className="eagle-btn-primary inline-flex items-center group">
              <span>See How It Works</span>
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-eagle-blue/5 rounded-full blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-64 h-64 bg-eagle-orange/5 rounded-full blur-3xl -bottom-32 -right-32"></div>
      </div>
    </section>
  );
};

export default memo(Solution);
