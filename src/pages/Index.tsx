
import { useEffect, lazy, Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorldMapHero from "../components/WorldMapHero";
import { useIsMobile } from "../hooks/use-mobile";

// Import the RainbowButton CSS styles
import "../rainbow-button-styles.css";

// Lazy load components to improve initial page load
const ProblemStatement = lazy(() => import("../components/ProblemStatement"));
const Solution = lazy(() => import("../components/Solution"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const Results = lazy(() => import("../components/Results"));
const Pricing = lazy(() => import("../components/Pricing"));
const Guarantee = lazy(() => import("../components/Guarantee"));
const TeamExperts = lazy(() => import("../components/TeamExperts"));
const About = lazy(() => import("../components/About"));
const FAQ = lazy(() => import("../components/FAQ"));
const Footer = lazy(() => import("../components/Footer"));
const BackgroundGrid = lazy(() => import("../components/BackgroundGrid"));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-eagle-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    console.log("Index component mounted");
    
    // Smooth scrolling for anchor links
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
    
    // Update page title to match new positioning
    document.title = "Eagle Eye | #1 Google Review Management for Local Businesses";
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-eagle-dark text-white">
      <Suspense fallback={<div className="fixed inset-0 bg-eagle-dark z-50"></div>}>
        <BackgroundGrid />
      </Suspense>
      <LoadingScreen />
      <Navbar />
      <WorldMapHero />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <ProblemStatement />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Solution />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Results />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Guarantee />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TeamExperts />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
