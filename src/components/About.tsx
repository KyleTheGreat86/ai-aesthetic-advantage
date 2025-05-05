
import { useState, useEffect, useRef } from "react";

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

  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      bio: "10+ years in digital marketing and AI implementation for medical businesses",
      image: "https://placehold.co/200x200/1A9BD7/FFFFFF.png?text=JS",
    },
    {
      name: "Sarah Johnson",
      position: "Head of Client Success",
      bio: "Former clinic manager with expertise in patient journey optimization",
      image: "https://placehold.co/200x200/FF8024/FFFFFF.png?text=SJ",
    },
    {
      name: "David Thompson",
      position: "AI Implementation Specialist",
      bio: "Expert in voice AI and automated communication systems",
      image: "https://placehold.co/200x200/1A9BD7/FFFFFF.png?text=DT",
    },
  ];

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
      description: "We understand the unique challenges of aesthetic clinics",
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

          <div
            className={`mb-16 transition-all duration-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Meet Our Team of Experts
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } group`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eagle-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold">{member.name}</h4>
                    <p className="text-eagle-blue mb-2">{member.position}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
            <p
              className={`text-lg mb-12 text-center max-w-3xl mx-auto transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              To help US audiology clinics achieve their full revenue potential
              through intelligent automation, without adding to their team's
              workload.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-eagle-orange">
                    {value.title}
                  </h4>
                  <p className="text-gray-300">{value.description}</p>
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

export default About;
