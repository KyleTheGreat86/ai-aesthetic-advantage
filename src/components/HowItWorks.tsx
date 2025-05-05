
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: 1,
    title: "AI Captures Leads in 30 Seconds",
    details: [
      "Texts/calls every inquiry instantly",
      "No more 24-hour delays on responses",
      "Available 24/7, never misses a potential patient",
    ],
    iconPath: "M5 13l4 4L19 7",
    iconColor: "text-eagle-blue",
  },
  {
    number: 2,
    title: "Automated Review Generation",
    details: [
      "Post-appointment AI requests reviews",
      "25+ new Google reviews per month guaranteed",
      "Smart filtering prevents negative reviews from going public",
    ],
    iconPath: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
    iconColor: "text-eagle-orange",
  },
  {
    number: 3,
    title: "Conversion-Optimized Follow-Ups",
    details: [
      "Nurtures leads with audiology-specific scripts",
      "40% average booking rate",
      "Automatically fills cancellation slots",
    ],
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    iconColor: "text-eagle-blue",
  },
];

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The 3-Step AI System That Delivers Results
          </h2>
          <p className="text-xl text-eagle-orange mb-12">In Just 14 Days</p>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative p-6 rounded-lg transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  activeStep === index
                    ? "bg-white/10 shadow-lg scale-105"
                    : "bg-white/5 hover:bg-white/10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 ${
                    step.iconColor
                  }`}
                >
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <ul className="space-y-3 text-left">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <svg
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${step.iconColor}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d={step.iconPath}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {activeStep === index && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-eagle-blue to-eagle-orange"></div>
                )}
              </div>
            ))}
          </div>

          {/* Flow diagram connecting steps */}
          <div className="hidden md:block relative h-20 my-12">
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-eagle-blue to-eagle-orange transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/4 w-0.5 h-4 bg-eagle-blue transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-0.5 h-4 bg-eagle-orange transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-white/50 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div
            className={`mt-12 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <a href="#results" className="eagle-btn-primary">
              See Real Results
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;
