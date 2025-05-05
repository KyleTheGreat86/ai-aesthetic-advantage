
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
import { SplashCursor } from "../components/ui/splash-cursor";

const Index = () => {
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

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-eagle-dark text-white">
      <SplashCursor 
        SPLAT_RADIUS={0.25}
        COLOR_UPDATE_SPEED={5}
        TRANSPARENT={true}
        BACK_COLOR={{ r: 0.075, g: 0.15, b: 0.3 }}
      />
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
