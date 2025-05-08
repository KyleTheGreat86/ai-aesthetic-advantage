
export interface RoiCalculationResult {
  totalRevenueImpact: number;
  roiPercentage: number;
  starRatingImpact: number;
  reviewVolumeImpact: number;
  localSeoImpact: number;
  compoundImpact: number;
  keyInsight: string;
  chartData: {
    months: string[];
    baselineRevenue: number[];
    improvedRevenue: number[];
  };
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
