
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-eagle-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-eagle-gold/10"
    >
      <div className="bg-eagle-gold/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

const Solution: React.FC = () => {
  const solutions = [
    {
      title: "Hyper-Local Lead Machine",
      description: "10-15 pre-qualified leads/month from LoopNet, CoStar, and off-market sources ($500K-$750K in commissions).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold w-8 h-8">
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
          <path d="M12 20h.01"></path>
        </svg>
      )
    },
    {
      title: "Deal Crusher Analytics",
      description: "Cap rates, ROI, and negotiation strategies in <10 minutes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold w-8 h-8">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      )
    },
    {
      title: "Frictionless Tour Orchestrator",
      description: "95% less scheduling for tours, drones, and lender calls.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold w-8 h-8">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Client Loyalty Engine",
      description: "Personalized updates to unlock $200K-$300K in repeat deals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold w-8 h-8">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      )
    },
    {
      title: "Mobile Command Center",
      description: "Control your pipeline via Telegram.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold w-8 h-8">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-eagle-dark relative" id="solution">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The Eagle Eye Profit Maximizer
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our comprehensive solution automates your entire CRE workflow:
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center bg-eagle-gold/10 rounded-lg p-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl font-bold text-white mb-6">
            <span className="text-eagle-gold">30% more deals</span> • <span className="text-eagle-gold">80% less admin</span> • <span className="text-eagle-gold">14x-23x ROI</span>
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 uppercase font-semibold"
          >
            <a 
              href="https://calendly.com/agencyeagleeye/profit-blueprint" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Started Now
            </a>
          </Button>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-eagle-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-eagle-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Solution;
