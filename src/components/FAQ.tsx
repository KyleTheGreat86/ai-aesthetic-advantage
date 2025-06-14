
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
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm mb-4 rounded-lg border border-white/10"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/10 rounded-t-lg transition-all font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-300">
              Have more questions? We're happy to help.
            </p>
            <p className="mt-2">
              <a
                href="mailto:kyle@agencyeagleeye.com"
                className="text-eagle-blue hover:underline"
              >
                kyle@agencyeagleeye.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default FAQ;
