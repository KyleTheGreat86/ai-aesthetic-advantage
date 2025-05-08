
import React from 'react';
import { formatCurrency } from './utils';
import RoiChart from './RoiChart';
import ImpactBreakdown from './ImpactBreakdown';

interface ResultsDisplayProps {
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
  resetCalculator: () => void;
  openConsultationModal: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  totalRevenueImpact,
  roiPercentage,
  starRatingImpact,
  reviewVolumeImpact,
  localSeoImpact,
  compoundImpact,
  keyInsight,
  chartData,
  resetCalculator,
  openConsultationModal
}) => {
  return (
    <div className="md:col-span-7 bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-eagle-orange/30">
      <h3 className="text-2xl font-semibold text-eagle-orange mb-6">Your Projected ROI Results</h3>
      
      <RoiChart 
        months={chartData.months} 
        baselineRevenue={chartData.baselineRevenue} 
        improvedRevenue={chartData.improvedRevenue}
      />

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-eagle-blue/20 p-5 rounded-lg border border-eagle-blue/30">
          <h4 className="text-lg font-semibold text-white mb-2">Revenue Impact</h4>
          <div className="text-3xl font-bold text-eagle-blue">{formatCurrency(totalRevenueImpact)}</div>
          <p className="text-sm text-gray-300">Additional revenue over {chartData.months.length - 1} months</p>
        </div>
        <div className="bg-eagle-orange/20 p-5 rounded-lg border border-eagle-orange/30">
          <h4 className="text-lg font-semibold text-white mb-2">ROI Percentage</h4>
          <div className="text-3xl font-bold text-eagle-orange">{roiPercentage.toFixed(0)}%</div>
          <p className="text-sm text-gray-300">Return on investment</p>
        </div>
      </div>

      <ImpactBreakdown
        starRatingImpact={starRatingImpact}
        reviewVolumeImpact={reviewVolumeImpact}
        localSeoImpact={localSeoImpact}
        compoundImpact={compoundImpact}
      />

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
          onClick={openConsultationModal}
          className="bg-eagle-orange hover:bg-eagle-orange/90 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Request Detailed Consultation
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
