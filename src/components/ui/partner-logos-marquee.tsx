
import { Marquee } from "@/components/ui/marquee"
import { Building, Building2, Store, Home, Landmark, Utensils, Car } from "lucide-react"

const PartnerLogos = [
  {
    name: "Local Restaurant",
    icon: Utensils,
    color: "text-eagle-blue"
  },
  {
    name: "Real Estate Agency",
    icon: Home,
    color: "text-eagle-orange"
  },
  {
    name: "Auto Shop",
    icon: Car,
    color: "text-eagle-blue"
  },
  {
    name: "Retail Store",
    icon: Store,
    color: "text-eagle-orange"
  },
  {
    name: "Law Firm",
    icon: Landmark,
    color: "text-eagle-blue"
  },
  {
    name: "Small Business",
    icon: Building,
    color: "text-eagle-orange"
  },
  {
    name: "Corporate Office",
    icon: Building2,
    color: "text-eagle-blue"
  }
];

export function PartnerLogosMarquee() {
  return (
    <Marquee className="py-2" speed={40}>
      {PartnerLogos.map((logo, index) => {
        const Icon = logo.icon;
        return (
          <div
            key={index}
            className="relative h-full w-fit mx-8 flex items-center justify-start gap-2"
          >
            <div className={`p-3 rounded-lg bg-white/5 backdrop-blur-sm flex flex-col items-center ${logo.color}`}>
              <Icon size={28} />
              <p className="text-sm font-medium mt-1">{logo.name}</p>
            </div>
          </div>
        );
      })}
    </Marquee>
  )
}
