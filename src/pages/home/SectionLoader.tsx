
import React from "react";

// Simple loading component to avoid layout shift
const SectionLoader = () => (
  <div className="py-12 flex justify-center items-center min-h-[200px] w-full">
    <div className="w-6 h-6 border-2 border-eagle-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default SectionLoader;
