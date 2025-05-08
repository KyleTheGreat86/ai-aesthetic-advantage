
import { useEffect, Suspense, useState, memo } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import { useIsMobile, useDeviceType } from "../../hooks/use-mobile";
import SectionLoader from "./SectionLoader";
import { LoadingScreen, WorldMapHero, ProblemStatement, Solution, HowItWorks, 
  Results, Pricing, Guarantee, TeamExperts, About, FAQ, Footer, BackgroundGrid } from "./LazyComponents";

// Import RoiCalculator directly since it's important
import RoiCalculator from "../../components/RoiCalculator";

// Import the RainbowButton CSS styles
import "../../rainbow-button-styles.css";

const IndexPage = () => {
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    // Mark as loaded
    setHasLoaded(true);
    
    // Update page title
    document.title = "Eagle Eye | #1 Google Review Management for Local Businesses";
    
    // Smooth scrolling with passive event listeners for performance
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick, { passive: false });
    
    // Preload all components after initial render
    const preloadComponents = () => {
      // Trigger imports for all major components to ensure they load
      [
        import("../../components/ProblemStatement"),
        import("../../components/Solution"),
        import("../../components/HowItWorks"),
        import("../../components/Results"),
        import("../../components/Pricing"),
        import("../../components/Guarantee"),
        import("../../components/TeamExperts"),
        import("../../components/About"),
        import("../../components/FAQ"),
        import("../../components/Footer"),
      ].forEach(promise => promise.catch(err => console.error("Failed to preload component:", err)));
    };
    
    // Start preloading after a brief delay to prioritize critical components first
    const timer = setTimeout(preloadComponents, 300);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-eagle-dark text-white">
      <Suspense fallback={<div className="fixed inset-0 bg-eagle-dark z-50"></div>}>
        <LoadingScreen />
      </Suspense>
      
      <Navbar />
      
      <Suspense fallback={null}>
        <BackgroundGrid />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <WorldMapHero />
      </Suspense>
      
      <Hero />
      
      {/* ROI Calculator loaded directly (no lazy loading) */}
      <section id="roiCalculator" className="w-full">
        <RoiCalculator />
      </section>
      
      {/* Load remaining components with proper suspense boundaries */}
      <section id="problem" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <ProblemStatement />
        </Suspense>
      </section>
      
      <section id="solution" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <Solution />
        </Suspense>
      </section>
      
      <section id="howItWorks" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
      </section>
      
      <section id="results" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <Results />
        </Suspense>
      </section>
      
      <section id="pricing" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <Pricing />
        </Suspense>
      </section>
      
      <section id="guarantee" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <Guarantee />
        </Suspense>
      </section>
      
      <section id="team" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <TeamExperts />
        </Suspense>
      </section>
      
      <section id="about" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </section>
      
      <section id="faq" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </section>
      
      <Suspense fallback={<div className="h-20 w-full"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default memo(IndexPage);
