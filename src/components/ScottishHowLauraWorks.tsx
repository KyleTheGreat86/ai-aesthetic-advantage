
import { Calendar, Phone, TrendingUp } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const steps = [
  {
    number: "1",
    title: "Set Up in 24 Hours",
    details: "We configure Laura with your property portfolio, pricing, and Scottish charm. She'll know your business better than your best agent.",
    icon: Calendar,
    iconColor: "text-amber-400",
  },
  {
    number: "2", 
    title: "Laura Handles Calls 24/7",
    details: "From Glaswegian accents to Highland dialects, Laura charms every caller and books viewings while you sleep.",
    icon: Phone,
    iconColor: "text-purple-400",
  },
  {
    number: "3",
    title: "Watch Leads Roll In",
    details: "Track your bookings, qualified leads, and revenue growth with our Scottish-designed dashboard.",
    icon: TrendingUp,
    iconColor: "text-amber-400", 
  }
];

const ScottishHowLauraWorks = () => {
  return (
    <section className="py-24 bg-black">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Oor Laura</span> Works Her Magic
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From Glasgow tech to Highland efficiency - see how Laura transforms your estate agency in just 3 steps
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Laura Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/a8197afc-83ea-4265-b0c0-271b29331a8b.png" 
                  alt="Oor Laura - AI Voice Assistant" 
                  className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-purple-500/10 to-amber-400/20 rounded-xl blur opacity-60"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Meet Oor Laura</h3>
                <p className="text-slate-300">Your 24/7 Scottish AI Voice Assistant</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="bg-slate-900/50 p-6 rounded-xl border border-amber-400/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-slate-900 font-bold text-lg">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon size={24} className={step.iconColor} />
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{step.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <RainbowButton
              calendlyLink="https://calendly.com/weareagencyeagleeye/30min"
              className="font-bold text-lg py-4 px-10 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 hover:scale-105 transition-all duration-300"
            >
              Get Laura Working for You in 24 Hours
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScottishHowLauraWorks;
