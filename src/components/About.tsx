
import React from "react";
import { AnimatedTestimonialsDemo } from "./ui/animated-testimonials-demo";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built by CRE Experts, for CRE Experts
          </h2>
          <p className="text-xl text-gray-300">
            We understand the commercial real estate industry's unique challenges
          </p>
        </div>

        <div className="mb-16">
          <AnimatedTestimonialsDemo />
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg">
            We bridge the gap between cutting-edge AI and the high-stakes world of commercial real estate—so you close more deals, with less grind.
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default About;
