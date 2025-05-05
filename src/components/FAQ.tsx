
import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "../hooks/use-mobile";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: isMobile ? 0.1 : 0.2, // Lower threshold on mobile for earlier triggering
        rootMargin: isMobile ? "50px" : "0px" // Preload earlier on mobile
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile]);

  // FAQ data
  const faqs = [
    {
      question: "Do I need to change my existing systems?",
      answer:
        "No. Our technology integrates with your existing booking system, website, and phone system. Implementation is seamless with no disruption to your operations.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most clinics see their first new reviews within 48 hours and additional bookings within the first week. The full impact is typically visible within 14 days.",
    },
    {
      question: "Does this require staff training?",
      answer:
        "Minimal. The AI systems operate independently, and we provide a 30-minute training session for your team on the consultation framework.",
    },
    {
      question: "Will the AI caller sound robotic?",
      answer:
        "No. Our AI uses natural voice technology that patients cannot distinguish from a human receptionist. We can even match accents and speech patterns.",
    },
    {
      question: "What happens after the 14-day trial?",
      answer:
        "If you're satisfied with the results (and we're confident you will be), you'll be billed $1,297 monthly with no minimum term. Cancel anytime with 30 days' notice.",
    },
    {
      question: "Is there any setup fee?",
      answer:
        "None. The 14-day trial is completely free, including implementation.",
    },
  ];

  // Calculate progressive delay based on device
  const getAnimationDelay = (index: number) => {
    const baseDelay = isMobile ? 50 : 100; // Faster animations on mobile
    return `${index * baseDelay}ms`;
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2 sm:space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`faq-${index}`}
                className={`bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all duration-300 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: getAnimationDelay(index) }}
              >
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 hover:no-underline hover:bg-white/5">
                  <span className="text-left text-sm sm:text-base font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 pt-1 sm:pt-2 text-sm sm:text-base text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div
            className={`mt-8 sm:mt-10 md:mt-12 text-center transform transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: getAnimationDelay(faqs.length) }}
          >
            <p className="mb-4 sm:mb-6 text-base sm:text-lg">
              Have more questions? We're here to help.
            </p>
            <a href="#contact" className="eagle-btn-outline text-sm sm:text-base">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
