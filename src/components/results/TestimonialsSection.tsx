
import { memo } from "react";

interface TestimonialsSectionProps {
  isVisible: boolean;
}

const TestimonialsSection = memo(({ isVisible }: TestimonialsSectionProps) => {
  if (!isVisible) return null;
  
  return (
    <div
      className="mt-16 p-6 bg-white/5 rounded-lg border border-white/10 transition-opacity duration-300 opacity-100"
      style={{ transitionDelay: "500ms" }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative mb-4 md:mb-0 md:mr-8">
          <div className="w-16 h-16 rounded-full bg-eagle-blue/20 flex items-center justify-center text-2xl">
            "
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-lg italic">
            "Eagle Eye's AI paid for itself in <span className="text-eagle-orange font-semibold">8 weeks.</span> We're handling 40% more patent applications with the same team size, and our clients are amazed by how quickly we can respond to their needs."
          </p>
          <p className="mt-2 text-gray-400">
            – Sarah Kennedy, Managing Partner, London IP Group
          </p>
        </div>
      </div>
    </div>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
