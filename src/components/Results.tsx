
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const resultsData = [
  {
    clinic: "MedSpa (London)",
    reviews: 32,
    bookings: 4,
    revenue: "£6,800",
  },
  {
    clinic: "Dental Practice (Manchester)",
    reviews: 27,
    bookings: 5,
    revenue: "£9,200",
  },
  {
    clinic: "Hair Clinic (Birmingham)",
    reviews: 22,
    bookings: 3,
    revenue: "£7,500",
  },
];

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimateNumbers(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Real Results From UK Clinics
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="p-4 text-gray-400">Clinic Type</th>
                  <th className="p-4 text-gray-400">New Reviews</th>
                  <th className="p-4 text-gray-400">Extra Bookings</th>
                  <th className="p-4 text-gray-400">Revenue Increase</th>
                </tr>
              </thead>
              <tbody>
                {resultsData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-white/5 transition-all duration-500 transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <td className="p-4 font-medium">{row.clinic}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className="text-eagle-blue font-bold text-xl mr-2">
                          {animateNumbers ? row.reviews : 0}
                        </span>
                        <span className="text-gray-400 text-sm">in 14 days</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <span className="text-eagle-orange font-bold text-xl mr-2">
                          {animateNumbers ? row.bookings : 0}
                        </span>
                        <span className="text-gray-400 text-sm">per month</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-xl text-green-400">
                        {row.revenue}
                      </span>
                      <span className="text-gray-400 text-sm">/month</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className={`mt-16 p-6 bg-white/5 rounded-lg border border-white/10 transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative mb-4 md:mb-0 md:mr-8">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                  "
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-lg italic">
                  "We've seen a{" "}
                  <span className="text-eagle-orange font-semibold">28% increase</span>{" "}
                  in consultations converting to treatments since implementing the
                  system."
                </p>
                <p className="mt-2 text-gray-400">
                  – Dr. Williams, Aesthetics Clinic Owner
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#pricing"
              className={`eagle-btn-secondary inline-flex items-center group transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <span>See Pricing & Start Free Trial</span>
              <ArrowRight 
                className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Results;
