
import { memo } from "react";
import { TestimonialsSection } from "./ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Dr. Sarah Martinez",
      handle: "Director, Elite Aesthetic Center",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "For the first time in my practice, I can disconnect after hours knowing prospects will still receive professional service when they call about our treatments."
  },
  {
    author: {
      name: "Dr. Michael Chen",
      handle: "Owner, Premier Aesthetics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "We've captured 12 additional consultations this month alone. The AI handles inquiries with such professionalism that prospects often compliment our 'evening receptionist.'"
  },
  {
    author: {
      name: "Dr. Rebecca Williams",
      handle: "Director, Luxury Aesthetics", 
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "I was losing potential clients at 2 AM when they were researching procedures, but I couldn't keep my staff available 24/7. This solution changed everything."
  }
];

const Testimonials = memo(() => {
  return (
    <TestimonialsSection
      title="What Aesthetic Practice Owners Say"
      description="Hear from aesthetic professionals who have transformed their practice response with Eagle Eye Response."
      testimonials={testimonials}
    />
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
