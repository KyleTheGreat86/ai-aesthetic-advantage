
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import PainPoints from "../components/home/PainPoints";
import Solution from "../components/home/Solution";
import Offer from "../components/home/Offer";
import Proof from "../components/home/Proof";
import RoiCalculator from "../components/home/RoiCalculator";
import FaqTeaser from "../components/home/FaqTeaser";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Set page title directly
    document.title = "Agency Eagle Eye: Add $1M+ to Florida CRE with AI";
    
    // Set meta tags
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", "Automate your Florida CRE brokerage with the Eagle Eye Profit Maximizer. Get $1M+ in commissions. Book a free Profit Blueprint now.");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add Google Analytics code here when available
    console.log("Homepage loaded");
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-eagle-dark">
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
