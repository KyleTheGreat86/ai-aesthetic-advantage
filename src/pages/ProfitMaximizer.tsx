
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ChevronRight, CheckCircle, Info, ShieldCheck, Clock, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EagleButton } from "@/components/ui/eagle-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

const ProfitMaximizer = () => {
  const isMobile = useIsMobile();
  const [deals, setDeals] = useState<number>(5);
  const [hours, setHours] = useState<number>(40);
  const [commission, setCommission] = useState<number>(30000);

  // Calculate next month's end date for the countdown timer
  const getEndOfNextMonth = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 2, 0);
  };

  useEffect(() => {
    // Set page title and meta description
    document.title = "Eagle Eye Profit Maximizer | Your $1M+ Advantage";
    
    // Create meta description if it doesn't exist or update it if it does
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Automate your Florida CRE brokerage and add $1M+ in commissions with zero busywork. Book your free Profit Blueprint session today.');
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    console.log("Profit Maximizer page loaded");
  }, []);

  // Calculate ROI
  const calculateROI = () => {
    const monthlyFee = 4500;
    const setupFee = 15000;
    const firstYearCost = setupFee + (monthlyFee * 12);
    
    // Estimated time saved per week
    const timeSavedPerWeek = hours * 0.8; // 80% time saved
    
    // Additional deals closed per year (30% more)
    const additionalDealsPerYear = deals * 0.3 * 12;
    
    // Additional revenue
    const additionalRevenue = additionalDealsPerYear * commission;
    
    // ROI calculation
    const roi = (additionalRevenue - firstYearCost) / firstYearCost;
    
    return {
      timeSavedPerYear: Math.round(timeSavedPerWeek * 52),
      additionalDealsPerYear: Math.round(additionalDealsPerYear),
      additionalRevenue: Math.round(additionalRevenue),
      roi: Math.round(roi * 100) / 100
    };
  };

  const roiData = calculateROI();

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <Navbar />

      <main className="pt-16">
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black to-eagle-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  The Eagle Eye Profit Maximizer: Your $1M+ Advantage
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Automate your Florida CRE brokerage and add $1M+ in commissions with zero busywork.
                </p>
                
                <div className="mb-8">
                  <RainbowButton 
                    calendlyLink="https://calendly.com/agencyeagleeye/profit-blueprint" 
                    className="uppercase font-bold text-base px-6 py-4 text-lg"
                  >
                    <span>Book Your Free Profit Blueprint</span>
                    <span className="text-eagle-orange ml-2">(2 Spots Left)</span>
                  </RainbowButton>
                </div>
                
                <div className="mt-6 mb-10 flex flex-col items-center">
                  <p className="text-eagle-orange font-semibold mb-2">2 spots left this month—book by</p>
                  <CountdownTimer 
                    targetDate={getEndOfNextMonth()} 
                    className="p-3 bg-black/30 backdrop-blur-sm rounded-lg border border-eagle-blue/30"
                  />
                </div>
              </div>
              
              <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(26,155,215,0.3)]">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MOL2f76XY-k?rel=0" 
                  title="Eagle Eye AI System Overview" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
        </section>

        {/* Offer Breakdown */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                What You Get for $15,000 Setup + $4,500/Month
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                {/* Core Features */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-eagle-blue/30 h-full">
                  <h3 className="text-xl font-bold mb-6 text-eagle-blue">Core Features</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <CheckCircle className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Hyper-Local Lead Machine</span>
                        <p className="text-gray-400 text-sm">AI-generated leads from Florida-specific data sources</p>
                      </div>
                    </li>
                    <li className="flex">
                      <CheckCircle className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Deal Crusher Analytics</span>
                        <p className="text-gray-400 text-sm">Automated deal analysis with Florida market comparables</p>
                      </div>
                    </li>
                    <li className="flex">
                      <CheckCircle className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Frictionless Tour Orchestrator</span>
                        <p className="text-gray-400 text-sm">Automated scheduling and follow-up system</p>
                      </div>
                    </li>
                    <li className="flex">
                      <CheckCircle className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Client Loyalty Engine</span>
                        <p className="text-gray-400 text-sm">Continuous engagement and nurturing system</p>
                      </div>
                    </li>
                    <li className="flex">
                      <CheckCircle className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Mobile Command Center</span>
                        <p className="text-gray-400 text-sm">Everything accessible via Telegram on your phone</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Bonuses */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-eagle-orange/30 h-full">
                  <h3 className="text-xl font-bold mb-6 text-eagle-orange">Bonuses</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <Info className="text-eagle-orange mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">90-min Profit Blueprint Session</span>
                        <p className="text-gray-400 text-sm">Customize the system to your brokerage needs</p>
                      </div>
                    </li>
                    <li className="flex">
                      <Info className="text-eagle-orange mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Monthly Florida Trend Reports</span>
                        <p className="text-gray-400 text-sm">Exclusive market insights for clients</p>
                      </div>
                    </li>
                    <li className="flex">
                      <Info className="text-eagle-orange mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">White-Glove Onboarding</span>
                        <p className="text-gray-400 text-sm">Personalized setup and training</p>
                      </div>
                    </li>
                    <li className="flex">
                      <Info className="text-eagle-orange mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Private Broker Mastermind</span>
                        <p className="text-gray-400 text-sm">Access to exclusive community of Florida CRE pros</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Guarantees */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-eagle-blue/30 h-full">
                  <h3 className="text-xl font-bold mb-6 text-eagle-blue">Guarantees</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <ShieldCheck className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">60-Day Money-Back Guarantee</span>
                        <p className="text-gray-400 text-sm">No questions asked if you're not satisfied</p>
                      </div>
                    </li>
                    <li className="flex">
                      <ShieldCheck className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">12-Month $1M Profit Guarantee</span>
                        <p className="text-gray-400 text-sm">Or we work free until you reach your goal</p>
                      </div>
                    </li>
                    <li className="flex">
                      <ShieldCheck className="text-eagle-blue mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">99.9% Uptime Guarantee</span>
                        <p className="text-gray-400 text-sm">Your system is always working for you</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Scarcity */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-eagle-orange/30 h-full">
                  <h3 className="text-xl font-bold mb-6 text-eagle-orange">Scarcity</h3>
                  <div className="flex">
                    <Clock className="text-eagle-orange mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Only 2 Spots/Month</span>
                      <p className="text-gray-400">
                        Exclusive to Florida CRE brokers. We limit new clients to ensure premium service quality and results. Once spots are filled, the next availability will be next month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <RainbowButton 
                  calendlyLink="https://calendly.com/agencyeagleeye/profit-blueprint" 
                  className="uppercase font-bold text-base px-8 py-4 text-lg"
                >
                  Claim Your Spot Now
                </RainbowButton>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto border border-gradient-to-r from-eagle-blue to-eagle-orange p-0.5 rounded-xl overflow-hidden">
              <div className="bg-black p-8 md:p-12 rounded-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                  Calculate Your ROI
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-400 mb-2">Hours spent on admin weekly</label>
                        <input 
                          type="range" 
                          min="5" 
                          max="60" 
                          value={hours} 
                          onChange={(e) => setHours(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>5</span>
                          <span>60</span>
                        </div>
                        <div className="text-center text-xl font-semibold mt-2">{hours} hours</div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 mb-2">Monthly deals closed</label>
                        <input 
                          type="range" 
                          min="1" 
                          max="20" 
                          value={deals} 
                          onChange={(e) => setDeals(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>1</span>
                          <span>20</span>
                        </div>
                        <div className="text-center text-xl font-semibold mt-2">{deals} deals</div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 mb-2">Average commission per deal</label>
                        <input 
                          type="range" 
                          min="5000" 
                          max="100000" 
                          step="1000"
                          value={commission} 
                          onChange={(e) => setCommission(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>$5k</span>
                          <span>$100k</span>
                        </div>
                        <div className="text-center text-xl font-semibold mt-2">${commission.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 text-center">Your Results</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="text-gray-400 text-sm">Hours saved per year</div>
                        <div className="text-2xl font-bold text-eagle-blue">{roiData.timeSavedPerYear} hours</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Additional deals per year</div>
                        <div className="text-2xl font-bold text-eagle-blue">{roiData.additionalDealsPerYear} deals</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Additional revenue</div>
                        <div className="text-2xl font-bold text-eagle-orange">${roiData.additionalRevenue.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">ROI</div>
                        <div className="text-3xl font-bold text-eagle-orange">{roiData.roi}x</div>
                      </div>
                      
                      <div className="pt-4">
                        <RainbowButton 
                          calendlyLink="https://calendly.com/agencyeagleeye/profit-blueprint" 
                          className="w-full uppercase font-bold"
                        >
                          Book Your Demo
                        </RainbowButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                All Your Questions Answered
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem 
                  value="item-1"
                  className="bg-white/5 backdrop-blur-sm mb-4 rounded-lg border border-eagle-blue/20"
                >
                  <AccordionTrigger className="px-6 hover:no-underline font-semibold">
                    What makes this Florida-specific?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    Our AI uses local data from LoopNet, CoStar, and county records to provide Florida-specific insights and leads.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="item-2"
                  className="bg-white/5 backdrop-blur-sm mb-4 rounded-lg border border-eagle-blue/20"
                >
                  <AccordionTrigger className="px-6 hover:no-underline font-semibold">
                    How long is setup?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    2 weeks with our white-glove onboarding process. We handle everything for you.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="item-3"
                  className="bg-white/5 backdrop-blur-sm mb-4 rounded-lg border border-eagle-blue/20"
                >
                  <AccordionTrigger className="px-6 hover:no-underline font-semibold">
                    Do I need tech skills?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    No, it's plug-and-play via Telegram. If you can use messaging apps, you can use our system.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="item-4"
                  className="bg-white/5 backdrop-blur-sm mb-4 rounded-lg border border-eagle-blue/20"
                >
                  <AccordionTrigger className="px-6 hover:no-underline font-semibold">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    Yes, we use enterprise-grade encryption and follow strict data protection protocols.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="item-5"
                  className="bg-white/5 backdrop-blur-sm mb-4 rounded-lg border border-eagle-blue/20"
                >
                  <AccordionTrigger className="px-6 hover:no-underline font-semibold">
                    What if I'm not satisfied?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    We offer a 60-day money-back guarantee, no questions asked.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="item-6"
                  className="bg-white/5 backdrop-blur-sm mb-4 rounded-lg border border-eagle-blue/20"
                >
                  <AccordionTrigger className="px-6 hover:no-underline font-semibold">
                    Why only 2 spots/month?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    To ensure premium service quality. We focus on delivering exceptional results rather than scaling quickly at the expense of service.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Secure Your Spot Before They're Gone
              </h2>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-eagle-blue/30">
                <div className="calendly-inline-widget" 
                     data-url="https://calendly.com/agencyeagleeye/profit-blueprint" 
                     style={{ minWidth: '320px', height: '700px' }}>
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProfitMaximizer;
