
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqTeaser: React.FC = () => {
  const faqs = [
    {
      question: "Do I need tech skills?",
      answer: "No, our AI is plug-and-play. You control everything through simple commands in Telegram, with no coding or technical setup required."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade encryption and follow strict data protection standards to ensure your client and deal information stays completely confidential."
    },
    {
      question: "How fast is setup?",
      answer: "Just 2 weeks with our white-glove onboarding. We handle all the technical setup and training so you can start seeing results immediately."
    }
  ];

  return (
    <section className="py-20 bg-eagle-dark text-white" id="faq-teaser">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got Questions?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are quick answers to the most common questions
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-eagle-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-eagle-gold text-eagle-gold hover:bg-eagle-gold/10 uppercase font-semibold"
            >
              <Link to="/profit-maximizer#faq">
                View Full FAQ
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default FaqTeaser;
