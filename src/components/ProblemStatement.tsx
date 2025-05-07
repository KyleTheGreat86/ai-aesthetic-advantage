
import { useState, useEffect, useRef, memo } from "react";
import { X, Eye, Shield, Clock } from "lucide-react";

const ProblemItem = memo(({ number, problem, detail, delay, isVisible }: {
  number: number;
  problem: string;
  detail: string;
  delay: number;
  isVisible: boolean;
}) => {
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
});

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

  // Dollar amount rotation effect - optimized with reduced interval checks
  useEffect(() => {
    if (!isVisible) return;
    
    const amounts = ["$5,000+", "$6,000+", "$7,000+", "$8,000+", "$9,000+", "$10,000+", "$15,000+"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % amounts.length;
      setDollarAmount(amounts[index]);
    }, 3000); // Changed from 2000ms to 3000ms to reduce re-renders
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const problemItems = [
    {
      number: 1,
      problem: "Missed Lead Calls",
      detail: "Costing $4,500+ per lost booking",
      delay: 0
    },
    {
      number: 2,
      problem: "Too Few Google Reviews",
      detail: "Making patients choose competitors",
      delay: 200
    },
    {
      number: 3,
      problem: "Unfilled Cancellations",
      detail: "Running at just 65% capacity",
      delay: 400
    }
  ];

  const benefits = [
    {
      title: "Sharp Focus on Reviews Makes Your Business The Clear Choice",
      description: "With the best reviews you become the "Safe" option. Not only will more people see your business at the top of Google, but more people will pick your business.",
      icon: Eye,
      delay: 0
    },
    {
      title: "Save Money On Ads",
      description: "Why pay $10-$50 per click on Google when you can invest in Eagle Eye and start getting more leads from Google organically.",
      icon: Shield,
      delay: 200
    },
    {
      title: "Save 10+ Hours/month",
      description: "You're a busy business owner, and your time is too valuable to be manually requesting, responding, or repurposing reviews. Save time while making sure these important tasks get done.",
      icon: Clock,
      delay: 400
    }
  ];

  return (
    <>
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
                <span className="text-eagle-orange font-bold animate-pulse-slow">{dollarAmount}</span>
              </span>
              <span className="ml-2">Monthly </span>
              Due To:
            </h2>

            <div className="mt-12 space-y-8">
              {problemItems.map(item => (
                <ProblemItem
                  key={item.number}
                  number={item.number}
                  problem={item.problem}
                  detail={item.detail}
                  delay={item.delay}
                  isVisible={animationStarted}
                />
              ))}
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

      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text-blue">Eagle Eye</span> Benefits
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 relative transform transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${benefit.delay + 200}ms` }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-eagle-blue to-eagle-orange opacity-10 rounded-full -translate-y-1/4 translate-x-1/4"></div>
                  
                  <benefit.icon size={32} className={`mb-4 ${index === 0 ? 'text-eagle-blue' : index === 1 ? 'text-eagle-orange' : 'text-eagle-blue'}`} />
                  
                  <h3 className="text-xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      </section>
    </>
  );
};

export default memo(ProblemStatement);
