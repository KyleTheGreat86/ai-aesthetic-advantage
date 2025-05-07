
import { AnimatedTestimonials } from "./animated-testimonials";
import { memo } from "react";
import founderImage from "/lovable-uploads/8a04c2df-822d-4040-abad-6db5c13bb1c3.png";

const testimonials = [
  {
    quote:
      "With over 5 years of experience as a Robotic Process Automation Consultant, I founded Agency Eagle Eye to bridge the gap between AI technology and business implementation. Based in Glasgow but serving clients worldwide, I help local businesses unlock new levels of growth through intelligent review management and automation solutions.",
    name: "Kyle Holland",
    designation: "Agency Eagle Eye Founder",
    src: founderImage,
  }
];

export const AnimatedTestimonialsDemo = memo(function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
});
