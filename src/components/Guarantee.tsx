
import { useState, useEffect, useRef, memo } from "react";
import { Shield, Clock, Star } from "lucide-react";
import { CountdownTimer } from "./ui/countdown-timer";

const guarantees = [
  {
    title: "Google Review Guarantee",
    description:
      "Minimum 15 new Google reviews during your trial or we'll extend it free.",
    icon: <Star className="h-10 w-10" fill="currentColor" />,
  },
  {
    title: "Service Guarantee",
    description:
      "24-hour response to any support request or we credit your next month 25%.",
    icon: <Shield className="h-10 w-10" />,
  },
  {
    title: "ROI Guarantee",
    description:
      "Generate at least 3X your investment in new revenue or we'll refund your first paid month.",
    icon: <Shield className="h-10 w-10" />,
  },
];

const Guarantee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);
  
  // Set target date to August 1st of the current year
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 7, 1); // Month is 0-indexed (7 = August)
  
  // If the current date is past August 1st of the current year, set the target to next year
  if (new Date() > targetDate) {
    targetDate.setFullYear(currentYear + 1);
  }

  useEffect(() => {
    // Create observer outside the callback to avoid recreation
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '100px' } // Reduced threshold for earlier trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // More efficient clock animation with reduced frequency
  useEffect(() => {
    if (isVisible && clockRef.current) {
      const interval = setInterval(() => {
        clockRef.current?.classList.add("animate-pulse");
        setTimeout(() => {
          clockRef.current?.classList.remove("animate-pulse");
        }, 1000);
      }, 5000); // Reduced frequency from 3s to 5s

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="guarantee"
      className="py-16 relative overflow-hidden bg-gradient-to-b from-eagle-dark to-eagle-dark/90"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-eagle-blue/10 to-eagle-orange/10"></div>
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Triple Guarantee
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className={`rounded-lg transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex justify-center mb-4 text-eagle-orange">
                    {guarantee.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{guarantee.title}</h3>
                  <p className="text-gray-300">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 rounded-lg transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-3 text-eagle-orange">
                    Limited Time Offer
                  </h3>
                  <p className="text-lg mb-2">
                    Only <CountdownTimer targetDate={targetDate} className="inline-flex text-eagle-orange font-medium" /> remaining for this special pricing
                  </p>
                  <div className="mt-4 flex items-center">
                    <div ref={clockRef} className="mr-3">
                      <Clock className="h-6 w-6 text-eagle-orange" />
                    </div>
                    <p className="text-sm text-gray-300">
                      Special launch pricing ends soon. Claim your spot today.
                    </p>
                  </div>
                </div>
                <div>
                  <a
                    href="https://calendly.com/weareagencyeagleeye/30min"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="eagle-btn-primary inline-block relative group overflow-hidden"
                  >
                    <span className="relative z-10">CLAIM YOUR SPECIAL OFFER NOW</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-eagle-blue/0 via-white/20 to-eagle-blue/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Guarantee);
