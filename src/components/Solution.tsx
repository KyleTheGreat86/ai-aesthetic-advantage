
import { useState, useEffect, useRef, memo } from "react";

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "AI-Powered. Fully Managed. $5,200+ Net Profit.";
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
              Introducing <br />
              <span className="text-4xl md:text-5xl lg:text-6xl gradient-text-blue block mt-2 perspective-card">
                The Audiology Growth System™
              </span>
            </h2>
          </div>

          <div className="h-8 my-8">
            <p className="text-xl md:text-2xl font-medium">{typedText}<span className="animate-pulse">|</span></p>
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
