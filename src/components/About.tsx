
import React from "react";
import { AnimatedTestimonialsDemo } from "./ui/animated-testimonials-demo";
import founderImage from "/lovable-uploads/8a04c2df-822d-4040-abad-6db5c13bb1c3.png";

const About = () => {
  const team = [
    {
      name: "Kyle Holland",
      title: "Founder & Lead Automation Architect",
      imageSrc: founderImage,
    },
    {
      name: "Alex Rivera",
      title: "AI Workflow Specialist",
      imageSrc: "/lovable-uploads/2e9a41eb-a8c6-470a-b03f-0cb121f7f7dc.png",
    },
    {
      name: "Jennifer Morgan",
      title: "CRE Industry Advisor",
      imageSrc: "/lovable-uploads/5127203e-a625-4f68-9136-6183b4f8fdb0.png",
    }
  ];

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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.imageSrc} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-gray-300 text-center">{member.title}</p>
            </div>
          ))}
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
