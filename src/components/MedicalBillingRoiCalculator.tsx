
import React, { useState, useEffect } from 'react';
import { Calculator, Shield, Award, CheckCircle } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const MedicalBillingRoiCalculator = () => {
  const [claims, setClaims] = useState(1000);
  const [timePerClaim, setTimePerClaim] = useState(8);
  const [hourlyWage, setHourlyWage] = useState(25);
  
  // Animated values
  const [animatedHoursSaved, setAnimatedHoursSaved] = useState(0);
  const [animatedCostSavings, setAnimatedCostSavings] = useState(0);
  const [animatedNewProfit, setAnimatedNewProfit] = useState(0);

  // Calculate ROI metrics
  const calculateROI = () => {
    const laborHoursSaved = (timePerClaim * claims / 60) * 0.9; // 10% oversight needed
    const currentCost = 3.5 * claims; // $3.50 per claim current cost
    const newCost = 0.5 * claims; // $0.50 per claim with AI
    const costSavings = currentCost - newCost;
    const errorSavings = claims * 0.09 * 25; // $25 avg denial cost reduction
    const newProfit = costSavings + errorSavings;
    
    return {
      laborHoursSaved: Math.round(laborHoursSaved),
      costSavings: Math.round(costSavings),
      newProfit: Math.round(newProfit)
    };
  };

  // Animate counters
  const animateCounter = (targetValue: number, setter: (value: number) => void) => {
    let start = 0;
    const duration = 1000;
    const increment = targetValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setter(targetValue);
        clearInterval(timer);
      } else {
        setter(Math.round(start));
      }
    }, 16);
  };

  useEffect(() => {
    const results = calculateROI();
    animateCounter(results.laborHoursSaved, setAnimatedHoursSaved);
    animateCounter(results.costSavings, setAnimatedCostSavings);
    animateCounter(results.newProfit, setAnimatedNewProfit);
  }, [claims, timePerClaim, hourlyWage]);

  const formatCurrency = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}k`;
    }
    return `$${value}`;
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#0A0A14]">
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Calculator size={32} className="text-[#0047AB] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Medical Billing ROI Calculator
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how much you can save by automating your CMS-1500 processing
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-[#7F00FF]/20 border border-[#7F00FF] rounded-full px-4 py-2 flex items-center">
              <Shield size={16} className="text-[#7F00FF] mr-2" />
              <span className="text-white text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="bg-[#FFD700]/20 border border-[#FFD700] rounded-full px-4 py-2 flex items-center">
              <Award size={16} className="text-[#FFD700] mr-2" />
              <span className="text-white text-sm font-medium">99.9% Accuracy Guarantee</span>
            </div>
            <div className="bg-[#0047AB]/20 border border-[#0047AB] rounded-full px-4 py-2 flex items-center">
              <CheckCircle size={16} className="text-[#0047AB] mr-2" />
              <span className="text-white text-sm font-medium">SOC 2 Certified</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-lg rounded-xl border border-[#0047AB]/30 p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Input Section */}
            <div>
              <h3 className="text-2xl font-semibold text-[#0047AB] mb-8">Your Current Metrics</h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-white font-medium mb-3">
                    Monthly Claims Processed
                  </label>
                  <div className="relative">
                    <input 
                      type="range"
                      value={claims}
                      onChange={(e) => setClaims(Number(e.target.value))}
                      min="100"
                      max="5000"
                      step="100"
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-purple-glow"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>100</span>
                      <span>5,000</span>
                    </div>
                  </div>
                  <div className="text-center text-2xl font-bold text-[#FFD700] mt-3">
                    {claims.toLocaleString()} claims
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">
                    Minutes Per Claim (Current)
                  </label>
                  <div className="relative">
                    <input 
                      type="range"
                      value={timePerClaim}
                      onChange={(e) => setTimePerClaim(Number(e.target.value))}
                      min="5"
                      max="15"
                      step="1"
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-purple-glow"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>5 min</span>
                      <span>15 min</span>
                    </div>
                  </div>
                  <div className="text-center text-2xl font-bold text-[#FFD700] mt-3">
                    {timePerClaim} minutes
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">
                    Biller Hourly Rate
                  </label>
                  <div className="relative">
                    <input 
                      type="range"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(Number(e.target.value))}
                      min="15"
                      max="40"
                      step="1"
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-purple-glow"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>$15</span>
                      <span>$40</span>
                    </div>
                  </div>
                  <div className="text-center text-2xl font-bold text-[#FFD700] mt-3">
                    ${hourlyWage}/hour
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-8">Your Monthly Savings</h3>
              
              <div className="space-y-6">
                <div className="bg-[#0047AB]/20 border border-[#0047AB]/50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">Hours Saved</h4>
                  <div id="hours-saved" className="text-4xl font-bold text-[#0047AB] mb-2">
                    {animatedHoursSaved}
                  </div>
                  <p className="text-gray-300 text-sm">Hours reclaimed monthly</p>
                </div>

                <div className="bg-[#7F00FF]/20 border border-[#7F00FF]/50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">Cost Savings</h4>
                  <div id="cost-savings" className="text-4xl font-bold text-[#7F00FF] mb-2">
                    {formatCurrency(animatedCostSavings)}
                  </div>
                  <p className="text-gray-300 text-sm">Processing cost reduction</p>
                </div>

                <div className="bg-[#FFD700]/20 border border-[#FFD700]/50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">Total Monthly Profit</h4>
                  <div id="new-profit" className="text-4xl font-bold text-[#FFD700] mb-2">
                    {formatCurrency(animatedNewProfit)}
                  </div>
                  <p className="text-gray-300 text-sm">Additional monthly profit</p>
                </div>

                <div className="bg-white/5 border border-white/20 rounded-lg p-4 mt-6">
                  <p className="text-center text-gray-300 text-sm mb-4">
                    <strong className="text-[#FFD700]">Join 127 billing companies</strong> who gained{' '}
                    <strong className="text-[#FFD700]">$46k/month average profit</strong>
                  </p>
                  
                  <div className="text-center">
                    <RainbowButton
                      calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
                      className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold py-3 px-8 rounded-lg text-lg uppercase shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-300"
                    >
                      Start Free 100-Claim Pilot
                    </RainbowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-[#0047AB]">90 seconds</div>
              <div className="text-gray-300">vs 8+ minutes manually</div>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-[#7F00FF]">99.9%</div>
              <div className="text-gray-300">accuracy rate</div>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-[#FFD700]">$0.50</div>
              <div className="text-gray-300">per claim vs $3.50</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-purple-glow::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #7F00FF;
          cursor: pointer;
          box-shadow: 0 0 10px #7F00FF;
        }
        
        .slider-purple-glow::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #7F00FF;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px #7F00FF;
        }
      `}</style>
    </section>
  );
};

export default MedicalBillingRoiCalculator;
