
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/31a5098f-1f41-453e-aec3-42264b2b0322.png" 
                alt="Agency Eagle Eye" 
                className="h-10 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              AI voice solutions designed specifically for Scottish estate agents. We help you capture more viewings with less overhead through intelligent automation and 24/7 professional Scottish charm.
            </p>
            <p className="text-sm text-gray-400">
              Born in Glasgow - Built for Scotland
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#how-laura-works" className="text-gray-300 hover:text-amber-400 transition-colors">How Laura Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-amber-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="mailto:kyle@agencyeagleeye.com" className="hover:text-amber-400 transition-colors">
                  kyle@agencyeagleeye.com
                </a>
              </p>
              <p className="text-gray-300">
                <a href="tel:+447883299579" className="hover:text-amber-400 transition-colors">
                  07883 299 579
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Direct founder contact - no sales team
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Agency Eagle Eye. Built specifically for Scottish estate agents.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
