
import { GraduationCap, Phone, Cog, Star, MapPin, Users } from "lucide-react";

const AboutFounder = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Kyle Holland</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your Scottish Tech Partner Who Gets Property
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Kyle's Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/b0a6186b-2a84-4fd6-8442-34d2fbb6d755.png" 
                  alt="Kyle Holland - Founder" 
                  className="w-80 h-80 mx-auto rounded-full shadow-2xl object-cover"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-purple-500/10 to-amber-400/20 rounded-full blur opacity-60"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Kyle Holland</h3>
                <p className="text-amber-400 font-semibold mb-2">Founder & CEO</p>
                <p className="text-slate-300">From Glasgow Energy Sales to Property Tech Innovation</p>
              </div>
            </div>

            {/* Kyle's Story */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-amber-400/20">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-amber-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Scottish Roots Run Deep</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  After graduating from Edinburgh Business School in 2012, I spent over six years at ScottishPower right here in Glasgow, working as a Senior Energy Sales Advisor. Every day, I was on the phones with Scottish businesses – from tiny startups to major enterprises.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-400/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="text-purple-400" size={24} />
                  <h3 className="text-xl font-bold text-white">What I Learned on Those Glasgow Phone Lines</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Six years of handling thousands of Scottish business calls taught me something crucial: communication is everything. Miss a call? Lose a client. Misunderstand an accent? Lose trust. Take too long to respond? Lose the deal.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-amber-400/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Cog className="text-amber-400" size={24} />
                  <h3 className="text-xl font-bold text-white">From Energy to Automation</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  After ScottishPower, I spent six years consulting on Robotic Process Automation (RPA) with Manning Gold, helping businesses across the UK automate their most time-consuming processes while their people focused on building relationships and closing deals.
                </p>
              </div>
            </div>
          </div>

          {/* Why Property Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Why Property? Why Now?</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-amber-400/20 text-center">
                <MapPin className="text-amber-400 mx-auto mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-3">Market Understanding</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Having worked with Scottish businesses for over a decade, I know the property market here is unique. It's about understanding that a "close" isn't an apartment entrance, and Scottish buyers expect agents to know the difference between Merchant City and Marchmont.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-400/20 text-center">
                <Star className="text-purple-400 mx-auto mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-3">The Gap I Spotted</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Scottish property agents were getting left behind by technology designed for London markets. Generic solutions that couldn't handle Scottish accents, didn't understand our market terminology, and certainly didn't get Scottish business culture.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-amber-400/20 text-center">
                <Users className="text-amber-400 mx-auto mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-3">My Promise</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I'm not here to sell you dreams or promise overnight riches. I'm here to build technology that works for Scottish property professionals, backed by someone who understands that your reputation and your time are your most valuable assets.
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-amber-400/20 text-center">
            <div className="text-4xl font-serif text-amber-400 opacity-60 mb-4">"</div>
            <p className="text-xl italic text-white leading-relaxed max-w-4xl mx-auto mb-6">
              After all, I learned everything I know about customer service from some of the most demanding customers in Scotland – and if it works for them, it'll work for your property clients too.
            </p>
            <div className="text-amber-400 font-semibold">Kyle Holland, Founder</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
