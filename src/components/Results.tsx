
import React, { useState, useEffect, useRef } from "react";
import { Quote, User } from "lucide-react";

const Results = () => {
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

  const testimonials = [
    {
      quote: "We saved $14,200 last month alone. Now our billers focus on denials instead of data entry.",
      author: "Sarah M.",
      company: "Regional Medical Billing (500+ providers)",
      delay: 0
    },
    {
      quote: "Implemented on Tuesday, saved $5,600 by Friday. Zero training needed.",
      author: "Mike K.",
      company: "Healthcare Revenue Solutions",
      delay: 200
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by Medical Billing Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How Billing Pros Saved $14,000/Month Without Changing Software
            </p>
          </div>

          {/* Video Demo Section */}
          <div className="text-center mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-eagle-blue">
                3-min demo showing CMS-1500 PDF → Auto-populated Medisoft fields in 90 sec
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Watch our AI extract patient data, ICD-10s, and CPT codes overnight—no manual entry, no errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/weareagencyeagleeye/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-eagle-blue hover:bg-eagle-blue/80 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Book 15-Min Demo
                </a>
                <a
                  href="https://calendly.com/weareagencyeagleeye/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-eagle-orange hover:bg-eagle-orange/80 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  See Live Accuracy Test
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${testimonial.delay}ms`,
                }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <Quote className="text-eagle-orange mb-4" size={32} />
                  <p className="text-lg mb-6 text-white leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <User className="text-eagle-blue mr-3" size={20} />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-gray-300 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Results;
