
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Offer: React.FC = () => {
  const features = [
    "Hyper-Local Lead Machine",
    "Deal Crusher Analytics",
    "Frictionless Tour Orchestrator",
    "Client Loyalty Engine",
    "Mobile Command Center"
  ];

  const bonuses = [
    "90-min Profit Blueprint session",
    "Monthly Florida trend reports",
    "White-glove onboarding"
  ];

  const guarantees = [
    "60-day money-back guarantee",
    "12-month $1M profit (or we work free)",
    "First movers lock in current pricing"
  ];

  return (
    <section className="py-20 bg-white relative" id="offer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-eagle-dark">
            Limited-Time Offer: Transform Your Brokerage
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For <span className="font-semibold">$15,000 setup + $4,500/month</span>, unlock $1M+ in value
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Core Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg border border-eagle-dark/10"
          >
            <div className="text-eagle-dark mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="m5 12 5 5 9-9"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-eagle-dark">Core Features</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-eagle-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Bonuses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-lg border border-eagle-gold/20"
          >
            <div className="text-eagle-gold mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M12 2v4"></path>
                <path d="m6.293 6.293 2.83 2.83"></path>
                <path d="M2 12h4"></path>
                <path d="m6.293 17.707 2.83-2.83"></path>
                <path d="M12 22v-4"></path>
                <path d="m17.707 17.707-2.83-2.83"></path>
                <path d="M22 12h-4"></path>
                <path d="m17.707 6.293-2.83 2.83"></path>
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-eagle-dark">Bonuses</h3>
            <ul className="space-y-3">
              {bonuses.map((bonus, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-eagle-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{bonus}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg p-6 shadow-lg border border-eagle-dark/10"
          >
            <div className="text-eagle-dark mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-eagle-dark">Guarantees</h3>
            <ul className="space-y-3">
              {guarantees.map((guarantee, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-eagle-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{guarantee}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Exclusive Florida Badge */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-eagle-gold text-eagle-dark inline-block px-6 py-2 rounded-full font-bold text-sm uppercase mb-8 transform rotate-2 shadow-lg">
            Exclusive to Florida CRE
          </div>
          
          <div className="mt-6">
            <Button 
              asChild
              size="lg"
              className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 uppercase font-semibold px-8 py-6"
            >
              <a 
                href="https://calendly.com/agencyeagleeye/profit-blueprint" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Your Profit Blueprint Now
              </a>
            </Button>
            
            <p className="mt-2 text-red-500 font-medium">Only 2 spots left this month!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
