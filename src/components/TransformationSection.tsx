
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import AnimatedCodeSpline from "./ui/animated-code-spline";

const TransformationSection = () => {
  // Updated Calendly booking URL
  const calendlyUrl = "https://calendly.com/agencyeagleeye/profit-blueprint";
  
  return (
    <section className="py-24 relative bg-eagle-dark/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Medical Billing Business?
          </h2>
          <p className="text-xl text-eagle-orange font-semibold">
            Proven ROI Within 24 Hours
          </p>
        </div>
        
        {/* Code Spline Animation */}
        <AnimatedCodeSpline />
        
        {/* Button has been moved to the end of the component */}
        <div className="text-center mt-12">
          <RainbowButton 
            calendlyLink={calendlyUrl}
            className="uppercase font-bold text-base px-8 py-3">
            Start Free 100-Claim Trial
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
