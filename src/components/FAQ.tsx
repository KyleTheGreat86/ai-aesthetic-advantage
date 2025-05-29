
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
        "No. The AI system integrates seamlessly with your existing phone system. Once set up, it works automatically. You can monitor calls and customize responses through a simple dashboard that requires no technical expertise.",
    },
    {
      question: "What if our workflow is unique?",
      answer:
        "We customize the AI responses and workflows to match your funeral home's specific processes, terminology, and services. Our onboarding includes detailed consultation to ensure the AI represents your funeral home accurately and compassionately.",
    },
    {
      question: "How secure is our data?",
      answer:
        "Enterprise-grade encryption protects all call data and family information. We never store sensitive personal details beyond what's necessary for scheduling. All data is protected with HIPAA-compliant security protocols and regular security audits.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Implementation takes 5-7 business days from signing to full deployment. This includes phone system integration, AI training on your services and procedures, testing, and staff orientation on the system.",
    },
    {
      question: "Does Eagle Eye replace our existing staff?",
      answer:
        "No, it enhances your team's capabilities. The AI handles overflow calls, after-hours inquiries, and initial information gathering, allowing your staff to focus on providing personalized care to families during their most important moments.",
    },
    {
      question: "What types of calls does the AI handle best?",
      answer:
        "The AI excels at initial family contact, information requests about services and pricing, scheduling consultations, after-hours urgent response, and general inquiries. Complex emotional support is always transferred to your compassionate staff.",
    },
    {
      question: "Is there a limit to how many calls the AI can handle?",
      answer:
        "No, the AI can handle unlimited simultaneous calls 24/7. Whether you receive 10 calls or 100 calls in a day, every family will receive immediate, compassionate attention without any busy signals or voicemail.",
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
              Have more questions? We're happy to help.
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
