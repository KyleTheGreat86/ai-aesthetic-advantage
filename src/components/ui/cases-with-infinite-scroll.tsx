
"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [api, current]);

  // Medical billing company logos data
  const medicalBillingLogos = [
    { name: "Medisoft", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=80&fit=crop&auto=format" },
    { name: "athenahealth", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=80&fit=crop&auto=format" },
    { name: "Epic", img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=80&fit=crop&auto=format" },
    { name: "Cerner", img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&auto=format" },
    { name: "NextGen", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=80&fit=crop&auto=format" },
    { name: "Allscripts", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=80&fit=crop&auto=format" },
    { name: "AdvancedMD", img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=80&fit=crop&auto=format" },
    { name: "DrChrono", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=80&fit=crop&auto=format" },
    { name: "Practice Fusion", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=80&fit=crop&auto=format" },
    { name: "Kareo", img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&auto=format" },
    { name: "ChartLogic", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=80&fit=crop&auto=format" },
    { name: "AthenaCollector", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=80&fit=crop&auto=format" },
    { name: "CureMD", img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=80&fit=crop&auto=format" },
    { name: "eClinicalWorks", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=80&fit=crop&auto=format" },
    { name: "GE Healthcare", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=80&fit=crop&auto=format" }
  ];

  return (
    <div className="w-full py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tighter font-regular text-center text-white">
            Trusted by medical billing companies nationwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {medicalBillingLogos.map((logo, index) => (
                <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-white/10 backdrop-blur-sm items-center justify-center p-4 border border-white/20">
                    <div className="text-center">
                      <img 
                        src={logo.img} 
                        alt={logo.name}
                        className="w-full h-8 object-contain mb-2 brightness-0 invert opacity-80"
                      />
                      <span className="text-xs text-white/70">{logo.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
