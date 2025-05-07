
import { useState, useEffect, useRef, memo } from "react";
import ProblemSection from "./problem-statement/ProblemSection";
import BenefitsSection from "./problem-statement/BenefitsSection";
import { problemItems, benefits } from "./problem-statement/problemStatementData";

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [dollarAmount, setDollarAmount] = useState("52%");
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

  // Stats rotation effect
  useEffect(() => {
    if (!isVisible) return;
    
    const stats = ["52%", "93%", "68%", "75%", "5-9%"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % stats.length;
      setDollarAmount(stats[index]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  // Create custom problem items for Google Reviews focus
  const googleReviewProblems = [
    {
      title: "Low Review Count",
      description: "93% of consumers use reviews to decide which local business to use",
      icon: "eye"
    },
    {
      title: "Low Star Rating",
      description: "Businesses with 4.5+ stars get 52% more clicks than those with 4.0 stars",
      icon: "star"
    },
    {
      title: "Missing Local SEO",
      description: "Each 0.1 star increase brings 5-9% more website visitors",
      icon: "trending-up"
    },
    {
      title: "Lost Customers",
      description: "68% of customers won't consider businesses with fewer than 4 stars",
      icon: "user-minus"
    },
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is Your Local Business Missing Out On <span className="text-eagle-orange">{dollarAmount}</span> Of Potential Customers?
            </h2>
            <p className="text-xl">The Hard Truth About Google Reviews:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {googleReviewProblems.map((problem, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-500 ${
                  animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-eagle-blue">{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-xl font-semibold">
              Google Reviews are the most <span className="text-eagle-orange">cost-effective way</span> to grow your local business.
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
              The Eagle Eye Google Review Advantage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div 
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="text-xl font-bold mb-4">Become the #1 Choice in Your Local Market</h3>
                <p className="text-gray-300">With more authentic 5-star reviews, you become the obvious choice. Studies show businesses in the top 3 Google results capture 75% of all clicks.</p>
              </div>
              
              <div 
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <h3 className="text-xl font-bold mb-4">Generate Organic Leads 24/7</h3>
                <p className="text-gray-300">Each review is a permanent marketing asset working for you - unlike ads that stop the moment you stop paying. Our clients see 3X ROI within 90 days.</p>
              </div>
              
              <div 
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <h3 className="text-xl font-bold mb-4">Complete Automation That Saves 15+ Hours Monthly</h3>
                <p className="text-gray-300">Our system handles everything: requesting, following up, responding to reviews, and leveraging them across platforms - all while you focus on your business.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      </section>
    </>
  );
};

export default memo(ProblemStatement);
