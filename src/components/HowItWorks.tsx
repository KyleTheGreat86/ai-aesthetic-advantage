
import { useState, useEffect, useRef } from "react";
import { Check, Clock, TrendingUp, Eye } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";

const steps = [
  {
    number: "01",
    title: "Onboard in Minutes",
    details: "Onboarding couldn't be easier. We built Eagle Eye with owners who aren't tech savvy in mind.",
    icon: Clock,
    iconColor: "text-eagle-blue",
  },
  {
    number: "02",
    title: "Start Getting Reviews For Free",
    details: "30 days after signing up you will be billed $149 for 4-5 star reviews we have gotten you! Building your brand month by month.",
    icon: Check,
    iconColor: "text-eagle-orange",
  },
  {
    number: "03",
    title: "Outrank Your Competitors",
    details: "While the reviews start pouring in so will inbound calls and leads from Google.",
    icon: TrendingUp,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            How It Works <Eye className="inline-block text-eagle-blue mb-1" size={30} />
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative p-8 rounded-lg transition-all duration-500 transform ${
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
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${index === 1 ? 'text-eagle-orange' : 'text-eagle-blue'}`}>
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 mb-6">{step.details}</p>
                
                <a href="#pricing" className="inline-block">
                  <EagleButton 
                    size="sm" 
                    className={index === 1 ? "bg-[linear-gradient(var(--eagle-button-bg,#FF8024),var(--eagle-button-bg,#FF8024)),linear-gradient(var(--eagle-button-bg,#FF8024)_50%,rgba(255,128,36,0.6)_80%,rgba(255,128,36,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]" : ""}
                  >
                    Start Free
                  </EagleButton>
                </a>
                
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
        </div>
      </div>

      <div className="absolute inset-0 bg-grid pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;
