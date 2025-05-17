
import React from "react";
import { Check, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { EagleButton } from "./ui/eagle-button";

const CompetitorComparison = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="comparison" className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="competitive-edge max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Outperform Your Competition
          </h2>
          <p className="text-center mb-10 text-gray-300 max-w-3xl mx-auto">
            See how brokers using our system gain an unbeatable advantage:
          </p>
          
          <div className="comparison-table border border-white/10 rounded-xl overflow-hidden mb-8">
            {/* Header */}
            <div className="grid grid-cols-3 bg-eagle-dark/80">
              <div className="p-4 text-center"></div>
              <div className="p-4 text-center font-semibold border-l border-white/10">Without Our System</div>
              <div className="p-4 text-center font-semibold border-l border-white/10">With Our System</div>
            </div>
            
            {/* Row 1 */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-4 md:p-6 flex items-center font-medium bg-eagle-dark/30">Lead Research</div>
              <div className="p-4 md:p-6 bg-eagle-dark/20 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-red-900/30 text-red-300 px-2 py-1 rounded-full text-xs">10 hrs/week</span>
                  <span className="text-red-500"><X size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">Manual data scraping, missed opportunities</p>
              </div>
              <div className="p-4 md:p-6 bg-eagle-dark/10 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-green-900/30 text-green-300 px-2 py-1 rounded-full text-xs">2 hrs/week</span>
                  <span className="text-green-500"><Check size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">AI-curated leads delivered automatically</p>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-4 md:p-6 flex items-center font-medium bg-eagle-dark/30">Listing Responses</div>
              <div className="p-4 md:p-6 bg-eagle-dark/20 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-red-900/30 text-red-300 px-2 py-1 rounded-full text-xs">24-48 hrs delay</span>
                  <span className="text-red-500"><X size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">Miss hot deals to faster competitors</p>
              </div>
              <div className="p-4 md:p-6 bg-eagle-dark/10 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-green-900/30 text-green-300 px-2 py-1 rounded-full text-xs">Instant alerts</span>
                  <span className="text-green-500"><Check size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">First-mover advantage with SMS/Telegram alerts</p>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-4 md:p-6 flex items-center font-medium bg-eagle-dark/30">Deal Analysis</div>
              <div className="p-4 md:p-6 bg-eagle-dark/20 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-red-900/30 text-red-300 px-2 py-1 rounded-full text-xs">5-8 hrs/deal</span>
                  <span className="text-red-500"><X size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">Manual spreadsheets, prone to errors</p>
              </div>
              <div className="p-4 md:p-6 bg-eagle-dark/10 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-green-900/30 text-green-300 px-2 py-1 rounded-full text-xs">15 min/deal</span>
                  <span className="text-green-500"><Check size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">Automated financials and cap rate calculations</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#how-it-works" className="inline-block">
              <EagleButton className="uppercase font-bold w-48 max-w-full py-3">
                How It Works
              </EagleButton>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default CompetitorComparison;
