
import React, { useState, useEffect, useRef } from "react";
import { PhoneOff, Clock, Users, HelpCircle } from "lucide-react";

const Challenge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const challenges = [
    {
      title: "Missed Family Calls",
      description: "47% of funeral homes miss potential cases because calls come after hours when staff is unavailable or exhausted.",
      icon: PhoneOff,
      color: "text-red-500"
    },
    {
      title: "Staff Burnout & Turnover",
      description: "Funeral directors report sleep deprivation and 24/7 on-call status as leading causes of burnout, with 68% considering career changes.",
      icon: Clock,
      color: "text-orange-500"
    },
    {
      title: "Inconsistent Family Experience", 
      description: "Families who call during business hours receive immediate compassion, while after-hours callers often reach voicemail during their most vulnerable moment.",
      icon: Users,
      color: "text-yellow-500"
    },
    {
      title: "Answering Service Limitations",
      description: "Generic answering services lack funeral-specific training, often creating awkward interactions and delays in urgent situations.",
      icon: HelpCircle,
      color: "text-blue-500"
    }
  ];

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

  return (
    <section
      ref={sectionRef}
      id="challenge"
      className="py-24 relative overflow-hidden bg-white"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-eagle-dark">
            The Challenge: After-Hours Response Is Costing Your Funeral Home $200K+ in Lost Revenue Minimum Yearly and Staff Wellbeing
          </h2>
          <p className="text-xl text-eagle-gray max-w-3xl mx-auto">
            Every missed call represents a family in need and potential revenue loss for your funeral home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border border-gray-200 shadow-lg transform transition-all duration-500 hover:shadow-xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-full ${challenge.color} bg-gray-50`}>
                    <Icon size={24} />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-eagle-dark">{challenge.title}</h3>
                    <p className="text-eagle-gray leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-eagle-dark text-white p-8 rounded-xl text-center mb-8">
          <p className="text-xl font-semibold mb-2">
            The average funeral home loses 3-5 potential cases monthly due to after-hours call handling issues
          </p>
          <p className="text-2xl font-bold text-eagle-gold">
            Representing $210,000-$350,000 in annual revenue
          </p>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl border-l-4 border-eagle-gold">
          <blockquote className="text-lg italic text-eagle-gray mb-4">
            "I was missing calls at 2 AM when families needed me most, but I couldn't keep sacrificing my health by being available 24/7."
          </blockquote>
          <cite className="text-eagle-dark font-semibold">
            — Sarah Thompson, Thompson Family Funeral Home
          </cite>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Challenge;
