
import React, { useState } from "react";
import { Check, Phone, Zap, Crown, Shield } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const ScottishPricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Wee Starter",
      description: "Perfect for smaller Scottish agencies",
      price: billingPeriod === "monthly" ? "£147" : "£1,470",
      period: billingPeriod === "monthly" ? "/month" : "/year", 
      savings: billingPeriod === "annual" ? "Save £294" : null,
      features: [
        "Up to 200 calls per month",
        "Basic Scottish accent training",
        "Property inquiry handling", 
        "Viewing booking system",
        "Email lead notifications",
        "Basic analytics dashboard"
      ],
      cta: "Start Your Free Trial",
      popular: false,
      guarantee: "30-day money back guarantee"
    },
    {
      name: "The Full Scottish",
      description: "Most popular for growing agencies", 
      price: billingPeriod === "monthly" ? "£297" : "£2,970",
      period: billingPeriod === "monthly" ? "/month" : "/year",
      savings: billingPeriod === "annual" ? "Save £594" : null,
      features: [
        "Unlimited calls & bookings",
        "Premium Scottish personality",
        "Multi-property portfolio handling",
        "Advanced lead qualification", 
        "CRM integration (Rightmove, Zoopla)",
        "Real-time SMS notifications",
        "Priority Scottish support",
        "Custom greeting messages"
      ],
      cta: "Get Laura Working Now",
      popular: true,
      guarantee: "3-5 extra leads guaranteed monthly or refund"
    },
    {
      name: "Highland Enterprise", 
      description: "For large Scottish estate groups",
      price: billingPeriod === "monthly" ? "£497" : "£4,970",
      period: billingPeriod === "monthly" ? "/month" : "/year",
      savings: billingPeriod === "annual" ? "Save £994" : null,
      features: [
        "Everything in The Full Scottish",
        "Multiple Laura personalities",
        "Advanced Scottish regional accents",
        "White-label solution",
        "API access & custom integrations",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom reporting & analytics"
      ],
      cta: "Contact for Highland Setup",
      popular: false,
      guarantee: "Double your leads or full refund"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900">
      {/* Scottish background elements */}
      <div className="absolute inset-0 bg-tartan-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Scottish Pricing - <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Transparent & Fair</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              No hidden fees, no contracts, no nonsense. Just honest Scottish pricing that grows your business.
            </p>
            
            {/* Billing toggle with Scottish styling */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg font-medium ${billingPeriod === "monthly" ? "text-amber-400" : "text-slate-400"}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingPeriod === "annual" ? "bg-amber-400" : "bg-slate-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === "annual" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingPeriod === "annual" ? "text-amber-400" : "text-slate-400"}`}>
                Annual
              </span>
              {billingPeriod === "annual" && (
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                  2 Months Free!
                </span>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-xl transition-all duration-500 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-br from-slate-800/90 to-purple-900/50 border-2 border-amber-400/50 shadow-lg shadow-amber-400/20"
                    : "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50"
                } backdrop-blur-sm`}
              >
                {/* Popular badge with Scottish flair */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Crown className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    
                    {plan.savings && (
                      <p className="text-amber-400 text-sm font-semibold">{plan.savings}</p>
                    )}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center mb-4 p-3 bg-amber-400/10 rounded-lg border border-amber-400/20">
                      <Shield className="text-amber-400 mr-2" size={20} />
                      <span className="text-amber-400 font-semibold text-sm">{plan.guarantee}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-amber-400 mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    {plan.name !== "Highland Enterprise" ? (
                      <RainbowButton
                        calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
                        className={`w-full font-bold py-4 transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 hover:scale-105 shadow-lg shadow-amber-400/30"
                            : "bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500"
                        }`}
                      >
                        {plan.cta}
                      </RainbowButton>
                    ) : (
                      <button 
                        onClick={() => window.open('mailto:kyle@agencyeagleeye.com', '_blank')}
                        className="w-full font-bold py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        {plan.cta}
                      </button>
                    )}
                    
                    <button 
                      onClick={() => window.open('tel:07883299579', '_self')}
                      className="w-full font-medium py-3 border border-amber-400/30 text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Laura for Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scottish guarantee section */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-amber-400/10 to-yellow-400/10 backdrop-blur-sm p-8 rounded-xl border border-amber-400/20">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-amber-400 mr-3" size={32} />
              <span className="text-2xl font-bold text-amber-400">The Scottish Promise</span>
            </div>
            <p className="text-slate-300 text-lg text-center leading-relaxed">
              If Laura doesn't bring you at least 3 extra qualified leads in your first month, 
              we'll refund every penny and throw in a bottle of proper Scottish whisky for the trouble.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScottishPricing;
