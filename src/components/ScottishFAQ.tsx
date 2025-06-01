
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ScottishFAQ = () => {
  const faqItems = [
    {
      question: "How Scottish does Laura actually sound?",
      answer:
        "Laura's got a warm, professional Scottish accent that's been fine-tuned with real Glasgow and Edinburgh voices. She can handle everything from gentle Highland lilt to proper Glaswegian - and clients absolutely love her. You can hear for yourself by calling 07883 299 579.",
    },
    {
      question: "Can she handle thick Scottish accents and dialects?",
      answer:
        "Absolutely! Laura's been trained on thousands of Scottish conversations from Aberdeen to Ayrshire. She understands regional slang, local property terms, and even the occasional 'ken what I mean?' She's probably better at understanding Scottish than half the English agents down south!",
    },
    {
      question: "What happens if Laura can't answer a question?",
      answer:
        "Laura's smart enough to know when to hand over to a human. She'll politely collect the caller's details, explain she'll get someone to call back, and immediately send you all the information. No frustrated customers, no lost leads.",
    },
    {
      question: "Will Laura work with our existing property management system?",
      answer:
        "Aye, she will! Laura integrates with Rightmove, Zoopla, PropertyFile, and most major UK property systems. We handle all the technical setup - usually takes less than 24 hours and you don't need to touch a thing.",
    },
    {
      question: "How quickly can Laura be up and running?",
      answer:
        "From our wee chat to Laura answering your phones is typically 24-48 hours. We'll spend 30 minutes learning about your properties and preferences, then Laura goes through her Scottish charm school. She'll be ready to book viewings by tomorrow evening.",
    },
    {
      question: "What if we're not happy with Laura's performance?",
      answer:
        "We offer a proper Scottish guarantee: 30 days to try Laura risk-free. If she doesn't bring you at least 3 extra qualified leads in that time, we'll refund every penny. No questions asked, no hard feelings - though that's never happened yet!",
    },
    {
      question: "Can Laura handle emergency property calls?",
      answer:
        "Laura's brilliant for general inquiries and bookings, but for genuine emergencies (burst pipes, break-ins, etc.), she'll immediately connect callers to your emergency number. She knows the difference between 'urgent viewing request' and 'the roof's fallen in'.",
    },
    {
      question: "How much will Laura actually increase our business?",
      answer:
        "Our Scottish agencies typically see 3-8 extra qualified leads per month, with an average revenue increase of £9,600 monthly. That's because Laura never sleeps, never takes a holiday, and charms every caller - even at 2am when the competition's phones go to voicemail.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800">
      {/* Scottish background pattern */}
      <div className="absolute inset-0 bg-tartan-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Questions, <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Answered</span>
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about bringing Oor Laura to your Scottish estate agency
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-amber-400/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-slate-700/30 rounded-t-xl transition-all font-semibold text-lg text-white text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 text-slate-300 leading-relaxed border-t border-slate-700/30">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center bg-gradient-to-r from-amber-400/10 to-yellow-400/10 backdrop-blur-sm p-8 rounded-xl border border-amber-400/20">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Still Have Questions?</h3>
            <p className="text-slate-300 mb-6 text-lg">
              Give us a call or drop us an email - we're always happy to chat about how Laura can transform your Scottish estate agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:07883299579"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 font-bold rounded-lg hover:scale-105 transition-all duration-300"
              >
                Call: 07883 299 579
              </a>
              <span className="text-slate-400">or</span>
              <a
                href="mailto:kyle@agencyeagleeye.com"
                className="text-amber-400 hover:text-amber-300 font-semibold underline"
              >
                kyle@agencyeagleeye.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScottishFAQ;
