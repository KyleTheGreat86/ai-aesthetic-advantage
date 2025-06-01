
import { memo } from "react";

const ScottishTestimonials = memo(() => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Scottish Estate Agents Are Saying About <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">Oor Laura</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Real results from real Scottish agencies - testimonials coming soon as we launch with our first clients.
          </p>
          
          {/* Placeholder for future testimonials */}
          <div className="bg-slate-800/50 border border-amber-400/20 rounded-xl p-12 backdrop-blur-sm">
            <p className="text-slate-300 text-lg italic mb-4">
              "Coming Soon - Real testimonials from real Scottish estate agents"
            </p>
            <p className="text-amber-400 font-semibold">
              Be one of our first clients and your testimonial could be featured here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

ScottishTestimonials.displayName = "ScottishTestimonials";

export default ScottishTestimonials;
