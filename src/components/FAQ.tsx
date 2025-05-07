
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
      question: "How quickly will I see my Google review count increase?",
      answer:
        "Most businesses see a 30-50% increase in their first 30 days. Factors like customer volume and industry can influence results, but our system is designed to maximize response rates from day one.",
    },
    {
      question: "Will these be authentic reviews from real customers?",
      answer:
        "Absolutely. We NEVER use fake reviews or questionable tactics. Our system only reaches out to your actual customers and makes it easier for them to leave genuine feedback. This ensures Google compliance and builds sustainable trust.",
    },
    {
      question: "How does this improve my Google ranking?",
      answer:
        "Google's local algorithm heavily weighs review quantity, quality, and recency. Our system optimizes all three factors, which typically results in ranking increases within 45-60 days as your review profile strengthens.",
    },
    {
      question: "Can I use this for multiple business locations?",
      answer:
        "Yes! Our platform is designed to handle everything from single location businesses to enterprises with hundreds of locations. Each location can have customized settings while being managed from a single dashboard.",
    },
    {
      question: "What makes Eagle Eye different from other review platforms?",
      answer:
        "Unlike general reputation management tools, we specialize exclusively in Google reviews for local businesses. Our pay-for-performance model, specialized AI request timing, and local search optimization focus consistently outperform generic solutions by 2-3X.",
    },
    {
      question: "Is there any setup fee?",
      answer:
        "None. The 30-day trial is completely free, including implementation.",
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
              Have more questions about boosting your Google reviews? We're here to help.
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
