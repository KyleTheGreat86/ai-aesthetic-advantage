
import React, { useState, useRef } from "react";
import { Calculator, Phone, Clock, DollarSign } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // ROI Calculator state
  const [averageServiceValue, setAverageServiceValue] = useState(7000);
  const [currentBookingsPerMonth, setCurrentBookingsPerMonth] = useState(20);
  const [staffHourlyRate, setStaffHourlyRate] = useState(25);
  const [showResults, setShowResults] = useState(false);

  // Results state
  const [monthlyRevenueBenefit, setMonthlyRevenueBenefit] = useState({ min: 21000, max: 35000 });
  const [yearlyRevenueBenefit, setYearlyRevenueBenefit] = useState({ min: 252000, max: 420000 });
  const [roiMultiplier, setRoiMultiplier] = useState({ min: 20, max: 34 });

  const calculateROI = () => {
    // Calculate additional families (3-5 per month)
    const additionalFamiliesMin = 3;
    const additionalFamiliesMax = 5;
    
    // Calculate revenue benefits
    const monthlyMin = additionalFamiliesMin * averageServiceValue;
    const monthlyMax = additionalFamiliesMax * averageServiceValue;
    const yearlyMin = monthlyMin * 12;
    const yearlyMax = monthlyMax * 12;
    
    // Calculate ROI (cost is $995/month + $100 setup)
    const annualCost = (995 * 12) + 100;
    const roiMin = Math.round((yearlyMin - annualCost) / annualCost);
    const roiMax = Math.round((yearlyMax - annualCost) / annualCost);
    
    setMonthlyRevenueBenefit({ min: monthlyMin, max: monthlyMax });
    setYearlyRevenueBenefit({ min: yearlyMin, max: yearlyMax });
    setRoiMultiplier({ min: roiMin, max: roiMax });
    setShowResults(true);
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('roi-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-16 sm:py-24 relative overflow-hidden bg-white"
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-eagle-dark">
            Funeral Home AI Receptionist ROI Calculator
          </h2>
          <p className="text-lg sm:text-xl text-eagle-gray font-semibold">(Now Booking 3-5 Additional Families Per Month)</p>
          <p className="text-base text-eagle-gray mt-2">See How Our AI Receptionist Pays for Itself & Boosts Your Revenue</p>
        </div>

        {/* Current Missed Opportunities */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-red-800 mb-4">Your Current Missed Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <span className="text-red-600 mr-2">❌</span>
              <span className="text-eagle-dark">Calls missed per month: <strong>15</strong> (industry average)</span>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-2">❌</span>
              <span className="text-eagle-dark">Families lost to competitors: <strong>3-5</strong> (now recoverable with AI)</span>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-2">⏳</span>
              <span className="text-eagle-dark">Hours wasted on phone tasks weekly: <strong>20+</strong></span>
            </div>
          </div>
        </div>

        {/* AI Solution Impact */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Our AI Solution's Impact</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-eagle-dark">Recovers <strong>3-5 additional families per month</strong></span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-eagle-dark">Handles <strong>100% of calls, 24/7</strong></span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              <span className="text-eagle-dark">Saves staff hours on repetitive tasks</span>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="max-w-4xl mx-auto bg-eagle-dark rounded-xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calculator size={28} className="text-eagle-gold mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Calculate Your ROI</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-eagle-gold">Your Current Metrics</h3>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2">
                  Average service value ($):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                  <input 
                    type="number"
                    value={averageServiceValue}
                    onChange={(e) => setAverageServiceValue(Number(e.target.value))}
                    min="1000"
                    className="w-full border border-white/20 bg-white/5 text-white rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-gold"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2">
                  Current bookings per month:
                </label>
                <input 
                  type="number"
                  value={currentBookingsPerMonth}
                  onChange={(e) => setCurrentBookingsPerMonth(Number(e.target.value))}
                  min="1"
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-gold"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2">
                  Staff hourly cost ($):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                  <input 
                    type="number"
                    value={staffHourlyRate}
                    onChange={(e) => setStaffHourlyRate(Number(e.target.value))}
                    min="15"
                    className="w-full border border-white/20 bg-white/5 text-white rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-gold"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-eagle-gold">Our Pricing</h3>
              
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200">Monthly AI cost:</span>
                  <span className="text-eagle-gold font-semibold">$995</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">One-time setup:</span>
                  <span className="text-eagle-gold font-semibold">$100</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <RainbowButton
              onClick={calculateROI}
              className="uppercase font-bold py-3 px-8"
            >
              <Calculator className="mr-2" size={20} />
              Calculate Your ROI
            </RainbowButton>
          </div>
          
          {/* Results */}
          {showResults && (
            <div id="roi-results" className="mt-12 bg-black/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-eagle-gold mb-6 text-center">Your Potential Results</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 rounded-lg p-5 text-center">
                  <DollarSign className="mx-auto mb-2 text-eagle-gold" size={32} />
                  <h4 className="text-lg font-semibold text-white mb-2">Revenue Growth (Per Month)</h4>
                  <div className="text-2xl font-bold text-eagle-gold">
                    {formatCurrency(monthlyRevenueBenefit.min)} – {formatCurrency(monthlyRevenueBenefit.max)}
                  </div>
                  <p className="text-sm text-gray-300 mt-2">+3-5 extra families booked</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Yearly: {formatCurrency(yearlyRevenueBenefit.min)} – {formatCurrency(yearlyRevenueBenefit.max)}
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-5 text-center">
                  <Clock className="mx-auto mb-2 text-eagle-gold" size={32} />
                  <h4 className="text-lg font-semibold text-white mb-2">Time & Cost Savings</h4>
                  <div className="text-lg font-bold text-eagle-gold mb-2">80+ hours/month saved</div>
                  <p className="text-sm text-gray-300">Eliminates after-hours staffing costs</p>
                  <p className="text-sm text-gray-300">Reduces missed call losses by 90%+</p>
                </div>
              </div>

              <div className="bg-eagle-gold/10 border border-eagle-gold/30 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-eagle-gold mb-2">🔥 ROI: {roiMultiplier.min}X–{roiMultiplier.max}X Your Investment</h4>
                <p className="text-gray-300">
                  Monthly Net Profit: {formatCurrency(monthlyRevenueBenefit.min - 995)} – {formatCurrency(monthlyRevenueBenefit.max - 995)}
                </p>
              </div>

              <div className="mt-8 text-center">
                <RainbowButton
                  calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
                  className="uppercase font-bold py-3 px-8"
                >
                  Get Started Now – Recover $20K+ This Month
                </RainbowButton>
              </div>
            </div>
          )}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-eagle-dark">Why Choose Eagle Eye Response?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span>
              <span className="text-eagle-dark">No more missed calls = no more lost families</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span>
              <span className="text-eagle-dark">AI handles overflow, after-hours, and holidays</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span>
              <span className="text-eagle-dark">Compassionate, natural-sounding responses</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span>
              <span className="text-eagle-dark">Seamless booking & scheduling</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span>
              <span className="text-eagle-dark">No long-term contracts – cancel anytime</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span>
              <span className="text-eagle-dark">First 30 days risk-free</span>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-12 bg-eagle-blue/10 border-l-4 border-eagle-blue p-6 max-w-4xl mx-auto">
          <h4 className="text-lg font-semibold text-eagle-blue mb-2">💡 Key Takeaway for Funeral Homes</h4>
          <p className="text-eagle-dark italic">
            "For less than $1,000/month, our AI books 3-5 extra families—generating $20K+ in new revenue. The system pays for itself in days."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
