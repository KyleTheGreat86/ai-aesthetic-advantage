
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";

const ScottishCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-900">
      {/* Scottish background pattern */}
      <div className="absolute inset-0 bg-tartan-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/97856b8d-a49a-477f-8665-351b6010f5e6.png" 
              alt="Scottish Thistle" 
              className="h-20 w-auto"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Let <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Oor Laura</span> Transform Your Business?
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join Scottish estate agents who've already added thousands to their monthly revenue with Laura's 24/7 charm
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <RainbowButton
              calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
              className="font-bold text-lg px-12 py-6 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 hover:shadow-lg hover:shadow-amber-400/50 transform hover:scale-105 transition-all duration-300"
            >
              Aye Told You She Was Braw - Get Your 30 Day Free Trial
            </RainbowButton>
            
            <button 
              onClick={() => window.open('tel:07883299579', '_self')}
              className="font-bold text-lg px-12 py-6 border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 transition-all duration-300 rounded-lg backdrop-blur-sm hover:shadow-lg hover:shadow-amber-400/30 transform hover:scale-105"
            >
              Call Laura for Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScottishCTA;
