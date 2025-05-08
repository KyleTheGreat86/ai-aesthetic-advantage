
import React from "react"
import { Marquee } from "@/components/ui/marquee"
import { Building, Building2, Store, Home, Landmark, Utensils, Car, Hammer, Scissors, Truck, Leaf, Wrench } from "lucide-react"

// Define business categories outside component to prevent recreating on each render
const BusinessCategories = [
  {
    name: "Restaurants & Cafes",
    icon: Utensils,
    color: "text-eagle-blue"
  },
  {
    name: "Real Estate",
    icon: Home,
    color: "text-eagle-orange"
  },
  {
    name: "Automotive",
    icon: Car,
    color: "text-eagle-blue"
  },
  {
    name: "Retail Shops",
    icon: Store,
    color: "text-eagle-orange"
  },
  {
    name: "Professional Services",
    icon: Landmark,
    color: "text-eagle-blue"
  },
  {
    name: "Small Businesses",
    icon: Building,
    color: "text-eagle-orange"
  },
  {
    name: "Medical & Healthcare",
    icon: Building2,
    color: "text-eagle-blue"
  },
  {
    name: "Contractors",
    icon: Hammer,
    color: "text-eagle-orange"
  },
  {
    name: "Salons & Spas",
    icon: Scissors,
    color: "text-eagle-blue"
  },
  {
    name: "Home Services",
    icon: Wrench,
    color: "text-eagle-orange"
  },
  {
    name: "Landscaping",
    icon: Leaf, 
    color: "text-eagle-blue"
  },
  {
    name: "Delivery Services",
    icon: Truck,
    color: "text-eagle-orange"
  }
];

export function PartnerLogosMarquee() {
  // Memoize component to prevent unnecessary re-renders
  return React.useMemo(() => (
    <Marquee className="py-2" speed={40}>
      {BusinessCategories.map((category, index) => {
        const Icon = category.icon;
        return (
          <div
            key={index}
            className="relative h-full w-fit mx-8 flex items-center justify-start"
          >
            <div className={`p-3 rounded-lg bg-white/5 backdrop-blur-sm flex flex-col items-center ${category.color}`}>
              <Icon size={28} strokeWidth={1.5} />
              <p className="text-sm font-medium mt-1">{category.name}</p>
            </div>
          </div>
        );
      })}
    </Marquee>
  ), []);
}
