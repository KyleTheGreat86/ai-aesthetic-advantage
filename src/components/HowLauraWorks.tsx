
import { useState, useEffect, useRef } from "react";
import { Calendar, Phone, TrendingUp, Zap, Clock, Target } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const steps = [
  {
    number: "1",
    title: "Set Up in 24 Hours",
    details: "We configure Laura with your property portfolio, pricing, and Scottish charm. She'll know your business better than your best agent.",
    icon: Calendar,
    iconColor: "text-amber-400",
    timeframe: "Today",
    accent: "thistle"
  },
  {
    number: "2", 
    title: "Laura Handles Calls 24/7",
    details: "From Glaswegian accents to Highland dialects, Laura charms every caller and books viewings while you sleep.",
    icon: Phone,
    iconColor: "text-purple-400",
    timeframe: "Always On",
    accent: "tartan"
  },
  {
    number: "3",
    title: "Watch Leads Roll In",
    details: "Track your bookings, qualified leads, and revenue growth with our Scottish-designed dashboard.",
    icon: TrendingUp,
    iconColor: "text-amber-400", 
    timeframe: "24/7 Results",
    accent: "castle"
  }
];

const HowLauraWorks = () => {
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
      id="how-laura-works"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Scottish mist background */}
      <div className="absolute inset-0 bg-tartan-pattern opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Oor Laura</span> Works Her Magic
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From Glasgow tech to Highland efficiency - see how Laura transforms your estate agency in just 3 steps
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Highland timeline */}
            <div className="hidden md:block absolute h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400 top-24 left-0 right-0 rounded-full"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className={`rounded-xl transition-all duration-700 transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    } ${
                      activeStep === index
                        ? "scale-105"
                        : ""
                    }`}
                    style={{
                      transitionDelay: `${index * 300}ms`,
                    }}
                    onClick={() => setActiveStep(index)}
                  >
                    <div 
                      className={`relative p-8 rounded-xl transition-all duration-500 bg-slate-800/50 hover:bg-slate-700/50 cursor-pointer border backdrop-blur-sm ${
                        activeStep === index
                          ? "border-amber-400/50 shadow-lg shadow-amber-400/20 hover-tartan-glow"
                          : "border-slate-700/50 hover:border-slate-600/50"
                      }`}
                    >
                      {/* Scottish accent decoration */}
                      <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-sm">{step.number}</span>
                      </div>
                      
                      <div className="mb-6 flex justify-between items-center">
                        <Icon size={32} className={`${step.iconColor} thistle-shadow`} />
                        <div className="text-right">
                          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Step {step.number}</span>
                          <span className="text-xs text-slate-400">({step.timeframe})</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{step.details}</p>
                      
                      {/* Active step indicator with Scottish flair */}
                      {activeStep === index && (
                        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400 rounded-full animate-tartan-glow"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scottish efficiency callout */}
          <div className="mt-20 max-w-3xl mx-auto bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-amber-400/20">
            <div className="flex items-center justify-center mb-4">
              <Clock className="text-amber-400 mr-3" size={28} />
              <span className="text-2xl font-bold text-amber-400">Total Setup Time: 24 Hours</span>
            </div>
            <p className="text-slate-300 text-lg">
              That's it. While other agencies struggle with months of setup, Laura's ready to charm your Scottish buyers tomorrow.
            </p>
          </div>

          {/* Success story with Highland charm */}
          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-purple-900/20 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-purple-400/20">
            <div className="text-4xl font-serif text-amber-400 opacity-60 mb-4">"</div>
            <p className="text-xl italic mb-6 text-white leading-relaxed">
              Laura's been pure magic for oor business. She books viewings at 2am when the competition's sleeping, 
              and clients think she's the nicest receptionist we've ever had!
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center mr-4">
                <Target size={20} className="text-slate-900" />
              </div>
              <div className="text-left">
                <span className="font-bold text-white block">Jamie MacLeod</span>
                <span className="text-slate-400 text-sm">Highland Properties, Edinburgh</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <RainbowButton
              calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
              className="font-bold text-lg py-4 px-10 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 hover:scale-105 transition-all duration-300"
            >
              <Zap className="mr-2" size={20} />
              Get Laura Working for You in 24 Hours
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowLauraWorks;
