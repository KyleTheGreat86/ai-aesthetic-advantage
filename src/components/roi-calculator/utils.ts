
import { industryData, rankingImprovementFactors } from './constants';

// Format currency values
export const formatCurrency = (value: number): string => {
  return '£' + Math.round(value).toLocaleString();
};

export const calculateRoi = (
  monthlyRevenue: number,
  currentStarRating: number,
  targetStarRating: number,
  currentReviews: number,
  monthlyNewReviews: number,
  currentRanking: string,
  projectionMonths: number
) => {
  // Get industry multipliers - always using retail
  const { starRatingMultiplier, reviewVolumeEffect, top3Ranking, compoundFactor } = industryData.retail;
  
  // Calculate ranking improvement factor - always not_ranked
  const rankingImprovementFactor = rankingImprovementFactors.not_ranked;
  
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
  
  // Estimate ROI percentage (assuming cost of service is around £500/month)
  const estimatedInvestment = 500 * projectionMonths;
  const calculatedRoiPercentage = ((totalAdditionalRevenue - estimatedInvestment) / estimatedInvestment) * 100;
  
  // Determine key insight based on calculations
  const totalImpact = cumulativeStarRatingGain + cumulativeReviewVolumeGain + 
    cumulativeLocalSeoGain + cumulativeCompoundGain;
  
  let keyInsight = '';
  
  if (cumulativeLocalSeoGain > (totalImpact * 0.4)) {
    keyInsight = `Moving into the top 3 local search results would significantly boost your business, with an estimated ${formatCurrency(cumulativeLocalSeoGain)} additional revenue over ${projectionMonths} months.`;
  } else if (cumulativeStarRatingGain > (totalImpact * 0.4)) {
    keyInsight = `Improving your star rating from ${currentStarRating} to ${targetStarRating} would dramatically increase customer trust, leading to ${formatCurrency(cumulativeStarRatingGain)} in additional revenue.`;
  } else if (cumulativeReviewVolumeGain > (totalImpact * 0.3)) {
    keyInsight = `Growing from ${currentReviews} to ${currentReviews + (projectionMonths * monthlyNewReviews)} reviews would strengthen your social proof, adding ${formatCurrency(cumulativeReviewVolumeGain)} to your revenue.`;
  } else {
    keyInsight = `The combination of improved reviews, star rating, and local ranking creates a powerful compound effect worth ${formatCurrency(cumulativeCompoundGain)} in additional revenue over time.`;
  }
  
  return {
    totalRevenueImpact: totalAdditionalRevenue,
    roiPercentage: calculatedRoiPercentage,
    starRatingImpact: cumulativeStarRatingGain,
    reviewVolumeImpact: cumulativeReviewVolumeGain,
    localSeoImpact: cumulativeLocalSeoGain,
    compoundImpact: cumulativeCompoundGain,
    keyInsight,
    chartData: {
      months,
      baselineRevenue,
      improvedRevenue,
    }
  };
};
