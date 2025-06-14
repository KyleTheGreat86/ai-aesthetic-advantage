
"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ClientLogo {
  id: string;
  name: string;
  image: string;
}

// Define medical billing company logos - only the new uploads
const clientLogos: ClientLogo[] = [
  {
    id: "24-medical",
    name: "24 Medical Billing Services",
    image: "/lovable-uploads/b21091f3-4ba3-4b63-872e-bf8ba5308fd3.png"
  },
  {
    id: "corecloud",
    name: "CoreCloud",
    image: "/lovable-uploads/db7f7b26-9006-4c41-96bc-c308de0c56de.png"
  },
  {
    id: "primecare",
    name: "PrimeCare Medical Billing Services",
    image: "/lovable-uploads/38e4aec1-271e-446a-8da2-0429d93d9fdc.png"
  },
  {
    id: "lakeshore",
    name: "Lakeshore Medical Billing LLC",
    image: "/lovable-uploads/55b0cf31-c397-44eb-b3a2-65d1c9ee0db4.png"
  },
  {
    id: "claimcare",
    name: "ClaimCare - The Medical Billing Professionals",
    image: "/lovable-uploads/a0dd443e-5d6a-497e-acea-9cfbcbe8ecfa.png"
  },
  {
    id: "ppm",
    name: "Precision Practice Management",
    image: "/lovable-uploads/37682424-4d32-40b9-a158-52cae6ce21f9.png"
  },
  {
    id: "portiva",
    name: "Portiva",
    image: "/lovable-uploads/00052d1d-f500-4c69-acc3-d58bee59ccde.png"
  }
];

export function ClientLogosCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg py-3">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[
          AutoScroll({
            playOnInit: true,
            speed: 1.0 // Adjust speed to make it more noticeable
          })
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {clientLogos.map((logo) => (
            <CarouselItem
              key={logo.id}
              className="flex basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 pl-4 justify-center items-center"
            >
              <div className="p-2 h-20 flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                  width="150"
                  height="60"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
