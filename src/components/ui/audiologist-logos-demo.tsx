
import { Logos3 } from "@/components/ui/logos3";

const audiologistData = {
  heading: "Trusted by Local Businesses Worldwide",
  logos: [
    {
      id: "logo-1",
      description: "Plumbing Services",
      image: "/lovable-uploads/ffe0f0c3-1df2-44a9-b38e-128d07c3b148.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-2",
      description: "Local Restaurant",
      image: "/lovable-uploads/fe8e00db-7f70-4ed7-9e7e-4e68681829c5.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-3",
      description: "Property Management",
      image: "/lovable-uploads/cbef5da8-fefd-4bde-908e-71833f28cea3.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-4",
      description: "Home Services",
      image: "/lovable-uploads/ffe0f0c3-1df2-44a9-b38e-128d07c3b148.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-5",
      description: "Auto Repair Shop",
      image: "/lovable-uploads/fe8e00db-7f70-4ed7-9e7e-4e68681829c5.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-6",
      description: "Fitness Center",
      image: "/lovable-uploads/cbef5da8-fefd-4bde-908e-71833f28cea3.png",
      className: "h-16 w-auto",
    }
  ],
};

function AudiologistLogosDemo() {
  return <Logos3 {...audiologistData} />;
}

export { AudiologistLogosDemo };
