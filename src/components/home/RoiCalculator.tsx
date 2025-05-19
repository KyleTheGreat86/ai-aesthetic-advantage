
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RoiCalculator: React.FC = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(30);
  const [dealVolume, setDealVolume] = useState(20);
  const [commissionRate, setCommissionRate] = useState(3);
  const [roi, setRoi] = useState(0);
  
  // Calculate ROI when values change
  useEffect(() => {
    // Calculate time savings: hours saved * $200/hr * 50 weeks
    const timeSavings = hoursPerWeek * 0.8 * 200 * 50; // 80% time savings
    
    // Calculate deal increase: deals * commission rate * 30% increase
    const dealIncrease = dealVolume * (commissionRate / 100) * 1000000 * 0.3; // 30% more deals
    
    // Total ROI
    const totalRoi = Math.round(timeSavings + dealIncrease);
    setRoi(totalRoi);
  }, [hoursPerWeek, dealVolume, commissionRate]);
  
  // Format number as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 bg-white relative" id="roi-calculator">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-eagle-dark">
            Calculate Your $1M+ Potential
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how much revenue the Eagle Eye Profit Maximizer could add to your brokerage
          </p>
        </motion.div>
        
        <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-xl border border-eagle-gold/30">
          <div className="space-y-6">
            {/* Hours per week */}
            <div>
              <Label htmlFor="hours" className="text-eagle-dark font-medium block mb-2">
                Hours spent weekly on admin tasks
              </Label>
              <Input
                id="hours"
                type="number"
                min="1"
                max="80"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value) || 0)}
                className="border-eagle-dark/20 focus:border-eagle-gold"
              />
              <p className="text-sm text-gray-500 mt-1">
                E.g., prospecting, scheduling, preparing reports
              </p>
            </div>
            
            {/* Annual deal volume */}
            <div>
              <Label htmlFor="deal-volume" className="text-eagle-dark font-medium block mb-2">
                Annual deal volume ($M)
              </Label>
              <Input
                id="deal-volume"
                type="number"
                min="1"
                max="500"
                value={dealVolume}
                onChange={(e) => setDealVolume(parseInt(e.target.value) || 0)}
                className="border-eagle-dark/20 focus:border-eagle-gold"
              />
              <p className="text-sm text-gray-500 mt-1">
                Total annual transaction volume in millions
              </p>
            </div>
            
            {/* Commission rate */}
            <div>
              <Label htmlFor="commission" className="text-eagle-dark font-medium block mb-2">
                Average commission rate (%)
              </Label>
              <Input
                id="commission"
                type="number"
                min="0.1"
                max="10"
                step="0.1"
                value={commissionRate}
                onChange={(e) => setCommissionRate(parseFloat(e.target.value) || 0)}
                className="border-eagle-dark/20 focus:border-eagle-gold"
              />
              <p className="text-sm text-gray-500 mt-1">
                Your typical commission percentage
              </p>
            </div>
            
            {/* Results */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-eagle-dark mb-2">Your potential ROI:</h3>
                <p className="text-4xl font-bold text-eagle-gold">
                  {formatCurrency(roi)} <span className="text-lg font-normal">in Year 1</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Based on 80% admin time reduction and 30% deal volume increase
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              asChild
              size="lg"
              className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 uppercase font-semibold"
            >
              <a 
                href="https://calendly.com/agencyeagleeye/profit-blueprint" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Your Blueprint
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-eagle-gold/10 rounded-full translate-y-1/4 translate-x-1/4 blur-3xl"></div>
    </section>
  );
};

export default RoiCalculator;
