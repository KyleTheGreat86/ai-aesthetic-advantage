
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    clinicName: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    clinicType: "",
    reviewCount: "",
    enquiryCount: "",
    challenge: "",
    source: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll contact you shortly to discuss your free trial.",
      });
      setIsSubmitting(false);
      setFormData({
        clinicName: "",
        name: "",
        role: "",
        email: "",
        phone: "",
        clinicType: "",
        reviewCount: "",
        enquiryCount: "",
        challenge: "",
        source: "",
      });
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-eagle-dark/90 to-eagle-dark"
    >
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Start Your 14-Day Free Trial
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div
              className={`transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="clinicName" className="block text-sm font-medium mb-2">
                      Clinic Name*
                    </label>
                    <input
                      type="text"
                      id="clinicName"
                      name="clinicName"
                      value={formData.clinicName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                      placeholder="Your clinic name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Your Role*
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                    placeholder="Your position at the clinic"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="clinicType" className="block text-sm font-medium mb-2">
                    Clinic Type
                  </label>
                  <select
                    id="clinicType"
                    name="clinicType"
                    value={formData.clinicType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white appearance-none"
                  >
                    <option value="" disabled>Select clinic type</option>
                    <option value="medspa">MedSpa</option>
                    <option value="dental">Dental</option>
                    <option value="hair">Hair Restoration</option>
                    <option value="weight">Weight Loss</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="reviewCount" className="block text-sm font-medium mb-2">
                      Current Number of Google Reviews
                    </label>
                    <input
                      type="number"
                      id="reviewCount"
                      name="reviewCount"
                      value={formData.reviewCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                      placeholder="e.g. 15"
                    />
                  </div>
                  <div>
                    <label htmlFor="enquiryCount" className="block text-sm font-medium mb-2">
                      Number of Monthly Enquiries
                    </label>
                    <input
                      type="number"
                      id="enquiryCount"
                      name="enquiryCount"
                      value={formData.enquiryCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                      placeholder="e.g. 25"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                    Main Challenge
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white appearance-none"
                  >
                    <option value="" disabled>Select main challenge</option>
                    <option value="reviews">Too Few Reviews</option>
                    <option value="leads">Missed Leads</option>
                    <option value="conversion">Low Conversion Rate</option>
                    <option value="all">All of the Above</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium mb-2">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-eagle-blue text-white"
                    placeholder="e.g. Google, Referral, etc."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full eagle-btn-secondary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div
              className={`md:pl-10 transform transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-white/5 rounded-lg p-8 border border-white/10 h-full">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-eagle-blue" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-400">07886073693</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Mon-Fri 8am-6pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-eagle-orange" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">contact@agencyeagleeye.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-eagle-blue" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Location</p>
                      <address className="not-italic text-gray-400">
                        <p>21 Windsor Avenue</p>
                        <p>London, SW19 2RR</p>
                        <p>United Kingdom</p>
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-xl font-medium mb-4">FAQ</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">
                        Do I need to change my existing systems?
                      </p>
                      <p className="text-sm text-gray-400">
                        No. Our technology integrates with your existing booking
                        system, website, and phone system.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">How quickly will I see results?</p>
                      <p className="text-sm text-gray-400">
                        Most clinics see their first new reviews within 48 hours and
                        additional bookings within the first week.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Is there any setup fee?</p>
                      <p className="text-sm text-gray-400">
                        None. The 14-day trial is completely free, including
                        implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Contact;
