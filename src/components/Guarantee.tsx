
import { useState, useEffect, useRef, memo } from "react";
import { Shield, Clock, Star } from "lucide-react";
import { CountdownTimer } from "./ui/countdown-timer";
import { useDeviceType } from "../hooks/use-mobile";

const guarantees = [
  {
    title: "Results Guarantee",
    description:
      "Capture at least 3 additional consultations in 30 days or get a full refund.",
    icon: <Star className="h-10 w-10" fill="currentColor" />,
  },
  {
    title: "Setup Guarantee",
    description:
      "Live and working within 72 hours or your setup fee is waived.",
    icon: <Shield className="h-10 w-10" />,
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "Cancel anytime with 24 hours notice. No contracts, no penalties.",
    icon: <Shield className="h-10 w-10" />,
  },
];

const Guarantee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();
  
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
      className="py-16 relative overflow-hidden bg-gradient-to-b from-black to-black/90 w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-eagle-blue/10 to-eagle-gold/10"></div>
      <div className="section-container relative z-10">
        <div className="mx-auto text-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Triple Guarantee - I Take All the Risk
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className={`rounded-lg transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex justify-center mb-4 text-eagle-gold">
                    {guarantee.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{guarantee.title}</h3>
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
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-3 text-eagle-gold">
                    Limited Founder's Launch
                  </h3>
                  <p className="text-lg mb-2 text-white">
                    Only <CountdownTimer targetDate={targetDate} className="inline-flex text-eagle-gold font-medium" /> remaining for this special pricing
                  </p>
                  <div className="mt-4 flex items-center justify-center md:justify-start">
                    <div ref={clockRef} className="mr-3">
                      <Clock className="h-6 w-6 text-eagle-gold" />
                    </div>
                    <p className="text-sm text-gray-300">
                      Only 8 spots remaining at founder's pricing - Your rate locks in forever
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <a
                    href="https://calendly.com/weareagencyeagleeye/30min"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="eagle-btn-primary inline-block relative group overflow-hidden w-full md:w-auto bg-gradient-to-r from-eagle-gold to-yellow-400 text-black"
                  >
                    <span className="relative z-10">CLAIM YOUR FOUNDER'S RATE NOW</span>
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
