
import { Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { EagleButton } from "./ui/eagle-button";
import eagleEyeLogo from "/lovable-uploads/33a6f5a7-7d2c-48db-89fa-7230cda0aeec.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-eagle-dark/90 border-t border-white/10 pt-12 pb-6 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Section */}
        <div className="mb-16 max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-eagle-blue/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Brokerage?</h2>
          <p className="text-lg mb-6">Book a 30-minute strategy session to see Eagle Eye in action. Limited spots available.</p>
          
          <a 
            href="https://calendly.com/weareagencyeagleeye/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <EagleButton className="uppercase font-bold group">
              Claim Your Free Demo
              <span className="ml-2 group-hover:ml-3 transition-all">→</span>
            </EagleButton>
          </a>
          
          <p className="mt-4 text-sm text-red-400 font-medium">Only 3 implementations available this month!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={eagleEyeLogo} alt="Eagle Eye Logo" className="h-10 mr-2" />
              <h3 className="text-xl font-bold">Eagle Eye AI</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI infrastructure for CRE brokers handling $3M-$20M deals. We help you close more off-market deals with less admin work through intelligent automation and mobile-first design.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://www.facebook.com/profile.php?id=61575035972691" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/kyle-holland-agencyeagleeye/" />
              <SocialIcon icon={<Youtube size={20} />} href="#" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#problem">The Problem</FooterLink>
              <FooterLink href="#solution">Our Solution</FooterLink>
              <FooterLink href="#benefits">Benefits</FooterLink>
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Eagle Eye AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterLink href="#privacy">Privacy</FooterLink>
            <FooterLink href="#terms">Terms</FooterLink>
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
  icon: React.ReactNode;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 hover:bg-white/10 text-white p-2 rounded-full inline-flex transition-colors"
      aria-label="Social media"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const FooterLink = ({ href, children, target }: FooterLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
