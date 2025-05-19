
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-eagle-dark text-white pt-12 pb-6 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Section */}
        <div className="mb-16 max-w-3xl mx-auto text-center bg-eagle-gold/10 backdrop-blur-sm rounded-lg p-8 border border-eagle-gold/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Only 2 Spots Left—Claim Your Free Profit Blueprint!</h2>
          <p className="text-lg mb-6">Book a 30-minute strategy session to see the Eagle Eye Profit Maximizer in action. Limited spots available.</p>
          
          <Button 
            asChild
            className="bg-eagle-gold text-eagle-dark hover:bg-eagle-gold/90 uppercase font-semibold px-8 py-6"
          >
            <a 
              href="https://calendly.com/agencyeagleeye/profit-blueprint" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              Book Now
              <span className="ml-2 group-hover:ml-3 transition-all">→</span>
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={eagleEyeLogo} alt="Eagle Eye Logo" className="h-10 mr-2" />
              <h3 className="text-xl font-bold">Eagle Eye AI</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI infrastructure for Florida CRE brokers handling $3M-$10M deals. We help you close more deals with less admin work through intelligent automation and mobile-first design.
            </p>
            <div className="flex space-x-4">
              <SocialIcon 
                href="https://www.linkedin.com/in/kyle-holland-agencyeagleeye/" 
                ariaLabel="LinkedIn"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon 
                href="https://t.me/AgencyEagleEye" 
                ariaLabel="Telegram"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Site Map</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/profit-maximizer">Profit Maximizer</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink href="https://calendly.com/agencyeagleeye/profit-blueprint" external>Book Demo</FooterLink>
              <FooterLink href="mailto:kyle@agencyeagleeye.com" external>Contact</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Agency Eagle Eye. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/terms">Terms</FooterLink>
            <button
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}

const SocialIcon = ({ href, children, ariaLabel }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-eagle-gold hover:text-eagle-dark transition-all"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

interface FooterLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  external?: boolean;
}

const FooterLink = ({ to, href, children, external = false }: FooterLinkProps) => {
  if (external && href) {
    return (
      <li>
        <a
          href={href}
          className="text-gray-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        to={to || "/"}
        className="text-gray-300 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
