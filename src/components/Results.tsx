
import { useState, useEffect, useRef } from "react";
import FiveStars from "./results/FiveStars";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import foresiteLogo from "/lovable-uploads/1655747e-449e-497c-9ec1-b3069ad83902.png";

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proven Results for Elite Brokerages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real brokers, real results—see how Eagle Eye is transforming CRE firms nationwide
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className={`h-full bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 transform transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } hover:border-eagle-blue/30 hover:bg-white/10`}
          >
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="mb-4 md:mb-0 md:mr-6 w-40">
                <img src={foresiteLogo} alt="Foresite Commercial Real Estate" className="w-full" />
              </div>
              <div>
                <FiveStars rating={5} />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-eagle-orange">
              "Game-Changing Technology for Our Brokerage"
            </h3>

            <p className="text-gray-200 italic mb-6 text-lg">
              "Eagle Eye AI has revolutionized how we handle our off-market portfolio. The ability to automate document collection and buyer matching saved our team countless hours while increasing our deal flow substantially."
            </p>

            <div className="flex items-center">
              <div>
                <p className="font-medium">Bethany Babcock</p>
                <p className="text-gray-400">Principal, Co-Owner at Foresite Commercial Real Estate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-eagle-orange">6.2x</h3>
                <p className="text-gray-300">Average ROI</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-eagle-blue">78%</h3>
                <p className="text-gray-300">Reduction in Admin Work</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-eagle-orange">23.4%</h3>
                <p className="text-gray-300">Increased Deal Closure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Results;
