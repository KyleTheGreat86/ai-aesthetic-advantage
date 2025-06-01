import { useEffect, lazy, Suspense, useState, memo } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useIsMobile, useDeviceType } from "../hooks/use-mobile";

// Import the RainbowButton CSS styles
import "../rainbow-button-styles.css";

// Simple loading component with Scottish styling
const SectionLoader = () => (
  <div className="py-12 flex justify-center items-center min-h-[200px] w-full">
    <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Lazy load Scottish components
const HowLauraWorks = lazy(() => 
  import("../components/HowLauraWorks")
    .then(module => ({ default: memo(module.default) }))
);

const ScottishTestimonials = lazy(() => 
  import("../components/ScottishTestimonials")
    .then(module => ({ default: memo(module.default) }))
);

const ScottishCTA = lazy(() => 
  import("../components/ScottishCTA")
    .then(module => ({ default: memo(module.default) }))
);

const ScottishPricing = lazy(() => 
  import("../components/ScottishPricing")
    .then(module => ({ default: memo(module.default) }))
);

const ScottishFAQ = lazy(() => 
  import("../components/ScottishFAQ")
    .then(module => ({ default: memo(module.default) }))
);

const Footer = lazy(() => 
  import("../components/Footer")
    .then(module => ({ default: memo(module.default) }))
);

// Add new lazy import for ScottishHowLauraWorks
const ScottishHowLauraWorks = lazy(() => 
  import("../components/ScottishHowLauraWorks")
    .then(module => ({ default: memo(module.default) }))
);

// Optimized Index component with Scottish branding
const Index = () => {
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    howLauraWorks: false,
    testimonials: false,
    cta: false,
    pricing: false,
    faq: false,
  });
  
  useEffect(() => {
    // Mark as loaded
    setHasLoaded(true);
    
    // Update page title with Scottish branding
    document.title = "Agency Eagle Eye | Oor Laura - Scottish AI Voice Solutions for Estate Agents";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Meet Oor Laura - the Scottish AI voice assistant that books viewings 24/7 for estate agents across Scotland. Add £9,600 to your bottom line with our Glasgow-born AI technology.');
    
    // Smooth scrolling with Scottish charm
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
    
    // Setup intersection observer for Highland mist lazy loading
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
    <div className="min-h-screen w-full bg-slate-900 text-white">
      <Navbar />
      
      <Hero />
      
      <section id="how-laura-works">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.howLauraWorks || deviceType === 'mobile') && <ScottishHowLauraWorks />}
        </Suspense>
      </section>
      
      <section id="testimonials">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.testimonials || deviceType === 'mobile') && <ScottishTestimonials />}
        </Suspense>
      </section>
      
      <section id="cta">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.cta || deviceType === 'mobile') && <ScottishCTA />}
        </Suspense>
      </section>
      
      <section id="pricing">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.pricing || deviceType === 'mobile') && <ScottishPricing />}
        </Suspense>
      </section>
      
      <section id="faq">
        <Suspense fallback={<SectionLoader />}>
          {(visibleSections.faq || deviceType === 'mobile') && <ScottishFAQ />}
        </Suspense>
      </section>
      
      <Suspense fallback={<div className="h-20 w-full"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
