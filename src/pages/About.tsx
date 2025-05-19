
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { EagleButton } from "@/components/ui/eagle-button";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "About Agency Eagle Eye | Florida CRE AI Specialists";
    
    // Create meta description if it doesn't exist or update it if it does
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Founded to solve inefficiencies killing Florida CRE brokerages. Our AI is your unfair advantage. Learn about our mission and expertise.");
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    console.log("About page loaded");
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
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
                  className="bg-eagle-orange text-eagle-dark hover:bg-eagle-orange/90 px-8 py-3 rounded font-semibold text-lg inline-block"
                >
                  Claim Your Free Profit Blueprint
                </a>
              </div>
              
              <div className="flex justify-center">
                {/* Placeholder for Kyle's headshot - replace with actual image when available */}
                <div className="w-72 h-72 rounded-full bg-white/10 border-4 border-eagle-orange flex items-center justify-center">
                  <span className="text-lg text-white/60">Founder Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-eagle-blue/20">
                <p className="text-lg leading-relaxed mb-6">
                  I'm Kyle Holland, based in the UK, with 5+ years scaling RPA solutions that saved global clients 20-30 hours/week. I founded Agency Eagle Eye to bring that same automation power to Florida CRE brokers.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our AI Profit Maximizer uses Florida-specific data to deliver $1M+ in commissions by automating leads, deals, tours, and client nurturing—all remotely via Telegram. We're here to make your brokerage a deal-closing machine.
                </p>
                
                <div className="mt-8 text-center">
                  <Link to="/profit-maximizer">
                    <EagleButton className="uppercase">
                      Learn About Our Offer <ChevronRight className="ml-1" />
                    </EagleButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="py-20 bg-gradient-to-br from-black to-eagle-dark/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Trust Us?</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-eagle-orange mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="font-semibold">5+ years in RPA</span>, automating complex workflows for global clients.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-eagle-orange mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="font-semibold">Proprietary AI built with Florida-exclusive data</span> from LoopNet, CoStar, and more.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-eagle-orange mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="font-semibold">Proven to deliver</span>: Projected 30% more deals, 80% less admin, 14x-23x ROI.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <RainbowButton 
                  calendlyLink="https://calendly.com/agencyeagleeye/profit-blueprint" 
                  className="uppercase font-bold"
                >
                  Book a Demo
                </RainbowButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-eagle-blue to-eagle-orange">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Ready to Add $1M+ to Your Brokerage?
              </h2>
              
              <RainbowButton 
                calendlyLink="https://calendly.com/agencyeagleeye/profit-blueprint" 
                className="uppercase font-bold text-lg bg-white/20 backdrop-blur-sm border border-white/30"
              >
                <span className="whitespace-nowrap">Claim Your Free Profit Blueprint</span>
                <span className="text-eagle-orange ml-2">(2 Spots Left)</span>
              </RainbowButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
