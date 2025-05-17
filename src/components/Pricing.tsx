import { useState, useEffect, useRef } from "react";
import { Check, Shield, Rocket, Target, BarChart } from "lucide-react";
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
            Ready to Transform Your Brokerage?
          </h2>
          <p className="text-center text-xl text-eagle-orange font-medium mb-6">Proven ROI Within 60 Days</p>
          
          {/* Updated button styling for consistency */}
          <div className="text-center mb-8">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <EagleButton className="uppercase font-bold w-48 max-w-full py-3">
                Strategy Session
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
              <div className="text-center mb-8">
                <Rocket className="mx-auto text-eagle-orange mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-2">Custom AI Infrastructure for CRE Brokerages</h3>
                <p className="text-gray-300 mb-6">Tailored Automation Solutions for Firms Handling $3M–$20M+ Deals</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-eagle-blue mb-4">Our Core Workflows:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Lead Generation Engine</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Instant Deal Analyzer</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Document Hunter</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Buyer/Seller Matchmaker</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Tour Scheduler</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-blue flex-shrink-0" />
                    <span className="text-white">Client Nurture Bot</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-eagle-orange mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-orange flex-shrink-0" />
                    <span className="text-white">CRM & Email Integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-orange flex-shrink-0" />
                    <span className="text-white">Mobile-First Interface</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-orange flex-shrink-0" />
                    <span className="text-white">Unlimited Users</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-orange flex-shrink-0" />
                    <span className="text-white">24/7 Technical Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-orange flex-shrink-0" />
                    <span className="text-white">Custom Workflow Setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="mr-3 text-eagle-orange flex-shrink-0" />
                    <span className="text-white">30-Day ROI Guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-eagle-blue flex items-center justify-center mb-4">
                  <BarChart size={20} className="mr-2" />
                  <span>Bespoke Proposals for Unique Needs</span>
                </h4>
                <p className="text-gray-300 mb-3">Every brokerage operates differently. We provide customized proposals based on:</p>
                <ul className="space-y-2 text-white">
                  <li>• Deal Volume & Team Size</li>
                  <li>• Required Integrations</li>
                  <li>• Existing Tech Stack</li>
                  <li>• Specific Automation Needs</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-eagle-orange flex items-center justify-center mb-4">
                  <Target size={20} className="mr-2" />
                  <span>Get Your Personalized AI Blueprint</span>
                </h4>
                <p className="text-gray-300 mb-3">We'll assess your current operations and deliver:</p>
                <ul className="space-y-2 text-white">
                  <li>• A Tailored Automation Blueprint</li>
                  <li>• Profit Projection</li>
                  <li>• Custom Implementation Quote</li>
                </ul>
              </div>
              
              <div className="mt-4 text-center text-gray-300 mb-6">
                <p className="font-medium">Guarantees:</p>
                <p>30-Day Money-Back Guarantee</p>
                <p>60-Day ROI Guarantee</p>
              </div>

              <div className="text-center">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <EagleButton className="uppercase font-bold w-48 max-w-full py-3">
                    Get AI Blueprint
                  </EagleButton>
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
