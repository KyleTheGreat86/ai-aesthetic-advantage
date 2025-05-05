
import { AnimatedTestimonials } from "./animated-testimonials";
import founderImage from "/lovable-uploads/8a04c2df-822d-4040-abad-6db5c13bb1c3.png";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "With over 8 years of experience in digital marketing for healthcare professionals, I've helped hundreds of audiology clinics grow their practices with innovative AI-powered solutions. My mission is to transform how audiology clinics attract and retain high-value patients through cutting-edge technology.",
      name: "Kyle Holland",
      designation: "Agency Eagle Eye Founder",
      src: founderImage,
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
