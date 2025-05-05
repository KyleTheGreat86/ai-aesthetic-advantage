
import { AnimatedTestimonials } from "./animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The AI Lead Response System has helped us capture 40% more leads that would have otherwise gone to competitors. It's like having an extra front desk staff member.",
      name: "Dr. Sarah Chen",
      designation: "Audiologist at HearWell Clinic",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and we're now booking 5-7 more appointments each week. The automated review system has helped us gain 30+ new Google reviews in just two months.",
      name: "Michael Rodriguez",
      designation: "Clinic Director at ClearSound Audiology",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The Audiology Growth System has significantly improved our patient retention. The personalized follow-ups have received wonderful feedback from our clients.",
      name: "Emily Watson",
      designation: "Practice Manager at BetterHearing Solutions",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
