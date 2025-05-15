
import { useState, useEffect, useRef } from "react";
import { Calendar, Server, CheckSquare, Rocket, BarChart3, User } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";

const steps = [
  {
    number: "1-5",
    title: "Discovery & Planning",
    details: "Discovery call + workflow customization tailored to your brokerage's unique process.",
    icon: Calendar,
    iconColor: "text-eagle-blue",
  },
  {
    number: "6-12",
    title: "Build & Integrate",
    details: "Build + integrate with your tools (Gmail, Google Drive, CRM, etc.)",
    icon: Server,
    iconColor: "text-eagle-orange",
  },
  {
    number: "13-17",
    title: "Test & Refine",
    details: "Test + refine alerts/notifications for your specific market and deal types.",
    icon: CheckSquare,
    iconColor: "text-eagle-blue",
  },
  {
    number: "18-20",
    title: "Launch & Onboard",
    details: "Train your team + launch your AI-powered brokerage system.",
    icon: Rocket,
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
      }, 4000);

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
            From Zero to AI-Powered in 20 Days <Rocket className="inline-block text-eagle-orange mb-1" size={30} />
          </h2>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute h-1 bg-gradient-to-r from-eagle-blue to-eagle-orange top-24 left-0 right-0"></div>
            
            {/* Day markers on line */}
            <div className="hidden md:flex justify-between absolute top-[90px] left-0 right-0 px-8">
              <div className="text-sm text-eagle-blue font-medium">Day 1</div>
              <div className="text-sm text-eagle-orange font-medium">Day 20</div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
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
                    onClick={() => setActiveStep(index)}
                  >
                    <div 
                      className={`relative p-8 rounded-lg transition-all duration-500 bg-white/5 hover:bg-white/10 cursor-pointer ${
                        activeStep === index
                          ? "border border-white/20 shadow-lg"
                          : "border border-white/5"
                      }`}
                    >
                      <div className="mb-4 flex justify-between items-center">
                        <Icon size={28} className={step.iconColor} />
                        <span className={`text-lg font-bold ${index % 2 === 1 ? 'text-eagle-orange' : 'text-eagle-blue'}`}>
                          DAY {step.number}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6">{step.details}</p>
                      
                      {activeStep === index && (
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-eagle-blue to-eagle-orange"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial quote */}
          <div className="mt-16 max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="text-4xl font-serif text-eagle-orange opacity-60">"</div>
            <p className="text-xl italic mb-6">
              We implemented Eagle Eye in 18 days. By Month 2, it paid for itself 10x over.
            </p>
            <div className="flex items-center justify-center">
              <User size={20} className="text-eagle-blue mr-2" />
              <span className="font-medium">Mark R., Dallas CRE Brokerage</span>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://calendly.com/weareagencyeagleeye/30min" target="_blank" rel="noopener noreferrer">
              <EagleButton>
                Start Your 20-Day Transformation
              </EagleButton>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;
