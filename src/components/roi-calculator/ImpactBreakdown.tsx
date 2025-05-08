
import React from 'react';
import { formatCurrency } from './utils';

interface ImpactBreakdownProps {
  starRatingImpact: number;
  reviewVolumeImpact: number;
  localSeoImpact: number;
  compoundImpact: number;
}

const ImpactBreakdown: React.FC<ImpactBreakdownProps> = ({
  starRatingImpact,
  reviewVolumeImpact,
  localSeoImpact,
  compoundImpact
}) => {
  // Calculate total for percentage calculations
  const totalImpact = starRatingImpact + reviewVolumeImpact + localSeoImpact + compoundImpact;
  
  return (
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
  );
};

export default ImpactBreakdown;
