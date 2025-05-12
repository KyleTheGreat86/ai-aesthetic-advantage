
import { useState, useEffect, useRef } from "react";
import { Check, Server, Shield } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showItems, setShowItems] = useState(false);
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
      const timer = setTimeout(() => setShowItems(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const includedItems = [
    "Patent Search AI",
    "Document Drafting Automation",
    "Deadline Tracking & Alerts",
    "Client Communication AI",
    "CMS/DMS Integration",
    "Enterprise-Grade Security",
    "Custom AI Agent Training",
    "Unlimited Users",
    "24/7 Technical Support",
  ];

  // Updated Calendly booking URL
  const calendlyUrl = "https://calendly.com/weareagencyeagleeye/30min";

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Simple, Results-Based Pricing
          </h2>
          <p className="text-center text-eagle-orange font-medium mb-6">Only Pay for Proven ROI</p>
          
          {/* Adding the Book Your Free Strategy Call button */}
          <div className="text-center mb-8">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <EagleButton className="uppercase font-bold">
                SCHEDULE YOUR AI DEMO
              </EagleButton>
            </a>
          </div>

          <div
            className={`card-glow max-w-lg mx-auto transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0 animate-float"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="absolute top-0 right-0 bg-eagle-orange px-4 py-2 rounded-bl-lg rounded-tr-lg font-medium">
                LIMITED TIME
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise Solution</h3>
                <p className="text-gray-300 mb-4">For IP Law Firms Worldwide</p>
                
                <div className="flex flex-col items-center justify-center mb-2">
                  <div className="flex items-baseline">
                    <span className="text-3xl">£</span>
                    <span className="text-5xl font-bold">10,000</span>
                  </div>
                  <span className="text-gray-400 font-medium mt-1">
                    Setup Fee
                  </span>
                </div>
                
                <div className="flex flex-col items-center justify-center mb-2">
                  <div className="flex items-baseline">
                    <span className="text-3xl">£</span>
                    <span className="text-5xl font-bold">2,000</span>
                  </div>
                  <span className="text-gray-400 font-medium mt-1">
                    Monthly
                  </span>
                </div>
                
                {/* Updated price increase urgency notice */}
                <div className="flex items-center justify-center text-sm">
                  <span className="text-gray-300 mr-2">Regular Price:</span>
                  <span className="line-through text-red-400 font-medium">£15,000 setup</span>
                </div>
              </div>

              <div className="mb-8">
                <ul className="space-y-4">
                  {includedItems.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center opacity-0 ${
                        showItems ? "animate-fade-in" : ""
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Check
                        size={18}
                        className="mr-3 text-eagle-blue flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <EagleButton className="w-full uppercase font-bold">
                    CLAIM LIMITED DISCOUNT
                  </EagleButton>
                </a>
              </div>
              
              <div className="mt-3 text-center text-sm text-gray-400">
                <span>*30-day money-back guarantee - Includes 3X ROI guarantee</span>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-eagle-blue to-eagle-orange opacity-30 blur-lg -z-10 group-hover:opacity-50 transition-opacity"></div>
              
              {/* Pulsing highlight */}
              <div className="absolute -inset-4 bg-eagle-orange/10 rounded-full blur-xl animate-pulse-slow -z-20"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Pricing;
