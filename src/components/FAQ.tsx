
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
      question: "Do I need technical skills to use it?",
      answer:
        "No. Everything runs via Telegram—just tap buttons to approve deals, schedule tours, etc. The interface is designed for busy brokers who need information and actions at their fingertips.",
    },
    {
      question: "What if our workflow is unique?",
      answer:
        "We customize all 6 core workflows to your brokerage's exact process. Our onboarding process includes comprehensive discovery sessions to map your existing workflow and optimize it with AI.",
    },
    {
      question: "How secure is our data?",
      answer:
        "Enterprise-grade encryption. We never store sensitive financials. All client data is protected with SOC 2 compliant security protocols and regular penetration testing.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "The entire process takes 20 days from signing to full deployment. This includes all customizations, integrations with your existing systems, testing, and team training.",
    },
    {
      question: "Does Eagle Eye replace existing software?",
      answer:
        "No, it integrates with your existing CRM, email, calendar, and document systems. We enhance your current tech stack rather than replacing it.",
    },
    {
      question: "What types of CRE deals work best with Eagle Eye?",
      answer:
        "Eagle Eye is optimized for off-market and NNN deals in the $3M-$20M range, though it works across all commercial property types including retail, office, industrial, and multifamily.",
    },
    {
      question: "Is there a limit to how many users can access the system?",
      answer:
        "No, your subscription includes unlimited users within your brokerage. We can configure different access levels for brokers, analysts, and administrative staff.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Your Questions, Answered
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
