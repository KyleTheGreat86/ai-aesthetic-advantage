
import React, { useState, useEffect, useRef } from 'react';
import { Calculator } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import Chart from 'chart.js/auto';

// Industry-specific multipliers
const industryData = {
  retail: {
    starRatingMultiplier: 0.07, // 7% revenue increase per star
    reviewVolumeEffect: 0.0012, // Per review effect
    top3Ranking: 0.32, // 32% boost for top 3 ranking
    compoundFactor: 0.02 // 2% compound growth
  },
  hospitality: {
    starRatingMultiplier: 0.09, // 9% revenue increase per star
    reviewVolumeEffect: 0.0015, // Per review effect
    top3Ranking: 0.38, // 38% boost for top 3 ranking
    compoundFactor: 0.025 // 2.5% compound growth
  },
  professional: {
    starRatingMultiplier: 0.06, // 6% revenue increase per star
    reviewVolumeEffect: 0.001, // Per review effect
    top3Ranking: 0.30, // 30% boost for top 3 ranking
    compoundFactor: 0.018 // 1.8% compound growth
  },
  healthcare: {
    starRatingMultiplier: 0.055, // 5.5% revenue increase per star
    reviewVolumeEffect: 0.0008, // Per review effect
    top3Ranking: 0.28, // 28% boost for top 3 ranking
    compoundFactor: 0.015 // 1.5% compound growth
  },
  trades: {
    starRatingMultiplier: 0.085, // 8.5% revenue increase per star
    reviewVolumeEffect: 0.0018, // Per review effect
    top3Ranking: 0.40, // 40% boost for top 3 ranking
    compoundFactor: 0.025 // 2.5% compound growth
  },
  beauty: {
    starRatingMultiplier: 0.075, // 7.5% revenue increase per star
    reviewVolumeEffect: 0.0016, // Per review effect
    top3Ranking: 0.35, // 35% boost for top 3 ranking
    compoundFactor: 0.022 // 2.2% compound growth
  },
  automotive: {
    starRatingMultiplier: 0.065, // 6.5% revenue increase per star
    reviewVolumeEffect: 0.0011, // Per review effect
    top3Ranking: 0.33, // 33% boost for top 3 ranking
    compoundFactor: 0.02 // 2% compound growth
  },
  real_estate: {
    starRatingMultiplier: 0.058, // 5.8% revenue increase per star
    reviewVolumeEffect: 0.0009, // Per review effect
    top3Ranking: 0.29, // 29% boost for top 3 ranking
    compoundFactor: 0.017 // 1.7% compound growth
  }
};

// Local ranking improvement factors
const rankingImprovementFactors = {
  not_ranked: 1.0, // Full improvement potential
  '11_20': 0.8,   // 80% of full improvement potential
  '4_10': 0.5,    // 50% of full improvement potential
  top_3: 0.0      // Already in top 3, no improvement
};

const RoiCalculator = () => {
  const isMobile = useIsMobile();
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  
  // State for all form inputs
  const [industry, setIndustry] = useState('retail');
  const [monthlyRevenue, setMonthlyRevenue] = useState(10000);
  const [currentStarRating, setCurrentStarRating] = useState(3.5);
  const [targetStarRating, setTargetStarRating] = useState(4.7);
  const [currentReviews, setCurrentReviews] = useState(15);
  const [monthlyNewReviews, setMonthlyNewReviews] = useState(8);
  const [currentRanking, setCurrentRanking] = useState('not_ranked');
  const [projectionMonths, setProjectionMonths] = useState(24);
  
  // State for calculation results
  const [totalRevenueImpact, setTotalRevenueImpact] = useState(0);
  const [roiPercentage, setRoiPercentage] = useState(0);
  const [starRatingImpact, setStarRatingImpact] = useState(0);
  const [reviewVolumeImpact, setReviewVolumeImpact] = useState(0);
  const [localSeoImpact, setLocalSeoImpact] = useState(0);
  const [compoundImpact, setCompoundImpact] = useState(0);
  const [keyInsight, setKeyInsight] = useState('Complete the form and click "Calculate My ROI" to see personalized insights.');
  
  // State for consultation modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Format currency values
  const formatCurrency = (value: number) => {
    return '£' + Math.round(value).toLocaleString();
  };
  
  // Calculate ROI based on form inputs
  const calculateROI = () => {
    // Get industry multipliers
    const { starRatingMultiplier, reviewVolumeEffect, top3Ranking, compoundFactor } = 
      industryData[industry as keyof typeof industryData];
    
    // Calculate ranking improvement factor
    const rankingImprovementFactor = 
      rankingImprovementFactors[currentRanking as keyof typeof rankingImprovementFactors];
    
    // Calculate impact values
    let baselineRevenue: number[] = [];
    let improvedRevenue: number[] = [];
    let months: string[] = [];
    
    // Initialize impact components
    let totalStarRatingImpact = 0;
    let totalReviewVolumeImpact = 0;
    let totalLocalSeoImpact = 0;
    let totalCompoundImpact = 0;
    
    // Calculate month by month
    let cumulativeStarRatingGain = 0;
    let cumulativeReviewVolumeGain = 0;
    let cumulativeLocalSeoGain = 0;
    let cumulativeCompoundGain = 0;
    let totalAdditionalRevenue = 0;
    
    for (let month = 0; month <= projectionMonths; month++) {
      months.push(`Month ${month}`);
      
      if (month === 0) {
        // Initial values
        baselineRevenue.push(monthlyRevenue);
        improvedRevenue.push(monthlyRevenue);
      } else {
        // Calculate baseline (steady growth)
        const baselineGrowth = baselineRevenue[month - 1] * 0.005; // 0.5% natural monthly growth
        baselineRevenue.push(baselineRevenue[month - 1] + baselineGrowth);
        
        // Calculate star rating impact (gradual improvement)
        const starProgress = Math.min(month / 12, 1); // Full improvement over 12 months
        const effectiveStarImprovement = (targetStarRating - currentStarRating) * starProgress;
        const monthlyStarRatingImpact = monthlyRevenue * effectiveStarImprovement * starRatingMultiplier;
        
        // Calculate review volume impact
        const totalReviewsThisMonth = currentReviews + (month * monthlyNewReviews);
        const reviewThresholdBoost = totalReviewsThisMonth > 100 ? 0.15 : 
          (totalReviewsThisMonth > 50 ? 0.1 : 
            (totalReviewsThisMonth > 20 ? 0.05 : 0));
        const monthlyReviewVolumeImpact = monthlyRevenue * reviewVolumeEffect * monthlyNewReviews + 
          (reviewThresholdBoost * monthlyRevenue);
        
        // Calculate local SEO ranking impact (gradual improvement over 6 months)
        const seoProgress = Math.min(month / 6, 1); // Full SEO improvement over 6 months
        const monthlySeoImpact = monthlyRevenue * top3Ranking * rankingImprovementFactor * seoProgress;
        
        // Calculate compound effect (grows over time)
        const baseForCompound = monthlyRevenue + monthlyStarRatingImpact + monthlyReviewVolumeImpact + monthlySeoImpact;
        const monthlyCompoundImpact = baseForCompound * compoundFactor * (month / projectionMonths);
        
        // Track impact components for the breakdown section
        cumulativeStarRatingGain += monthlyStarRatingImpact;
        cumulativeReviewVolumeGain += monthlyReviewVolumeImpact;
        cumulativeLocalSeoGain += monthlySeoImpact;
        cumulativeCompoundGain += monthlyCompoundImpact;
        
        // Calculate total improved revenue for this month
        const totalMonthlyImprovement = monthlyStarRatingImpact + monthlyReviewVolumeImpact + 
          monthlySeoImpact + monthlyCompoundImpact;
        const previousImprovedRevenue = improvedRevenue[month - 1];
        const baselineGrowthForImproved = previousImprovedRevenue * 0.005; // Same base growth rate
        
        // Add this month's improved revenue
        improvedRevenue.push(previousImprovedRevenue + baselineGrowthForImproved + totalMonthlyImprovement);
        
        // Track total additional revenue
        totalAdditionalRevenue += totalMonthlyImprovement;
      }
    }
    
    // Set state with calculated values
    setStarRatingImpact(cumulativeStarRatingGain);
    setReviewVolumeImpact(cumulativeReviewVolumeGain);
    setLocalSeoImpact(cumulativeLocalSeoGain);
    setCompoundImpact(cumulativeCompoundGain);
    setTotalRevenueImpact(totalAdditionalRevenue);
    
    // Estimate ROI percentage (assuming cost of service is around £500/month)
    const estimatedInvestment = 500 * projectionMonths;
    const calculatedRoiPercentage = ((totalAdditionalRevenue - estimatedInvestment) / estimatedInvestment) * 100;
    setRoiPercentage(calculatedRoiPercentage);
    
    // Determine key insight based on calculations
    const totalImpact = cumulativeStarRatingGain + cumulativeReviewVolumeGain + 
      cumulativeLocalSeoGain + cumulativeCompoundGain;
    
    if (cumulativeLocalSeoGain > (totalImpact * 0.4)) {
      setKeyInsight(`Moving into the top 3 local search results would significantly boost your business, with an estimated ${formatCurrency(cumulativeLocalSeoGain)} additional revenue over ${projectionMonths} months.`);
    } else if (cumulativeStarRatingGain > (totalImpact * 0.4)) {
      setKeyInsight(`Improving your star rating from ${currentStarRating} to ${targetStarRating} would dramatically increase customer trust, leading to ${formatCurrency(cumulativeStarRatingGain)} in additional revenue.`);
    } else if (cumulativeReviewVolumeGain > (totalImpact * 0.3)) {
      setKeyInsight(`Growing from ${currentReviews} to ${currentReviews + (projectionMonths * monthlyNewReviews)} reviews would strengthen your social proof, adding ${formatCurrency(cumulativeReviewVolumeGain)} to your revenue.`);
    } else {
      setKeyInsight(`The combination of improved reviews, star rating, and local ranking creates a powerful compound effect worth ${formatCurrency(cumulativeCompoundGain)} in additional revenue over time.`);
    }
    
    // Update chart
    updateChart(months, baselineRevenue, improvedRevenue);
  };
  
  // Update or create the chart
  const updateChart = (months: string[], baselineRevenue: number[], improvedRevenue: number[]) => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        
        // Only show every nth month label to avoid crowding
        const skipFactor = Math.ceil(months.length / 12); // Show ~12 labels maximum
        
        // Create new chart
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: months,
            datasets: [
              {
                label: 'Baseline Revenue',
                data: baselineRevenue,
                backgroundColor: 'rgba(26, 155, 215, 0.2)', // eagle-blue with opacity
                borderColor: '#1A9BD7', // eagle-blue
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.3
              },
              {
                label: 'Improved Revenue with Reviews & Top 3 Ranking',
                data: improvedRevenue,
                backgroundColor: 'rgba(255, 128, 36, 0.2)', // eagle-orange with opacity
                borderColor: '#FF8024', // eagle-orange
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.3
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                ticks: {
                  callback: function(value, index) {
                    // Show only specific labels to avoid crowding
                    if (index === 0 || index === months.length - 1 || index % skipFactor === 0) {
                      return months[index];
                    }
                    return '';
                  },
                  color: '#ffffff'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                }
              },
              y: {
                beginAtZero: false,
                ticks: {
                  callback: function(value) {
                    return '£' + Number(value).toLocaleString();
                  },
                  color: '#ffffff'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                }
              }
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#ffffff'
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return context.dataset.label + ': £' + Number(context.parsed.y).toLocaleString();
                  }
                }
              }
            }
          }
        });
      }
    }
  };
  
  // Handle form reset
  const resetCalculator = () => {
    setIndustry('retail');
    setMonthlyRevenue(10000);
    setCurrentStarRating(3.5);
    setTargetStarRating(4.7);
    setCurrentReviews(15);
    setMonthlyNewReviews(8);
    setCurrentRanking('not_ranked');
    setProjectionMonths(24);
    
    setTotalRevenueImpact(0);
    setRoiPercentage(0);
    setStarRatingImpact(0);
    setReviewVolumeImpact(0);
    setLocalSeoImpact(0);
    setCompoundImpact(0);
    setKeyInsight('Complete the form and click "Calculate My ROI" to see personalized insights.');
    
    // Destroy chart
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }
  };
  
  // Handle consultation form submission
  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsModalOpen(false);
      alert('Thanks for your interest! A representative will contact you shortly.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };
  
  // Calculate ROI on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateROI();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Calculate total impact
  const totalImpact = starRatingImpact + reviewVolumeImpact + localSeoImpact + compoundImpact;
  
  return (
    <section id="roi-calculator" className="w-full bg-eagle-dark py-16">
      <div className="section-container">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text-blue">Review & Local SEO</span>{' '}
            <span className="gradient-text-orange">ROI Calculator</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how online reviews and Google local rankings combine to dramatically increase your business revenue
          </p>
        </header>
        
        <div className="grid md:grid-cols-12 gap-8 px-4">
          {/* Input Section */}
          <div className="md:col-span-5 bg-black/20 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-eagle-blue/20">
            <h3 className="text-2xl font-semibold text-eagle-blue mb-6">Your Business Information</h3>
            
            <div className="mb-5">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="industry">Industry/Sector</label>
              <select 
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
              >
                <option value="retail">Retail</option>
                <option value="hospitality">Hospitality (Restaurants, Hotels)</option>
                <option value="professional">Professional Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="trades">Trades (Plumbers, Electricians)</option>
                <option value="beauty">Beauty & Wellness</option>
                <option value="automotive">Automotive</option>
                <option value="real_estate">Real Estate</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="monthlyRevenue">
                Monthly Revenue (£)
                <span className="relative ml-1 text-gray-400 group">
                  <span className="cursor-help">?</span>
                  <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
                    Your current average monthly revenue before implementing review management
                  </span>
                </span>
              </label>
              <input 
                type="number"
                id="monthlyRevenue"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                min="1000"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-gray-200 font-medium mb-2" htmlFor="currentStarRating">
                  Current Star Rating
                  <span className="relative ml-1 text-gray-400 group">
                    <span className="cursor-help">?</span>
                    <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
                      Your current average star rating across review platforms
                    </span>
                  </span>
                </label>
                <div className="flex items-center">
                  <input 
                    type="range"
                    id="currentStarRating"
                    value={currentStarRating}
                    onChange={(e) => setCurrentStarRating(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none"
                    min="1"
                    max="5"
                    step="0.1"
                  />
                  <span className="ml-3 font-semibold text-eagle-blue w-10">{currentStarRating}</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-200 font-medium mb-2" htmlFor="targetStarRating">
                  Target Star Rating
                  <span className="relative ml-1 text-gray-400 group">
                    <span className="cursor-help">?</span>
                    <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
                      Your goal star rating after implementing review management
                    </span>
                  </span>
                </label>
                <div className="flex items-center">
                  <input 
                    type="range"
                    id="targetStarRating"
                    value={targetStarRating}
                    onChange={(e) => setTargetStarRating(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none"
                    min="1"
                    max="5"
                    step="0.1"
                  />
                  <span className="ml-3 font-semibold text-eagle-orange w-10">{targetStarRating}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-gray-200 font-medium mb-2" htmlFor="currentReviews">
                  Current # of Reviews
                  <span className="relative ml-1 text-gray-400 group">
                    <span className="cursor-help">?</span>
                    <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
                      Total number of reviews you currently have
                    </span>
                  </span>
                </label>
                <input 
                  type="number"
                  id="currentReviews"
                  value={currentReviews}
                  onChange={(e) => setCurrentReviews(Number(e.target.value))}
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-gray-200 font-medium mb-2" htmlFor="monthlyNewReviews">
                  Monthly New Reviews
                  <span className="relative ml-1 text-gray-400 group">
                    <span className="cursor-help">?</span>
                    <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
                      Expected new reviews per month with our strategy
                    </span>
                  </span>
                </label>
                <input 
                  type="number"
                  id="monthlyNewReviews"
                  value={monthlyNewReviews}
                  onChange={(e) => setMonthlyNewReviews(Number(e.target.value))}
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                  min="1"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="currentRanking">
                Current Local Search Ranking
                <span className="relative ml-1 text-gray-400 group">
                  <span className="cursor-help">?</span>
                  <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
                    Your business's current position in Google local search results
                  </span>
                </span>
              </label>
              <select 
                id="currentRanking"
                value={currentRanking}
                onChange={(e) => setCurrentRanking(e.target.value)}
                className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
              >
                <option value="not_ranked">Not in top 20 results</option>
                <option value="11_20">Ranked 11-20</option>
                <option value="4_10">Ranked 4-10</option>
                <option value="top_3">Already in top 3</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-200 font-medium mb-2" htmlFor="projectionMonths">
                Projection Timeline (Months)
                <span className="relative ml-1 text-gray-400 group">
                  <span className="cursor-help">?</span>
                  <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
                    How far into the future would you like to project results?
                  </span>
                </span>
              </label>
              <div className="flex items-center">
                <input 
                  type="range"
                  id="projectionMonths"
                  value={projectionMonths}
                  onChange={(e) => setProjectionMonths(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none"
                  min="6"
                  max="36"
                  step="1"
                />
                <span className="ml-3 font-semibold text-eagle-blue w-10">{projectionMonths}</span>
              </div>
            </div>
            
            <button 
              onClick={calculateROI}
              className="w-full bg-eagle-blue hover:bg-eagle-blue/90 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
            >
              Calculate My ROI <Calculator className="inline-block ml-2" size={18} />
            </button>
          </div>

          {/* Results Section */}
          <div className="md:col-span-7 bg-black/20 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-eagle-blue/20">
            <h3 className="text-2xl font-semibold text-eagle-orange mb-6">Your Projected ROI Results</h3>
            
            <div className="mb-6 h-64">
              <canvas id="revenueChart" ref={chartRef}></canvas>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-eagle-blue/20 p-5 rounded-lg border border-eagle-blue/30">
                <h4 className="text-lg font-semibold text-white mb-2">Revenue Impact</h4>
                <div className="text-3xl font-bold text-eagle-blue">{formatCurrency(totalRevenueImpact)}</div>
                <p className="text-sm text-gray-300">Additional revenue over {projectionMonths} months</p>
              </div>
              <div className="bg-eagle-orange/20 p-5 rounded-lg border border-eagle-orange/30">
                <h4 className="text-lg font-semibold text-white mb-2">ROI Percentage</h4>
                <div className="text-3xl font-bold text-eagle-orange">{roiPercentage.toFixed(0)}%</div>
                <p className="text-sm text-gray-300">Return on investment</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-eagle-blue mb-4">Impact Breakdown</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Review Star Rating Impact</span>
                    <span className="text-sm font-semibold text-eagle-blue">{formatCurrency(starRatingImpact)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-eagle-blue h-2.5 rounded-full" 
                      style={{ width: `${totalImpact > 0 ? (starRatingImpact / totalImpact) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Review Volume Impact</span>
                    <span className="text-sm font-semibold text-eagle-blue">{formatCurrency(reviewVolumeImpact)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-eagle-orange h-2.5 rounded-full" 
                      style={{ width: `${totalImpact > 0 ? (reviewVolumeImpact / totalImpact) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Local SEO Ranking Impact</span>
                    <span className="text-sm font-semibold text-eagle-blue">{formatCurrency(localSeoImpact)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${totalImpact > 0 ? (localSeoImpact / totalImpact) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Compound Growth Effect</span>
                    <span className="text-sm font-semibold text-eagle-blue">{formatCurrency(compoundImpact)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-purple-500 h-2.5 rounded-full" 
                      style={{ width: `${totalImpact > 0 ? (compoundImpact / totalImpact) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-eagle-blue/10 border-l-4 border-eagle-blue p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-eagle-blue">Key Insight</h4>
                  <p className="text-gray-300">{keyInsight}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <button 
                onClick={resetCalculator}
                className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Reset Calculator
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-eagle-orange hover:bg-eagle-orange/90 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Request Detailed Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Consultation Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-eagle-dark rounded-xl shadow-xl p-8 max-w-lg w-full mx-4 border border-eagle-blue/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-eagle-blue">Request Your Free Consultation</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleConsultationSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 font-medium mb-2" htmlFor="name">Your Name</label>
                <input 
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 font-medium mb-2" htmlFor="email">Your Email</label>
                <input 
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2" htmlFor="message">Additional Information</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eagle-blue"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-eagle-blue hover:bg-eagle-blue/90 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default RoiCalculator;
