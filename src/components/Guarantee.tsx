
import { useState, useEffect, useRef } from "react";
import { Shield, Clock, Star } from "lucide-react";
import { GlowingBox } from "./ui/glowing-box";

const Guarantee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(7);
  const sectionRef = useRef<HTMLElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);

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
    if (isVisible && clockRef.current) {
      const interval = setInterval(() => {
        clockRef.current?.classList.add("animate-pulse");
        setTimeout(() => {
          clockRef.current?.classList.remove("animate-pulse");
        }, 1000);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

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

  return (
    <section
      ref={sectionRef}
      id="guarantee"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark to-eagle-dark/90"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-eagle-blue/10 to-eagle-orange/10"></div>
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Triple Guarantee
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {guarantees.map((guarantee, index) => (
              <GlowingBox
                key={index}
                className={`rounded-lg transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex justify-center mb-4 text-eagle-orange">
                    {guarantee.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{guarantee.title}</h3>
                  <p className="text-gray-300">{guarantee.description}</p>
                </div>
              </GlowingBox>
            ))}
          </div>

          <GlowingBox
            className={`mt-16 rounded-lg transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-eagle-orange">
                    Limited Availability
                  </h3>
                  <p className="text-lg">
                    Only <span className="font-bold text-white">563</span> spots remaining out of 1,000
                  </p>
                  <div className="mt-6 flex items-center">
                    <div ref={clockRef} className="mr-3">
                      <Clock className="h-6 w-6 text-eagle-orange" />
                    </div>
                    <p className="text-sm text-gray-300">
                      First 1,000 businesses only. Start your trial now.
                    </p>
                  </div>
                </div>
                <div>
                  <a
                    href="#contact"
                    className="eagle-btn-primary inline-block relative group overflow-hidden"
                  >
                    <span className="relative z-10">START YOUR FREE 30-DAY TRIAL</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-eagle-blue/0 via-white/20 to-eagle-blue/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                </div>
              </div>
            </div>
          </GlowingBox>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
