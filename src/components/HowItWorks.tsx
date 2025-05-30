
import { useState, useEffect, useRef } from "react";
import { Calendar, Server, CheckSquare, Rocket, BarChart3, User } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const steps = [
  {
    number: "1",
    title: "30-Minute Setup Call",
    details: "I personally walk through your treatments, pricing, and booking preferences. You provide the information, I handle all the technical setup.",
    icon: Calendar,
    iconColor: "text-eagle-blue",
    timeframe: "Today"
  },
  {
    number: "2",
    title: "Custom Configuration",
    details: "I build your AI employee with your specific knowledge base, integrate with your practice management system, and program your brand voice.",
    icon: Server,
    iconColor: "text-eagle-orange",
    timeframe: "24-48 Hours"
  },
  {
    number: "3",
    title: "Review & Go Live",
    details: "You approve the setup with a quick test call, then we activate your 24/7 coverage immediately.",
    icon: CheckSquare,
    iconColor: "text-eagle-blue",
    timeframe: "Within 48 Hours"
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
      className="py-24 relative overflow-hidden bg-black"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            From Demo to Live in 48 Hours <Rocket className="inline-block text-eagle-orange mb-1" size={30} />
          </h2>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute h-1 bg-gradient-to-r from-eagle-blue to-eagle-orange top-24 left-0 right-0"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                          STEP {step.number}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-sm text-eagle-gold font-semibold mb-4">({step.timeframe})</p>
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

          {/* Time requirement callout */}
          <div className="mt-16 max-w-2xl mx-auto bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-eagle-gold mb-2">
              Total Time Required From You: 45 Minutes
            </div>
            <p className="text-gray-300">
              That's it. I handle everything else while you focus on your patients.
            </p>
          </div>

          {/* Testimonial quote */}
          <div className="mt-12 max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="text-4xl font-serif text-eagle-orange opacity-60">"</div>
            <p className="text-xl italic mb-6 text-white">
              Kyle set up everything in 36 hours. By week 2, we had booked 8 additional consultations.
            </p>
            <div className="flex items-center justify-center">
              <User size={20} className="text-eagle-blue mr-2" />
              <span className="font-medium text-white">Dr. Amanda R., Beverly Hills Aesthetics</span>
            </div>
          </div>

          <div className="mt-12">
            <RainbowButton
              calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
              className="uppercase font-bold py-3 px-8"
            >
              Start Your 48-Hour Setup
            </RainbowButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;
