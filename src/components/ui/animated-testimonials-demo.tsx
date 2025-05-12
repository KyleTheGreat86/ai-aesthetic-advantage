
import { AnimatedTestimonials } from "./animated-testimonials";
import { memo } from "react";
import founderImage from "/lovable-uploads/8a04c2df-822d-4040-abad-6db5c13bb1c3.png";

const testimonials = [
  {
    quote:
      "With over 5 years of experience as a Robotic Process Automation Consultant, I founded Agency Eagle Eye to bridge the gap between AI technology and legal workflow automation. Based in Glasgow but serving clients worldwide, I help IP law firms transform their practice through intelligent infrastructure that reduces manual work while increasing revenue.",
    name: "Kyle Holland",
    designation: "Eagle Eye AI Founder",
    src: founderImage,
  }
];

export const AnimatedTestimonialsDemo = memo(function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
});
