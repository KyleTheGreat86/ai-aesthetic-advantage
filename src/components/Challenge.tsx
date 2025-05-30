
import React, { useState, useEffect, useRef } from "react";
import { PhoneOff, Clock, Users, HelpCircle } from "lucide-react";

const Challenge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ revenue: 0, cases: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const challenges = [
    {
      title: "The After-Hours Revenue Leak",
      description: "While you're closed, motivated prospects are calling competitors who answer. 38% of aesthetic consultations are booked outside business hours.",
      icon: PhoneOff,
      color: "text-red-400",
      bgColor: "from-red-500/10 to-red-600/5"
    },
    {
      title: "The Consistency Crisis",
      description: "Different staff members give different information about treatments and pricing. This confusion kills conversions and hurts your premium brand.",
      icon: Clock,
      color: "text-orange-400",
      bgColor: "from-orange-500/10 to-orange-600/5"
    },
    {
      title: "The Coverage Gaps", 
      description: "Staff sick days, lunch breaks, and busy periods mean missed calls. Each missed call is a lost consultation worth $200-500.",
      icon: Users,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/10 to-yellow-600/5"
    },
    {
      title: "The Training Drain",
      description: "New reception staff need weeks to learn your treatments, pricing, and protocols. Meanwhile, they're giving incomplete or incorrect information to prospects.",
      icon: HelpCircle,
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-blue-600/5"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          const animateCounter = (target: number, key: 'revenue' | 'cases') => {
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 30);
          };

          setTimeout(() => {
            animateCounter(10000, 'revenue');
            animateCounter(15, 'cases');
          }, 500);
          
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
      className="py-24 relative overflow-hidden bg-black"
    >
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-eagle-gold/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Why Aesthetic Practices Are Losing{" "}
              <span className="text-eagle-gold bg-gradient-to-r from-eagle-gold to-yellow-300 bg-clip-text text-transparent">
                $10,000+ Monthly
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every missed call represents a lost consultation and potential revenue for your aesthetic practice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${challenge.bgColor} backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-gray-600 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/0 via-gray-600/20 to-gray-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                
                <div className="relative flex items-start mb-4">
                  <div className={`p-3 rounded-full ${challenge.color} bg-gray-800/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-eagle-gold transition-colors duration-300">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Statistics with animated counters */}
        <div className={`bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm text-white p-8 rounded-xl text-center mb-8 border border-gray-700/50 shadow-2xl transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-xl font-semibold mb-4 text-white">
            The average aesthetic practice loses{" "}
            <span className="text-eagle-gold font-bold text-2xl">
              ${counters.revenue.toLocaleString()}+
            </span>{" "}
            monthly due to missed calls and inconsistent service
          </p>
        </div>

        {/* Enhanced Testimonial */}
        <div className={`max-w-3xl mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-2xl transform transition-all duration-1000 hover:shadow-white/5 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="relative">
            {/* Quote marks */}
            <div className="absolute -top-4 -left-2 text-6xl text-eagle-gold/30 font-serif">"</div>
            <div className="absolute -bottom-8 -right-2 text-6xl text-eagle-gold/30 font-serif">"</div>
            
            <blockquote className="text-lg italic text-gray-300 mb-6 leading-relaxed pl-6">
              I was losing potential clients at 2 AM when they were researching procedures, but I couldn't keep my staff available 24/7.
            </blockquote>
            <div className="flex items-center pl-6">
              <div className="w-12 h-12 bg-gradient-to-r from-eagle-gold to-yellow-400 rounded-full mr-4 flex items-center justify-center">
                <span className="text-black font-bold text-lg">DR</span>
              </div>
              <cite className="text-white font-semibold">
                — Dr. Rebecca Martinez, Elite Aesthetics
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
