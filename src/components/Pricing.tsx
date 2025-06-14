
import { useState, useEffect, useRef } from "react";
import { Check, Shield, DollarSign } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const calendlyUrl = "https://calendly.com/weareagencyeagleeye/30min";

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Simple Pricing
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`card-glow max-w-lg mx-auto transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0 animate-float"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="text-center mb-8">
                <DollarSign className="mx-auto text-eagle-orange mb-4" size={40} />
                <div className="text-6xl font-bold text-eagle-orange mb-2">$0.50</div>
                <div className="text-xl text-gray-300 mb-4">/claim</div>
                <p className="text-lg text-gray-300 mb-6">
                  vs. <span className="text-eagle-orange font-semibold">$3.50 current cost</span> • <span className="text-eagle-blue font-semibold">$3,000+ saved monthly</span>
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-eagle-blue mb-4 text-center">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">HIPAA-compliant secure processing</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Integration with your existing PM system</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">99.9% accuracy guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Same-day onboarding</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Daily ROI reporting</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">24/7 technical support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-eagle-orange/10 border border-eagle-orange/30 rounded-lg p-4 mb-8">
                <h4 className="text-lg font-semibold text-eagle-orange mb-2 text-center">
                  Keep Your Software. Keep Your Staff. Save $5,000+ Next Month.
                </h4>
                <p className="text-center text-white">Process 100 claims FREE. Pay only if you save.</p>
              </div>
              
              <div className="text-center space-y-4">
                <RainbowButton
                  calendlyLink={calendlyUrl}
                  className="uppercase font-bold py-3 px-8 w-full"
                >
                  Start Free Pilot
                </RainbowButton>
                
                <RainbowButton
                  calendlyLink={calendlyUrl}
                  className="uppercase font-bold py-3 px-8 w-full"
                >
                  Get Custom Savings Estimate
                </RainbowButton>
              </div>
              
              <div className="absolute -inset-1 bg-gradient-to-r from-eagle-blue to-eagle-orange opacity-30 blur-lg -z-10 group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-300">
            <p className="mb-2">📞 Mon-Fri 9AM-6PM EST | ✉ kyle@agencyeagleeye.com</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Pricing;
