
import { Calendar, Phone, TrendingUp, Users, Shield, Award, Clock, Star, CheckCircle } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const workingSteps = [
  {
    number: "1",
    title: "Intelligent Call Handling",
    details: "Answers every inquiry with a warm, professional Scottish voice. Identifies caller needs through natural conversation and handles complex property questions using your listing database.",
    icon: Phone,
    iconColor: "text-amber-400",
  },
  {
    number: "2", 
    title: "Automated Viewing Management", 
    details: "Accesses your team's calendars in real-time. Identifies suitable viewing slots and books appointments directly into your system with immediate confirmations.",
    icon: Calendar,
    iconColor: "text-purple-400",
  },
  {
    number: "3",
    title: "Advanced Lead Qualification",
    details: "Gathers comprehensive client requirements and identifies serious buyers through sophisticated questioning while capturing detailed contact information.",
    icon: Users,
    iconColor: "text-amber-400", 
  },
  {
    number: "4",
    title: "Seamless Team Integration",
    details: "Instantly notifies agents of new bookings via SMS and email, provides comprehensive viewing briefs, and integrates with your CRM for complete data continuity.",
    icon: TrendingUp,
    iconColor: "text-purple-400", 
  }
];

const benefits = [
  {
    title: "Proven Economic Impact",
    description: "£2,000-£3,500 monthly impact through additional revenue and efficiency savings",
    icon: TrendingUp,
    details: [
      "£1,500-£2,500 in additional revenue from after-hours inquiry conversion",
      "£500-£1,000 in staff time savings and administrative efficiency",
      "Measurable improvement in client satisfaction and competitive positioning"
    ]
  },
  {
    title: "Exclusively Scottish Property Expertise", 
    description: "Built specifically for the Scottish property market with local knowledge",
    icon: Star,
    details: [
      "Fluent in regional terminology from 'tenements' to 'HMOs' to 'Home Reports'",
      "Trained on thousands of actual Scottish property inquiries",
      "Understands local market nuances from Glasgow's West End to Edinburgh's New Town",
      "Handles diverse Scottish accents with unmatched accuracy"
    ]
  },
  {
    title: "Enterprise-Grade Integration",
    description: "Designed for established agencies with sophisticated requirements",
    icon: Shield,
    details: [
      "Seamless integration with Rightmove, Zoopla and Scottish property platforms",
      "Enterprise-level data security and GDPR compliance", 
      "White-labeled to represent your premium brand perfectly"
    ]
  },
  {
    title: "Dedicated Agency Success Programme",
    description: "Comprehensive onboarding and optimization for premium clients",
    icon: Award,
    details: [
      "Dedicated implementation by the business owner - no sales teams",
      "Custom configuration to match your exact workflow",
      "Quarterly performance reviews with optimization recommendations"
    ]
  }
];

const ScottishHowLauraWorks = () => {
  return (
    <section className="py-24 bg-black">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our sophisticated AI property assistant Laura seamlessly integrates with your existing systems to create a frictionless experience for both your team and clients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Laura Video */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/up9fkN3jcMQ?autoplay=1&mute=1&loop=1&playlist=up9fkN3jcMQ&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="Laura - Your AI Voice Assistant"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-purple-500/10 to-amber-400/20 rounded-xl blur opacity-60"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Meet Laura</h3>
                <p className="text-slate-300">Your 24/7 Scottish AI Voice Assistant</p>
                <p className="text-slate-400 text-sm mt-2">Professional, warm, and always ready to help your clients</p>
              </div>
            </div>

            {/* Working Steps */}
            <div className="space-y-8">
              {workingSteps.map((step, index) => {
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

          {/* Why Top Scottish Agencies Choose Us */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Top Scottish Estate Agencies Choose <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Our Solution</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                Our AI assistant has been meticulously developed with real Glasgow and Edinburgh property professionals to deliver measurable results for discerning Scottish agencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900/50 p-8 rounded-xl border border-amber-400/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center">
                        <Icon size={28} className="text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-slate-300">{benefit.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle size={20} className="text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
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
