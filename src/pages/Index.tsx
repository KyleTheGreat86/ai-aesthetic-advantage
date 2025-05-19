
import { useEffect, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import PainPoints from "../components/home/PainPoints";
import Solution from "../components/home/Solution";
import Offer from "../components/home/Offer";
import Proof from "../components/home/Proof";
import RoiCalculator from "../components/home/RoiCalculator";
import FaqTeaser from "../components/home/FaqTeaser";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

// Simple loading component
const SectionLoader = () => (
  <div className="py-12 flex justify-center items-center min-h-[200px] w-full">
    <div className="w-6 h-6 border-2 border-eagle-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add Google Analytics code here when available
    console.log("Homepage loaded");
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-eagle-dark">
      <Helmet>
        <title>Agency Eagle Eye: Add $1M+ to Florida CRE with AI</title>
        <meta name="description" content="Automate your Florida CRE brokerage with the Eagle Eye Profit Maximizer. Get $1M+ in commissions. Book a free Profit Blueprint now." />
        <meta name="keywords" content="Florida CRE AI, Commercial Real Estate Automation, Eagle Eye Profit Maximizer" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agencyeagleeye.com/" />
        <meta property="og:title" content="Agency Eagle Eye: Add $1M+ to Florida CRE with AI" />
        <meta property="og:description" content="Automate your Florida CRE brokerage with the Eagle Eye Profit Maximizer. Get $1M+ in commissions. Book a free Profit Blueprint now." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://agencyeagleeye.com/" />
        <meta property="twitter:title" content="Agency Eagle Eye: Add $1M+ to Florida CRE with AI" />
        <meta property="twitter:description" content="Automate your Florida CRE brokerage with the Eagle Eye Profit Maximizer. Get $1M+ in commissions. Book a free Profit Blueprint now." />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agency Eagle Eye",
            "url": "https://agencyeagleeye.com",
            "logo": "https://agencyeagleeye.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "kyle@agencyeagleeye.com",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.linkedin.com/in/kyle-holland-agencyeagleeye/"
            ]
          }
        `}
        </script>
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Eagle Eye Profit Maximizer",
            "provider": {
              "@type": "Organization",
              "name": "Agency Eagle Eye"
            },
            "description": "AI automation system for Florida CRE brokers, providing lead generation, deal analysis, and client management.",
            "areaServed": "Florida"
          }
        `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Offer />
        <Proof />
        <RoiCalculator />
        <FaqTeaser />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
