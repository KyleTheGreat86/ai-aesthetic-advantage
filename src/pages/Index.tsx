
import { useEffect, lazy, Suspense, useState, memo } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useIsMobile, useDeviceType } from "../hooks/use-mobile";

// Import the RainbowButton CSS styles
import "../rainbow-button-styles.css";

// Simple loading component to avoid layout shift
const SectionLoader = () => (
  <div className="py-12 flex justify-center items-center min-h-[200px] w-full">
    <div className="w-6 h-6 border-2 border-eagle-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Lazy load components with higher loading priority
const LoadingScreen = lazy(() => 
  import("../components/LoadingScreen")
    .then(module => ({ default: memo(module.default) }))
);

const WorldMapHero = lazy(() => 
  import("../components/WorldMapHero")
    .then(module => ({ default: memo(module.default) }))
);

// Eager load the ROI Calculator since it's important
import RoiCalculator from "../components/RoiCalculator";

// Lazy load components but with immediate loading for desktop
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

// Optimized Index component
const Index = () => {
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
        import("../components/ProblemStatement"),
        import("../components/Solution"),
        import("../components/HowItWorks"),
        import("../components/Results"),
        import("../components/Pricing"),
        import("../components/Guarantee"),
        import("../components/TeamExperts"),
        import("../components/About"),
        import("../components/FAQ"),
        import("../components/Footer"),
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

export default Index;
