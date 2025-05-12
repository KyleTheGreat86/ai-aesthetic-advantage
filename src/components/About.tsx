
import { useState, useEffect, useRef, memo } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '100px' // Start loading before fully visible
      }
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

  // Memoize values to prevent unnecessary re-renders
  const values = [
    {
      title: "Innovation First",
      description: "We measure success by how we transform legal workflows, not by traditional metrics",
    },
    {
      title: "Enterprise Security",
      description: "Your client data is protected with the highest level of security and confidentiality",
    },
    {
      title: "IP Law Expertise",
      description: "Our team combines legal and AI expertise to deliver solutions specific to intellectual property practice",
    },
    {
      title: "Continuous Learning",
      description: "Our AI systems get smarter with every document, improving outcomes over time",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            The Agency Eagle Eye Story
          </h2>

          <div 
            className={`mb-12 rounded-lg p-6 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <p className="text-lg mb-4">
                Agency Eagle Eye was founded with a simple mission: help IP law firms worldwide stop losing revenue through inefficient processes and outdated technology.
              </p>
              <p className="text-lg mb-4">
                Our founder Kyle Holland saw how even prestigious law firms were struggling with manual patent searches, time-consuming document drafting, and error-prone deadline tracking — all of which reduced profitability and client satisfaction.
              </p>
              <p className="text-lg">
                By combining cutting-edge AI technology with deep expertise in intellectual property processes, we've created systems that deliver measurable, consistent results for legal professionals seeking to stay competitive in a rapidly evolving industry.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
            <div
              className={`mb-8 rounded-lg p-4 bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-lg text-center max-w-3xl mx-auto">
                To revolutionize IP law practice through AI-powered infrastructure that increases attorney productivity while enhancing the quality of legal services.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10 transform transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-eagle-orange">
                      {value.title}
                    </h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default memo(About);
