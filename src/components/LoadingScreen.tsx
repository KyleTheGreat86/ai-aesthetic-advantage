
import { useEffect, useState } from "react";
import eagleLogo from "/lovable-uploads/b797bc22-5a08-4a8e-a9e5-b0a065bd73a4.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shorter timeout to ensure the app becomes visible
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("Loading screen complete");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-eagle-dark flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 relative animate-pulse-slow">
          <img
            src={eagleLogo}
            alt="Agency Eagle Eye Logo"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eagle-blue/20 to-eagle-orange/20 rounded-full blur-xl -z-10"></div>
        </div>
        <div className="mt-8">
          <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-eagle-blue to-eagle-orange animate-[loader_2s_ease-in-out_forwards]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
