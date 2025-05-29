
import React, { useState, useEffect, useRef } from "react";
import { DollarSign, Clock, Heart, TrendingUp, Shield, Phone } from "lucide-react";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCalculator, setActiveCalculator] = useState(false);
  const [formData, setFormData] = useState({
    averageServiceValue: 7000,
    currentBookings: 20,
    staffHourlyCost: 25
  });
  const [results, setResults] = useState({
    monthlyRevenue: 0,
    yearlyRevenue: 0,
    monthlySavings: 0,
    netProfit: 0,
    roi: 0
  });

  const sectionRef = useRef<HTMLElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Phone,
      title: "100% Call Coverage",
      description: "Never miss another call. Our AI handles every call, 24/7/365, ensuring families always reach a compassionate voice.",
      color: "text-green-400",
      bgGradient: "from-green-500/10 to-emerald-600/5"
    },
    {
      icon: DollarSign,
      title: "3-5 Additional Families Monthly",
      description: "Recover lost revenue by capturing calls that would otherwise go to voicemail or competitors.",
      color: "text-eagle-gold",
      bgGradient: "from-yellow-500/10 to-eagle-gold/5"
    },
    {
      icon: Clock,
      title: "80+ Hours Saved Monthly",
      description: "Free up your staff from repetitive phone tasks to focus on what matters most—caring for families.",
      color: "text-blue-400",
      bgGradient: "from-blue-500/10 to-cyan-600/5"
    },
    {
      icon: Heart,
      title: "Compassionate AI Responses",
      description: "Specially trained to handle grief with empathy, respect, and the dignity every family deserves.",
      color: "text-pink-400",
      bgGradient: "from-pink-500/10 to-rose-600/5"
    },
    {
      icon: TrendingUp,
      title: "20X-34X ROI",
      description: "For less than $1,000/month, generate $20K+ in additional monthly revenue.",
      color: "text-purple-400",
      bgGradient: "from-purple-500/10 to-violet-600/5"
    },
    {
      icon: Shield,
      title: "Risk-Free Trial",
      description: "30-day money-back guarantee. No long-term contracts. Cancel anytime.",
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/10 to-teal-600/5"
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
    const additionalFamilies = 4; // Conservative estimate (3-5 range)
    const monthlyRevenue = additionalFamilies * formData.averageServiceValue;
    const yearlyRevenue = monthlyRevenue * 12;
    const monthlyCost = 995;
    const monthlySavings = 80 * formData.staffHourlyCost; // 80 hours saved
    const netProfit = monthlyRevenue + monthlySavings - monthlyCost;
    const roi = Math.round((netProfit / monthlyCost) * 100) / 10;

    setResults({
      monthlyRevenue,
      yearlyRevenue,
      monthlySavings,
      netProfit,
      roi
    });
    setActiveCalculator(true);
    
    // Smooth scroll to calculator
    setTimeout(() => {
      calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-eagle-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Funeral Homes Choose{" "}
              <span className="bg-gradient-to-r from-eagle-gold to-yellow-300 bg-clip-text text-transparent">
                Eagle Eye Response
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AI infrastructure designed specifically for funeral homes to serve families with dignity while growing your business.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-gray-600 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-3 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/0 via-gray-600/20 to-gray-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-full ${benefit.color} bg-gray-800/80 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-eagle-gold transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced ROI Calculator */}
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Funeral Home AI Receptionist ROI Calculator
              </h3>
              <p className="text-eagle-gold font-semibold">
                *Now Booking 3-5 Additional Families Per Month*
              </p>
              <p className="text-gray-300 mt-2">
                See How Our AI Receptionist Pays for Itself & Boosts Your Revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white mb-4">Your Current Metrics</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Average service value ($):</label>
                    <input
                      type="number"
                      value={formData.averageServiceValue}
                      onChange={(e) => setFormData({...formData, averageServiceValue: Number(e.target.value)})}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-eagle-gold focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Current bookings per month:</label>
                    <input
                      type="number"
                      value={formData.currentBookings}
                      onChange={(e) => setFormData({...formData, currentBookings: Number(e.target.value)})}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-eagle-gold focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Staff hourly cost ($):</label>
                    <input
                      type="number"
                      value={formData.staffHourlyCost}
                      onChange={(e) => setFormData({...formData, staffHourlyCost: Number(e.target.value)})}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-eagle-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full bg-gradient-to-r from-eagle-gold to-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-eagle-gold/30 transform hover:scale-105 transition-all duration-300"
                >
                  Calculate Your ROI
                </button>
              </div>

              {/* Results Section */}
              <div ref={calculatorRef}>
                <h4 className="text-lg font-semibold text-white mb-4">Our Pricing</h4>
                <div className="bg-gray-800/30 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Monthly AI cost:</span>
                    <span className="text-white font-semibold">$995</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">One-time setup:</span>
                    <span className="text-white font-semibold">$100</span>
                  </div>
                </div>

                {activeCalculator && (
                  <div className="space-y-4 animate-fade-in">
                    <h4 className="text-lg font-semibold text-eagle-gold mb-4">Your Potential Results</h4>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/5 rounded-lg p-4 border border-green-500/30">
                      <h5 className="text-green-400 font-semibold mb-2">💰 Revenue Growth (Per Month)</h5>
                      <p className="text-white">+4 extra families booked</p>
                      <p className="text-white font-bold text-xl">+${results.monthlyRevenue.toLocaleString()} additional revenue</p>
                      <p className="text-gray-300 text-sm">Yearly revenue boost: ${results.yearlyRevenue.toLocaleString()}</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/5 rounded-lg p-4 border border-blue-500/30">
                      <h5 className="text-blue-400 font-semibold mb-2">⏳ Time & Cost Savings</h5>
                      <p className="text-white">Saves 80+ hours/month on calls & admin</p>
                      <p className="text-white">Monthly savings: ${results.monthlySavings.toLocaleString()}</p>
                      <p className="text-gray-300 text-sm">Eliminates after-hours staffing costs</p>
                    </div>

                    <div className="bg-gradient-to-r from-eagle-gold/10 to-yellow-500/5 rounded-lg p-4 border border-eagle-gold/30">
                      <h5 className="text-eagle-gold font-semibold mb-2">📈 ROI Breakdown</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Net Monthly Profit:</span>
                          <span className="text-white font-bold">+${results.netProfit.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xl">
                          <span className="text-eagle-gold">🔥 ROI:</span>
                          <span className="text-eagle-gold font-bold">{results.roi}X Your Investment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-lg p-6 mb-6">
                <h4 className="text-white font-semibold mb-2">💡 Key Takeaway for Funeral Homes</h4>
                <p className="text-gray-300">
                  "For less than $1,000/month, our AI books 3-5 extra families—generating $20K+ in new revenue. The system pays for itself in days."
                </p>
              </div>
              
              <a
                href="https://calendly.com/weareagencyeagleeye/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-eagle-gold to-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-eagle-gold/30 transform hover:scale-105 transition-all duration-300"
              >
                Get Started Now – Recover $20K+ This Month
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
