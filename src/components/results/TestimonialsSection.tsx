
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
            "After using Eagle Eye we are outranking businesses that have been in our area for <span className="text-eagle-orange font-semibold">10+ years!</span> The Google reviews we're getting are bringing in more calls every day."
          </p>
          <p className="mt-2 text-gray-400">
            – Daniel Plourde, Dryer Vent Superheros PBC
          </p>
        </div>
      </div>
    </div>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
