
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
            Outperform Other Billing Companies
          </h2>
          <p className="text-center mb-10 text-gray-300 max-w-3xl mx-auto">
            See how automated practices gain an unbeatable edge:
          </p>
          
          <div className="comparison-table border border-white/10 rounded-xl overflow-hidden mb-8">
            {/* Header */}
            <div className="grid grid-cols-3 bg-eagle-dark/80">
              <div className="p-4 text-center font-semibold">Task</div>
              <div className="p-4 text-center font-semibold border-l border-white/10">Manual Processing</div>
              <div className="p-4 text-center font-semibold border-l border-white/10">With Agency Eagle Eye</div>
            </div>
            
            {/* Row 1 - Claims Processing */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-4 md:p-6 flex items-center font-medium bg-eagle-dark/30">Claims Processing</div>
              <div className="p-4 md:p-6 bg-eagle-dark/20 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-red-900/30 text-red-300 px-2 py-1 rounded-full text-xs">8-12 mins/claim</span>
                  <span className="text-red-500"><X size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">($3.50 labor cost)</p>
              </div>
              <div className="p-4 md:p-6 bg-eagle-dark/10 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-green-900/30 text-green-300 px-2 py-1 rounded-full text-xs">90 seconds/claim</span>
                  <span className="text-green-500"><Check size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">($0.50 cost)</p>
              </div>
            </div>
            
            {/* Row 2 - Daily Volume */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-4 md:p-6 flex items-center font-medium bg-eagle-dark/30">Daily Volume</div>
              <div className="p-4 md:p-6 bg-eagle-dark/20 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-red-900/30 text-red-300 px-2 py-1 rounded-full text-xs">30-40 claims/biller</span>
                  <span className="text-red-500"><X size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">(4-7/hour)</p>
              </div>
              <div className="p-4 md:p-6 bg-eagle-dark/10 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-green-900/30 text-green-300 px-2 py-1 rounded-full text-xs">100+ claims/hour</span>
                  <span className="text-green-500"><Check size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">(Overnight batches)</p>
              </div>
            </div>
            
            {/* Row 3 - Denial Rate */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-4 md:p-6 flex items-center font-medium bg-eagle-dark/30">Denial Rate</div>
              <div className="p-4 md:p-6 bg-eagle-dark/20 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-red-900/30 text-red-300 px-2 py-1 rounded-full text-xs">15-20%</span>
                  <span className="text-red-500"><X size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">($25/rework claim)</p>
              </div>
              <div className="p-4 md:p-6 bg-eagle-dark/10 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-green-900/30 text-green-300 px-2 py-1 rounded-full text-xs">&lt;5%</span>
                  <span className="text-green-500"><Check size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">(99.9% accuracy)</p>
              </div>
            </div>
            
            {/* Row 4 - Cash Flow */}
            <div className="grid grid-cols-3 border-t border-white/10">
              <div className="p-4 md:p-6 flex items-center font-medium bg-eagle-dark/30">Cash Flow</div>
              <div className="p-4 md:p-6 bg-eagle-dark/20 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-red-900/30 text-red-300 px-2 py-1 rounded-full text-xs">48-72 hr turnaround</span>
                  <span className="text-red-500"><X size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">(Delayed payments)</p>
              </div>
              <div className="p-4 md:p-6 bg-eagle-dark/10 border-l border-white/10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="time-badge bg-green-900/30 text-green-300 px-2 py-1 rounded-full text-xs">Same-day submission</span>
                  <span className="text-green-500"><Check size={18} /></span>
                </div>
                <p className="text-sm text-gray-300">(Faster reimbursements)</p>
              </div>
            </div>
          </div>
          
          {/* How It Works Steps */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-start space-x-3">
                <span className="bg-eagle-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">1</span>
                <p className="text-gray-300">Email CMS-1500 PDFs to our secure inbox</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-eagle-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">2</span>
                <p className="text-gray-300">AI extracts patient data, ICD-10s, CPT codes</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-eagle-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">3</span>
                <p className="text-gray-300">Auto-populates your Medisoft/AdvancedMD by 8 AM</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-eagle-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">4</span>
                <p className="text-gray-300">Review & submit – No rekeying, just quality checks</p>
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
