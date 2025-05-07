
import { useState, useEffect, useRef, memo } from "react";
import { AudiologistLogosDemo } from "./ui/audiologist-logos-demo";
import { AnimatedTestimonialsDemo } from "./ui/animated-testimonials-demo";
import { GlowingBox } from "./ui/glowing-box";

const About = () => {
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

  const values = [
    {
      title: "Results First",
      description: "We measure success by your results, not our activities",
    },
    {
      title: "Invisible Technology",
      description: "Our systems work seamlessly in the background",
    },
    {
      title: "Industry Expertise",
      description: "We understand the unique challenges of audiologist clinics",
    },
    {
      title: "Continuous Improvement",
      description: "Your systems get better every month",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The Agency Eagle Eye Story
          </h2>

          <GlowingBox
            className={`mb-16 rounded-lg p-6 transition-all duration-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <p className="text-lg mb-6">
                Agency Eagle Eye was founded with a simple mission: help premium US
                audiology clinics stop losing money through fixable operational gaps
                utilizing state of the art AI.
              </p>
              <p className="text-lg mb-6">
                Our founder Kyle Holland saw how even the most prestigious clinics were
                hemorrhaging potential revenue through slow lead response,
                insufficient reviews, and suboptimal consultation techniques.
              </p>
              <p className="text-lg">
                By combining cutting-edge AI technology with deep expertise in the
                audiology industry, we've created systems that deliver measurable,
                consistent results for US clinics seeking sustainable growth.
              </p>
            </div>
          </GlowingBox>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
            <GlowingBox
              className={`mb-12 rounded-lg p-4 transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="text-lg text-center max-w-3xl mx-auto">
                To help US audiology clinics achieve their full revenue potential
                through intelligent automation, without adding to their team's
                workload.
              </p>
            </GlowingBox>

            <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <GlowingBox
                  key={index}
                  className={`rounded-lg transform transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                >
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-eagle-orange">
                      {value.title}
                    </h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </GlowingBox>
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
