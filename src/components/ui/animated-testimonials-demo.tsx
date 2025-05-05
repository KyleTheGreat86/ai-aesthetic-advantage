
import { AnimatedTestimonials } from "./animated-testimonials";
import founderImage from "/lovable-uploads/8a04c2df-822d-4040-abad-6db5c13bb1c3.png";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "With over 5 years of experience as a Robotic Process Automation Consultant, I founded Agency Eagle Eye to bridge the gap between AI technology and business implementation. Based in Glasgow but serving clients worldwide, I help audiology clinics unlock new levels of growth through intelligent automation solutions.",
      name: "Kyle Holland",
      designation: "Agency Eagle Eye Founder",
      src: founderImage,
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
