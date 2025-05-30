
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
      question: "This sounds too good to be true. What's the catch?",
      answer:
        "No catch. I'm using proven AI technology and customizing it for aesthetic practices. The 'catch' is that I'm new, so you get founder-level attention and pricing that won't last forever and I'd love a testimonial, as you know reputation and quality for your brand is everything.",
    },
    {
      question: "How is this different from an answering service?",
      answer:
        "Answering services use humans who know nothing about your practice. Your AI employee knows every treatment, price, and protocol. Plus it works 24/7 for less than you'd pay for 10 hours of human coverage.",
    },
    {
      question: "What if prospects want to speak to a human?",
      answer:
        "The AI handles 90% of inquiries completely. For complex medical questions, it professionally captures information and routes to your team with detailed notes.",
    },
    {
      question: "Will this work with my practice management software?",
      answer:
        "Yes - I personally handle integration with major systems like Nextech, AestheticsPro, and others. This is included in your setup.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "From demo to live in 48-72 hours. I personally handle the setup call (30 minutes), custom configuration (24-48 hours), and review & go live. Total time required from you: 45 minutes.",
    },
    {
      question: "What's included in the founder's pricing?",
      answer:
        "Custom AI setup for your specific treatments and pricing, integration with your practice management system, 24/7/365 call coverage, monthly optimization calls with me personally, all future features and improvements, and direct founder support line.",
    },
    {
      question: "What's your guarantee?",
      answer:
        "Triple guarantee: Results guarantee (capture at least 3 additional consultations in 30 days or get a full refund), Setup guarantee (live and working within 72 hours or your setup fee is waived), and Satisfaction guarantee (cancel anytime with 24 hours notice, no contracts, no penalties).",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Your Questions, Answered
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900 backdrop-blur-sm mb-4 rounded-lg border border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800 rounded-t-lg transition-all font-medium text-lg text-white">
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
              Have more questions? I'm happy to help.
            </p>
            <p className="mt-2">
              <a
                href="mailto:kyle@agencyeagleeye.com"
                className="text-eagle-gold hover:underline"
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
