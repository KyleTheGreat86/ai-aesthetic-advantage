
import React from 'react';
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";

interface RoiFormProps {
  monthlyRevenue: number;
  setMonthlyRevenue: (value: number) => void;
  currentStarRating: number;
  setCurrentStarRating: (value: number) => void;
  targetStarRating: number;
  setTargetStarRating: (value: number) => void;
  currentReviews: number;
  setCurrentReviews: (value: number) => void;
  monthlyNewReviews: number;
  setMonthlyNewReviews: (value: number) => void;
  projectionMonths: number;
  setProjectionMonths: (value: number) => void;
  calculateRoi: () => void;
}

const RoiForm: React.FC<RoiFormProps> = ({
  monthlyRevenue,
  setMonthlyRevenue,
  currentStarRating,
  setCurrentStarRating,
  targetStarRating,
  setTargetStarRating,
  currentReviews,
  setCurrentReviews,
  monthlyNewReviews,
  setMonthlyNewReviews,
  projectionMonths,
  setProjectionMonths,
  calculateRoi
}) => {
  return (
    <div className="md:col-span-5 bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-eagle-blue/30">
      <h3 className="text-2xl font-semibold text-eagle-blue mb-6">Your Business Information</h3>
      
      <div className="mb-5">
        <label className="block text-white font-medium mb-2" htmlFor="monthlyRevenue">
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
          <label className="block text-white font-medium mb-2" htmlFor="currentStarRating">
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
          <label className="block text-white font-medium mb-2" htmlFor="targetStarRating">
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
          <label className="block text-white font-medium mb-2" htmlFor="currentReviews">
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
          <label className="block text-white font-medium mb-2" htmlFor="monthlyNewReviews">
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
        <label className="block text-white font-medium mb-2" htmlFor="currentRanking">
          Current Local Search Ranking
          <span className="relative ml-1 text-gray-400 group">
            <span className="cursor-help">?</span>
            <span className="invisible group-hover:visible absolute left-0 bottom-full w-60 bg-eagle-dark border border-white/20 text-xs text-white rounded p-2 z-10">
              Your business's current position in Google local search results
            </span>
          </span>
        </label>
        <input 
          type="text"
          value="Not in top 20 results"
          readOnly
          className="w-full border border-white/20 bg-white/5 text-white rounded-lg px-4 py-2 cursor-not-allowed opacity-75"
        />
      </div>

      <div className="mb-6">
        <label className="block text-white font-medium mb-2" htmlFor="projectionMonths">
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
        onClick={calculateRoi}
        className="w-full bg-eagle-blue hover:bg-eagle-blue/90 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
      >
        Calculate My ROI <Calculator className="inline-block ml-2" size={18} />
      </button>
    </div>
  );
};

export default RoiForm;
