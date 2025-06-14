
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
    image: "/lovable-uploads/efbedd82-c0c7-4bac-bccf-94abe56cdd50.png"
  },
  {
    id: "corecloud",
    name: "CoreCloud",
    image: "/lovable-uploads/8280c490-cf0b-47d6-a2bf-5d44715892ab.png"
  },
  {
    id: "primecare",
    name: "PrimeCare Medical Billing Services",
    image: "/lovable-uploads/db0fee9a-6a6f-4583-a573-9d9b76685f81.png"
  },
  {
    id: "lakeshore",
    name: "Lakeshore Medical Billing LLC",
    image: "/lovable-uploads/f8000bb6-b875-4476-8dd0-1c8adf4bb370.png"
  },
  {
    id: "claimcare",
    name: "ClaimCare - The Medical Billing Professionals",
    image: "/lovable-uploads/cbaee609-1583-438c-b302-3931b7a383b5.png"
  },
  {
    id: "ppm",
    name: "Precision Practice Management",
    image: "/lovable-uploads/aea334e3-f153-4250-a4d6-dee1c4723f01.png"
  },
  {
    id: "portiva",
    name: "Portiva",
    image: "/lovable-uploads/d7146a0d-98ad-431a-bb34-db6548f53005.png"
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
