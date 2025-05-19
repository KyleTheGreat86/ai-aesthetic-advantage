
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    // Set page title directly
    document.title = "About Agency Eagle Eye | Florida CRE AI Specialists";
    
    // Set meta tags
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", "Founded to solve inefficiencies killing Florida CRE brokerages. Our AI is your unfair advantage. Learn about our mission and expertise.");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add Google Analytics code here when available
    console.log("About page loaded");
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-eagle-dark">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-b from-eagle-dark to-eagle-dark/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Why Agency Eagle Eye?
                </h1>
                <p className="text-xl mb-8 text-white/80">
                  Founded to solve the inefficiencies killing Florida CRE brokerages. Our AI is your unfair advantage.
                </p>
                <a 
                  href="https://calendly.com/agencyeagleeye/profit-blueprint" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 px-8 py-3 rounded font-semibold text-lg inline-block"
                >
                  Claim Your Free Profit Blueprint
                </a>
              </div>
              <div className="flex justify-center">
                {/* Placeholder for Kyle's headshot */}
                <div className="w-72 h-72 rounded-full bg-white/10 border-4 border-eagle-gold flex items-center justify-center">
                  <span className="text-lg text-white/60">Founder Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Placeholder for the full About content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Coming Soon</h2>
            <p className="text-center text-lg">
              The full About page is under development. Check back soon!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
