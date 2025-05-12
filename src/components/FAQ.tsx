
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
      question: "How quickly can we implement the AI solution?",
      answer:
        "Most IP firms are fully operational within 28 days from signing. Our implementation team handles the setup, integration, and initial AI training. The system continues to improve as it learns your specific processes and requirements.",
    },
    {
      question: "Is our data secure and confidential?",
      answer:
        "Absolutely. We utilize AES-256 encryption, strict access controls, and are fully GDPR compliant. Our system is built with attorney-client privilege in mind, and we sign comprehensive NDAs. No client data is ever used to train general AI models.",
    },
    {
      question: "Can your AI integrate with our existing legal software?",
      answer:
        "Yes, we integrate with all major legal practice management systems including Clio, Anaqua, CPA Global, and many others. Our API-first approach allows us to connect with virtually any software your firm uses.",
    },
    {
      question: "How does the pricing structure work?",
      answer:
        "Our pricing includes an initial setup fee and a monthly subscription. The setup fee covers implementation, integration, and training the AI on your specific procedures and data. The monthly fee covers ongoing support, updates, and continuous AI improvements.",
    },
    {
      question: "What makes Eagle Eye different from other legal tech solutions?",
      answer:
        "Unlike general AI tools, our system is specifically built for IP law workflows. Our AI agents are trained on millions of patent documents, legal briefs, and IP-specific content. We offer a 3X ROI guarantee and only succeed when you achieve measurable productivity gains.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we provide a 30-day money-back guarantee if you're not satisfied with our solution. Additionally, we offer a 3X ROI guarantee within the first 90 days of implementation.",
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
      className="py-10 sm:py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2 sm:space-y-3"
          >
            {faqs.map((faq, index) => (
              <div
                key={`faq-${index}`}
                className={`rounded-lg transition-all duration-300 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: getAnimationDelay(index) }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-3 hover:no-underline hover:bg-white/5">
                    <span className="text-left text-sm sm:text-base font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-3 pt-1 text-sm sm:text-base text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>

          <div
            className={`mt-6 sm:mt-8 text-center transform transition-all duration-300 rounded-lg p-4 bg-white/5 backdrop-blur-sm border border-white/10 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: getAnimationDelay(faqs.length) }}
          >
            <div>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg">
                Have more questions about our AI solution for your IP law firm? We're here to help.
              </p>
              <a href="#contact" className="eagle-btn-outline text-sm sm:text-base">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
