
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProfitMaximizer = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add Google Analytics code here when available
    console.log("Profit Maximizer page loaded");
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-eagle-dark">
      <Helmet>
        <title>Eagle Eye Profit Maximizer | $1M+ in CRE Commissions</title>
        <meta name="description" content="The Eagle Eye Profit Maximizer automates your Florida CRE brokerage. Add $1M+ in commissions with our AI-powered system. Book your free blueprint now." />
        <meta name="keywords" content="Eagle Eye Profit Maximizer, CRE Automation, Florida Real Estate AI" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-b from-eagle-dark to-eagle-dark/80 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                The Eagle Eye Profit Maximizer:<br />
                <span className="text-eagle-gold">Your $1M+ Advantage</span>
              </h1>
              <p className="text-xl mb-8 text-white/80">
                Automate your Florida CRE brokerage and add $1M+ in commissions with zero busywork
              </p>
              <a 
                href="https://calendly.com/agencyeagleeye/profit-blueprint" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 px-8 py-3 rounded font-semibold text-lg inline-flex items-center"
              >
                Book Your Free Profit Blueprint
                <span className="ml-2 bg-red-500 text-white text-xs px-1 py-0.5 rounded">2 Spots Left</span>
              </a>
              
              <div className="mt-12">
                <p className="text-lg font-medium text-eagle-gold">
                  2 spots left this month—book by May 31, 2025
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Placeholder for the full Profit Maximizer content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Coming Soon</h2>
            <p className="text-center text-lg">
              The full Profit Maximizer page is under development. Check back soon!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfitMaximizer;
