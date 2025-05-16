
import { memo } from "react";

interface TestimonialsSectionProps {
  isVisible: boolean;
}

// This component has been intentionally left empty as per user request
const TestimonialsSection = memo(({ isVisible }: TestimonialsSectionProps) => {
  return null;
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
