
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [dollarAmount, setDollarAmount] = useState("$5,000+");
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
    if (isVisible && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [isVisible, animationStarted]);

  // Dollar amount rotation effect
  useEffect(() => {
    if (!isVisible) return;
    
    const amounts = ["$5,000+", "$6,000+", "$7,000+", "$8,000+", "$9,000+", "$10,000+", "$15,000+"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % amounts.length;
      setDollarAmount(amounts[index]);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Is Your Audiology Clinic Losing
            <span
              className={`gradient-text-orange relative ml-2 inline-block ${
                animationStarted ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="absolute -top-4 text-sm font-normal text-white opacity-70">
                Monthly
              </span>
              <span className="animate-pulse-slow">{dollarAmount}</span>
            </span>
            Due To:
          </h2>

          <div className="mt-12 space-y-8">
            <ProblemItem
              number={1}
              problem="Missed Lead Calls"
              detail="Costing $4,500+ per lost booking"
              delay={0}
              isVisible={animationStarted}
            />
            <ProblemItem
              number={2}
              problem="Too Few Google Reviews"
              detail="Making patients choose competitors"
              delay={200}
              isVisible={animationStarted}
            />
            <ProblemItem
              number={3}
              problem="Unfilled Cancellations"
              detail="Running at just 65% capacity"
              delay={400}
              isVisible={animationStarted}
            />
          </div>

          <p
            className={`mt-12 text-xl ${
              animationStarted ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            style={{ transitionDelay: "800ms" }}
          >
            Most audiology clinics lose{" "}
            <span className="text-eagle-orange font-semibold">
              40% of potential revenue
            </span>{" "}
            to these fixable problems.
          </p>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-red-500/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[60%] right-[10%] w-32 h-32 bg-red-500/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[40%] left-[30%] w-40 h-40 bg-red-500/5 rounded-full animate-pulse-slow"></div>
      </div>
    </section>
  );
};

interface ProblemItemProps {
  number: number;
  problem: string;
  detail: string;
  delay: number;
  isVisible: boolean;
}

const ProblemItem = ({ number, problem, detail, delay, isVisible }: ProblemItemProps) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-5 flex items-center gap-4 transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
          <X size={24} className="text-red-500" />
        </div>
      </div>
      <div className="flex-grow text-left">
        <h3 className="text-xl font-medium">{problem}</h3>
        <p className="text-gray-400">{detail}</p>
      </div>
    </div>
  );
};

export default ProblemStatement;
