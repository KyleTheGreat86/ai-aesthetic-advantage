
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
      </div>
    </section>
  );
};

export default TransformationSection;
