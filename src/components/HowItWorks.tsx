
import { useState, useEffect, useRef } from "react";
import { Check, Clock, TrendingUp, Eye, BarChart3, MessageSquare } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";
import { GlowingBox } from "./ui/glowing-box";

const steps = [
  {
    number: "01",
    title: "Quick 15-Minute Setup",
    details: "We connect to your customer database and customize your review request templates that match your brand voice.",
    icon: Clock,
    iconColor: "text-eagle-blue",
  },
  {
    number: "02",
    title: "Smart Review Collection Begins",
    details: "Our AI timing system identifies the perfect moment to request reviews from satisfied customers, using proven psychological triggers.",
    icon: MessageSquare,
    iconColor: "text-eagle-orange",
  },
  {
    number: "03",
    title: "Review Growth & Leverage",
    details: "As your ratings climb and review count grows, we help you showcase these assets across your website, social media, and Google Business Profile.",
    icon: TrendingUp,
    iconColor: "text-eagle-blue",
  },
  {
    number: "04",
    title: "Analytics & Optimization",
    details: "Track your growth against local competitors with our dashboard, while our system continuously improves based on response patterns.",
    icon: BarChart3,
    iconColor: "text-eagle-orange",
  }
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
            How Our Google Review System Works <Eye className="inline-block text-eagle-blue mb-1" size={30} />
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <GlowingBox
                key={step.number}
                className={`rounded-lg transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  activeStep === index
                    ? "scale-105"
                    : ""
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div 
                  className={`relative p-8 rounded-lg transition-all duration-500 ${
                    activeStep === index
                      ? "bg-white/10 shadow-lg"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${index % 2 === 1 ? 'text-eagle-orange' : 'text-eagle-blue'}`}>
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-6">{step.details}</p>
                  
                  {index === 0 && (
                    <a href="#pricing" className="inline-block">
                      <EagleButton size="sm">
                        Start Free
                      </EagleButton>
                    </a>
                  )}
                  
                  {activeStep === index && (
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-eagle-blue to-eagle-orange"></div>
                  )}
                </div>
              </GlowingBox>
            ))}
          </div>

          {/* Flow diagram connecting steps - simplify for 4 steps */}
          <div className="hidden lg:block relative h-20 my-12">
            <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-eagle-blue via-eagle-orange to-eagle-blue transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-[12.5%] w-0.5 h-4 bg-eagle-blue transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-[37.5%] w-0.5 h-4 bg-eagle-orange transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-[62.5%] w-0.5 h-4 bg-eagle-blue transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-[12.5%] w-0.5 h-4 bg-eagle-orange transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;
