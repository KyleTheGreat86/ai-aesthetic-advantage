
import { useState, useEffect, useRef } from "react";
import { FiveStars } from "./results/FiveStars";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

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

  const testimonials = [
    {
      title: "$1.2M in New Commissions",
      quote: "Eagle Eye found us 3 off-market deals we'd have missed. The system paid for itself in 45 days.",
      author: "Sarah K., Miami Industrial Broker",
      rating: 5,
      imageSrc: "/lovable-uploads/2e9a41eb-a8c6-470a-b03f-0cb121f7f7dc.png"
    },
    {
      title: "From Spreadsheets to AI",
      quote: "Our brokers now spend 80% less time on admin. The mobile interface is a game-changer.",
      author: "James L., Phoenix Multifamily Group",
      rating: 5,
      imageSrc: "/lovable-uploads/832b58cc-33bc-448c-9f70-00ae0255ce21.png"
    },
    {
      title: "Best Tech Investment Ever",
      quote: "The automated client nurture bot brought us 2 repeat deals last quarter.",
      author: "Lisa T., Charlotte Retail Specialist",
      rating: 5,
      imageSrc: "/lovable-uploads/5127203e-a625-4f68-9136-6183b4f8fdb0.png"
    }
  ];

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

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 p-1"
                >
                  <div
                    className={`h-full bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 flex flex-col transform transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    } hover:border-eagle-blue/30 hover:bg-white/10`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="mb-4">
                      <FiveStars rating={testimonial.rating} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-eagle-orange">
                      {testimonial.title}
                    </h3>

                    <p className="text-gray-200 italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 mr-3">
                        <img
                          src={testimonial.imageSrc}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="relative left-0" />
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
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
