
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Proof: React.FC = () => {
  return (
    <section className="py-20 bg-eagle-dark text-white" id="proof">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Florida Brokers Can Expect
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Based on our automation technology and industry analysis
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Projected Results */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-eagle-gold">Projected Results</h3>
            
            <div className="space-y-8">
              {/* Result 1 */}
              <div className="flex items-start">
                <div className="bg-eagle-gold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">30% More Deals</h4>
                  <p className="text-white/70">
                    Close 5+ extra $5M deals per year, adding $750K+ in commissions.
                  </p>
                </div>
              </div>
              
              {/* Result 2 */}
              <div className="flex items-start">
                <div className="bg-eagle-gold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Save 20+ Hours/Week</h4>
                  <p className="text-white/70">
                    Reclaim $400K+ in time value annually to focus on high-value activities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Credibility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-eagle-gold">Expert-Built System</h3>
            
            <div className="flex items-start mb-8">
              <div className="bg-eagle-gold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold">
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Kyle Holland</h4>
                <p className="text-white/70">
                  Built by Kyle Holland, with 5+ years scaling RPA solutions saving global clients 20-30 hours/week.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-eagle-gold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eagle-gold">
                  <path d="m7 11 2-2-2-2"></path>
                  <path d="M11 13h4"></path>
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Florida-Specific AI</h4>
                <p className="text-white/70">
                  Custom-built system using local data from LoopNet, CoStar, and Florida county records.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 uppercase font-semibold"
          >
            <Link to="/profit-maximizer">
              See the Potential
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Add some accent decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-eagle-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-eagle-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Proof;
