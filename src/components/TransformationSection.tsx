
import React from "react";
import { EagleButton } from "./ui/eagle-button";
import AnimatedCodeSpline from "./ui/animated-code-spline";

const TransformationSection = () => {
  return (
    <section className="py-24 relative bg-eagle-dark/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-eagle-orange font-semibold">
            Proven ROI Within 60 Days
          </p>
        </div>
        
        {/* Code Spline Animation */}
        <AnimatedCodeSpline />
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-2">Free Consultation</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Brokerage?
          </h2>
          <p className="text-xl text-eagle-orange font-semibold mb-6">
            Proven ROI Within 60 Days
          </p>
          
          <EagleButton calendlyLink="https://calendly.com/weareagencyeagleeye/30min" className="uppercase font-bold">
            Strategy Session
          </EagleButton>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
