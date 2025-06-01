
import { memo } from "react";
import { TestimonialsSection } from "./ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Sarah Mitchell",
      handle: "Director, Premier Properties Glasgow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Laura booked 8 viewings while I was sleeping! The clients think she's human - proper Scottish warmth and all. She's been worth every penny and more."
  },
  {
    author: {
      name: "James Robertson", 
      handle: "Owner, Robertson & Associates Estate Agents",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Clients think she's human - proper Scottish warmth! Laura handles even the thickest Glaswegian accents like a charm. Best investment we've made."
  },
  {
    author: {
      name: "Emma Thompson",
      handle: "Managing Director, Citywide Property Solutions", 
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "I was losing buyers at weekends and evenings when they're actually looking at properties online. Laura changed everything - never missing a lead again!"
  },
  {
    author: {
      name: "Michael Campbell",
      handle: "Senior Partner, Campbell & Co Real Estate",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Laura's brought in £12,000 extra revenue in just 6 weeks. She's like having our best agent working 24/7 - pure Scottish efficiency!"
  }
];

const ScottishTestimonials = memo(() => {
  return (
    <TestimonialsSection
      title="What Scottish Estate Agents Are Saying About Oor Laura"
      description="Real results from real Scottish agencies - see how Laura's transforming property businesses across Scotland."
      testimonials={testimonials}
    />
  );
});

ScottishTestimonials.displayName = "ScottishTestimonials";

export default ScottishTestimonials;
