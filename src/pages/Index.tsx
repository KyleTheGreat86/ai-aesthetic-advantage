
import { useEffect, lazy, Suspense, useState, memo } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Challenge from "../components/Challenge";
import { useIsMobile, useDeviceType } from "../hooks/use-mobile";

// Import the RainbowButton CSS styles
import "../rainbow-button-styles.css";

// Simple loading component to avoid layout shift
const SectionLoader = () => (
  <div className="py-12 flex justify-center items-center min-h-[200px] w-full">
    <div className="w-6 h-6 border-2 border-eagle-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Lazy load components
const Solution = lazy(() => 
  import("../components/Solution")
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

const Testimonials = lazy(() => 
  import("../components/Testimonials")
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

// Optimized Index component
const Index = () => {
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    challenge: false,
    solution: false,
    benefits: false,
    howItWorks: false,
    testimonials: false,
    faq: false,
  });
  
  useEffect(() => {
    // Mark as loaded
    setHasLoaded(true);
    
    // Update page title
    document.title = "Eagle Eye Response | AI Assistant for Funeral Homes";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Eagle Eye Response provides compassionate 24/7 AI assistance for funeral homes, ensuring families receive immediate care while protecting staff wellbeing.');
    
    // Smooth scrolling
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
    
    // Setup intersection observer for lazy loading
    const setupIntersectionObserver = () => {
      const observerOptions = {
        rootMargin: '200px 0px',
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
    
    const timer = setTimeout(setupIntersectionObserver, 500);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-eagle-dark">
      <Navbar />
      
      <Hero />
      
      <Challenge />
      
      <section id="solution">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.solution || deviceType === 'mobile') && <Solution />}
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
      
      <section id="testimonials">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.testimonials || deviceType === 'mobile') && <Testimonials />}
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
