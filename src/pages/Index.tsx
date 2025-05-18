import { useEffect, lazy, Suspense, useState, memo } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
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

// Load remaining components
const ProblemStatement = lazy(() => 
  import("../components/ProblemStatement")
    .then(module => ({ default: memo(module.default) }))
);

const Solution = lazy(() => 
  import("../components/Solution")
    .then(module => ({ default: memo(module.default) }))
);

const CompetitorComparison = lazy(() => 
  import("../components/CompetitorComparison")
    .then(module => ({ default: memo(module.default) }))
);

const Benefits = lazy(() => 
  import("../components/Benefits")
    .then(module => ({ default: memo(module.default) }))
);

const HowItWorks = lazy(() => 
  import("../components/HowItWorks")
    .then(module => ({ default: memo(module.default) }))
);

const Results = lazy(() => 
  import("../components/Results")
    .then(module => ({ default: memo(module.default) }))
);

const Pricing = lazy(() => 
  import("../components/Pricing")
    .then(module => ({ default: memo(module.default) }))
);

const About = lazy(() => 
  import("../components/About")
    .then(module => ({ default: memo(module.default) }))
);

const FAQ = lazy(() => 
  import("../components/FAQ")
    .then(module => ({ default: memo(module.default) }))
);

const Footer = lazy(() => 
  import("../components/Footer")
    .then(module => ({ default: memo(module.default) }))
);

const BackgroundGrid = lazy(() => 
  import("../components/BackgroundGrid")
    .then(module => ({ default: memo(module.default) }))
);

// Optimized Index component
const Index = () => {
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    worldMap: false,
    problem: false,
    solution: false,
    comparison: false,
    benefits: false,
    howItWorks: false,
    results: false,
    pricing: false,
    about: false,
    faq: false,
    footer: false
  });
  
  useEffect(() => {
    // Mark as loaded
    setHasLoaded(true);
    
    // Update page title
    document.title = "Eagle Eye | AI Infrastructure for CRE Brokers";
    
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
    
    // Use IntersectionObserver to load sections as they become visible
    const setupIntersectionObserver = () => {
      const observerOptions = {
        rootMargin: '200px 0px', // Load when within 200px of viewport
        threshold: 0.01
      };
      
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setVisibleSections(prev => ({ ...prev, [id]: true }));
            }
            sectionObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      // Observe each section to load it only when needed
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        sectionObserver.observe(section);
      });
      
      return () => {
        sections.forEach(section => {
          sectionObserver.unobserve(section);
        });
      };
    };
    
    // Setup after initial render
    const timer = setTimeout(setupIntersectionObserver, 500);
    
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
      
      <Hero />

      <VideoSection />
      
      <section id="problem">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.problem || deviceType === 'mobile') && <ProblemStatement />}
        </Suspense>
      </section>
      
      <section id="solution">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.solution || deviceType === 'mobile') && <Solution />}
        </Suspense>
      </section>
      
      <section id="comparison">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.comparison || deviceType === 'mobile') && <CompetitorComparison />}
        </Suspense>
      </section>
      
      <section id="benefits">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.benefits || deviceType === 'mobile') && <Benefits />}
        </Suspense>
      </section>
      
      <section id="how-it-works">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.howItWorks || deviceType === 'mobile') && <HowItWorks />}
        </Suspense>
      </section>
      
      <section id="results">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.results || deviceType === 'mobile') && <Results />}
        </Suspense>
      </section>
      
      <section id="pricing">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.pricing || deviceType === 'mobile') && <Pricing />}
        </Suspense>
      </section>
      
      <section id="about">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.about || deviceType === 'mobile') && <About />}
        </Suspense>
      </section>
      
      <section id="faq">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.faq || deviceType === 'mobile') && <FAQ />}
        </Suspense>
      </section>
      
      <Suspense fallback={<div className="h-20 w-full"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
