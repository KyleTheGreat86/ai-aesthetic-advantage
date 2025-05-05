
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
    },
    {
      quote:
        "After six months with Eagle Eye, our practice revenue is up 32%. Their dedicated account manager has been incredibly responsive and supportive throughout the process.",
      name: "James Kim",
      designation: "Owner at Premium Audiology Center",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
