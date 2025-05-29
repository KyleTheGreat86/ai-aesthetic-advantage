
import { memo } from "react";

const Testimonials = memo(() => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-eagle-dark mb-4">
            What Funeral Directors Say
          </h2>
          <p className="text-lg text-eagle-gray max-w-2xl mx-auto">
            Hear from funeral professionals who have transformed their after-hours response with Eagle Eye Response.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-eagle-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-eagle-gray mb-4 italic">
              "For the first time in 15 years, I can turn my phone off at night knowing families will still receive compassionate care when they call our funeral home."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold text-eagle-dark">Margaret Thompson</p>
              <p className="text-sm text-eagle-gray">Director, Thompson Funeral Home</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-eagle-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-eagle-gray mb-4 italic">
              "We've captured 6 additional families this month alone. The AI handles calls with such dignity that families often compliment our 'night receptionist.'"
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold text-eagle-dark">Robert Chen</p>
              <p className="text-sm text-eagle-gray">Owner, Chen Family Funeral Services</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-eagle-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-eagle-gray mb-4 italic">
              "I was missing calls at 2 AM when families needed me most, but I couldn't keep sacrificing my health by being available 24/7. This solution changed everything."
            </p>
            <div className="border-t pt-4">
              <p className="font-semibold text-eagle-dark">Sarah Williams</p>
              <p className="text-sm text-eagle-gray">Director, Williams Memorial Chapel</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-eagle-gray mb-6">
            Join funeral directors across the country who trust Eagle Eye Response
          </p>
          <a
            href="https://calendly.com/weareagencyeagleeye/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-eagle-gold text-eagle-dark px-8 py-3 rounded-lg font-semibold hover:bg-eagle-gold/90 transition-colors"
          >
            Schedule Your Free Demo
          </a>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
