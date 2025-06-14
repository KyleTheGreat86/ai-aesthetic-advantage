
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What software do you integrate with?",
      answer:
        "We integrate with all major PM systems including Medisoft, AdvancedMD, NextGen, Epic, Cerner, athenahealth, and more. No software changes needed on your end.",
    },
    {
      question: "How accurate is the AI processing?",
      answer:
        "Our AI achieves 99.9% accuracy on CMS-1500 data extraction, significantly reducing denials and rework costs compared to manual entry which typically has 15-20% error rates.",
    },
    {
      question: "Is this HIPAA compliant?",
      answer:
        "Absolutely. We maintain full HIPAA compliance with encrypted data transmission, secure processing, and comprehensive audit trails. All staff sign BAAs and undergo HIPAA training.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Same-day onboarding. We set up your secure inbox, configure your PM system integration, and you can start processing claims within hours.",
    },
    {
      question: "What's the minimum volume requirement?",
      answer:
        "No minimum volume required. Whether you process 100 claims/month or 10,000+, our pricing scales with your needs at $0.50/claim.",
    },
    {
      question: "Do you handle rejected or denied claims?",
      answer:
        "Yes, we process all claim types including initial submissions, resubmissions, and appeals. Our AI learns from your specific payer requirements to reduce future denials.",
    },
    {
      question: "Can I try it risk-free?",
      answer:
        "Yes! Start with our FREE 100-claim trial. Process your claims at no cost and see the time savings firsthand. Pay only if you decide to continue.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our AI-powered CMS-1500 processing solution.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline hover:bg-white/10 transition-all font-medium text-base sm:text-lg text-left text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/10">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">
              Still have questions? We're here to help.
            </h3>
            <p className="text-gray-300 mb-4">
              Our team is available Monday-Friday, 9:00 AM - 6:00 PM EST
            </p>
            <a
              href="mailto:kyle@agencyeagleeye.com"
              className="inline-flex items-center text-eagle-blue hover:text-eagle-blue/80 font-semibold transition-colors"
            >
              kyle@agencyeagleeye.com
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default FAQ;
