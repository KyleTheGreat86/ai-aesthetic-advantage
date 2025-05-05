
import { useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemStatement from "../components/ProblemStatement";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import Results from "../components/Results";
import Pricing from "../components/Pricing";
import Guarantee from "../components/Guarantee";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BackgroundGrid from "../components/BackgroundGrid";
import { useIsMobile } from "../hooks/use-mobile";

// Import the RainbowButton CSS styles
import "../rainbow-button-styles.css";

const Index = () => {
  const isMobile = useIsMobile();
  
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // Enhance all buttons with rainbow effect via CSS
    const applyRainbowEffect = () => {
      // Apply CSS class to standard buttons
      document.querySelectorAll('button').forEach(button => {
        if (!button.classList.contains('rainbow-enhanced') && 
            !button.classList.contains('no-rainbow')) {
          button.classList.add('rainbow-enhanced');
        }
      });
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Initial application and setup a mutation observer to catch dynamically added buttons
    applyRainbowEffect();
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
          applyRainbowEffect();
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-eagle-dark text-white">
      <BackgroundGrid />
      <LoadingScreen />
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Solution />
      <HowItWorks />
      <Results />
      <Pricing />
      <Guarantee />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
