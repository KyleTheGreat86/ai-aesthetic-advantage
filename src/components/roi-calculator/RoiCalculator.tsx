
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { calculateRoi, formatCurrency } from './utils';
import RoiForm from './RoiForm';
import ResultsDisplay from './ResultsDisplay';
import ConsultationModal from './ConsultationModal';
import { RoiCalculationResult } from './types';

const RoiCalculator = () => {
  const isMobile = useIsMobile();
  
  // State for all form inputs
  const [monthlyRevenue, setMonthlyRevenue] = useState(10000);
  const [currentStarRating, setCurrentStarRating] = useState(3.5);
  const [targetStarRating, setTargetStarRating] = useState(4.7);
  const [currentReviews, setCurrentReviews] = useState(15);
  const [monthlyNewReviews, setMonthlyNewReviews] = useState(8);
  const [currentRanking, setCurrentRanking] = useState('not_ranked');
  const [projectionMonths, setProjectionMonths] = useState(24);
  
  // State for calculation results
  const [calculationResult, setCalculationResult] = useState<RoiCalculationResult>({
    totalRevenueImpact: 0,
    roiPercentage: 0,
    starRatingImpact: 0,
    reviewVolumeImpact: 0,
    localSeoImpact: 0,
    compoundImpact: 0,
    keyInsight: 'Complete the form and click "Calculate My ROI" to see personalized insights.',
    chartData: {
      months: [],
      baselineRevenue: [],
      improvedRevenue: []
    }
  });
  
  // State for consultation modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Calculate ROI based on form inputs
  const handleCalculateROI = () => {
    const result = calculateRoi(
      monthlyRevenue,
      currentStarRating,
      targetStarRating,
      currentReviews,
      monthlyNewReviews,
      currentRanking,
      projectionMonths
    );
    
    setCalculationResult(result);
  };
  
  // Handle form reset
  const resetCalculator = () => {
    setMonthlyRevenue(10000);
    setCurrentStarRating(3.5);
    setTargetStarRating(4.7);
    setCurrentReviews(15);
    setMonthlyNewReviews(8);
    setCurrentRanking('not_ranked');
    setProjectionMonths(24);
    
    setCalculationResult({
      totalRevenueImpact: 0,
      roiPercentage: 0,
      starRatingImpact: 0,
      reviewVolumeImpact: 0,
      localSeoImpact: 0,
      compoundImpact: 0,
      keyInsight: 'Complete the form and click "Calculate My ROI" to see personalized insights.',
      chartData: {
        months: [],
        baselineRevenue: [],
        improvedRevenue: []
      }
    });
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
      handleCalculateROI();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="roi-calculator" className="w-full bg-eagle-dark py-16">
      <div className="section-container">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-eagle-blue">Review & Local SEO</span>{' '}
            <span className="text-eagle-orange">ROI Calculator</span>
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Discover how online reviews and Google local rankings combine to dramatically increase your business revenue
          </p>
        </header>
        
        <div className="grid md:grid-cols-12 gap-8 px-4">
          {/* Input Section */}
          <RoiForm
            monthlyRevenue={monthlyRevenue}
            setMonthlyRevenue={setMonthlyRevenue}
            currentStarRating={currentStarRating}
            setCurrentStarRating={setCurrentStarRating}
            targetStarRating={targetStarRating}
            setTargetStarRating={setTargetStarRating}
            currentReviews={currentReviews}
            setCurrentReviews={setCurrentReviews}
            monthlyNewReviews={monthlyNewReviews}
            setMonthlyNewReviews={setMonthlyNewReviews}
            projectionMonths={projectionMonths}
            setProjectionMonths={setProjectionMonths}
            calculateRoi={handleCalculateROI}
          />

          {/* Results Section */}
          <ResultsDisplay
            totalRevenueImpact={calculationResult.totalRevenueImpact}
            roiPercentage={calculationResult.roiPercentage}
            starRatingImpact={calculationResult.starRatingImpact}
            reviewVolumeImpact={calculationResult.reviewVolumeImpact}
            localSeoImpact={calculationResult.localSeoImpact}
            compoundImpact={calculationResult.compoundImpact}
            keyInsight={calculationResult.keyInsight}
            chartData={calculationResult.chartData}
            resetCalculator={resetCalculator}
            openConsultationModal={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      
      {/* Consultation Form Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
        onSubmit={handleConsultationSubmit}
      />
    </section>
  );
};

export default RoiCalculator;
