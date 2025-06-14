
import React, { useState } from "react";
import { Mail, Globe, Clock } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Free Consultation Available
            </h2>
            <h3 className="text-2xl font-semibold text-eagle-blue mb-4">
              Get Started Today
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to save $5,000+ monthly? Let's discuss your current processes and design an automation solution that delivers immediate value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h4 className="text-xl font-semibold mb-6 text-center">
                Schedule Your Free Consultation
              </h4>
              <p className="text-gray-300 mb-6 text-center">
                Our consultation is completely free, with no obligation or pressure.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-eagle-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-eagle-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-eagle-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-eagle-blue focus:outline-none"
                  >
                    <option value="">Select your industry</option>
                    <option value="medical-billing">Medical Billing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="insurance">Insurance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current challenges and what you'd like to automate..."
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-eagle-blue focus:outline-none resize-none"
                  />
                </div>

                <RainbowButton 
                  type="submit"
                  className="w-full font-bold py-3"
                >
                  Send Message & Schedule Consultation
                </RainbowButton>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-eagle-blue mr-3" size={20} />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:kyle@agencyeagleeye.com" className="text-eagle-blue hover:underline">
                        kyle@agencyeagleeye.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="text-eagle-orange mr-3" size={20} />
                    <div>
                      <div className="font-medium">Website</div>
                      <a href="https://www.agencyeagleeye.com" className="text-eagle-orange hover:underline">
                        www.agencyeagleeye.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="text-eagle-blue mr-3" size={20} />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-gray-300">Monday-Friday, 9:00 AM - 6:00 PM EST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold mb-4">Free Consultation Process</h4>
                <p className="text-gray-300 mb-4">
                  During our initial consultation, we'll review your current manual processes and identify the highest-impact automation opportunities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-eagle-blue rounded-full mr-3"></div>
                    Free 30-minute consultation call
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-eagle-orange rounded-full mr-3"></div>
                    Custom automation strategy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-eagle-blue rounded-full mr-3"></div>
                    ROI projections and timeline
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-eagle-orange rounded-full mr-3"></div>
                    Free pilot program offer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Contact;
