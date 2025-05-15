
import React from "react";
import { AnimatedTestimonialsDemo } from "./ui/animated-testimonials-demo";
import founderImage from "/lovable-uploads/8a04c2df-822d-4040-abad-6db5c13bb1c3.png";

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

        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src={founderImage} 
                alt="Kyle Holland" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Kyle Holland</h3>
            <p className="text-gray-300 text-center mb-4">Founder & Lead Automation Architect</p>
            <p className="text-gray-300 text-center">
              With over 5 years of experience as a Robotic Process Automation Consultant, I founded Agency Eagle Eye to bridge the gap between AI technology and CRE workflow automation. Based in Glasgow but serving clients in the US, I help commercial real estate brokers transform their firms through intelligent state of the art AI infrastructures that generates more revenue, reduces manual work and free's up time for higher business functions or enjoying family or vacation time.
            </p>
          </div>
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
