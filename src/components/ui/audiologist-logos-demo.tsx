
import { Logos3 } from "@/components/ui/logos3";

const audiologistData = {
  heading: "Trusted by Leading Hearing Care Providers",
  logos: [
    {
      id: "logo-1",
      description: "Coastal Audiology Clinic",
      image: "/lovable-uploads/ffe0f0c3-1df2-44a9-b38e-128d07c3b148.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-2",
      description: "Tobias Clinic",
      image: "/lovable-uploads/fe8e00db-7f70-4ed7-9e7e-4e68681829c5.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-3",
      description: "NewGen Hearing Centers",
      image: "/lovable-uploads/cbef5da8-fefd-4bde-908e-71833f28cea3.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-4",
      description: "Coastal Audiology Clinic",
      image: "/lovable-uploads/ffe0f0c3-1df2-44a9-b38e-128d07c3b148.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-5",
      description: "Tobias Clinic",
      image: "/lovable-uploads/fe8e00db-7f70-4ed7-9e7e-4e68681829c5.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-6",
      description: "NewGen Hearing Centers",
      image: "/lovable-uploads/cbef5da8-fefd-4bde-908e-71833f28cea3.png",
      className: "h-16 w-auto",
    }
  ],
};

function AudiologistLogosDemo() {
  return <Logos3 {...audiologistData} />;
}

export { AudiologistLogosDemo };
