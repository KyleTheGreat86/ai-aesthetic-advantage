
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

// Define all client logos
const clientLogos: ClientLogo[] = [
  {
    id: "husky-tree",
    name: "Husky Tree Services",
    image: "/lovable-uploads/e29dbb51-c2ca-4964-a446-ba587209e5ce.png"
  },
  {
    id: "30a-blaze",
    name: "30A Blaze",
    image: "/lovable-uploads/8c7ece58-de76-4119-b7f2-2f0173d7fd9c.png"
  },
  {
    id: "beabstrakt",
    name: "@BEABSTRAKT",
    image: "/lovable-uploads/0adbfe37-a563-4829-9b27-c4f6c0dfac70.png"
  },
  {
    id: "unique-auto",
    name: "Unique Auto",
    image: "/lovable-uploads/5127203e-a625-4f68-9136-6183b4f8fdb0.png"
  },
  {
    id: "hoosier",
    name: "Hoosier Stump Remover",
    image: "/lovable-uploads/1facb81d-d264-42b0-937e-7160567db9d6.png"
  },
  {
    id: "atomic-air",
    name: "Atomic Air",
    image: "/lovable-uploads/b10c244b-38d5-4ab0-9ea6-5576226f3897.png"
  },
  {
    id: "peaks-pontoons",
    name: "Peak's Pontoons",
    image: "/lovable-uploads/2e9a41eb-a8c6-470a-b03f-0cb121f7f7dc.png"
  },
  {
    id: "30a-pontoon",
    name: "30A Pontoon Rental",
    image: "/lovable-uploads/2b26e41f-f846-4857-b9a7-17badb42116c.png"
  },
  {
    id: "tortoise-clinic",
    name: "Tortoise Clinic",
    image: "/lovable-uploads/a6672e0a-e35a-4f8d-8d7d-f034a0ce031b.png"
  },
  {
    id: "dryer-vent",
    name: "Dryer Vent Superheroes",
    image: "/lovable-uploads/f008ca35-70b7-470d-b143-fdccbccb42ec.png"
  },
  {
    id: "monster-steamer",
    name: "Monster Steamer",
    image: "/lovable-uploads/a9f5be26-0720-4d15-840d-043a09efa8e9.png"
  },
  {
    id: "golden-days",
    name: "Golden Days Photo Co",
    image: "/lovable-uploads/06fc3f77-c015-4fc3-8572-be8ba5f48823.png"
  },
  {
    id: "premier-edge",
    name: "Premier Edge",
    image: "/lovable-uploads/832b58cc-33bc-448c-9f70-00ae0255ce21.png"
  },
  {
    id: "volta",
    name: "Volta Electrical Company",
    image: "/lovable-uploads/f1f54ace-dc90-45aa-ac7c-8dc24b1e61e7.png"
  },
  {
    id: "unique-auto-2",
    name: "Unique Auto II",
    image: "/lovable-uploads/1591292a-df57-4163-9687-2b7027904b8f.png"
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
