
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

// Lazy load components with lower loading priority
const ProblemStatement = lazy(() => 
  import("../components/ProblemStatement")
    .then(module => ({ default: memo(module.default) }))
);

const Solution = lazy(() => 
  import("../components/Solution")
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

const Guarantee = lazy(() => 
  import("../components/Guarantee")
    .then(module => ({ default: memo(module.default) }))
);

const TeamExperts = lazy(() => 
  import("../components/TeamExperts")
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
    howItWorks: false,
    results: false,
    pricing: false,
    guarantee: false,
    team: false,
    about: false,
    faq: false,
    footer: false
  });
  
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
      
      <Suspense fallback={<SectionLoader />}>
        <WorldMapHero />
      </Suspense>
      
      <Hero />
      
      {/* Load remaining components progressively as user scrolls */}
      <section id="problem" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.problem || deviceType === 'mobile') && <ProblemStatement />}
        </Suspense>
      </section>
      
      <section id="solution" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.solution || deviceType === 'mobile') && <Solution />}
        </Suspense>
      </section>
      
      <section id="howItWorks" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.howItWorks || deviceType === 'mobile') && <HowItWorks />}
        </Suspense>
      </section>
      
      <section id="results" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.results || deviceType === 'mobile') && <Results />}
        </Suspense>
      </section>
      
      <section id="pricing" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.pricing || deviceType === 'mobile') && <Pricing />}
        </Suspense>
      </section>
      
      <section id="guarantee" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.guarantee || deviceType === 'mobile') && <Guarantee />}
        </Suspense>
      </section>
      
      <section id="team" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.team || deviceType === 'mobile') && <TeamExperts />}
        </Suspense>
      </section>
      
      <section id="about" className="w-full">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.about || deviceType === 'mobile') && <About />}
        </Suspense>
      </section>
      
      <section id="faq" className="w-full">
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
