
import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Clock, Smartphone, Bell, Briefcase, Shield, Calculator } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";
import { RainbowButton } from "./ui/rainbow-button";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [showResults, setShowResults] = useState(false);

  // ROI Calculator state
  const [leadResearchHours, setLeadResearchHours] = useState(10);
  const [dealAnalysisHours, setDealAnalysisHours] = useState(8);
  const [schedulingHours, setSchedulingHours] = useState(5);
  const [clientFollowupHours, setClientFollowupHours] = useState(6);
  const [hourlyValue, setHourlyValue] = useState(150);
  const [avgDealValue, setAvgDealValue] = useState(5000000);
  const [commissionRate, setCommissionRate] = useState(2);
  const [dealsPerYear, setDealsPerYear] = useState(8);

  // ROI Results state
  const [timeSaved, setTimeSaved] = useState(0);
  const [timeValueSaved, setTimeValueSaved] = useState(0);
  const [additionalRevenue, setAdditionalRevenue] = useState(0);
  const [monthlyAdditionalRevenue, setMonthlyAdditionalRevenue] = useState(0);
  const [annualROI, setAnnualROI] = useState(0);
  const [additionalDeals, setAdditionalDeals] = useState(0);
  const [commissionPerDeal, setCommissionPerDeal] = useState(0);
  const [additionalMeetings, setAdditionalMeetings] = useState(0);

  const benefits = [
    {
      title: "30% More Deals Closed",
      description: "Atlanta broker closed 4 extra industrial deals in 6 months.",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "15+ Hours Saved Weekly",
      description: "No more chasing docs or manual follow-ups.",
      icon: Clock,
      color: "text-eagle-orange"
    },
    {
      title: "Mobile-First Control",
      description: "Manage your entire pipeline via Telegram—no desktop needed.",
      icon: Smartphone,
      color: "text-eagle-blue"
    },
    {
      title: "Zero Missed Opportunities",
      description: "AI tracks lead follow-ups so you never drop the ball.",
      icon: Bell,
      color: "text-amber-500"
    },
    {
      title: "Double-Sided Commissions",
      description: "Auto-match buyers/sellers in your database.",
      icon: Briefcase,
      color: "text-purple-500"
    },
    {
      title: "Effortless Compliance",
      description: "Deadline reminders for inspections, contingencies.",
      icon: Shield,
      color: "text-teal-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const calculateROI = () => {
    // Based on analysis, the system saves approximately 70% of time in each category
    const leadResearchSaved = leadResearchHours * 0.7;
    const dealAnalysisSaved = dealAnalysisHours * 0.8;
    const schedulingSaved = schedulingHours * 0.9;
    const clientFollowupSaved = clientFollowupHours * 0.6;
    
    const weeklySaved = leadResearchSaved + dealAnalysisSaved + schedulingSaved + clientFollowupSaved;
    const monthlySaved = weeklySaved * 4.33; // Average weeks per month
    
    // Calculate financial impact
    const monthlyTimeSavingsValue = monthlySaved * hourlyValue;
    
    // Calculate deal impact
    // Based on data, brokers using the system close approximately 30-40% more deals
    const additionalDealsPercentage = 0.35;
    const addDeals = Math.round(dealsPerYear * additionalDealsPercentage);
    const commPerDeal = avgDealValue * (commissionRate / 100);
    const addRevenue = addDeals * commPerDeal;
    
    // Calculate monthly additional revenue
    const monthlyAddRevenue = addRevenue / 12;
    
    // Calculate ROI
    // Assuming annual cost of system based on pricing model
    const annualCost = 24000; // $2,000/month average
    const totalAnnualBenefit = (monthlyTimeSavingsValue * 12) + addRevenue;
    const annualReturn = (totalAnnualBenefit / annualCost) * 100;
    
    // Additional metrics
    const addMeetings = Math.round(monthlySaved / 2); // Assuming 2 hours per meeting
    
    // Update state with calculated values
    setTimeSaved(Math.round(monthlySaved));
    setTimeValueSaved(Math.round(monthlyTimeSavingsValue));
    setAdditionalRevenue(Math.round(addRevenue));
    setMonthlyAdditionalRevenue(Math.round(monthlyAddRevenue));
    setAnnualROI(Math.round(annualReturn));
    setAdditionalDeals(addDeals);
    setCommissionPerDeal(Math.round(commPerDeal));
    setAdditionalMeetings(addMeetings);
    
    // Show results
    setShowResults(true);
    
    // Scroll to results after a short delay
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
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-10 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Why Top Brokers Choose Eagle Eye
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">AI infrastructure designed specifically for $3M-$20M CRE deals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6 transform transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-full ${benefit.color} bg-white/10`}>
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold ml-3">{benefit.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* ROI Calculator */}
        <div className="max-w-5xl mx-auto bg-eagle-dark/80 backdrop-blur-lg rounded-xl border border-eagle-blue/30 p-4 sm:p-8 mx-4 sm:mx-auto shadow-xl">
          <div className="calculator-header text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calculator size={28} className="text-eagle-blue mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">CRE AI ROI Calculator</h2>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              See how our AI-powered workflows can transform your commercial real estate business. Input your current metrics below to calculate your potential ROI.
            </p>
          </div>

          <div className="calculator-form grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="form-column">
              <h3 className="text-xl font-semibold mb-4 text-eagle-blue">Your Current Time Investment</h3>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="leadResearchHours">
                  Hours spent on lead research weekly:
                </label>
                <input 
                  type="number"
                  id="leadResearchHours"
                  value={leadResearchHours}
                  onChange={(e) => setLeadResearchHours(Number(e.target.value))}
                  min="0"
                  max="40"
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="dealAnalysisHours">
                  Hours spent on deal analysis weekly:
                </label>
                <input 
                  type="number"
                  id="dealAnalysisHours"
                  value={dealAnalysisHours}
                  onChange={(e) => setDealAnalysisHours(Number(e.target.value))}
                  min="0"
                  max="40"
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="schedulingHours">
                  Hours spent on tour scheduling weekly:
                </label>
                <input 
                  type="number"
                  id="schedulingHours"
                  value={schedulingHours}
                  onChange={(e) => setSchedulingHours(Number(e.target.value))}
                  min="0"
                  max="40"
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="clientFollowupHours">
                  Hours spent on client follow-ups weekly:
                </label>
                <input 
                  type="number"
                  id="clientFollowupHours"
                  value={clientFollowupHours}
                  onChange={(e) => setClientFollowupHours(Number(e.target.value))}
                  min="0" 
                  max="40"
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                />
              </div>
            </div>
            
            <div className="form-column">
              <h3 className="text-xl font-semibold mb-4 text-eagle-orange">Your Business Metrics</h3>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="hourlyValue">
                  Your hourly value ($):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                  <input 
                    type="number"
                    id="hourlyValue"
                    value={hourlyValue}
                    onChange={(e) => setHourlyValue(Number(e.target.value))}
                    min="0"
                    className="w-full border border-white/20 bg-white/5 text-white rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-orange"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="avgDealValue">
                  Average deal value ($):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                  <input 
                    type="number"
                    id="avgDealValue"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    min="0"
                    className="w-full border border-white/20 bg-white/5 text-white rounded-lg pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-orange"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="commissionRate">
                  Commission rate (%):
                </label>
                <input 
                  type="number"
                  id="commissionRate"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value))}
                  min="0"
                  max="100"
                  step="0.1"
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-orange"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-200 font-medium mb-2" htmlFor="dealsPerYear">
                  Current deals closed per year:
                </label>
                <input 
                  type="number"
                  id="dealsPerYear"
                  value={dealsPerYear}
                  onChange={(e) => setDealsPerYear(Number(e.target.value))}
                  min="0"
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-orange"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <RainbowButton
              onClick={calculateROI}
              className="uppercase font-bold py-3 px-8"
            >
              <Calculator className="mr-2" size={20} />
              Calculate ROI
            </RainbowButton>
          </div>
          
          {/* Results Container */}
          {showResults && (
            <div id="roi-results" className="results-container mt-12 bg-black/30 backdrop-blur-md border border-eagle-blue/30 rounded-xl p-6">
              <div className="results-header text-center mb-8">
                <h3 className="text-2xl font-bold text-eagle-orange mb-2">Your Potential ROI with CRE AI Infrastructure</h3>
                <p className="text-gray-300">Based on your inputs, here's how our solution can transform your business:</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-eagle-blue/20 text-center transition-all duration-300 transform hover:scale-[1.02] hover:border-eagle-blue/40">
                  <h4 className="text-lg font-semibold text-white mb-2">Time Saved Monthly</h4>
                  <div className="text-3xl font-bold text-eagle-blue">{timeSaved} hours</div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">Hours reclaimed every month for high-value activities</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-eagle-blue/20 text-center transition-all duration-300 transform hover:scale-[1.02] hover:border-eagle-blue/40">
                  <h4 className="text-lg font-semibold text-white mb-2">Monthly Time Value</h4>
                  <div className="text-3xl font-bold text-eagle-blue">{formatCurrency(timeValueSaved)}</div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">Dollar value of your reclaimed time</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-eagle-orange/20 text-center transition-all duration-300 transform hover:scale-[1.02] hover:border-eagle-orange/40">
                  <h4 className="text-lg font-semibold text-white mb-2">Monthly Revenue Boost</h4>
                  <div className="text-3xl font-bold text-eagle-orange">{formatCurrency(monthlyAdditionalRevenue)}</div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">Extra monthly commissions with AI</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-eagle-orange/20 text-center transition-all duration-300 transform hover:scale-[1.02] hover:border-eagle-orange/40">
                  <h4 className="text-lg font-semibold text-white mb-2">Annual Revenue Boost</h4>
                  <div className="text-3xl font-bold text-eagle-orange">{formatCurrency(additionalRevenue)}</div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">Additional yearly revenue</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-eagle-orange/20 text-center transition-all duration-300 transform hover:scale-[1.02] hover:border-eagle-orange/40">
                  <h4 className="text-lg font-semibold text-white mb-2">Annual ROI</h4>
                  <div className="text-3xl font-bold text-eagle-orange">{annualROI}%</div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">Return on your investment</p>
                </div>
              </div>
              
              <div className="roi-breakdown bg-eagle-dark/60 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-xl font-bold text-eagle-blue mb-6 text-center">ROI Breakdown</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/20 rounded-lg p-4 text-center backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-white/10">
                    <div className="text-xl font-bold text-eagle-blue mb-2">{additionalDeals} additional deals</div>
                    <p className="text-sm text-gray-300">Just one additional deal = {formatCurrency(commissionPerDeal)} in commissions</p>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-4 text-center backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-white/10">
                    <div className="text-xl font-bold text-eagle-orange mb-2">15% more leads</div>
                    <p className="text-sm text-gray-300">= {additionalDeals} more closings per year</p>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-4 text-center backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-white/10">
                    <div className="text-xl font-bold text-eagle-blue mb-2">{timeSaved} hours saved monthly</div>
                    <p className="text-sm text-gray-300">= time for {additionalMeetings} more client meetings</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <RainbowButton
                  calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
                  className="uppercase font-bold py-3 px-8"
                >
                  Schedule AI Demo
                </RainbowButton>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Benefits;
