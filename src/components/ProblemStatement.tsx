
import { useState, useEffect, useRef, memo } from "react";
import { Briefcase, File, Clock, Users, BarChart } from "lucide-react";

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [statCounter, setStatCounter] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const problems = [
    {
      title: "Leads Falling Through Cracks",
      description: "47% of CRE brokers miss off-market deals because they're buried in spreadsheets.",
      icon: Briefcase,
      color: "text-red-400"
    },
    {
      title: "Document Chaos",
      description: "Chasing T-12s, rent rolls, and title reports wastes 15+ hours/month per broker.",
      icon: File,
      color: "text-amber-400"
    },
    {
      title: "Reactive, Not Strategic",
      description: "Your team spends 60% of their time on admin not building relationships or closing.",
      icon: Clock,
      color: "text-eagle-orange"
    },
    {
      title: "Missed Buyer/Seller Matches",
      description: "Your CRM is full of dormant clients who'd transact if nurtured properly.",
      icon: Users,
      color: "text-eagle-blue"
    }
  ];

  const lostCommissions = ["$270K", "$310K", "$290K", "$350K"];

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

  // Rotate through statistics
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setStatCounter((prev) => (prev + 1) % lostCommissions.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, lostCommissions.length]);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manual Processes Are Costing Your Brokerage <span className="text-red-500">$1M+ in Lost Commissions</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 transform transition-all duration-500 ${
                  animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } hover:border-white/20 hover:bg-white/10 transition-all`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-full ${problem.color} bg-white/10`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{problem.title}</h3>
                </div>
                <p className="text-gray-300 italic">{problem.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-red-500/30 p-8 flex flex-col md:flex-row items-center justify-center">
            <BarChart size={48} className="text-red-500 mr-4 mb-4 md:mb-0" />
            <p className="text-xl font-semibold">
              The average CRE broker loses <span className="text-red-500 text-2xl font-bold">{lostCommissions[statCounter]}/year</span> in commissions due to inefficiencies.
            </p>
          </div>
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

export default memo(ProblemStatement);
