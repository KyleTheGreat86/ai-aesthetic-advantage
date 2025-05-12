
import React from "react"
import { Marquee } from "@/components/ui/marquee"
import { Building, Building2, Scale, Gavel, Landmark, Database, Server, File, BookOpen, BarChart3 } from "lucide-react"

// Define business categories outside component to prevent recreating on each render
const BusinessCategories = [
  {
    name: "Patent Law",
    icon: File,
    color: "text-eagle-blue"
  },
  {
    name: "Trademark Attorneys",
    icon: Landmark,
    color: "text-eagle-orange"
  },
  {
    name: "IP Litigation",
    icon: Gavel,
    color: "text-eagle-blue"
  },
  {
    name: "Corporate Law",
    icon: Building,
    color: "text-eagle-orange"
  },
  {
    name: "IP Portfolio Management",
    icon: Database,
    color: "text-eagle-blue"
  },
  {
    name: "Legal Research",
    icon: BookOpen,
    color: "text-eagle-orange"
  },
  {
    name: "IP Strategy",
    icon: BarChart3,
    color: "text-eagle-blue"
  },
  {
    name: "International IP",
    icon: Scale,
    color: "text-eagle-orange"
  },
  {
    name: "AI Legal Tech",
    icon: Server,
    color: "text-eagle-blue"
  },
  {
    name: "Law Firms",
    icon: Building2,
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
