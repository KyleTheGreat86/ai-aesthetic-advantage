import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

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
    "Complete AI Lead Response System",
    "Automated Review Generation",
    "Audiology-Specific Scripts",
    "Weekly Performance Reports",
    "Dedicated Account Manager",
    "No Setup Fee ($2,500 value)",
    "5-10 Guaranteed Appointments in Trial",
    "25+ Reviews in First Month",
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Limited-Time Offer for Founding Clinics
          </h2>
          <p className="text-center text-eagle-orange font-medium mb-12">Only 3 Clinics Currently Accepted This Month</p>

          <div
            className={`card-glow max-w-lg mx-auto transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0 animate-float"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="absolute top-0 right-0 bg-eagle-blue px-4 py-2 rounded-bl-lg rounded-tr-lg font-medium">
                Founding Member
              </div>

              <div className="text-center mb-8">
                <div className="flex flex-col items-center justify-center mb-4">
                  <span className="text-xl text-gray-400">Starting at</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl">$</span>
                    <span className="text-5xl font-bold">0</span>
                  </div>
                  <span className="text-eagle-orange font-medium mt-2">
                    14-Day Free Trial
                  </span>
                </div>

                <div className="mb-4 py-2 border-t border-b border-white/10">
                  <span className="text-xl font-medium">$1,297</span>
                  <span className="text-gray-400">/month after trial</span>
                  <p className="text-sm text-gray-400"><s>Normally $1,997</s></p>
                  <p className="text-sm text-gray-400">Cancel Anytime</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">What's Included:</h3>
                <ul className="space-y-3">
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
                        className="mr-2 text-eagle-orange"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="#contact"
                  className="eagle-btn-secondary w-full flex justify-center items-center group relative overflow-hidden"
                >
                  <span className="relative z-10">LOCK IN YOUR FOUNDING RATE NOW</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-eagle-orange to-eagle-orange/70 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
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
